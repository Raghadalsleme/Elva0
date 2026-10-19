import BasePage from '../base-page';
import { settings, t, icon, escapeHTML, discountPercent } from './elva-ui';
import { openQuickView } from './elva-quick-view';

class ProductCard extends HTMLElement {
  constructor(){
    super()
  }
  
  connectedCallback(){
    // Parse product data
    this.product = this.product || JSON.parse(this.getAttribute('product')); 

    if (window.app?.status === 'ready') {
      this.onReady();
    } else {
      document.addEventListener('theme::ready', () => this.onReady() )
    }
  }

  onReady(){
      this.fitImageHeight = salla.config.get('store.settings.product.fit_type');
      this.placeholder = salla.url.asset(salla.config.get('theme.settings.placeholder'));
      this.getProps()

      salla.lang.onLoaded(() => {
        // Language
        this.remained = salla.lang.get('pages.products.remained');
        this.donationAmount = salla.lang.get('pages.products.donation_amount');
        this.startingPrice = salla.lang.get('pages.products.starting_price');
        this.addToCart = salla.lang.get('pages.cart.add_to_cart');
        this.outOfStock = salla.lang.get('pages.products.out_of_stock');

        // re-render to update translations
        this.render();
      })
      
      this.render()
  }

  initCircleBar() {
    let qty = this.product.quantity,
      total = this.product.quantity > 100 ? this.product.quantity * 2 : 100,
      roundPercent = (qty / total) * 100,
      bar = this.querySelector('.s-product-card-content-pie-svg-bar'),
      strokeDashOffsetValue = 100 - roundPercent;
    bar.style.strokeDashoffset = strokeDashOffsetValue;
  }

  formatDate(date) {
    let d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  } 

  getProductBadge() {
    if (this.product?.preorder?.label) {
      return `<div class="s-product-card-promotion-title">${this.product.preorder.label}</div>`
    }

    if (this.product.promotion_title) {
      return `<div class="s-product-card-promotion-title">${this.product.promotion_title}</div>`
    }
    if (this.showQuantity && this.product?.quantity) {
      return `<div
        class="s-product-card-quantity">${this.remained} ${salla.helpers.number(this.product?.quantity)}</div>`
    }
    if (this.showQuantity && this.product?.is_out_of_stock) {
      return `<div class="s-product-card-out-badge">${this.outOfStock}</div>`
    }
    return '';
  }

  getPriceFormat(price) {
    if (!price || price == 0) {
      return salla.config.get('store.settings.product.show_price_as_dash')?'-':'';
    }

    return salla.money(price);
  }

  getProductPrice() {
    let price = '';
    if (this.product.is_on_sale) {
      price = `<div class="s-product-card-sale-price">
                <h4>${this.getPriceFormat(this.product.sale_price)}</h4>
                <span>${this.getPriceFormat(this.product?.regular_price)}</span>
              </div>`;
    }
    else if (this.product.starting_price) {
      price = `<div class="s-product-card-starting-price">
                  <p>${this.startingPrice}</p>
                  <h4> ${this.getPriceFormat(this.product?.starting_price)} </h4>
              </div>`
    }
    else{
      price = `<h4 class="s-product-card-price">${this.getPriceFormat(this.product?.price)}</h4>`
    }

    return price;
  }

  getAddButtonLabel() {
    if(this.product.has_preorder_campaign) {
        return salla.lang.get('pages.products.pre_order_now');
    }

    if (this.product.status === 'sale' && this.product.type === 'booking') {
      return salla.lang.get('pages.cart.book_now');
    }

    if (this.product.status === 'sale') {
      return salla.lang.get('pages.cart.add_to_cart');
    }

    if (this.product.type !== 'donating') {
      return salla.lang.get('pages.products.out_of_stock');
    }

    // donating
    return salla.lang.get('pages.products.donation_exceed');
  }

  getProps(){

    /**
     *  Horizontal card.
     */
    this.horizontal = this.hasAttribute('horizontal');
  
    /**
     *  Support shadow on hover.
     */
    this.shadowOnHover = this.hasAttribute('shadowOnHover');
  
    /**
     *  Hide add to cart button.
     */
    this.hideAddBtn = this.hasAttribute('hideAddBtn');
  
    /**
     *  Full image card.
     */
    this.fullImage = this.hasAttribute('fullImage');
  
    /**
     *  Minimal card.
     */
    this.minimal = this.hasAttribute('minimal');
  
    /**
     *  Special card.
     */
    this.isSpecial = this.hasAttribute('isSpecial');
  
    /**
     *  Show quantity.
     */
    this.showQuantity = this.hasAttribute('showQuantity');
  }

  escapeHTML(str = '') {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  }

  /**
   * ELVA renders its own card for standard grid/slider cards; special layouts
   * (horizontal, full image, minimal, special offer, donation) keep the base markup.
   */
  usesElvaCard() {
    return !this.horizontal && !this.fullImage && !this.minimal && !this.isSpecial && !this.product?.donation;
  }

  elvaImages() {
    const main = this.product?.image?.url || this.product?.thumbnail || '';
    const list = (this.product?.images || [])
      .filter((img) => img && img.url && (img.type || 'image') === 'image' && !img.video_url);
    const second = list.find((img) => img.url !== main);
    return { main: main || list[0]?.url || this.placeholder || '', second: second?.url || '' };
  }

  elvaBadges() {
    const p = this.product;
    const badges = [];
    if (p?.preorder?.label) badges.push(['note', p.preorder.label]);
    else if (p?.promotion_title) badges.push(['note', p.promotion_title]);
    const pct = discountPercent(p);
    if (pct) badges.push(['sale', `-${pct}%`]);
    if (p?.is_out_of_stock) badges.push(['out', this.outOfStock || t('sold_out')]);
    if (!badges.length) return '';
    return `<div class="elva-pcard__badges">${badges
      .map(([kind, text]) => `<span class="elva-pcard__badge elva-pcard__badge--${kind}"${kind === 'sale' ? ' dir="ltr"' : ''}>${escapeHTML(text)}</span>`)
      .join('')}</div>`;
  }

  elvaPrice() {
    const p = this.product;
    if (p.is_on_sale) {
      return `<div class="elva-pcard__price">
          <span class="elva-pcard__price-now">${this.getPriceFormat(p.sale_price)}</span>
          <span class="elva-pcard__price-was">${this.getPriceFormat(p?.regular_price)}</span>
        </div>`;
    }
    if (p.starting_price) {
      return `<div class="elva-pcard__price">
          <span class="elva-pcard__price-from">${this.startingPrice || ''}</span>
          <span class="elva-pcard__price-now">${this.getPriceFormat(p.starting_price)}</span>
        </div>`;
    }
    return `<div class="elva-pcard__price"><span class="elva-pcard__price-now">${this.getPriceFormat(p?.price)}</span></div>`;
  }

  elvaAddButton(extraClass = '') {
    if (this.hideAddBtn) return '';
    const p = this.product;
    return `<div class="elva-pcard__add ${extraClass}">
        <salla-add-product-button width="wide"
          product-id="${p.id}"
          product-status="${this.effectiveStatus}"
          product-type="${escapeHTML(p.type)}">
          ${p.status == 'sale' ? `<i class="text-base sicon-${p.type == 'booking' ? 'calendar-time' : 'shopping-bag'}" aria-hidden="true"></i>` : ''}
          <span>${escapeHTML(p.add_to_cart_label ? p.add_to_cart_label : this.getAddButtonLabel())}</span>
        </salla-add-product-button>
      </div>`;
  }

  renderElva() {
    const s = settings();
    const p = this.product;
    const style = ['editorial', 'classic', 'overlay'].includes(s.cardStyle) ? s.cardStyle : 'editorial';
    const { main, second } = this.elvaImages();
    const hoverImage = s.cardHoverImage && second;
    const fit = salla.url.is_placeholder(main) ? 'contain' : (this.fitImageHeight || 'cover');
    const name = escapeHTML(p?.name);
    const alt = escapeHTML(p?.image?.alt || p?.name);
    const wishlistClass = this.isInWishlist ? 's-product-card-wishlist-added pulse-anime' : 'not-added un-favorited';

    this.classList.add('s-product-card-entry', 'elva-pcard-host');
    this.classList.toggle('s-product-card-out-of-stock', !!p?.is_out_of_stock);
    this.setAttribute('id', p.id);
    this.style.setProperty('--elva-ratio', s.cardRatio || '3/4');

    this.innerHTML = `
      <article class="elva-pcard elva-pcard--${style}${hoverImage ? ' elva-pcard--has-alt' : ''}${p?.is_out_of_stock ? ' elva-pcard--out' : ''}">
        <div class="elva-pcard__media">
          <a class="elva-pcard__frame" href="${p?.url}" aria-label="${name}">
            <img class="elva-pcard__img elva-pcard__img--main elva-fit-${fit}" src="${escapeHTML(main)}" alt="${alt}" loading="lazy">
            ${hoverImage ? `<img class="elva-pcard__img elva-pcard__img--alt elva-fit-${fit}" src="${escapeHTML(second)}" alt="" aria-hidden="true" loading="lazy">` : ''}
            ${style === 'overlay' ? `<span class="elva-pcard__shade" aria-hidden="true"></span>` : ''}
          </a>
          ${this.elvaBadges()}
          <div class="elva-pcard__tools">
            <salla-button shape="icon" fill="outline" color="light"
              name="product-name-${p.id}"
              aria-label="Add or remove to wishlist"
              class="s-product-card-wishlist-btn elva-pcard__tool animated ${wishlistClass}"
              onclick="salla.wishlist.toggle(${p.id})"
              data-id="${p.id}">
              <i class="sicon-heart"></i>
            </salla-button>
            ${s.cardQuickView ? `<button type="button" class="elva-pcard__tool elva-pcard__qv" aria-label="${t('quick_view')}">${icon('eye', 18)}</button>` : ''}
          </div>
          ${style !== 'classic' ? this.elvaAddButton('elva-pcard__add--hover') : ''}
        </div>
        <div class="elva-pcard__body">
          <h3 class="elva-pcard__title"><a href="${p?.url}">${name}</a></h3>
          ${p?.subtitle ? `<p class="elva-pcard__subtitle">${escapeHTML(p.subtitle)}</p>` : ''}
          <div class="elva-pcard__meta">
            ${this.elvaPrice()}
            ${p?.rating?.stars ? `<span class="elva-pcard__rating"><i class="sicon-star2" aria-hidden="true"></i>${p.rating.stars}</span>` : ''}
          </div>
          ${style === 'classic' ? this.elvaAddButton() : this.elvaAddButton('elva-pcard__add--touch')}
        </div>
      </article>`;

    this.querySelector('.elva-pcard__qv')?.addEventListener('click', (e) => {
      openQuickView(this.product, e.currentTarget, {
        addLabel: this.getAddButtonLabel(),
        money: (v) => this.getPriceFormat(v),
      });
    });

    this.querySelectorAll('.s-product-card-wishlist-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const willBeAdded = !btn.classList.contains('s-product-card-wishlist-added');
        app.toggleElementClassIf(btn, 's-product-card-wishlist-added', 'not-added', () => willBeAdded);
        app.toggleElementClassIf(btn, 'pulse-anime', 'un-favorited', () => willBeAdded);
      });
    });
  }

  render(){
    this.isInWishlist = !salla.config.isGuest() && salla.storage.get('salla::wishlist', []).includes(Number(this.product.id));
    this.effectiveStatus = (this.product.is_out_of_stock && window.notify_when_available_in_card && !['donating', 'financial_support'].includes(this.product?.type))
      ? 'out-and-notify'
      : this.product.status;
    if (this.usesElvaCard()) {
      return this.renderElva();
    }

    this.classList.add('s-product-card-entry');
    this.setAttribute('id', this.product.id);
    !this.horizontal && !this.fullImage && !this.minimal? this.classList.add('s-product-card-vertical') : '';
    this.horizontal && !this.fullImage && !this.minimal? this.classList.add('s-product-card-horizontal') : '';
    this.fitImageHeight && !this.isSpecial && !this.fullImage && !this.minimal? this.classList.add('s-product-card-fit-height') : '';
    this.isSpecial? this.classList.add('s-product-card-special') : '';
    this.fullImage? this.classList.add('s-product-card-full-image') : '';
    this.minimal? this.classList.add('s-product-card-minimal') : '';
    this.product?.donation?  this.classList.add('s-product-card-donation') : '';
    this.shadowOnHover?  this.classList.add('s-product-card-shadow') : '';
    this.product?.is_out_of_stock?  this.classList.add('s-product-card-out-of-stock') : '';
    this.isInWishlist = !salla.config.isGuest() && salla.storage.get('salla::wishlist', []).includes(Number(this.product.id));
    this.effectiveStatus = (this.product.is_out_of_stock && window.notify_when_available_in_card && !['donating', 'financial_support'].includes(this.product?.type))
      ? 'out-and-notify'
      : this.product.status;
      this.innerHTML = `
        <div class="${!this.fullImage ? 's-product-card-image' : 's-product-card-image-full'}">
          <a href="${this.product?.url}" aria-label="${this.escapeHTML(this.product?.image?.alt || this.product.name)}">
           <img 
              class="s-product-card-image-${salla.url.is_placeholder(this.product?.image?.url)
                ? 'contain'
                : this.fitImageHeight
                ? this.fitImageHeight
                : 'cover'}"
              src="${this.product?.image?.url || this.product?.thumbnail || this.placeholder || ''}"
              alt="${this.escapeHTML(this.product?.image?.alt || this.product.name)}"
              loading="lazy"
            />
            ${!this.fullImage && !this.minimal ? this.getProductBadge() : ''}
          </a>
          ${this.fullImage ? `<a href="${this.product?.url}" aria-label=${this.product.name} class="s-product-card-overlay"></a>`:''}
          ${!this.horizontal && !this.fullImage ?
            `<salla-button
              shape="icon"
              fill="outline"
              color="light"
              name="product-name-${this.product.id}"
              aria-label="Add or remove to wishlist"
              class="s-product-card-wishlist-btn animated ${this.isInWishlist ? 's-product-card-wishlist-added pulse-anime' : 'not-added un-favorited'}"
              onclick="salla.wishlist.toggle(${this.product.id})"
              data-id="${this.product.id}">
              <i class="sicon-heart"></i>
            </salla-button>` : ``
          }
        </div>
        <div class="s-product-card-content">
          ${this.isSpecial && this.product?.quantity ?
            `<div class="s-product-card-content-pie">
              <span>
                <b>${salla.helpers.number(this.product?.quantity)}</b>
                ${this.remained}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1 36 34" class="s-product-card-content-pie-svg">
                <circle cx="16" cy="16" r="15.9155" class="s-product-card-content-pie-svg-base" />
                <circle cx="16" cy="16" r="15.9155" class="s-product-card-content-pie-svg-bar" />
              </svg>
            </div>`
            : ``}

          <div class="s-product-card-content-main ${this.isSpecial ? 's-product-card-content-extra-padding' : ''}">
            <h3 class="s-product-card-content-title">
              <a href="${this.product?.url}">${this.product?.name}</a>
            </h3>

            ${this.product?.subtitle && !this.minimal ?
              `<p class="s-product-card-content-subtitle opacity-80">${this.product?.subtitle}</p>`
              : ``}
          </div>
          ${this.product?.donation && !this.minimal && !this.fullImage ?
          `<salla-progress-bar donation=${JSON.stringify(this.product?.donation)}></salla-progress-bar>
          <div class="s-product-card-donation-input">
            ${this.product?.donation?.can_donate && this.product?.donation?.custom_amount_enabled  ?
              `<label for="donation-amount-${this.product.id}">${this.donationAmount} <span>*</span></label>
              <input
                type="text"
                onInput="${e => {
                  salla.helpers.inputDigitsOnly(e.target);
                  this.addBtn.donatingAmount = (e.target).value;
                }}"
                id="donation-amount-${this.product.id}"
                name="donating_amount"
                class="s-form-control"
                placeholder="${this.donationAmount}" />`
              : ``}
          </div>`
            : ''}
          <div class="s-product-card-content-sub ${this.isSpecial ? 's-product-card-content-extra-padding' : ''}">
            ${this.product?.donation?.can_donate ? '' : this.getProductPrice()}
            ${this.product?.rating?.stars ?
              `<div class="s-product-card-rating">
                <i class="sicon-star2 before:text-orange-300"></i>
                <span>${this.product.rating.stars}</span>
              </div>`
               : ``}
          </div>

          ${this.isSpecial && this.product.discount_ends
            ? `<salla-count-down date="${this.formatDate(this.product.discount_ends)}" end-of-day=${true} boxed=${true}
              labeled=${true} />`
            : ``}


          ${!this.hideAddBtn ?
            `<div class="s-product-card-content-footer gap-2">
              <salla-add-product-button fill="outline" width="wide"
                product-id="${this.product.id}"
                product-status="${this.effectiveStatus}"
                product-type="${this.product.type}">
                ${this.product.status == 'sale' ?
                    `<i class="text-base sicon-${ this.product.type == 'booking' ? 'calendar-time' : 'shopping-bag'}"></i>` : ``
                  }
                <span>${this.product.add_to_cart_label ? this.product.add_to_cart_label : this.getAddButtonLabel() }</span>
              </salla-add-product-button>

              ${this.horizontal || this.fullImage ?
                `<salla-button 
                  shape="icon" 
                  fill="outline" 
                  color="light" 
                  id="card-wishlist-btn-${this.product.id}-horizontal"
                  aria-label="Add or remove to wishlist"
                  class="s-product-card-wishlist-btn animated ${this.isInWishlist ? 's-product-card-wishlist-added pulse-anime' : 'not-added un-favorited'}"
                  onclick="salla.wishlist.toggle(${this.product.id})"
                  data-id="${this.product.id}">
                  <i class="sicon-heart"></i> 
                </salla-button>`
                : ``}
            </div>`
            : ``}
        </div>
      `

      this.querySelectorAll('[name="donating_amount"]').forEach((element)=>{
        element.addEventListener('input', (e) => {
          e.target
            .closest(".s-product-card-content")
            .querySelector("salla-add-product-button")
            .setAttribute("donating-amount", e.target.value); 
        });
      })

      if (this.product?.quantity && this.isSpecial) {
        this.initCircleBar();
      }

      // Optimistic & Per-card wishlist toggle
      this.querySelectorAll('.s-product-card-wishlist-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const willBeAdded = !btn.classList.contains('s-product-card-wishlist-added');
          app.toggleElementClassIf(btn, 's-product-card-wishlist-added', 'not-added', () => willBeAdded);
          app.toggleElementClassIf(btn, 'pulse-anime', 'un-favorited', () => willBeAdded);
        });
      });
    }
}

customElements.define('custom-salla-product-card', ProductCard);
