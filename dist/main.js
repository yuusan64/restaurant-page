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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactDesign: () => (/* binding */ contactDesign),\n/* harmony export */   \"default\": () => (/* binding */ createContactTab)\n/* harmony export */ });\nfunction createContactTab() {\n  var contactTab = document.createElement('li');\n  contactTab.textContent = \"Contact\";\n  contactTab.id = \"contactTab\";\n  return contactTab;\n}\nfunction contactDesign() {\n  var contact = document.getElementById('contactContent');\n  if (contact.childNodes.length === 0) {\n    var form = document.createElement('form');\n    form.id = 'contactForm';\n\n    // Name Input\n    var nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.id = 'name';\n    nameInput.name = 'name';\n    nameInput.placeholder = 'Your Name';\n    nameInput.required = true;\n\n    // Email Input\n    var emailInput = document.createElement('input');\n    emailInput.type = 'email';\n    emailInput.id = 'email';\n    emailInput.name = 'email';\n    emailInput.placeholder = 'Your Email';\n    emailInput.required = true;\n\n    // Message Textarea\n    var messageInput = document.createElement('textarea');\n    messageInput.id = 'message';\n    messageInput.name = 'message';\n    messageInput.placeholder = 'Your Message';\n    messageInput.required = true;\n\n    // Submit Button\n    var submitButton = document.createElement('button');\n    submitButton.type = 'submit';\n    submitButton.textContent = 'Send Message';\n\n    // Append form elements to the form\n    form.appendChild(nameInput);\n    form.appendChild(emailInput);\n    form.appendChild(messageInput);\n    form.appendChild(submitButton);\n    var info = document.createElement('div');\n    info.classList.add('info');\n    info.innerHTML = \"\\n      <h3>Contact Information</h3>\\n      <p>123 Pizza Street, Flavor Town</p>\\n      <p>Phone: (123) 456-7890</p>\\n      <p>Email: contact@sliceofitaly.com</p>\\n    \";\n    contact.appendChild(form);\n    contact.appendChild(info);\n  }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHomeTab),\n/* harmony export */   homeDesign: () => (/* binding */ homeDesign)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nfunction createHomeTab() {\n  var homeTab = document.createElement('li');\n  homeTab.textContent = \"Home\";\n  homeTab.id = \"homeTab\";\n  return homeTab;\n}\nfunction homeDesign() {\n  var home = document.getElementById(\"homeContent\");\n  if (home.childNodes.length === 0) {\n    var title = document.createElement('p');\n    var caption = document.createElement('h3');\n    title.textContent = \"Slice Of Italy\";\n    caption.textContent = \"A Taste That Tells a Story\";\n    home.appendChild(title);\n    home.appendChild(caption);\n    // New About Us section\n    var aboutUs = document.createElement('section');\n    aboutUs.id = 'about-us';\n    var aboutUsTitle = document.createElement('h2');\n    aboutUsTitle.textContent = 'About Us';\n    aboutUs.appendChild(aboutUsTitle);\n    var order = document.createElement('button');\n    order.textContent = \"Order Now\";\n    order.addEventListener('click', function () {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.tabSwitch)('menuContent');\n    });\n    home.appendChild(order);\n  }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNavBar: () => (/* binding */ createNavBar),\n/* harmony export */   tabSwitch: () => (/* binding */ tabSwitch)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\nvar content = document.getElementById(\"content\");\nfunction createNavBar() {\n  var navBar = document.createElement('nav');\n  var ul = document.createElement('ul');\n  var homeTab = (0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  var menuTab = (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var contactTab = (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  ul.appendChild(homeTab);\n  ul.appendChild(menuTab);\n  ul.appendChild(contactTab);\n  navBar.appendChild(ul);\n\n  // Append navBar and tab contents to the content\n  content.appendChild(navBar);\n  content.appendChild(createTabContent('homeContent'));\n  content.appendChild(createTabContent('menuContent', true));\n  content.appendChild(createTabContent('contactContent', true));\n  return navBar;\n}\nfunction tabSwitch(tabName) {\n  var allContents = ['homeContent', 'menuContent', 'contactContent'];\n  allContents.forEach(function (contentId) {\n    var content = document.getElementById(contentId);\n    content.style.display = contentId === tabName ? 'block' : 'none';\n\n    // Call the design function based on the tab\n    if (contentId === tabName) {\n      switch (tabName) {\n        case 'homeContent':\n          (0,_home__WEBPACK_IMPORTED_MODULE_3__.homeDesign)();\n          break;\n        case 'menuContent':\n          (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuDesign)();\n          break;\n        case 'contactContent':\n          (0,_contact__WEBPACK_IMPORTED_MODULE_1__.contactDesign)();\n          break;\n      }\n    }\n  });\n}\nfunction createTabContent(id) {\n  var hideInitially = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var content = document.createElement('div');\n  content.id = id;\n  content.style.display = hideInitially ? 'none' : 'block';\n  return content;\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  createNavBar();\n  document.getElementById('homeTab').addEventListener('click', function () {\n    return tabSwitch('homeContent');\n  });\n  document.getElementById('menuTab').addEventListener('click', function () {\n    return tabSwitch('menuContent');\n  });\n  document.getElementById('contactTab').addEventListener('click', function () {\n    return tabSwitch('contactContent');\n  });\n  tabSwitch('homeContent'); // Initialize with the home tab\n  console.log(\"Hello\");\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenuTab),\n/* harmony export */   menuDesign: () => (/* binding */ menuDesign)\n/* harmony export */ });\nfunction createMenuTab() {\n  var menuTab = document.createElement('li');\n  menuTab.textContent = \"Menu\";\n  menuTab.id = \"menuTab\";\n  return menuTab;\n}\nfunction menuDesign() {\n  var menu = document.getElementById('menuContent');\n  if (menu.childNodes.length === 0) {\n    var menuTitle = document.createElement('h1');\n    menuTitle.textContent = 'Pizzas';\n    menuTitle.classList.add('menuTitle');\n    menu.appendChild(menuTitle);\n    var items = [{\n      name: 'Margherita',\n      desc: 'San Marzano tomato sauce, fresh mozzarella, basil, extra virgin olive oil.',\n      price: '$11.99'\n    }, {\n      name: 'Pepperoni',\n      desc: 'Spicy pepperoni, tomato sauce, mozzarella, oregano.',\n      price: '$13.99'\n    }, {\n      name: 'Quattro Formaggi',\n      desc: 'A blend of four cheeses - mozzarella, gorgonzola, parmesan, and fontina.',\n      price: '$14.99'\n    }, {\n      name: 'Truffle & Mushroom',\n      desc: 'Wild mushrooms, truffle oil, ricotta, mozzarella, parsley.',\n      price: '$19.99'\n    }, {\n      name: 'Veggie Delight',\n      desc: 'Bell peppers, red onions, mushrooms, olives, tomato sauce, mozzarella.',\n      price: '16.99'\n    }];\n    items.forEach(function (pizza) {\n      var pizzaItem = document.createElement('div');\n      pizzaItem.classList.add('pizza-item');\n      var pizzaName = document.createElement('h4');\n      pizzaName.textContent = pizza.name;\n      pizzaName.classList.add('pizza-name');\n      var pizzaPrice = document.createElement('span');\n      pizzaPrice.textContent = pizza.price;\n      pizzaPrice.classList.add('pizza-price');\n      var dottedLine = document.createElement('span');\n      dottedLine.classList.add('dotted-line');\n      pizzaItem.appendChild(pizzaName);\n      pizzaItem.appendChild(dottedLine);\n      pizzaItem.appendChild(pizzaPrice);\n      var pizzaDesc = document.createElement('p');\n      pizzaDesc.textContent = pizza.desc;\n      pizzaDesc.classList.add('desc');\n      menu.appendChild(pizzaItem);\n      menu.appendChild(pizzaDesc);\n    });\n  }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/pizza.jpg */ \"./assets/pizza.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cabin+Sketch:wght@400;700&family=Caveat:wght@500;700&family=Great+Vibes&family=Luckiest+Guy&family=Oswald:wght@300&family=Roboto&family=Shadows+Into+Light&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cabin+Sketch:wght@400;700&family=Carattere&family=Caveat:wght@400;700&family=Great+Vibes&family=Luckiest+Guy&family=Oswald:wght@300&family=Roboto&family=Shadows+Into+Light&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body, html {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\nnav{\n    font-family: 'Roboto', sans-serif;\n    display: flex; \n    justify-content: center; \n    align-items: center;\n    height: 8vh; \n    background: #310d02e7;\n    color: #e7e7e7;\n\n}\nul{\n    font-size: 1.3em;\n    display: flex;\n    list-style: none;\n    gap: 6em; \n    padding: 0; \n    margin: 0; \n   \n}\n\n\n.info{\n    color: wheat;\n}\n\n#homeTab, #menuTab, #contactTab{\n    cursor: pointer;\n}\n\n#content{\n    height: 100%;\n}\n\n#homeContent p{\n    color: white;\n    font-family: 'Great Vibes', cursive;\n    font-size: 5em;\n    padding: 2em 0em 0em 2em;\n}\n\n#homeContent h3{\n    color: white;\n    font-family: 'Carattere', cursive;\n    font-size: 23px;\n    font-weight: 300;\n    padding: 1em 0em 2em 8em;\n   \n}\n\n#homeContent{\n    background-color: rgba(0,0,0,0.5);\n    margin: 3em 2em 3em 4em;\n    width: 70%;\n    \n}\n.pizza-item {\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-bottom: 0.5em;\n  }\n  \n  .pizza-name {\n    margin-right: 10px;\n    font-size: 1.5em;\n  }\n  \n  .dotted-line {\n    flex-grow: 1;\n    border-bottom: 1px dotted #ccc; \n    margin: 0 10px; \n  }\n  \n  .pizza-item p{\n\n  }\n\n\n\np, h3, h1, h4{\n    margin: 0;\n}\n\n.menuTitle{\n    font-size: 6em;\n    text-align: center;\n    padding-bottom: 0.5em;\n}\n#menuContent{\n    color: white;\n    font-family: 'Carattere', cursive;\n    padding: 2em 4em 1em 4em;\n    margin: 5em 20em 0em 20em;\n    background-color: rgba(0,0,0,0.5);\n}\n#menuContent p{\n    font-size: 1.5em;\n    /* margin-left: 0.5em; */\n    margin-bottom: 1.5em;\n}\n.pizza-price{\n    font-size: 1.5em;\n}\n\n#homeContent button{\n    margin: 1em 1em 2em 10em;\n    /* width: 50%; */\n    padding: 0.6em;\n    font-size: 1em;\n    background: #4b17079a;\n    /* background: #5d1f0c; */\n    color: #fff3f3;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n}\n\n#homeContent button:hover, #contactForm button:hover{\n    background: #4b1707b7;\n    box-shadow: 1px 1px 10px 4px #888888;\n}\n\n#homeTab:hover, #menuTab:hover, #contactTab:hover{\n    text-shadow: -1px -1px 7px #fffafa;\n}\n#contactContent{\n    background-color: rgba(0,0,0,0.5);\n    /* margin: 3em 2em 3em 4em; */\n    margin: auto;\n    margin: 6em 20em;\n    padding: 5em;\n}\ninput, textarea{\n    background-color: #0000005c;\n    color: whitesmoke;\n}\n\n#contactForm {\n    max-width: 400px;\n    margin: 0 auto;\n    padding: 20px;\n    background: #f4f4f445;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  }\n  \n  #contactForm input[type='text'],\n  #contactForm input[type='email'],\n  #contactForm textarea {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 15px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    box-sizing: border-box;\n  }\n  #contactForm button {\n    width: 65%;\n    padding: 10px;\n    background-color: #310d02e7;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-left: 5.5em;\n}\n\n\n#contactContent > div {\n    max-width: 400px;\n    margin: 20px auto;\n    padding: 15px;\n    background: #f4f4f445;\n    border-radius: 8px;\n    text-align: center;\n  }\n  #contactContent h3 {\n    \n    color: #fefefe96;\n    margin-bottom: 10px;\n}\n\n#contactContent p {\n    color: #001d3d;\n    line-height: 1.6;\n}\n\n\n/* Responsive styles */\n@media (max-width: 768px) {\n    /* Styles for tablets and smaller devices */\n        /* Show the hamburger menu in mobile view */\n        \n        nav ul {\n            width: 100%;\n            padding: 0; /* Reset any padding */\n        }\n    \n        nav ul li {\n            text-align: center;\n            padding: 10px 0;\n        }\n    .pizza-item, #contactContent > div, #contactForm {\n        max-width: 100%;\n        padding: 15px;\n    }\n  \n    .pizza-item {\n      flex-direction: column;\n      align-items: flex-start;\n    }\n  \n    .dotted-line {\n      display: none; /* Hide on smaller screens */\n    }\n  \n    #homeContent{\n        margin: auto;\n    width: 50%;\n    padding: 20%;\n    }\n     #menuContent {\n      margin: 1em;\n      padding: 0;\n    }\n\n    #contactContent{\n        margin: 2em;\n        padding: 0;\n\n    }\n  \n    #homeContent button, #contactForm button {\n      width: 100%;\n      margin-left: 0;\n    }\n  \n    .menuTitle {\n      font-size: 3em;\n    }\n    \n    #menuContent p {\n      font-size: 1em;\n    }\n  \n    .pizza-price {\n      font-size: 1em;\n    }\n  \n    #homeContent p {\n      font-size: 3em;\n      padding: 1em;\n    }\n  \n    #homeContent h3 {\n      font-size: 1em;\n      padding: 0.5em;\n    }\n  }\n  \n  @media (max-width: 480px) {\n    /* Styles for mobile devices */\n    \n    nav ul {\n    gap: 1.5em;\n    justify-content: space-around;\n    /* padding: 0em 0em; */\n    font-size: 1em;\n    }\n  \n    .menuTitle {\n        display: none;\n    }\n    \n    #homeContent p{\n        font-size: 2em;\n        padding: 0;\n    }\n    #homeContent h3 {\n        font-size: 0.8em;\n        padding: 0.5em;\n      }\n    #menuContent p {\n      font-size: 0.8em;\n    }\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/pizza.jpg":
/*!**************************!*\
  !*** ./assets/pizza.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8cdc1fa453a373c87c0f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/pizza.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;