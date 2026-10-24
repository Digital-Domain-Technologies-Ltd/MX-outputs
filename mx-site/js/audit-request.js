/**
 * audit-request.js - the browser side of audit/request.html. Sends the form to
 * the audit intake named in the form's data-endpoint attribute (the mx-site
 * connector's transport on the REGINALD vnext worker) and shows the answer. All
 * text is written with textContent, never as HTML.
 *
 * The body carries only what the intake maps: the address, the contact, the
 * plan, the page count or the listed pages, the consent and the Turnstile token.
 * The honeypot field travels as the intake expects, so a bot that fills it is
 * told yes and stored nowhere. When no endpoint is configured or the intake
 * cannot be reached, the page says so and offers the contact page instead.
 *
 * @mx:category mx-audit
 * @mx:status active
 * @mx:contentType script
 * @mx:tags audit, intake, browser, form
 */
(function () {
  'use strict';

  var form = document.querySelector('[data-audit-request-form]');
  var results = document.querySelector('[data-audit-request-results]');
  if (!form || !results) return;
  var endpoint = (form.getAttribute('data-endpoint') || '').trim();
  var sitekey = (form.getAttribute('data-turnstile-sitekey') || '').trim();
  var widget = form.querySelector('[data-audit-request-turnstile]');

  function el(tag, text, cls) {
    var node = document.createElement(tag);
    if (text != null) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  }

  function show(nodes) {
    while (results.firstChild) results.removeChild(results.firstChild);
    nodes.forEach(function (n) { results.appendChild(n); });
    results.hidden = false;
  }

  function unavailable(reason) {
    var p = el('p', reason + ' ');
    var a = el('a', 'Tell us about your site on the contact page');
    a.href = '../about/contact.html';
    p.appendChild(a);
    p.appendChild(document.createTextNode(' and we will scope the run with you.'));
    show([p]);
  }

  if (sitekey && widget) widget.setAttribute('data-sitekey', sitekey);

  function listedPages(text) {
    return text.split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function payload() {
    var data = new FormData(form);
    var body = {
      websiteUrl: String(data.get('websiteUrl') || '').trim(),
      email: String(data.get('email') || '').trim(),
      name: String(data.get('name') || '').trim(),
      organisation: String(data.get('organisation') || '').trim(),
      plan: String(data.get('plan') || 'free'),
      consent: data.get('consent') === 'yes',
      website: String(data.get('website') || ''),
      turnstileToken: String(data.get('cf-turnstile-response') || '')
    };
    var pages = listedPages(String(data.get('scopeUrls') || ''));
    if (pages.length) body.scope = { mode: 'specific_urls', urls: pages };
    else if (body.plan !== 'free' && data.get('pageCount')) body.pageCount = Number(data.get('pageCount'));
    return body;
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!endpoint) { unavailable('The request form is not connected yet.'); return; }
    var button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    show([el('p', 'Sending your request.')]);
    fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload()) })
      .then(function (r) { return r.json().then(function (j) { return { status: r.status, body: j }; }); })
      .then(function (r) {
        if (r.status === 202) {
          show([
            el('h3', 'Request received'),
            el('p', 'Your reference is ' + r.body.requestId + '. Nothing runs until our engine picks it up, and you hear from us at the address you gave when the report is ready.')
          ]);
          form.reset();
          return;
        }
        if (r.status === 429) { unavailable('That address has sent several requests this hour; try again later.'); return; }
        show([el('p', 'We could not take that request: ' + (r.body && r.body.reason ? r.body.reason : 'please check the form') + '.')]);
      })
      .catch(function () { unavailable('The request form could not reach us.'); })
      .then(function () { button.disabled = false; });
  });
})();
