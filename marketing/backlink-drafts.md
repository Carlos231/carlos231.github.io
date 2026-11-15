# Backlink and listing drafts: Golf Caddie

Working file, never published (`marketing/` is excluded in `_config.yml`). Written 2026-11-14.

Ground rules for every channel:
- Say you're the developer. Hidden promotion gets removed and remembered.
- Help first. The post or reply should be useful to a golfer who never downloads anything.
- One link at most, and only where the rules allow it. Read each community's self-promotion rule before posting; I could not check them from here.
- Facts only from `_data/golf_caddie.yml`. No ratings, download numbers, or battery claims.
- Link targets: `https://carlos231.github.io/` (iPhone stroke counter pitch) or `https://carlos231.github.io/apps/golf-caddie/` (Apple Watch pitch). Use a guide only when it answers the exact question.

## 1. App Store Connect (the links you control)

Your listing's Marketing URL already points to the app page, and that is the site's one confirmed backlink. Check these three fields under App Information / version metadata:

| Field | Set to | Why |
|---|---|---|
| Marketing URL | `https://carlos231.github.io/apps/golf-caddie/` | Already set. Keep. |
| Support URL | `https://carlos231.github.io/apps/golf-caddie/help/` | The new help page answers support questions directly. TODO(owner): check what it points to today. |
| Privacy Policy URL | `https://carlos231.github.io/apps/golf-caddie/privacy` | Should already be set. |

Promotional text (can change any time, no review of a new version needed; 170 characters max). Draft, 153 characters:

> A simple golf scorecard: tap your strokes, putts, and penalties and get back to golf. No account, no GPS, no subscription. Pro adds Apple Watch and Siri.

## 2. Reddit (r/golf, r/AppleWatch)

Reply to recent threads rather than starting a promotional post. Threads older than about six months are usually locked. Search links, newest first:
- r/golf, scorecard apps: https://www.reddit.com/r/golf/search/?q=scorecard+app&restrict_sr=1&sort=new&t=year
- r/golf, Apple Watch apps: https://www.reddit.com/r/golf/search/?q=apple+watch+app&restrict_sr=1&sort=new&t=year
- r/AppleWatch, golf: https://www.reddit.com/r/AppleWatch/search/?q=golf&restrict_sr=1&sort=new&t=year

**Reply A: someone asks for a simple scorecard app with no subscription**

> A few scorecard-only apps skip the subscription, so check the In-App Purchases list on the App Store page before you download: one item usually means a one-time unlock, and monthly or yearly items mean a subscription.
>
> Disclosure: I make one of these, Golf Caddie. The iPhone scorecard is free with unlimited rounds (strokes, putts, penalties, score vs par), with no account and no GPS. Apple Watch, Siri, and Lock Screen scoring are a one-time $2.99 after a 14-day trial. Happy to answer questions about it, and equally happy if one of the others fits you better.

**Reply B: someone wants to keep score on Apple Watch without pulling out the phone**

> If you only want the score on your wrist, look for a scorecard app rather than a GPS app: you tap + for each stroke and putt and swipe to the next hole, and the phone stays in the bag. Check whether watch scoring is in the free tier or the paid one, because it differs by app.
>
> Disclosure: I'm the developer of Golf Caddie, which works this way. Watch scoring is part of a one-time Pro unlock, and it syncs with the iPhone and the Lock Screen. I wrote up how it compares with GPS apps if that's useful: https://carlos231.github.io/apps/golf-caddie/guides/apple-watch-golf-scorecard-without-gps/

**Reply C: someone asks how to count putts or keep score properly** (no pitch; build history in the community)

> Count every swing made to hit the ball, add any penalty strokes, and write one number per hole. Many golfers also note putts separately, because a hole with two putts and a hole with four tell you very different things about your game. For stats, a putt is a stroke made on the putting green. A shot from the fringe doesn't count as a putt, even if you use your putter.

## 3. Golf forums (GolfWRX, The Sand Trap, MyGolfSpy Forum, Golf Monthly forum)

TODO(owner): read each forum's rules on self-promotion and new accounts first. Most expect you to take part in other threads before posting about your own product. Post in the technology or apps section, once per forum.

**Thread title:** I built a scorecard-only golf app (no GPS, no account). What would you want from one?

> I'm a golfer and a solo iOS developer. I wanted an app that only keeps score, so I built Golf Caddie: you tap strokes, putts, and penalties per hole and it shows your score vs par. There's no GPS, no account, no social feed, and no subscription. It's free on iPhone, and scoring from Apple Watch, Siri, or the Lock Screen is a one-time $2.99.
>
> I'm not here to sell it. I'd like to hear from people who keep score on their phone or watch: what annoys you about the app you use now, and what would a scorecard-only app need before you'd switch? I read every reply and it shapes what I build next.
>
> If the rules allow a link, it's https://carlos231.github.io/apps/golf-caddie/. Mods, please remove this if it breaks the rules.

## 4. Product Hunt

TODO(owner): check Product Hunt's current field limits and launch guidelines before submitting. Launch on a weekday morning (Pacific time) when you can answer comments all day. Use your own account as maker.

- **Name:** Golf Caddie
- **Tagline (51 characters):** The golf scorecard that only keeps score. Pay once.
- **Description (236 characters):** Golf Caddie counts strokes, putts, and penalties and shows your score vs par. No account, no GPS, no social feed. Free on iPhone with unlimited rounds. Apple Watch, Siri, and Lock Screen scoring are a one-time $2.99, not a subscription.
- **Topics:** iOS, Apple Watch, Sports, Golf
- **Link:** `https://carlos231.github.io/apps/golf-caddie/` (the App Store link goes in the App Store field)
- **Gallery:** the App Store screenshots. TODO(owner): a 15 to 30 second screen recording of scoring a hole on the watch would help here and on the App Store.

**Maker's first comment:**

> Hi, I'm Carlos. I play golf and I build iOS apps on my own.
>
> Most golf apps are built around GPS maps, social feeds, and yearly plans. I only wanted to keep score, so I built an app that does only that: tap + for each stroke, putt, and penalty, and it tells you where you stand against par.
>
> The iPhone scorecard is free with unlimited rounds, and there's no account. If you want to score from your Apple Watch, by voice with Siri, or from the Lock Screen, that's a one-time $2.99 after a 14-day trial with no card.
>
> I'd love feedback on two things: is anything missing that a scorecard-only app must have, and is the free vs Pro split fair?

## 5. Directories (AlternativeTo, SaaSHub, Indie Hackers, Uneed)

TODO(owner): confirm each one still lists iOS apps for free before spending time on it. On AlternativeTo and SaaSHub, list Golf Caddie as an alternative to 18Birdies, Golfshot, TheGrint, Arccos, and Hole19: those pages are where golfers looking to switch land.

**Short description (133 characters):**

> A simple golf scorecard for iPhone and Apple Watch: strokes, putts, penalties, and score vs par. No account, no GPS, no subscription.

**Long description (about 90 words):**

> Golf Caddie is a golf scorecard app for iPhone and Apple Watch that only keeps score. Tap + for each stroke, putt, and penalty and see your score vs par after every hole. Start a full 18, the Front 9, or the Back 9 in one tap, or name the course and set each hole's par. There is no account, no GPS, and no social feed, and rounds stay in your own iCloud.
>
> The iPhone app is free with unlimited rounds, stats, a shareable scorecard, and CSV export. Golf Caddie Pro adds the Apple Watch app, Siri voice scoring, and a Lock Screen Live Activity for a one-time $2.99 (US), after a 14-day free trial with no card.

- **Tags:** golf, scorecard, score tracker, Apple Watch, iOS, no subscription
- **License / pricing field:** Freemium, one-time purchase
- **Platforms:** iPhone, Apple Watch

## 6. Places that cost nothing and take five minutes

- Your GitHub profile README and the repo's "About" website field: link `https://carlos231.github.io/`.
- Your personal social bios: same link.
- The app's Settings or About screen, in the next release: a "Guides and help" link to `/apps/golf-caddie/help/`.
