# SEO tracking: Golf Caddie

Working file, never published (`marketing/` is excluded in `_config.yml`). Follows the seo-audit skill's rankings push (`.claude/skills/seo-audit/references/rankings-push.md`): record the starting point, wait 3–4 weeks, then judge. Don't stack changes on a page inside that window.

## Search Console baseline (exported 2026-11-08, last 3 months, web)

Site total: 2 clicks, about 80 impressions. Too thin for striking-distance pushes (the skill's floor is about 100 impressions a month per page). Re-pull on **2026-12-06** and compare.

| Page | Clicks | Impressions | Position | Changed 2026-11-08 |
|---|---|---|---|---|
| /apps/golf-caddie/ | 1 | 10 | 6.2 | Title, meta, hero, "Why I built" section (PR #13) |
| / (home) | 0 | 22 | 7.8 | Meta description, guides index link |
| /guides/how-to-track-putts/ | 0 | 18 | 9.6 | Title: "How to Track Putts in Golf: What Counts \| Golf Caddie" |
| /guides/golf-caddie-vs-18birdies/ | 0 | 14 | 17.3 | Link to the prices guide |
| /guides/golf-scorecard-app-without-subscription/ | 0 | 6 | 17.3 | Links to the prices and Arccos guides |
| /guides/how-to-keep-score-in-golf/ | 1 | 4 | 6.0 | Download box |
| /guides/keep-score-in-golf-with-siri/ | 0 | 4 | 5.3 | Description (147 → 159 characters) |
| /guides/golf-scorecard-app-no-account/ | 0 | 3 | 6.3 | Download box |

Queries with impressions: "carlos app" (4, pos 4.8), "18birdies" (4, pos 6), "how to track putts per round?" (1, pos 8), "does 18birdies cost money" (1, pos 67). Watch "putts per round" and "18birdies cost" next time: if they grow, the putts title and the 18Birdies/prices pages are the candidates.

## Indexing (Search Console, as of 2026-11-08)

- Pages report (data through 2026-10-22): 5 indexed, 3 "Crawled - currently not indexed": the no-account guide, the putts guide (both crawled 2026-10-19), and `sitemap.xml` itself (normal; a sitemap isn't a page). Both guides now have impressions, so they're indexed; the report lags. Validation started.
- Sitemaps: `/sitemap.xml` shows "Sitemap could not be read", last read 2026-10-27, 0 discovered. The live sitemap returns 200, `application/xml`, and is valid XML (checked 2026-11-08). Owner: remove and resubmit it, and test it with URL Inspection → Test live URL. URL Inspection (2026-11-08) shows the sitemap was fetched successfully on 2026-10-30, so the error is likely stale from the 10-27 read. Google also lists `sitemap.xml` as an indexed page; that's harmless, and GitHub Pages can't send the header that would stop it.
- New pages to request indexing for once (after they deploy): golf-caddie-vs-arccos, golf-app-prices-compared, how-to-find-your-club-distances, and the guides index `/apps/golf-caddie/guides/`.

## After the landing redesign (branch `landing-redesign`, 2026-11-14)

Changes that affect measurement: new home page (iPhone stroke counter) and app page (Apple Watch, pay once), a new help page, the without-iPhone guide merged into the without-GPS guide (old URL redirects), trimmed prices and comparison guides, and a second campaign token (`ct=Guides`) on guide pages. This resets the 2026-11-08 baseline for the home and app pages.

**Request indexing once each, after deploy** (URL Inspection, in this order):
1. `https://carlos231.github.io/` (rewritten)
2. `https://carlos231.github.io/apps/golf-caddie/` (rewritten)
3. `https://carlos231.github.io/apps/golf-caddie/guides/apple-watch-golf-scorecard-without-gps/` (now holds the merged content)
4. `https://carlos231.github.io/apps/golf-caddie/help/` (new)
5. `https://carlos231.github.io/apps/golf-caddie/guides/golf-app-prices-compared/` (trimmed)

Also inspect the old URL `/apps/golf-caddie/guides/apple-watch-golf-without-iphone/` once, to confirm Google sees the redirect and canonical.

**Measure for 4 to 8 weeks** (check every two weeks; first check 2026-11-28, decide on 2026-12-12 to 2027-01-09):

| What | Where | Baseline (2026-11-08 to 11-14) | Looking for |
|---|---|---|---|
| Pages indexed vs "Crawled - currently not indexed" | Search Console → Indexing → Pages | Owner: most pages not indexed. TODO(owner): record the two counts on deploy day | Indexed count rising; the five URLs above indexed |
| Impressions and clicks per page | Search Console → Performance → Pages | About 80 impressions and 2 clicks in 3 months | Home page showing for "stroke counter" and "putt counter" queries; app page for "scorecard" and "apple watch" queries, without the two swapping |
| Taps on App Store links per page | GoatCounter events (`app-store-*`), once `goatcounter_code` is set | None (no analytics before) | Which page and which button placement gets taps; tap rate per page view |
| Downloads from the site | App Store Connect → Analytics → Acquisition → Campaigns (`Website`, `Guides`) | "Not Enough Data" | Either campaign passing Apple's 5-download threshold |
| Product page conversion | App Store Connect → Analytics → Acquisition | 69 first-time downloads from 408 product page views in the period shared 2026-11-08 | Conversion holding or rising as site traffic grows |
| Referring sites | Search Console → Links; GoatCounter referrers | App Store listing only | Each directory or forum post that sends a visitor |

Decision rule: if indexed pages have not grown by the 8-week mark, the cause is authority, not content. Stop editing pages and put all effort into links.
