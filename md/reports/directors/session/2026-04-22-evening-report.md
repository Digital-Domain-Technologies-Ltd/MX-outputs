---
title: "Co-Directors Report — Boye Profile, pdf:doc Hardened, Audit Pipeline Deepened, Egress Pre-Flight, Reattach Hardened, Malware Incident, Upgraded-Reginald Launch, DITA Podcast Deck Reframed"
description: "Built the Boye CMS Experts snapshot; fixed three silent pdf:doc pipeline failures; deepened the mx-audit pipeline with post-consent dialog capture, JSON-LD fact-stability drift detection, and a string of report-polish fixes; added a pre-flight egress probe so audits run behind a VPN/tracker-blocker no longer publish misleading 'site has 62 errors' findings; hardened the submodule reattach script to distinguish safe-discard from true orphan and to reconcile stale local clones; cleaned up 22 superseded outreach and demo artefacts left over from prior sessions. Later in the evening: detected and cleaned a persistent Node.js backdoor that had been resident for six weeks; created the Upgraded-Reginald private repo from the April bundle and mounted it read-only into MX-Hub with a new enforcement hook. Late evening: reframed the DITA+MX podcast deck from 'versus' to 'closing the gaps at the publish transform' in response to the host's brief, adding a reltable-as-graph SVG to both the deck and the companion blog, and fixing a broken `mx marp-regen` dispatcher route while doing it."
author: "Tom Cranstoun"
created: 2026-04-22
modified: 2026-04-22
version: "7.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening, security, upgraded-reginald, podcast, dita]
---

# Co-Directors Report, Boye CMS Experts Profile, pdf:doc Pipeline Hardened, Egress Pre-Flight

**Date:** 22 April 2026, Evening
**Segment:** evening (17:00 onwards)

---

## Summary

Three threads. First, built a competitive-landscape snapshot of every organisation in the Boye CMS Experts group, ~86 entities deduplicated from ~100 listed members. Revenue, staff bands, customer logos per row, with confidence labels making honest separation between verified data, public-knowledge fact, and educated guess. Tom is in the group himself; the file is positioning intel for the room he will be in. Second, the canonical `npm run pdf:doc` pipeline turned out to have three silent failures stacked on top of each other. Each one was found by trying to use it. All three are now fixed and the pipeline builds clean on this machine, with the unicode-fallback filter portable to systems that lack Apple Color Emoji. Third, a client-style PDF Tom queried turned out to overstate "console errors" because his VPN had NXDOMAINed every analytics endpoint during the audit. Built a pre-flight egress probe and a report-side caveat injection so the same misreading cannot ship from this pipeline again.

---

## What Was Done

### 1. Boye CMS Experts company-value profile

Fetched the member list from `boye-co.com/groups/cms-experts/members`, deduplicated to ~86 unique organisations across Australia, Europe, UK & Ireland, Canada and the US. Categorised every row as vendor, hosting/platform, agency, enterprise user (PayPal, TELUS, Edinburgh, ICANN), or sole trader. For each row: country/HQ, ownership (public ticker, PE, VC stage, founder-owned), staff band, revenue or ARR, notable customer logos.

The honest part is the confidence labelling. Four labels: `[verified]` for cells fetched live from the company's own customer page this session, `[public]` for cells from training-data knowledge through January 2026, `[guess]` for figures inferred from staff times industry-typical revenue-per-head, `[private]` for cells the company genuinely does not disclose. The brief was "give me the value of these companies" and Tom escalated to "make guesses when not known", so the deliverable is an order-of-magnitude estimate sheet rather than an audited balance sheet, and it labels itself that way line by line.

WebSearch was unavailable in the session, so the fetched-this-session column is thinner than it would otherwise be (eight vendor customer pages confirmed, the rest trade on prior knowledge). Output saved to `mx-outputs/pdf/cms-experts-company-values.pdf`. Source markdown lives at `/tmp/cms-experts-company-values.md` and is emoji-free per Tom's instruction.

### 2. pdf:doc pipeline hardened

Promoting the Boye PDF to mx-outputs through the canonical `npm run pdf:doc` script revealed three stacked failures. Each was a silent dead-letter — the script would have looked broken to anyone trying to use it on a fresh machine.

Failure 1: pandoc 3.x dropped the `--syntax-highlighting` flag. The script in `scripts/generate-document-pdf.cjs` still passed it. Fix: renamed to `--highlight-style=tango`.

Failure 2: the script's LaTeX header conditionally loaded `xurl.sty` if available, then unconditionally referenced its `\UrlBreaks` and `\UrlOrds` macros. On any MacTeX install without xurl, the build crashed with "Undefined control sequence". Fix: wrapped the macro reference in the same `\IfFileExists{xurl.sty}` guard.

Failure 3: the unicode-fallback Lua filter wrapped emoji in `\fontspec{Apple Color Emoji}`. xelatex on this Mac (and on most macOS xelatex installs without HarfBuzz/lualatex) cannot load colour-emoji fonts; the build crashed with a fontspec error. Fix: changed the filter's `wrap()` helper to use `\IfFontExistsTF{font}{...}{fallback text}`. On systems where the font loads, real emoji renders. On systems where it does not, the filter substitutes a readable text label (`[verified]`, `[ok]`, `[X]`, `[!]`, etc.) instead of crashing or emitting Latin Modern "missing character" warnings. Added 📚 🎲 🚫 to the filter's mapping table since the Boye PDF used them.

After all three fixes, `npm run pdf:doc` produced the Boye PDF (88KB, A4, ToC) with zero pandoc warnings.

### 3. Audit pipeline deepened — post-consent capture, JSON-LD drift, report polish

Ran a regen of the neom-wellbeing.com audit report end-to-end and used the actual client PDF as the iteration loop. Each thing Tom noticed on the PDF became a fix in the pipeline, not a one-off patch.

**Post-consent dialog capture** — the pre-existing hostile-UX check observed the served HTML passively and reported "no dialog at first paint". True, but misleading: on neom, the Klaviyo 15%-off dialog only renders AFTER the shopper accepts the Consentmo cookie banner. Built a second-pass capture: walk vendor accept-button selectors, fall back to light-DOM text patterns ("Accept", "Allow all", "Agree"), then pierce shadow-DOM roots (Consentmo ships its banner as `<csm-cookie-consent>` with internal UI in a shadow root). First neom run with this logic still missed the button because the host shadow was inert; diagnostic dump revealed the banner wasn't rendering at all. Root cause: `navigator.webdriver === true` signals automation to consent libraries, which suppress their UI to keep their analytics clean. Masked the flag, set a real Chrome UA, added `Accept-Language: en-GB`. Next run clicked the Accept successfully and captured the Klaviyo dialog the shopper actually sees. The audit now reports "Dialog after consent accepted: Yes" as a distinct row — not a replacement for the first-paint finding but an addition. Seven commits of iteration driven by one screenshot Tom sent.

**JSON-LD fact-stability drift detection** — after an `/interview-me` conversation framing MX as a technique (not our metadata namespace), consistency and stability surfaced as the layer the audit barely measures. Shipped the minimum-viable version this session: per-URL structural fingerprint of every JSON-LD `@graph` node (type, `@id`, sorted property keys, sorted nested types), stable-stringified and MD5-hashed. Persistent snapshot at `.cache/<host>/jsonld-snapshot.json`, per-run diff at `results/<host>/jsonld-drift.json`. First-ever runs record the baseline silently; subsequent runs name the types that drifted. Three states verified against neom: first-run (baseline captured), stable (135/135 nodes match), drift-detected (tampered Organization hash → "1 of 20 URLs drifted: Organization"). Structural-only; value drift (price moving £30 → £35) is deferred because it needs raw JSON-LD persistence in the main collector.

**Report polish** — a string of fixes driven by Tom's feedback on the PDF. Scores floored at 0 in `auditAverages.js` so reports can no longer say "-1/100". Console-errors table deduplicated by `(failingHost, errorCode)` with a 4-column layout capped at 10 distinct issues and a sidecar CSV carrying all raw samples. Double-lazy image-loading pattern gets a mechanical explanation block whenever detected. Crawl-delay findings re-framed as faint-praise ("polite signal, unlikely to be widely read, but mx-audit itself honours it") instead of "remove obsolete directive". The Executive Summary REWRITE block baked into infill-report.js was literally instructing the rewriter to use "I audited" / "I found" — fixed to use "we" and cited the fierce-critic gate that would otherwise catch it. Cross-Page Consistency column "Missing Pages" renamed to "Pages covered" so the header no longer contradicts the "20 of 20" value at 100% coverage.

### 5. Reattach-submodules script hardened, working-tree cleanup

The pre-push gate at the end of `/step-commit` flagged allaboutv2 as `+` ahead of the hub pointer. Investigation revealed `ed99db39` was the detached SHA, but it was already on `origin/main` — local main was simply 5 commits behind origin. The original `reattach-submodules.sh` reported "no orphan work" and reset to stale local main, leaving the working clone behind both origin AND the original detached SHA. Functionally safe (nothing was lost), but the script's silence about which case it was in masked the situation.

Patched the script to distinguish four cases per submodule. `+ already-pushed safe to discard` (`merge-base --is-ancestor` shows the detached SHA on the remote tracking branch). `+ fast-forwarded N orphan commits` (the SHA was a straight descendant). `+ cherry-picked N orphan commits` (divergent path). `?  detached SHA not on origin and not ahead — manual review` (the rare case where the SHA may live on another branch or only in the reflog). After checkout, `rev-list --count` compares local default branch against `origin/main` — when behind, the script fast-forwards local main with a `(local main was N behind origin; fast-forwarded)` note; when diverged in both directions, it refuses to act and exits non-zero. GIT-README updated to enumerate the four cases so the script's output is interpretable from the docs.

Cleaned up 22 superseded artefacts left over from prior sessions: 12 hub deletions (4 obsolete content-drafts in `docs/structure/content-drafts/`, 6 superseded MX audit notes in `mx-canon/mx-maxine-lives/management/audits/`, 2 entries from `mx-canon/mx-maxine-lives/plans/`), plus 4 deepersonalised demo files in mx-crm and 17 outreach PDFs/CSVs in mx-outputs covering 2026-04-01 through 2026-04-20 — replaced by the 2026-04-22 runs. The directors report's Next Steps had punted these to "next session"; resolved them in this session instead.

### 4. Audit pipeline egress pre-flight (VPN / tracker-blocker detection)

Tom showed me a page from a regenerated neom-wellbeing PDF asking "I get these errors, are they real?" The Browser Console Errors section reported 62 `console.error`, 14 uncaught exceptions, 68 failed subresource requests, with a deduplicated table where every single distinct failure was `ERR_NAME_NOT_RESOLVED` against `monorail-edge.shopifysvc.com`, `p.typekit.net`, `try.abtasty.com`, `tag.rmp.rakuten.com`, `tag.wknd.ai`, `bat.bing.com`. He had been running with NordVPN active during the audit. NordVPN's Threat Protection NXDOMAINs trackers; Puppeteer faithfully recorded those failures as "site errors". The report's existing caveat ("a real shopper on an ordinary connection likely reaches them fine") was honest but soft — a client reading the headline number could conclude their site has 62 broken things. Tom's directive: "do not give misleading information."

Shipped `mx-audit/bin/check-egress.js` as a pre-flight probe. It runs as Step 2.6 of `/audit-collect`, between the Cloudflare-cache-purge step and the main audit. Two layers of detection: macOS-direct VPN signals (`scutil --nc list`, `pgrep` for known VPN daemons, active `utunN` interfaces with an inet address), recorded informationally; and a DNS reachability probe against a panel of ten well-known tracker/CDN hostnames (the exact six that failed in the neom incident, plus Google Analytics, GTM, Cloudflare Insights, Meta Pixel, Hotjar). Verdict: degraded if ≥30% of the panel fails to resolve. Exit 2 on degraded, 0 on clean, sidecar `egress_check.json` written either way for archival traceability.

Critical design choice during build: an early version made VPN signals or DNS-probe failures both trip the verdict. First test run had NordVPN's daemon resident in the macOS tray (no active tunnel), DNS resolved all ten probes cleanly, and the verdict still came back "degraded" — a false positive that would have prompted on every audit just because the app was open. Refactored: DNS probe is the verdict, VPN signals are supplementary context. What matters for audit accuracy is whether tracker hostnames resolve, not which apps are running. With the VPN tunnel actually engaged, all six neom failure-set hosts NXDOMAIN, the probe trips at 60% fail rate, and the prompt fires.

When degraded, the skill prompts the user with three options via `AskUserQuestion`: abort and disable VPN (recommended default per Tom's "no misleading information"), continue and tag the report (the infill script prepends an "Audit-environment caveat" callout above the Browser Console Errors sample table, naming the unresolvable hosts and telling the reader to re-run on a clean connection), or continue silently (escape hatch). The infill side reads `egress_check.json` and conditionally prepends the caveat into `[CONSOLE_SAMPLES_TABLE]` — no template surgery, no contract.json update, the caveat rides along with the existing token. Tested across all four scenarios (degraded+default, degraded+silent, clean, missing sidecar): caveat appears only when it should.

The iteration shape was itself valuable. Every change was grounded in a specific PDF artefact Tom saw. None of this would have shipped through speculative design review.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits (evening) | 17 (hub ×9, mx-audit ×3, mx-crm ×2, mx-outputs ×3) |
| Files changed | ~46 across 4 repos |
| Lines added | +1,440 |
| Lines removed | −12,470 (cleanup of 22 superseded artefacts) |
| Companies profiled (Boye thread) | 86 |
| Customer pages fetched live (Boye thread) | 8 |
| Pipeline fixes (pdf:doc) | 3 (pandoc flag, xurl guard, font-aware emoji) |
| New audit detectors | 3 (post-consent dialog capture, JSON-LD fact-stability drift, egress pre-flight) |
| Audit report-polish fixes | 6 (score floor, console dedupe, double-lazy block, crawl-delay faint-praise, I→we voice, column-header rename) |
| Tracker hostnames in egress probe panel | 10 |
| Repositories touched | 4 (hub, mx-audit, mx-crm, mx-outputs) |

---

## The Insight

The PDF pipeline failed in three different ways, each silent until tried, each fixable in under five lines. This is the "tested by use" pattern: a tool nobody runs accumulates rot the moment its environment moves. pandoc 3 shipped, MacTeX installs vary, the colour-emoji story differs across xelatex versions, and a script that worked the day it was written becomes a dead letter without anyone noticing.

The defensive shape is the same as the morning's reconciler bug and the afternoon's submodule-push bug: ask the load-bearing question explicitly. The xurl reference now asks "is xurl loaded" before using its macros. The emoji wrap now asks "does this font exist" before invoking it. In both cases the test always existed, but nobody had wired it into the right place. The fix is small; the missing-test pattern is the same one we have been correcting all day.

The later audit-pipeline thread pointed at a related insight: the best iteration loop is the actual deliverable. The post-consent dialog, the JSON-LD drift detector, the six polish fixes — none of these would have come out of a speculative design review. They came out of looking at one PDF, noticing what was wrong, and asking "why does the pipeline let that happen". The conversation with the user on MX-as-technique was only possible because we had a concrete artefact to point at. A prospectus with no PDF is hard to sharpen.

The egress thread sharpened that pattern further. The audit's existing caveat sentence ("a real shopper on an ordinary connection likely reaches them fine") was honest writing, but it sat below the headline numbers and read as a footnote. The fix was not "rephrase the footnote" — it was "do not let the audit report a number that needs a footnote". The pre-flight probe stops the run before the misleading bytes are written; the caveat injection is a fall-back for cases where the user knowingly proceeds. And the design question that came up mid-build — "does VPN-process detection or DNS-probe-failure carry the verdict" — was settled by trying it: the false-positive on the first run made the answer obvious. Build, observe, refactor. Same loop as the audit polish.

---

## Next Steps

- The pre-existing dirty state in the working tree (mx-canon deletions, mx-crm and mx-outputs internal cleanup) was triaged in this segment — see Section 5. allaboutv2 detached HEAD turned out to be benign (already on origin); resolved by hardening `reattach-submodules.sh` rather than committing pointer changes.
- Optional: extend the unicode-fallback filter's mapping table as new emoji turn up in MX docs. Current set: ✓ ✅ ❌ ⚠ 🔴 🟡 🔵 🟢 📚 🎲 🚫.
- Optional: a similar font-aware refactor of the keep-together.lua filter so it falls back when `needspace` is not loaded (currently relies on the book-pipeline metadata.yaml to provide the package).
- Next session (audit pipeline): raw JSON-LD value persistence in the main collector so the drift detector can report value flicker (price £30 → £35), not just structural drift. Today's structural-hash version is working baseline.
- Next session (audit pipeline): within-page metadata-stack drift detector (og:title vs JSON-LD name vs `<title>` on a single page). Smaller than cross-run drift, flagged in the interview but deferred this evening.
- Next session (audit pipeline): the MX-as-technique framing pass across templates and findings prose — agreed during `/interview-me` but not yet executed. The audit still talks about MX largely in `mx:`-namespace terms; the technique layer should lead, with governance as one component of it.
- Next session (audit egress): once Tom has run a degraded-egress audit through the full skill, capture any rough edges in the AskUserQuestion prompt copy and add Linux/Windows VPN detection to the direct-signals layer. macOS-only is fine for now because that is Tom's machine, and the DNS probe carries the verdict on every platform.

---

## Commit Log

| Hash | Repo | Description |
|------|------|-------------|
| 9cf740b | mx-outputs | Add Boye CMS Experts company-value profile PDF |
| 9686731a | hub | pdf:doc pipeline: fix pandoc 3 flag, guard xurl, font-aware emoji fallback |
| ae62595 | mx-outputs | Directors report: 2026-04-22 evening segment (initial v1.0) |
| 8e6e01f | mx-audit | Audit pipeline: post-consent capture, JSON-LD drift detection, report polish |
| 999c7c4 | mx-crm | Neom outreach 2026-04-22: audit report, sidecars, console-errors CSV |
| 35df936 | mx-outputs | Neom PDF + console-errors CSV for 2026-04-22 |
| 0fdbd881 | hub | Skills + filter updates to match mx-audit pipeline changes |
| fb1bf87f | hub | CHANGELOG + REMINDERS: 2026-04-22 evening audit pipeline deepening |
| fb7cf1ac | hub | LEARNINGS: two rules from 2026-04-22 audit session |
| 5c689593 | hub | UBERCOG + mx-outputs bump: add jsonld-snapshot routing, regen README index |
| 2568e251 | hub | keep-together.lua: tighten HR+heading clearpage rule to level-2 only |
| 34776b9 | mx-audit | Add check-egress.js for audit-collect Step 2.6 pre-flight |
| 5b5114c3 | hub | audit-collect Step 2.6 egress check: skill, gotcha, mx-audit bump |
| 84403d72 | hub | LEARNINGS: pdf:doc pipeline failures from font/flag/package assumptions |
| fa1fad6 | mx-audit | infill-report: prepend audit-environment caveat when egress probe degraded |
| 9ec0d66 | mx-outputs | Directors report: 2026-04-22 evening v3.0 — egress pre-flight thread |
| 05d3a89e | hub | Bump mx-audit (egress caveat) + mx-outputs (directors v3.0) |
| b255ee68 | hub | Docs: CHANGELOG + REMINDERS for audit egress pre-flight |
| 12751490 | hub | LEARNINGS: ground-truth probes carry verdict, not indicators |
| afb43e56 | hub | UBERCOG: add check-egress.js to mx-audit/bin enumeration |
| 185411a5 | hub | Compliance fix: rename archived-by/week-boundary to camelCase + trimmer source patch |
| 97c33592 | hub | reattach-submodules: distinguish safe-discard from true orphan; warn on stale local main |
| 0cfe6e5 | mx-crm | Cleanup: remove superseded deepersonalised demo report |
| 28af3fd | mx-outputs | Cleanup: remove superseded outreach PDFs and CSVs (2026-04-01 through 2026-04-20) |
| pending | hub | Cleanup deletions + new hook state file + mx-crm/mx-outputs pointer bumps + directors v4.0 |

---

## v5.0 addendum — Malware incident and Upgraded-Reginald launch

Added late evening (~19:00-20:00) as two further threads landed after v4.0 was written.

### 6. Malware incident — containment and cleanup

`gh repo create` failed with "can't assign requested address". Diagnosis found 15,486 sockets stuck in SYN_SENT, exhausting the entire ephemeral port range. Root cause was a single Node process:

```
~/.config/system/.data/.nodejs/node-v23.5.0-darwin-x64/bin/node -e eval(atob('<580KB base64>'))
```

Textbook indicators: hidden runtime path, base64-eval loader, launchd persistence via `~/Library/LaunchAgents/com.user.nodestart.plist` (596 KB — payload inlined), single-IP C2 on a Contabo VPS in Mauritius (`154.12.242.178:443`). Resident since 11 March 2026 — six weeks.

Actions, in order: evidence preserved to `~/Desktop/malware-evidence-2026-04-22/` (plist + 185 MB runtime tree); `launchctl bootout` to stop persistence and terminate the process; plist and dropper directory deleted; verified 0 SYN_SENT sockets and outbound HTTPS restored. Secondary-persistence scan of system and user LaunchAgents, LaunchDaemons, crontab, and shell rc files surfaced nothing suspicious. One plist modified close to the infection window (`ai.openclaw.gateway.plist`, 13 Mar) was verified legitimate (Homebrew Node launching the real OpenClaw gateway on port 18789).

Credential rotation from a clean device remains outstanding. Until that completes, anything authenticated from this workstation in the last six weeks should be treated as potentially exposed. The active GitHub token on this machine carries `repo + delete_repo + workflow + read:org + gist` scopes across both DDT orgs.

### 7. Upgraded-Reginald repo created and populated

Created `Digital-Domain-Technologies-Ltd/upgraded-reginald` (private) and populated it from the 625 KB April bundle (`~/Downloads/mx-bundle/`). Reorganised into a project layout rather than preserving the bundle's delivery numbering:

```
upgraded-reginald/
  spec/cog-spec.v1.md              (v1.0 draft, 65 KB)
  impl/js/   (53 unit tests, 81 conformance cases — extracted from tarball)
  impl/rust/ (60 unit tests, feature-parity verification pipeline — extracted from tarball)
  examples/  (5 worked example cogs)
  blog/      (3 technical posts)
  legal/     (NDA + contributor assignment)
  events/frankfurt-2026-05/ (12 May CMS Summit kit)
  + LICENSE, CHANGELOG, CONTRIBUTING, ROADMAP, README
```

Single import commit upstream (`c98d3f6 Initial import from mx-bundle`, 166 files), pushed. The four `cog-review-*.md` duplicates in the bundle's `02/` section were dropped — they already exist inside the extracted JS tarball.

### 8. Mounted as read-only submodule in MX-Hub

Added `mx-upgraded-reginald/` submodule (hub commit `d4a79b1f`). The hub's pre-push submodule-pointer gate caught three pre-existing drifted pointers (mx-audit, mx-crm, mx-outputs); bumped each in its own commit. `tg-community/stream-front-end` detached after `git submodule update`; recovered using the reset-to-origin procedure from memory (the orphan `Initial commit` locally was not on origin and the submodule is read-only, so preserving it would have left the hub pointing at a commit that only existed locally). All four commits now on origin/main.

### 9. Read-only enforcement codified

`CLAUDE.md` previously claimed "a PreToolUse hook enforces this" for `tg-community/`, but no such hook actually existed — the rule was doc-only. Wrote `.claude/hooks/pre-write-readonly.sh` covering both `tg-community/**` and `mx-upgraded-reginald/**`. Registered on `Write | Edit | NotebookEdit`. Hook handles absolute and relative paths, and both `file_path` and `notebook_path` inputs. Five dry-run cases pass. `CLAUDE.md`, `UBERCOG.cog.md`, and `README.md` updated to reflect the new read-only mount and to name the enforcing hook by path.

### Commit log (v5.0 addendum)

| Hash | Repo | Description |
|------|------|-------------|
| c98d3f6 | upgraded-reginald | Initial import from mx-bundle |
| d4a79b1f | hub | Add mx-upgraded-reginald submodule |
| bcef0b7a | hub | Bump mx-audit to a96f479 |
| f941297e | hub | Bump mx-crm to 429cac4 |
| 5e14bd70 | hub | Bump mx-outputs to 577214c |
| pending | mx-outputs | Directors report v5.0 addendum |
| pending | hub | Read-only hook + CLAUDE/UBERCOG/README edits + mx-outputs pointer bump |

---

## v6.0 addendum — DITA+MX podcast deck reframed from versus to gap-closing

Added ~21:00 after Sarah (podcast host for tomorrow's recording) sent a note rejecting the deck's framing.

### 10. DITA+MX podcast deck rebuilt around the host's spine

The brief from Sarah: *"I don't think the DITA versus MX framing quite works because MX is on the delivery side and DITA the backend. From my point of view, ensuring that DITA publication results in MX compatibility is a pretty straightforward publishing pipeline config issue. I'm more interested in looking at this as 'DITA gets you pretty close and now how do we close the gaps'."* The original deck was built around a "Same Discipline, New Reader" thesis with a "Five Divergences" spine at 22 minutes. Wrong for the conversation Sarah wants to host. She wants 15-20 minutes, audio-first, slides going into show notes.

Rebuilt the deck end-to-end. New spine: "DITA → MX: Closing the Gaps at the Publish Transform." 15 slides, down from 20. Cuts: the standalone thesis slide, the side-by-side comparison table (doesn't work audio-first; the blog carries it), the "where we already agree" slide, the "what DITA confirms MX has" proof slide, the coexistence slide. Additions: a new Slide 3 "The Frame — Backend Meets Delivery" that plants Sarah's frame early; five Gap slides rewritten as publish-transform config moves (audience declared in rendered output, Schema.org + MX frontmatter at publish, reltable as a graph endpoint, persistent state in rendered HTML, single-source governance); a new closing slide "Not a Migration — a Transform-Config Change". The £203,000 Danube cruise emotional hook and the "What DITA Already Ships" respect slide stayed verbatim — both load-bearing for a DITA-literate audience.

Presenter notes retimed to 15-18 minutes, renumbered for the new 15-slide sequence, and prefixed with a `## Discuss with Sarah before recording` block listing open items for tomorrow's pre-record walkthrough (length target, spine confirmation, £203K hook sensitivity, gap order, credit-slide negotiability, show-note shape, video option if it arrives). Added a new pushback answer covering "So MX is just a DITA-OT plugin?" The DITA glossary block for the host stayed untouched — Sarah values it.

Tom then asked for more on Gap 3 (reltable as graph endpoint), specifically a diagram. Added a dedicated diagram slide right after it: three DITA topics (task → concept → reference) connected by typed directional edges (`requires`, `describes`), with the `GET /api/graph.json` endpoint shape shown alongside. Tom preferred SVG over ASCII. Built `datalake/assets/presentations/dita-and-mx-podcast-graph.svg` as the standalone asset, referenced from the deck with accessible alt-text, and inlined the same SVG into the DITA+MX comparison blog (`mx-outputs/mx-site/blog/dita-and-mx-a-comparison.html`) as a `<figure class="mx-diagram">` immediately after the "Relationship management" paragraph with `<title>`/`<desc>`/`<figcaption>`. Matching `.mx-diagram svg` rule added to `mx-blog.css` so the figure scales responsively without inline styles. Inline SVG rather than `<img src>` so agents read the structured markup directly — on-doctrine for an MX blog post.

One obstacle during regeneration: `mx marp-regen <file>` failed with "Unknown command". The dispatcher (`scripts/bin/mx.sh`) routes `mx <cmd>` to `scripts/bin/mx.<cmd>.sh` shell scripts; no shim existed for marp-regen even though the cog at `scripts/cogs/marp-regen.cog.md` documented the command. Built `scripts/bin/mx.marp-regen.sh` as a shim that extracts the `@embedded:marp-regen-script` block from the cog and execs it with the passed args. The cog stays single-source; the shim fixes the routing. `mx marp-regen <file>` now works end-to-end. A broader adjacent bug — `mx run <cogname>` reports "No actions defined" for all cogs because `mx-run.js` reads `cogFull.execute.actions` but cogs carry it under `mx.x-mx-execute.actions` — identified but left for a separate pass.

Side-fix: the deck's invitation slide pointed at `dita-vs-mx-a-comparison.html` (404) where the live blog is `dita-and-mx-a-comparison.html` (200). Verified both URLs via WebFetch; updated deck.

### The iteration shape

Same loop as the audit thread. Sarah's email arrived with a clear rejection and a clear new spine; the rewrite took about an hour of iteration, including two rounds of refinement Tom drove by reading the Gap 3 slide ("needs work, explain the graph") and then ("can we add a diagram on the next slide" → then "i prefer svg, we also need to update the matching html"). Every change landed in the concrete artefact being pointed at. Pre-record tomorrow covers the discuss-with-sarah block; the deck is ready to be shaped further from there.

### Commit log (v6.0 addendum)

| Hash | Repo | Description |
|------|------|-------------|
| 13009a8 | mx-outputs | Add reltable-graph SVG figure to DITA+MX blog; regen podcast deck pptx |
| ff91b49 | mx-outputs | (obsoleted, rebased) |
| c19f2e16 | hub | marp-regen cog: fix runbook field to match dispatch path |
| 90510e11 | hub | LEARNINGS: two rules from 2026-04-22 night DITA podcast session |
| a7aa711b | hub | Docs: CHANGELOG + REMINDERS for DITA podcast deck reframe |
| f29485b6 | hub | DITA+MX podcast deck reframed to closing-the-gaps; graph SVG; marp-regen dispatcher |
| 0e48bd5b | hub | Bump mx-outputs: directors report v5.0/v6.0 + README regen |

---

## v7.0 addendum — Deck finalised, three patterns added to manuscript canon

Added late night (post-22:00) as the recording prep session continued and extended into manuscript work.

### 11. Podcast deck: six gaps completed, closing slide added

The v6.0 deck had three open threads. Resolved all three.

**Gap 3 corrected (three rounds).** The "reltable as graph endpoint" framing went through three wrong versions before landing correctly. First version invented a `/api/graph.json` consolidator endpoint — doesn't exist in MX canon. Second version misidentified MX Graph (the local cog-and-folder cataloguer in `mx-graph-system.md`) as the content-relationship graph — also wrong. Third version fabricated a `/graph.jsonld` file. The correct framing: each rendered HTML page embeds its own `<script type="application/ld+json">` block with an `@graph` array; the topic is one node, reltable row edges become typed predicates; agents walk `sitemap.xml`, fetch each page, union `@id`-linked nodes across fetches. No endpoint, no consolidator — the graph is distributed across the site. Rewrote the slide, the SVG, the presenter notes, and the blog to match. The SVG was rebuilt with a wider viewBox (960×480), a browser-chrome right panel showing the actual `@graph` JSON-LD, and three-panel pipeline layout (reltable left → DITA-OT+MX transform middle → rendered page head right).

**Inline SVG infrastructure.** Marp's markdown parser silently breaks on `data:` URIs longer than ~5 KB. The SVG, base64-encoded, is ~12 KB. Switched from markdown `![alt](data:...)` to HTML `<img alt="..." src="data:...">` tag. Built a `PostToolUse` hook (`.claude/hooks/regen-svg-base64.sh`) that detects `<!-- inline-svg: NAME -->` markers in any markdown file, finds the matching SVG, base64-encodes it, and refreshes the `<img>` src in-place — both markdown and HTML forms. Added GATE 1.5 to `.claude/hooks/pre-commit.sh` to keep the base64 current at commit time. `marp-regen.cog.md` updated to apply `--allow-local-files` conditionally rather than unconditionally, eliminating the "Insecure local file accessing" warning.

**Gap 4 expanded.** "Toasts" was the only hostile-UI example. Expanded to the full four-family taxonomy: tabs (active-tab-only DOM), reveals/accordions (collapsed at first render), hidden costs (fees revealed after hover/click/form step), toasts (fire-once, vanish). The "3am" phrasing ("An agent arriving at 3am...") was removed — unrealistic; replaced with "An agent fetching the rendered HTML cannot see a toast notification that has already fired and vanished."

**Gap 6 added (locale-unambiguous values).** The £203,000 cruise-price example was correctly identified as a currency decimal-comma mixup (European `€2.030,00` misread as 2,030) — not a hidden-cost Gap 4 issue as an earlier draft implied. Built a new Gap 6 slide around the underlying pattern: `<data value="2030.00">€2.030,00</data>`, `<time datetime="2026-04-22">`, Schema.org `PriceSpecification`/`QuantitativeValue`. Presenter notes updated; the erroneous Gap 4 bridge removed.

**Closing slide (Slide 16: "The Next Reader In The Chain").** Added before the invitation slide. Frames the argument as "your DITA source has the information — every output format has to carry it forward." HTML into the DOM and JSON-LD, PDF into XMP and structure tags, EPUB into the metadata spine, feeds into their schema. "MX is not an HTML feature — it is a delivery-layer requirement for every doctype the transform produces." Deck regenerated to PPTX and published to `mx-outputs/pptx/presentations/dita-and-mx-podcast.pptx` (3.88 MB, 17 slides).

### 12. Three patterns written into the manuscript canon

The deck work surfaced three patterns absent from the protocols and appendices. All three were added with DITA named as one source but not the only source. Hostile UI (already extensive in Ch.2, Ch.12, Appendix S) and single-source governance (Ch.15, Ch.20, Ch.21) were confirmed as already well-covered — not duplicated.

**JSON-LD @graph per-page (added: Ch.12 Pattern 6 subsection, Appendix D Part 5, Appendix E JSON-LD section, Appendix K K.3).** Each rendered page embeds its own `@graph` fragment; agents walk `sitemap.xml`, union `@id`-linked nodes across fetches; no consolidator endpoint. DITA reltable rows named as one natural edge source. Graceful degradation: Schema.org-only agents read `@type`/`@id`; extended-namespace agents read typed predicates.

**Locale-unambiguous values (added: Ch.12 Pattern 4 subsection, Appendix D Currency and Locale section, Appendix E HTML Patterns section).** `<data value="2030.00" data-currency="EUR">€2.030,00</data>` and `<time datetime="...">` patterns documented. Schema.org `PriceSpecification` for currency-safe JSON-LD pricing. Prevents the decimal-comma error class. DITA noted as one authoring environment where the transform decides rendering; MX pins the machine value alongside every locale display.

**Carry-forward across output formats (added: Ch.12 Pattern 12, Ch.12 new table rows in blog).** PDF→XMP+Tagged PDF (ISO 32000), EPUB→OPF spine, JSON/Atom feeds→schema properties. DITA-OT named as one example of a transform that can emit all four from one source map. Closes: "MX is a delivery-layer requirement, not an HTML feature."

### 13. Blog post updated

Two new table rows ("Locale-formatted values", "Output format scope"), expanded "File format dependency" paragraph covering all four output formats with standards references (XMP, ISO 32000, OPF), new "Locale-unambiguous values" divergence paragraph with `€2.030,00` example. `dateModified` → 2026-04-22, wordCount → 1100, reading time → 6 min, keywords updated.

### 14. allaboutv2 worker: text/markdown for agent Accept header

Uncommitted worker change committed and pushed: when a client sends `Accept: text/markdown`, the worker short-circuits HTML transforms (JSON-LD injection, picture placeholders, metadata tweaks) and returns the origin HTML response with `Content-Type: text/html` so Cloudflare's native markdown converter can act on it. Scoped to `mx-site` and `content` subdomains, HTML paths only. Existing transforms are chrome that gets stripped on MD conversion — skipping them is correct.

### Commit log (v7.0 addendum)

| Hash | Repo | Description |
|------|------|-------------|
| 06f18f45 | allaboutv2 | Worker: serve text/markdown responses for agent Accept header requests |
| d525e08 | mx-outputs | DITA+MX: blog updated with locale/carry-forward patterns; PPTX v17 with multi-doctype Slide 16 |
| pending | hub | Manuscript canon: @graph, locale-unambiguous, carry-forward patterns + blog update + deck finalisation |
