/* mx-lesson.js - guided-lesson engine for the MX Learn interactive track.
   Progressive enhancement over server-rendered content: every step, panel,
   answer, and explanation is present in the served HTML. This engine only
   sequences what is already there - it never injects content. A non-JS
   reader (human or agent) sees the whole lesson in document order.

   Contract with the page (enforced by scripts/check-lesson-compliance.cjs):
   - #lesson wraps .lesson-step sections
   - elements that must be interacted with before Next unlocks carry
     data-gate; the engine marks them .is-done
   - tab groups: .lesson-tabs buttons with data-panel referencing ids of
     sibling .lesson-tabpanel elements (panels carry data-gate)
   - flip pairs: .lesson-pair (carries data-gate)
   - open cards: .lesson-card[data-gate]
   - quiz: .lesson-quiz with .quiz-option buttons (data-correct on the right
     one), a .quiz-answer block (the explanation, visible without JS) and an
     optional .quiz-retry block; the quiz wrapper carries data-gate */
(function () {
  'use strict';

  var lesson = document.getElementById('lesson');
  if (!lesson) { return; }

  var steps = Array.prototype.slice.call(lesson.querySelectorAll('.lesson-step'));
  if (steps.length === 0) { return; }

  document.documentElement.classList.add('lesson-enhanced');
  lesson.classList.add('lesson-enhanced');
  document.body.classList.add('lesson-enhanced');

  var current = 0;

  /* Build the progress bar */
  var progress = lesson.querySelector('.lesson-progress');
  var count = null;
  if (progress) {
    for (var i = 0; i < steps.length; i += 1) {
      var seg = document.createElement('div');
      seg.className = 'seg';
      progress.appendChild(seg);
    }
    count = document.createElement('span');
    count.className = 'count';
    progress.appendChild(count);
  }

  /* Build prev/next controls */
  var nav = lesson.querySelector('.lesson-nav');
  var back = null;
  var next = null;
  if (nav) {
    back = document.createElement('button');
    back.type = 'button';
    back.textContent = '← Back';
    next = document.createElement('button');
    next.type = 'button';
    next.className = 'primary';
    next.textContent = 'Next →';
    nav.appendChild(back);
    nav.appendChild(next);
  }

  function stepComplete(step) {
    var gated = step.querySelectorAll('[data-gate]');
    for (var g = 0; g < gated.length; g += 1) {
      if (!gated[g].classList.contains('is-done')) { return false; }
    }
    return true;
  }

  function render() {
    steps.forEach(function (s, i) { s.classList.toggle('active', i === current); });
    if (progress) {
      var segs = progress.querySelectorAll('.seg');
      segs.forEach(function (s, i) { s.classList.toggle('done', i <= current); });
      count.textContent = (current + 1) + ' / ' + steps.length;
    }
    if (nav) {
      back.disabled = current === 0;
      next.disabled = !stepComplete(steps[current]);
      next.textContent = current === steps.length - 1 ? 'Done ✓' : 'Next →';
    }
  }

  if (nav) {
    back.addEventListener('click', function () {
      if (current > 0) { current -= 1; render(); }
    });
    next.addEventListener('click', function () {
      if (current < steps.length - 1) { current += 1; render(); }
      else { next.textContent = 'Lesson complete ✓'; next.disabled = true; }
    });
  }

  function markDone(el) {
    if (!el.classList.contains('is-done')) {
      el.classList.add('is-done');
      updateHint(el);
      render();
    }
  }

  /* Optional per-step counters: .lesson-hint[data-counts] shows progress
     through that step's gated items */
  function updateHint(el) {
    var step = el.closest('.lesson-step');
    if (!step) { return; }
    var hint = step.querySelector('.lesson-hint[data-counts]');
    if (!hint) { return; }
    var gated = step.querySelectorAll('[data-gate]');
    var done = step.querySelectorAll('[data-gate].is-done');
    if (done.length >= gated.length) {
      hint.textContent = hint.getAttribute('data-done-text') || 'All done - carry on.';
    } else {
      hint.textContent = 'Completed ' + done.length + ' of ' + gated.length + '.';
    }
  }

  function activate(el, handler) {
    el.addEventListener('click', handler);
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }
    });
  }

  /* Open-to-reveal cards and flip pairs */
  lesson.querySelectorAll('.lesson-card[data-gate], .lesson-pair[data-gate]').forEach(function (el) {
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    activate(el, function () { markDone(el); });
  });

  /* Tab groups */
  lesson.querySelectorAll('.lesson-tabs').forEach(function (group) {
    var buttons = group.querySelectorAll('button[data-panel]');
    buttons.forEach(function (b, idx) {
      b.addEventListener('click', function () {
        buttons.forEach(function (x) { x.classList.toggle('on', x === b); });
        var scope = group.parentElement;
        scope.querySelectorAll('.lesson-tabpanel').forEach(function (p) {
          p.classList.toggle('on', p.id === b.getAttribute('data-panel'));
        });
        var panel = document.getElementById(b.getAttribute('data-panel'));
        if (panel) { markDone(panel); }
      });
      if (idx === 0) { b.click(); }
    });
  });

  /* Quizzes */
  lesson.querySelectorAll('.lesson-quiz').forEach(function (quiz) {
    var answer = quiz.querySelector('.quiz-answer');
    var retry = quiz.querySelector('.quiz-retry');
    quiz.querySelectorAll('.quiz-option').forEach(function (option) {
      option.addEventListener('click', function () {
        if (quiz.classList.contains('is-done')) { return; }
        var right = option.hasAttribute('data-correct');
        option.classList.add(right ? 'correct' : 'wrong');
        if (right) {
          if (answer) { answer.classList.add('revealed'); }
          if (retry) { retry.classList.remove('revealed'); }
          quiz.querySelectorAll('.quiz-option').forEach(function (x) { x.disabled = true; });
          markDone(quiz);
        } else if (retry) {
          retry.classList.add('revealed');
        }
      });
    });
  });

  render();
}());
