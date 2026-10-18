# AI visibility tracking: Golf Caddie

Working file, never published (`marketing/` is excluded in `_config.yml`).

**Question this answers:** when a golfer asks an AI assistant for a simple, subscription-free scorecard for iPhone or Apple Watch, does Golf Caddie get named, recommended, or cited, and who gets named instead?

**Portfolio version:** v1 (2026-10-18)

## How to run it (monthly, about 45 minutes)

1. Run on the first Monday of each month, in a private/incognito window, logged out where possible, US English.
2. Engines:
   - **ChatGPT**: chatgpt.com with search on.
   - **Perplexity**: perplexity.ai, default mode.
   - **Google AI**: google.com AI Overview. If no Overview shows, use AI Mode and note "AI Mode" in the cell.
3. Paste each prompt exactly as written. Run it **3 times per engine** (new chat each time). One run is noise; report the rate.
4. Fill in each cell with the best result across the 3 runs plus how often it happened:
   - `R 2/3`: **recommended**. Golf Caddie is on the shortlist or suggested as a good fit.
   - `M 1/3`: **mentioned**. Named, but not recommended (e.g. listed among many, or hedged).
   - `C 3/3`: **cited**. One of our pages is a source link, whether or not we're named.
   - Combine when both happen: `R+C 2/3`.
   - `–`: not mentioned in any of the 3 runs.
   - Add `!` if the answer states something wrong about Golf Caddie (price, features, platform). Log it under the month's notes.
5. **Cited competitor:** the apps named or recommended instead of us (most frequent first). This is the target list for comparison pages and third-party presence.
6. Compare months only on prompts that exist in both versions of the portfolio.

**Turning results into work:**
- **Wrong facts:** fix the page that should state the fact, then `_data/golf_caddie.yml` / `llms.txt` if needed.
- **Absent, but a competitor is cited:** open the sources the engine cited. Those are the pages and sites to beat (content gap) or get listed on (roundups, Reddit, review sites).
- **Mentioned but rarely recommended:** a consensus problem, not a content problem. Prioritize third-party mentions.
- **Brand prompts (#13, #14) show `–` or `!`:** the engines don't know the app yet. Check indexing in Search Console and Bing Webmaster Tools before anything else.

## Prompts (v1)

Planned guide pages are the ones in `content-backlog.md` (Phase 4).

| # | Prompt | Intent | Page that should answer it |
|---|---|---|---|
| 1 | What's the best simple golf scorecard app for Apple Watch? | Best for | App page; planned "best simple golf scorecard apps for Apple Watch" |
| 2 | Is there a golf app that just keeps score, without GPS or a subscription? | Category discovery | App page; planned "Apple Watch golf scorecard without GPS" |
| 3 | What's a good free golf scorecard app for iPhone? | Best for | App page (pricing) |
| 4 | Which golf score tracker apps don't make you create an account? | Best for | Planned "golf scorecard app with no account" |
| 5 | How can I keep score on my Apple Watch without taking my phone out on the course? | Problem / solution | App page (Apple Watch, Live Activity) |
| 6 | Can I use Siri to keep score during a round of golf? | Problem / solution | App page (Siri commands) |
| 7 | How do I track putts and penalties during a round on my iPhone? | How-to | Planned "how to track putts" guide |
| 8 | What's a cheaper alternative to Arccos if I only want to keep score? | Alternative | Planned "Golf Caddie vs Arccos" |
| 9 | 18Birdies or Golfshot: which is easier for a casual golfer who mostly wants a scorecard? | Comparison | Planned "Golf Caddie vs 18Birdies" / "vs Golfshot" |
| 10 | Are there golf apps you pay for once instead of a monthly subscription? | Price | App page (pricing) |
| 11 | My golf GPS app drains my Apple Watch battery. Is there a lighter way to keep score? | Problem / solution | App page; planned "without GPS" page |
| 12 | How do I keep score on the golf course when there's no cell signal? | Problem / solution | App page (FAQ: GPS or signal) |
| 13 | Is Golf Caddie - Simple Scorecard a good app? | Brand (control) | App page |
| 14 | How much does Golf Caddie Pro cost, and is it a subscription? | Brand price (control) | App page (pricing, FAQ) |
| 15 | How do I export my golf scores from my iPhone to a spreadsheet? | How-to | App page (Exporting Your Rounds) |

## Results

Copy the blank table for each new month. Newest month first.

### 2026-11 (baseline, run before `seo-setup` merges)

Run date: ____ · Run by: ____

| Prompt | ChatGPT | Perplexity | Google AI | Cited competitor |
|---|---|---|---|---|
| 1. Best simple golf scorecard app for Apple Watch | | | | |
| 2. Golf app that just keeps score, no GPS or subscription | | | | |
| 3. Good free golf scorecard app for iPhone | | | | |
| 4. Golf score trackers with no account | | | | |
| 5. Keep score on Apple Watch without phone | | | | |
| 6. Siri to keep score during golf | | | | |
| 7. Track putts and penalties on iPhone | | | | |
| 8. Cheaper Arccos alternative for scoring | | | | |
| 9. 18Birdies or Golfshot for casual scoring | | | | |
| 10. Golf apps with one-time purchase | | | | |
| 11. Lighter scoring than battery-draining GPS app | | | | |
| 12. Keep score with no cell signal | | | | |
| 13. Is Golf Caddie a good app? (control) | | | | |
| 14. Golf Caddie Pro price / subscription? (control) | | | | |
| 15. Export golf scores to a spreadsheet | | | | |
| **Prompts where we appear (R, M, or C)** | __/15 | __/15 | __/15 | |

Notes and wrong facts:
-

## Portfolio changelog

Newest first. Version the portfolio when prompts are added, removed, or reworded, and don't compare totals across versions.

- v1 (2026-10-18): Initial 15 prompts.
