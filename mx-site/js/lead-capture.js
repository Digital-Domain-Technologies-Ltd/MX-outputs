/**
 * MX Lead Capture
 *
 * Progressive-enhancement form handler for the free-PDF-check form on
 * /learn/mx-for-pdfs.html and the Certified Operator waitlist form on
 * /services/certified-operator.html. With JavaScript disabled the forms
 * submit normally (the worker handles the redirect server-side). With
 * JavaScript enabled the submission is captured, posted as JSON, and the
 * inline status element receives a confirmation message in place of a
 * full-page redirect.
 *
 * @mx:status active
 * @mx:contentType script
 * @mx:audience humans, machines
 */

(function () {
  'use strict';

  var STATUS_ATTR = 'data-mx-lead-status';
  var FORM_ATTR = 'data-mx-lead-form';
  var SUCCESS_PARAM_KEY = 'submitted';

  function qs(root, selector) {
    return root.querySelector(selector);
  }

  function setStatus(statusEl, state, message) {
    if (!statusEl) return;
    statusEl.setAttribute('data-state', state);
    statusEl.textContent = message;
  }

  function collectFormData(form) {
    var data = {};
    var elements = form.elements;
    for (var i = 0; i < elements.length; i += 1) {
      var el = elements[i];
      if (!el.name) continue;
      if (el.type === 'checkbox') {
        data[el.name] = el.checked;
      } else if (el.type === 'submit') {
        continue;
      } else {
        data[el.name] = (el.value || '').trim();
      }
    }
    return data;
  }

  function isValidEmail(value) {
    if (!value) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidUrl(value) {
    if (!value) return false;
    try {
      var u = new URL(value);
      return u.protocol === 'http:' || u.protocol === 'https:';
    } catch (e) {
      return false;
    }
  }

  function validate(formType, data) {
    if (data.consent !== true) {
      return 'Please confirm the consent statement before submitting.';
    }
    if (!isValidEmail(data.email)) {
      return 'Please enter a valid email address.';
    }
    if (formType === 'pdf-check') {
      if (!isValidUrl(data.url)) {
        return 'Please paste a valid http(s) URL for the PDF.';
      }
    }
    return null;
  }

  function attachForm(form) {
    var formType = form.getAttribute(FORM_ATTR);
    var statusEl = qs(form, '[' + STATUS_ATTR + ']');
    var submitBtn = qs(form, '[type="submit"]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var data = collectFormData(form);
      data.formType = formType;
      data.pageUrl = window.location.href;
      data.referrer = document.referrer || '';

      var validationError = validate(formType, data);
      if (validationError) {
        setStatus(statusEl, 'error', validationError);
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      setStatus(statusEl, 'pending', 'Submitting your request...');

      fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(function (response) {
        return response.json().then(function (payload) {
          return { ok: response.ok, status: response.status, payload: payload };
        }).catch(function () {
          return { ok: response.ok, status: response.status, payload: {} };
        });
      }).then(function (result) {
        if (!result.ok) {
          var msg = (result.payload && result.payload.error)
            || 'Submission failed. Please try again or email mx-printworks@cognovamx.com.';
          setStatus(statusEl, 'error', msg);
          if (submitBtn) submitBtn.disabled = false;
          return;
        }
        var successMsg = (result.payload && result.payload.message)
          || 'Thank you. Your request is in. We will be in touch within two working days.';
        setStatus(statusEl, 'success', successMsg);
        form.reset();
      }).catch(function () {
        setStatus(statusEl, 'error', 'Network error. Please try again or email mx-printworks@cognovamx.com.');
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  }

  function handleSuccessBanner() {
    var params = new URLSearchParams(window.location.search);
    var submitted = params.get(SUCCESS_PARAM_KEY);
    if (!submitted) return;

    var form = document.querySelector('[' + FORM_ATTR + '="' + submitted + '"]');
    if (!form) return;
    var statusEl = qs(form, '[' + STATUS_ATTR + ']');
    setStatus(statusEl, 'success', 'Thank you. Your request is in. We will be in touch within two working days.');
    form.reset();
  }

  function init() {
    var forms = document.querySelectorAll('[' + FORM_ATTR + ']');
    for (var i = 0; i < forms.length; i += 1) {
      attachForm(forms[i]);
    }
    handleSuccessBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
