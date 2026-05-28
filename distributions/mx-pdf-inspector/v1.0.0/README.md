# MX PDF Inspector CLI

Command-line tool that walks a PDF (or a directory tree of PDFs), reads each
file's tagged structure tree, XMP metadata packet, and embedded AI-governance
provenance record, and classifies it into one of three tiers: **MX Compatible**,
**EAA Tagged Only**, or **Plain**. Exit codes are CI-clean. Output is human-
readable markdown by default, machine-readable JSON on `--json`.

This is the standalone distribution of the same detect-classify pipeline that
runs the public inspector at <https://mx.allabout.network/tools/pdf-inspector.html>
and the production gate inside CogNovaMX's own PDF publishing pipeline. The
public inspector, the production gate, the regression test suite, and this CLI
all import a single detection core. A regression in any surface fails all of
them in the same way and on the same line.

## Who this is for

The CLI ships to two audiences.

**Accredited operators** in the CogNovaMX Certified Operator programme. Use it
in CI to verify every PDF you produce for clients meets the bar your
accreditation entitles you to claim. Bundled with active accreditation in
every tier during the seed phase. Renewal of the accreditation renews access
to the latest CLI build.

**Evaluation prospects** considering accreditation. A non-accredited
evaluation copy is available on request: 60 days, single machine, no
commercial use. Get in touch via `info@cognovamx.com` mentioning the CLI
evaluation and your accreditation interest.

For everyone else, the public inspector at
<https://mx.allabout.network/tools/pdf-inspector.html> covers the single-file
case for free.

## Install

The distribution is shipped as a tarball or directory tree, not via the public
npm registry during the seed phase.

```bash
# From a directory containing this README:
npm install
# (no dependencies — pdf.js and the detection core are vendored)

# Make the CLI available globally on your machine:
npm install -g .

# Or run directly without global install:
node bin/mx-pdf-inspect.js --help
```

After global install:

```bash
mx-pdf-inspect <path> [path ...] [options]
```

## Usage

```bash
# Single file
mx-pdf-inspect ./report.pdf

# Directory, top-level only
mx-pdf-inspect ./deliverables/

# Directory, recursive
mx-pdf-inspect ./deliverables/ --recursive

# CI mode — JSON to a log file, exit code drives the build
mx-pdf-inspect ./build/*.pdf --json > inspection.json

# Looser bar — accept EAA-tagged files, not just full MX Compatible
mx-pdf-inspect ./report.pdf --min-tier eaa-tagged

# Quiet mode — one line per file on pass, full table on fail
mx-pdf-inspect ./report.pdf --quiet
```

Run `mx-pdf-inspect --help` for the full option list.

## What gets checked

Seven evidence rows per file, contributing to the tier classification:

| Check | What it looks for | Required for `mx` tier |
|---|---|---|
| Tagged structure (ISO 14289-1) | `pdfuaid:Part` declaration in the XMP packet | Yes |
| MX XMP namespace present | Any `mx:*` field in the XMP packet | Yes |
| Provenance AI payload embedded | `mx:ProvenanceAiPayload` parseable as JSON | Yes |
| Responsible Person Identifier | Any responsible-person block (XMP or in-payload) | Yes |
| Accountable parties (v2) | `parties[]` array in the provenance payload | Optional |
| Provenance schema | v2.0 declaration in the payload | Yes |
| Run revision | Integer `runRevision` in the payload | Optional |

A file is classified as:

- **`mx`** (MX Compatible) — every required check passes.
- **`eaa-tagged`** — only the tagged-structure check passes; no MX evidence.
- **`plain`** — no tagged structure tree at all.

## Exit codes

The CLI is designed for CI pipelines. Three exit codes only:

- `0` — every fixture met or exceeded `--min-tier` (default `mx`).
- `1` — at least one fixture is below the configured minimum tier.
- `2` — fatal error (a PDF could not be opened, pdf.js could not load, no PDFs found at the supplied paths).

## Test pack

The distribution bundles a small test pack so a fresh install can verify the
CLI works end-to-end against a known-good PDF. After install:

```bash
cd test-pack
bash run-test-pack.sh
```

The runner walks the fixtures in `test-pack/fixtures/` and asserts the tier
each one produces matches the expected tier recorded in `expected-results.json`.
A clean pass means the CLI, pdf.js, and the detection core all loaded
correctly on this machine.

## Privacy and locality

The CLI runs entirely on your machine. It reads the PDF from disk, parses
it locally via the vendored pdf.js bundle, and emits the result to stdout.
No network calls happen at inspection time. No third-party CDN dependency,
no telemetry, no upload. The confidential PDFs you verify never leave your
environment.

## How the tool relates to the standard

The MX Compatible criteria the CLI checks are defined in the open. The XMP
field names, the provenance schema, the tier-classification rules, and the
detection core itself live in the public MX-hub repository at
<https://github.com/Digital-Domain-Technologies-Ltd/MX-hub>. The same
detection logic is what an auditor walking from any MX Compatible PDF back
to the rule that certified it would meet on the way. The CLI does not
introduce private inspection rules; it executes the public ones.

The standard the rules implement is governed by The Gathering, the
community-led standards body that maintains the MX vocabularies. The CLI
is CogNovaMX's working implementation; alternative implementations of the
same standard are possible.

## Licence

Two licences apply depending on your status.

- [LICENSE-OPERATOR.md](LICENSE-OPERATOR.md) — accredited operators in the
  Certified Operator programme. Read this if your accreditation is active.
- [LICENSE-EVALUATION.md](LICENSE-EVALUATION.md) — non-accredited prospects
  using a 60-day evaluation copy. Read this if you received the CLI through
  the evaluation channel.

If you are unsure which applies, contact `info@cognovamx.com` before using
the CLI in any commercial capacity.

## Support

- Email: `info@cognovamx.com`
- Services page: <https://mx.allabout.network/services/certified-operator.html>
- Public inspector (for single-file ad-hoc checks): <https://mx.allabout.network/tools/pdf-inspector.html>
- Background on the architecture: <https://mx.allabout.network/blog/the-inspector-you-can-audit-yourself.html>

## Version

This distribution is `mx-pdf-inspector v1.0.0`. The detection core inside it
ships in lockstep with the version running in the public inspector at the
time of distribution build. The CLI's own version reports via
`mx-pdf-inspect --version`.
