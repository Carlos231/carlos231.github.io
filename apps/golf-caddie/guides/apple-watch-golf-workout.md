---
title: "Log golf as a workout on Apple Watch"
html_title: "Apple Watch Golf Workout: How to Log a Round | Golf Caddie"
description: "How to log a round as a golf workout on Apple Watch: Apple's Workout app vs a scorecard app's Health setting, what each records, and how to avoid two entries."
permalink: /apps/golf-caddie/guides/apple-watch-golf-workout/
image: /assets/og/apple-watch-golf-workout.png
date: 2026-11-24
last_modified_at: 2026-11-24

answer: >-
  Two ways. Apple's Workout app has a Golf workout type: start it on the first
  tee and end it after the 18th. Or let your scorecard app do it. In Golf
  Caddie, the Workout Tracking setting saves each round to Apple Health as a
  Golf workout when you end it, or runs a live workout on the watch.

faq:
  - q: "Is Golf a workout type on Apple Watch?"
    a: "Yes. Apple lists Golf among the workout types in the Workout app. For activities that aren't on the list, Apple suggests choosing Other."
  - q: "Is Golf Caddie's Save Summary setting free?"
    a: "Yes. Save Summary is part of the free app and works whether you end the round on your iPhone or your Apple Watch. Full Session, the live workout on the watch, needs the Apple Watch app, which is part of Golf Caddie Pro."
  - q: "Where do I find the workout after the round?"
    a: "In the Health app on your iPhone, under workouts, and in the Fitness app's workout history. Golf Caddie's Save Summary workout also stores the course name, your gross score, and the number of holes."
  - q: "What does Golf Caddie save if I end a round twice?"
    a: "Only one workout. A round is logged once, so reopening and ending an already finished round doesn't add a second entry."

related:
  - title: "Apple Watch golf scorecard without GPS"
    url: /apps/golf-caddie/guides/apple-watch-golf-scorecard-without-gps/
  - title: "Apple Watch battery for 18 holes"
    url: /apps/golf-caddie/guides/apple-watch-battery-golf-round/
  - title: "Keep golf score from your iPhone Lock Screen"
    url: /apps/golf-caddie/guides/golf-scorecard-lock-screen/

cta_heading: "Keep score and log the round in one app"
---
{%- include golf-caddie-vars.html -%}

| Way to log a round | What it records | Cost |
|---|---|---|
| Apple's Workout app, Golf type | A workout from when you tap start to when you tap end | Built into Apple Watch |
| {{ gc.short_name }}, Save Summary | A Golf workout saved to Apple Health when you end the round, with the course, your score, and the number of holes | Free |
| {{ gc.short_name }}, Full Session | A live workout on Apple Watch while the round is active: heart rate, calories, and steps | Pro (one-time) |
| {{ gc.short_name }}, Off | Nothing in Health, just the scorecard | Free |

## How do you log a round of golf as a workout on Apple Watch?

Start a workout when you tee off and end it after the last hole. You can do that in Apple's own Workout app, which has a Golf workout type, or let your scorecard app save the workout for you. Either way, the round lands in Apple Health and the Fitness app as a golf workout.

In Apple's Workout app, turn the Digital Crown to Golf, tap the start button, and play. When you finish, tap End. Apple's guide to [starting a workout](https://support.apple.com/guide/watch/start-a-workout-apdd16e8761a/watchos) has the details, and its [list of workout types](https://support.apple.com/105089) includes Golf.

{% include download-cta.html text="Keep score and log the round as a Golf workout in one app." %}

## What's the difference between Apple's Workout app and a scorecard app's Health setting?

Apple's Workout app logs the activity but doesn't know your score. A scorecard app that writes to Apple Health logs the round and can attach what happened: {{ gc.short_name }}'s Save Summary adds the course name, your gross score, and the number of holes. The trade-off is that you start and stop Apple's workout yourself.

| | Apple's Workout app | {{ gc.short_name }} Save Summary | {{ gc.short_name }} Full Session |
|---|---|---|---|
| Starts | When you tap start | Nothing to start | When a round is active |
| Ends | When you tap End | When you end the round | When the round ends |
| Live heart rate on the watch | Yes | No | Yes |
| Needs | Apple Watch | iPhone (watch optional) | Apple Watch and Pro |

If you forget to start Apple's workout on the first tee, the round is only partly logged. Save Summary can't be forgotten: it writes the workout when you tap End Round.

## How do you set up {{ gc.short_name }} to log your rounds?

Open Settings on your iPhone and choose a Workout Tracking option: Off, Save Summary, or Full Session. It's off until you turn it on, and your Apple Watch follows whatever you pick on the iPhone. The first time you use Full Session, your watch asks permission to save workouts to Health.

- **Save Summary** writes a Golf workout to Health when the round ends, whether you end it on your iPhone or your Apple Watch. It's free.
- **Full Session** runs a live workout on Apple Watch while your round is active, tracking heart rate, calories, and steps. If you start the round on your iPhone, it opens the watch app to begin the workout. It needs Pro.
- **Off** keeps rounds out of Health completely.

Full Session runs the heart rate sensor for the whole round. Before you pick it, read [Apple Watch battery for 18 holes](/apps/golf-caddie/guides/apple-watch-battery-golf-round/).

{% comment %}
TODO(owner): screenshots. Add a screenshot of the Workout Tracking setting (Off / Save Summary / Full Session)
on iPhone, and one of a saved Golf workout in the Health or Fitness app showing the course and score.
{% endcomment %}

## Should you use Apple's Workout app and a scorecard app together?

Pick one way to log each round. If Apple's Workout app is running and {{ gc.short_name }} is set to Save Summary or Full Session, both save a workout for the same round, so you'd see two entries. Keep scoring in {{ gc.short_name }} and let one of them do the logging.

A simple way to choose:

1. **You want heart rate and calories live on your wrist:** Full Session in {{ gc.short_name }}, or Apple's Workout app with Workout Tracking set to Off.
2. **You want the round in Health with your score attached:** Save Summary.
3. **You don't care about Health:** Off, and score as usual.

## What does a golf workout save to Apple Health?

The time of the activity, and whatever the app adds. Apple's Workout app records your workout from start to end. {{ gc.short_name }}'s Save Summary workout also stores the course name, your gross score, and how many holes you played, so you can tell your rounds apart in Health later.

Apple's Fitness app on your iPhone keeps a record of your activity, including workouts from compatible third-party apps, as Apple describes in its guide to [tracking daily activity](https://support.apple.com/guide/watch/track-daily-activity-apd3bf6d85a6/watchos). Your scores themselves stay in {{ gc.short_name }} and your iCloud account. For a hole-by-hole record you can open anywhere, [export your rounds to a spreadsheet](/apps/golf-caddie/guides/export-golf-scores-spreadsheet/).
