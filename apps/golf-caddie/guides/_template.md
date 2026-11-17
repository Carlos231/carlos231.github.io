---
# Copy this file to apps/golf-caddie/guides/<slug>.md to start a guide.
# Files starting with "_" are never published, so this template stays private.
#
# Rules every guide follows (details: CONTRIBUTING.md and marketing/tools/README.md):
#  1. One page per search. Check the keyword map in content-backlog.md first; don't target a query
#     another page owns (home: stroke/putt counter; app page: simple scorecard, Apple Watch scorecard).
#  2. Facts come from _data/golf_caddie.yml or a cited, dated source. Never invent stats, reviews, or ratings.
#  3. In the body, use the one strong point that fits the topic (Differentiation in .agents/product-marketing.md).
#     The layout's author note tells the product story, so don't repeat it. No battery claims outside the
#     battery guide.
#  4. Exactly one inline download box (below), after the first section. The layout adds the badge at the bottom.
#  5. Anything that needs the owner's real content (screenshots, quotes, measured tests) goes in a
#     {% comment %}TODO(owner): ...{% endcomment %} block, so it never renders.
#  6. Link it in: from at least 3 other guides, and add the slug to a topic group in guides/index.html.
#  7. Make the social image (node marketing/tools/og-image.mjs), then build, check, and screenshot it
#     (marketing/tools/README.md) before committing.

layout: guide                     # set by _config.yml defaults too
title: ""                         # H1, og:title, breadcrumb. Phrase it like the search query.
html_title: ""                    # <title>, 50–60 characters: query first, "| Golf Caddie" last
description: ""                   # meta description, 150–160 characters: the query plus a reason to click
permalink: /apps/golf-caddie/guides/<slug>/   # required, so IndexNow can map the file to its URL
image: /assets/og/<slug>.png      # social image, made by marketing/tools/og-image.mjs from `title`
date: YYYY-MM-DD                  # first published (Article datePublished)
last_modified_at: YYYY-MM-DD      # last meaningful update (Article dateModified, "Updated" line)

# Answer-first intro: a direct 40–60 word answer to the main question. No Liquid here, so keep
# Golf Caddie's price out (say "a one-time purchase").
answer: >-

# Optional facts table. Values can use Markdown links.
facts:
  caption: ""
  rows:
    - label: ""
      value: ""

# FAQ: 3–5 real follow-up questions. Rendered at the bottom and as FAQPage JSON-LD. Answers can use
# Markdown. Don't repeat a question another guide's FAQ already answers.
faq:
  - q: ""
    a: ""

# Related pages (the Golf Caddie product page is always added). Only pages that exist.
related:
  - title: ""
    url: ""

# Optional heading for the bottom CTA box (default: "Keep score the simple way").
cta_heading: ""

# If this guide replaces an older one, list the old URL here and delete the old file:
# redirect_from:
#   - /apps/golf-caddie/guides/<old-slug>/
---
{%- include golf-caddie-vars.html -%}

## Question phrased the way golfers ask it?

A direct 40–60 word answer goes here, right under the heading.

Then the detail: steps, examples, a table, and internal links. Use {{ gc.short_name }}, {{ gc.pricing.pro_price }}, and {{ gc.pricing.trial_days }} instead of typing app facts.

{% include screenshot.html file="04-just-golf" alt="Describe exactly what the screenshot shows" caption="One line that says why it matters." %}

{% comment %}
TODO(owner): screenshots. Say which real screenshot or photo would make this section first-hand.
TODO(owner): user quotes. A real review, with the reviewer's name, date, and OK to quote. Never invent one.
{% endcomment %}

{% include download-cta.html text="One line that ties the download to this guide's topic (no prices)." %}

## Second question?

A direct 40–60 word answer, then detail. In comparisons, don't paste the free and Pro feature lists: use one sentence and link to [what's free and what Pro adds]({{ gc.urls.page }}#pricing).

For competitor facts, check their own site and App Store listing this week, write "as of <Month YYYY>", say what they do well, and end the page with a dated sources line:

<small>Sources, checked <Month D, YYYY>: [page name](https://example.com). Prices and plans change, so check before you buy.</small>
