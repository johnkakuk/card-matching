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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/card-flip-card-image.png */ \"./src/img/card-flip-card-image.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #1C531D;\n  color: #fff;\n  padding: 30px;\n  font-family: \"Open Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  max-width: 750px;\n  margin: 50px auto;\n}\n\nheader {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 30px;\n  width: 100%;\n}\nheader h1, header p {\n  margin: 5px 0;\n}\nheader p {\n  font-size: 0.8rem;\n}\n@media (max-width: 550px) {\n  header {\n    order: 0;\n  }\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  border: 0;\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-size: 1rem;\n  font-weight: 700;\n  background-color: #238AB6;\n  color: #fff;\n  cursor: pointer;\n}\n@media (max-width: 550px) {\n  button {\n    order: 1;\n    margin-top: 30px;\n  }\n}\n\n.cards {\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 30px;\n  margin: 30px auto;\n  position: relative;\n}\n@media (max-width: 550px) {\n  .cards {\n    order: 2;\n  }\n}\n\n.card {\n  will-change: transform;\n  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n  aspect-ratio: 5/7;\n  width: calc(33.3333333333% - 20px);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  perspective: 1000px;\n  opacity: 1;\n}\n@media (min-width: 375px) and (max-width: 550px) {\n  .card {\n    width: calc(50% - 15px);\n  }\n}\n@media (max-width: 374px) {\n  .card {\n    width: 100%;\n  }\n}\n.card.red {\n  color: #b80303;\n}\n.card.hidden {\n  transform: translateX(-400%);\n  opacity: 0;\n}\n.card.flipped .card-back {\n  opacity: 1;\n}\n.card.flipped .card-front {\n  opacity: 0;\n}\n.card.flipped .card-inner {\n  transform: rotateY(180deg);\n}\n.card {\n  /* Hover */\n}\n.card:not(.flipped) .card-inner {\n  transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n.card:not(.flipped):hover .card-inner {\n  transform: translateY(-2px);\n}\n.card .rank:first-of-type {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n.card .rank:nth-child(2) {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\n.card .card-inner {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n.card .card-front, .card .card-back {\n  position: absolute;\n  inset: 0;\n  border-radius: 10px;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n.card .card-front {\n  min-width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  padding: 30px;\n  background-color: #fff;\n  border: 6px solid #fff;\n  border-radius: 10px;\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  transition: opacity 0.3s ease;\n  transform: rotateY(0deg);\n}\n.card .card-front .suit {\n  font-size: 1rem;\n}\n@media (min-width: 431px) and (max-width: 550px) {\n  .card .card-front .suit {\n    font-size: 1.5rem;\n  }\n}\n@media (max-width: 430px) {\n  .card .card-front .suit {\n    font-size: 1rem;\n  }\n}\n.card .card-front .face {\n  font-size: 3rem;\n}\n.card .card-back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;\n  background-size: cover;\n  opacity: 0;\n  z-index: 1;\n  border-radius: 15px;\n  transition: opacity 0.3s ease;\n  transform: rotateY(180deg);\n}\n\n.outcome {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  opacity: 1;\n  transition: 0.3s;\n}\n.outcome.hidden {\n  opacity: 0;\n}\n\n.mute-toggle {\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  width: 32px;\n  height: 32px;\n  border: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n}\n.mute-toggle img {\n  width: 18px;\n  height: 18px;\n  pointer-events: none;\n  filter: invert(1);\n}\n.mute-toggle::after {\n  content: \"\";\n  position: absolute;\n  inset: 6px;\n  display: none;\n  background: linear-gradient(45deg, transparent 45%, #b80303 45%, #b80303 55%, transparent 55%);\n}\n.mute-toggle.muted::after {\n  display: block;\n}\n\n/* Match / No‑match visual pulse */\n.card::before {\n  content: \"\";\n  position: absolute;\n  inset: -2px; /* start right at the border */\n  border-radius: 10px; /* match card corners */\n  pointer-events: none;\n  opacity: 0;\n}\n.card.pulse--match::before {\n  border: 15px solid rgb(0, 255, 0);\n  animation: cardRippleMatch 0.8s ease-out forwards;\n}\n.card.pulse--miss::before {\n  border: 15px solid rgb(255, 0, 0);\n  animation: cardRippleMiss 0.8s ease-out forwards;\n}\n\n@keyframes cardRippleMatch {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.15);\n    opacity: 0;\n  }\n}\n@keyframes cardRippleMiss {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.15);\n    opacity: 0;\n  }\n}\n/* Stats block */\n.stats {\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  max-width: 200px;\n}\n\n@media (max-width: 374px) {\n  .stats {\n    position: static;\n    margin-top: 20px;\n    order: 3;\n    width: 100%;\n    text-align: left;\n    display: block;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://card-match/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://card-match/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://card-match/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://card-match/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://card-match/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://card-match/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://card-match/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://card-match/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://card-match/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://card-match/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/img/card-flip-card-image.png":
/*!******************************************!*\
  !*** ./src/img/card-flip-card-image.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"dae74cb6337936303325.png\";\n\n//# sourceURL=webpack://card-match/./src/img/card-flip-card-image.png?\n}");

/***/ }),

/***/ "./src/img/volume.svg":
/*!****************************!*\
  !*** ./src/img/volume.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"assets/img/volume4f05352924cd1046f217.svg\";\n\n//# sourceURL=webpack://card-match/./src/img/volume.svg?\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n\n// Generate asset URLs via import.meta.url (webpack 5 compatible)\nconst successSnd = new URL(/* asset import */ __webpack_require__(/*! ./sound/success.mp3 */ \"./src/sound/success.mp3\"), __webpack_require__.b).toString();\nconst errorSnd = new URL(/* asset import */ __webpack_require__(/*! ./sound/error.mp3 */ \"./src/sound/error.mp3\"), __webpack_require__.b).toString();\nconst victorySnd = new URL(/* asset import */ __webpack_require__(/*! ./sound/victory.mp3 */ \"./src/sound/victory.mp3\"), __webpack_require__.b).toString();\nconst defeatSnd = new URL(/* asset import */ __webpack_require__(/*! ./sound/defeat.mp3 */ \"./src/sound/defeat.mp3\"), __webpack_require__.b).toString();\nconst volumeIcon = new URL(/* asset import */ __webpack_require__(/*! ./img/volume.svg */ \"./src/img/volume.svg\"), __webpack_require__.b).toString();\nconst cardSnd = new URL(/* asset import */ __webpack_require__(/*! ./sound/card.mp3 */ \"./src/sound/card.mp3\"), __webpack_require__.b).toString();\n// AudioPool: enable overlapping/restarting sounds\nclass AudioPool {\n    constructor(src, size = 4) {\n        this.idx = 0;\n        this.nodes = Array.from({ length: size }, () => {\n            const a = new Audio(src);\n            a.preload = 'auto';\n            return a;\n        });\n    }\n    setMuted(muted) {\n        this.nodes.forEach(a => (a.muted = muted));\n    }\n    play() {\n        const a = this.nodes[this.idx];\n        this.idx = (this.idx + 1) % this.nodes.length;\n        try {\n            a.currentTime = 0;\n        }\n        catch (_) { }\n        a.play().catch(() => { });\n    }\n    reset() {\n        this.nodes.forEach(a => {\n            try {\n                a.pause();\n                a.currentTime = 0;\n            }\n            catch (_) { }\n        });\n        this.idx = 0;\n    }\n}\nconst SND_SUCCESS = new AudioPool(successSnd, 4);\nconst SND_ERROR = new AudioPool(errorSnd, 2);\nconst SND_VICTORY = new AudioPool(victorySnd, 1);\nconst SND_DEFEAT = new AudioPool(defeatSnd, 1);\nconst SND_CARD = new AudioPool(cardSnd, 6);\nfunction resetSoundPools() {\n    SND_SUCCESS.reset();\n    SND_ERROR.reset();\n    SND_CARD.reset();\n}\nconst suits = [\"&clubs;\", \"&diams;\", \"&hearts;\", \"&spades;\"];\nconst ranks = [\"A\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\", \"J\", \"Q\", \"K\"];\nclass Card {\n    constructor(_rank, _suit) {\n        this.rank = _rank;\n        this.suit = _suit;\n    }\n}\n// Query UI elements\nconst cards = document.querySelectorAll(\".card\");\nconst cardRanks = document.querySelectorAll(\".card .rank:first-of-type\");\nconst cardRanks2 = document.querySelectorAll(\".card .rank:nth-of-type(2)\");\nconst dealButton = document.querySelector(\"#deal\");\nconst triesRemainingLabel = document.querySelector(\"#triesRemaining\");\nconst outcome = document.querySelector(\".outcome\");\nconst button = document.querySelector(\"button\");\n// Wire up asset URLs so they get emitted by the bundler\nconst muteImg = document.querySelector(\"#muteBtn img\");\nif (muteImg)\n    muteImg.src = volumeIcon;\nconst aSuccessEl = document.getElementById(\"s-success\");\nconst aErrorEl = document.getElementById(\"s-error\");\nconst aVictoryEl = document.getElementById(\"s-victory\");\nconst aDefeatEl = document.getElementById(\"s-defeat\");\nif (aSuccessEl)\n    aSuccessEl.src = successSnd;\nif (aErrorEl)\n    aErrorEl.src = errorSnd;\nif (aVictoryEl)\n    aVictoryEl.src = victorySnd;\nif (aDefeatEl)\n    aDefeatEl.src = defeatSnd;\n// Audio elements\nconst aSuccess = aSuccessEl;\nconst aError = aErrorEl;\nconst aVictory = aVictoryEl;\nconst aDefeat = aDefeatEl;\nconst allAudio = [aSuccess, aError, aVictory, aDefeat].filter(Boolean);\n// Mute toggle\nconst muteBtn = document.getElementById(\"muteBtn\");\nlet muted = false;\nfunction applyMuteState() {\n    allAudio.forEach(a => (a.muted = muted));\n    SND_SUCCESS.setMuted(muted);\n    SND_ERROR.setMuted(muted);\n    SND_VICTORY.setMuted(muted);\n    SND_DEFEAT.setMuted(muted);\n    SND_CARD.setMuted(muted);\n    if (muteBtn instanceof HTMLElement) {\n        muteBtn.classList.toggle(\"muted\", muted);\n        muteBtn.setAttribute(\"aria-pressed\", muted ? \"true\" : \"false\");\n    }\n}\nfunction playSound(kind) {\n    if (muted)\n        return;\n    switch (kind) {\n        case \"success\":\n            SND_SUCCESS.play();\n            break;\n        case \"error\":\n            SND_ERROR.play();\n            break;\n        case \"victory\":\n            SND_VICTORY.play();\n            break;\n        case \"defeat\":\n            SND_DEFEAT.play();\n            break;\n    }\n}\nif (muteBtn) {\n    muteBtn.addEventListener(\"click\", () => {\n        muted = !muted;\n        applyMuteState();\n    });\n}\n// Global variables\nlet deck = [];\nlet hand = [];\nlet triesRemaining = 3;\nlet matches = 0;\nlet lastClicked = [];\nlet justClicked = [];\nlet statGames = 0;\nlet statWins = 0;\nlet statLosses = 0;\nlet statStreak = 0;\nconst elGames = document.getElementById(\"stat-games\");\nconst elWins = document.getElementById(\"stat-wins\");\nconst elLosses = document.getElementById(\"stat-losses\");\nconst elStreak = document.getElementById(\"stat-streak\");\nfunction updateStats() {\n    if (elGames)\n        elGames.textContent = statGames.toString();\n    if (elWins)\n        elWins.textContent = statWins.toString();\n    if (elLosses)\n        elLosses.textContent = statLosses.toString();\n    if (elStreak)\n        elStreak.textContent = statStreak.toString();\n}\nfunction setCardsLocked(locked) {\n    cards.forEach(el => (el.style.pointerEvents = locked ? 'none' : ''));\n}\nfunction pulseCards(els, kind) {\n    const add = kind === 'match' ? 'pulse--match' : 'pulse--miss';\n    els.forEach(el => {\n        el.classList.remove('pulse--match', 'pulse--miss');\n        // reflow to restart animation if the class was on recently\n        el.offsetWidth;\n        el.classList.add(add);\n        el.addEventListener('animationend', () => {\n            el.classList.remove('pulse--match', 'pulse--miss');\n        }, { once: true });\n    });\n}\nfunction revealCardsSequentially(nodeList) {\n    const arr = Array.from(nodeList);\n    // Ensure every card starts hidden so we always animate into view\n    arr.forEach((el) => el.classList.add(\"hidden\"));\n    let i = 0;\n    const revealNext = () => {\n        if (i >= arr.length)\n            return;\n        const card = arr[i++];\n        const onEnd = () => {\n            card.removeEventListener(\"transitionend\", onEnd);\n            revealNext();\n        };\n        card.addEventListener(\"transitionend\", onEnd, { once: true });\n        // Force reflow to make sure the transition triggers when removing .hidden\n        card.offsetWidth;\n        SND_CARD.play();\n        card.classList.remove(\"hidden\");\n    };\n    revealNext();\n}\n// Primary functions\nfunction buildDeck() {\n    for (const suit of suits) {\n        for (const rank of ranks) {\n            const card = new Card(rank, suit);\n            deck.push(card);\n        }\n    }\n}\nfunction shuffle(deckToShuffle) {\n    // Fisher-Yates shuffle\n    let currentIndex = deckToShuffle.length;\n    while (currentIndex != 0) {\n        let randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex--;\n        [deckToShuffle[currentIndex], deckToShuffle[randomIndex]] = [deckToShuffle[randomIndex], deckToShuffle[currentIndex]];\n    }\n}\nfunction newHand() {\n    // Reset\n    triesRemaining = 3;\n    matches = 0;\n    if (triesRemainingLabel instanceof Element)\n        triesRemainingLabel.innerHTML = `Tries remaining: ${triesRemaining.toString()}`;\n    SND_VICTORY.reset();\n    SND_DEFEAT.reset();\n    lastClicked.length = 0;\n    justClicked.length = 0;\n    hand.forEach(card => {\n        deck.push(card);\n    });\n    hand.length = 0;\n    outcome === null || outcome === void 0 ? void 0 : outcome.classList.add(\"hidden\");\n    if (button)\n        button.textContent = \"Deal Again\";\n    shuffle(deck);\n    // Get initial 3 cards from deck\n    while (hand.length < 3) {\n        // Get a card from the deck\n        const card = deck.pop();\n        // Push automatically if no items in hand\n        if (hand.length == 0 && card instanceof Card)\n            hand.push(card);\n        else {\n            // Check the card against the hand. If there are already two of the same rank, move it to the bottom of the deck.\n            let existingOfRank = 0;\n            hand.forEach(cardInHand => {\n                // Increment existingOfRank if there's already a card of this rank\n                if (card && cardInHand.rank == card.rank)\n                    existingOfRank++;\n            });\n            // If there are more than 2 of this rank, put it on the bottom of the deck\n            if (card && existingOfRank == 2)\n                deck.unshift(card);\n            // If not, move the card to hand and advance the index\n            else if (card)\n                hand.push(card);\n        }\n    }\n    // Get 3 other cards of same rank from deck (first occurring)\n    hand.forEach(cardInHand => {\n        const rank = cardInHand.rank;\n        const match = deck.findIndex(card => card.rank == rank);\n        if (match !== -1) {\n            // Needs brackets because .splice() returns an array?\n            const [card] = deck.splice(match, 1);\n            hand.push(card);\n        }\n    });\n    // Randomize order\n    shuffle(hand);\n    // Send cards in hand to the DOM\n    hand.forEach((card, i) => {\n        var _a, _b, _c, _d;\n        cards[i].querySelectorAll(\".card-front .suit\").forEach(e => e.remove());\n        cards[i].classList.remove(\"red\");\n        cardRanks[i].innerHTML = hand[i].rank;\n        cardRanks2[i].innerHTML = hand[i].rank;\n        // Add suit symbols, A-10\n        let value;\n        if (card.rank == \"J\")\n            value = 11;\n        else if (card.rank == \"Q\")\n            value = 12;\n        else if (card.rank == \"K\")\n            value = 13;\n        else if (card.rank == \"A\")\n            value = 1;\n        else\n            value = parseInt(card.rank);\n        if (value < 11) {\n            for (let ind = 0; ind < value; ind++) {\n                const el = document.createElement(\"span\");\n                el.className = \"suit\";\n                el.innerHTML = card.suit;\n                (_a = cards[i].querySelector(\".card-front\")) === null || _a === void 0 ? void 0 : _a.appendChild(el);\n            }\n        }\n        else if (value == 11) {\n            const el = document.createElement(\"span\");\n            el.className = \"suit face\";\n            el.innerHTML = \"♘\";\n            (_b = cards[i].querySelector(\".card-front\")) === null || _b === void 0 ? void 0 : _b.appendChild(el);\n        }\n        else if (value == 12) {\n            const el = document.createElement(\"span\");\n            el.className = \"suit face\";\n            el.innerHTML = \"♕\";\n            (_c = cards[i].querySelector(\".card-front\")) === null || _c === void 0 ? void 0 : _c.appendChild(el);\n        }\n        else if (value == 13) {\n            const el = document.createElement(\"span\");\n            el.className = \"suit face\";\n            el.innerHTML = \"♔\";\n            (_d = cards[i].querySelector(\".card-front\")) === null || _d === void 0 ? void 0 : _d.appendChild(el);\n        }\n        else {\n            console.error(\"An unspecified error occurred.\");\n        }\n        // Add suit symbols for face cards\n        // Color control\n        if ([\"&diams;\", \"&hearts;\"].includes(card.suit))\n            cards[i].classList.add(\"red\");\n    });\n    // Prepare card elements and reveal sequentially\n    cards.forEach(card => {\n        // Always start in a flipped state (back showing)\n        card.classList.add(\"flipped\");\n        // Ensure we have a fresh click handler each deal\n        card.removeEventListener(\"click\", flipCard);\n        card.addEventListener(\"click\", flipCard);\n        // Start hidden; the sequential reveal will remove this class one-by-one\n        card.classList.add(\"hidden\");\n    });\n    // Reveal one card at a time using transitionend chaining\n    revealCardsSequentially(cards);\n}\nfunction flipCard(event) {\n    var _a, _b, _c;\n    // If cards are locked (during animations), ignore clicks\n    if (((_a = cards[0]) === null || _a === void 0 ? void 0 : _a.style.pointerEvents) === 'none')\n        return;\n    // Run styling and remove flipCard listener\n    if (event.currentTarget instanceof Element) {\n        event.currentTarget.classList.toggle(\"flipped\");\n        event.currentTarget.removeEventListener(\"click\", flipCard);\n    }\n    // If something has already been clicked, assign it to lastClicked\n    if (justClicked.length == 1)\n        lastClicked[0] = justClicked[0];\n    // Assign the clicked element to justClicked\n    justClicked.length = 0;\n    if (event.currentTarget instanceof Element)\n        justClicked.push(event.currentTarget);\n    // Only run if 2 things have been clicked\n    if (lastClicked.length == 1) {\n        // Lock board while resolving match/mismatch\n        setCardsLocked(true);\n        // If match:\n        if (((_b = justClicked[0].querySelector(\".rank\")) === null || _b === void 0 ? void 0 : _b.textContent) == ((_c = lastClicked[0].querySelector(\".rank\")) === null || _c === void 0 ? void 0 : _c.innerHTML)) {\n            playSound(\"success\");\n            pulseCards([justClicked[0], lastClicked[0]], 'match');\n            justClicked[0].addEventListener(\"transitionend\", () => {\n                // Hold things up for quarter second for better UX\n                setTimeout(() => {\n                    matches++;\n                    if (matches == 3)\n                        victory();\n                    justClicked.length = 0;\n                    lastClicked.length = 0;\n                    resetSoundPools();\n                    setCardsLocked(false);\n                }, 250);\n            }, { once: true });\n        }\n        else {\n            // If no match:\n            playSound(\"error\");\n            pulseCards([justClicked[0], lastClicked[0]], 'miss');\n            justClicked[0].addEventListener(\"transitionend\", () => {\n                setTimeout(() => {\n                    // Hold things up for quarter second for better UX\n                    triesRemaining--;\n                    if (triesRemainingLabel instanceof Element)\n                        triesRemainingLabel.innerHTML = `Tries remaining: ${triesRemaining.toString()}`;\n                    if (triesRemaining == 0)\n                        defeat();\n                    justClicked[0].classList.add(\"flipped\");\n                    lastClicked[0].classList.add(\"flipped\");\n                    justClicked[0].addEventListener(\"click\", flipCard);\n                    lastClicked[0].addEventListener(\"click\", flipCard);\n                    justClicked.length = 0;\n                    lastClicked.length = 0;\n                    resetSoundPools();\n                    setCardsLocked(false);\n                }, 250);\n            }, { once: true });\n        }\n    }\n}\nfunction defeat() {\n    statLosses++;\n    statStreak = 0;\n    statGames++;\n    updateStats();\n    outcome === null || outcome === void 0 ? void 0 : outcome.classList.remove(\"hidden\");\n    if (outcome)\n        outcome.textContent = \"You lose\";\n    playSound(\"defeat\");\n    cards.forEach(card => {\n        card.classList.add(\"flipped\");\n        card.classList.add(\"hidden\");\n    });\n}\nfunction victory() {\n    statWins++;\n    statStreak++;\n    statGames++;\n    updateStats();\n    outcome === null || outcome === void 0 ? void 0 : outcome.classList.remove(\"hidden\");\n    if (outcome)\n        outcome.textContent = \"You win!\";\n    playSound(\"victory\");\n    cards.forEach(card => {\n        card.classList.add(\"flipped\");\n        card.classList.add(\"hidden\");\n    });\n}\n(() => {\n    // Boot\n    buildDeck();\n    // Attach event listener to deal button\n    if (dealButton instanceof Element)\n        dealButton.addEventListener(\"click\", newHand);\n    applyMuteState();\n})();\n\n\n//# sourceURL=webpack://card-match/./src/index.ts?\n}");

/***/ }),

/***/ "./src/sound/card.mp3":
/*!****************************!*\
  !*** ./src/sound/card.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"assets/audio/card197381d393c80b6acc04.mp3\";\n\n//# sourceURL=webpack://card-match/./src/sound/card.mp3?\n}");

/***/ }),

/***/ "./src/sound/defeat.mp3":
/*!******************************!*\
  !*** ./src/sound/defeat.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"assets/audio/defeat96b1f6e819f980862ac7.mp3\";\n\n//# sourceURL=webpack://card-match/./src/sound/defeat.mp3?\n}");

/***/ }),

/***/ "./src/sound/error.mp3":
/*!*****************************!*\
  !*** ./src/sound/error.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"assets/audio/error22769ceb7116b0b04914.mp3\";\n\n//# sourceURL=webpack://card-match/./src/sound/error.mp3?\n}");

/***/ }),

/***/ "./src/sound/success.mp3":
/*!*******************************!*\
  !*** ./src/sound/success.mp3 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"assets/audio/success7e4e71baac6b875719e3.mp3\";\n\n//# sourceURL=webpack://card-match/./src/sound/success.mp3?\n}");

/***/ }),

/***/ "./src/sound/victory.mp3":
/*!*******************************!*\
  !*** ./src/sound/victory.mp3 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"assets/audio/victorydaca1746c765b43f652b.mp3\";\n\n//# sourceURL=webpack://card-match/./src/sound/victory.mp3?\n}");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://card-match/./src/styles/index.scss?\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;