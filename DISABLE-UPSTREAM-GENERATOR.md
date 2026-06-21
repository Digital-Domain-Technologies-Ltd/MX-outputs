---
title: "Disable the Upstream Book Generator"
description: "Runbook for turning off the pandoc pipeline that used to generate the MX books, now that html/books/** is canonical hand-maintained source."
author: Tom Cranstoun
created: 2026-06-11
modified: 2026-06-11
type: runbook
mx:
  status: active
  audience: [humans]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/DISABLE-UPSTREAM-GENERATOR.md
  purpose: "Give whoever owns the generator repo the exact steps to stop it overwriting the canonical book HTML."
  stability: active
  runbook: "Follow once in the generator/source repo, then enable branch protection here."

---

# Disable the Upstream Book Generator

The book manuscripts under `html/books/**` (the Handbook, the Protocols, and the
consolidated Appendices) are now **canonical, hand-maintained HTML**. They used
to be produced by a pandoc pipeline from markdown that lives in another repo.
That pipeline must be turned off, or it will silently overwrite hand edits the
next time it runs.

## Why this doc exists here

`mx-outputs` is a submodule and is scoped on its own. The pipeline that writes
into it lives in the **parent / source repo**, which cannot be edited from an
`mx-outputs`-only session. This runbook is the hand-off for someone working in
that repo.

## What is already enforced in `mx-outputs` (done)

- `scripts/check_canonical_source.py` fails if any `html/books/**` file carries
  the pandoc `generator` marker (the fingerprint of a regenerate).
- `.github/workflows/checks.yml` runs that tripwire (via
  `scripts/session_check.py --strict`) on every push to `main` and every PR.

This **blocks a regenerated file from merging**, but it does not stop the
generator from running. Two things still have to happen.

## Step 1 — Turn the generator off (in the generator/source repo)

Find the job that produces the books. It is one of:

- a **GitHub Actions workflow** that runs `pandoc … -o …/mx-handbook.html`
  (search the source repo for `pandoc`, `mx-handbook`, `mx-protocols`,
  `appendix-`);
- a **build script / Makefile** invoked locally or on release;
- a **publish step** that copies build products into the `mx-outputs`
  submodule and commits them.

Disable it:

1. Remove (or comment out) the step that writes `html/books/**`, `pdf/books/**`,
   and `mx-site/books/appendices/appendix-*.html`.
2. If the whole repo existed only to generate these books, **archive it** —
   the markdown is no longer the source of truth; this HTML is.
3. Leave the appendices alone: the per-appendix site pages are now generated
   **inside `mx-outputs`** by `scripts/split_appendices.py` from
   `html/books/appendices/mx-appendices.html`. The upstream must not also
   produce them, or the two will fight.

## Step 2 — Make the tripwire blocking (in `mx-outputs` repo settings)

CI currently *reports* a regenerate; branch protection makes it *block* one.

1. Repo → **Settings → Branches → Branch protection rules → add rule** for
   `main`.
2. Enable **Require status checks to pass before merging** and select the
   **`checks`** workflow.
3. (Recommended) Enable **Require a pull request before merging** so direct
   pushes to `main` cannot bypass the check.

## Step 3 — Verify

From an `mx-outputs` checkout, after the generator is disabled:

```bash
python3 scripts/check_canonical_source.py   # must stay clean
python3 scripts/session_check.py --strict    # full gate, must exit 0
```

If a later change reintroduces a generator marker, both commands fail and, with
Step 2 in place, the PR cannot merge.

## Status

- [x] In-repo tripwire + CI enforcement (`mx-outputs`).
- [ ] Generator job disabled in the source repo (**Step 1** — owner action).
- [ ] Branch protection requiring `checks` on `main` (**Step 2** — owner action).
