# Before you commit

The workflow for every change to this site. Working file, never published.
For **what to do when** (merge day, release day, weekly, monthly), see [marketing/runbook.md](marketing/runbook.md).

## One-time setup

Turn on the pre-commit hook (it runs the automatic checks below on every commit):

```sh
git config core.hooksPath .githooks
```

## 1. Work on a branch

- Never commit to `main`. Use a branch: `git switch -c <short-name>` (the weekly skill uses `weekly/YYYY-MM-DD`).
- `main` is what's live. Anything merged into it is published within a minute or two.

## 2. Check the content

Go through this list for anything you changed:

- [ ] **Facts are real.** Every app fact (price, features, free vs Pro, requirements, links) comes from [_data/golf_caddie.yml](_data/golf_caddie.yml). No invented stats, reviews, ratings, or testimonials. No `aggregateRating`.
- [ ] **Facts changed? Edit only the data file.** Pages, schema, and `llms.txt` update from it. Three spots still hardcode $2.99 and need a manual edit: the app page's `description:` front matter, the `09-price.webp` alt text, and `.agents/product-marketing.md`.
- [ ] **Unreleased features are hidden.** Anything not live on the App Store yet has `since: "<version>"` in the data file and its page copy is wrapped in `{% unless upcoming == "<version>" %}...{% endunless %}`, with `upcoming_version` set. The hook prints the live version.
- [ ] **Rewrote existing copy?** You have the before → after and it fits the voice in [.agents/product-marketing.md](.agents/product-marketing.md).
- [ ] **Campaign link untouched.** Download buttons use `{{ gc.urls.download }}` (`pt=128660093&ct=Website`).
- [ ] **New working file or folder?** Add it to `exclude:` in [_config.yml](_config.yml), or Jekyll will publish it.

For a **new guide** (copy [apps/golf-caddie/guides/_template.md](apps/golf-caddie/guides/_template.md)):

- [ ] `permalink: /apps/golf-caddie/guides/<slug>/` is set (IndexNow needs it).
- [ ] `description` is 150–160 characters; `answer` is a direct 40–60 word answer.
- [ ] Each H2 is a question with a 40–60 word answer right under it.
- [ ] `date` and `last_modified_at` are set; `related` links point to pages that exist.
- [ ] The page is genuinely useful to a golfer on its own. No thin or near-duplicate pages.

## 3. Stage and commit

```sh
git status                      # review what changed
git add <files>                 # stage specific files, not "git add ."
git commit -m "Add how to keep score in golf guide"
```

- One concise single-line message per logical change.
- The hook runs automatically. Red ✖ blocks the commit; yellow ⚠/ℹ are reminders.

**What the hook checks:** no `.DS_Store`, no merge conflict markers, `<!DOCTYPE html>` on pages, no `localhost` links, large images (>1 MB), placeholder App Store links, every working file still excluded in `_config.yml`, the IndexNow key file still present, `_data/golf_caddie.yml` and `lighthouserc.json` still parse, guide front matter complete with a valid permalink, hardcoded prices/IDs in guides, and the live App Store version compared with the data file (it tells you when the release-day flip is due).

**What it can't check:** that the site builds, that the schema is valid, or that links work. Those run in GitHub Actions after merge.

## 4. Push and open a pull request

```sh
git push -u origin <branch>
```

- Never push to `main`.
- Open a pull request from your branch to `main` on GitHub and read through the diff once.

## 5. Merge

- Merge the pull request on GitHub (unreleased features stay hidden, so you don't need to wait for an app release).
- Then follow **After every merge** in [marketing/runbook.md](marketing/runbook.md): check the Actions runs and spot-check the page (requesting indexing is optional).
- Update your local copy: `git switch main && git pull`.
