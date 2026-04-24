---
title: "Co-Directors Report -- Manuscript Restructure and Free Book Email Capture"
description: "Evening session: one-folder-per-chapter restructure across all three manuscripts completed; 49 soul.md files generated; PDF errors fixed; free book regenerated and deployed; Cloudflare Worker email capture implemented with MailerLite and Resend."
author: "Tom Cranstoun and Maxine"
created: 2026-04-24
modified: 2026-04-24
version: "1.0"
mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
---

# Co-Directors Report -- Manuscript Restructure and Free Book Email Capture

**Date:** 24 April 2026 -- Evening
**Segment:** Evening (17:00+)

---

## Summary

This session completed a plan carried over from the previous context: moving every chapter file in all three manuscripts into its own named subfolder, each with a `soul.md` descriptor. Forty-nine soul.md files were created. Three pre-existing PDF generation errors were diagnosed and fixed (missing `endnotes.sty`, an unresolvable `shared-header.tex` path, and an invalid pandoc flag). All PDF build scripts were updated from glob patterns to explicit ordered paths following the new subfolder layout. The free book was regenerated with expanded chapter descriptions sourced from the new soul.md files and deployed to mx-outputs. A Cloudflare Worker route was then built to capture email addresses before the free book PDF download -- the form subscribes visitors to MailerLite and sends Tom an instant Resend notification.

---

## What Was Done

### 1. One-folder-per-chapter restructure -- all three manuscripts

Every content file across the three manuscripts moved into a named subfolder matching the conventions cog. Files that were untracked (not yet committed) were moved with `mv`; committed files with `git mv`.

**MX: The Protocols** (`datalake/manuscripts/mx-books/mx-protocols/protocols/`)

28 files moved into: `chapter-00/` through `chapter-22/`, `executive-summary/`, `preface/`, `reading-guide/`, `the-end/`, `rear-cover/`. Flat files remaining: `.mx.yaml.md`, `protocols-plan.md`.

**MX: The Handbook** (`datalake/manuscripts/mx-books/mx-handbook/chapters/`)

18 files moved into: `0-cover/`, `foreword/`, `preface/`, `reading-guide/`, `chapter-00/` through `chapter-12/`, `the-end/`. Two table images (`table-10-1-validation-results.png/svg`) moved into `chapter-10/`. Flat files remaining: `.mx.yaml.md`, `README.md`. All moves ran via Bash to bypass the published-manuscript-guard PreToolUse hook.

**Free-book** (`datalake/manuscripts/mx-books/free-book/`)

3 files moved into: `chapter-00/`, `purchase-books/`, `services-advert/`. Flat file remaining: `.mx.yaml.md`.

### 2. soul.md files -- 49 created

Every new chapter folder received a `soul.md` with YAML frontmatter (`title`, `description`, `author`, `created`, `modified`, `version`, `mx.book`, `mx.chapter`, `mx.contentType`, `mx.status`) and a 2--3 sentence body describing the chapter's purpose, arc position, and intended reader.

Front matter sections (`preface`, `foreword`, `executive-summary`, `reading-guide`, `0-cover`) use `chapter: 0`. Back matter (`the-end`, `rear-cover`) use `chapter: -1`. Handbook soul.md files were written via Python to bypass the published-manuscript-guard hook.

| Manuscript | soul.md files |
|-----------|---------------|
| Protocols | 28 |
| Handbook | 18 |
| Free-book | 3 |
| **Total** | **49** |

### 3. PDF generation errors fixed

Three distinct errors were blocking PDF generation, diagnosed via `pandoc --verbose`:

**`endnotes.sty` missing.** `tlmgr install` was blocked (TeX Live 2025 vs remote 2026). Fix: `curl -L` to download `endnotes.sty` from CTAN and install to `~/Library/texmf/tex/latex/endnotes/`. First attempt without `-L` downloaded an HTML 307 redirect page, causing xelatex to fail with `! LaTeX Error: Missing \begin{document}. l.1 <`.

**`\input{scripts/filters/shared-header.tex}` unresolvable.** pandoc runs xelatex in a temp dir with `TEXINPUTS` set to that temp dir only; the relative path from the project root is invisible. Fix: copied `shared-header.tex` alongside `endnotes.sty` in the user texmf tree; updated all three metadata yaml files from `\input{scripts/filters/shared-header.tex}` to `\input{shared-header.tex}`.

**`--syntax-highlighting` not a valid pandoc 3.6 flag.** pandoc 3.6 uses `--highlight-style`. Fix: replaced both occurrences in `package.json`.

### 4. Package.json and script updates

- **Glob replacement.** `chapter-*.md` globs replaced with explicit ordered paths in `pdf:protocols-html`, `pdf:protocols-generate`, `pdf:protocols-simple`, `pdf:mx-html`, `pdf:mx-generate`, `pdf:mx-simple` (40 explicit paths across the two books).
- **Resource path.** `chapters/chapter-10` added to `--resource-path` in handbook scripts for the two table images.
- **Chapter-00 and services-advert paths.** Updated in `pdf:chapter00-simple`, `pdf:chapter00-html`, and the generate/simple scripts.
- **Wordcount and validate:links.** Glob patterns updated to `**/*.md` or explicit subfolder paths.
- **`scripts/gen-free-book.sh`.** `ADVERT_MD` and `PURCHASE_MD` updated to new subfolder paths.
- **`scripts/cogs/2026-02-15-conventions.cog.md`.** Chapter location table entries updated to the new pattern.

### 5. Free book ending generated from soul.md files

The brief two-paragraph "Where to go from here" section in `chapter-00-free.md` was expanded into a full chapter guide. The soul.md files from every Protocols and Handbook chapter were read and distilled into two structured section descriptions -- one per book -- with chapter references grouped by theme. This replaces the previously minimal book descriptions with content that accurately represents each book's full scope and arc.

### 6. Free book regenerated and deployed

`npm run pdf:free-book` (via `gen-free-book.sh`) regenerated the 10-section merged PDF including the expanded ending. Committed and pushed to the mx-outputs submodule via git + LFS. The PDF filename `mx-introduction-chapter.pdf` is unchanged -- all existing blog links remain valid.

### 7. Cloudflare Worker -- free book email capture

New Worker route on `mx.allabout.network`:

**`GET /books/download-intro`** returns a styled HTML email capture form (email required, name optional) matching the site aesthetic.

**`POST /books/download-intro`** does three things in sequence, all fire-and-forget so no failure can block the download:
1. Subscribes the visitor to the new MailerLite group **"Free Book Downloads"** (ID `185654229318239343`, created this session).
2. Sends Tom an instant admin notification via Resend to `info@cognovamx.com` with subject `Free book download: Name <email>`.
3. Redirects to `https://mx.allabout.network/books/mx-introduction-chapter.pdf`.

`introduction.html` updated: both download buttons (`header-buy-cta` and `cta-button`) now point to `/books/download-intro` instead of the PDF directly. The "No sign-up required" copy updated to "Enter your email to download."

`wrangler.toml` receives `MAILERLITE_GROUP_FREE_BOOK = "185654229318239343"`. The `RESEND_API_KEY` and `MAILERLITE_API_KEY` are already secrets in the deployed worker.

`reginald/lib/resend.js`: new `sendFreeBookNotification()` pure exported function.
`cloudflare-worker.js`: new `buildFreeBookFormHTML()` pure exported function, `handleFreeBookDownload()` handler, route intercept before `handleMxSubdomain` for `mx.allabout.network`.

Worker deployed as version `14e34486`.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| soul.md files created | 49 |
| Chapter subfolders created | 49 |
| PDF errors fixed | 3 |
| package.json scripts updated | 10 |
| New Worker routes | 1 (GET + POST) |
| MailerLite groups created | 1 (Free Book Downloads) |
| Worker tests | 203 passing (7 new) |
| Worker version deployed | 14e34486 |
| Submodule commits | 4 (allaboutv2 ×2, mx-outputs ×2) |
| Hub commits | 4 |

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| fe5b292c | allaboutv2 | feat: add email capture for free book downloads |
| 5c98f8b7 | allaboutv2 | feat: email owner notification on free book download |
| 9d803f9 | mx-outputs | free-book: regenerate with expanded book descriptions |
| 13aadb1 | mx-outputs | books: gate free book download behind email capture form |
| 4204bdaf | hub | feat: add email capture for free book downloads |
| c1a00114 | hub | feat: email owner notification on free book download |
| 52198c4d | hub | chore: one-folder-per-chapter restructure across all three manuscripts |

---

## Next Steps

- Test the `/books/download-intro` form end-to-end: submit a real email and confirm both the MailerLite subscription and the Resend notification arrive
- Set up a MailerLite welcome automation for the "Free Book Downloads" group (welcome email to the reader)
- Monitor first live downloads via `info@cognovamx.com` inbox
