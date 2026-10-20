# Golf Caddie marketing runbook: what to do and when

Working file, never published. How to commit is in [CONTRIBUTING.md](../CONTRIBUTING.md).
Say the phrase in **bold quotes** to Claude Code to run a step for you.

---

## Merge day (now): put the SEO setup live

Why now: Search Console can only index what's live. Unreleased v1.5.3 features (CSV export, copy options) stay hidden by `upcoming_version: "1.5.3"` in `_data/golf_caddie.yml`, so merging doesn't wait for the release.

1. **One-time:** turn on the commit hook: `git config core.hooksPath .githooks`
2. Commit the pending changes on `seo-setup` (see CONTRIBUTING.md), then push: `git push origin seo-setup`
3. On GitHub, open a pull request **seo-setup → main** and merge it.
4. Do **After every merge** (below).
5. Search Console:
   - **Sitemaps** → submit `https://carlos231.github.io/sitemap.xml`. **Once, ever.** Google re-reads it on its own, and new guides are added to it automatically.
   - **URL Inspection** → request indexing for `/`, `/apps/golf-caddie/`, `/apps/golf-caddie/privacy`, and the first guide. This speeds up the first crawl.
6. If the **IndexNow** workflow didn't start on its own after the deploy: Actions → IndexNow → **Run workflow** on `main` (submits every URL in the sitemap).

## This week (one-time, about 30 minutes)

- [ ] **Bing Webmaster Tools** (bing.com/webmasters): add the site with "Import from Google Search Console", then submit the sitemap. Bing also feeds Copilot and ChatGPT search.
- [ ] **App Store Connect:** set the app's Marketing URL to `https://carlos231.github.io/apps/golf-caddie/`.
- [ ] **AI visibility baseline:** fill in the first table in [ai-visibility.md](ai-visibility.md). Do it before the new guides go live so you have a "before".
- [ ] Optional: install the GitHub CLI (`brew install gh`, then `gh auth login`) so the weekly run can read check results and open pull requests itself.

## After every merge (5 minutes)

- [ ] GitHub → **Actions**: `pages build and deployment` ✓, then `SEO checks` ✓ (lychee must pass; Lighthouse scores are in the run summary), then `IndexNow` ✓ (log says 200 or 202).
- [ ] Open the changed page on your phone: layout, download button, pricing table.
- [ ] Optional: new or changed page → Search Console → URL Inspection → **Request indexing**. Worth the minute while the site is new (first few months). Later, skip it: the sitemap, the automatic Guides list on the app page, and IndexNow (Bing and others) get new pages found without you.
- [ ] New or changed schema: run the page through the [Rich Results Test](https://search.google.com/test/rich-results). "No aggregateRating" warnings are expected; we never add ratings.
- [ ] Local copy: `git switch main && git pull`

## Release day (when the App Store shows a version the site prepared)

The commit hook says "v<version> is live on the App Store" once it's time. Last done: v1.5.3 on 2026-10-19.

1. **"v<version> is live, run release-update"**. It flips `_data/golf_caddie.yml` (`app_version` = the new version, `upcoming_version` = ""), removes the hidden-content wrappers, and updates `last_modified_at`. Or, for a quick flip by hand, change just those two values on a new branch.
2. Pull request → merge → **After every merge**.
3. Optional: request indexing for `/apps/golf-caddie/` and any other page that changed.

## Every future app release

- **Before it ships** (optional, so the site is ready): **"Prepare the site for v1.6 with these release notes: …"**. New features are added hidden (`since: "1.6"`, `upcoming_version: "1.6"`) and can merge right away.
- **When it's live:** **"v1.6 is live, run release-update"** for the flip, then **After every merge**.

## Weekly (pick a day, e.g. Monday, about 30–45 minutes of your time)

1. **"Run the weekly"**. Claude reviews the SEO check results, refills [content-backlog.md](../content-backlog.md), drafts 2–3 guides, writes `social/week-NN.md`, and opens a pull request.
2. Review the pull request: facts, competitor claims, and whether it sounds like you. Ask for changes or edit directly.
3. Merge → **After every merge**.
4. Post one social post a day from `social/week-NN.md` (X, Threads, Instagram/TikTok). Film the video hook when it's a good golf day. Reply to comments.

## Monthly (first Monday)

- [ ] Run the 15 prompts in [ai-visibility.md](ai-visibility.md) and fill in the month's table.
- [ ] Search Console → Performance (last 28 days): note queries with impressions. Queries at positions 8–20 are the quickest wins. Tell Claude: **"Here are this month's Search Console queries, update the backlog"**.
- [ ] Bing Webmaster Tools: check for crawl errors.

## Quarterly

- [ ] **"Re-verify competitor facts on the comparison pages"**: prices and features change. Every claim needs an "as of" date.
- [ ] Review the Learnings table in `.agents/product-marketing.md`: retire what's stale, add what you've learned.
- [ ] Compare Lighthouse scores across the quarter's SEO check runs. Fix anything that slid.

## Every January

- [ ] Update the year in "best … (2026)" style titles and refresh the content behind them.
