# Golf Caddie marketing site

Jekyll site on GitHub Pages (https://carlos231.github.io) marketing the iOS + watchOS app "Golf Caddie - Simple Scorecard" (App Store ID 6760603837). Goal: organic traffic from Google, Bing, and AI answer engines. No paid ads.

## Before any marketing task
- Read `.agents/product-marketing.md` first (positioning, voice, objections, learnings).
- `marketing/runbook.md` is the owner's schedule (what to do and when). Keep it current when a process changes.
- `content-backlog.md` is the prioritized topic list.

## Facts
- Never invent facts, features, reviews, ratings, testimonials, or stats. If a fact isn't in a source, ask.
- The single source of truth for app facts (IDs, URLs, prices, requirements, free/Pro features) is `_data/golf_caddie.yml`. Pages, schema, and `llms.txt` render from it; don't hardcode these values.
- Never add `aggregateRating` or review markup to schema.
- The app's source code is at `/Users/carlos/Projects/GolfStrokeCounter` (read-only). Check app facts in its `README.md` and `REQUIREMENTS.md` first. Open the source only when the docs are silent or conflict with the data file (e.g. the README lists Apple Health under Pro, but Save Summary workouts are free per the source, checked 2026-10-18).
- Battery: not a lead point (owner, 2026-11-14). No battery claims outside the battery guide until the owner runs a measured test (see the TODO in that guide). The battery guide may keep the owner's first-hand note (their Apple Watch SE lasts 18 holes), with no percentages or lab-style claims.
- Positioning: use the ranked Key differentiators in `.agents/product-marketing.md` (Differentiation) and its say-it-once Learning. Every marketing skill reads that file first.
- Page jobs (don't blur them): `/` is the iPhone stroke and putt counter pitch; `/apps/golf-caddie/` is the Apple Watch and pay-once pitch with pricing; `/apps/golf-caddie/help/` is how-to and support. Keyword map in `content-backlog.md`.
- Mark anything that needs the owner's real content (screenshots, battery tests, user quotes) with a Liquid comment starting `TODO(owner):`, so it never renders. Find them with `grep -rn "TODO(owner)" .`.
- App Store campaign links live in the data file: `urls.download` (`pt=128660093&ct=Website`) for the home, app, and help pages, and `urls.download_guides` (`ct=Guides`) for guide pages. The Smart App Banner in `_includes/head-meta.html` uses the same two tokens. Don't change `pt`, the case of `ct`, or add more tokens without asking: App Analytics hides a campaign until it has 5 first-time downloads.
- Use Apple's official badge (`_includes/app-store-badge.html`, unmodified artwork) once per page; other download links are text buttons. App Store links carry `data-goatcounter-click` so analytics can count taps per page (GoatCounter loads only when `goatcounter_code` is set in `_config.yml`).
- Merged or removed pages get `redirect_from:` in the surviving page's front matter (jekyll-redirect-from).

## Release gating
- Never show a feature that isn't live on the App Store. Check the live version first: `https://itunes.apple.com/lookup?id=6760603837&country=us`.
- Unreleased features stay hidden behind `upcoming_version` in `_data/golf_caddie.yml`: tag data features with `since: "<version>"` and wrap page copy in `{% unless upcoming == "<version>" %}`. With that in place, `main` can merge before the release. Release day is a one-line flip (see `marketing/runbook.md`).
- Never push to `main`; push feature branches only, and only when asked. The user merges.
- The owner creates and switches branches. Work on the branch that's checked out; if it's `main`, ask for one before editing.

## Working style
- Format every page with the `seo-audit` skill's on-page rules: title 50–60 characters with the query first and brand last (`.claude/skills/seo-audit/references/title-tags.md`), meta description 150–160 characters with the query and a reason to click, one H1, query in the first 100 words, and one page per query (keyword map in `content-backlog.md`).
- New pages start from `apps/golf-caddie/guides/_template.md` and follow the new-guide checklist in `CONTRIBUTING.md`: one page per search, one inline download box, a social image, `TODO(owner)` markers for real content, at least 3 links in from other guides, and a slot in the guides index.
- Before committing, follow `CONTRIBUTING.md` (checklist + pre-commit hook in `.githooks/`), and build, check, and screenshot with `marketing/tools/` (`check-site.py` must report 0 failures; look at the phone and desktop screenshots).
- Commits: one concise single-line message per logical change. Commit only when asked. Running the `weekly-marketing` skill counts as asking to commit and push the checked-out weekly branch and open a PR (never merge).
- When reporting changes, summarize each file and link it. Don't paste full file contents into chat. Files themselves must always be complete (no "..." placeholders).
- Show before → after for any existing page copy you rewrite, before rewriting it.
- No mass-generated pages. Every page must be genuinely useful to a golfer.
- Free tooling only. Added CI time stays under 15 minutes. Ask before adding dependencies or changing CI.

## Unpublished working files
These must never be published. Keep them in `exclude:` in `_config.yml` (dot-folders like `.agents/`, `.claude/`, `.github/` are excluded by Jekyll automatically):
- `CLAUDE.md`, `CONTRIBUTING.md`
- `content-backlog.md`
- `social/`
- `marketing/`
- `skills-lock.json`
- `lighthouserc.json`, `lychee.toml`

## Checks
- `.github/workflows/seo-checks.yml`: Lighthouse (report only) + lychee link check on push to `main` and weekly.
- `.github/workflows/indexnow.yml`: pings IndexNow after each Pages deploy. The key file `305d6e064dde2291b2514a6ca5c7d4c7.txt` must stay published.
- `BingSiteAuth.xml` (repo root) verifies the site in Bing Webmaster Tools and must stay published. The home page's `google-site-verification` meta tag does the same for Google Search Console; keep it in `index.html`.
