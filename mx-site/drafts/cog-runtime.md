---
title: "Cog Runtime"
description: "What a cog runtime is, what it does, and how to obtain one. Companion to cog-spec.v1."
author: Tom Cranstoun
version: "1.0"
status: "proposed"
created: 2026-04-27
modified: 2026-04-27
date: 2026-04-27
audience: ["tech", "agents", "humans"]
inherits: cog-spec.v1.md
cogHeader:
  version: v1
  spec: https://mx.allabout.network/drafts/cog-spec.v1.md
  runtime: https://mx.allabout.network/drafts/cog-runtime.md
  runtimeDoc: https://mx.allabout.network/drafts/cog-runtime.md
mx:
  status: active
  contentType: specification
  partOf: mx-the-gathering
  buildsOn: [cog-spec.v1]
  tags: [cog, runtime, specification, agents]
  audience: [humans, machines, agents]
  cacheability: permanent
  runbook: "Read after cog-spec.v1.md. This document explains what a cog runtime does at runtime — parsing, validation, contract fingerprinting, witness signing, witness verification, and procedure execution — and how an agent or implementer obtains a working runtime. The reference implementations are catalogued in section 4."
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/mx-site/drafts/cog-runtime.md
---

# Cog Runtime

Version 1.0 (draft, review-ready)
Companion to [Cog Specification](./cog-spec.v1.md).

## 1. What a runtime is

A **cog runtime** is the software that reads a cog file and acts on it. The cog format is defined by [cog-spec.v1.md](./cog-spec.v1.md); a runtime turns the format into useful behaviour. Without a runtime, a cog is a Markdown file with structured frontmatter — readable, but not executable, not verifiable, and not safely consumable by a system that depends on the cog's contract.

A runtime owns five responsibilities:

1. **Parse** — read the cog file, separate the magic header, frontmatter, narrative body, embedded executable blocks, and external references.
2. **Validate** — run the validators named in `validatesAgainst`, return a structured pass/fail result for each.
3. **Fingerprint** — compute the canonical contract fingerprint over the keys named in `contractFields` per the deterministic algorithm in cog-spec section 6.
4. **Sign and verify** — produce signed witnesses that bind a fingerprint to a contract claim, and verify witnesses against current cogs to detect contract drift, body drift, or signature tampering.
5. **Execute** — for cogs that declare an executable procedure (`approvalProcedure`, `reviewProcedure`, or any other `runner`-bearing block), invoke the named runner and pass it the cog plus any inputs.

A conforming runtime implements all five. Partial runtimes (parser-only, validator-only) are useful for tooling but cannot make the safety claims that signing and verification deliver.

## 2. Why a runtime is needed

A cog encodes a contract. The contract is what a downstream consumer relies on: the schema the cog claims to satisfy, the validators that confirm the claim, the field values the schema constrains. Reading a cog as ordinary prose produces a plausible-looking summary that omits the contract — the same failure mode that motivated the cog format in the first place.

The runtime closes that gap. It refuses to silently substitute prose interpretation for contract execution. It reports what was claimed, what was verified, and where the claim and the file disagree.

For agents — large language models or software agents — without a runtime in their toolchain, a cog is a contract they cannot honour. The preamble inside every cog body says so explicitly, addressed to that case.

## 3. The runtime contract

A runtime that consumes a cog MUST:

- Refuse to silently treat a cog with absent or malformed `contractFields` / `metadataFields` as conformant.
- Compute the fingerprint by the algorithm in cog-spec section 6, not by ad-hoc serialisation. Two conforming runtimes computing the same cog's fingerprint MUST produce identical bytes.
- Re-execute every validator named in `validatesAgainst` when verifying a witness. A witness whose recorded validator outcome differs from the runtime's re-execution result MUST be rejected.
- Treat unparseable schemas, missing referenced files, and malformed witnesses as structured failures with named causes — never as silent successes.
- Distinguish contract drift (a `contractFields` value changed) from body drift (the prose body changed but the contract stayed the same). Both are reportable; only the first invalidates the signature.

A runtime SHOULD:

- Cache parsed cogs and resolved schemas across a session for efficiency, but always invalidate on file mtime change.
- Surface validator output verbatim when a validation fails — the runtime is a transport for the validator's verdict, not its judge.
- Make the fingerprint algorithm visible to operators for debugging (a `cog explain --fingerprint` command, or equivalent).

A runtime MAY:

- Add operator conveniences (witness directories, run logs, registry caches) that are not part of the spec, provided they do not change the externally observable contract.

## 4. Reference implementations

The reference implementations live alongside the spec at [github.com/Digital-Domain-Technologies-Ltd/upgraded-reginald](https://github.com/Digital-Domain-Technologies-Ltd/upgraded-reginald). Two language implementations are maintained as a deliberate redundancy — cross-implementation tests confirm both compute byte-identical canonical bytes and reach the same validator outcomes across the conformance corpus.

| Implementation | Path in repo | Language | Coverage |
|----------------|--------------|----------|----------|
| Primary | `impl/js/` | JavaScript (Node) | Parser, validators, fingerprint, witness sign/verify, runner |
| Secondary | `impl/rust/` | Rust | Parser, fingerprint, witness sign/verify (verification pipeline parity) |

The cross-implementation tests at `impl/js/scripts/cross-compare-fingerprints.mjs` and `impl/js/scripts/cross-verify-witnesses.mjs` are the authoritative confirmation that the two runtimes agree on the conformance corpus.

A runtime in any other language is welcome. The conformance suite at `impl/js/conformance/cases/` is the test target. An implementation that passes the suite is alignment-conformant; that is sufficient for production use within a closed system, and a starting point for community review of broader conformance.

## 5. How an agent obtains a runtime

An agent that encounters a cog without a runtime in its toolchain has three options:

1. **Refuse** — the safe default. Do not act on the cog. Tell the operator a cog runtime is needed, point them at this document and at the reference implementations.
2. **Defer** — return the cog file unchanged to a tool or human that can run a runtime against it.
3. **Best-effort prose interpretation** — only when the operator has explicitly accepted that the cog's contract guarantees do not apply.

An agent that DOES have a runtime should declare it (in its tool inventory, in its system prompt, or in its response when handed a cog), so the operator knows the contract was honoured.

## 6. Versioning

This runtime document is versioned independently of the cog spec. A runtime targeting cog-spec v1.x supports all v1.x cogs. A runtime targeting cog-spec v2 is a separate runtime; agents and operators MUST check the runtime's declared spec version against the cog's `<!-- cog v1 -->` magic header.

## 7. References

- [Cog Specification v1.2](./cog-spec.v1.md) — the format this runtime consumes
- [MX Contract Fingerprinting and Signing](https://github.com/ddttom/mx-shared-gathering/blob/main/draft-contract-fingerprinting.md) - the signing standard runtimes implement
- [upgraded-reginald](https://github.com/Digital-Domain-Technologies-Ltd/upgraded-reginald) — reference implementations
- [NDR-2026-02-16 camelCase naming](https://github.com/Digital-Domain-Technologies-Ltd/MX-hub/blob/main/mx-canon/mx-maxine-lives/registers/NDR/2026-02-16-camelcase-naming.cog.md) — the field-name convention runtimes parse
