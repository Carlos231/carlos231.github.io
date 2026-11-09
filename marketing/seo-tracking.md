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
- Sitemaps: `/sitemap.xml` shows "Sitemap could not be read", last read 2026-10-27, 0 discovered. The live sitemap returns 200, `application/xml`, and is valid XML (checked 2026-11-08). Owner: remove and resubmit it, and test it with URL Inspection → Test live URL.
- New pages to request indexing for once (after they deploy): golf-caddie-vs-arccos, golf-app-prices-compared, how-to-find-your-club-distances, and the guides index `/apps/golf-caddie/guides/`.
