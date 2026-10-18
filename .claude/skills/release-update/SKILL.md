---
name: release-update
description: "Update the Golf Caddie website for a new app release. Use when the user shares release notes, App Store 'What's New' text, a TestFlight changelog, or says things like 'update the site for v1.6', 'new version is out', 'we shipped X', 'release notes for Golf Caddie', or 'add the new feature to the website'. Updates _data/golf_caddie.yml, page copy, help sections, guides, and last_modified_at, then lists the changes and drafts a commit message. Never commits, pushes, or merges on its own."
metadata:
  version: 1.0.0
---

# Release Update

Turn Golf Caddie release notes into accurate website updates. The site must describe exactly what's in the release: nothing invented, nothing missing, nothing early.

## Inputs

- **Release notes** (pasted text, App Store "What's New", or TestFlight notes). Required.
- **Version number** (e.g. `1.6.0`). Required. If it isn't in the notes, ask.

## Before you start

1. Read `CLAUDE.md`, `CONTRIBUTING.md`, and `.agents/product-marketing.md` (voice, words to use and avoid).
2. Read `_data/golf_caddie.yml`. `app_version` is the live version the site shows; `upcoming_version` is a release that's prepared but hidden ("" if none). The release notes are the diff from `app_version`.
3. Check what's live: `curl -s 'https://itunes.apple.com/lookup?id=6760603837&country=us'` and read `version` and `currentVersionReleaseDate`. Then pick the mode:
   - **Pre-release mode** (the version isn't live yet): add the new content **hidden**. Set `upcoming_version: "<version>"`, give every new or changed feature entry `since: "<version>"`, and wrap new page copy in `{% unless upcoming == "<version>" %}…{% endunless %}`. If wording changes, keep the old wording in `{% if upcoming == "<version>" %}old{% else %}new{% endif %}`. This can merge to `main` right away.
   - **Release mode** (the version is live): if the content was prepared earlier, do the **release-day flip** (Step 0 below). Otherwise make the changes visible directly.
4. Check `git status` and the current branch. Work on `release/v<version>` (create it from `main` with the user's OK). Never work on `main`.

## Step 0: Release-day flip (when content was prepared in pre-release mode)

1. In `_data/golf_caddie.yml`: set `app_version: "<version>"` and `upcoming_version: ""`.
2. Remove the gates for that version: delete the `{% unless upcoming == "<version>" %}` / `{% endunless %}` lines and the old-wording branches of `{% if upcoming == "<version>" %}…{% else %}…{% endif %}`, keeping the new copy. Remove `since: "<version>"` from data entries. Search with `grep -rn 'upcoming == "<version>"' .` and `grep -n 'since: "<version>"' _data/golf_caddie.yml`.
3. Set `last_modified_at` to today on pages whose visible content changed (Step 5), then verify and report (Steps 6–7). Commit message: `Show v<version> features: <headline changes>`.
4. If the user only wants the quick flip, step 1 alone is enough. Tell them the gates can be cleaned up later.

Skip Steps 1–4 below for a flip-only release.

## Step 1: Sort the release notes

Put every line of the notes into one of these buckets and show the user the sorted list:

| Bucket | Site impact |
|---|---|
| New feature | Data file feature entry + feature grid card + help card; maybe FAQ, Siri block, guides |
| Changed feature | Update the existing entry, card, and help text |
| Free/Pro change | Data file `tier`; check every page that says what's free or Pro |
| Price, trial, or requirement change | Data file `pricing` / `min_ios`; plus the 3 hardcoded price spots (below) |
| Removed feature | Remove it everywhere; search for leftovers |
| Bug fix / performance | Usually no copy change. Update help text only if it described the old behavior |

**Ask instead of guessing** whenever the notes don't say:
- whether a new feature is free or Pro
- which devices it works on (iPhone, Apple Watch, Lock Screen, Siri)
- exact names of new Siri phrases, settings paths, or button labels

Never add numbers, claims, or comparisons that aren't in the notes or the existing data file.

Check unclear items in the app source (`/Users/carlos/Projects/GolfStrokeCounter`, read-only): Pro gating via `hasAccess`/`isPro`, Siri phrases in `Logic/GolfIntents.swift`, settings labels in `Views/Settings/SettingsView.swift`. Quote Siri phrases exactly as defined there.

## Step 2: Update the data file

Edit `_data/golf_caddie.yml`:
- `app_version`: the release version (release mode only; in pre-release mode set `upcoming_version` instead).
- `features`: add, edit, or remove entries. Each has `name` (short label used in the pricing table and schema), `tier` (`free` or `pro`), and `detail` (one plain sentence used in `llms.txt`). Keep list order: free features first, then Pro.
- `pricing` / `min_ios`: only if the notes change them.

The pricing table, schema `featureList`/`offers`, and `llms.txt` render from this file automatically. Don't edit those by hand.

## Step 3: Update page copy

On `apps/golf-caddie/index.html`:
- **Feature grid** ("A simple golf scorecard for iPhone and Apple Watch"): add or edit a card. Bold name, then one sentence. Add `<span class="pro-badge">Pro</span>` for Pro features.
- **Help section** ("How to use Golf Caddie"): add or edit a help card. Use the same structure as the other cards (icon with `aria-hidden="true"`, `h3.help-card-title`, short bullet list) with exact button labels and settings paths from the notes.
- **Siri block and the "Using Siri" help card:** add new phrases exactly as the app accepts them.
- **FAQ:** update any answer the release makes wrong. Add a question only if golfers would genuinely ask it.
- **Hardcoded spots** (only if price changes): the `description:` front matter, the `09-price.webp` alt text, and `.agents/product-marketing.md`.
- Use `{{ gc.pricing.pro_price }}`, `{{ gc.pricing.trial_days }}`, and `{{ gc.urls.download }}` in page bodies instead of typing values.

Copy rules:
- Match the existing voice: plain, golfer-first, calm. Short sentences.
- For any **existing** sentence you rewrite, record a before → after for the report.
- New features get described by what the golfer can do on the course, not by implementation.

## Step 4: Guides and other files

- Search the guides for anything the release touches: `grep -rn "<feature keyword>" apps/golf-caddie/guides/`. Update affected guides.
- `llms.txt`: renders from the data file. Edit its prose only if positioning changes (e.g., the app gains GPS).
- `.agents/product-marketing.md`: update the Facts table and Glossary if needed, bump the document version, and add a Changelog line.
- Screenshots: don't edit images. If the release changes what a screenshot shows, list which ones are now outdated.

## Step 5: last_modified_at

- Set `last_modified_at: <today, YYYY-MM-DD>` in the front matter of **every page whose visible content changed** (the app page, any guide you edited).
- Don't bump it on pages that didn't change. A date bump without a real update is a false freshness signal.

## Step 6: Verify

- `grep -rnE "<old value>" --include=*.html --include=*.md --include=*.yml .` for any value you replaced (old price, removed feature name, old version) to catch leftovers.
- Confirm every feature on the page is in the release notes or already in the data file.
- If the user asks you to commit, stage the files and let the pre-commit hook run (`.githooks/pre-commit`). Fix any ✖ before committing.

## Step 7: Report

Reply with:

1. **Release gating:** live version, `app_version`, and `upcoming_version` after your changes. Say which content is hidden until release day, or confirm the flip is done.
2. **Changes by file:** one line per file with a link (what changed, which release note drove it). Don't paste full files.
3. **Copy changes:** a before → after table for rewritten sentences, plus new copy listed separately.
4. **Questions / not done:** anything you didn't change because the notes were unclear, and outdated screenshots.
5. **Commit message (draft):** one line, in the repo's existing style:
   `Update Golf Caddie page for v<version>: <2–4 headline changes>`
   e.g. `Update Golf Caddie page for v1.5.3: CSV export and copy options`

Don't commit, push, or merge unless the user asks. Never push to `main`.
