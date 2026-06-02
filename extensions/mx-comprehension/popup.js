// popup.js — orchestrator for the MX Comprehension Probe popup.
//
// Sequence when the user clicks "Ask the model":
//   1. Find the active tab.
//   2. Inject content.js to read the page's machine-visible payload.
//   3. Build a prompt: the page payload + the user's free-text question.
//   4. Ask the on-device model (lib/ai-client.js: browser model) to answer
//      using only that payload.
//   5. Render the answer and the "what the machine saw" detail.
//
// The contrast the demo turns on lives entirely in step 2's payload. A
// structured page yields provenance, authorship, and verified facts; a bare
// page yields prose with the safety-critical facts missing. Same prompt, same
// model, opposite answers.

const $ = (sel) => document.querySelector(sel);

// The system prompt is deliberately honest, not rigged to fail. It tells the
// model to answer ONLY from the page and to say so when the page does not
// carry the answer, rather than filling the gap from training knowledge. On a
// structured page that yields a list of facts; on a bare page it yields an
// explicit "the page does not say". (Drop the "do not guess" clause and a bare
// page instead produces a confident, unverifiable guess — the stronger but
// less defensible demo beat. Kept out by default.)
const SYSTEM_PROMPT =
  'You are a careful reading assistant. Answer the question using ONLY the page content provided below. ' +
  'The page content includes the visible text and any embedded machine-readable data (structured data, meta tags, source frontmatter). ' +
  'If the page does not contain the information needed, say plainly that the page does not provide it. Do not guess and do not use outside knowledge. ' +
  'When the page does provide the answer, give it as a short list of facts, quoting the specific values, names, models, and dates from the page, and note where on the page each fact came from.';

let currentPayload = null;
let lastAnswer = null;
let suggestedQuestions = [];

function buildUserPrompt(payloadText, question) {
  return `PAGE CONTENT:\n${payloadText}\n\n----------\nQUESTION: ${question}\n\nAnswer using only the page content above.`;
}

async function generateSuggestedQuestions(payloadText) {
  const systemPrompt =
    'You are a helpful assistant that generates 3 relevant, concise questions someone might ask about a webpage. ' +
    'The questions should be practical and specific to the page content. ' +
    'Each question should be 1-2 sentences. Return exactly 3 questions, one per line, without numbering or bullets.';

  const userPrompt =
    `Based on this page content, generate 3 different, relevant questions someone might ask about it:\n\n${payloadText}\n\nReturn only the 3 questions, one per line, no numbering.`;

  try {
    const result = await MXLocalModel.generate(systemPrompt, userPrompt);
    const questions = result.text
      .split('\n')
      .map(q => q.trim())
      .filter(q => q.length > 0)
      .slice(0, 3);
    return questions;
  } catch (_) {
    return [];
  }
}

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function readPage(tab) {
  const results = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js'],
  });
  return results?.[0]?.result || null;
}

function isInternalUrl(url) {
  return !url
    || url.startsWith('chrome://') || url.startsWith('chrome-extension://')
    || url.startsWith('edge://') || url.startsWith('about:') || url.startsWith('devtools://');
}

function renderPayloadDetail(page) {
  const counts = $('#payload-counts');
  const pre = $('#payload-pre');
  if (!page) {
    counts.textContent = 'Nothing read yet.';
    pre.hidden = true;
    return;
  }
  const c = page.counts || {};
  counts.textContent =
    `${c.visibleTextChars ?? 0} chars of visible text · ` +
    `${c.jsonLdBlocks ?? 0} JSON-LD block(s) · ` +
    `${c.machineMetaTags ?? 0} meta tag(s) · ` +
    `frontmatter: ${c.hasFrontmatter ? 'yes' : 'no'}` +
    (page.truncated ? ' · payload truncated' : '');
  pre.textContent = page.payload || '';
  pre.hidden = false;
}

function renderAnswer(answer) {
  const el = $('#answer');
  el.classList.remove('placeholder');
  el.textContent = answer.text;
  $('#answer-source').textContent = `answered by: ${answer.source}`;
  $('#answer-actions').hidden = false;
}

function setStatus(text) {
  $('#answer-status').textContent = text || '';
}

async function ask() {
  const question = $('#question').value.trim();
  if (!question) {
    $('#question').focus();
    setStatus('Type a question first.');
    return;
  }

  const askBtn = $('#btn-ask');

  askBtn.disabled = true;
  setStatus('Reading the page…');
  $('#answer').classList.add('placeholder');
  $('#answer').textContent = '';
  $('#answer-source').textContent = '';
  $('#answer-actions').hidden = true;

  let tab;
  try {
    tab = await getActiveTab();
  } catch (e) {
    setStatus(`Could not find the active tab (${e.message}).`);
    askBtn.disabled = false;
    return;
  }

  if (isInternalUrl(tab?.url)) {
    setStatus('Open a regular web page (http: or https:) to ask about it.');
    $('#answer').textContent = 'This is a browser-internal page; there is nothing to read.';
    askBtn.disabled = false;
    return;
  }

  $('#page-url').textContent = tab.url;

  let page;
  try {
    page = await readPage(tab);
  } catch (e) {
    setStatus(`Could not read the page (${e.message}). It may block content-script injection.`);
    askBtn.disabled = false;
    return;
  }

  if (!page) {
    setStatus('The page returned no readable content.');
    askBtn.disabled = false;
    return;
  }

  currentPayload = page;
  renderPayloadDetail(page);

  if (page.isLlmViewPage) {
    const notice = $('#llm-view-notice');
    if (notice) {
      notice.textContent = 'Reading LLM View content — questions answered from the server response at this URL, not the rendered page.';
      notice.classList.remove('hidden');
    }
  }

  setStatus('Generating question suggestions…');
  suggestedQuestions = await generateSuggestedQuestions(page.payload);
  renderPresets(suggestedQuestions);

  setStatus('Asking the on-device model…');
  const userPrompt = buildUserPrompt(page.payload, question);
  const answer = await MXLocalModel.generate(SYSTEM_PROMPT, userPrompt);
  lastAnswer = answer;

  setStatus('');
  renderAnswer(answer);
  askBtn.disabled = false;
}

function renderPresets(questions) {
  const wrap = $('#presets');
  wrap.innerHTML = '';
  for (const q of questions) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'preset';
    btn.textContent = q;
    btn.title = 'Use this question';
    btn.addEventListener('click', () => {
      $('#question').value = q;
      $('#question').focus();
    });
    wrap.appendChild(btn);
  }
}

function wireToolbar() {
  $('#btn-ask').addEventListener('click', ask);

  // Cmd/Ctrl+Enter from the textarea submits.
  $('#question').addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      ask();
    }
  });

  $('#btn-copy').addEventListener('click', async () => {
    if (!lastAnswer) return;
    const copyBtn = $('#btn-copy');
    const text = `Q: ${$('#question').value.trim()}\n\nA (${lastAnswer.source}):\n${lastAnswer.text}`;
    try {
      await navigator.clipboard.writeText(text);
      const original = copyBtn.textContent;
      copyBtn.textContent = 'Copied';
      copyBtn.classList.add('copied');
      setTimeout(() => { copyBtn.textContent = original; copyBtn.classList.remove('copied'); }, 1200);
    } catch (_) {
      copyBtn.textContent = 'Copy failed';
      setTimeout(() => { copyBtn.textContent = 'Copy answer'; }, 1500);
    }
  });
}

async function main() {
  wireToolbar();
  try {
    const tab = await getActiveTab();
    $('#page-url').textContent = isInternalUrl(tab?.url) ? '(browser-internal page)' : (tab?.url || '(unknown URL)');
  } catch (_) {
    $('#page-url').textContent = '(unknown URL)';
  }
  $('#question').focus();
}

main();
