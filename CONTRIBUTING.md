# Before you commit

The workflow for every change to this site. Working file, never published.

## One-time setup

Turn on the pre-commit hook (it runs the automatic checks below on every commit):

```sh
git config core.hooksPath .githooks
```

## 1. Work on a branch

- Never commit to `main`. Use `seo-setup` or a new branch: `git switch -c <short-name>`.
- `main` is what's live. It only changes when the matching app release is on the App Store (step 6).

## 2. Check the content

Go through this list for anything you changed:

- [ ] **Facts are real.** Every app fact (price, features, free vs Pro, requirements, links) comes from [_data/golf_caddie.yml](_data/golf_caddie.yml). No invented stats, reviews, ratings, or testimonials. No `aggregateRating`.
- [ ] **Facts changed? Edit only the data file.** Pages, schema, and `llms.txt` update from it. Three spots still hardcode $2.99 and need a manual edit: the app page's `description:` front matter, the `09-price.webp` alt text, and `.agents/product-marketing.md`.
- [ ] **The feature is live.** Anything you describe is in the version on the App Store now (the hook prints the live version). If not, keep it on the branch until release.
- [ ] **Rewrote existing copy?** You have the before → after and it fits the voice in [.agents/product-marketing.md](.agents/product-marketing.md).
- [ ] **Campaign link untouched.** Download buttons use `{{ site.data.golf_caddie.urls.download }}` (`pt=128660093&ct=Website`).
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

**What the hook checks:** no `.DS_Store`, no merge conflict markers, `<!DOCTYPE html>` on pages, no `localhost` links, large images (>1 MB), placeholder App Store links, every working file still excluded in `_config.yml`, the IndexNow key file still present, `_data/golf_caddie.yml` and `lighthouserc.json` still parse, guide front matter complete with a valid permalink, hardcoded prices/IDs in guides, and the live App Store version as a reminder.

**What it can't check:** that the site builds, that the schema is valid, or that links work. Those run in GitHub Actions (step 5).

## 4. Push the branch

```sh
git push origin <branch>
```

Never push to `main`.

## 5. Open a pull request (don't merge yet)

- Open a pull request from your branch to `main` on GitHub so the change is easy to review. Leave it open until step 6.
- The **SEO checks** workflow (site build, lychee link check, Lighthouse scores) currently runs only after a merge to `main` and weekly, not on the pull request.

## 6. Release day: merge to main

Only when the App Store shows the version your branch describes:

- [ ] The live version on the App Store matches the features on the branch.
- [ ] Merge the pull request into `main`.
- [ ] In the Actions tab: **pages build and deployment** succeeds, then **SEO checks** passes, then **IndexNow** runs and responds 200 or 202.
- [ ] Spot-check the live page on your phone (Smart App Banner, pricing table, download button).
- [ ] Paste the changed URLs into Google Search Console's URL Inspection and click "Request indexing".
- [ ] New schema? Test the page in [Google's Rich Results Test](https://search.google.com/test/rich-results).

## Monthly

- [ ] Run the AI visibility prompts in [marketing/ai-visibility.md](marketing/ai-visibility.md) (first Monday).
- [ ] Skim the weekly SEO checks runs for new broken links or Lighthouse drops.
