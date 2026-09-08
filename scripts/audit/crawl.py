#!/usr/bin/env python3
"""Minimaler Link-Graph-Crawler fuer Audit/Regressionstests.

Nutzung: crawl.py <base-url> <out.json> [--max N]

Crawlt BFS ab Homepage + sitemap.xml, sammelt fuer jede interne URL:
Status, Titel, ausgehende interne Links, eingehende href-Links.
"""
import json, re, sys, threading, queue, time
from collections import Counter
from urllib.parse import urljoin, urlsplit, urlunsplit
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

BASE = sys.argv[1].rstrip("/")
OUT = sys.argv[2]
MAX = 100000
if "--max" in sys.argv:
    MAX = int(sys.argv[sys.argv.index("--max") + 1])
HOST = urlsplit(BASE).netloc
# Zusaetzliche Hosts, die als "intern" gelten (z.B. Produktions-Host beim
# Crawl eines lokalen Builds, dessen Sitemap absolute Prod-URLs enthaelt).
ALIASES = {HOST}
if "--alias" in sys.argv:
    ALIASES |= {h.strip() for h in sys.argv[sys.argv.index("--alias") + 1].split(",") if h.strip()}
UA = "LodgesOfUgandaAudit/1.0 (internal link audit)"

HREF_RE = re.compile(r'<a\b[^>]*?href=["\']([^"\'#]+)', re.I)
TITLE_RE = re.compile(r"<title[^>]*>(.*?)</title>", re.I | re.S)
CANON_RE = re.compile(r'<link[^>]+rel=["\']canonical["\'][^>]*>', re.I)
HREF_ATTR_RE = re.compile(r'href=["\']([^"\']+)["\']', re.I)
ROBOTS_RE = re.compile(r'<meta[^>]+name=["\']robots["\'][^>]*>', re.I)
CONTENT_RE = re.compile(r'content=["\']([^"\']+)["\']', re.I)

SKIP_EXT = (".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".pdf", ".ico",
            ".css", ".js", ".xml", ".txt", ".json", ".zip", ".mp4", ".avif")


def norm(u: str, page: str = "/") -> str | None:
    """Aufloesen relativ zur Seiten-URL (wie ein echter Browser/Crawler)."""
    if not u or u.startswith(("mailto:", "tel:", "javascript:", "data:", "whatsapp:")):
        return None
    s = urlsplit(urljoin(BASE + page, u))
    if s.netloc and s.netloc not in ALIASES:
        return None
    path = s.path or "/"
    if path.lower().endswith(SKIP_EXT):
        return None
    if len(path) > 1:
        path = path.rstrip("/")
    return urlunsplit(("", "", path, s.query, ""))


pages: dict[str, dict] = {}
lock = threading.Lock()
q: queue.Queue = queue.Queue()
seen: set[str] = set()


def enqueue(path: str):
    with lock:
        if path in seen or len(seen) >= MAX:
            return
        seen.add(path)
    q.put(path)


def fetch(path: str):
    url = BASE + path
    req = Request(url, headers={"User-Agent": UA, "Accept": "text/html"})
    try:
        with urlopen(req, timeout=45) as r:
            body = r.read(1_500_000).decode("utf-8", "replace")
            return r.status, body, r.geturl()
    except HTTPError as e:
        try:
            e.read()
        except Exception:
            pass
        return e.code, "", url
    except (URLError, TimeoutError, OSError) as e:
        return 0, f"ERR {e}", url


def worker():
    while True:
        try:
            path = q.get(timeout=5)
        except queue.Empty:
            return
        status, body, final = fetch(path)
        links = []
        title = ""
        canonical = ""
        robots = ""
        if status == 200 and body:
            title_m = TITLE_RE.search(body)
            title = re.sub(r"\s+", " ", title_m.group(1)).strip() if title_m else ""
            cm = CANON_RE.search(body)
            if cm:
                hm = HREF_ATTR_RE.search(cm.group(0))
                canonical = hm.group(1) if hm else ""
            rm = ROBOTS_RE.search(body)
            if rm:
                cm2 = CONTENT_RE.search(rm.group(0))
                robots = cm2.group(1) if cm2 else ""
            raw = HREF_RE.findall(body)
            for href in raw:
                n = norm(href, path)
                if n:
                    links.append(n)
        with lock:
            pages[path] = {
                "status": status,
                "title": title,
                "canonical": canonical,
                "robots": robots,
                "links": sorted(set(links)),
                "link_occurrences": dict(Counter(links)),
                "raw_link_count": len(links),
                "final": final if final != BASE + path else "",
            }
        for n in set(links):
            enqueue(n)
        q.task_done()


# Seeds: Homepage + Sitemap
enqueue("/")
try:
    req = Request(BASE + "/sitemap.xml", headers={"User-Agent": UA})
    with urlopen(req, timeout=60) as r:
        xml = r.read().decode("utf-8", "replace")
    sitemap_urls = re.findall(r"<loc>([^<]+)</loc>", xml)
except Exception as e:
    print("sitemap fetch failed:", e)
    sitemap_urls = []

sitemap_paths = set()
for u in sitemap_urls:
    n = norm(u)
    if n:
        sitemap_paths.add(n)
        enqueue(n)
print(f"seeds: {len(sitemap_paths)} sitemap urls")

threads = [threading.Thread(target=worker, daemon=True) for _ in range(10)]
t0 = time.time()
for t in threads:
    t.start()
last = 0
while any(t.is_alive() for t in threads):
    time.sleep(3)
    n = len(pages)
    if n != last:
        print(f"  {n} crawled / {len(seen)} known", flush=True)
        last = n
for t in threads:
    t.join()

# Inlinks
inlinks: dict[str, list[str]] = {p: [] for p in pages}
for src, d in pages.items():
    if d["status"] != 200:
        continue
    for tgt in d["links"]:
        inlinks.setdefault(tgt, []).append(src)

result = {
    "base": BASE,
    "crawled_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
    "duration_s": round(time.time() - t0, 1),
    "sitemap": sorted(sitemap_paths),
    "pages": pages,
    "inlinks": {k: sorted(set(v)) for k, v in inlinks.items()},
}
with open(OUT, "w") as f:
    json.dump(result, f, indent=1)
print(f"done: {len(pages)} pages in {result['duration_s']}s -> {OUT}")
