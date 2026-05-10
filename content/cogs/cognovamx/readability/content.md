---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "readability"
version: 0.1.0
description: Plain language and reading level analysis

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/readability.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [clarity, a11y]
  tags: [readability, plain-language, content, accessibility, clarity]


  dependencies:
    - name: clarity
      kind: cog
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: true
  quality:
    semantic: true

---

# readability

Plain language and reading level analysis.

## Purpose

Complex writing fails everyone:

- **AI agents** struggle with jargon and convoluted sentences
- **Non-native speakers** miss nuance
- **People in a hurry** skim and misunderstand
- **Cognitive disabilities** create barriers

Plain language is a convergence issue. Write clearly, reach everyone.

## Usage

### Full Analysis

```bash
mx cog readability analyze https://example.com/article
mx cog readability analyze ./document.md
```

**Output:**

```json
{
  "metrics": {
    "fleschKincaid": 10.2,
    "fleschReadingEase": 58.4,
    "gunningFog": 12.1,
    "smog": 9.8,
    "colemanLiau": 11.3,
    "automatedReadability": 10.5
  },
  "averageGradeLevel": 10.6,
  "readingLevel": "College freshman",
  "stats": {
    "words": 1245,
    "sentences": 68,
    "paragraphs": 12,
    "avgWordsPerSentence": 18.3,
    "avgSyllablesPerWord": 1.6,
    "complexWords": 89,
    "complexWordPercentage": 7.1
  }
}
```

### Quick Score

```bash
mx cog readability score https://example.com/article
```

**Output:**

```json
{
  "score": 58.4,
  "grade": 10,
  "level": "Fairly Difficult",
  "audience": "High school senior / College freshman",
  "recommendation": "Consider simplifying for broader audience"
}
```

### Simplify Suggestions

```bash
mx cog readability simplify ./document.md --target "grade 8"
```

**Output:**

```json
{
  "currentGrade": 10.6,
  "targetGrade": 8,
  "suggestions": [
    {
      "original": "utilize",
      "suggestion": "use",
      "location": "paragraph 3"
    },
    {
      "original": "The implementation of the aforementioned methodology",
      "suggestion": "Using this method",
      "location": "paragraph 5"
    },
    {
      "original": "45-word sentence about...",
      "suggestion": "Split into 2-3 shorter sentences",
      "location": "paragraph 7"
    }
  ]
}
```

## Readability Scales

### Flesch Reading Ease

| Score | Difficulty | Audience |
|-------|------------|----------|
| 90-100 | Very Easy | 5th grade |
| 80-90 | Easy | 6th grade |
| 70-80 | Fairly Easy | 7th grade |
| 60-70 | Standard | 8th-9th grade |
| 50-60 | Fairly Difficult | 10th-12th grade |
| 30-50 | Difficult | College |
| 0-30 | Very Difficult | College graduate |

### Flesch-Kincaid Grade Level

Maps directly to US grade levels:

- 6.0 = 6th grade (11-12 years old)
- 8.0 = 8th grade (13-14 years old)
- 12.0 = 12th grade (17-18 years old)

## Plain Language Guidelines

### Do

- Use common words
- Write short sentences (15-20 words average)
- Use active voice
- One idea per paragraph
- Use headings and lists

### Don't

- Use jargon without explanation
- Write sentences over 25 words
- Use passive voice excessively
- Bury key information
- Assume prior knowledge

## Target Levels

| Content Type | Target Grade | Flesch Score |
|--------------|--------------|--------------|
| Public web content | 6-8 | 70-80 |
| Technical docs | 8-10 | 60-70 |
| Legal/medical | 10-12 | 50-60 |
| Academic | 12+ | 30-50 |

## Related

- [clarity cog](clarity.md)
- [Plain Language Guidelines](https://www.plainlanguage.gov/guidelines/)
- [Hemingway App](https://hemingwayapp.com/)
