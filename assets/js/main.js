/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/components/MenuToggle.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/MenuToggle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuToggle; });\nclass MenuToggle {\r\n  constructor(element) {\r\n    const menuContainer = document.querySelector('.menu-container')\r\n    element.addEventListener('click', () => {\r\n      this.showMenu(menuContainer)\r\n    })\r\n  }\r\n\r\n  showMenu(menuContainer) {\r\n    menuContainer.classList.toggle('active')\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/MenuToggle.js?");

/***/ }),

/***/ "./src/scripts/components/ShortenForm.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/ShortenForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShortenForm; });\nclass ShortenForm {\r\n  constructor(element) {\r\n    const shortenInput = document.querySelector('#shorten-input')\r\n    this.showShortenResults()\r\n\r\n    element.addEventListener('submit', async (e) => {\r\n      e.preventDefault()\r\n\r\n      // check if there is an invalid message, if 'yes' then delete the message\r\n      let invalidMessage = document.querySelector('.invalid-message')\r\n      if (invalidMessage !== null) {\r\n        shortenInput.classList.remove('invalid')\r\n        element.removeChild(invalidMessage)\r\n      }\r\n\r\n      // check if the url is valid\r\n      let message = ''\r\n      if (shortenInput.value !== '') {\r\n        let apiURL = 'https://rel.ink/api/links/'\r\n        let post = { url: shortenInput.value }\r\n        const shortenResult = await this.shortenURL(apiURL, post)\r\n        if (!(shortenResult.hashid == undefined)) {\r\n          this.saveURL(shortenResult)\r\n          this.showShortenResults()\r\n        } else {\r\n          message = shortenResult.url\r\n        }\r\n      } else {\r\n        message = 'Please add a link'\r\n      }\r\n      \r\n      // make an invalid message and add after shorten input\r\n      if (message !== '') {\r\n        invalidMessage = this.createInvalidMessage(message)\r\n        element.insertBefore(invalidMessage, shortenInput.nextSibling)\r\n        shortenInput.classList.add('invalid')\r\n      }\r\n\r\n    })\r\n  }\r\n\r\n  saveURL(url) {\r\n    let shortenResults = []\r\n    if (localStorage.getItem('shortenResults') === null) {\r\n      shortenResults.push(url)\r\n    } else {\r\n      shortenResults = JSON.parse(localStorage.getItem('shortenResults'))\r\n      if (!shortenResults.find((sr) => sr.url === url.url)) {\r\n        shortenResults.push(url)\r\n      }\r\n    }\r\n    localStorage.setItem('shortenResults', JSON.stringify(shortenResults))\r\n  }\r\n\r\n  showShortenResults() {\r\n    let shortenResults = JSON.parse(localStorage.getItem('shortenResults'))\r\n    if (shortenResults !== null) {\r\n      let shortenResultsUI = document.querySelector('#shorten-results')\r\n      let template = shortenResults.map(sr => this.createUIShorten(sr)).join('')\r\n      shortenResultsUI.innerHTML = template\r\n    }\r\n  }\r\n\r\n  createUIShorten(sr) {\r\n    return `\r\n      <li class=\"card\">\r\n        <div class=\"card-header\">\r\n          <p>${sr.url}</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <p>https://rel.ink/${sr.hashid}</p>\r\n          <button class=\"button\">Copy</button>\r\n        </div>\r\n      </li>\r\n    `\r\n  }\r\n  \r\n  shortenURL(url = '', data = '') {\r\n    return fetch(url, {\r\n      method: 'POST',\r\n      mode: 'cors',\r\n      cache: 'no-cache',\r\n      credentials: 'same-origin',\r\n      headers: { 'content-type': 'application/json' },\r\n      redirect: 'follow',\r\n      referrerPolicy: 'no-referrer',\r\n      body: JSON.stringify(data)\r\n    })\r\n    .then(response => response.json())\r\n    .then(response => response)\r\n  }\r\n\r\n  createInvalidMessage(message) {\r\n    let span = document.createElement('span')\r\n    let spanText = document.createTextNode(message)\r\n    span.appendChild(spanText)\r\n    span.classList.add('invalid-message')\r\n    return span;\r\n  }\r\n\r\n  // validURL(url) {\r\n  //   let pattern = /^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$/\r\n  //   return pattern.test(url);\r\n  // }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/ShortenForm.js?");

/***/ }),

/***/ "./src/scripts/components/ShortenResults.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/ShortenResults.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShortenResults; });\nclass ShortenResults {\r\n  constructor(element) {\r\n    element.addEventListener('click', (e) => {\r\n      if (e.target.classList.contains('button')) {\r\n        this.copyURL(e.target.previousElementSibling) // take the url\r\n        // change the styles of button\r\n        e.target.classList.add('copied')\r\n        e.target.innerHTML = 'Copied!'\r\n      }\r\n    })\r\n  }\r\n\r\n  copyURL(resultURL) {\r\n    let element = document.createElement('textarea')\r\n    document.body.appendChild(element)\r\n    element.value = resultURL.innerHTML\r\n    element.select()\r\n    document.execCommand('copy')\r\n    document.body.removeChild(element)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/ShortenResults.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MenuToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MenuToggle */ \"./src/scripts/components/MenuToggle.js\");\n/* harmony import */ var _components_ShortenForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ShortenForm */ \"./src/scripts/components/ShortenForm.js\");\n/* harmony import */ var _components_ShortenResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ShortenResults */ \"./src/scripts/components/ShortenResults.js\");\n\r\n\r\n\r\n\r\nconst components = [\r\n  {\r\n    class: _components_MenuToggle__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    selector: '.menu-toggle'\r\n  },\r\n  {\r\n    class: _components_ShortenForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    selector: '#shorten-form'\r\n  },\r\n  {\r\n    class: _components_ShortenResults__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    selector: '#shorten-results'\r\n  }\r\n]\r\n\r\ncomponents.forEach(component => {\r\n  if (document.querySelector(component.selector) !== null) {\r\n    document.querySelectorAll(component.selector).forEach(element => {\r\n      new component.class(element, element.options)\r\n    })\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ })

/******/ });