/**
 * ELVA quick view — a native <dialog> that previews a product from its card:
 * image gallery with thumbnails, name, price, rating, add-to-cart and a link to the full page.
 */
import { t, icon, escapeHTML, discountPercent } from './elva-ui';

let dialog = null;
let lastTrigger = null;

function ensureDialog() {
  if (dialog) return dialog;
  dialog = document.createElement('dialog');
  dialog.className = 'elva-qv';
  dialog.setAttribute('aria-labelledby', 'elva-qv-title');
  document.body.appendChild(dialog);

  // close on backdrop click
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('elva-qv-open');
    lastTrigger?.focus?.();
  });
  return dialog;
}

function price(product, money) {
  const pct = discountPercent(product);
  if (product.is_on_sale) {
    return `<div class="elva-qv__price">
        <span class="elva-qv__price-now">${money(product.sale_price)}</span>
        <span class="elva-qv__price-was">${money(product.regular_price)}</span>
        ${pct ? `<span class="elva-qv__price-badge" dir="ltr">-${pct}%</span>` : ''}
      </div>`;
  }
  const value = product.starting_price || product.price;
  return `<div class="elva-qv__price"><span class="elva-qv__price-now">${value ? money(value) : ''}</span></div>`;
}

export function openQuickView(product, trigger, { addLabel = '', money = (v) => v } = {}) {
  if (!product) return;
  lastTrigger = trigger || null;
  const d = ensureDialog();

  const images = (product.images || [])
    .filter((i) => i && i.url && (i.type || 'image') === 'image');
  if (!images.length) {
    const url = product?.image?.url || product?.thumbnail;
    if (url) images.push({ url, alt: product?.image?.alt || product.name });
  }
  const name = escapeHTML(product.name);

  d.innerHTML = `
    <div class="elva-qv__panel">
      <button type="button" class="elva-qv__close" data-qv-close aria-label="${t('close')}">${icon('close', 22)}</button>
      <div class="elva-qv__gallery">
        <div class="elva-qv__stage">
          ${images.map((img, i) => `<img class="elva-qv__img${i === 0 ? ' is-active' : ''}" src="${escapeHTML(img.url)}" alt="${escapeHTML(img.alt || product.name)}" ${i ? 'loading="lazy"' : ''}>`).join('')}
          ${images.length > 1 ? `
            <button type="button" class="elva-qv__nav elva-qv__nav--prev" data-qv-step="-1" aria-label="${t('previous_image')}">${icon('chevronStart', 20)}</button>
            <button type="button" class="elva-qv__nav elva-qv__nav--next" data-qv-step="1" aria-label="${t('next_image')}">${icon('chevronEnd', 20)}</button>` : ''}
        </div>
        ${images.length > 1 ? `<div class="elva-qv__thumbs">
          ${images.slice(0, 6).map((img, i) => `<button type="button" class="elva-qv__thumb${i === 0 ? ' is-active' : ''}" data-qv-go="${i}" aria-label="${i + 1}"><img src="${escapeHTML(img.url)}" alt="" loading="lazy"></button>`).join('')}
        </div>` : ''}
      </div>
      <div class="elva-qv__info">
        <h2 class="elva-qv__title" id="elva-qv-title">${name}</h2>
        ${product.subtitle ? `<p class="elva-qv__subtitle">${escapeHTML(product.subtitle)}</p>` : ''}
        ${price(product, money)}
        ${product?.rating?.stars ? `<div class="elva-qv__rating"><i class="sicon-star2" aria-hidden="true"></i> <span>${product.rating.stars}</span></div>` : ''}
        <div class="elva-qv__actions">
          <salla-add-product-button width="wide"
            product-id="${product.id}"
            product-status="${escapeHTML(product.status)}"
            product-type="${escapeHTML(product.type)}">
            <span>${escapeHTML(product.add_to_cart_label || addLabel)}</span>
          </salla-add-product-button>
          <a class="elva-qv__details" href="${escapeHTML(product.url)}">${t('view_details')}</a>
        </div>
      </div>
    </div>`;

  let index = 0;
  const imgs = Array.from(d.querySelectorAll('.elva-qv__img'));
  const thumbs = Array.from(d.querySelectorAll('.elva-qv__thumb'));
  const go = (i) => {
    if (!imgs.length) return;
    index = (i + imgs.length) % imgs.length;
    imgs.forEach((el, k) => el.classList.toggle('is-active', k === index));
    thumbs.forEach((el, k) => el.classList.toggle('is-active', k === index));
  };
  d.querySelectorAll('[data-qv-step]').forEach((b) => b.addEventListener('click', () => {
    // in RTL "previous" visually points right, logic stays the same
    go(index + Number(b.dataset.qvStep));
  }));
  thumbs.forEach((b) => b.addEventListener('click', () => go(Number(b.dataset.qvGo))));
  d.querySelector('[data-qv-close]').addEventListener('click', () => d.close());

  document.documentElement.classList.add('elva-qv-open');
  if (typeof d.showModal === 'function') d.showModal();
  else d.setAttribute('open', '');
  d.querySelector('[data-qv-close]').focus();
}
