---
title: "Export golf scores to a spreadsheet (Excel, Numbers, or Google Sheets)"
html_title: "Export Golf Scores to Excel or a Spreadsheet | Golf Caddie"
description: "How to export golf scores to Excel, Numbers, or Google Sheets: what's in each column, formulas for putts and score per hole, and questions to ask an AI."
permalink: /apps/golf-caddie/guides/export-golf-scores-spreadsheet/
image: /assets/og/export-golf-scores-spreadsheet.png
date: 2026-11-24
last_modified_at: 2026-11-24

answer: >-
  Use a scorecard app that exports a CSV file, which opens in Excel, Numbers,
  and Google Sheets. In Golf Caddie, go to Settings, then Your Data, then
  Export Rounds (CSV). You get one row per hole for every round, with strokes,
  putts, penalties, and score vs par. The export is free and needs no account.

faq:
  - q: "Is exporting rounds free in Golf Caddie?"
    a: "Yes. Export Rounds (CSV) is part of the free iPhone app. Pro isn't needed."
  - q: "Why is the Export Rounds button grayed out?"
    a: "It stays disabled until at least one round has a score. Score a hole, and the button turns on."
  - q: "Does the export include rounds I haven't finished?"
    a: "Yes. Every round with a score is in the file, and the round_status column says finished or in progress. A round in progress has a blank end_time."
  - q: "Can I import a spreadsheet back into Golf Caddie?"
    a: "No. The export goes one way, out of the app. Your rounds stay in the app and in your iCloud account."

related:
  - title: "How to track putts"
    url: /apps/golf-caddie/guides/how-to-track-putts/
  - title: "Golf scorecard app with no account"
    url: /apps/golf-caddie/guides/golf-scorecard-app-no-account/
  - title: "How to keep score in golf"
    url: /apps/golf-caddie/guides/how-to-keep-score-in-golf/

cta_heading: "Keep score now, analyze it later"
---
{%- include golf-caddie-vars.html -%}

| The {{ gc.short_name }} export | |
|---|---|
| Where | Settings → Your Data → Export Rounds (CSV) |
| File | `Golf Caddie Rounds <date>.csv`, UTF-8 |
| Rows | One per hole you played, for every round with a score, oldest first |
| Opens in | Excel, Numbers, Google Sheets, or any spreadsheet app |
| Send it to | Files, Mail, AirDrop, or another app |
| Cost | Free, no Pro needed |

## Can you export golf scores to a spreadsheet?

Yes, if your scorecard app exports a CSV file. CSV is a plain spreadsheet format that Excel, Numbers, and Google Sheets all open. In {{ gc.short_name }}, go to Settings, then Your Data, then Export Rounds (CSV), and choose where to send the file. You get every round you've scored, one row per hole.

Exporting gives you something an app's stats screen can't: your numbers in a place you control, to sort, filter, and chart however you like. It's also a backup that doesn't depend on any app.

{% comment %}
TODO(owner): screenshots. Add a screenshot of Settings → Your Data with the Export Rounds (CSV) button,
and one of a real export opened in Numbers or Excel (a few rows is enough). There's no image of either
in apps/golf-caddie/images/ yet.
{% endcomment %}

{% include download-cta.html text="Score your rounds now and export them whenever you like. Free on iPhone." %}

## What's in each column of the export?

Each row is one hole of one round. The first columns say which round it belongs to: date, start and end time, course, and whether it was 18 holes, the Front 9, or the Back 9. The rest are that hole's numbers: par, strokes before the green, putts, penalty strokes, the hole score, and the score vs par.

| Column | What it holds |
|---|---|
| `date` | The day of the round |
| `start_time`, `end_time` | When the round started and ended, in your iPhone's time zone. `end_time` is blank until you end the round |
| `course` | The course name for the round |
| `round_type` | 18 Holes, Front 9, or Back 9 |
| `round_status` | finished or in progress |
| `hole` | The hole number (10 to 18 on a Back 9) |
| `par` | Par for the hole |
| `strokes_before_green` | Strokes before you reached the green |
| `putts` | Putts on the green |
| `penalty_strokes` | Penalty strokes on the hole |
| `hole_score` | The total for the hole |
| `hole_vs_par` | The hole score minus par: 0 is par, 1 is a bogey, -1 is a birdie |

Only holes you played are in the file, so a round you stopped after 12 holes has 12 rows. There's no round number column: a round is the rows that share the same `date`, `start_time`, and `course`.

## How do you open the file in Excel, Numbers, or Google Sheets?

Send the file to wherever you'll open it, then open it there. On a Mac or PC, double-click it, or use File, then Open, in Excel or Numbers. In Google Sheets, use File, then Import, and upload it. The file is saved as UTF-8, so course names with accents open correctly.

- **iPhone or iPad:** send it to Files, then open it in Numbers, or the Excel or Google Sheets app.
- **Mac:** AirDrop it to your Mac and double-click it.
- **Windows:** email it to yourself and open it in Excel.
- **Google Sheets:** File → Import → Upload, then pick "Insert new sheet".

Turn on the spreadsheet's filter on the header row first. Filtering by `course` or `round_type` is the quickest way to look at one course or one nine at a time.

## Which numbers are worth calculating?

Start with putts per round, score vs par by hole, and penalty strokes per round. Those three tell you whether strokes are leaking on the green, on particular holes, or from trouble off the tee. Each needs one formula, and they work the same way in Excel, Numbers, and Google Sheets.

These assume the export starts in cell A1, so the columns run from A (`date`) to M (`hole_vs_par`):

| What you want | Formula |
|---|---|
| Putts in one round | `=SUMIFS(J:J, A:A, "2026-11-01", D:D, "Pebble Beach")` |
| Three-putt holes, all rounds | `=COUNTIF(J:J, ">=3")` |
| Average score vs par on hole 7 at one course | `=AVERAGEIFS(M:M, D:D, "Pebble Beach", G:G, 7)` |
| Penalty strokes, all rounds | `=SUM(K:K)` |
| Holes played at par or better | `=COUNTIF(M:M, "<=0")` |

Change the date, course, and hole number to your own. The date has to match the way your spreadsheet shows the `date` column.

For trends, a pivot table does the rest: rows by `course` and `hole`, values as the average of `hole_vs_par`. The holes with the highest average are the ones costing you the most. For what to look for in putting numbers, see [how to track putts](/apps/golf-caddie/guides/how-to-track-putts/).

## Can an AI assistant analyze your golf rounds?

Yes. Attach the CSV to a chat with an AI assistant and ask a specific question. Because every row has the hole, par, putts, and penalties, it can answer questions like "which holes cost me the most against par?" without you building formulas. Check its answers against a formula or two.

Questions that work well, because the file has the data to answer them:

1. "Which three holes have my worst average score vs par at this course?"
2. "How many of my strokes over par came from putting, and how many from penalties?"
3. "Compare my front nine and back nine scores vs par across all my 18-hole rounds."
4. "Am I improving? Show my score vs par per round, oldest to newest."

The file doesn't hold fairways, greens in regulation, or club choice, so questions about those won't have an answer.

## Where does the file go, and is it private?

Only where you send it. {{ gc.short_name }} builds the file on your iPhone and hands it to the share sheet, and nothing is sent anywhere else. If you upload it to a cloud drive or an AI assistant, that service's own privacy terms apply to your copy.

The export is also a simple backup. Your rounds already stay in your own iCloud account, as described in [golf scorecard app with no account](/apps/golf-caddie/guides/golf-scorecard-app-no-account/), and a CSV saved to Files or emailed to yourself is a second copy you can open anywhere.
