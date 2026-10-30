/**
 * site-check.js - the browser side of tools/site-check.html. Sends the address
 * to the site-check service named in the results container's data-endpoint
 * attribute and shows the report: the checklist, then each finding with what a
 * machine sees, where it guesses, and the fix with a copy button. All text is
 * written with textContent, never as HTML.
 *
 * When no endpoint is configured or the service cannot be reached, the page
 * says so and offers the free read-out instead.
 *
 * @mx:category mx-site-check
 * @mx:status active
 * @mx:contentType script
 * @mx:tags site-check, browser, tool
 */
(function () {
  'use strict';

  var form = document.querySelector('[data-site-check-form]');
  var results = document.querySelector('[data-site-check-results]');
  if (!form || !results) return;
  var endpoint = (results.getAttribute('data-endpoint') || '').trim();

  function el(tag, text, cls) {
    var node = document.createElement(tag);
    if (text != null) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  }

  function copyButton(text) {
    var b = el('button', 'Copy', 'site-check-copy');
    b.type = 'button';
    b.addEventListener('click', function () {
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () { b.textContent = 'Copied'; });
    });
    return b;
  }

  function unavailable(reason) {
    results.replaceChildren(
      el('h2', 'The online check is not available right now'),
      el('p', reason),
      el('p', 'Email info@cognovamx.com with your address and we will send a free read-out of up to five pages: what a machine sees and where it guesses.')
    );
    results.hidden = false;
  }

  function render(r) {
    var parts = [];
    parts.push(el('h2', 'What machines see on ' + r.url));
    parts.push(el('p', 'Checked ' + r.pagesRead.length + ' page(s). ' + r.checklist.passed + ' of ' + r.checklist.total + ' checklist items met.'));
    var list = el('ul', null, 'site-check-checklist');
    r.checklist.items.forEach(function (item) {
      var li = el('li', (item.pass ? 'Met: ' : 'Not met: ') + item.title + ' (' + item.standard + ')');
      li.setAttribute('data-pass', item.pass ? 'true' : 'false');
      list.appendChild(li);
    });
    parts.push(list);
    if (!r.findings.length) parts.push(el('p', 'No findings. A machine can read these pages without guessing.'));
    r.findings.forEach(function (f) {
      var box = el('section', null, 'site-check-finding');
      box.setAttribute('data-severity', f.severity);
      box.appendChild(el('h3', f.title));
      box.appendChild(el('p', 'What a machine sees: ' + f.seen));
      box.appendChild(el('p', 'Where it guesses: ' + f.guess));
      if (f.urls && f.urls.length) box.appendChild(el('p', 'Pages: ' + f.urls.join(', ')));
      if (f.fix) {
        box.appendChild(el('p', 'Fix, ' + f.fix.whereLabel + ':'));
        var pre = el('pre');
        pre.appendChild(el('code', f.fix.snippet));
        box.appendChild(pre);
        box.appendChild(copyButton(f.fix.snippet));
      }
      parts.push(box);
    });
    parts.push(el('p', 'Want the full picture, with every page and a dated record you can show? See the AX (agent experience) audit at https://mx.allabout.network/audit/.'));
    results.replaceChildren.apply(results, parts);
    results.hidden = false;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = form.querySelector('input[name="url"]');
    var url = input ? input.value.trim() : '';
    if (!url) return;
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    if (!endpoint) { unavailable('The checking service has not been switched on yet.'); return; }
    results.replaceChildren(el('p', 'Reading up to five pages. This takes a few seconds.'));
    results.hidden = false;
    fetch(endpoint + '?url=' + encodeURIComponent(url))
      .then(function (res) { return res.json().then(function (body) { return { status: res.status, body: body }; }); })
      .then(function (r) {
        if (r.status !== 200) { unavailable('That address was not checked: ' + (r.body && r.body.error ? r.body.error : 'status ' + r.status) + '.'); return; }
        render(r.body);
      })
      .catch(function () { unavailable('The checking service could not be reached.'); });
  });
}());
