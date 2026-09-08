#!/usr/bin/env python3
"""Auswertung eines crawl.py-Ergebnisses: Status, Broken Inlinks, Orphans."""
import json, sys, collections

data = json.load(open(sys.argv[1]))
pages = data["pages"]
inlinks = data["inlinks"]
sitemap = set(data["sitemap"])

status_counter = collections.Counter()
for p, d in pages.items():
    s = d["status"]
    bucket = "2xx" if 200 <= s < 300 else "3xx" if 300 <= s < 400 else "4xx" if 400 <= s < 500 else "5xx" if s >= 500 else "err"
    status_counter[bucket] += 1

bad = {p: d for p, d in pages.items() if d["status"] >= 400 or d["status"] == 0}
broken_edges = []
broken_occurrences = 0
for src, d in pages.items():
    if d["status"] != 200:
        continue
    for tgt in d["links"]:
        if tgt in bad:
            broken_edges.append((src, tgt))
            broken_occurrences += d.get("link_occurrences", {}).get(tgt, 1)

# Orphans: 200 + im Sitemap + keine href-Inlinks
orphans = [p for p, d in pages.items()
           if d["status"] == 200 and p in sitemap and not inlinks.get(p)]


def bucket(path: str) -> str:
    seg = path.strip("/").split("/")
    if seg == [""]:
        return "(home)"
    if seg[0] == "lodges" and len(seg) >= 3:
        return "lodges/<region>/<slug>"
    if seg[0] == "tour-operators" and len(seg) >= 2:
        return "tour-operators/<slug>"
    if seg[0] == "regions" and len(seg) >= 2:
        return "regions/<slug>"
    if seg[0] == "compare" and len(seg) >= 2:
        return "compare/<slugs>"
    if seg[0] == "blog" and len(seg) >= 2:
        return "blog/<slug>"
    if seg[0] == "itineraries" and len(seg) >= 2:
        return "itineraries/<slug>"
    if len(seg) == 1:
        return "guide/editorial (top level)"
    return "/".join(seg[:1]) + "/*"


print(f"BASE {data['base']}   crawled {data['crawled_at']}")
print(f"INTERNAL_URLS: {len(pages)}")
for k in ("2xx", "3xx", "4xx", "5xx", "err"):
    if status_counter[k]:
        print(f"  {k}: {status_counter[k]}")
print(f"SITEMAP_URLS: {len(sitemap)}")
print(f"4XX_TARGETS: {len(bad)}")
print(f"BROKEN_INTERNAL_LINKS (unique src->target): {len(broken_edges)}")
print(f"BROKEN_INTERNAL_LINKS (alle <a>-Vorkommen): {broken_occurrences}")
print(f"ORPHANS (200, in sitemap, 0 href inlinks): {len(orphans)}")
print("\nORPHANS_BY_TYPE:")
for k, v in collections.Counter(bucket(p) for p in orphans).most_common():
    print(f"  {v:5d}  {k}")
print("\n4XX TARGETS (inlink edges, sources):")
edge_by_target = collections.defaultdict(list)
for s, t in broken_edges:
    edge_by_target[t].append(s)
for t, srcs in sorted(edge_by_target.items(), key=lambda kv: -len(kv[1])):
    print(f"  [{pages[t]['status']}] {t}  <- {len(srcs)} links")
    for s in sorted(srcs)[:6]:
        print(f"        {s}")
    if len(srcs) > 6:
        print(f"        ... +{len(srcs)-6} more")
orphan_bad = [t for t in bad if t not in edge_by_target]
if orphan_bad:
    print("\n4XX ohne interne Links:", orphan_bad)

# Sitemap-Hygiene
noindex = [p for p in sitemap if p in pages and "noindex" in pages[p]["robots"].lower()]
noncanon = []
for p in sitemap:
    d = pages.get(p)
    if not d or d["status"] != 200 or not d["canonical"]:
        continue
    c = d["canonical"].replace(data["base"], "")
    c = c if c else "/"
    if len(c) > 1:
        c = c.rstrip("/")
    if c != p:
        noncanon.append((p, d["canonical"]))
missing_from_sitemap = [p for p in sitemap if p not in pages or pages[p]["status"] != 200]
print(f"\nSITEMAP_NOINDEX: {len(noindex)} {noindex[:10]}")
print(f"SITEMAP_NON_CANONICAL: {len(noncanon)}")
for p, c in noncanon[:10]:
    print(f"   {p} -> {c}")
print(f"SITEMAP_URLS_NOT_200: {len(missing_from_sitemap)} {missing_from_sitemap[:10]}")
