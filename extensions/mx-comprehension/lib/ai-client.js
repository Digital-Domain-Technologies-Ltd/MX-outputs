// lib/ai-client.js — shared on-device language-model client.
//
// Lifted from the MX Readiness Inspector popup (mx-readiness/popup.js) and
// generalised: the readiness plugin baked the findings-and-score prompt into
// the client; this version takes a system prompt and a user prompt and returns
// { text, source }, so any extension can drive any prompt through the same
// local-model fallback chain. Both plugins are meant to point at this file.
//
// Two paths, tried in order:
//
//   1. Browser on-device Prompt API. Chrome and Edge expose an on-device
//      model under different globals. We feature-detect each surface and use
//      the first that exposes a working .create():
//
//        self.LanguageModel              — WICG-aligned global (Chrome 131+,
//                                          Edge 138+ on Copilot+ PCs).
//        self.ai.languageModel           — Chrome origin-trial namespace.
//        self.ai.assistant               — Edge's earlier Prompt API surface
//                                          (Phi-Silica on Copilot+ PCs).
//        self.chrome.aiOriginTrial.*     — Chrome legacy.
//
//   2. Local Ollama at http://localhost:11434. Used when no browser API is
//      exposed, or when the caller forces it. The model is whichever the user
//      has pulled, preferring small/fast (see OLLAMA_MODEL_PREFERENCES).
//
// Every path runs locally. No page content leaves the machine.

(function (global) {
  'use strict';

  // Local Ollama runtime. The endpoint is the one `ollama serve` listens on.
  // The preference list orders models by latency for popup-sized prompts; the
  // chooser picks the first that is locally pulled. Hardcoded so the extension
  // carries no settings page; an operator who wants a different default edits
  // these two constants.
  const OLLAMA_ENDPOINT = 'http://localhost:11434';
  const OLLAMA_MODEL_PREFERENCES = [
    /^llama3\.2:3b/i,
    /^llama3\.2:1b/i,
    /^qwen2\.5:3b/i,
    /^phi3\.5:3\.8b/i,
    /^llama3\.1:8b/i,
    /^mistral:7b/i,
    /^gpt-oss/i,
  ];

  // Browser on-device model --------------------------------------------------

  async function tryBrowserModel(systemPrompt, userPrompt) {
    const candidates = [
      { name: 'LanguageModel',                      vendor: 'Chrome/Edge (WICG)', get: () => global.LanguageModel },
      { name: 'ai.languageModel',                   vendor: 'Chrome',             get: () => global.ai?.languageModel },
      { name: 'ai.assistant',                       vendor: 'Edge (Phi-Silica)',  get: () => global.ai?.assistant },
      { name: 'chrome.aiOriginTrial.languageModel', vendor: 'Chrome (legacy)',    get: () => global.chrome?.aiOriginTrial?.languageModel },
    ];

    let ModelClass = null;
    let chosen = null;
    for (const c of candidates) {
      try {
        const cls = c.get();
        if (cls && typeof cls.create === 'function') { ModelClass = cls; chosen = c; break; }
      } catch (_) { /* keep walking the chain */ }
    }

    // No browser surface exposed at all. Caller falls through to Ollama.
    if (!ModelClass) return null;

    let availability = 'available';
    try {
      if (typeof ModelClass.availability === 'function') availability = await ModelClass.availability();
      else if (typeof ModelClass.capabilities === 'function') {
        const caps = await ModelClass.capabilities();
        availability = caps?.available || 'available';
      }
    } catch (_) { /* assume available */ }

    // Surface exists but the runtime says it is not ready (downloading,
    // unsupported hardware). Bubble through to Ollama rather than fail here.
    if (availability === 'unavailable' || availability === 'no') return null;

    let session;
    try {
      session = await ModelClass.create({
        initialPrompts: [{ role: 'system', content: systemPrompt }],
      });
    } catch (e) {
      // Edge's older ai.assistant.create() rejects unknown options; retry plain
      // and prepend the system prompt to the user turn instead.
      try {
        session = await ModelClass.create({});
        const out = await session.prompt(`${systemPrompt}\n\n${userPrompt}`);
        session.destroy?.();
        return { text: out.trim(), source: `${chosen.vendor} (on-device)` };
      } catch (e2) {
        return {
          text: `Could not start a ${chosen.vendor} session (${e2.message || e.message}).`,
          source: `fallback (${chosen.vendor} session error)`,
        };
      }
    }

    try {
      const out = await session.prompt(userPrompt);
      session.destroy?.();
      return { text: out.trim(), source: `${chosen.vendor} (on-device)` };
    } catch (e) {
      session.destroy?.();
      return {
        text: `${chosen.vendor} raised: ${e.message}`,
        source: `fallback (${chosen.vendor} prompt error)`,
      };
    }
  }

  // Ollama fallback ----------------------------------------------------------
  //
  // When no browser API exposes an on-device model (or the caller forces it),
  // the client reaches a local Ollama at http://localhost:11434. The model is
  // whichever the user has pulled. If Ollama is unreachable, the result names
  // the install + CORS commands rather than leaving the user guessing.

  async function pickOllamaModel() {
    const r = await fetch(`${OLLAMA_ENDPOINT}/api/tags`, { method: 'GET' });
    if (!r.ok) throw new Error(`Ollama returned ${r.status}`);
    const data = await r.json();
    const models = (data.models || []).map((m) => m.name);
    if (!models.length) throw new Error('Ollama is running but no models are pulled. Run: ollama pull llama3.2:3b');
    for (const pref of OLLAMA_MODEL_PREFERENCES) {
      const match = models.find((m) => pref.test(m));
      if (match) return match;
    }
    return models[0];
  }

  async function tryOllama(systemPrompt, userPrompt, { forced = false } = {}) {
    let model;
    try {
      model = await pickOllamaModel();
    } catch (e) {
      const prefix = forced
        ? 'Force-Ollama requested but Ollama is unreachable.'
        : 'No browser on-device model was available, and Ollama is unreachable.';
      return {
        text:
          `${prefix} ${e.message}. ` +
          `To install: brew install ollama && ollama pull llama3.2:3b && ollama serve. ` +
          `For the extension to reach it, also set: launchctl setenv OLLAMA_ORIGINS "*" (or run OLLAMA_ORIGINS="*" ollama serve).`,
        source: 'fallback (Ollama unreachable)',
      };
    }

    const body = {
      model,
      stream: false,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
    };

    try {
      const r = await fetch(`${OLLAMA_ENDPOINT}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = await r.json();
      const text = (data.message?.content || '').trim();
      return {
        text: text || `(${model} returned an empty response)`,
        source: `Ollama (${model})`,
      };
    } catch (e) {
      return {
        text: `Ollama ${model} raised: ${e.message}. Check that Ollama allows the extension's origin: OLLAMA_ORIGINS="*" ollama serve.`,
        source: `fallback (Ollama ${model} error)`,
      };
    }
  }

  // Public surface -----------------------------------------------------------
  //
  // generate(systemPrompt, userPrompt, { forceOllama }) → { text, source }.
  // Browser model first unless forceOllama; Ollama fallback otherwise.

  async function generate(systemPrompt, userPrompt, { forceOllama = false } = {}) {
    if (!forceOllama) {
      const browser = await tryBrowserModel(systemPrompt, userPrompt);
      if (browser) return browser;
    }
    return tryOllama(systemPrompt, userPrompt, { forced: forceOllama });
  }

  global.MXLocalModel = { generate, OLLAMA_ENDPOINT, OLLAMA_MODEL_PREFERENCES };
})(self);
