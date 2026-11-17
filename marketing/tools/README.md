# Site tools

Working files, never published (`marketing/` is excluded in `_config.yml`). They reproduce the checks used for the 2026-11-14 redesign, so every new page is built and checked the same way. Nothing here is a site dependency: gems and the one npm package install into a temp folder (`GC_TOOLS_TMP`, default `$TMPDIR/golf-caddie-tools`).

Needs: Homebrew Ruby (`brew install ruby`; the macOS system Ruby is too old), Node, and Chrome or Edge.

One-time setup for the image and screenshot scripts:

```sh
T="${GC_TOOLS_TMP:-$TMPDIR/golf-caddie-tools}"; mkdir -p "$T/node" && cd "$T/node" && npm init -y && npm i puppeteer-core
```

## Before committing a new or changed page

```sh
SITE=$(marketing/tools/build-local.sh)                 # 1. build with Jekyll 3.10, like GitHub Pages
node marketing/tools/og-image.mjs                      # 2. social image for any guide that lacks one (then rebuild)
python3 marketing/tools/check-site.py "$SITE"          # 3. links, anchors, JSON-LD, download boxes, index, inbound links
(cd "$SITE" && python3 -m http.server 4173 --bind 127.0.0.1 &)   # 4. serve it
node marketing/tools/screenshots.mjs after http://127.0.0.1:4173 guide=/apps/golf-caddie/guides/<slug>/
pkill -f "http.server 4173"                            # 5. stop the server
```

Look at the screenshots (phone and desktop) before committing. `check-site.py` exits with an error if anything fails.

| File | What it does |
|---|---|
| `build-local.sh` | Builds the site into the temp folder and prints the path. Installs Jekyll there on first run. |
| `check-site.py` | Checks the built site: broken links and anchors, structured data, rendered `TODO(owner)` text, one inline download box and one badge per guide, the guides campaign link, social images, guides index membership, and at least 3 links from other guides. Warns on title and description length and on battery claims outside the battery guide. |
| `og-image.mjs` | Makes `assets/og/<slug>.png` (1200x630) from each guide's title. `--all` regenerates every image. |
| `screenshots.mjs` | Phone (390px) and desktop (1440px) screenshots into `marketing/screenshots/<date>/`, and flags pages that scroll sideways. |
| `browser.mjs` | Shared helper that finds the browser and loads puppeteer-core from the temp folder. |
