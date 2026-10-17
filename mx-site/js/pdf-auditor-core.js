// PDF auditor core: records an approval inside a PDF without changing a byte of it.
//
// The approval (decision, approver, date, notes, and the SHA-256 and length of the
// approved bytes) is written as XMP-mx properties into the document's XMP metadata
// stream through an incremental update: a new version of the metadata stream (and,
// when the catalog has no Metadata entry, a new catalog version) is appended after the
// original bytes, with its own cross-reference section and trailer pointing back with
// /Prev. The original file is a byte-exact prefix of the approved one, so anyone can
// hash the first ApprovedLength bytes and compare them with ApprovedSha256, and the
// PDF/A and PDF/UA identifications the original earned are left as they were.
//
// Dependency-free and runtime-neutral: the browser shell (pdf-auditor.js), the MX
// Inspector and tests/test-pdf-auditor.js all import this file. It uses only
// TextEncoder/TextDecoder, DecompressionStream and crypto.subtle, which browsers and
// Node 18+ both provide.
//
// An approval is a recorded statement, not a cryptographic signature: it says who
// approved which bytes, and the hash lets a reader check the bytes, not the person.

export const MX_XMP_NAMESPACE = 'https://schemas.cognovamx.com/mx/1.0/';
export const DECISIONS = Object.freeze(['approved', 'changes-requested', 'rejected']);
export const APPROVAL_FIELDS = Object.freeze([
  'ApprovalDecision', 'ApprovedBy', 'ApprovedAt', 'ApprovalNotes', 'ApprovedSha256', 'ApprovedLength',
]);

const APPROVAL_START = '<!-- mx-approval:start -->';
const APPROVAL_END = '<!-- mx-approval:end -->';

// --- bytes and text ---------------------------------------------------------

/** Bytes as a one-char-per-byte string, so string offsets are byte offsets. */
export function latin1(bytes) {
  let s = '';
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) s += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK));
  return s;
}

function asciiBytes(str) {
  const out = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) out[i] = str.charCodeAt(i) & 0xff;
  return out;
}

export async function sha256Hex(bytes) {
  const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function inflate(bytes) {
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

// --- PDF syntax -------------------------------------------------------------

const WS = new Set([' ', '\t', '\n', '\r', '\f', '\0']);
const DELIM = new Set(['(', ')', '<', '>', '[', ']', '{', '}', '/', '%']);

function skipWs(s, i) {
  while (i < s.length) {
    if (WS.has(s[i])) i++;
    else if (s[i] === '%') { while (i < s.length && s[i] !== '\n' && s[i] !== '\r') i++; }
    else break;
  }
  return i;
}

function skipLiteralString(s, i) {
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    const c = s[j];
    if (c === '\\') { j++; continue; }
    if (c === '(') depth++;
    else if (c === ')' && --depth === 0) return j + 1;
  }
  throw new Error('unterminated string');
}

function readName(s, i) {
  let j = i + 1;
  while (j < s.length && !WS.has(s[j]) && !DELIM.has(s[j])) j++;
  return { name: s.slice(i + 1, j), end: j };
}

/** The end offset of the dictionary starting at i (which must be "<<"). */
function dictEnd(s, i) {
  if (s.slice(i, i + 2) !== '<<') throw new Error(`expected a dictionary at byte ${i}`);
  let depth = 0;
  let j = i;
  while (j < s.length) {
    const c = s[j];
    if (c === '(') { j = skipLiteralString(s, j); continue; }
    if (c === '%') { j = skipWs(s, j); continue; }
    if (c === '<') {
      if (s[j + 1] === '<') { depth++; j += 2; continue; }
      j = s.indexOf('>', j) + 1;
      if (j === 0) break;
      continue;
    }
    if (c === '>' && s[j + 1] === '>') {
      depth--;
      j += 2;
      if (depth === 0) return j;
      continue;
    }
    j++;
  }
  throw new Error('unterminated dictionary');
}

/** The end offset of the value starting at i. */
function valueEnd(s, i) {
  const c = s[i];
  if (c === '<' && s[i + 1] === '<') return dictEnd(s, i);
  if (c === '<') return s.indexOf('>', i) + 1;
  if (c === '(') return skipLiteralString(s, i);
  if (c === '/') return readName(s, i).end;
  if (c === '[') {
    let j = i + 1;
    for (;;) {
      j = skipWs(s, j);
      if (j >= s.length) throw new Error('unterminated array');
      if (s[j] === ']') return j + 1;
      j = valueEnd(s, j);
    }
  }
  const ahead = s.slice(i, i + 64);
  const m = /^\d+\s+\d+\s+R(?![A-Za-z])/.exec(ahead) || /^[+-]?(?:\d+\.?\d*|\.\d+)/.exec(ahead) || /^[A-Za-z]+/.exec(ahead);
  if (!m) throw new Error(`unreadable value at byte ${i}`);
  return i + m[0].length;
}

/** The top-level entries of a dictionary's text, as a Map of key to raw value text. */
export function dictEntries(text) {
  const out = new Map();
  let i = 2;
  const end = text.length - 2;
  for (;;) {
    i = skipWs(text, i);
    if (i >= end) break;
    if (text[i] !== '/') throw new Error('malformed dictionary key');
    const key = readName(text, i);
    i = skipWs(text, key.end);
    const v = valueEnd(text, i);
    out.set(key.name, text.slice(i, v).trim());
    i = v;
  }
  return out;
}

function parseRef(v) {
  const m = /^(\d+)\s+(\d+)\s+R$/.exec(String(v || '').trim());
  return m ? { num: Number(m[1]), gen: Number(m[2]) } : null;
}

/** Every uncompressed definition of object `num`, latest last: { gen, at, body }. */
function directDefinitions(s, num) {
  const re = new RegExp(`(?:^|[\\s>\\]])(${num})\\s+(\\d+)\\s+obj(?![A-Za-z])`, 'g');
  const out = [];
  let m;
  while ((m = re.exec(s))) {
    const at = m.index + m[0].indexOf(m[1]);
    out.push({ gen: Number(m[2]), at, body: skipWs(s, m.index + m[0].length) });
  }
  return out;
}

/** A stream object's dictionary entries and raw data. */
function readStreamObject(s, bytes, body) {
  const dEnd = dictEnd(s, body);
  const dict = dictEntries(s.slice(body, dEnd));
  let k = dEnd;
  while (WS.has(s[k])) k++;
  if (s.slice(k, k + 6) !== 'stream') throw new Error(`no stream at byte ${body}`);
  k += 6;
  if (s[k] === '\r') k++;
  if (s[k] === '\n') k++;
  let len = /^\d+$/.test(dict.get('Length') || '') ? Number(dict.get('Length')) : null;
  if (len === null || s.slice(k + len, k + len + 30).trimStart().slice(0, 9) !== 'endstream') {
    let e = s.indexOf('endstream', k);
    if (e < 0) throw new Error(`unterminated stream at byte ${body}`);
    if (s[e - 1] === '\n') e--;
    if (s[e - 1] === '\r') e--;
    len = e - k;
  }
  return { dict, data: bytes.subarray(k, k + len) };
}

async function decodedStream(stream) {
  const filter = (stream.dict.get('Filter') || '').replace(/[[\]\s]/g, '');
  if (!filter) return stream.data;
  if (filter === '/FlateDecode' && !stream.dict.has('DecodeParms')) return inflate(stream.data);
  throw new Error(`stream filter ${filter} is not supported`);
}

/** Definitions of `num` inside object streams, latest last: { at, text }. */
async function compressedDefinitions(s, bytes, num) {
  const out = [];
  const re = /\/Type\s*\/ObjStm/g;
  let m;
  while ((m = re.exec(s))) {
    const open = s.lastIndexOf('<<', m.index);
    const objKw = s.lastIndexOf('obj', open);
    if (open < 0 || objKw < 0) continue;
    let stream;
    try { stream = readStreamObject(s, bytes, open); } catch { continue; }
    const n = Number(stream.dict.get('N'));
    const first = Number(stream.dict.get('First'));
    const data = latin1(await decodedStream(stream));
    const header = data.slice(0, first).trim().split(/\s+/).map(Number);
    for (let i = 0; i < n; i++) {
      if (header[i * 2] !== num) continue;
      const start = first + header[i * 2 + 1];
      const end = i + 1 < n ? first + header[(i + 1) * 2 + 1] : data.length;
      out.push({ at: objKw, text: data.slice(start, end).trim() });
    }
  }
  return out;
}

/** The latest dictionary of object `num`, direct or compressed. */
async function latestDictionary(s, bytes, num) {
  const direct = directDefinitions(s, num).map((d) => ({ at: d.at, gen: d.gen, text: s.slice(d.body, dictEnd(s, d.body)) }));
  const packed = (await compressedDefinitions(s, bytes, num)).map((d) => ({ at: d.at, gen: 0, text: d.text.slice(0, dictEnd(d.text, 0)) }));
  const all = [...direct, ...packed].sort((a, b) => a.at - b.at);
  if (!all.length) throw new Error(`object ${num} is not in the file`);
  return all[all.length - 1];
}

/** The latest trailer: its entries, whether it is an xref stream, and where it sits. */
function latestTrailer(s) {
  const kw = s.lastIndexOf('startxref');
  if (kw < 0) throw new Error('not a PDF: no startxref');
  const startxref = Number((/^startxref\s+(\d+)/.exec(s.slice(kw, kw + 40)) || [])[1]);
  if (!Number.isFinite(startxref)) throw new Error('unreadable startxref');
  const at = skipWs(s, startxref);
  if (s.slice(at, at + 4) === 'xref') {
    const t = s.indexOf('trailer', at);
    if (t < 0) throw new Error('classic cross-reference with no trailer');
    const d = skipWs(s, t + 7);
    return { startxref, kind: 'table', entries: dictEntries(s.slice(d, dictEnd(s, d))) };
  }
  const m = /^\d+\s+\d+\s+obj/.exec(s.slice(at, at + 40));
  if (!m) throw new Error('startxref does not point at a cross-reference section');
  const d = skipWs(s, at + m[0].length);
  const entries = dictEntries(s.slice(d, dictEnd(s, d)));
  if (entries.get('Type') !== '/XRef') throw new Error('startxref points at an object that is not an xref stream');
  return { startxref, kind: 'stream', entries };
}

/**
 * Read what an approval touches: the trailer, the catalog, and the XMP packet.
 * @param {Uint8Array} bytes
 */
export async function readPdfMetadata(bytes) {
  const s = latin1(bytes);
  if (!s.startsWith('%PDF-')) throw new Error('not a PDF (no %PDF- header)');
  const trailer = latestTrailer(s);
  if (trailer.entries.has('Encrypt')) throw new Error('the PDF is encrypted; an encrypted file cannot be approved here');
  const root = parseRef(trailer.entries.get('Root'));
  if (!root) throw new Error('the trailer names no catalog');
  const size = Number(trailer.entries.get('Size'));
  if (!Number.isFinite(size)) throw new Error('the trailer has no Size');
  const catalog = await latestDictionary(s, bytes, root.num);
  const entries = dictEntries(catalog.text);
  const metaRef = parseRef(entries.get('Metadata'));
  let metadata = null;
  if (metaRef) {
    const defs = directDefinitions(s, metaRef.num);
    if (!defs.length) throw new Error(`the catalog's Metadata stream ${metaRef.num} is not in the file`);
    const def = defs[defs.length - 1];
    const stream = readStreamObject(s, bytes, def.body);
    metadata = { num: metaRef.num, gen: def.gen, xmp: new TextDecoder('utf-8').decode(await decodedStream(stream)) };
  }
  return { s, trailer, size, root: { ...root, text: catalog.text }, metadata };
}

// --- XMP --------------------------------------------------------------------

const xmlEscape = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const xmlUnescape = (v) => String(v).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&amp;/g, '&');

const EMPTY_PACKET = '<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"></rdf:RDF></x:xmpmeta>\n<?xpacket end="w"?>';

/** The namespace URI the packet binds to the mx prefix, or the house default. */
export function mxNamespaceOf(xmp) {
  const m = /xmlns:mx\s*=\s*(["'])([^"']+)\1/.exec(xmp || '');
  return m ? m[2] : MX_XMP_NAMESPACE;
}

/** The packet with any earlier approval removed and this one written. */
export function withApproval(xmp, fields) {
  const ns = mxNamespaceOf(xmp);
  let out = xmp.replace(new RegExp(`${APPROVAL_START}[\\s\\S]*?${APPROVAL_END}`, 'g'), '');
  for (const name of APPROVAL_FIELDS) {
    out = out.replace(new RegExp(`<mx:${name}>[\\s\\S]*?</mx:${name}>`, 'g'), '')
      .replace(new RegExp(`\\smx:${name}\\s*=\\s*("[^"]*"|'[^']*')`, 'g'), '');
  }
  const props = APPROVAL_FIELDS.filter((n) => fields[n] != null && String(fields[n]) !== '')
    .map((n) => `<mx:${n}>${xmlEscape(fields[n])}</mx:${n}>`).join('');
  const block = `${APPROVAL_START}<rdf:Description rdf:about="" xmlns:mx="${xmlEscape(ns)}">${props}</rdf:Description>${APPROVAL_END}`;
  if (!/<\/rdf:RDF>/.test(out)) throw new Error('the XMP packet has no rdf:RDF element');
  return out.replace(/<\/rdf:RDF>/, `${block}</rdf:RDF>`);
}

/** The approval a packet records, or null. Values are unescaped text. */
export function approvalFromXmp(xmp) {
  const fields = {};
  for (const name of APPROVAL_FIELDS) {
    const m = new RegExp(`<mx:${name}>([\\s\\S]*?)</mx:${name}>`).exec(xmp || '')
      || new RegExp(`\\smx:${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`).exec(xmp || '');
    if (m) fields[name] = xmlUnescape(m[1] ?? m[2] ?? '');
  }
  return fields.ApprovalDecision ? fields : null;
}

// PDF/A extension schemas. A port of scripts/lib/pdf/pdfa-finalise.cjs
// (collectProperties, extensionBlock, withExtensionSchemas); tests/test-pdf-auditor.js
// holds the two byte-identical, so a packet the finaliser made PDF/A-valid stays valid
// after an approval adds its properties.
const PREDEFINED = new Set([
  'http://purl.org/dc/elements/1.1/', 'http://ns.adobe.com/xap/1.0/', 'http://ns.adobe.com/xap/1.0/rights/',
  'http://ns.adobe.com/xap/1.0/mm/', 'http://ns.adobe.com/xap/1.0/bj/', 'http://ns.adobe.com/xap/1.0/t/pg/',
  'http://ns.adobe.com/xmp/1.0/DynamicMedia/', 'http://ns.adobe.com/pdf/1.3/', 'http://ns.adobe.com/photoshop/1.0/',
  'http://ns.adobe.com/camera-raw-settings/1.0/', 'http://ns.adobe.com/exif/1.0/', 'http://ns.adobe.com/exif/1.0/aux/',
  'http://ns.adobe.com/tiff/1.0/', 'http://ns.adobe.com/xap/1.0/sType/ResourceEvent#', 'http://ns.adobe.com/xap/1.0/sType/ResourceRef#',
  'http://www.aiim.org/pdfa/ns/id/', 'http://www.aiim.org/pdfa/ns/extension/', 'http://www.aiim.org/pdfa/ns/schema#',
  'http://www.aiim.org/pdfa/ns/property#', 'http://www.aiim.org/pdfa/ns/type#', 'http://www.aiim.org/pdfa/ns/field#',
  'http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'adobe:ns:meta/', 'http://www.w3.org/XML/1998/namespace',
]);
const FIXED_TYPES = {
  'http://www.aiim.org/pdfua/ns/id/': { part: 'Integer', rev: 'Integer', amd: 'Text', corr: 'Text' },
};
const SCHEMA_NAMES = {
  'http://www.aiim.org/pdfua/ns/id/': 'PDF/UA identification schema',
  'https://schemas.cognovamx.com/mx/1.0/': 'MX (Machine Experience) metadata schema',
};
const EXT_START = '<!-- mx-pdfa-extension:start -->';
const EXT_END = '<!-- mx-pdfa-extension:end -->';
const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function collectProperties(xmp) {
  const prefixes = {};
  for (const m of xmp.matchAll(/xmlns:([A-Za-z][\w.-]*)=["']([^"']+)["']/g)) prefixes[m[1]] = m[2];
  const out = {};
  const add = (prefix, name, type) => {
    const uri = prefixes[prefix];
    if (!uri || PREDEFINED.has(uri)) return;
    out[uri] = out[uri] || { prefix, props: {} };
    out[uri].props[name] = FIXED_TYPES[uri]?.[name] || out[uri].props[name] || type;
  };
  const body = xmp.replace(new RegExp(`${EXT_START}[\\s\\S]*?${EXT_END}`), '');
  for (const d of body.matchAll(/<rdf:Description\b([^>]*)>/g)) {
    for (const a of d[1].matchAll(/\s([A-Za-z][\w.-]*):([A-Za-z][\w.-]*)\s*=/g)) {
      if (a[1] !== 'xmlns' && a[1] !== 'rdf') add(a[1], a[2], 'Text');
    }
  }
  for (const e of body.matchAll(/<([A-Za-z][\w.-]*):([A-Za-z][\w.-]*)(?:\s[^>]*)?(?<!\/)>/g)) {
    if (['rdf', 'x'].includes(e[1])) continue;
    const start = e.index + e[0].length;
    const end = body.indexOf(`</${e[1]}:${e[2]}>`, start);
    const v = end < 0 ? '' : body.slice(start, end);
    const type = /^\s*<rdf:Bag/.test(v) ? 'bag Text' : /^\s*<rdf:Seq/.test(v) ? 'seq Text' : /^\s*<rdf:Alt/.test(v) ? 'Lang Alt' : 'Text';
    add(e[1], e[2], type);
  }
  return out;
}

function extensionBlock(xmp) {
  const ns = collectProperties(xmp);
  const uris = Object.keys(ns).sort();
  if (!uris.length) return '';
  const schemas = uris.map((uri) => {
    const { prefix, props } = ns[uri];
    const rows = Object.keys(props).sort().map((name) => `<rdf:li rdf:parseType="Resource"><pdfaProperty:name>${escAttr(name)}</pdfaProperty:name><pdfaProperty:valueType>${escAttr(props[name])}</pdfaProperty:valueType><pdfaProperty:category>external</pdfaProperty:category><pdfaProperty:description>${escAttr(name)}</pdfaProperty:description></rdf:li>`).join('');
    return `<rdf:li rdf:parseType="Resource"><pdfaSchema:schema>${escAttr(SCHEMA_NAMES[uri] || uri)}</pdfaSchema:schema><pdfaSchema:namespaceURI>${escAttr(uri)}</pdfaSchema:namespaceURI><pdfaSchema:prefix>${escAttr(prefix)}</pdfaSchema:prefix><pdfaSchema:property><rdf:Seq>${rows}</rdf:Seq></pdfaSchema:property></rdf:li>`;
  }).join('');
  return `${EXT_START}<rdf:Description rdf:about="" xmlns:pdfaExtension="http://www.aiim.org/pdfa/ns/extension/" xmlns:pdfaSchema="http://www.aiim.org/pdfa/ns/schema#" xmlns:pdfaProperty="http://www.aiim.org/pdfa/ns/property#"><pdfaExtension:schemas><rdf:Bag>${schemas}</rdf:Bag></pdfaExtension:schemas></rdf:Description>${EXT_END}`;
}

/** The packet with its extension block replaced (idempotent). Mirrors pdfa-finalise.cjs. */
export function withExtensionSchemas(xmp) {
  const stripped = xmp.replace(new RegExp(`${EXT_START}[\\s\\S]*?${EXT_END}`), '');
  const block = extensionBlock(stripped);
  return block ? stripped.replace(/<\/rdf:RDF>/, `${block}</rdf:RDF>`) : stripped;
}

/**
 * The packet with the approval written and, where this tool can manage it, the PDF/A
 * extension schemas declared. Returns { xmp, warnings }.
 */
export function approvedPacket(xmp, fields) {
  const warnings = [];
  let out = withApproval(xmp || EMPTY_PACKET, fields);
  const marked = out.includes(EXT_START);
  const foreign = !marked && /pdfaExtension:schemas/.test(out);
  const claimsA = /pdfaid:part/.test(out);
  if (marked || (claimsA && !foreign)) out = withExtensionSchemas(out);
  else if (foreign) warnings.push('The file declares PDF/A extension schemas this tool does not manage, so the approval properties are not declared there. Re-validate the PDF/A identification (veraPDF) before publishing.');
  return { xmp: out, warnings };
}

// --- approve and read back --------------------------------------------------

/**
 * Check approval input and return the fields to write, or throw with the reason.
 * @param {{decision:string, approvedBy:string, approvedAt?:string, notes?:string}} input
 */
export function approvalFields(input, { sha256, length, now = new Date() }) {
  const decision = String(input.decision || '').trim();
  if (!DECISIONS.includes(decision)) throw new Error(`decision must be one of ${DECISIONS.join(', ')}`);
  const by = String(input.approvedBy || '').trim();
  if (!by) throw new Error('the approver must be named');
  const at = input.approvedAt ? new Date(input.approvedAt) : now;
  if (Number.isNaN(at.getTime())) throw new Error('the approval date is not a date');
  return {
    ApprovalDecision: decision,
    ApprovedBy: by,
    ApprovedAt: at.toISOString().replace(/\.\d{3}Z$/, 'Z'),
    ApprovalNotes: String(input.notes || '').trim(),
    ApprovedSha256: sha256,
    ApprovedLength: String(length),
  };
}

function contiguousRuns(nums) {
  const runs = [];
  for (const n of nums) {
    const last = runs[runs.length - 1];
    if (last && n === last[0] + last[1]) last[1]++;
    else runs.push([n, 1]);
  }
  return runs;
}

/**
 * Write an approval into a PDF as an incremental update.
 * @param {Uint8Array} bytes  the PDF exactly as reviewed
 * @param {object} input      decision, approvedBy, approvedAt (optional), notes (optional)
 * @returns {Promise<{bytes: Uint8Array, fields: object, warnings: string[]}>}
 */
export async function approvePdf(bytes, input, { now } = {}) {
  const doc = await readPdfMetadata(bytes);
  const fields = approvalFields(input, { sha256: await sha256Hex(bytes), length: bytes.length, now });
  const { xmp, warnings } = approvedPacket(doc.metadata && doc.metadata.xmp, fields);
  const xmpBytes = new TextEncoder().encode(xmp);

  let nextNum = doc.size;
  const meta = doc.metadata ? { num: doc.metadata.num, gen: doc.metadata.gen } : { num: nextNum++, gen: 0 };
  const parts = [];
  let pos = bytes.length;
  const push = (chunk) => { const b = typeof chunk === 'string' ? asciiBytes(chunk) : chunk; parts.push(b); pos += b.length; };
  const offsets = new Map();

  const lastByte = bytes[bytes.length - 1];
  if (lastByte !== 0x0a && lastByte !== 0x0d) push('\n');

  offsets.set(meta.num, { at: pos, gen: meta.gen });
  push(`${meta.num} ${meta.gen} obj\n<< /Type /Metadata /Subtype /XML /Length ${xmpBytes.length} >>\nstream\n`);
  push(xmpBytes);
  push('\nendstream\nendobj\n');

  if (!doc.metadata) {
    const catalog = `${doc.root.text.slice(0, -2).trimEnd()} /Metadata ${meta.num} 0 R >>`;
    offsets.set(doc.root.num, { at: pos, gen: doc.root.gen });
    push(`${doc.root.num} ${doc.root.gen} obj\n${catalog}\nendobj\n`);
  }

  const carried = ['Root', 'Info', 'ID'].filter((k) => doc.trailer.entries.has(k)).map((k) => `/${k} ${doc.trailer.entries.get(k)}`).join(' ');

  if (doc.trailer.kind === 'table') {
    const size = Math.max(doc.size, nextNum);
    const xrefAt = pos;
    const nums = [...offsets.keys()].sort((a, b) => a - b);
    let x = 'xref\n';
    for (const [start, count] of contiguousRuns(nums)) {
      x += `${start} ${count}\n`;
      for (let n = start; n < start + count; n++) {
        const o = offsets.get(n);
        x += `${String(o.at).padStart(10, '0')} ${String(o.gen).padStart(5, '0')} n\r\n`;
      }
    }
    push(`${x}trailer\n<< /Size ${size} ${carried} /Prev ${doc.trailer.startxref} >>\nstartxref\n${xrefAt}\n%%EOF\n`);
  } else {
    const xrefNum = nextNum++;
    const size = Math.max(doc.size, nextNum);
    const xrefAt = pos;
    offsets.set(xrefNum, { at: xrefAt, gen: 0 });
    const nums = [...offsets.keys()].sort((a, b) => a - b);
    const data = new Uint8Array(nums.length * 7);
    nums.forEach((n, i) => {
      const { at, gen } = offsets.get(n);
      data.set([1, (at >>> 24) & 0xff, (at >>> 16) & 0xff, (at >>> 8) & 0xff, at & 0xff, (gen >>> 8) & 0xff, gen & 0xff], i * 7);
    });
    const index = contiguousRuns(nums).map(([a, c]) => `${a} ${c}`).join(' ');
    push(`${xrefNum} 0 obj\n<< /Type /XRef /Size ${size} /W [1 4 2] /Index [${index}] ${carried} /Prev ${doc.trailer.startxref} /Length ${data.length} >>\nstream\n`);
    push(data);
    push(`\nendstream\nendobj\nstartxref\n${xrefAt}\n%%EOF\n`);
  }

  const out = new Uint8Array(pos);
  out.set(bytes, 0);
  let k = bytes.length;
  for (const p of parts) { out.set(p, k); k += p.length; }
  return { bytes: out, fields, warnings };
}

/**
 * The approval a PDF records, checked against its bytes, or null when it has none.
 * `bytesMatch` is true when the first ApprovedLength bytes hash to ApprovedSha256;
 * `changedAfter` is true when anything beyond the approval's own update follows them.
 */
export async function readApproval(bytes) {
  const doc = await readPdfMetadata(bytes);
  const fields = doc.metadata ? approvalFromXmp(doc.metadata.xmp) : null;
  if (!fields) return null;
  const length = Number(fields.ApprovedLength);
  let bytesMatch = false;
  let changedAfter = null;
  if (Number.isInteger(length) && length > 0 && length <= bytes.length) {
    bytesMatch = (await sha256Hex(bytes.subarray(0, length))) === String(fields.ApprovedSha256 || '').toLowerCase();
    const eof = doc.s.indexOf('%%EOF', length);
    changedAfter = eof < 0 ? true : doc.s.slice(eof + 5).trim() !== '';
  }
  return { fields, bytesMatch, changedAfter };
}
