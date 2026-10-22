---
name: weekly-marketing
description: "Weekly marketing run for the Golf Caddie website. Use when the user says 'weekly marketing', 'run the weekly', 'this week's content', 'next week's posts', or asks to refill the content backlog, draft the next guides, and write the week's social posts. Reviews the latest SEO check results, refills content-backlog.md, drafts 2–3 guide pages, drafts 7 days of social posts in social/week-NN.md, and opens a pull request. Never merges."
metadata:
  version: 1.0.0
---

# Weekly Marketing Run

One pass per week: check site health, keep the backlog full, ship 2–3 genuinely useful pages, and draft a week of social posts that promote them. Everything lands in one pull request for the user to review. You never merge.

Budget: aim to finish in one session. Quality beats volume. If only one page meets the bar this week, ship one.

## Before you start

1. Read `CLAUDE.md`, `CONTRIBUTING.md`, `.agents/product-marketing.md` (voice, objections, Learnings), and `_data/golf_caddie.yml` (the only source for app facts).
2. Read `content-backlog.md`, the existing guides in `apps/golf-caddie/guides/`, and the latest `social/week-NN.md`, so you don't duplicate topics or posts.
3. Pick the branch base: `main` (pull it first). If `main` doesn't have `_layouts/guide.html` yet, the SEO setup hasn't merged: stop and point the user to "Merge day" in `marketing/runbook.md`.
4. Create the branch `weekly/YYYY-MM-DD` (the run date). Never work on `main`.
5. Check the live App Store version (`https://itunes.apple.com/lookup?id=6760603837&country=us`). Only write about features in that version. Features with `since:` equal to `_data/golf_caddie.yml` `upcoming_version` are unreleased: don't mention them in guides or social posts. If the live version equals `upcoming_version`, tell the user the release-day flip is due (release-update skill).

## Step 1: Review the latest SEO checks

Get the most recent **SEO checks** run (`.github/workflows/seo-checks.yml`):
- With `gh` installed: `gh run list --workflow "SEO checks" --limit 1`, then `gh run view <id>` for the summary and `gh run download <id> -n lighthouse-reports` for the reports.
- Without `gh`: `curl -s "https://api.github.com/repos/Carlos231/carlos231.github.io/actions/runs?per_page=5"` gives the latest run's status and URL. Ask the user to paste the Lighthouse table from the run summary if you need the scores.
- If there's no run yet (the workflows only run once they're on `main`), say so and skip to Step 2.

Then:
- **lychee failures:** fix broken internal links in this PR. For broken external links, replace the link or remove it, and note it in the PR.
- **Lighthouse:** compare scores to last week (record them in the PR body). Flag any category that dropped 5+ points or sits below 90 for SEO or accessibility. Fix small, clear issues (missing alt text, contrast, heading order). List anything bigger as a follow-up; don't start a redesign.

## Step 2: Refill content-backlog.md (content-strategy skill)

Use the **content-strategy** skill (and the **competitors** skill for any "vs" or "alternatives" topic).

- Keep **at least 10 open topics**. Mark topics that shipped as `published` with their URL, and keep the table in the order set by the **Order rule** at the top of `content-backlog.md` (customer-facing Commercial/Comparison topics first, then informational; published rows at the bottom). New topics go into their group by score.
- If `content-backlog.md` doesn't exist yet, create it with the table below.
- Each topic needs a target query, search intent, a one-line angle, and a priority score (content-strategy weights: customer impact 40%, content-market fit 30%, search potential 20%, resources 10%).
- Take ideas from: `marketing/ai-visibility.md` prompts where we're absent, Lighthouse/lychee issues, objections and Learnings in the product-marketing doc, and questions golfers really ask (search `site:reddit.com` threads in r/golf and r/AppleWatch).
- **Information-gain gate:** before a topic goes in, write one sentence on what our page will add that the current top results don't. No sentence, no topic.
- No mass-generated or near-duplicate topics (e.g. one page per course or per watch model). Every topic must be useful to a golfer on its own.

Backlog table format:

```markdown
| Priority | Topic | Target query | Intent | Angle (what we add) | Score | Status | Page |
|---|---|---|---|---|---|---|---|
| 1 | ... | ... | Informational / Commercial / Comparison | ... | 8.2 | open / drafted / published | /apps/golf-caddie/guides/<slug>/ |
```

## Step 3: Draft the next 2–3 pages

Take the top 2–3 `open` topics and write each as a guide:

1. Copy `apps/golf-caddie/guides/_template.md` to `apps/golf-caddie/guides/<slug>.md`. Fill in all front matter: `permalink: /apps/golf-caddie/guides/<slug>/`, `description` of 150–160 characters, and `date` and `last_modified_at` set to today.
2. `answer`: a direct 40–60 word answer to the target query.
3. Body: each H2 is a question phrased the way golfers ask it, followed by a 40–60 word direct answer, then detail (steps, examples, tables).
4. `facts` table where it helps (rules, scoring values, comparisons). `faq` with 3–5 real follow-up questions.
5. Internal links: to the app page and to 1–3 related guides (in the body and in `related`). Only link to pages that exist. Every guide is listed automatically in the app page's "Golf scoring guides" section (newest first), so no manual listing is needed there.
6. Mention Golf Caddie where it genuinely helps the reader. The guide must stand on its own without the app.

Facts and evidence:
- App facts come only from `_data/golf_caddie.yml`. In the body, use `{{ site.data.golf_caddie.pricing.pro_price }}` and similar variables instead of typing values. Front matter can't use variables, so keep prices out of `answer` and `faq` where you can.
- Golf rules and handicap facts: cite the primary source (USGA / R&A Rules of Golf, World Handicap System) and link it.
- Competitor facts (competitors skill, Evidence Discipline): check their official site this week, write "as of <Month YYYY>", acknowledge their strengths, and never write "doesn't have X" unless their docs confirm it. If you can't verify a claim, leave it out.
- Never invent stats, quotes, testimonials, or ratings.

Mark each drafted topic `drafted` in the backlog with its URL.

## Step 4: Draft 7 social posts (social skill)

Use the **social** skill. Create `social/week-NN.md`, where `NN` is one more than the highest existing week file (`week-01` if none). One post per day, Monday to Sunday, mostly promoting this week's pages, with the app as the natural next step.

For each day write:
- **Angle:** one line (which page, which golfer problem).
- **X:** max 280 characters including the link. At most 1–2 hashtags.
- **Threads:** max 500 characters, at most 1 topic tag.
- **Instagram / TikTok caption:** up to about 150 words, 3–5 hashtags, ending with a soft CTA ("link in bio").
- **Video hook idea:** the first 3 seconds, as visual + spoken line + on-screen text, plus a 15–30 second outline. Ideas must be things one person can film on a phone on the course.
- **Link:** the guide or app page URL. Don't create new App Store campaign tokens. Use the site URL, or the existing download link if asked.

Rules from the social skill: no AI tells (no "it's not X, it's Y", no negation lists, no "Say goodbye to", no em dashes, no broetry, no engagement bait, no emoji bullets). Specific golf moments over generic hype. First person as the indie developer is fine and on-voice.

The user posts these manually. Don't schedule or publish anything.

## Step 5: Check, commit, push, open the PR

1. Run the checklist in `CONTRIBUTING.md` for the new pages.
2. Commit in logical single-line commits, staging specific files (the pre-commit hook runs; fix any ✖). For example:
   - `Fix broken links from weekly SEO check`
   - `Refill content backlog`
   - `Add <topic> guide` (one commit per page)
   - `Draft week NN social posts`
3. Push the weekly branch only: `git push -u origin weekly/YYYY-MM-DD`. Never push to `main`.
4. Open a pull request against the base from "Before you start":
   - With `gh`: `gh pr create --base <base> --title "Weekly marketing YYYY-MM-DD" --body-file <file>`
   - Without `gh`: give the user the compare link `https://github.com/Carlos231/carlos231.github.io/compare/<base>...weekly/YYYY-MM-DD?expand=1` and the PR body to paste.
5. **Never merge.** The user reviews and merges.

PR body:
- SEO check summary: lychee result, Lighthouse scores vs last week, fixes made, follow-ups.
- Backlog changes: topics added, published, and re-prioritized.
- New pages: URL, target query, and the information-gain sentence for each.
- Social: link to `social/week-NN.md`.
- Unverified or open questions (competitor claims you left out, facts to confirm).
- On the first run of the month: a reminder to run `marketing/ai-visibility.md`.

## Report to the user

Keep it short: the PR link (or compare link), the pages drafted, the backlog changes, the SEO check findings, and anything that needs their decision. Don't paste full files.
