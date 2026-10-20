const HISTORY_KEY = 'elva:recent:v1';
const MAX_ITEMS = 12;
const MAX_AGE = 30 * 24 * 60 * 60 * 1000;

export function countdownParts(end, now = Date.now()) {
  const seconds = Math.max(0, Math.ceil((end - now) / 1000));
  return { days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24,
    minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60 };
}

export function updateHistory(items, current, now = Date.now()) {
  const valid = (Array.isArray(items) ? items : []).filter(item => item && item.id &&
    typeof item.name === 'string' && typeof item.url === 'string' &&
    Number.isFinite(item.time) && now - item.time < MAX_AGE && item.time <= now);
  const combined = current ? [{ ...current, time: now }, ...valid] : valid;
  const ids = new Set();
  return combined.filter(item => {
    const id = String(item.id);
    if (ids.has(id)) return false;
    ids.add(id); return true;
  }).slice(0, MAX_ITEMS);
}

function safeURL(value, sameOrigin = false) {
  try {
    const url = new URL(value, location.origin);
    return /^https?:$/.test(url.protocol) && (!sameOrigin || url.origin === location.origin) ? url.href : '';
  } catch (_) { return ''; }
}

function initRecent() {
  const section = document.querySelector('[data-elva-recent]');
  if (!section) return;
  const current = document.querySelector('[data-elva-current-product]');
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); } catch (_) { /* unavailable or corrupt storage */ }
  const history = updateHistory(saved, current ? { id: current.dataset.id, name: current.dataset.name,
    url: current.dataset.url, image: current.dataset.image } : null);
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); } catch (_) { /* browsing remains available */ }
  const list = section.querySelector('[data-elva-recent-list]');
  history.filter(item => item.id !== current?.dataset.id).slice(0, 8).forEach(item => {
    const url = safeURL(item.url, true);
    if (!url) return;
    const card = document.createElement('a');
    card.className = 'elva-recent__card'; card.href = url;
    const imageURL = item.image ? safeURL(item.image) : '';
    if (imageURL) {
      const image = document.createElement('img');
      image.src = imageURL; image.alt = ''; image.loading = 'lazy';
      card.appendChild(image);
    }
    const name = document.createElement('span'); name.textContent = item.name;
    card.appendChild(name); list.appendChild(card);
  });
  section.hidden = !list.children.length;
  section.querySelector('[data-elva-recent-clear]').addEventListener('click', () => {
    try { localStorage.removeItem(HISTORY_KEY); } catch (_) { /* no storage */ }
    list.replaceChildren(); section.hidden = true;
  });
}

export function initExtras() {
  document.querySelectorAll('[data-elva-ticker-pause]').forEach(button => {
    button.addEventListener('click', () => {
      const paused = button.getAttribute('aria-pressed') !== 'true';
      button.setAttribute('aria-pressed', String(paused));
      button.closest('.elva-announcement').classList.toggle('is-paused', paused);
    });
  });
  document.querySelectorAll('[data-elva-countdown]').forEach(section => {
    const value = section.dataset.end || '';
    // Require an explicit offset so all shoppers see the same deadline.
    const end = /T\d{2}:\d{2}(:\d{2})?(Z|[+-]\d{2}:\d{2})$/.test(value) ? Date.parse(value) : NaN;
    if (!Number.isFinite(end) || end <= Date.now()) return;
    let timer;
    const tick = () => {
      if (Date.now() >= end) { section.hidden = true; clearInterval(timer); return; }
      const parts = countdownParts(end);
      section.querySelectorAll('[data-unit]').forEach(el => { el.textContent = String(parts[el.dataset.unit]).padStart(2, '0'); });
      section.hidden = false;
    };
    tick(); timer = setInterval(tick, 1000);
  });
  initRecent();
}
