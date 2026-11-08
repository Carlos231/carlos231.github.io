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
- Battery: state it only as the developer's first-hand experience. Golf Caddie lasts all 18 holes on the owner's Apple Watch SE (owner-confirmed 2026-11-08), and it runs no GPS. You may add that the SE has the shortest rated battery of Apple's current watches (SE 3 up to 18 hours, Series 12 up to 24, Ultra 4 up to 50, per apple.com/watch/battery, checked 2026-11-08), so newer Series and Ultra models have more to spare. Don't say it lasts longer on every watch: older models and worn batteries can do worse. No battery percentages or lab-style claims.
- Positioning: lead with why the app exists (a watch scorecard that lasts the round, with no social feed, GPS, AI, subscription, or complicated tracking). Details and the founder story are in `.agents/product-marketing.md`.
- Keep the App Store campaign link exactly as it is in the data file (`pt=128660093&ct=Website`). Don't change the token or the case of `ct`.

## Release gating
- Never show a feature that isn't live on the App Store. Check the live version first: `https://itunes.apple.com/lookup?id=6760603837&country=us`.
- Unreleased features stay hidden behind `upcoming_version` in `_data/golf_caddie.yml`: tag data features with `since: "<version>"` and wrap page copy in `{% unless upcoming == "<version>" %}`. With that in place, `main` can merge before the release. Release day is a one-line flip (see `marketing/runbook.md`).
- Never push to `main`; push feature branches only, and only when asked. The user merges.

## Working style
- Format every page with the `seo-audit` skill's on-page rules: title 50–60 characters with the query first and brand last (`.claude/skills/seo-audit/references/title-tags.md`), meta description 150–160 characters with the query and a reason to click, one H1, query in the first 100 words, and one page per query (keyword map in `content-backlog.md`).
- Before committing, follow `CONTRIBUTING.md` (checklist + pre-commit hook in `.githooks/`).
- Commits: one concise single-line message per logical change. Commit only when asked. Running the `weekly-marketing` skill counts as asking to commit and push its `weekly/` branch and open a PR (never merge).
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
