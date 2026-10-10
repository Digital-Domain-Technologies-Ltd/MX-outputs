/**
 * head-snippet.js - the browser side of tools/head-snippet.html. Reads the
 * form and shows the <head> block that window.MXSnippets.buildHead produces
 * (mx-snippets.js, the served copy of the self-check's snippet code), so the
 * page and the self-check generate the same text. Runs entirely in the
 * browser; nothing is sent anywhere.
 *
 * @mx:category mx-site-check
 * @mx:status active
 * @mx:contentType script
 * @mx:tags site-check, browser, tool, snippets
 */
(function () {
  'use strict';

  var form = document.querySelector('[data-head-snippet-form]');
  var output = document.querySelector('[data-head-snippet-output]');
  var copy = document.querySelector('[data-head-snippet-copy]');
  if (!form || !output || !window.MXSnippets) return;

  function values() {
    var data = {};
    Array.prototype.forEach.call(form.elements, function (field) {
      if (field.name) data[field.name] = field.value.trim();
    });
    return data;
  }

  function update() {
    output.textContent = window.MXSnippets.buildHead(values());
  }

  form.addEventListener('input', update);
  form.addEventListener('submit', function (event) { event.preventDefault(); update(); });
  if (copy) {
    copy.addEventListener('click', function () {
      if (navigator.clipboard) navigator.clipboard.writeText(output.textContent).then(function () { copy.textContent = 'Copied'; });
    });
  }
  update();
}());
