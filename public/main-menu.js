/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/partials/elva-ui.js"
/*!*******************************************!*\
  !*** ./src/assets/js/partials/elva-ui.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   discountPercent: () => (/* binding */ discountPercent),\n/* harmony export */   escapeHTML: () => (/* binding */ escapeHTML),\n/* harmony export */   icon: () => (/* binding */ icon),\n/* harmony export */   safeStorage: () => (/* binding */ safeStorage),\n/* harmony export */   settings: () => (/* binding */ settings),\n/* harmony export */   t: () => (/* binding */ t)\n/* harmony export */ });\n/**\n * ELVA shared UI helpers: theme settings, translations with safe fallbacks, inline icons.\n */\n\n/** Theme settings exposed by layouts/master.twig as window.elvaSettings */\nconst settings = () => Object.assign({\n  cardStyle: 'editorial',\n  cardRatio: '3/4',\n  cardHoverImage: true,\n  cardQuickView: true\n}, window.elvaSettings || {});\nconst FALLBACK = {\n  quick_view: ['عرض سريع', 'Quick view'],\n  view_details: ['عرض التفاصيل الكاملة', 'View full details'],\n  close: ['إغلاق', 'Close'],\n  off: ['خصم', 'off'],\n  sold_out: ['نفدت الكمية', 'Sold out'],\n  grid_view: ['عدد الأعمدة', 'Columns'],\n  filter: ['تصفية', 'Filter'],\n  previous_image: ['الصورة السابقة', 'Previous image'],\n  next_image: ['الصورة التالية', 'Next image'],\n  main_menu: ['القائمة الرئيسية', 'Main menu'],\n  search: ['بحث', 'Search'],\n  products: ['المنتجات', 'Products']\n};\n\n/** Translate `blocks.elva.<key>`; falls back to built-in Arabic/English text */\nfunction t(key) {\n  const full = `blocks.elva.${key}`;\n  let value = null;\n  try {\n    value = window.salla?.lang?.get(full);\n  } catch (e) {\n    value = null;\n  }\n  if (value && value !== full) return value;\n  const isAr = (document.documentElement.lang || 'ar').toLowerCase().startsWith('ar');\n  const pair = FALLBACK[key];\n  return pair ? pair[isAr ? 0 : 1] : key;\n}\nconst PATHS = {\n  eye: '<path d=\"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>',\n  close: '<path d=\"M6 6l12 12M18 6L6 18\"/>',\n  chevronStart: '<path d=\"M9 6l6 6-6 6\"/>',\n  chevronEnd: '<path d=\"M15 6l-6 6 6 6\"/>',\n  filter: '<path d=\"M4 6h16M7 12h10M10 18h4\"/>',\n  truck: '<path d=\"M3 7h11v9H3zM14 10h4l3 3v3h-7\"/><circle cx=\"7\" cy=\"17.5\" r=\"1.6\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"1.6\"/>',\n  returns: '<path d=\"M4 9h11a5 5 0 010 10H9\"/><path d=\"M8 5L4 9l4 4\"/>',\n  shield: '<path d=\"M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>',\n  grid2: '<rect x=\"4\" y=\"4\" width=\"7\" height=\"16\" rx=\"1\"/><rect x=\"13\" y=\"4\" width=\"7\" height=\"16\" rx=\"1\"/>',\n  grid3: '<rect x=\"3\" y=\"4\" width=\"5\" height=\"16\" rx=\"1\"/><rect x=\"9.5\" y=\"4\" width=\"5\" height=\"16\" rx=\"1\"/><rect x=\"16\" y=\"4\" width=\"5\" height=\"16\" rx=\"1\"/>',\n  grid4: '<rect x=\"2.5\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/><rect x=\"7.5\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/><rect x=\"12.5\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/><rect x=\"17.5\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/>'\n};\n\n/** Inline stroke icon; decorative unless a label is given */\nfunction icon(name, size = 20, label = '') {\n  const a11y = label ? `role=\"img\" aria-label=\"${label}\"` : 'aria-hidden=\"true\" focusable=\"false\"';\n  return `<svg class=\"elva-icon elva-icon--${name}\" ${a11y} width=\"${size}\" height=\"${size}\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">${PATHS[name] || ''}</svg>`;\n}\nfunction escapeHTML(str = '') {\n  return String(str ?? '').replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');\n}\n\n/** Whole-number discount percentage, or 0 */\nfunction discountPercent(product) {\n  const regular = Number(product?.regular_price);\n  const sale = Number(product?.sale_price);\n  if (!product?.is_on_sale || !regular || !sale || sale >= regular) return 0;\n  return Math.round((1 - sale / regular) * 100);\n}\nfunction safeStorage(key, value) {\n  try {\n    if (value === undefined) return window.localStorage.getItem(key);\n    window.localStorage.setItem(key, value);\n  } catch (e) {\n    return null;\n  }\n  return value;\n}\n\n//# sourceURL=webpack://theme-elva/./src/assets/js/partials/elva-ui.js?\n}");

/***/ },

/***/ "./src/assets/js/partials/main-menu.js"
/*!*********************************************!*\
  !*** ./src/assets/js/partials/main-menu.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elva_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elva-ui */ \"./src/assets/js/partials/elva-ui.js\");\n\nclass NavigationMenu extends HTMLElement {\n  connectedCallback() {\n    // Seed a skeleton placeholder shown until the menu data is fetched\n    // and render() replaces this innerHTML with the real menu.\n    this.innerHTML = `\n            <div class=\"main-menu-skel\" aria-hidden=\"true\">\n                <span class=\"header-skel-item header-skel-item--menu\" style=\"width:80px\"></span>\n                <span class=\"header-skel-item header-skel-item--menu\" style=\"width:60px\"></span>\n                <span class=\"header-skel-item header-skel-item--menu\" style=\"width:90px\"></span>\n                <span class=\"header-skel-item header-skel-item--menu\" style=\"width:70px\"></span>\n                <span class=\"header-skel-item header-skel-item--menu\" style=\"width:80px\"></span>\n            </div>`;\n    salla.onReady().then(() => salla.lang.onLoaded()).then(() => {\n      this.menus = [];\n      this.displayAllText = salla.lang.get('blocks.home.display_all');\n      this.moreText = salla.lang.get('common.titles.more');\n      this.visibleMenus = [];\n      this.overflowMenus = [];\n      return salla.api.component.getMenus().then(({\n        data\n      }) => {\n        this.menus = data;\n        return this.render();\n      }).then(() => {\n        this.initializeResponsiveMenu();\n      }).catch(error => salla.logger.error('salla-menu::Error fetching menus', error));\n    });\n  }\n\n  /** \n  * Check if the menu has children\n  * @param {Object} menu\n  * @returns {Boolean}\n  */\n  hasChildren(menu) {\n    return menu?.children?.length > 0;\n  }\n\n  /**\n  * Check if the menu has products\n  * @param {Object} menu\n  * @returns {Boolean}\n  */\n  hasProducts(menu) {\n    return menu?.products?.length > 0;\n  }\n\n  /**\n  * Get the classes for desktop menu\n  * @param {Object} menu\n  * @param {Boolean} isRootMenu\n  * @returns {String}\n  */\n  getDesktopClasses(menu, isRootMenu) {\n    return `!hidden lg:!block ${isRootMenu ? 'root-level lg:!inline-block' : 'relative'} ${menu.products ? ' mega-menu' : ''}\n        ${this.hasChildren(menu) ? ' has-children' : ''}`;\n  }\n\n  /**\n  * Get the mobile menu\n  * @param {Object} menu\n  * @param {String} displayAllText\n  * @returns {String}\n  */\n  getMobileMenu(menu, displayAllText) {\n    const menuImage = menu.image ? `<img src=\"${menu.image}\" class=\"rounded-full\" width=\"48\" height=\"48\" alt=\"${menu.title}\" />` : '';\n    return `\n        <li class=\"lg:hidden text-sm font-bold\" ${menu.attrs}>\n            ${!this.hasChildren(menu) ? `\n                <a href=\"${menu.url}\" aria-label=\"${menu.title || 'category'}\" class=\"text-gray-500 ${menu.image ? '!py-3' : ''}\" ${menu.link_attrs}>\n                    ${menuImage}\n                    <span>${menu.title || ''}</span>\n                </a>` : `\n                <span class=\"${menu.image ? '!py-3' : ''}\">\n                    ${menuImage}\n                    ${menu.title}\n                </span>\n                <ul>\n                    <li class=\"text-sm font-bold\">\n                        <a href=\"${menu.url}\" class=\"text-gray-500\">${displayAllText}</a>\n                    </li>\n                    ${menu.children.map(subMenu => this.getMobileMenu(subMenu, displayAllText)).join('')}\n                </ul>\n            `}\n        </li>`;\n  }\n\n  /**\n  * Get the desktop menu\n  * @param {Object} menu\n  * @param {Boolean} isRootMenu\n  * @param {String} additionalClasses\n  * @returns {String}\n  */\n  getDesktopMenu(menu, isRootMenu, additionalClasses = '') {\n    return `\n        <li class=\"${this.getDesktopClasses(menu, isRootMenu)} ${additionalClasses}\" ${menu.attrs} data-menu-item>\n            <a href=\"${menu.url}\" aria-label=\"${menu.title || 'category'}\" ${menu.link_attrs}>\n                <span>${menu.title}</span>\n            </a>\n            ${this.hasChildren(menu) ? `\n                <div class=\"sub-menu ${this.hasProducts(menu) ? 'w-full left-0 flex' : 'w-56'}\">\n                    <ul class=\"${this.hasProducts(menu) ? 'w-56 shrink-0 m-8 rtl:ml-0 ltr:mr-0' : ''}\">\n                        ${menu.children.map(subMenu => this.getDesktopMenu(subMenu, false)).join('\\n')}\n                    </ul>\n                    ${this.hasProducts(menu) ? `\n                    <salla-products-list\n                    source=\"selected\"\n                    shadow-on-hover\n                    source-value=\"[${menu.products}]\" />` : ''}\n                </div>` : ''}\n        </li>`;\n  }\n\n  /**\n  * Get the menus\n  * @returns {String}\n  */\n  getMenus() {\n    return this.menus.map(menu => `\n            ${this.getMobileMenu(menu, this.displayAllText)}\n            ${this.getDesktopMenu(menu, true)}\n        `).join('\\n');\n  }\n\n  /**\n  * Create More dropdown menu\n  * @returns {String}\n  */\n  createMoreDropdown() {\n    if (this.overflowMenus.length === 0) return '';\n    return `\n        <li class=\"!hidden lg:!block root-level lg:!inline-block has-children relative\" id=\"more-menu-dropdown\">\n            <a href=\"#\" aria-label=\"${this.moreText}\">\n                <span>${this.moreText}</span>\n            </a>\n            <div class=\"sub-menu w-56\">\n                <ul>\n                    ${this.overflowMenus.map(menu => this.getDesktopMenu(menu, false)).join('\\n')}\n                </ul>\n            </div>\n        </li>`;\n  }\n\n  /*\n  * Initialize responsive menu functionality\n  */\n  initializeResponsiveMenu() {\n    if (window.innerWidth < 1024) return; // Only for desktop\n\n    const mainMenu = this.querySelector('.main-menu');\n    if (!mainMenu) return;\n\n    // Check if more menu is enabled from global window variable set in master.twig\n    const isMoreMenuEnabled = window.enable_more_menu;\n    if (!isMoreMenuEnabled) {\n      // If disabled, keep the menu behavior as original (no More dropdown / overflow handling)\n      return;\n    }\n    this.checkMenuOverflow();\n\n    // Re-check on window resize\n    const resizeHandler = this.debounce(() => {\n      this.checkMenuOverflow();\n    }, 250);\n    window.addEventListener('resize', resizeHandler);\n  }\n\n  /**\n  * Check if menu items overflow and move them to More dropdown\n  */\n  checkMenuOverflow() {\n    const mainMenu = this.querySelector('.main-menu');\n    if (!mainMenu) return;\n    const container = mainMenu.closest('.container');\n    if (!container) return;\n\n    // Reset menus\n    this.visibleMenus = [...this.menus];\n    this.overflowMenus = [];\n\n    // Remove existing more dropdown\n    const existingMore = mainMenu.querySelector('#more-menu-dropdown');\n    if (existingMore) {\n      existingMore.remove();\n    }\n\n    // Show all menu items first\n    const menuItems = mainMenu.querySelectorAll('.root-level[data-menu-item]');\n    menuItems.forEach(item => {\n      item.style.display = '';\n    });\n\n    // Calculate available width\n    const containerWidth = container.offsetWidth;\n    const otherElements = container.querySelector('.flex').children;\n    let usedWidth = 0;\n\n    // Calculate width used by logo and other elements\n    Array.from(otherElements).forEach(element => {\n      if (!element.contains(mainMenu)) {\n        usedWidth += element.offsetWidth;\n      }\n    });\n    const availableWidth = containerWidth - usedWidth - 300; // 300px buffer for More dropdown\n    let currentWidth = 0;\n    let visibleCount = 0;\n\n    // Check each menu item\n    menuItems.forEach((item, index) => {\n      const itemWidth = item.offsetWidth;\n      if (currentWidth + itemWidth <= availableWidth && index < this.menus.length) {\n        currentWidth += itemWidth;\n        visibleCount++;\n      } else {\n        // Hide overflow items\n        item.style.setProperty('display', 'none', 'important');\n        if (index < this.menus.length) {\n          this.overflowMenus.push(this.menus[index]);\n        }\n      }\n    });\n\n    // Update visible menus\n    this.visibleMenus = this.menus.slice(0, visibleCount);\n\n    // Add More dropdown if needed\n    if (this.overflowMenus.length > 0) {\n      mainMenu.insertAdjacentHTML('beforeend', this.createMoreDropdown());\n    }\n  }\n\n  /**\n  * Debounce function to limit resize event calls\n  * @param {Function} func\n  * @param {Number} wait\n  * @returns {Function}\n  */\n  debounce(func, wait) {\n    let timeout;\n    return function executedFunction(...args) {\n      const later = () => {\n        clearTimeout(timeout);\n        func(...args);\n      };\n      clearTimeout(timeout);\n      timeout = setTimeout(later, wait);\n    };\n  }\n\n  /**\n  * Render the header menu\n  */\n  render() {\n    this.innerHTML = `\n        <nav id=\"mobile-menu\" class=\"mobile-menu\" aria-label=\"${(0,_elva_ui__WEBPACK_IMPORTED_MODULE_0__.t)('main_menu')}\">\n            <ul class=\"main-menu\">${this.getMenus()}</ul>\n            <button class=\"btn--close close-mobile-menu sicon-cancel lg:hidden\"></button>\n        </nav>\n        <button class=\"btn--close-sm close-mobile-menu sicon-cancel hidden\"></button>`;\n  }\n}\ncustomElements.define('custom-main-menu', NavigationMenu);\n\n//# sourceURL=webpack://theme-elva/./src/assets/js/partials/main-menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/assets/js/partials/main-menu.js");
/******/ 	
/******/ })()
;