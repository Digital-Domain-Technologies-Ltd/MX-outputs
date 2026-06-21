---
title: "MX Readiness Inspector — Browser Extension"
description: "Chromium extension that inspects the current page for MX-readiness signals and summarises with an on-device or local language model."
author: Tom Cranstoun
created: 2026-05-31
modified: 2026-06-03
version: "0.2.0"

type: info-doc
tags: [browser-extension, chrome-extension, edge-extension, mx-audit, gemini-nano, ollama, on-device, mx-readiness]
mx:
  status: active
  audience: [humans]
  x-mx-category: mx-tools
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/extensions/mx-readiness/README.md
  runbook: "Load the unpacked extension at chrome://extensions or edge://extensions and click the action button on any web page to see the MX-readiness signals and a model summary."

---

# MX Readiness Inspector

A Chromium-based browser extension (Chrome and Edge) that inspects the page you are currently looking at for the signals MX cares about (governance meta, AI disclosure, discovery files, structured data, Open Graph, accessibility, provenance), scores them deterministically, and asks a language model for a brief summary.

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

The extension is sideloaded; it is not on the Chrome Web Store or Edge Add-ons store.

1. Clone the repo (or pull the latest).
2. Open your browser's extensions page: `chrome://extensions` (Chrome) or `edge://extensions` (Edge).
3. Toggle **Developer mode** on (top-right).
4. Click **Load unpacked**.
5. Select `mx-outputs/extensions/mx-readiness/`.
6. The extension appears in the toolbar; pin it for easy access.

To update after editing source: revisit the extensions page and click the refresh-circle icon on the MX Readiness Inspector card.

## Enable the language model summary

The deterministic checks work in any modern Chromium-based browser. The summary needs a language model. The extension tries five sources in order; whichever responds first is the one used.

| Order | Source | Surface | Where it ships |
|---|---|---|---|
| 1 | Chrome / Edge | `self.LanguageModel` (WICG-aligned) | Chrome 131+ with the Prompt API flag; Edge 138+ on Copilot+ PCs running Windows. |
| 2 | Chrome | `self.ai.languageModel` | Pre-WICG Chrome origin trial. |
| 3 | Edge | `self.ai.assistant` (Phi-Silica) | Edge's earlier Prompt API surface on Copilot+ PCs running Windows. |
| 4 | Chrome | `self.chrome.aiOriginTrial.languageModel` | Older trial namespace. |
| 5 | Local Ollama | `http://127.0.0.1:11434` | Any machine with Ollama running — automatic fallback when browser model is absent. |

If none of those are reachable, the popup shows the deterministic score plus a one-line note explaining how to enable a model. The DOM and origin findings still render regardless. Every model runs locally; no page content leaves your machine.

The summary panel's footer line names which source answered ("Chrome/Edge (WICG)", "Ollama (gpt-oss:20b, local)", etc.), so you always know what generated the prose.

### Chrome setup

1. **Chrome 127+** (preferably 131+).
2. **Prompt API for Gemini Nano** enabled at `chrome://flags`. Search for "Prompt API for Gemini Nano" and set to **Enabled**.
3. **On-device model downloaded.** Visit `chrome://components`, find **Optimization Guide On Device Model**, and check it is at a non-zero version. Chrome downloads it on its own schedule; the **Watching the Machines** cluster covers exactly when and how, with no consent dialogue.

### Edge setup (Windows, Copilot+ PC)

1. **Edge 138+ on a Copilot+ PC running Windows.** The on-device Prompt API is gated to devices with an NPU.
2. **The on-device AI flag enabled** at `edge://flags/#language-model-api`.
3. **Phi-Silica installed.** The model arrives through Windows Update on supported hardware; you do not download it manually.

### Edge setup (macOS) / Ollama fallback

Edge on macOS does not expose an on-device model API (Phi-Silica is Windows-only). The extension automatically falls back to a local Ollama instance instead.

1. Install Ollama from [ollama.com](https://ollama.com) and pull a model (`ollama pull llama3.2` or any model the extension recognises).
2. Allow browser extension requests by setting `OLLAMA_ORIGINS=*`. On macOS this is persistent via a LaunchAgent — a ready-made plist lives at `~/Library/LaunchAgents/com.ollama.environment.plist` in this repo's setup.
3. Start Ollama (`ollama serve` or open the Ollama app). The extension probes `127.0.0.1:11434` on every popup open and uses the first available model it recognises.

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
           └─►  tryBrowserModel()  →  LanguageModel / ai.languageModel / ai.assistant
                    │  (null if no browser model available)
                    │
                    └─►  tryOllamaModel()  →  fetch( 127.0.0.1:11434/api/chat )
                              │  (null if Ollama not running)
                              │
                              └─►  fallback message with browser-specific setup hint
```

- `content.js` runs in the page's main world (DOM access) but has no host permission — it only reads.
- `background.js` is the service worker. It has `<all_urls>` host permission, so it can fetch the origin's discovery files without CORS.
- `popup.js` is the orchestrator and the home of the Gemini Nano call. The on-device API is exposed only in extension contexts, not page contexts.

## Permissions

- `activeTab` — read the current tab's URL and inject the content script when the action button is clicked.
- `scripting` — allow the popup to inject `content.js`.
- `<all_urls>` host permission — origin-level fetches for `/llms.txt`, `/robots.txt`, `/AI-USAGE.json`, `/agent-card.json`, `/sitemap.xml`.
- `http://127.0.0.1:11434/*` and `http://localhost:11434/*` — Ollama fallback calls. Only used when the browser on-device model is absent.

No tabs, no history, no storage, no calls to remote servers.

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
