# Before you commit

The workflow for every change to this site. Working file, never published.
For **what to do when** (merge day, release day, weekly, monthly), see [marketing/runbook.md](marketing/runbook.md).

## One-time setup

Turn on the pre-commit hook (it runs the automatic checks below on every commit):

```sh
git config core.hooksPath .githooks
```

## 1. Work on a branch

- Never commit to `main`. Use a branch: `git switch -c <short-name>`. The owner creates branches; Claude works on whichever one is checked out.
- `main` is what's live. Anything merged into it is published within a minute or two.

## 2. Check the content

Go through this list for anything you changed:

- [ ] **Facts are real.** Every app fact (price, features, free vs Pro, requirements, links) comes from [_data/golf_caddie.yml](_data/golf_caddie.yml). No invented stats, reviews, ratings, or testimonials. No `aggregateRating`.
- [ ] **Facts changed? Edit only the data file.** Pages, schema, and `llms.txt` update from it. Two spots still hardcode $2.99 and need a manual edit: the `09-price.webp` alt text and `.agents/product-marketing.md`.
- [ ] **Unreleased features are hidden.** Anything not live on the App Store yet has `since: "<version>"` in the data file and its page copy is wrapped in `{% unless upcoming == "<version>" %}...{% endunless %}`, with `upcoming_version` set. The hook prints the live version.
- [ ] **Rewrote existing copy?** You have the before → after and it fits the voice in [.agents/product-marketing.md](.agents/product-marketing.md).
- [ ] **Campaign links untouched.** Download buttons use `{{ gc.urls.download }}` (`pt=128660093&ct=Website`), or `{{ gc.urls.download_guides }}` (`ct=Guides`) on guide pages.
- [ ] **New working file or folder?** Add it to `exclude:` in [_config.yml](_config.yml), or Jekyll will publish it.

For a **new guide** (copy [apps/golf-caddie/guides/_template.md](apps/golf-caddie/guides/_template.md); its header lists the same rules):

- [ ] **One page per search.** The target query isn't owned by another page (keyword map in [content-backlog.md](content-backlog.md)).
- [ ] `permalink: /apps/golf-caddie/guides/<slug>/` is set (IndexNow needs it), and `image: /assets/og/<slug>.png` exists (`node marketing/tools/og-image.mjs`).
- [ ] `html_title` is 50–60 characters with the query first and "| Golf Caddie" last; `description` is 150–160 characters; `answer` is a direct 40–60 word answer.
- [ ] Each H2 is a question with a 40–60 word answer right under it. 3–5 FAQ items that no other guide already answers.
- [ ] Exactly one `{% include download-cta.html text="…" %}`, after the first section. No prices in `text`.
- [ ] The body uses the one strong point that fits the topic. No battery claims outside the battery guide, and no pasted free/Pro feature lists (link to `{{ gc.urls.page }}#pricing`).
- [ ] Real content gaps (screenshots, quotes, measured tests) are marked `{% comment %}TODO(owner): …{% endcomment %}`. Nothing invented.
- [ ] `date` and `last_modified_at` are set; `related` links point to pages that exist.
- [ ] **Linked in:** from at least 3 other guides, and its slug is in a topic group in [guides/index.html](apps/golf-caddie/guides/index.html).
- [ ] The page is genuinely useful to a golfer on its own. No thin or near-duplicate pages.

## 2b. Build and check locally

The tools in [marketing/tools/](marketing/tools/README.md) build the site the way GitHub Pages does and check it. Nothing is added to the repo.

```sh
SITE=$(marketing/tools/build-local.sh)          # Jekyll 3.10 into a temp folder
node marketing/tools/og-image.mjs               # social image for any guide without one (then rebuild)
python3 marketing/tools/check-site.py "$SITE"   # must end with "0 failures"
```

Then screenshot each new or changed page at phone and desktop widths (`screenshots.mjs`, see the README) and look at them before committing.

## 3. Stage and commit

```sh
git status                      # review what changed
git add <files>                 # stage specific files, not "git add ."
git commit -m "Add how to keep score in golf guide"
```

- One concise single-line message per logical change.
- The hook runs automatically. Red ✖ blocks the commit; yellow ⚠/ℹ are reminders.

**What the hook checks:** no `.DS_Store`, no merge conflict markers, `<!DOCTYPE html>` on pages, no `localhost` links, large images (>1 MB), placeholder App Store links, every working file still excluded in `_config.yml`, the IndexNow key file still present, `_data/golf_caddie.yml` and `lighthouserc.json` still parse, guide front matter complete with a valid permalink, exactly one inline download box per guide, a social image, hardcoded prices/IDs in guides, and the live App Store version compared with the data file (it tells you when the release-day flip is due).

**What it can't check:** that the site builds, that the schema is valid, or that links work. Use `marketing/tools/` for that before committing (section 2b); GitHub Actions checks links again after merge.

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
