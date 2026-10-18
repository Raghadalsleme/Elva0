/**
 * ELVA motion
 * - Hero: intro reveal (letters/words rise in), image crossfade slideshow with slow zoom, pause when hidden
 * - Scroll reveals: [data-elva-reveal] and children of [data-elva-stagger]
 * - Statement: words light up as the section scrolls through the viewport (*word* = accent)
 * - Counters: numbers count up the first time they are seen
 *
 * Content is only hidden while <html> has `elva-motion` (set by an inline script in master.twig),
 * so without this script everything simply shows. Re-initialises components the theme editor re-renders.
 */
(function () {
  const root = document.documentElement;
  if (window.__elvaMotion) return;
  window.__elvaMotion = true;

  const motionOn = root.classList.contains('elva-motion');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ARABIC = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/;

  /* ---------------- helpers ---------------- */
  const span = (cls, text) => {
    const s = document.createElement('span');
    s.className = cls;
    if (text != null) s.textContent = text;
    return s;
  };

  // Split an element's text into word (or letter, for short Latin titles) spans, safely via textContent
  function splitText(el) {
    if (el.dataset.elvaSplitDone) return;
    const text = (el.textContent || '').trim();
    if (!text) return;
    el.dataset.elvaSplitDone = '1';
    el.setAttribute('aria-label', text);
    // separate inline boxes follow the paragraph direction, so pin it to the text's own script
    // (otherwise "ELVA" renders as "AVLE" on an RTL page, and Arabic words reverse on an LTR page)
    el.setAttribute('dir', ARABIC.test(text) ? 'rtl' : 'ltr');
    el.textContent = '';
    const letters = !ARABIC.test(text) && text.length <= 14 && !/\s/.test(text);
    const parts = letters ? Array.from(text) : text.split(/(\s+)/);
    let i = 0;
    parts.forEach(part => {
      if (!part) return;
      if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); return; }
      const s = span('elva-split__unit', part);
      s.setAttribute('aria-hidden', 'true');
      s.style.setProperty('--i', i++);
      el.appendChild(s);
    });
    el.style.setProperty('--n', i);
  }

  /* ---------------- scroll reveals ---------------- */
  const revealIO = ('IntersectionObserver' in window)
    ? new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed');
            revealIO.unobserve(e.target);
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px -10% 0px' })
    : null;

  function setupReveals(scope) {
    scope.querySelectorAll('[data-elva-stagger]').forEach(group => {
      if (group.dataset.elvaStaggerDone) return;
      group.dataset.elvaStaggerDone = '1';
      const step = parseFloat(group.dataset.elvaStagger) || 0.12;
      Array.from(group.children).forEach((child, i) => {
        if (!child.hasAttribute('data-elva-reveal')) child.setAttribute('data-elva-reveal', group.dataset.elvaStaggerType || 'up');
        child.style.setProperty('--d', (i * step).toFixed(2) + 's');
      });
    });
    scope.querySelectorAll('[data-elva-reveal]:not(.is-revealed)').forEach(el => {
      if (el.dataset.elvaObserved) return;
      el.dataset.elvaObserved = '1';
      if (!motionOn || reduce || !revealIO) el.classList.add('is-revealed');
      else revealIO.observe(el);
    });
  }

  // Theme sections that are not ELVA's own (product sliders, testimonials...) get a gentle fade-up
  function tagThemeSections(scope) {
    scope.querySelectorAll('#main-content > section.s-block').forEach(sec => {
      if (sec.dataset.elvaTagged || /\belva-/.test(sec.className)) return;
      if (sec.classList.contains('merge-with-top-component')) return;
      sec.dataset.elvaTagged = '1';
      sec.setAttribute('data-elva-reveal', 'up');
    });
  }

  /* ---------------- hero ---------------- */
  function initHero(hero) {
    if (hero.dataset.elvaInit) return;
    hero.dataset.elvaInit = '1';

    hero.querySelectorAll('[data-elva-split]').forEach(splitText);
    // two frames so the initial (hidden) state paints before the intro starts
    requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('is-in')));

    const slides = Array.from(hero.querySelectorAll('.elva-hero__slide'));
    const dots = Array.from(hero.querySelectorAll('.elva-hero__dot'));
    if (slides.length < 2) return;

    const interval = Math.max(3500, parseInt(hero.dataset.interval, 10) || 6500);
    let index = 0, timer = null, visible = true;

    const go = next => {
      if (next === index) return;
      const cur = slides[index];
      cur.classList.remove('is-active');
      cur.classList.add('is-leaving');
      setTimeout(() => cur.classList.remove('is-leaving'), 1800);
      index = (next + slides.length) % slides.length;
      slides[index].classList.add('is-active');
      dots.forEach((d, i) => {
        d.classList.toggle('is-active', i === index);
        d.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => {
      stop();
      if (reduce || !visible) return;
      timer = setInterval(() => {
        if (!document.contains(hero)) return stop();
        if (!document.hidden) go(index + 1);
      }, interval);
    };

    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); start(); }));
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }).observe(hero);
    }
    start();
  }

  /* ---------------- statement (scroll-lit words) ---------------- */
  const statements = new Set();

  function initStatement(el) {
    if (el.dataset.elvaInit) return;
    el.dataset.elvaInit = '1';
    const raw = el.getAttribute('data-text') || el.textContent || '';
    el.textContent = '';
    raw.split('*').forEach((chunk, ci) => {
      const accent = ci % 2 === 1;
      chunk.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); return; }
        el.appendChild(span('elva-word' + (accent ? ' elva-word--accent' : ''), part));
      });
    });
    el._words = Array.from(el.querySelectorAll('.elva-word'));
    if (!motionOn || reduce) { el._words.forEach(w => w.classList.add('is-lit')); return; }
    statements.add(el);
    queueScroll();
  }

  function updateStatements() {
    const vh = window.innerHeight || 800;
    statements.forEach(el => {
      if (!document.contains(el)) { statements.delete(el); return; }
      const r = el.getBoundingClientRect();
      // 0 when the text's top reaches 85% of the viewport, 1 when its bottom reaches 45%
      const start = vh * 0.85, end = vh * 0.45;
      const p = Math.min(1, Math.max(0, (start - r.top) / ((start - end) + r.height)));
      const lit = Math.round(p * el._words.length);
      el._words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
    });
  }

  let ticking = false;
  function queueScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; updateStatements(); });
  }
  window.addEventListener('scroll', queueScroll, { passive: true });
  window.addEventListener('resize', queueScroll);

  /* ---------------- counters ---------------- */
  const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
  const toLatin = s => s.replace(/[٠-٩]/g, d => AR_DIGITS.indexOf(d)).replace(/٫/g, '.').replace(/٬/g, ',');

  function animateCounter(el) {
    const original = el.textContent.trim();
    const latin = toLatin(original);
    const m = latin.match(/\d[\d,]*(?:\.\d+)?/);
    if (!m) return;
    const usesArabic = /[٠-٩]/.test(original);
    const target = parseFloat(m[0].replace(/,/g, ''));
    const decimals = (m[0].split('.')[1] || '').length;
    const grouped = m[0].includes(',');
    const before = original.slice(0, m.index), after = original.slice(m.index + m[0].length);
    const fmt = v => {
      let s = v.toFixed(decimals);
      if (grouped) s = Number(s).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      if (usesArabic) s = s.replace(/\d/g, d => AR_DIGITS[d]).replace(/\./g, '٫').replace(/,/g, '٬');
      return before + s + after;
    };
    const dur = 1600, t0 = performance.now();
    el.style.minWidth = el.offsetWidth + 'px';
    const tick = now => {
      const t = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = fmt(target * eased);
      if (t < 1) requestAnimationFrame(tick);
      else { el.textContent = original; el.style.minWidth = ''; }
    };
    el.textContent = fmt(0);
    requestAnimationFrame(tick);
  }

  const counterIO = ('IntersectionObserver' in window)
    ? new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          counterIO.unobserve(e.target);
          animateCounter(e.target);
        });
      }, { threshold: 0.6 })
    : null;

  function initCounters(scope) {
    scope.querySelectorAll('[data-elva-count]').forEach(el => {
      if (el.dataset.elvaInit) return;
      el.dataset.elvaInit = '1';
      if (motionOn && !reduce && counterIO) counterIO.observe(el);
    });
  }

  /* ---------------- boot + editor re-renders ---------------- */
  function scan(scope) {
    scope = scope || document;
    tagThemeSections(document);
    scope.querySelectorAll('[data-elva-hero]').forEach(initHero);
    scope.querySelectorAll('[data-elva-statement]').forEach(initStatement);
    initCounters(scope);
    setupReveals(scope);
  }

  scan(document);

  if ('MutationObserver' in window) {
    let pending = false;
    new MutationObserver(muts => {
      if (pending || !muts.some(m => m.addedNodes.length)) return;
      pending = true;
      requestAnimationFrame(() => { pending = false; scan(document); });
    }).observe(document.body, { childList: true, subtree: true });
  }
})();
