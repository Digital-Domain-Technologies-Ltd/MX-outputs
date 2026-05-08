---
title: "BMV differentiation pass — supporting-corpus inventory"
description: "Inventory of every supporting surface that needs to stay in step with the canonical BMV deck on the four 'I already know this' objections (SEO/GEO, JSON-LD/schema.org, why-not-Google, MeetKai) and the 'MX is the DNA of the file' framing that supersedes the legacy 'MX pool' shorthand."
author: Tom Cranstoun
date: 2026-05-07
status: research-note
mx:
  canonicalUri: https://mx.allabout.network/research/2026-05-corpus-inventory.html
  contentType: research-note
  audience: internal
---

# BMV differentiation pass — supporting-corpus inventory

Companion to `2026-05-google-webdev-notes.md`. Maps the surfaces that need to ripple meaning and voice once the canonical BMV deck is updated, so an investor who clicks through finds the same MX everywhere.

## 1. Surface map

| Surface | Path | What lives there | Status |
|---|---|---|---|
| Public site source | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/mx-site/` | Source for `mx.allabout.network` — `index.html`, `about/`, `blog/`, `books/`, `learn/`, `reginald/` (mounted module landing), `services/`, `the-gathering/`, plus `llms.txt`, `llms-full.txt`, `llms-understanding.txt`, `cog.html`, `404.html` | Editable submodule (allaboutv2 originated, but managed in-repo as a writable surface) |
| REGINALD module landing | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/reginald/` | Source for `reginald.allabout.network` — `index.html`, `ai-readiness.html`, `audit.html`, `benefits.html`, `get-started.html`, `how-it-works.html`, `plugins.html`, `pricing.html`, `api.html`, plus `reginald.cog.md`, `llms.txt`, `index.json` | Editable submodule |
| REGINALD landing inside mx-site (machine-readiness) | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/mx-site/reginald/` | `index.html`, `mx-machine-readiness.html`, `mx-machine-readiness.cog.md`, `mx-machine-readiness.meta.cog.md`, `cog.v1.cog.md` | Editable |
| Carrier rendering — content | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/content/` | `cogs/cognovamx/`, `index.html`, `css/`, `js/` — content carrier output | Editable; clean of pool framing |
| Carrier rendering — html | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/html/` | `audit/`, `blogs/` (empty), `books/` (chapter-by-chapter HTML for codex / handbook / protocols), `presentations/` (incl. `mx-pitch-bmv-2026.html` — the BMV deck itself) | Editable; clean of pool framing |
| Carrier rendering — json | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/json/` | `audit/comparison-2026-02-21-08-35-03.json` only | Editable; clean of pool / DNA prose (out of scope) |
| Carrier rendering — md | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/md/` | `migrations/staging/` (this file lives here), `presentations/`, `reports/` | Editable |
| Carrier rendering — pdf | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/pdf/` | Tagged-PDF outputs of books, manifestos, outreach, reports. Regeneration target, not a primary edit surface. | Editable but generated; binary outputs |
| Carrier rendering — pptx | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/pptx/` | `presentations/bmv-pitch-2026.md` — the BMV deck markdown source the canonical pass will rewrite | Editable; canonical deck source |
| Manuscript — *MX: The Handbook* | `/Users/tomcranstoun/Documents/GitHub/MX-hub/datalake/manuscripts/mx-books/mx-handbook/` | Published book source (chapter-00 through chapter-12 plus front and back matter) | **Read-only — published**. Differentiation ripple goes to the rendered HTML carrier under `mx-outputs/html/books/handbook/` and to the mx-site book pages, not to this source, unless Tom explicitly directs otherwise. |
| Manuscript — *MX: The Protocols* | `/Users/tomcranstoun/Documents/GitHub/MX-hub/datalake/manuscripts/mx-books/mx-protocols/protocols/` | Editable book source (executive-summary, preface, chapter-00 through chapter-22, the-end, rear-cover) | **Editable** per CLAUDE.md. Chapter-10 (`chapter-10-generative-engine-optimization.md`) is the natural home for the GEO objection; chapter-22 (`chapter-22-content-negotiation-and-the-markdown-trap.md`) and chapter-00 carry adjacent argument. |
| Manuscript — free-book / appendices / shared / code-examples | `/Users/tomcranstoun/Documents/GitHub/MX-hub/datalake/manuscripts/mx-books/{free-book,mx-appendices,mx-code-examples,shared}/` | Free-book chapter-00 (`free-book/chapter-00/chapter-00-free.md`), Appendix M (Index of Metadata), Appendix N (Anti-Patterns), Glossary, etc. | Mixed: free-book + appendices editable; `shared/` published. |
| The Gathering — public source for site copy | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/mx-site/the-gathering/` | `index.html`, `draft-notes.html` (the canonical online draft index — links every draft to its `mx-shared-gathering` raw URL), `how-it-works.html`, `join.html`, `sponsorship.html` | Editable (mx-site submodule) |
| The Gathering — drafts source | `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-shared-gathering/` | The public submodule of `draft-*.md` notes plus its `README.md` (in-repo draft index). | Editable submodule (writable per `feedback_mx_shared_gathering_writable.md`). |

## 2. Files where the four objections are currently addressed

### 2a. *Isn't this just SEO / GEO?*

- `mx-shared-gathering/draft-mx-not-geo.md` — the dedicated boundary note. Lines 34–62 carry the framing claim; lines 46–54 dismantle the "GEO is enough" argument; lines 96–100 explain Reginald-as-active-registry vs GEO-as-passive-tags; line 138 reframes the "Schema.org markup ensures AI discovery" myth.
- `mx-outputs/mx-site/blog/geo-is-a-tactic-mx-is-the-specification.html` — full public-facing essay. Lines 122 (intro), 156–187 (SEO→GEO→MX progression and the system-prompt point), 174 (DNA framing locked in), 191 (agency-positioning kicker).
- `mx-outputs/pptx/presentations/bmv-pitch-2026.md` — line 89 carries the DNA-of-the-file claim, the natural anchor for an "isn't this GEO" rebuttal slide if one is added.
- `datalake/manuscripts/mx-books/mx-protocols/protocols/chapter-10/chapter-10-generative-engine-optimization.md` — the protocols' dedicated GEO chapter (editable per CLAUDE.md).
- `mx-outputs/mx-site/blog/mx-a-new-role.html`, `mx-outputs/mx-site/blog/machine-experience-adding-metadata.html`, `mx-outputs/mx-site/blog/what-is-machine-experience.html`, `mx-outputs/md/presentations/MX-what-why-when.md`, `datalake/manuscripts/mx-books/mx-handbook/chapters/chapter-00/chapter-00-handbook.md`, `datalake/manuscripts/mx-books/mx-protocols/protocols/chapter-04/chapter-04-the-business-reality.md`, `datalake/manuscripts/mx-books/mx-handbook/chapters/chapter-11/chapter-11-business-imperative.md`, `datalake/manuscripts/mx-books/mx-protocols/protocols/chapter-00/chapter-00-protocols.md` — supporting prose that contrasts MX with SEO.

### 2b. *Isn't this just JSON-LD or schema.org?*

The JSON-LD blocks on every page are emitted as metadata, not prose; the prose-level rebuttal is concentrated here:

- `mx-shared-gathering/draft-mx-not-geo.md` lines 46–62 and lines 96–100 (Reginald reads both YAML frontmatter *and* JSON-LD, and is queryable rather than passive — JSON-LD alone is not enough).
- `mx-shared-gathering/draft-mx-not-memory-pool.md` line 85 — the DNA framing names "Schema.org JSON-LD script" as one of several DNA carriers, not the whole answer.
- `mx-outputs/reginald/how-it-works.html` lines 80, 111, 120, 141 — the canonical "MX adds where Schema.org leaves gaps; never duplicates" statement.
- `mx-outputs/reginald/reginald.cog.md` lines 71–75, 152, 158, 187 — same convergence argument in cog form.
- `mx-outputs/reginald/ai-readiness.html` lines 90, 117, 145, 195, 232, 254 — the five-stage AI-readiness ladder explicitly positions Schema.org as a *layer*, not a substitute.
- `mx-outputs/reginald/plugins.html` line 282 — the "starter kit" footer explains Schema.org is one of three foundational layers, not the full Machine Experience.

### 2c. *Why wouldn't Google just do this?* (web.dev agent guide, 1 May 2026)

- `mx-outputs/md/migrations/staging/2026-05-google-webdev-notes.md` — the source-citable research note already in staging. This is the most authoritative anchor for the rebuttal; the BMV pass should read it first.
- `mx-outputs/mx-site/blog/web-is-just-the-start.html` lines 169–230 — the existing public essay framing the web.dev guide as describing "what good looks like on a web page" while MX extends the discipline beyond the browser.
- `mx-outputs/mx-site/blog/content-that-manages-itself.html` line 257 — January 2026 commerce launch reference (Amazon, Microsoft, Google).
- `mx-outputs/mx-site/books/appendices/appendix-g.html` lines 294, 595–596 — published reference to web.dev/baseline.
- `datalake/manuscripts/mx-books/mx-protocols/protocols/chapter-17/chapter-17-the-joymaker.md`, `chapter-14/chapter-14-agent-protocols.md`, `chapter-00/chapter-00-protocols.md` — supporting prose in editable manuscript.
- `mx-outputs/md/reports/directors/session/2026-05-06-evening-report.md` — director's report capturing the Google web.dev moment (context for the pass).

### 2d. *Isn't this just MeetKai's sovereign-data work?* (partnership-shaped, not competitive)

- `mx-outputs/pptx/presentations/bmv-pitch-2026.md` line 105 — the BMV deck's own "Sovereign AI runtime: MeetKai" portfolio-mapping line. This is the only place in the corpus that names MeetKai inside the partnership-shape argument.
- `mx-outputs/html/presentations/mx-pitch-bmv-2026.html` lines 26 (the script line, "sovereign runtime at MeetKai") and 1869 (the rendered cell).
- `mx-outputs/README.md` lines 209–214 — links to the MeetKai outreach audit artefacts (`pdf/outreach/2026-05-02/meetkai-*`). Operational, not strategic.
- `mx-outputs/md/reports/directors/session/2026-05-06-morning-report.md` — director's report capturing the MeetKai outreach audit.

No other surface mentions MeetKai. The deck is currently the *only* public-facing artefact making the partnership-shape claim.

## 3. Files where each objection could be strengthened

### 3a. *Isn't this just SEO / GEO?*

- **mx-site core pages.** `mx-outputs/mx-site/index.html`, `mx-outputs/mx-site/learn/why-mx-matters.html`, `mx-outputs/mx-site/learn/what-is-mx.html`, `mx-outputs/mx-site/learn/key-principles.html`, `mx-outputs/mx-site/learn/mx-principles.html`, `mx-outputs/mx-site/learn/benefits.html` — none currently carries the "isn't this just SEO/GEO?" rebuttal as a named section. The DNA-of-the-file framing already lands; what is missing is a one-paragraph "this is not SEO/GEO" refusal. Lift from `draft-mx-not-geo.md` lines 34–62 and link to `blog/geo-is-a-tactic-mx-is-the-specification.html`.
- **REGINALD module pages.** `mx-outputs/reginald/index.html`, `mx-outputs/reginald/how-it-works.html`, `mx-outputs/reginald/benefits.html`, `mx-outputs/reginald/pricing.html`, `mx-outputs/reginald/get-started.html` — currently lean Schema.org / GEO / SEO into the convergence argument (which is correct) but stop short of the "MX is not GEO" boundary. Add a single sentence in each Hero section: *"Reginald is not GEO. GEO optimises for citation; Reginald registers the document and answers the agent's verification question."*
- **The Gathering site.** `mx-outputs/mx-site/the-gathering/index.html` and `how-it-works.html` are silent on the SEO/GEO objection. The differentiation pass should add a "what The Gathering is not" callout linking to the boundary notes.

### 3b. *Isn't this just JSON-LD or schema.org?*

- **mx-site core pages.** Same set as 3a. The "MX never duplicates Schema.org; MX adds where Schema.org leaves gaps" line lives in `reginald/how-it-works.html` line 141 and `reginald.cog.md` line 75 but is not present in the public learn-pages or in `mx-site/index.html`. Lift it.
- **The BMV deck itself.** `mx-outputs/pptx/presentations/bmv-pitch-2026.md` and `mx-outputs/html/presentations/mx-pitch-bmv-2026.html` — neither names the JSON-LD objection out loud; both treat Schema.org / Dublin Core / MX-core as a stack (line 1638 of the HTML, the cog-card definition line). The differentiation pass should add a slide or speaker-note line that names the objection and answers it.
- **Carrier-formats note.** `mx-shared-gathering/draft-carrier-formats.md` already enumerates JSON-LD as a carrier; the rebuttal that "JSON-LD is one carrier among many; MX is the *governance the carriers all express*" should be made explicit there.

### 3c. *Why wouldn't Google just do this?*

- **Blog.** Promote `2026-05-google-webdev-notes.md` to a published blog post under `mx-outputs/mx-site/blog/` (filename convention: `what-googles-web-dev-agent-guidance-does-not-touch.html`). The note itself flags this as planned.
- **The Gathering — draft-notes.html.** Add the web.dev guidance to the "external standards we defer to / boundary against" enumeration (currently RFC, ISO, W3C, NIST, Schema.org, Dublin Core, SPDX).
- **mx-site `index.html`.** Hero / sub-hero currently does not engage the "Google could do this" question at all. The differentiation pass should add one paragraph linking to the boundary blog post once published.
- **REGINALD module — `index.html`, `how-it-works.html`, `pricing.html`.** Strengthen with a "Google's web.dev guide tells you what good looks like on a web page; Reginald does the registry job that no web.dev guidance covers" sentence.
- **Manuscript — *MX: The Protocols* chapter-00 and chapter-14 (`chapter-14-agent-protocols.md`).** Both already touch agent protocols and Google; the pass can add a paragraph naming the 1 May 2026 web.dev guide explicitly. (Editable per CLAUDE.md.)

### 3d. *Isn't this just MeetKai's sovereign-data work?*

- **mx-site `about/about.html`.** Currently silent on the BMV portfolio-fit argument. Add a "Where MX sits in your portfolio" callout that mirrors the BMV deck's slide language.
- **The Gathering — `sponsorship.html`.** Per `feedback_reginald_audience_split.md`, sponsor-facing copy should stay vendor-neutral (must NOT name Reginald). It should also stay vendor-neutral on MeetKai. So the strengthening here is *the absence-by-policy* — confirm the page does not drift into naming MeetKai. A non-naming "complementary to sovereign-runtime work" framing is acceptable.
- **DDT/CogNovaMX investor-facing scaffolds.** `mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/{one-pager,pitch-deck,attestation-explainer,faq}.md` per the memory. These can name MeetKai as part of the "two pillars" frame *if and when* a live lead surfaces (per `feedback_investor_scaffolds.md`).

## 4. "Pool" occurrences across the corpus (every one needs to keep the DNA pairing)

Note: the rollout has already paired every prose "pool" reference with the DNA correction. There are no orphan "MX is the pool" misframings left in the corpus. The list below is what's there *now* so the differentiation pass can verify it stays intact.

| Path | Line | Surrounding sentence (truncated) | Status |
|---|---|---|---|
| `mx-outputs/mx-site/learn/mx-principles.html` | 316 | "MX is the DNA a file carries when it leaves any pool. The originating system - your repo, your wiki, your knowledge base, your training corpus - has structure that lives in the pool…" | DNA-paired (correct). |
| `mx-outputs/mx-site/learn/key-principles.html` | 448 | "The three pillars together produce one practical property: MX is the DNA a file carries when it leaves any pool…" | DNA-paired (correct). |
| `mx-outputs/mx-site/learn/why-mx-matters.html` | 359 | "…MX is the DNA a file carries when it leaves any pool, so the receiving context can answer the questions the originating system used to answer for it…" | DNA-paired (correct). |
| `mx-outputs/mx-site/learn/what-is-mx.html` | 343 | "The DNA a file carries when it leaves any pool, so the next reader can interpret it without inference" | DNA-paired (correct). |
| `mx-outputs/mx-site/index.html` | 195 | "MX is the DNA a file carries when it leaves any pool. A memory-pool architecture (an LLM-wiki, a vector store, a knowledge base) organises knowledge inside one system; MX governs what survives extraction…" | DNA-paired (correct). |
| `mx-outputs/mx-site/reginald/mx-machine-readiness.html` | 1360 | "…MX is the DNA a file carries when it leaves any pool, so the next reader can answer the questions the originating system used to answer for it…" | DNA-paired (correct). |
| `mx-outputs/mx-site/blog/machine-experience-adding-metadata.html` | 545 | "An agent's knowledge base is a pool. Files come in, get curated, get extracted, get sent on… MX is the DNA a file carries when it leaves any pool." | DNA-paired (correct). |
| `mx-outputs/mx-site/blog/mx-a-new-role.html` | 275 | "…MX is the DNA a file carries when it leaves any pool, so the next reader can interpret it without inference…" | DNA-paired (correct). |
| `mx-outputs/mx-site/blog/mx-manifesto.html` | 268 | "MX is the DNA a file carries when it leaves any pool: a memory-pool architecture organises knowledge inside one system, MX governs what survives extraction…" | DNA-paired (correct). |
| `mx-outputs/mx-site/blog/geo-is-a-tactic-mx-is-the-specification.html` | 174 | "…MX is the DNA a file carries when it leaves any pool, so each of those reading contexts gets the same answer to the same questions…" | DNA-paired (correct). |
| `mx-outputs/mx-site/blog/ai-mx-and-the-future-of-business.html` | 220 | "MX is the DNA a file carries when it leaves any pool. Most agents do not encounter your content where you publish it…" | DNA-paired (correct). |
| `mx-outputs/mx-site/blog/designing-workflows-for-humans-and-machines.html` | 785 | "This is the deeper claim of MX in one line: MX is the DNA a file carries when it leaves any pool…" | DNA-paired (correct). |
| `mx-outputs/mx-site/blog/what-is-machine-experience.html` | 292 | "The portability principle that follows from this: MX is the DNA a file carries when it leaves any pool…" | DNA-paired (correct). |
| `mx-shared-gathering/draft-mx-not-memory-pool.md` | 39, 57, 65, 67, 75, 83, 94, 106, 114, 116, 129, 144 | The dedicated boundary note. Twelve internal references; every "pool" use is paired with a DNA contrast or a memory-pool/MX boundary statement. | Boundary note (correct). |
| `mx-shared-gathering/README.md` | 27 | "MX scope note: file-borne provenance beyond memory-pool architectures (boundary note)…" | DNA-paired (correct). |
| `mx-outputs/pptx/presentations/bmv-pitch-2026.md` | 89 | "MX is the DNA a file carries when it leaves any pool. A memory-pool architecture (LLM-wiki, vector store, knowledge base) organises knowledge inside one system; MX governs what survives extraction. Complementary, not competing." | DNA-paired (correct). |
| `mx-outputs/md/reports/directors/session/2026-04-23-afternoon-report.md` | 62, 127 | Pa11y `poolBrowser` debugging — software architecture, not MX framing. | Out of scope (technical pool, not metadata pool). |

The only places where additional pool-framing prose could be *added* (not corrected) are the carrier folders (`mx-outputs/content/`, `mx-outputs/html/`, `mx-outputs/json/`, `mx-outputs/md/`, `mx-outputs/pdf/`) and `mx-outputs/reginald/`; the DNA framing is currently absent from those surfaces because their generated content predates the rollout. Any regenerated-from-source carrier (HTML books, PDF books, presentation HTML) will inherit the DNA framing on the next regeneration.

## 5. Existing DNA-framing occurrences (the canonical line, "MX is the DNA a file carries when it leaves any pool")

| Path | Line |
|---|---|
| `mx-outputs/mx-site/index.html` | 195 |
| `mx-outputs/mx-site/learn/key-principles.html` | 448 |
| `mx-outputs/mx-site/learn/what-is-mx.html` | 343 |
| `mx-outputs/mx-site/learn/why-mx-matters.html` | 359 |
| `mx-outputs/mx-site/learn/mx-principles.html` | 316 |
| `mx-outputs/mx-site/reginald/mx-machine-readiness.html` | 1360 |
| `mx-outputs/mx-site/blog/machine-experience-adding-metadata.html` | 545 |
| `mx-outputs/mx-site/blog/mx-a-new-role.html` | 275 |
| `mx-outputs/mx-site/blog/mx-manifesto.html` | 268 |
| `mx-outputs/mx-site/blog/geo-is-a-tactic-mx-is-the-specification.html` | 174 |
| `mx-outputs/mx-site/blog/ai-mx-and-the-future-of-business.html` | 220 |
| `mx-outputs/mx-site/blog/designing-workflows-for-humans-and-machines.html` | 785 |
| `mx-outputs/mx-site/blog/what-is-machine-experience.html` | 292 |
| `mx-outputs/pptx/presentations/bmv-pitch-2026.md` | 89 |
| `mx-shared-gathering/draft-mx-not-memory-pool.md` | 79 (section header), 81, 85, 94, 106, 129, 143, 166, 168 |
| `mx-shared-gathering/README.md` | 27 |
| `mx-outputs/content/index.html` | (one DNA reference; verify line on edit pass) |

DNA framing is **absent** from every page under `mx-outputs/reginald/` (the REGINALD module landing site), every chapter source under `datalake/manuscripts/mx-books/mx-handbook/chapters/`, every chapter source under `datalake/manuscripts/mx-books/mx-protocols/protocols/`, every appendix under `datalake/manuscripts/mx-books/mx-appendices/`, every page under `mx-outputs/mx-site/the-gathering/`, every page under `mx-outputs/mx-site/services/`, and every page under `mx-outputs/mx-site/about/`.

The differentiation pass should reach those gaps, with two important gates:
- *MX: The Handbook* is read-only published; do not add the DNA line to the handbook source. Add it to the rendered HTML carrier under `mx-outputs/html/books/handbook/` only if Tom directs.
- *MX: The Protocols* is editable; the DNA line is a natural fit for chapter-00 (`chapter-00-protocols.md`) and chapter-04 (`chapter-04-the-business-reality.md`).

## 6. Manuscript locations and edit status

| Manuscript | Source path | Edit status (per CLAUDE.md) | Differentiation-pass implication |
|---|---|---|---|
| *MX: The Handbook* | `/Users/tomcranstoun/Documents/GitHub/MX-hub/datalake/manuscripts/mx-books/mx-handbook/chapters/` | **Read-only — published.** | Do not edit chapter sources. The pass can edit the rendered HTML carrier (`/mx-outputs/html/books/handbook/mx-handbook.html`) and the mx-site book-page (`/mx-outputs/mx-site/books/handbook.html`, `/mx-outputs/mx-site/books/handbook-chapter-00-chapter-00.html`) only with explicit direction. |
| *MX: The Protocols* | `/Users/tomcranstoun/Documents/GitHub/MX-hub/datalake/manuscripts/mx-books/mx-protocols/protocols/` | **Editable.** | Natural homes for the four objections: chapter-00 (intro framing), chapter-04 (business reality / SEO contrast), chapter-10 (GEO chapter — already has the GEO frame), chapter-14 (agent protocols — Google web.dev fit), chapter-22 (markdown-trap, JSON-LD framing). |
| *MX free book* | `/Users/tomcranstoun/Documents/GitHub/MX-hub/datalake/manuscripts/mx-books/free-book/` | **Editable** (chapter-00 the marketing chapter). | Two-pillar value-proposition argument lives here per `CLAUDE.md`'s "two-pillar value proposition" rule. |
| Appendices | `/Users/tomcranstoun/Documents/GitHub/MX-hub/datalake/manuscripts/mx-books/mx-appendices/` | **Editable** (Appendix M is the field catalogue; Appendix N anti-patterns; Appendix G resource directory; Appendix J industry developments). | Appendix J is the home for the web.dev / Google moment as an industry-development citation. |
| Shared frontmatter / Glossary | `/Users/tomcranstoun/Documents/GitHub/MX-hub/datalake/manuscripts/mx-books/shared/` | **Read-only — published.** | No edits. |

## 7. Contract fingerprinting note — location

- **In-repo source (writable):** `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-shared-gathering/draft-contract-fingerprinting.md`
- **Public raw URL (linked from the gathering page):** <https://github.com/ddttom/mx-shared-gathering/blob/main/draft-contract-fingerprinting.md>
- **Online listing entry (the public draft index):** `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/mx-site/the-gathering/draft-notes.html` lines 164–169 — section heading "MX Contract Fingerprinting and Signing note", with the framing "Signing is optional. This note specifies the contract a cog must satisfy *when* it elects to be signed. The fingerprint format is open."
- **In-repo draft index entry:** `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-shared-gathering/README.md` line 25 — table row: "MX Contract Fingerprinting and Signing note … *signing is optional*; this note specifies the contract a cog must satisfy when it elects to be signed."

## 8. The Gathering — draft-notes index location

- **Online (rendered):** <https://mx.allabout.network/the-gathering/draft-notes.html>
- **Source (in-repo, editable):** `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-outputs/mx-site/the-gathering/draft-notes.html`
- **In-repo draft README (the canonical index alongside the drafts themselves):** `/Users/tomcranstoun/Documents/GitHub/MX-hub/mx-shared-gathering/README.md`

The two indexes (the public HTML and the submodule README) must stay in lockstep — when a new draft lands in `mx-shared-gathering/`, both indexes are updated in the same pass.

## Appendix — useful greps for the differentiation pass

```text
# Every "MX is the DNA …" canonical-line hit:
grep -rn "MX is the DNA a file carries when it leaves any pool" mx-outputs/ mx-shared-gathering/

# Every prose "pool" reference (excluding code/audit reports):
grep -rni -E '\b(MX[ -]?pool|the pool|memory pool|metadata pool)\b' mx-outputs/mx-site/ mx-outputs/reginald/ mx-shared-gathering/ datalake/manuscripts/

# Every Google / web.dev mention (excluding routine outbound link refs):
grep -rni -E 'web\.dev|Google.*agent guide' mx-outputs/mx-site/ mx-outputs/reginald/ mx-shared-gathering/ datalake/manuscripts/

# Every MeetKai mention:
grep -rni 'MeetKai' mx-outputs/ datalake/manuscripts/ mx-shared-gathering/

# Every prose JSON-LD / schema.org rebuttal (not the JSON-LD blocks themselves):
grep -rni -E 'just JSON-?LD|just schema\.org|JSON-?LD.*alone|schema\.org.*alone|MX never duplicates' mx-outputs/ datalake/manuscripts/ mx-shared-gathering/
```
