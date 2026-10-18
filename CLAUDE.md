# Golf Caddie marketing site

Jekyll site on GitHub Pages (https://carlos231.github.io) marketing the iOS + watchOS app "Golf Caddie - Simple Scorecard" (App Store ID 6760603837). Goal: organic traffic from Google, Bing, and AI answer engines. No paid ads.

## Before any marketing task
- Read `.agents/product-marketing.md` first (positioning, voice, objections, learnings).

## Facts
- Never invent facts, features, reviews, ratings, testimonials, or stats. If a fact isn't in a source, ask.
- The single source of truth for app facts (IDs, URLs, prices, requirements, free/Pro features) is `_data/golf_caddie.yml`. Pages, schema, and `llms.txt` render from it; don't hardcode these values.
- Never add `aggregateRating` or review markup to schema.
- Keep the App Store campaign link exactly as it is in the data file (`pt=128660093&ct=Website`). Don't change the token or the case of `ct`.

## Release gating
- Never advertise a feature that isn't live on the App Store. Check the live version first: `https://itunes.apple.com/lookup?id=6760603837&country=us`.
- Don't merge to `main` before the matching app release ships. Never push to `main`; push feature branches only, and only when asked.

## Working style
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
