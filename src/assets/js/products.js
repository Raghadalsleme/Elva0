import BasePage from './base-page';
import MobileMenu from 'mmenu-light';
import { safeStorage } from './partials/elva-ui';
class Products extends BasePage {
    onReady() {
        let productsList = app.element('salla-products-list'),
            urlParams = new URLSearchParams(window.location.search)


        // Set Sort
        if (urlParams.has('sort')) {
            app.element('#product-filter').value = urlParams.get('sort');
        }


        // Sort Products
        app.on('change', '#product-filter', async event => {
            window.history.replaceState(null, null, salla.helpers.addParamToUrl('sort', event.currentTarget.value));
            productsList.sortBy = event.currentTarget.value;
            await productsList.reload();
            productsList.setAttribute('filters', `{"sort": "${event.currentTarget.value}"}`)
        });

        salla.event.on('salla-products-list::products.fetched', res=>{
            res.title && (app.element('#page-main-title').innerHTML = res.title);
        });


        this.initiateMobileMenu()
        this.initColumnSwitcher()
    }

    /**
     * ELVA column switcher: 2 / 3 / 4 products per row on large screens,
     * remembered per visitor (falls back to the theme default when storage is unavailable).
     */
    initColumnSwitcher() {
        const wrap = document.querySelector('.elva-cat');
        if (!wrap) return;
        const buttons = wrap.querySelectorAll('[data-elva-cols]');
        const apply = (n) => {
            wrap.dataset.cols = n;
            buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.elvaCols === String(n))));
        };
        apply(safeStorage('elva:cols') || wrap.dataset.cols || '3');
        buttons.forEach((b) => b.addEventListener('click', () => {
            apply(b.dataset.elvaCols);
            safeStorage('elva:cols', b.dataset.elvaCols);
        }));
    }

    initiateMobileMenu() {
        let filters = app.element("#filters-menu"),
            trigger = app.element("a[href='#filters-menu']"),
            close = app.element("button.close-filters");

        if (!filters) {
            return;
        }
        // ELVA: "drawer" style keeps the filters in a side drawer on every screen size
        const asDrawer = document.querySelector('.elva-cat')?.dataset.filtersStyle === 'drawer';
        filters = new MobileMenu(filters, asDrawer ? "all" : "(max-width: 1024px)", "( slidingSubmenus: false)");
        const drawer = filters.offcanvas({ position: salla.config.get('theme.is_rtl') ? "right" : 'left' });
        trigger.addEventListener('click', event => {
            document.body.classList.add('filters-opened');
            event.preventDefault() || drawer.close() || drawer.open()
        });
        close.addEventListener('click', event => {
            document.body.classList.remove('filters-opened');
            event.preventDefault() || drawer.close()
        });
        salla.event.on('salla-filters::changed', filters => {
            if (!Object.entries(filters).length) {
                return
            }
            document.body.classList.remove('filters-opened');
            drawer.close()
        })
    }
}

Products.initiateWhenReady([
    'product.index',
    'product.index.latest',
    'product.index.offers', 'product.index.search',
    'product.index.tag',
]);
