#!/usr/bin/env python3
"""Check a locally built copy of the site (run build-local.sh first).

Usage: python3 marketing/tools/check-site.py <built-site-folder>

Fails (exit 1) on: broken internal links or anchors, invalid JSON-LD, TODO(owner) text that rendered,
a guide without exactly one inline download box and one App Store badge, a missing social image,
a guide missing from the guides index, or a guide linked from fewer than 3 other guides.
Warns on: title outside 50-60 characters, description outside 150-160, battery claims outside the battery guide.
"""
import json, os, re, sys

root = sys.argv[1].rstrip('/')
G = '/apps/golf-caddie/guides/'
pages = [os.path.join(d, f) for d, _, fs in os.walk(root) for f in fs if f.endswith('.html')]
html = {p: open(p, encoding='utf-8').read() for p in pages}
ids = {p: set(re.findall(r'id="([^"]+)"', t)) for p, t in html.items()}

def target(url):
    url = url.split('#')[0].split('?')[0]
    for cand in (root + url, root + url.rstrip('/') + '/index.html', root + url + '.html'):
        if os.path.isfile(cand):
            return cand
    return None

fails, warns = [], []
is_redirect = lambda t: 'http-equiv="refresh"' in t
guides = {}
for p, t in sorted(html.items()):
    rel = p[len(root):]
    if is_redirect(t):
        continue
    for href in set(re.findall(r'(?:href|src)="(/[^/"][^"]*|/)"', t)):
        tp = target(href)
        if not tp:
            fails.append(f'broken link on {rel}: {href}')
        elif '#' in href and href.split('#', 1)[1] and tp.endswith('.html') and href.split('#', 1)[1] not in ids.get(tp, ()):
            fails.append(f'missing anchor on {rel}: {href}')
    for blk in re.findall(r'<script type="application/ld\+json">([\s\S]*?)</script>', t):
        try:
            json.loads(blk)
        except ValueError as e:
            fails.append(f'invalid JSON-LD on {rel}: {str(e)[:60]}')
    if 'TODO(owner)' in t:
        fails.append(f'TODO(owner) rendered on {rel} (wrap it in a Liquid comment)')
    if rel.endswith('404.html') or 'name="robots" content="noindex"' in t:
        continue
    title = re.search(r'<title>(.*?)</title>', t, re.S)
    desc = re.search(r'<meta name="description" content="([^"]*)"', t)
    if title and not 45 <= len(title.group(1).strip()) <= 60:
        warns.append(f'title is {len(title.group(1).strip())} characters on {rel}')
    if desc and not 150 <= len(desc.group(1)) <= 160 and '/privacy' not in rel:
        warns.append(f'description is {len(desc.group(1))} characters on {rel}')
    h1s = len(re.findall(r'<h1[\s>]', t))
    if h1s != 1:
        fails.append(f'{h1s} H1s on {rel}')
    if t.count('app-store-badge.svg') > 1:
        fails.append(f'more than one App Store badge on {rel}')
    og = re.search(r'property="og:image" content="https?://[^/]+(/[^"]+)"', t)
    if not og or not target(og.group(1)):
        fails.append(f'social image missing on {rel}')
    if re.search(r'(?i)last(s)? all 18|built to last|lasts your whole round', t) and 'battery' not in rel:
        warns.append(f'battery claim outside the battery guide on {rel}')
    m = re.match(r'^' + re.escape(G) + r'([a-z0-9-]+)/index\.html$', rel)
    if m:
        guides[m.group(1)] = t

index_html = html.get(root + G + 'index.html', '')
more = index_html.split('More guides', 1)[1] if 'More guides' in index_html else ''
for slug, t in sorted(guides.items()):
    url = G + slug + '/'
    boxes = t.count('class="cta cta-inline"')
    if boxes != 1:
        fails.append(f'guide {slug}: expected 1 inline download box, found {boxes}')
    if t.count('app-store-badge.svg') != 1:
        fails.append(f'guide {slug}: expected 1 App Store badge, found {t.count("app-store-badge.svg")}')
    if 'ct=Website' in t:
        fails.append(f'guide {slug}: uses the site campaign link; guides use urls.download_guides')
    if url not in index_html:
        fails.append(f'guide {slug}: not listed on the guides index')
    elif url in more:
        warns.append(f'guide {slug}: under "More guides"; add its slug to a topic group in guides/index.html')
    inbound = sum(1 for s, o in guides.items() if s != slug and f'href="{url}' in o)
    if inbound < 3:
        fails.append(f'guide {slug}: linked from {inbound} other guides (need 3)')

for w in warns:
    print('warn:', w)
for f in fails:
    print('FAIL:', f)
print(f'{len(html)} pages, {len(guides)} guides, {len(fails)} failures, {len(warns)} warnings')
sys.exit(1 if fails else 0)
