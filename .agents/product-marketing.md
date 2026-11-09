# Product Marketing Context

**Document version:** v14
**Last updated:** 2026-11-08

## Product Overview
**One-liner:** The simple golf scorecard for iPhone and Apple Watch, built to last all 18 holes. No account, no GPS, no social feed, no AI, no subscription.
**What it does:** Golf Caddie tracks strokes, putts, and penalties hole by hole and shows your score vs par as you play. You can score with a tap on iPhone, from your wrist on Apple Watch, by voice with Siri, or from the Lock Screen with a Live Activity. Rounds stay in your own iCloud account.
**Product category:** Golf scorecard app / golf score tracker (App Store: Sports, secondary Health & Fitness).
**Product type:** Consumer iOS + watchOS app.
**Business model:** Free download with unlimited rounds on iPhone, including stats, scorecard sharing, CSV export, club distances, and Apple Health workouts. Golf Caddie Pro is a one-time $2.99 in-app purchase that unlocks the Apple Watch app (scoring and club distances), Siri, and Live Activity. 14-day free Pro trial, no credit card required. No subscription, no ads.

**Facts (keep in sync with the site and App Store):**
| Fact | Value |
|------|-------|
| App name | Golf Caddie - Simple Scorecard |
| App Store ID | 6760603837 |
| Developer | Carlos Lopez-Molina (independent) |
| Requirements | iOS 17.6 or later; Apple Watch optional |
| Free tier | Unlimited rounds (no limit in code), stats, scorecard sharing, CSV export (v1.5.3), club distances on iPhone, Apple Health "Save Summary" workouts (verified in app source 2026-10-18) |
| Pro ($2.99 once) | The whole Apple Watch app (scoring, club distances, live Health workout), Siri (8 shortcuts), Lock Screen/Dynamic Island Live Activity. Without Pro the Watch shows "Trial Ended · Unlock Watch on your iPhone" (verified in app source 2026-10-18) |
| Pricing by country | $2.99 is the US price; other countries pay the equivalent App Store price in local currency |
| Trial | 14 days (`GolfShared.trialDays`), started in-app, stored in iCloud; no App Store purchase, so no card |
| Watch without iPhone | Scores on the watch with the iPhone left in the golf bag, then syncs (owner-confirmed 2026-11-08). Out of range, changes are queued and sync on reconnect (app REQUIREMENTS §4.1). Rounds can start on the watch (Quick Start). Trial, club distances, pars, and settings are set on the iPhone |
| Siri phrases (exact) | "Start a quick round in Golf Caddie" (18 holes; "Start a front 9 holes / back 9 holes round in Golf Caddie"), "Add a stroke / Add a putt / Add a penalty in Golf Caddie", "Next hole in Golf Caddie", "What hole am I on in Golf Caddie", "What is my score / round score in Golf Caddie", "What is my hole score in Golf Caddie" |
| App source | `/Users/carlos/Projects/GolfStrokeCounter` (Siri: `Logic/GolfIntents.swift`; Pro gating: `StoreKitManager.hasAccess`) |
| Download link (website) | `https://apps.apple.com/app/apple-store/id6760603837?pt=128660093&ct=Website&mt=8` |
| Support | carlosbuilds@icloud.com |
| Website | https://carlos231.github.io/apps/golf-caddie/ |

## Target Audience
**Target users:** Casual and regular recreational golfers on iPhone, many with an Apple Watch, who want to keep score without a bloated app. Core buyer: an Apple Watch golfer whose watch dies mid-round with the big GPS apps, and who wants only a scorecard: no social feed, no rangefinder, no AI, no subscription, no complicated stat tracking. These are the people searching for a "simple golf scorecard" and the ones who download and buy Pro.
**Decision-makers:** The golfer themselves (B2C, impulse-priced).
**Primary use case:** Keep an accurate score during a round with as little phone time as possible.
**Jobs to be done:**
- Keep score for my round quickly so I can focus on golf
- Know where I stand vs par during the round
- Look back at my rounds and see if I'm improving
**Use cases:**
- Weekend 18 or a quick 9 after work (Front 9 / Back 9 Quick Start)
- Scoring from the wrist without taking the phone out
- Scoring by voice while walking or riding in a cart
- Courses with poor signal
- Sharing a scorecard image with friends after the round
- Exporting rounds to a spreadsheet or an AI assistant for analysis

## Personas
Not applicable (single-user B2C purchase).

## Problems & Pain Points
**Core problem:** Popular golf apps are built around GPS, course databases, social feeds, AI features, and subscriptions. A golfer who just wants to keep score has to create an account, wait for GPS, dismiss upsells, and watch their Apple Watch battery run out before the round ends.
**Founder story (owner, 2026-11-08, first-hand):** "Big apps may offer the watch free. My watch battery would never last the full round. I also didn't want any social aspect, ranges, AI bloat, subscriptions, and complex scorecards/tracking." Built and tested on an Apple Watch SE; Golf Caddie lasts all 18 holes on it (owner-confirmed). Use it as the developer's own experience ("on my Apple Watch SE"), never as a lab figure, and no battery percentages. Owner's point: if it lasts on the SE, it should last on newer watches too. Supported by Apple's ratings (SE 3 up to 18 hours, the shortest of the current lineup; Series 12 up to 24; Ultra 4 up to 50; apple.com/watch/battery, checked 2026-11-08). Say newer Series and Ultra models have more to spare, not that every watch lasts longer (older models and worn batteries vary).
**Why alternatives fall short:**
- Full-featured apps need an account and often a subscription for the features people want
- GPS and course syncing drain battery and fail without signal
- Paper scorecards get wet, lost, and can't show trends
- Generic notes or counter apps don't know par, putts, or penalties
**What it costs them:** Phone time during the round, battery, recurring subscription fees, and attention.
**Emotional tension:** "I came here to play golf, not to manage an app."

## Competitive Landscape
*Competitor facts below are unverified positioning notes. Verify each on the competitor's own site and date it before using it in public copy (Phase 4).*
**Direct (full-featured):** Arccos, Golfshot, 18Birdies, TheGrint. Full-featured golf apps with GPS, course maps, and stats. Fall short for this audience because they're heavier than needed: account sign-up, GPS-first design, and premium tiers on subscription. **Verified on official sites 2026-11-02 (US):** TheGrint Pro $59.99/yr, 7-day trial; phone scoring free, "on the watch, any score tracking requires Pro"; GPS free on 40,000+ courses; US Handicap ID linked or bought in-app. 18Birdies Premium $99.99/yr or $19.99/mo (7-day trial), $7.99/wk; free tier includes GPS, handicap tracking, multi-player scoring, and Apple Watch scoring. Golfshot Pro $79.99/yr (Champions $99.99); Apple Watch GPS yardages and scoring are free per its Oct 8, 2026 blog (https://golfshot.com/blog/do-you-need-a-golf-watch-or-just-a-golf-app) and facts page; Pro adds Auto Shot Tracking and Auto Putt Tracking (Apple Watch Series 8+), Strokes Gained, and Green Maps. Its App Store description (checked 2026-11-08) still lists Apple Watch scoring under Pro, so treat watch scoring as free and mention the discrepancy once. The same blog says an Apple Watch gets through "a full round; charge nightly." Arccos still unverified (~$199.99/yr cited). Account requirements weren't stated on any of these pages, so don't claim them.
**Direct (indie, scoring-first):** SwipeScore (free, $4.99 one-time upgrade, Apple Watch companion, no GPS), Memo Score ($0.99, Watch scorecard), GolfRSS (free, iPhone + Watch). Same niche and similar pricing model, so "no subscription" and "no GPS" alone don't set us apart from these. (From App Store listings and developer descriptions, 2026-10-18; verify before naming them in public copy.)
**Secondary:** Apple Watch golf GPS apps, built-in scorecards in course booking apps. Fall short because scoring is secondary to rangefinding or booking.
**Indirect:** Paper scorecard, Notes app, a tally counter. Fall short because they're slow, error-prone, and don't track putts, penalties, or trends.

## Differentiation
**Key differentiators** (ranked by how strongly they win golfers over the big apps):
1. **Lasts the whole round on Apple Watch.** No GPS running. Built because the developer's Apple Watch SE never lasted a round with the big golf apps; on that SE it lasts all 18 holes. The SE has the shortest rated battery of Apple's current watches (apple.com/watch/battery, checked 2026-11-08), so newer Series and Ultra models have more to spare.
2. **Just a scorecard.** No social feed, no GPS maps or rangefinder, no AI features, no complicated stat tracking. Open it and start a round in seconds (Quick Start).
3. **Pay once.** Free on iPhone with unlimited rounds; Pro (Apple Watch, Siri, Live Activity) is a one-time $2.99 (US) after a 14-day trial with no card. Nothing renews.
4. **Hands-free scoring.** From the wrist on Apple Watch, by voice with 8 Siri shortcuts, or from the Lock Screen with a Live Activity.
5. **Private.** No account, App Store label "Data Not Collected," rounds in the golfer's own iCloud, CSV export anytime.
**How we do it differently:** Scoring is the whole product. Everything else (stats, club distances, Health, export) supports the scorecard and stays out of the way.
**Why that's better:** Faster scoring, less phone time, no recurring cost, works without signal.
**Why customers choose us:** Their Apple Watch lasts the whole round, and the app does nothing but keep score. Pro costs less than one month of most golf app subscriptions (as of November 2026: 18Birdies $19.99/mo, Golfshot $14.99/mo, vs $2.99 once).
**What's actually distinctive (vs indie scorecards too):** the combination of no account + Apple Watch scoring + Siri voice scoring + Lock Screen Live Activity, all syncing, plus free CSV export and Apple Health. Lead with the combination, not with "no subscription" alone. Never claim to be the only no-subscription or no-GPS scorecard.

## Objections
| Objection | Response |
|-----------|----------|
| "Other golf apps' Apple Watch scoring is free." | Some are, but a free watch app doesn't help if the battery dies on the back nine. Golf Caddie runs no GPS, and on the developer's own Apple Watch SE it lasts all 18 holes. Pro is $2.99 once. |
| "No GPS means no yardages." | Golf Caddie is a scorecard, not a rangefinder. Keep your club distances in the app and use your watch's or course's yardage markers. Pair it with a GPS app if you need one. |
| "I'll have to pay eventually." | The iPhone scorecard is free forever with unlimited rounds. Pro is $2.99 once, after a free 14-day trial with no card. |
| "Will my data be lost without an account?" | Rounds are stored in your own iCloud account and can be exported as CSV anytime. |

**Anti-persona:** Golfers who want GPS rangefinding, hole maps, shot tracking, swing analysis, handicap services, or social leaderboards. Android users.

## Switching Dynamics
**Push:** Subscription fatigue, upsells, battery drain, slow GPS startup, account requirements.
**Pull:** Instant start, Apple Watch and Siri scoring, one-time price, privacy.
**Habit:** Existing round history in another app; habit of paper scorecards.
**Anxiety:** Losing stats history; whether a "simple" app is enough.

## App Store Listing
*Owner-provided 2026-10-18 (v1.5.3 metadata; live v1.5.2 has the same text minus the export line).*
**Title:** Golf Caddie - Simple Scorecard
**Subtitle:** Score Tracker for Apple Watch
**Keywords (92/100 bytes):** stroke,counter,scorekeeper,putt,par,birdie,offline,easy,shot,stats,round,card,keeper,18,siri
**Promotional text:** Keep your head in the game, not your phone. One tap to log a stroke, nothing else in the way. No account, no GPS.
**Description key lines:** "No account. No GPS. No social feed. Just open and play." / "the scorecard for golfers who'd rather watch their ball than their phone" / "Share a classic scorecard, with circles for birdies and squares for bogeys" / "PRO: $2.99 ONCE, YOURS TO KEEP" / "Try Pro free for 14 days. Nothing to cancel. When the trial ends, everything free stays free." / "Made by a solo developer who plays. Your feedback shapes every update."

## Customer Language
**How they describe the problem:**
- *None collected yet. Add verbatim phrases from App Store reviews, support emails, and Reddit threads as they come in. Do not invent quotes.*
**How they describe us:**
- *None collected yet.*
**Words to use:** lasts all 18 holes, light on battery, no AI, nothing you didn't ask for, simple, scorecard, keep score, strokes, putts, penalties, score vs par, from your wrist, hands-free, Lock Screen, one-time, no subscription, no account, no GPS, open and play, head in the game, yours to keep, nothing to cancel, solo developer who plays
**Words to avoid:** "platform," "AI-powered," "revolutionary," "ultimate," "best" (unless sourced), anything that implies GPS or handicap features the app doesn't have
**Glossary:**
| Term | Meaning |
|------|---------|
| Pro | One-time $2.99 unlock for the Apple Watch app, Siri, and Live Activity |
| Quick Start | Instant round with all holes set to par 4 (Front 9, Back 9, or 18) |
| Live Activity | Lock Screen / Dynamic Island scoring widget |
| Score vs par | Running total relative to par (e.g., +5) |

## Brand Voice
| Attribute | Means | Doesn't mean | Example line |
|-----------|-------|--------------|--------------|
| Plain | Short sentences, everyday golf words | Dumbed down or vague | "No account. No GPS. No social feed. Just open and play." |
| Golfer-first | Talks about the round, not the app | Golf jargon for its own sake | "The scorecard for golfers who'd rather watch their ball than their phone." |
| Honest | States limits and prices up front | Self-deprecating | "Unlock Pro forever for a one-time $2.99. No subscription, ever." |
| Calm | Confident, low-key | Hype, exclamation marks | "It's a read-only cheat sheet, so it never gets in the way of scoring." |

**Tone by context:**
- Support: direct steps, reassure that scores are safe
- Launch: what changed and why it helps on the course
- Errors: say what happened and the one thing to try
- Sales: price and simplicity first
- Social: first-person indie developer, specific on-course moments
**Terms we own:** "Simple Scorecard," "open and play"
**Never use (and why):** fake urgency or invented stats (trust is the product); "free" without saying what Pro costs (avoid bait-and-switch)

## Proof Points
**Metrics:** None to cite publicly yet. App Store had 2 ratings (5.0) on 2026-10-18; too few to cite. Never add `aggregateRating` to schema.
**Customers:** n/a
**Testimonials:** None yet. Collect with permission before using.
**Value themes:**
| Theme | Proof |
|-------|-------|
| Lasts the round | No GPS running; developer's Apple Watch SE lasts all 18 holes (first-hand, owner-confirmed 2026-11-08) |
| Simplicity | No account, no GPS, no social feed, no AI, Quick Start in seconds |
| Hands-free scoring | 8 Siri shortcuts; Apple Watch; Lock Screen Live Activity |
| Fair pricing | Free core app; $2.99 one-time Pro; 14-day trial, no card |
| Privacy | No data collection; iCloud storage (privacy policy) |

## Goals
**Business goal:** Grow App Store downloads through organic search (Google, Bing) and AI answer engines (ChatGPT, Perplexity, Claude, Gemini). No paid ads.
**Conversion action:** App Store download from the website (tracked with `ct=Website`).
**Current metrics:** Unknown; establish a baseline from App Store Connect and Search Console.

## Paid Ads (optional)
Not applicable. No paid ads.

## Learnings
*Decisions and tested lessons. Newest first. Keep it to about 20 active entries.*
| Date | Learning | Evidence | Applies to | Status |
|------|----------|----------|------------|--------|
| 2026-11-08 | Say each strong point once per page. The founder story appears only in the app page's "Why I built" section and the guide author box. Body copy and answer boxes use only the strong point that matches the topic. Download boxes carry the offer plus at most one strong point | Owner correction: the full list in every box read as redundant | Guides, app page, download boxes, social, App Store listing | active |
| 2026-11-08 | Lead with why the app exists: an Apple Watch scorecard that lasts all 18 holes, with no social feed, GPS, AI, subscription, or complicated tracking. Tell it as the founder's first-hand story (Apple Watch SE). The app page targets "simple golf scorecard app"; don't create a separate page for that query (seo-audit: no cannibalization; product page is the right format) | Owner: "This is what people are probably searching for and are the main customers that will download and buy" | App page, home, llms.txt, guides, social | active |
| 2026-11-08 | Every guide sells Golf Caddie: lead the answer and tables with it and put a download button (`_includes/download-cta.html`) near the top of every guide. Within the skills' limits: keep competitor facts accurate, keep a short honest "who should stay with them" section (competitors skill), put competitor links in a sources line at the end, and keep about 2 of 7 weekly social posts as pure tips with no app pitch (social skill) | Owner: "written in a way so that user wants to download my app and not marketing for others"; goal is more clicks and referrals. Owner asked to follow the skills where they conflict, as they're more proven | Guides, comparison pages, social, weekly-marketing runs | active |
| 2026-10-22 | Publish customer-facing pages (people choosing an app: no subscription, battery, Siri, comparisons) before informational guides | Owner decision: the first four guides were mostly informational; downloads come from buyer-intent pages | content-backlog.md order, weekly-marketing runs | active |
| 2026-10-18 | Verify feature gating and Siri phrases in the app source before stating them; memory and the listing disagreed (Watch club distances, Siri count/phrasing) | Code showed the whole Watch app is Pro and 8 shortcuts with "What is" phrasing | Site copy, guides, social, data file | active (updated 2026-11-08: check the app's README/REQUIREMENTS first, source only if they're silent or conflict) |
| 2026-10-18 | Don't claim uniqueness on "no subscription" or "no GPS"; lead with the Watch + Siri + Live Activity + no-account combination | Phase 4 research found SwipeScore, Memo Score, GolfRSS in the same niche | All copy, comparison pages, social | active |
| 2026-10-18 | Keep the existing App Store provider token (`pt=128660093`) and campaign `ct=Website` on every download button | Owner decision; changing case or token splits App Analytics data | Website, all pages | active |

## Changelog
*Newest first. One line per revision: what changed and why.*
- v14 (2026-11-08) — Competitive Landscape: Golfshot watch scoring treated as free (its Oct 2026 blog and facts page), with the App Store listing discrepancy noted; owner supplied the blog post.
- v13 (2026-11-08) — Facts: watch scores with the iPhone in the bag and syncs (owner-confirmed); out-of-range changes queue and sync on reconnect (app docs).
- v12 (2026-11-08) — Moved the ranked strong points into Differentiation and the say-it-once rule into Learnings, per the product-marketing skill's structure; removed the separate Strong points section added in v11; Why customers choose us now cites verified prices.
- v11 (2026-11-08) — Added ranked "Strong points" at the top with a say-it-once usage map, after the owner found the site repeating the full list in every box.
- v10 (2026-11-08) — Positioning: founder story (watch battery, no social/GPS/AI/subscription/complex tracking) becomes the core problem and first differentiator; new objection on free watch scoring elsewhere (owner decision).
- v9 (2026-11-08) — Learnings: content sells Golf Caddie first, with an early download button; competitor facts stay accurate but brief (owner decision).
- v8 (2026-11-02) — Competitive Landscape: TheGrint, 18Birdies, and Golfshot facts verified on official sites for the comparison guides; Golfshot watch-scoring tier flagged as conflicting.
- v7 (2026-10-22) — Learnings: customer-facing topics before informational (owner decision).
- v6 (2026-10-19) — v1.5.3 live on the App Store (CSV export, copy options, Back 9 copy fix); site flipped from hidden to visible.
- v5 (2026-10-18) — Facts corrected from app source (Watch app incl. club distances is Pro; Health Save Summary free; 8 Siri shortcuts with exact phrases; trial mechanics); added App Store Listing section and listing phrases to Customer Language.
- v4 (2026-10-18) — Competitive Landscape: added TheGrint and indie scoring-first apps (SwipeScore, Memo Score, GolfRSS) from Phase 4 research; Differentiation now leads with the feature combination; new Learning on uniqueness claims.
- v3 (2026-10-18) — Facts: owner confirmed Apple Health is free and $2.99 is the US price (equivalent local price elsewhere).
- v2 (2026-10-18) — Product Overview, Facts, and Glossary: owner confirmed stats, sharing, CSV export, and Watch club distances are free; Pro gates Apple Watch scoring, not the whole Watch app.
- v1 (2026-10-18) — Initial context.
