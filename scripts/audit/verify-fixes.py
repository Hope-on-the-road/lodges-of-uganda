#!/usr/bin/env python3
"""Stichprobe: Quellseite -> echter href im HTML -> Zielseite HTTP 200.

Nutzung: verify-fixes.py <base-url>
"""
import re, sys
from urllib.request import Request, urlopen
from urllib.error import HTTPError

BASE = sys.argv[1].rstrip("/")
UA = {"User-Agent": "LodgesOfUgandaAudit/1.0", "Accept": "text/html"}

def get(path):
    try:
        with urlopen(Request(BASE + path, headers=UA), timeout=45) as r:
            return r.status, r.read(1_500_000).decode("utf-8", "replace")
    except HTTPError as e:
        return e.code, ""

def status(path):
    try:
        with urlopen(Request(BASE + path, headers=UA), timeout=45) as r:
            return r.status
    except HTTPError as e:
        return e.code

# (Quellseite, erwarteter href, Beschreibung)
CHECKS = [
    # --- reparierte 4xx-Muster
    ("/blog/rwakobo-rock", "/lodges/queen-elizabeth/rwakobo-rock", "Region-Slug-Drift"),
    ("/blog/bwindi-sectors-compared", "/lodges/queen-elizabeth/gorilla-mist-camp", "Region-Slug-Drift"),
    ("/blog/bwindi-sectors-compared", "/lodges/bwindi/ruhija-gorilla-safari-lodge", "Slug-Drift"),
    ("/itineraries/7-day-gorilla-safari", "/lodges/entebbe/karibu-guesthouse", "Slug-Drift"),
    ("/itineraries/7-day-gorilla-safari", "/lodges/queen-elizabeth/queen-elizabeth-bush-lodge", "Slug-Drift"),
    ("/itineraries/7-day-gorilla-safari", "/lodges/queen-elizabeth/enjojo-lodge", "Region-Slug-Drift"),
    ("/itineraries/7-day-gorilla-safari", "/lodges/bwindi/lake-bunyonyi-overland-resort", "Region-Slug-Drift"),
    ("/itineraries/7-day-gorilla-safari", "/lodges/bwindi/birdnest-resort-lake-bunyonyi", "Region-Slug-Drift"),
    ("/itineraries/10-day-primates-wildlife", "/lodges/queen-elizabeth/kyaninga-lodge", "Region-Slug-Drift"),
    ("/itineraries/14-day-complete-uganda", "/lodges/queen-elizabeth/papaya-lake-lodge", "Region-Slug-Drift"),
    ("/blog/best-lodges-near-entebbe-airport", "/regions/entebbe", "falscher Region-Slug"),
    ("/blog/uganda-vs-tanzania-safari-comparison", "/uganda-vs-rwanda-gorilla-trekking", "falsches URL-Praefix"),
    # --- externe URLs jetzt absolut (kein interner 404 mehr)
    ("/lodges/murchison-falls/chobe-safari-lodge", "https://www.marasa.net", "externe URL normalisiert"),
    ("/lodges/queen-elizabeth/mweya-safari-lodge", "https://www.marasa.net", "externe URL normalisiert"),
    ("/compare/chobe-safari-lodge-vs-katara-lodge", "https://www.marasa.net", "externe URL normalisiert"),
    ("/tour-operators/mystic-adventures", "https://mysticadventuresug.com", "externe URL normalisiert"),
    # --- Discovery-Pfad
    ("/tour-operators", "/tour-operators/page/2", "crawlbare Pagination"),
    ("/tour-operators", "/tour-operators/page/14", "crawlbare Pagination"),
    ("/tour-operators/page/14", "/tour-operators/page/7", "Pagination quervernetzt"),
    ("/", "/for-lodges", "Footer-Link B2B"),
]

# Muster, die NICHT mehr im HTML auftauchen duerfen
FORBIDDEN = [
    ("/blog/rwakobo-rock", 'href="/lodges/lake-mburo/rwakobo-rock"'),
    ("/accommodation-guides", 'href="/activities"'),
    ("/accommodation-guides", 'href="/destinations"'),
    ("/accommodation-guides", 'href="/travel-planning"'),
    ("/accommodation-guides", 'href="/practical-information"'),
    ("/lodges/murchison-falls/chobe-safari-lodge", 'href="www.marasa.net"'),
]

fails = 0
cache = {}
print(f"BASE {BASE}\n")
print("Quellseite -> href -> Ziel")
for src, href, note in CHECKS:
    if src not in cache:
        cache[src] = get(src)
    src_status, html = cache[src]
    present = f'href="{href}"' in html
    tgt = "extern" if href.startswith("http") else status(href)
    ok = src_status == 200 and present and (tgt in (200, "extern"))
    fails += 0 if ok else 1
    print(f"  {'PASS' if ok else 'FAIL'}  [{src_status}] {src}  ->  {href}  [{tgt}]   ({note})")

print("\nEntfernte 404-Muster:")
for src, pat in FORBIDDEN:
    if src not in cache:
        cache[src] = get(src)
    _, html = cache[src]
    ok = pat not in html
    fails += 0 if ok else 1
    print(f"  {'PASS' if ok else 'FAIL'}  {src}  enthaelt kein  {pat}")

# Stichprobe Detailseiten
print("\nStichprobe Detailseiten (HTTP-Status):")
SAMPLES = [
    "/lodges/bwindi/mahogany-springs-safari-lodge", "/lodges/bwindi/buhoma-lodge",
    "/lodges/queen-elizabeth/mweya-safari-lodge", "/lodges/queen-elizabeth/rwakobo-rock",
    "/lodges/murchison-falls/chobe-safari-lodge", "/lodges/entebbe/karibu-guesthouse",
    "/lodges/kibale/primate-lodge-kibale", "/lodges/jinja/wildwaters-lodge",
    "/lodges/lake-mburo/mihingo-lodge", "/lodges/bwindi/ruhija-gorilla-safari-lodge",
    "/tour-operators/best-of-africa-adventures-limited",
    "/tour-operators/pearl-nature-holidays-and-safaris",
    "/tour-operators/mystic-adventures", "/tour-operators/adventure-consults",
    "/tour-operators/wild-jungle-trails-limited",
    "/accommodation-guides", "/bwindi", "/blog/bwindi-sectors-compared",
    "/itineraries/7-day-gorilla-safari", "/uganda-vs-rwanda-gorilla-trekking",
]
for p in SAMPLES:
    st = status(p)
    fails += 0 if st == 200 else 1
    print(f"  {'PASS' if st == 200 else 'FAIL'}  [{st}] {p}")

print(f"\n{'ALL PASS' if fails == 0 else f'{fails} FAIL(S)'}")
sys.exit(1 if fails else 0)
