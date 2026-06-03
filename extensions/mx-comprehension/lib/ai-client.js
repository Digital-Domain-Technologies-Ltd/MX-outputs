// lib/ai-client.js — shared on-device language-model client.
//
// Lifted from the MX Readiness Inspector popup (mx-readiness/popup.js) and
// generalised: the readiness plugin baked the findings-and-score prompt into
// the client; this version takes a system prompt and a user prompt and returns
// { text, source }, so any extension can drive any prompt through the same
// on-device API chain. Both plugins are meant to point at this file.
//
// Tries browser on-device Prompt API. Chrome and Edge expose an on-device
// model under different globals. We feature-detect each surface and use
// the first that exposes a working .create():
//
//   self.LanguageModel              — WICG-aligned global (Chrome 131+,
//                                      Edge 138+ on Copilot+ PCs).
//   self.ai.languageModel           — Chrome origin-trial namespace.
//   self.ai.assistant               — Edge's earlier Prompt API surface
//                                      (Phi-Silica on Copilot+ PCs).
//   self.chrome.aiOriginTrial.*     — Chrome legacy.
//
// Every path runs locally. No page content leaves the machine.

(function (global) {
  'use strict';

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

    // No browser surface exposed at all. Return null so caller knows.
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
    // unsupported hardware). Return null so caller can show a message.
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
  // Probes http://127.0.0.1:11434 for a running local model. Requires
  // OLLAMA_ORIGINS=* to be set in the Ollama process (set via LaunchAgent at
  // ~/Library/LaunchAgents/com.ollama.environment.plist). Returns null when
  // Ollama is unreachable or CORS blocks the request.

  const OLLAMA_BASE = 'http://127.0.0.1:11434';
  const OLLAMA_PREFERRED = ['gpt-oss:20b', 'llama3.2', 'llama3.1', 'mistral', 'phi3'];

  async function tryOllamaModel(systemPrompt, userPrompt) {
    let models;
    try {
      const res = await fetch(`${OLLAMA_BASE}/api/tags`, {
        signal: AbortSignal.timeout(3000),
      });
      if (!res.ok) return null;
      const data = await res.json();
      models = (data.models || []).map(m => m.name);
    } catch (_) {
      return null;
    }
    if (!models || models.length === 0) return null;

    const model =
      OLLAMA_PREFERRED.find(p => models.some(n => n.startsWith(p))) || models[0];

    try {
      const res = await fetch(`${OLLAMA_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // 120 s: page-content prompts can be large (up to 12 000 chars) and
        // gpt-oss:20b needs more time to produce a detailed answer than the
        // 30 s used for generating short suggestion chips.
        signal: AbortSignal.timeout(120000),
        body: JSON.stringify({
          model,
          stream: false,
          // num_ctx: give Ollama enough context for the full page payload.
          // Default is 4096 tokens; 12 000 chars ≈ 3 000 tokens, plus system
          // prompt and question — 8 192 tokens provides comfortable headroom.
          options: { num_ctx: 8192 },
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
        }),
      });
      if (!res.ok) return null;
      const data = await res.json();
      const text = (data.message?.content || '').trim();
      if (!text) return null;
      return { text, source: `Ollama (${model}, local)` };
    } catch (_) {
      return null;
    }
  }

  // Public surface -----------------------------------------------------------
  //
  // generate(systemPrompt, userPrompt) → { text, source }.
  // Tries the browser on-device model, then Ollama, then returns an error.

  async function generate(systemPrompt, userPrompt) {
    const browser = await tryBrowserModel(systemPrompt, userPrompt);
    if (browser) return browser;
    const ollama = await tryOllamaModel(systemPrompt, userPrompt);
    if (ollama) return ollama;
    return {
      text: 'No on-device model is available. Start Ollama locally (ollama serve), or use Chrome with the Gemini Nano model enabled at chrome://flags/#prompt-api-for-gemini-nano.',
      source: 'fallback (no model available)',
    };
  }

  global.MXLocalModel = { generate };
})(self);
