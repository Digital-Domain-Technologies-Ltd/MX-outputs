---
title: "MX PDF Inspector CLI - Operator Licence"
description: "MX PDF Inspector CLI - Operator Licence"
author: Tom Cranstoun
created: 2026-06-08
modified: 2026-06-08
version: "1.0"

mx:
  status: active
  contentType: info-doc
  purpose: "MX PDF Inspector CLI - Operator Licence"
  audience: [humans, machines]
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["MX PDF Inspector CLI - Operator Licence"]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/distributions/mx-pdf-inspector/v1.0.0/LICENSE-OPERATOR.md
---

# MX PDF Inspector CLI — Operator Licence

**Version 1.0, 2026-05-28**
**Licensor:** Digital Domain Technologies Ltd (trading as CogNovaMX),
a company registered in England and Wales.
**Software:** The MX PDF Inspector CLI distribution, v1.0.0
(this directory tree).

This licence applies if your organisation is an active accredited operator
in the CogNovaMX Certified Operator programme (Tier 1 Approved Operator,
Tier 2 Certified Operator, or Tier 3 Audit-Grade Operator). The licence is
bundled with active accreditation in every tier during the seed phase.

If you received the Software through the non-accredited evaluation channel,
the licence at [LICENSE-EVALUATION.md](LICENSE-EVALUATION.md) applies
instead.

## 1. Grant

CogNovaMX grants your accredited organisation a non-exclusive,
non-transferable, non-sublicensable licence to use the Software for the
purposes consistent with your accreditation tier:

- Inspecting PDFs your organisation authors or publishes.
- Inspecting client PDFs as part of a commercial engagement, in line with the
  third-party claim scope your accreditation tier authorises.
- Integrating the Software into your CI pipeline, your internal review
  workflow, and your client-facing reporting infrastructure.
- Producing and distributing the Software's inspection output (markdown or
  JSON reports) to your clients, regulators, and other parties as part of
  your accredited practice.

## 2. Term

This licence runs for the duration of your active accreditation. The
licence terminates automatically when your accreditation is suspended,
revoked, or expires without renewal.

If you renew or upgrade your accreditation, you continue to receive the
latest CLI build at no additional charge during the seed phase. The
published commercial schedule on the Certified Operator page supersedes
this clause if and when the seed phase ends.

## 3. Scope

You may install and use the Software on any number of machines within your
accredited organisation. Concurrent installations across teams are permitted.

## 4. Permitted use

Within the scope of your accreditation tier:

- **Tier 1 (Approved Operator):** inspecting PDFs your organisation authors
  or publishes; producing self-claims using the inspection output.
- **Tier 2 (Certified Operator):** inspecting third-party client PDFs within
  the predicate vocabularies you are accredited for; producing third-party
  claims using the inspection output.
- **Tier 3 (Audit-Grade Operator):** inspecting PDFs read by regulators,
  judges, or oversight committees; producing audit-grade claims using the
  inspection output, subject to the additional methodology and indemnity
  obligations of Tier 3.

The Software does not by itself issue MX Compliance Claims; it performs the
technical inspection that informs them. Any formal claim issued on the basis
of the inspection remains subject to your accreditation tier's signing,
key-custody, and methodology obligations.

## 5. Prohibited use

- **No redistribution.** You may not redistribute, sublicense, sell, lease,
  or share the Software, in source or binary form, with parties outside your
  accredited organisation. Each operator receives the distribution directly
  from CogNovaMX as part of their accreditation.
- **No claim laundering.** You may not use the Software's output to issue
  claims that go beyond the scope of your accreditation tier or the
  predicate vocabularies you are accredited for. Doing so is grounds for
  suspension or revocation of the accreditation.
- **No removal of notices.** You may not remove or alter the copyright,
  licence, version, or attribution notices in the Software.
- **No reverse engineering of the vendored pdf.js bundle** beyond what
  applicable law allows. The detection core
  (`lib/pdf-inspector-core.js`) is published in the open in the
  MX-hub repository; the rest of the distribution is not.

## 6. Update channel

While your accreditation is active, CogNovaMX will make new versions of the
Software available to you through the accredited-operator distribution
channel. You are encouraged but not required to install updates promptly;
the detection core may evolve as the underlying MX vocabularies evolve.
Continuing to issue claims against an outdated CLI is your responsibility.

## 7. No warranty

The Software is provided **"as is"** without warranty of any kind, express
or implied, including the warranties of merchantability, fitness for a
particular purpose, and non-infringement. CogNovaMX does not warrant that
the Software will be uninterrupted, error-free, or that the classification
output is correct in any particular case. The Software does not issue formal
compliance claims; it performs technical inspection. Decisions to publish,
sign, or rely on a PDF on the basis of the Software's output remain your
responsibility as the accredited operator.

## 8. Limitation of liability

To the maximum extent permitted by applicable law, CogNovaMX is not liable
for any direct, indirect, incidental, consequential, special, or exemplary
damages arising out of or in connection with the Software or the inspection
output, regardless of the legal theory under which the claim is made.

Tier 3 operators carry separate professional indemnity insurance under the
accreditation agreement; this licence does not transfer indemnity to
CogNovaMX.

## 9. Termination

The licence terminates automatically when your accreditation terminates,
whether by suspension, revocation, non-renewal, or voluntary withdrawal.
On termination you must:

- Stop using the Software for any commercial engagement.
- Delete every installed copy of the Software within thirty (30) calendar
  days.
- Retain copies of any inspection output you produced during the active
  period for the audit-trail purposes your accreditation obligated you to
  maintain.

## 10. Governing law

This licence is governed by the laws of England and Wales. Any dispute
arising under it falls under the exclusive jurisdiction of the courts of
England and Wales.

## 11. Contact

Questions about the licence, the accreditation programme, or the
operator-distribution channel: `info@cognovamx.com`.

This document is the entire agreement between you and CogNovaMX with respect
to the Software for the duration of your accreditation. It supersedes any
prior oral or written communication on the same subject, and is subordinate
to the published Certified Operator programme terms where the two address
the same matter.
