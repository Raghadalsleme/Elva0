/**
 * ELVA welcome offer — a native <dialog> that shows a discount code once per visitor
 * (or once per visit). Two styles:
 *  - scratch: the code hides under a plum foil the shopper scratches off (mouse or finger)
 *  - reveal:  a button flips the card to show the code
 * The code itself is a real Salla coupon the merchant creates in the dashboard;
 * the theme only displays it.
 */

const SCRATCH_RADIUS = 22;
const REVEAL_AT = 0.45; // share of foil removed before the rest falls away

function store(kind) {
  try { return kind === 'session' ? window.sessionStorage : window.localStorage; } catch (e) { return null; }
}

function seen(key, kind) {
  try { return !!store(kind)?.getItem(key); } catch (e) { return false; }
}

function markSeen(key, kind) {
  try { store(kind)?.setItem(key, '1'); } catch (e) { /* private mode: show again next time */ }
}

function drawFoil(canvas, label) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.round(rect.width * ratio));
  canvas.height = Math.max(1, Math.round(rect.height * ratio));
  const ctx = canvas.getContext('2d');
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const g = ctx.createLinearGradient(0, 0, rect.width, rect.height);
  g.addColorStop(0, '#6E3F61');
  g.addColorStop(0.5, '#4B1D3F');
  g.addColorStop(1, '#33122B');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, rect.width, rect.height);

  // a fine diamond pattern, the ELVA ornament
  ctx.fillStyle = 'rgba(231, 218, 192, 0.12)';
  for (let y = 10; y < rect.height; y += 18) {
    for (let x = (y / 18) % 2 ? 9 : 0; x < rect.width; x += 18) {
      ctx.beginPath();
      ctx.moveTo(x, y - 3); ctx.lineTo(x + 3, y); ctx.lineTo(x, y + 3); ctx.lineTo(x - 3, y);
      ctx.closePath(); ctx.fill();
    }
  }

  ctx.fillStyle = '#E7DAC0';
  ctx.font = `600 15px ${getComputedStyle(document.body).fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, rect.width / 2, rect.height / 2);
  return ctx;
}

function clearedShare(canvas, ctx) {
  const { width, height } = canvas;
  const data = ctx.getImageData(0, 0, width, height).data;
  let clear = 0, total = 0;
  const step = 4 * 12; // sample every 12th pixel
  for (let i = 3; i < data.length; i += step) {
    total++;
    if (data[i] === 0) clear++;
  }
  return total ? clear / total : 0;
}

export function initPromo() {
  const dialog = document.querySelector('dialog[data-elva-promo]');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const code = dialog.dataset.code || '';
  const kind = dialog.dataset.frequency === 'session' ? 'session' : 'local';
  const key = `elva:promo:${code}`;
  if (!code || seen(key, kind)) return;

  const card = dialog.querySelector('.elva-promo__card');
  const codeEl = dialog.querySelector('.elva-promo__code');
  const canvas = dialog.querySelector('.elva-promo__scratch');
  const copyBtn = dialog.querySelector('[data-elva-promo-copy]');
  const revealBtn = dialog.querySelector('[data-elva-promo-reveal]');
  const status = dialog.querySelector('.elva-promo__status');
  let revealed = false;
  let lastFocus = null;

  const reveal = () => {
    if (revealed) return;
    revealed = true;
    card.classList.add('is-revealed');
    codeEl.removeAttribute('aria-hidden');
    copyBtn.disabled = false;
    revealBtn?.setAttribute('hidden', '');
    if (status) status.textContent = `${dialog.dataset.revealedText || ''} ${code}`;
    markSeen(key, kind);
    copyBtn.focus();
  };

  const close = () => dialog.close();
  dialog.querySelector('[data-elva-promo-close]')?.addEventListener('click', close);
  dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });
  dialog.addEventListener('close', () => {
    markSeen(key, kind);
    document.documentElement.classList.remove('elva-promo-open');
    lastFocus?.focus?.();
  });

  revealBtn?.addEventListener('click', reveal);

  copyBtn.addEventListener('click', async () => {
    let ok = false;
    try { await navigator.clipboard.writeText(code); ok = true; } catch (e) {
      // fallback: select the code so the shopper can copy it
      const range = document.createRange();
      range.selectNodeContents(codeEl);
      const sel = window.getSelection();
      sel.removeAllRanges(); sel.addRange(range);
    }
    if (ok) {
      copyBtn.classList.add('is-copied');
      copyBtn.textContent = dialog.dataset.copiedText || '✓';
      if (status) status.textContent = dialog.dataset.copiedText || '';
    }
  });

  const open = () => {
    lastFocus = document.activeElement;
    document.documentElement.classList.add('elva-promo-open');
    dialog.showModal();

    if (canvas && dialog.dataset.style === 'scratch') {
      const ctx = drawFoil(canvas, dialog.dataset.scratchText || '');
      let drawing = false, moves = 0;
      const scratch = (e) => {
        const r = canvas.getBoundingClientRect();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(e.clientX - r.left, e.clientY - r.top, SCRATCH_RADIUS, 0, Math.PI * 2);
        ctx.fill();
        if (++moves % 6 === 0 && clearedShare(canvas, ctx) > REVEAL_AT) reveal();
      };
      canvas.addEventListener('pointerdown', (e) => { drawing = true; canvas.setPointerCapture?.(e.pointerId); scratch(e); });
      canvas.addEventListener('pointermove', (e) => { if (drawing) scratch(e); });
      ['pointerup', 'pointercancel', 'pointerleave'].forEach((t) => canvas.addEventListener(t, () => { drawing = false; }));
    }
  };

  const delay = Math.max(0, Number(dialog.dataset.delay) || 0) * 1000;
  window.setTimeout(open, delay);
}
