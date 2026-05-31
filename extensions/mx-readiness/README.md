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

The deterministic checks work in any modern Chromium-based browser. The summary needs a language model. The extension tries five sources in order; whichever responds first is the one used.

| Order | Source | Surface | Where it ships |
|---|---|---|---|
| 1 | Chrome / Edge | `self.LanguageModel` (WICG-aligned) | Chrome 131+ with the Prompt API flag; Edge 138+ on Copilot+ PCs. |
| 2 | Chrome | `self.ai.languageModel` | Pre-WICG Chrome origin trial. |
| 3 | Edge | `self.ai.assistant` (Phi-Silica) | Edge's earlier Prompt API surface on Copilot+ PCs. |
| 4 | Chrome | `self.chrome.aiOriginTrial.languageModel` | Older trial namespace. |
| 5 | Local Ollama | `http://localhost:11434/api/chat` | Any local install of [Ollama](https://ollama.com/). Used in any browser when no in-browser API is exposed. |

If none of those are reachable, the popup shows the deterministic score plus a one-line note explaining the install path. The DOM and origin findings still render. Every model runs locally; no page content leaves your machine.

The summary panel's footer line names which source actually answered ("Chrome/Edge (WICG)", "Edge (Phi-Silica)", "Ollama (llama3.2:3b)", etc.), so you always know what generated the prose.

### Chrome setup

1. **Chrome 127+** (preferably 131+).
2. **Prompt API for Gemini Nano** enabled at `chrome://flags`. Search for "Prompt API for Gemini Nano" and set to **Enabled**.
3. **On-device model downloaded.** Visit `chrome://components`, find **Optimization Guide On Device Model**, and check it is at a non-zero version. Chrome downloads it on its own schedule; the **Watching the Machines** cluster covers exactly when and how, with no consent dialogue.

### Edge setup

1. **Edge 138+ on a Copilot+ PC.** The on-device Prompt API is gated to devices Microsoft considers AI-capable hardware.
2. **The on-device AI flag enabled** at `edge://flags`. Search for "Prompt API" or "on-device AI".
3. **Phi-Silica installed.** The model arrives through Windows Update on supported hardware; you do not download it manually.

On Edge without Copilot+ hardware, the extension falls through to Ollama if it is running locally.

### Ollama setup (the universal fallback)

Ollama runs an on-device model server alongside the browser. It is the same default the MX audit pipeline uses in regulated-industry mode, so client data never leaves your machine.

1. **Install** — `brew install ollama` on macOS, or [download from ollama.com](https://ollama.com/).

2. **Pull a small model** — the extension prefers fast-popup-sized models:

   ```
   ollama pull llama3.2:3b
   ```

   Other models the extension recognises out of the box (in order of preference): `llama3.2:1b`, `qwen2.5:3b`, `phi3.5:3.8b`, `llama3.1:8b`, `mistral:7b`, anything starting `gpt-oss`. If you have none of those, the first model in `ollama list` is used.

3. **Allow the extension's origin** — by default Ollama only accepts CORS requests from `localhost` and `127.0.0.1`. The extension's origin is `chrome-extension://<id>`, which Ollama rejects unless `OLLAMA_ORIGINS` is set. The simplest setup on macOS:

   ```
   launchctl setenv OLLAMA_ORIGINS "*"
   ```

   Then restart Ollama. Or, if running `ollama serve` manually:

   ```
   OLLAMA_ORIGINS="*" ollama serve
   ```

   If you want tighter scope, replace `*` with the exact `chrome-extension://...` ID shown in `chrome://extensions/` for this extension.

4. **Start the server** — `ollama serve` (skip if you set it up as a launch daemon).

To change the model preference order or the endpoint, edit `OLLAMA_ENDPOINT` and `OLLAMA_MODEL_PREFERENCES` at the top of `popup.js` and reload the extension.

### Why `OLLAMA_ORIGINS` matters — the CORS gotcha in full

The single most common reason a fresh Ollama install does not work with this extension is the CORS check Ollama performs on every incoming request. The mechanism is worth understanding rather than copy-pasting around, because the same shape catches every browser-driven Ollama client.

#### 1. Why Ollama enforces an origin allowlist at all

Ollama runs an HTTP server on `localhost:11434`. The server is local and unauthenticated — there is no API key, no signed token, no cookie. The trust boundary is "anything running on this machine can use the model."

That boundary has a hole. Any web page you visit could, in principle, send a `fetch()` to `http://localhost:11434/api/chat` from a script tag. Without an origin check, the page could:

- Burn through your GPU cycles on the attacker's prompts while pretending to be a useful site.
- Read whatever the model says back, including parts of context the attacker chose to leak through.
- Trigger model downloads (`/api/pull`) that fill your disk.
- Probe whether you have specific models installed (a privacy leak of "this user has gpt-oss:20b but not phi3.5", which is a fingerprint).

The defence Ollama uses since version 0.1.39 is the standard CORS protocol. Every request that arrives with an HTTP `Origin` header (which the browser stamps automatically on every cross-origin fetch) is checked against an allowlist. Requests from outside the allowlist do not receive the `Access-Control-Allow-Origin` response header. The browser, seeing no such header, refuses to surface the response to the calling JavaScript and reports `TypeError: Failed to fetch`.

That refusal happens **in the browser**, not in Ollama. Ollama actually answers the prompt and writes the response on the wire. The browser drops the response before it reaches the script that asked. From the script's point of view, Ollama is unreachable. From `curl`'s point of view (no Origin header, no CORS), Ollama works perfectly.

#### 2. The default allowlist

Out of the box, Ollama accepts requests whose `Origin` header starts with:

- `http://localhost`
- `http://127.0.0.1`
- `http://0.0.0.0`

…on any port. Anything else — `https://`, a real public domain, a `chrome-extension://...`, a `moz-extension://...` — is rejected.

This is sensible for a default: it means a local dev tool running on `http://localhost:3000` can hit Ollama for free, but `https://malicious-site.com` cannot.

#### 3. The extension's origin

When `popup.js` runs `fetch('http://localhost:11434/api/chat', ...)`, the browser stamps the outbound request with an Origin header derived from the page that initiated it. For an extension popup that page is:

```
chrome-extension://<32-character-extension-id>
```

(Edge uses the same scheme, prefixed differently in some logs but reported as `chrome-extension://` over the wire.)

That string starts with `chrome-extension://`, not `http://localhost`, so Ollama refuses. The popup catches a `TypeError: Failed to fetch` and falls through to the "Ollama unreachable" error path.

#### 4. The fix, two ways

Tell Ollama to accept the extension's origin via the `OLLAMA_ORIGINS` environment variable. The variable is a comma-separated list of glob patterns the server matches against the incoming Origin header. Two practical choices:

**Wildcard (open to any local origin):**

```
OLLAMA_ORIGINS="*" ollama serve
```

This accepts any browser tab, any extension, any local script. On macOS with Ollama running as a launch daemon, the persistent form is:

```
launchctl setenv OLLAMA_ORIGINS "*"
```

Then restart Ollama (`brew services restart ollama`, or quit and reopen the menubar app).

**Scoped (only this extension):**

```
OLLAMA_ORIGINS="chrome-extension://abcdef0123456789abcdef0123456789" ollama serve
```

Replace the 32-character ID with the value Chrome shows under the extension's name on `chrome://extensions/` (visible when Developer mode is on). The scoped form is tighter; if you add a second extension or a localhost dev tool later, you have to widen the list.

#### 5. Why the wildcard is reasonable for a dev machine

`OLLAMA_ORIGINS="*"` allows any origin in any browser to talk to your local Ollama. The threat model that hides behind is: "a malicious site running in your browser can call your local model server." That is a real concern, but on a single-user developer machine the picture looks different:

- You are the only person running scripts on the machine, so "any local origin" really means "you and your tools."
- A malicious site that already has a tab open is already inside your browser session, with all the cookies and storage that implies. The marginal capability of also using your local Ollama is small compared to what they could already do.
- The data you send to Ollama leaves the browser session via your own deliberate action (clicking the extension icon and reviewing the page you're on). A malicious site would need to also persuade your browser to point at a page worth analysing, which is most of the work.

For a multi-user machine, a kiosk, a shared lab box, or an environment where you do not trust your own browsing patterns, use the scoped form instead. The cost is one extra line in your shell rc whenever you add an Ollama-using tool.

#### 6. Diagnosing it yourself

A few one-liners to confirm whether CORS is what is biting you:

```
# Does Ollama answer at all?
curl -s http://localhost:11434/api/tags | head -1

# Does it answer with a CORS-friendly response for the extension's origin?
curl -s -i -H "Origin: chrome-extension://abcdef0123456789abcdef0123456789" \
  http://localhost:11434/api/tags | grep -i access-control

# After setting OLLAMA_ORIGINS, the second command should show:
#   Access-Control-Allow-Origin: chrome-extension://abcdef...
# If that header is absent, the OLLAMA_ORIGINS env var did not reach
# the running ollama process. Restart it.
```

The extension's error path names the exact command so a user hitting this for the first time sees the fix in the popup itself rather than having to dig through docs:

> Score 67/100. Ollama llama3.2:3b raised: Failed to fetch. Check that Ollama allows the extension's origin: OLLAMA_ORIGINS="*" ollama serve.

## The popup toolbar

Two buttons sit between the summary panel and the section tabs.

- **Force Ollama** — re-runs the summary against Ollama regardless of whether the browser exposes a built-in model. Useful for comparing the in-browser model's narrative against a larger Ollama model (`gpt-oss:20b` versus Nano, for example), and for forcing the regulated-industry path when an organisation policy requires it.
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
- The model summary is whichever language model answered (in-browser Gemini Nano, Phi-Silica, or local Ollama). It is the model's best read of the structured findings, not a replacement for the deterministic score. The score is the authority.
- The score weighting is equal across findings. The audit pipeline has weights per input; the extension keeps it simple for visibility. If the score skews unhelpfully in real use, tune `SCORE_WEIGHTS` in `popup.js`.
- **Ollama silently rejects the extension's origin until you set `OLLAMA_ORIGINS`.** This catches every first-time Ollama user; the "Why `OLLAMA_ORIGINS` matters" subsection above walks through why and how to fix it. If the popup says "Ollama unreachable" and `curl localhost:11434/api/tags` works fine from a terminal, this is what is happening.
- Edge surfaces sideloaded extensions below the store-installed ones on `edge://extensions/`. The card may not appear in the visible viewport on first load; scroll the page to the very bottom to find it.

## Related

- The full MX audit pipeline this extension is a lightweight cousin of: `mx-reginald/audit/` in the hub.
- The Watching the Machines cluster that argued for the attestation and provenance signals this extension reports on, while critiquing the very model it now uses: `mx-site/blog/drafts/watching-the-machines/google-nano-model/`.
- The local-preview server `mx exec mx-serve` (cog at `scripts/cogs/mx-serve.cog.md` in the hub) for serving a candidate page locally and running the extension against it before promoting to public.
