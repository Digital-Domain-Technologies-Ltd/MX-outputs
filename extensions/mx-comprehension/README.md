---
title: "MX Comprehension Probe — Chrome Extension"
description: "Chrome extension that asks a local AI model a free-text question about the current page, reading only what any machine can see. The MX-agnostic companion to the MX Readiness Inspector, built for the MozFest 'facts vs guesses' demo."
author: Tom Cranstoun
created: 2026-05-31
modified: 2026-05-31
version: "0.1.0"

mx:
  status: active
  contentType: info-doc
  audience: [humans]
  x-mx-category: mx-tools
  tags: [chrome-extension, on-device, comprehension, mozfest, demo, gemini-nano]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/extensions/mx-comprehension/README.md
  runbook: "Load the unpacked extension at chrome://extensions, open a page, type a question, and the on-device model answers from the page content alone. Pair it with the demo pages in ./demo to show a structured page answering with facts where a stripped page can only guess."
---

# MX Comprehension Probe

A Chrome extension that asks the page you are on a plain-language question and answers it with a local AI model, using only what the page itself carries. It is the second of two tools:

- The **MX Readiness Inspector** (`../mx-readiness/`) grades a page on whether it meets the MX standard. It looks *for* MX.
- The **MX Comprehension Probe** (this one) asks a page a question and reports what the machine can work out. It does **not** look for MX. It reads the visible text plus any embedded structured data, meta tags, and source frontmatter, then answers from that and nothing else.

The point of keeping it MX-agnostic is honesty. The probe never rewards a page for carrying MX. It just reads what is there. A page that carries provenance, authorship, and verified facts hands the model a list it can quote. A page that carries none hands it bare prose with the safety-critical facts missing. The difference in the answer is the page's doing, not the tool's.

## The demo it was built for

The `demo/` folder holds a matched pair of pages for the MozFest 2026 talk ("Wilding the metadata layer"). Both describe the same fictional medication. One carries a full machine-readable layer; the other mirrors the real web, with the same words for a human but no structure for a machine.

Ask both pages the same question:

- "Who wrote this page, when, and has a qualified person reviewed it?"
- "Is the dosage on this page safe to act on - who verified it and when?"
- "Was any part of this written by AI? Which part, and by which model?"

The structured page answers each as a list of facts. The stripped page can only say the page does not provide them. That contrast is the talk's closing argument: the vocabulary that lets a machine read AI-disclosed content is being written now, in public or behind a vendor wall.

The pages are fully fictional and carry a visible "fictional demo content - not medical advice" banner. The planted dosage error exists to be caught, never to be acted on.

## Install

The extension is sideloaded; it is not on the Chrome Web Store.

1. Open Chrome at `chrome://extensions`.
2. Toggle **Developer mode** on (top-right).
3. Click **Load unpacked**.
4. Select `mx-outputs/extensions/mx-comprehension/`.
5. The amber icon appears in the toolbar; pin it for easy access.

To update after editing source: visit `chrome://extensions` and click the refresh-circle on the MX Comprehension Probe card.

## Serve the demo pages

Content scripts inject cleanly over `http(s)`. Serving the folder over localhost avoids the "Allow access to file URLs" toggle that `file://` needs:

```
cd mx-outputs/extensions/mx-comprehension/demo
python3 -m http.server 8000
```

Then open `http://localhost:8000/treatment-structured.html` and `http://localhost:8000/treatment-hostile.htm` in separate tabs and run the probe on each. The full-MX page is `.html`; the stripped page is `.htm` - a deliberate, memorable split for the stage. (To use `file://` instead, enable "Allow access to file URLs" for the extension on `chrome://extensions`.)

## Enable the on-device model

The probe needs a language model. It tries the same sources, in the same order, as the MX Readiness Inspector; whichever responds first answers. The full table and the Chrome / Edge flag walk-through live in [`../mx-readiness/README.md`](../mx-readiness/README.md#enable-the-on-device-model); the short version:

| Order | Source | Surface |
|---|---|---|
| 1 | Chrome / Edge | `self.LanguageModel` (WICG) |
| 2 | Chrome | `self.ai.languageModel` |
| 3 | Edge | `self.ai.assistant` (Phi-Silica) |
| 4 | Chrome | `self.chrome.aiOriginTrial.languageModel` |

On Chrome and Edge without an on-device model available, the extension shows a fallback message with setup instructions.

## How it works

```
popup.js  ──►  chrome.scripting.executeScript( content.js in active tab )
           │       └─►  returns { payload, counts }  (visible text + JSON-LD + meta + frontmatter)
           │
           └─►  MXLocalModel.generate( systemPrompt, payload + question )   [lib/ai-client.js]
                    └─►  browser on-device model
                           └─►  answer, drawn only from the page
```

- `content.js` runs in the page and only reads. It collects the machine-visible payload in one pass, MX-agnostic.
- `lib/ai-client.js` is the on-device model client, generalised from the Readiness Inspector so both tools share one fallback chain. It takes a system prompt and a user prompt and returns `{ text, source }`.
- `popup.js` builds the prompt, calls the client, and renders the answer plus a "what the machine saw" panel so you can show the audience how thin the stripped page's payload is.

The system prompt tells the model to answer only from the page and to say plainly when the page does not carry the answer. That keeps the demo honest: the stripped page fails because the facts are absent, not because the tool told the model to stumble. Removing the "do not guess" clause turns the stripped-page answer into a confident, unverifiable guess - a stronger but less defensible beat, left out by default.

## Files

| File | Role |
|---|---|
| `manifest.json` | MV3 manifest. `activeTab` + `scripting`. |
| `popup.html` | Popup UI: question box, preset chips, answer panel, "what the machine saw" detail. |
| `popup.css` | Popup styles (light + dark, amber accent so it reads as the Readiness Inspector's sibling). |
| `popup.js` | Orchestrator: read the page, build the prompt, call the model, render. |
| `content.js` | MX-agnostic page reader injected into the active tab. |
| `lib/ai-client.js` | On-device model client, shared design with the Readiness Inspector. |
| `demo/` | The MozFest page pair plus its landing page and styles. |

## Permissions

- `activeTab` + `scripting` — read the current tab and inject the reader when you click Ask.

No tabs history, no storage, no remote calls. All inference runs locally in the browser.

## Known limits

- The reader runs when you click Ask, on the page's current rendered state. Content hidden in collapsed tabs or accordions is excluded, the same as for a reader looking at the screen. That is deliberate: it models what a naive agent sees.
- The payload is capped to fit a small model's context budget; very long pages are truncated (the popup says when).
- The answer is the model's read of the page, not a verified fact. On the structured demo page the facts are quotable; on any real page, treat the answer as a prompt to check, not an authority.

## Related

- The MX Readiness Inspector this is the sibling of: `../mx-readiness/`.
- The MozFest pitch the demo serves: `mx-canon/mx-maxine-lives/businesses/the-gathering/festival-pitch.md` in the hub.
- The local-LLM-by-default position the demo embodies: the audit pipeline's `lib/llm-client.js` in `mx-reginald/audit/`.
