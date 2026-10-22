---
title: "Golf scorecard app without a subscription: what you get and what to check"
html_title: "Golf Scorecard App Without a Subscription | Golf Caddie"
description: "Looking for a golf scorecard app without a subscription? One-time purchase vs subscription, what's free in Golf Caddie, and how to check any app before you buy."
permalink: /apps/golf-caddie/guides/golf-scorecard-app-without-subscription/
date: 2026-10-22
last_modified_at: 2026-10-22

answer: >-
  Yes. Golf Caddie is a golf scorecard app with no subscription: the iPhone
  scorecard is free with unlimited rounds, and Pro is a single one-time
  purchase that adds Apple Watch scoring, Siri, and the Lock Screen Live
  Activity. The free trial needs no credit card, so there's nothing to cancel
  when it ends.

faq:
  - q: "Does Golf Caddie have ads?"
    a: "No. There are no ads in the app, and its App Store privacy label says \"Data Not Collected.\" The free version is the full iPhone scorecard, without ads."
  - q: "Will I be charged when the free trial ends?"
    a: "No. The 14-day Pro trial starts inside the app and doesn't involve an App Store purchase or a card. When it ends, Pro features lock until you buy Pro, and everything free stays free."
  - q: "If I buy Pro, do I pay again for new versions?"
    a: "No. Pro is a one-time purchase tied to your Apple ID. You keep it through app updates and can restore it on a new iPhone or Apple Watch with Restore Purchase in Settings."
  - q: "Is the price the same in every country?"
    a: "The App Store sets local prices. The US price is shown in our pricing table; other countries pay the equivalent App Store price in their currency."

related:
  - title: "Golf scorecard app with no account"
    url: /apps/golf-caddie/guides/golf-scorecard-app-no-account/
  - title: "Apple Watch golf scorecard without GPS"
    url: /apps/golf-caddie/guides/apple-watch-golf-scorecard-without-gps/
  - title: "Golf Caddie pricing: what's free and what's Pro"
    url: /apps/golf-caddie/#pricing

cta_heading: "Free to start. Pro is yours to keep."
---
{%- include golf-caddie-vars.html -%}

| {{ gc.short_name }} pricing at a glance | |
|---|---|
| Subscription | None |
| iPhone scorecard | Free, unlimited rounds, no ads |
| Pro | One-time ${{ gc.pricing.pro_price }} (US price; other countries pay the local App Store equivalent) |
| Free trial | {{ gc.pricing.trial_days }} days of Pro, no credit card |
| When the trial ends | {{ gc.pricing.trial_note }} |
| New iPhone or Apple Watch | Restore Purchase in Settings; no need to buy again |

## Is there a golf scorecard app without a subscription?

Yes. Several scorecard-first apps sell a one-time upgrade instead of a subscription, and {{ gc.short_name }} is one of them. The iPhone scorecard is free with unlimited rounds. Pro, which adds Apple Watch scoring, Siri, and the Lock Screen Live Activity, is a single ${{ gc.pricing.pro_price }} purchase (US price). You pay once and keep it.

Many golf GPS apps sell their premium features as a subscription, often monthly or yearly. That model makes sense when the app keeps delivering a service, like course maps or shot analysis. A scorecard doesn't need one: once it's on your phone, it works.

## What's the difference between a one-time purchase and a subscription?

A one-time purchase is paid once and stays on your Apple ID: you keep it through updates and restore it on new devices. A subscription charges you every week, month, or year until you cancel it. Deleting the app doesn't cancel a subscription; you cancel it in your Apple ID settings.

On iPhone, you can see and cancel subscriptions in **Settings → your name → Subscriptions** ([Apple's guide](https://support.apple.com/en-us/118428)). One-time purchases like {{ gc.short_name }} Pro never show up there, because they don't renew. If you get a new iPhone, open the app and tap Restore Purchase ([Apple on restoring in-app purchases](https://support.apple.com/en-us/108096)).

Free trials are worth a close look. Many subscription trials turn into a paid subscription automatically when the trial ends, charged to the payment method on your Apple ID, unless you cancel first. {{ gc.short_name }}'s {{ gc.pricing.trial_days }}-day trial starts inside the app without an App Store purchase, so there's nothing to cancel.

## What's free in {{ gc.short_name }}, and what does Pro add?

Everything you need to keep score on iPhone is free, with unlimited rounds: strokes, putts, penalties, score vs par, custom pars, stats, sharing, and more. Pro adds the ways to score without your phone in hand: the Apple Watch app, Siri voice scoring, and the Lock Screen Live Activity. It's a one-time ${{ gc.pricing.pro_price }} (US price).

**Free:**
{% for f in live_features %}{% if f.tier == "free" %}
- {{ f.name }}{% endif %}{% endfor %}

**Pro (one-time ${{ gc.pricing.pro_price }}):**
{% for f in live_features %}{% if f.tier == "pro" %}
- {{ f.name }}{% endif %}{% endfor %}

The full comparison is in the [pricing table]({{ gc.urls.page }}#pricing).

## How do you check whether a golf app uses a subscription?

Check the App Store page before you download it. Look for "Offers In-App Purchases" near the Get button, then scroll to the In-App Purchases list in the Information section. Names like "Monthly," "Annual," or "Weekly" usually mean a subscription. Inside the app, look for "auto-renews" on the upgrade screen.

A quick checklist:

1. **In-App Purchases list:** one item, or several with monthly and yearly prices?
2. **Upgrade screen:** does it say "auto-renews," "per month," or "per year"?
3. **Free trial:** does it ask for payment details before it starts?
4. **What stays free:** can you keep scoring if you never pay?

## When is a golf app subscription worth paying for?

A subscription can be worth it when the app keeps delivering something that costs money to run: GPS course maps, shot tracking from sensors, handicap services, or detailed analysis. If you use those every round, a yearly fee can make sense. If you mainly want an accurate score, a free scorecard or a one-time upgrade covers it.

It helps to be honest about what you'd actually use. Our guide to [keeping score on an Apple Watch without GPS](/apps/golf-caddie/guides/apple-watch-golf-scorecard-without-gps/) covers what you give up without GPS and the simple ways around it.

## What happens when the {{ gc.short_name }} free trial ends?

Nothing you have to act on. When the {{ gc.pricing.trial_days }}-day trial ends, Pro features lock and everything free keeps working: your iPhone scorecard, your rounds, and your stats. On Apple Watch you'll see "Trial Ended" with a prompt to unlock on your iPhone. You only pay if you choose to buy Pro.

If you decide later, Pro is the same one-time ${{ gc.pricing.pro_price }} (US price), and it unlocks on your iPhone and Apple Watch together. You never need an account for any of it; see [golf scorecard app with no account](/apps/golf-caddie/guides/golf-scorecard-app-no-account/).
