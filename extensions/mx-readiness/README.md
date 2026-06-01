---
title: "MX Readiness Inspector — Chrome Extension"
description: "Chrome extension that inspects the current page for MX-readiness signals and summarises with Chrome's on-device Gemini Nano model."
author: Tom Cranstoun
created: 2026-05-31
modified: 2026-05-31
version: "0.1.0"

mx:
  status: active
  contentType: info-doc
  audience: [humans]
  x-mx-category: mx-tools
  tags: [chrome-extension, mx-audit, gemini-nano, on-device, mx-readiness]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/extensions/mx-readiness/README.md
  runbook: "Load the unpacked extension at chrome://extensions and click the action button on any web page to see the MX-readiness signals and a Gemini Nano summary."
---

# MX Readiness Inspector

A Chrome extension that inspects the page you are currently looking at for the signals MX cares about (governance meta, AI disclosure, discovery files, structured data, Open Graph, accessibility, provenance), scores them deterministically, and asks Chrome's on-device **Gemini Nano** model for a brief summary.

There is a small piece of irony here. The Watching the Machines cluster on [mx.allabout.network/blog/drafts/watching-the-machines/](https://mx.allabout.network/blog/drafts/watching-the-machines/) is about Chrome silently installing a multi-gigabyte AI model to people's disks. This extension uses that same model — already on your machine, never asked to be — to grade pages on whether they meet the standard the cluster argues for.

## What it checks

Eight sections, mirroring the MX audit pipeline's scoring inputs at a level a single popup can run in under a second.

| Section | What lands here |
|---|---|
| **MX** | `<meta name="mx:cog">` magic header; governance triplet `mx:status`/`mx:contentType`/`mx:audience`; AI-policy hints (`mx:aiAssistance`, `mx:aiEditable`, `mx:contentPolicy`). |
| **AI** | WICG `<meta name="ai-disclosure">` with valid vocabulary value; IPTC `digitalSourceType` IRI inside the page's JSON-LD. |
| **Links** | `<link rel="llms-txt">`, `<link rel="ai-usage">`, `<link rel="canonical">` matching the URL, `<link rel="sitemap">`. |
| **Origin** | Origin-level probes: `/llms.txt`, `/llms-full.txt`, `/robots.txt` (presence + AI user-agent restrictions), `/AI-USAGE.json` (presence + JSON shape), `/agent-card.json` (A2A discovery), `/sitemap.xml`. |
| **Data** | JSON-LD presence; Schema.org `@type` coverage. |
| **OG** | Open Graph completeness (7 fields); Twitter Card completeness (4 fields). |
| **A11y** | `<html lang>`; skip-to-main link; image alt coverage; form-control labelling. |
| **Prov** | Embedded source-YAML frontmatter HTML comment (`MX-SOURCE-FRONTMATTER` markers); provenance payload references (`xmp:ProvenanceAiPayload`, `mx:x-mx-provenance`). |

Every finding is one of `pass` / `warn` / `fail` / `info`. The score is the equal-weight average of all findings, scaled to 0–100 (`pass = 1.0`, `warn = info = 0.5`, `fail = 0`).

## Install

The extension is sideloaded; it is not on the Chrome Web Store.

1. Clone the repo (or pull the latest).
2. Open Chrome at `chrome://extensions`.
3. Toggle **Developer mode** on (top-right).
4. Click **Load unpacked**.
5. Select `mx-outputs/extensions/mx-readiness/`.
6. The extension appears in the toolbar; pin it for easy access.

To update after editing source: visit `chrome://extensions`, click the refresh-circle icon on the MX Readiness Inspector card.

## Enable the on-device model

The deterministic checks work in any modern Chromium-based browser. The summary needs a language model. The extension tries four sources in order; whichever responds first is the one used.

| Order | Source | Surface | Where it ships |
|---|---|---|---|
| 1 | Chrome / Edge | `self.LanguageModel` (WICG-aligned) | Chrome 131+ with the Prompt API flag; Edge 138+ on Copilot+ PCs. |
| 2 | Chrome | `self.ai.languageModel` | Pre-WICG Chrome origin trial. |
| 3 | Edge | `self.ai.assistant` (Phi-Silica) | Edge's earlier Prompt API surface on Copilot+ PCs. |
| 4 | Chrome | `self.chrome.aiOriginTrial.languageModel` | Older trial namespace. |

If none of those are reachable, the popup shows the deterministic score plus a one-line note explaining the install path. The DOM and origin findings still render. Every model runs locally; no page content leaves your machine.

The summary panel's footer line names which source actually answered ("Chrome/Edge (WICG)", "Edge (Phi-Silica)", etc.), so you always know what generated the prose.

### Chrome setup

1. **Chrome 127+** (preferably 131+).
2. **Prompt API for Gemini Nano** enabled at `chrome://flags`. Search for "Prompt API for Gemini Nano" and set to **Enabled**.
3. **On-device model downloaded.** Visit `chrome://components`, find **Optimization Guide On Device Model**, and check it is at a non-zero version. Chrome downloads it on its own schedule; the **Watching the Machines** cluster covers exactly when and how, with no consent dialogue.

### Edge setup

1. **Edge 138+ on a Copilot+ PC.** The on-device Prompt API is gated to devices Microsoft considers AI-capable hardware.
2. **The on-device AI flag enabled** at `edge://flags`. Search for "Prompt API" or "on-device AI".
3. **Phi-Silica installed.** The model arrives through Windows Update on supported hardware; you do not download it manually.

On Edge without Copilot+ hardware or on other browsers without an on-device model, the extension shows a fallback message with setup instructions.

## The popup toolbar

One button sits between the summary panel and the section tabs.

- **Copy results** — copies a plain-text version of the URL, score, summary, and every finding (with status, label, detail, and evidence) to the clipboard. Useful for pasting into a bug report, a CSV, or an outreach message about an audit prospect's page.

## How it works

```
popup.js  ─┬─►  chrome.scripting.executeScript( content.js in active tab )
           │       │
           │       └─►  returns {url, title, findings[]}  (DOM signals)
           │
           ├─►  chrome.runtime.sendMessage( background.js, 'inspect-origin' )
           │       │
           │       └─►  returns findings[]  (origin probes: /llms.txt, /robots.txt, /AI-USAGE.json, ...)
           │
           └─►  LanguageModel.create({ initialPrompts: [system: 'You are an MX-readiness reviewer ...'] })
                    │
                    └─►  session.prompt( compactFindings + score )
                           │
                           └─►  brief summary
```

- `content.js` runs in the page's main world (DOM access) but has no host permission — it only reads.
- `background.js` is the service worker. It has `<all_urls>` host permission, so it can fetch the origin's discovery files without CORS.
- `popup.js` is the orchestrator and the home of the Gemini Nano call. The on-device API is exposed only in extension contexts, not page contexts.

## Permissions

- `activeTab` — read the current tab's URL and inject the content script when the action button is clicked.
- `scripting` — allow the popup to inject `content.js`.
- `<all_urls>` host permission — origin-level fetches for `/llms.txt`, `/robots.txt`, `/AI-USAGE.json`, `/agent-card.json`, `/sitemap.xml`.

No tabs, no history, no storage, no remote calls.

## Files

| File | Role |
|---|---|
| `manifest.json` | MV3 manifest. |
| `popup.html` | Popup UI shell. |
| `popup.css` | Popup styles (light + dark, single accent). |
| `popup.js` | Orchestrator; talks to the content script, background worker, and Gemini Nano. |
| `content.js` | DOM inspector that runs in the page. Eight finding sections. |
| `background.js` | Service worker that probes the origin's discovery files. |

## Known limits

- The DOM inspection runs once when the popup opens. Pages that mutate their `<head>` after load are inspected in their pre-mutation state. Click the action button again to re-inspect.
- The accessibility checks are a small subset of the audit pipeline's full WCAG coverage. The intent is signal-rich quick wins; for a full audit run the `mx-c-audit` pipeline.
- The model summary is whichever language model answered (in-browser Gemini Nano or Edge Phi-Silica). It is the model's best read of the structured findings, not a replacement for the deterministic score. The score is the authority.
- The score weighting is equal across findings. The audit pipeline has weights per input; the extension keeps it simple for visibility. If the score skews unhelpfully in real use, tune `SCORE_WEIGHTS` in `popup.js`.
- Edge surfaces sideloaded extensions below the store-installed ones on `edge://extensions/`. The card may not appear in the visible viewport on first load; scroll the page to the very bottom to find it.

## Related

- The full MX audit pipeline this extension is a lightweight cousin of: `mx-reginald/audit/` in the hub.
- The Watching the Machines cluster that argued for the attestation and provenance signals this extension reports on, while critiquing the very model it now uses: `mx-site/blog/drafts/watching-the-machines/google-nano-model/`.
- The local-preview server `mx exec mx-serve` (cog at `scripts/cogs/mx-serve.cog.md` in the hub) for serving a candidate page locally and running the extension against it before promoting to public.
