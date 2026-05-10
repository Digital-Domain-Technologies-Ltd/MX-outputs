---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "Markdown-to-PPTX Deck Builder"
description: "Build any styled PPTX deck from a markdown master and a hand-designed PPTX template. Per-slide layout selection lives in HTML-comment hints inside the markdown. The engine is reusable across any deck."
author: "Tom Cranstoun"
created: 2026-05-08
modified: 2026-05-08
version: "2.1.0"
mx:
  status: active
  contentType: action-doc
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/deck-builder.cog.md
  partOf: mx-os
  buildsOn: [what-is-a-cog, what-is-mx-os, building-action-docs]
  refersTo: [pdf-generator]
  audience: [humans, machines]
  tags: [deck, pptx, python-pptx, layouts, slot-map, adapter, build-pipeline, presentation, pitch]
  summary: "Markdown-to-PPTX engine. Markdown carries content + per-slide `<!-- layout: NAME -->` hints; a layouts module declares slot maps and adapters; a design template carries the visual brand. Engine welds them into a styled deck."
  conformsTo: [https://mx.allabout.network/cog.html]
  trainingDataPolicy: "Internal tool documentation. Permitted in training corpora with attribution to CogNovaMX."
  runbook: "Run scripts/build-deck.py with --md / --template / --layouts / --out. The script is deterministic; every run from the same inputs produces the same .pptx."
  x-mx-cogType: action.scripted
  actionType: scripted
  stewardship:
    steward: "Tom Cranstoun"
    accountableContact: "info@cognovamx.com"
    legalEntity: "Digital Domain Technologies Ltd"
    brand: "CogNovaMX"
  x-mx-riskLevel: medium
  x-mx-execute:
    runtime: python3
    command: python3 scripts/build-deck.py
    prerequisites:
      - tool: python-pptx
        version: ">=1.0.2"
        reason: "Required to read and edit .pptx files"
    actions:
      - name: build
        description: "Build a deck. Pass --md, --template, --layouts, --out as four arguments. The runnable artefact is the @embedded:build script in the body."
---

# Markdown-to-PPTX Deck Builder

Build any styled PPTX deck from a markdown master and a hand-designed PPTX template. The markdown carries content. The template carries the visual brand. A small layouts module welds them. The engine is reusable across any deck.

## What this is for

Decks that need to be polished, on-brand, and reproducible from a markdown source of truth. Edit the .md, re-run the build, see the change in the deck — without losing any of the hand-designed grids, fonts, colours, or page chrome.

## How it works — three components

```text
content.md  ─────────────────┐
   ├─> ## Slide N: Title     │
   ├─> <!-- layout: NAME --> │
   └─> prose / bullets / tables
                             │
design.pptx  ────────────────┤── python3 scripts/build-deck.py ──> output.pptx
   └─> hand-designed template, one slide per layout pattern
                             │
layouts.py  ─────────────────┘
   ├─> LAYOUTS = {"NAME": {source_idx, slots, adapter}, ...}
   ├─> optional PRE_APPLY(prs, cloned_slides) hook
   └─> optional POST_APPLY(prs) hook
```

1. **`content.md`** — your markdown master. Each slide is `## Slide N: Title`. Each slide carries a `<!-- layout: NAME -->` HTML-comment hint that tells the engine which layout to use. The body uses normal markdown — bold first paragraph for the title, bullets for cards or rows, markdown tables for tabular data.
2. **`design.pptx`** — your hand-designed PowerPoint template. One slide per layout pattern. Hand-designed grids, brand fonts, brand colours, page chrome — anything PowerPoint supports. The engine never modifies this file.
3. **`layouts.py`** — Python module with a `LAYOUTS` dict. One entry per layout name. Each entry binds a layout name to:
    - `source_idx`: which 0-based slide in `design.pptx` carries that layout pattern.
    - `slots`: a dict mapping slot names (`title`, `card-2.body`, `tr-3.col-2`, etc.) to the shape index in the source slide.
    - `adapter`: a function that takes the .md slide block and returns a `{slot_name: text}` dict.

The engine: copies the template, parses the .md, clones the named source slide for each .md slide, runs the adapter, writes the slot dict into the cloned slide's shapes, drops the original templates, renumbers `NN / NN` page chrome, and saves.

## Files

| Path | Role |
|---|---|
| [`scripts/build-deck.py`](../build-deck.py) | The generic engine. Roughly 200 lines. Re-usable across decks. |
| [`scripts/lib/pitch_layouts.py`](../lib/pitch_layouts.py) | Layouts module for the CogNovaMX pitch / standards-body brand. 15 named layouts, slot maps, adapter functions, plus PRE_APPLY (drop X/Twitter row) and POST_APPLY (sweep `document` → `file`) hooks. |
| [`mx-outputs/pptx/presentations/design_master.pptx`](../../mx-outputs/pptx/presentations/design_master.pptx) | The pitch design template — hand-designed brand, read-only at build time. Pairs with `pitch_layouts.py`. |
| [`mx-outputs/pptx/presentations/bmv-pitch-2026.md`](../../mx-outputs/pptx/presentations/bmv-pitch-2026.md) | Worked-example content master — investor pitch for one venture. Other decks use other .md files following the same conventions. |
| [`mx-outputs/pptx/presentations/mx-investor-deck.pptx`](../../mx-outputs/pptx/presentations/mx-investor-deck.pptx) | Worked-example output, overwritten on every run. |

## Run

The script has three modes, resolved in order:

### Mode 1 — build (`--md` given)

The full pipeline: read .md, clone slides, apply slots, write .pptx.

```bash @embedded:build
#!/bin/bash
# Wrapper around scripts/build-deck.py — render a styled PPTX deck from a markdown master, template, and layouts module.
set -euo pipefail
python3 scripts/build-deck.py "$@"
```

For the worked example deck:

```bash
python3 scripts/build-deck.py \
    --md mx-outputs/pptx/presentations/bmv-pitch-2026.md \
    --template mx-outputs/pptx/presentations/design_master.pptx \
    --layouts scripts/lib/pitch_layouts.py \
    --out mx-outputs/pptx/presentations/mx-investor-deck.pptx
```

### Mode 2 — extract (`--from-pptx` given, `--md` absent)

When you have an existing `.pptx` but no `.md`, the script reverse-engineers a stub `.md` from the slide text. Each slide becomes a `## Slide N:` block; every text shape's content is dumped as paragraphs; the layout hint is `<!-- layout: TODO -->` for the user to fill in.

```bash
python3 scripts/build-deck.py \
    --from-pptx path/to/existing.pptx \
    --md-out path/to/stub.md
```

If `--md-out` is omitted, the stub is written next to the source `.pptx` with a `.stub.md` extension. Edit the stub (add layout hints, restructure prose), then re-run in build mode.

### Mode 3 — pick (`--md` and `--from-pptx` both absent)

The script lists every `.pptx` under the current directory (excluding `archive/` and `node_modules/`), prompts you to pick one by number, then runs Mode 2 against the chosen file.

```bash
python3 scripts/build-deck.py
# No .pptx files found?  -> exits with a clear message.
# Some found?            -> numbered list, prompt for a number, extract a stub.
```

This is the cold-start path: no .md, no .pptx in mind, just "show me what's available and let me start from one of them".

## How to author a new deck

1. **Pick or design a template** — open PowerPoint, design one slide per layout pattern you need (cover, table, three cards, two columns, whatever your deck calls for). Save as `your-design.pptx`. Use stable shape ordering. If an existing template (such as `design_master.pptx`) already has the patterns you need, re-use it.
2. **Inventory the slots** — for each design slide, list every text shape with a stable slot name (`title`, `card-2.body`, `row-3.left`, etc.). Capture the shape index in source order. python-pptx makes this straightforward:

   ```python
   from pptx import Presentation
   prs = Presentation('your-design.pptx')
   for i, slide in enumerate(prs.slides, 1):
       print(f'=== slide {i} ===')
       for j, sh in enumerate(slide.shapes):
           if sh.has_text_frame:
               print(f'  [{j:2d}] {sh.text_frame.text.strip()[:80]}')
   ```

3. **Pick or write a layouts module** — model on [`scripts/lib/pitch_layouts.py`](../lib/pitch_layouts.py). Define one `_SLOTS_*` dict per design slide; one adapter function per layout pattern. Build a `LAYOUTS` dict that binds names to `{source_idx, slots, adapter}`. Add `PRE_APPLY` and `POST_APPLY` hooks if you need deck-specific transformations. If your deck uses the same template + brand as an existing layouts module, point `--layouts` at it directly.
4. **Author the content** — write your markdown. Every `## Slide N:` heading is followed by a `<!-- layout: NAME -->` hint that names a key in your LAYOUTS dict. Body content goes below in normal markdown.
5. **Run the build** — `python3 scripts/build-deck.py --md ... --template ... --layouts ... --out ...`.

## Worked example — adding a new slide

The worked-example deck needs a new slide between Slide 7 and Slide 8. Suppose it is a *Sustainability Story* slide.

1. **Decide the layout.** *Sustainability Story* is a 3-card narrative. The template already has a 3-card-grid pattern at design slide 5. Re-use the existing `3-card-grid` layout; no new layouts-module entry needed.
2. **Edit the .md.** Insert:

   ```markdown
   ## Slide 7a: Sustainability Story
   <!-- layout: 3-card-grid -->

   **The greenest kilowatt-hour is the one you never use.**

   - **Inference avoidance** — Attested files keep agents off speculative re-derivation paths.
   - **Carbon accounting** — Provenance metadata feeds carbon ledgers. Without it, attribution is guess-work.
   - **Operating cost** — Lower agent token usage compounds across every read.

   Three concrete sustainability wins that follow directly from MX-driven attestation.
   ```

3. **Re-run the build.** The new slide appears between the two existing slides, page chrome auto-renumbered.

## Verification after a build

1. **Slide count.** The deck has the expected number of slides.
2. **Page chrome.** Slides carrying a `NN / NN` chrome read `01 / TOTAL` through `TOTAL / TOTAL`.
3. **Content provenance.** Pick a sentence in the .md. Find it on the rendered slide. The match should be exact (modulo any POST_APPLY transforms).
4. **Source-of-truth round trip.** Edit any sentence in the .md. Re-run the build. Open the .pptx. The change should appear in exactly that one shape; nothing else moves.

## Hinting images from the markdown

To swap an image into a slide, put a markdown image hint in the .md slide block. Two equivalent forms:

```markdown
![hero](../images/cover-art.png)
```

```markdown
<!-- image: hero = ../images/cover-art.png -->
```

The alt text (`hero`) is the **slot name**. The path is relative to the .md file, or absolute. The slot name must appear in the layout's `image_slots` dict — that dict tells the engine which Picture shape index in the source design slide gets replaced.

To enable image swaps for a layout, add `image_slots` alongside `source_idx`, `slots`, `adapter`:

```python
LAYOUTS = {
    "cover": {
        "source_idx": 0,
        "slots": {...text slot map...},
        "image_slots": {"hero": 4},  # shape idx 4 in design slide 0 is the hero Picture
        "adapter": adapter_cover,
    },
    ...
}
```

The engine swaps the Picture shape in place: position and size are preserved exactly; only the bytes change. A new image is added to the package's media folder and the new Picture's `r:embed` points at it.

If a layout has no `image_slots` and the .md has image hints, the hints are ignored (no warning).
If a layout has `image_slots` but the .md doesn't supply that slot, the original Picture stays untouched.

## Boundaries

- **Adapters are content-aware, not layout-derived.** Each layout pattern has one adapter; the adapter knows the structural pattern of its layout (e.g. for a 3-card-grid, expect three bullets in `**Title** — body` form). Mismatched .md content (four bullets instead of three) is silently truncated. Authors must keep .md structure in sync with layout expectations.
- **Slot indices depend on shape ordering.** If a designer rearranges shapes inside a design slide such that shape order changes, the slot map needs an update. Slot names stay stable; only the shape indices shift.
- **Cards keep template defaults where the .md doesn't name them.** Card badges, taglines, and meta-lines are visual scaffolding. Adapters drive the title and body of each card; the template drives the smaller scaffolding text unless the adapter explicitly overrides.
- **Layout hints must match a key in LAYOUTS.** A typo (`<!-- layout: 3-card-gird -->`) prints a warning and skips the slide. Validate by running the build; warnings appear with the slide number.

## Hooks

- **`PRE_APPLY(prs, cloned_slides)`** — runs after all slides are cloned and slot-applied, before the original templates are dropped. Use for shape-level transformations on cloned slides (e.g. drop a row that exists in the template but isn't wanted in the rendered output). `cloned_slides` is a list of `(layout_name, slide)` tuples so the hook can target by layout.
- **`POST_APPLY(prs)`** — runs after page-chrome renumbering, just before save. Use for global text transforms (e.g. swap one term for another across every shape).

The example layouts module uses both hooks: `PRE_APPLY` drops the X/Twitter row from any cloned `insight-rows` slide; `POST_APPLY` runs a `document` → `file` sweep across the whole deck (preserving `DOCUMENTED` and `Documentation`).

## Provenance

This cog documents the generic engine as it stands on 8 May 2026. The engine + layouts split makes any markdown + any template + any layouts module yield a styled deck. The intent is to support multiple decks over time — investor pitches, partnership decks, conference talks — without re-welding a build pipeline each time.

---

*End of Markdown-to-PPTX Deck Builder cog.*
