---
title: "What circles and squares mean on a golf scorecard"
html_title: "Golf Scorecard Circles and Squares Explained | Golf Caddie"
description: "What do circles and squares mean on a golf scorecard? A circle is a birdie, two circles an eagle, a square a bogey, two squares a double bogey or worse."
permalink: /apps/golf-caddie/guides/golf-scorecard-circles-and-squares/
image: /assets/og/golf-scorecard-circles-and-squares.png
date: 2026-11-24
last_modified_at: 2026-11-24

answer: >-
  On a golf scorecard, a circle around a hole score means a birdie, one under
  par, and a double circle means an eagle or better. A square means a bogey,
  one over par, and a double square means a double bogey or worse. A plain
  number with no mark is a par.

facts:
  caption: "Scorecard marks (score compared with the hole's par)"
  rows:
    - label: "Double circle"
      value: "Eagle or better: 2 or more under par"
    - label: "Circle"
      value: "Birdie: 1 under par"
    - label: "No mark"
      value: "Par"
    - label: "Square"
      value: "Bogey: 1 over par"
    - label: "Double square"
      value: "Double bogey or worse: 2 or more over par"

faq:
  - q: "Do I have to draw circles and squares on my scorecard?"
    a: "No. They're a scorekeeping habit, not part of the score. What counts is the number you write for each hole: your strokes plus any penalty strokes."
  - q: "What mark is used for a hole in one?"
    a: "It depends on the hole's par. On a par 3, a hole in one is two under par, an eagle, so it gets a double circle. On a par 4 it's three under, and Golf Caddie's card shows any score two or more under par with a double circle."
  - q: "What colors does Golf Caddie use for the marks?"
    a: "Under-par marks are red. A bogey's square is amber, and two or more over par is orange. Par stays a plain number."
  - q: "Do circles and squares change my score vs par?"
    a: "No. The marks only show how each hole compares with par. Your score vs par is still your total strokes minus the course's total par."

related:
  - title: "How to keep score in golf"
    url: /apps/golf-caddie/guides/how-to-keep-score-in-golf/
  - title: "How to track putts"
    url: /apps/golf-caddie/guides/how-to-track-putts/
  - title: "Golf scorecard app for 9 holes"
    url: /apps/golf-caddie/guides/golf-scorecard-app-9-holes/

cta_heading: "Get a scorecard that marks itself"
---
{%- include golf-caddie-vars.html -%}

## What do circles and squares mean on a golf scorecard?

They show how each hole went compared with par. A circle around the number is a birdie, one under par, and two circles are an eagle or better. A square is a bogey, one over par, and two squares are a double bogey or worse. A plain number with no mark is a par.

So on a par 4, a 3 gets a circle, a 2 gets a double circle, a 5 gets a square, and a 6 or more gets a double square. A 4 stays plain. Glance down a marked card and you can see where the round was won and lost, without adding anything up.

{% include screenshot.html file="03-share" alt="A shared Golf Caddie scorecard for 18 holes at Pebble Beach, with circles around birdie scores and squares around bogey scores, totals 81 and 10 over par" caption="A real Golf Caddie scorecard. Circles mark birdies and squares mark bogeys." %}

{% comment %}
TODO(owner): screenshots. The image above is the App Store marketing screenshot at 296px wide, so the
marks are small. Add a sharper share card from one of your own rounds that shows all four marks
(double circle, circle, square, double square), ideally cropped to one nine so the marks are easy to see.
{% endcomment %}

{% include download-cta.html text="Score each hole and get a shareable card with the marks drawn for you." %}

## How do you mark each score on a par 3, par 4, and par 5?

Compare the hole score with the hole's par, not with a fixed number. The same score can get a different mark on different holes. A 4 is a bogey on a par 3, a par on a par 4, and a birdie on a par 5. Mark the difference: under par gets circles, over par gets squares.

| Score | Par 3 | Par 4 | Par 5 |
|---|---|---|---|
| 2 | Circle (birdie) | Double circle (eagle) | Double circle (albatross) |
| 3 | No mark (par) | Circle (birdie) | Double circle (eagle) |
| 4 | Square (bogey) | No mark (par) | Circle (birdie) |
| 5 | Double square (double bogey) | Square (bogey) | No mark (par) |
| 6 | Double square (triple bogey) | Double square (double bogey) | Square (bogey) |
| 7 or more | Double square | Double square | Double square (double bogey or worse) |

For what counts as a stroke and how penalties are added before you mark anything, see [how to keep score in golf](/apps/golf-caddie/guides/how-to-keep-score-in-golf/).

## Why do golfers circle birdies and box bogeys?

Because the marks turn a row of numbers into a picture. On an unmarked card you have to compare every score with its par to see how you played. With circles and squares, a run of boxes on the back nine or a cluster of circles on the par 5s stands out straight away.

The marks also make patterns easy to spot over several rounds. If the same two holes are boxed every time you play a course, that's where to change your plan. For a closer look at one part of the game, [tracking your putts](/apps/golf-caddie/guides/how-to-track-putts/) shows whether the squares come from the green.

## Are circles and squares part of the official rules?

No. They're a convention golfers use to read a card quickly. Your score for a hole is the number of strokes you made plus any penalty strokes, and that number is what you sign for. Leave the marks off and the card is just as valid; draw them and nothing about your score changes.

That's worth knowing in a competition. If you're keeping a playing partner's card, write their number clearly first. Marks are a nice extra, but a number hidden by a messy circle or box is the thing that causes problems at the scorer's table.

## How does an app draw the marks?

An app that knows each hole's par can work out the mark for you. In {{ gc.short_name }}, you score each hole, and when you share the round, the card image draws every mark: a double circle for two or more under par, a circle for a birdie, a square for a bogey, and a double square for two or more over.

Under-par marks are red and over-par marks are amber and orange, so the card reads at a glance in a group chat. Sharing the card is free, and so is scoring on iPhone. Setting the right par for each hole is what makes the marks right, so set pars when you start the round or as you reach each hole.
