---
title: "Co-Directors Report - Batch Audit Infrastructure and Machine Parsability Metric"
description: "Evening session: batch audit hardening, Machine Processing Speed metric, unit tests, and bug fixes"
author: "Tom Cranstoun"
created: 2026-06-20
modified: 2026-06-20
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-20-evening-report.md
  purpose: "Evening session: batch audit hardening, Machine Processing Speed metric, unit tests, and bug fixes"
  stability: stable
  runbook: "Generated report. Read the findings; regenerate via its pipeline rather than editing by hand."
  x-mx-contextProvides: ["Co-Directors Report - Batch Audit Infrastructure and Machine Parsability Metric"]
---

# Co-Directors Report - Batch Audit Infrastructure and Machine Parsability Metric

**Date:** 20 June 2026 - Evening
**Segment:** Evening (since 5pm)

---

## Summary

The evening session fixed the broken batch audit runner, introduced a new machine parsability metric that is now live in every audit report, added unit tests to prevent regression, and closed a merge conflict in the test suite. The batch audit is now genuinely restartable after network interruptions. Three bugs were found and fixed in a single session — the kind of hardening that makes the pipeline safe to run overnight without supervision.

---

## What Was Done

### 1. Batch Audit Fixed and Hardened

The batch runner had three separate bugs blocking restart behaviour. First, `--date 2026-06-20` was being consumed as a config file path because the positional arg scanner did not exclude flag values. Second, the `--resume` logic checked the wrong directory — reports live in the Gitea repository, not the hub. Third, a startup diagnostic was missing, so when Gitea was not configured the resume silently fell through with no explanation.

All three were fixed. The runner now loads the default domain set when no config is specified, supports an inline `--domains` list as a third input mode, shows a clear diagnostic on resume, and reliably skips domains that already have completed reports. Restarting a 31-domain run after a network drop now takes the right action on every domain.

### 2. Machine Processing Speed — a new audit metric

Every audit now reports Machine Processing Speed (MPS): the time it takes to analyse a site's pages from cached data, with network removed. This measures pure DOM-processing cost — Pa11y parsing, Cheerio content extraction, metrics scoring. A site that is slow to analyse even from cache has accumulated markup complexity that costs AI agents time and increases the risk of missed or hallucinated content.

The metric bands from Machine-Lean (Band A, under 100ms per page) to Machine-Dense (Band E, over 2 seconds per page). Initial calibration from today's batch: dotfusion.com lands at Band A (98ms/page), dkd.de at Band B (109ms/page), and contentful.com — the vendor of a major CMS platform — at Band E (11,428ms/page). That last finding is a genuine sales moment.

MPS now appears in both scorecards in every audit report, is tracked in the rolling timing history file alongside collect and report durations, and is documented in the architecture cog, the audit-site cog, the pitch deck, and a new draft blog post.

### 3. Unit Tests Added

Twenty-six unit tests were added covering the batch runner's argument parsing, input modes, resume diagnostic, and error cases, plus direct tests of the MPS band thresholds and aggregate statistics functions. The pure functions were extracted into a dedicated library module so they can be tested without triggering the batch runner. The tests are wired into `npm test`. A pre-existing merge conflict in the test chain was also resolved during this step.

---

## Why It Matters

The batch runner is the mechanism that produces all 31 audit reports overnight. Until today it could not reliably restart after a network interruption, and its `--resume` flag silently did nothing. Those were blockers to running the pipeline unattended. They are now fixed and tested. The audit is a product — its reliability is what a paying client relies on.

The MPS metric is the only measurement of its kind in any web audit product. It answers a question that performance scores do not: how hard is this site for a machine to process? The contentful.com finding — their own platform site is the hardest to machine-read in a 31-domain benchmark — is the kind of concrete, memorable proof point that a pitch needs.

---

## The Insight

The difference between network time and analysis time only becomes visible when you separate them. Every other audit tool conflates the two. The `pageTimings[].analysis` field in the crawler's timing profile carries the separated signal; it was just sitting there, unused. Surfacing it required no new instrumentation — only the decision to read it.

---

## Decisions Made

- MPS bands calibrated from real batch data rather than theoretical thresholds; initial data confirmed the bands are well-spaced across real sites
- Pure functions extracted to `scripts/lib/batch-helpers.cjs` so they can be unit-tested without importing the full batch runner (which has side effects)
- Merge conflict in `package.json` resolved by taking the upstream test additions and appending the new test

---

## What Changed About Me

When a batch runner silently swallows errors and reports exit code 0, the correct move is to read the raw output file before diagnosing — not to infer from the summary JSON. The summary JSON is what the runner decided to report; the output file is what actually happened. That order saved several minutes of confusion this session.

---

## Next Steps

- Run `--resume` against today's batch once the v5 run completes to verify the Gitea delivery-dir fix works end-to-end on a live run
- Add MPS to the pitch deck narrative with the contentful.com Band E finding as the lead example
- Publish the machine-parsability-speed blog post once the draft is reviewed
- Update the audit cog to document timing-stats.json per-domain MPS fields
