/**
 * ELVA shared UI helpers: theme settings, translations with safe fallbacks, inline icons.
 */

/** Theme settings exposed by layouts/master.twig as window.elvaSettings */
export const settings = () => Object.assign({
  cardStyle: 'editorial',
  cardRatio: '3/4',
  cardHoverImage: true,
  cardQuickView: true,
}, window.elvaSettings || {});

const FALLBACK = {
  quick_view: ['عرض سريع', 'Quick view'],
  view_details: ['عرض التفاصيل الكاملة', 'View full details'],
  close: ['إغلاق', 'Close'],
  off: ['خصم', 'off'],
  sold_out: ['نفدت الكمية', 'Sold out'],
  grid_view: ['عدد الأعمدة', 'Columns'],
  filter: ['تصفية', 'Filter'],
  previous_image: ['الصورة السابقة', 'Previous image'],
  next_image: ['الصورة التالية', 'Next image'],
  main_menu: ['القائمة الرئيسية', 'Main menu'],
  search: ['بحث', 'Search'],
  products: ['المنتجات', 'Products'],
};

/** Translate `blocks.elva.<key>`; falls back to built-in Arabic/English text */
export function t(key) {
  const full = `blocks.elva.${key}`;
  let value = null;
  try { value = window.salla?.lang?.get(full); } catch (e) { value = null; }
  if (value && value !== full) return value;
  const isAr = (document.documentElement.lang || 'ar').toLowerCase().startsWith('ar');
  const pair = FALLBACK[key];
  return pair ? pair[isAr ? 0 : 1] : key;
}

const PATHS = {
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  chevronStart: '<path d="M9 6l6 6-6 6"/>',
  chevronEnd: '<path d="M15 6l-6 6 6 6"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17.5" cy="17.5" r="1.6"/>',
  returns: '<path d="M4 9h11a5 5 0 010 10H9"/><path d="M8 5L4 9l4 4"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  grid2: '<rect x="4" y="4" width="7" height="16" rx="1"/><rect x="13" y="4" width="7" height="16" rx="1"/>',
  grid3: '<rect x="3" y="4" width="5" height="16" rx="1"/><rect x="9.5" y="4" width="5" height="16" rx="1"/><rect x="16" y="4" width="5" height="16" rx="1"/>',
  grid4: '<rect x="2.5" y="4" width="4" height="16" rx="1"/><rect x="7.5" y="4" width="4" height="16" rx="1"/><rect x="12.5" y="4" width="4" height="16" rx="1"/><rect x="17.5" y="4" width="4" height="16" rx="1"/>',
};

/** Inline stroke icon; decorative unless a label is given */
export function icon(name, size = 20, label = '') {
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"';
  return `<svg class="elva-icon elva-icon--${name}" ${a11y} width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${PATHS[name] || ''}</svg>`;
}

export function escapeHTML(str = '') {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Whole-number discount percentage, or 0 */
export function discountPercent(product) {
  const regular = Number(product?.regular_price);
  const sale = Number(product?.sale_price);
  if (!product?.is_on_sale || !regular || !sale || sale >= regular) return 0;
  return Math.round((1 - sale / regular) * 100);
}

export function safeStorage(key, value) {
  try {
    if (value === undefined) return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
  } catch (e) { return null; }
  return value;
}
