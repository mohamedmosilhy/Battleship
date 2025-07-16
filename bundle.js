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

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset and base styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%; /* 1rem = 10px for easier math */\n}\n\nbody {\n  height: 100vh;\n  font-family: \"Rajdhani\", sans-serif;\n  font-weight: 500;\n  background-color: #0a1f2c;\n  color: #e0f7fa;\n  padding: 2rem;\n  overflow: hidden;\n}\n\n/* Intro container */\n.intro-page {\n  min-height: 100vh;\n  width: 100%;\n  max-width: 80rem;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  text-align: center;\n}\n\n/* Heading styles */\n.heading-text h1 {\n  font-size: clamp(4rem, 10vw, 8rem);\n  font-weight: 700;\n  line-height: 1.1;\n  letter-spacing: 0.2rem;\n}\n\n.heading-text p {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #ffeb3b;\n  margin-top: 1rem;\n}\n\n/* Start game form */\n.start-game {\n  width: 100%;\n  max-width: 32rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n  margin-top: 1rem;\n}\n\n.start-game input {\n  padding: 1.2rem;\n  background-color: transparent;\n  color: white;\n  border: 0.1rem solid white;\n  border-radius: 0.6rem;\n  font-size: 1.6rem;\n  text-align: center;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.start-game input:focus {\n  outline: none;\n  border-color: #00bcd4;\n  box-shadow: 0 0 0.8rem #00bcd4;\n}\n\n.start-game button {\n  background-color: #00bcd4;\n  color: #ffffff;\n  font-size: 1.8rem;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  font-weight: bold;\n  letter-spacing: 0.05rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 0.4rem 1.2rem rgba(0, 188, 212, 0.2);\n}\n\n.start-game button:hover {\n  filter: brightness(1.2);\n  transform: scale(1.05);\n}\n\n/* Game container */\n.game-container {\n  width: 100%;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n}\n\n.header {\n  font-size: 5rem;\n  font-weight: 700;\n  letter-spacing: 0.2rem;\n  margin-bottom: 1.5rem;\n}\n\n.message {\n  font-size: 3rem;\n  margin-bottom: 2rem;\n}\n\n.grids {\n  display: flex;\n  justify-content: center;\n  gap: 6rem;\n  flex-wrap: wrap;\n}\n\n/* Grid wrapper */\n.left-grid,\n.right-grid {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Name label */\n.name {\n  text-align: center;\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: #00bcd4;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n}\n\n/* Grid */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 4rem);\n  grid-template-rows: repeat(10, 4rem);\n  gap: 0.3rem;\n  background-color: #132f45;\n  padding: 0.6rem;\n  border: 0.2rem solid #00bcd4;\n  border-radius: 0.8rem;\n}\n\n/* Cells */\n.cell {\n  width: 4rem;\n  height: 4rem;\n  background-color: #1a3a57;\n  border: 0.1rem solid #0e273b;\n  transition: background-color 0.2s ease;\n  cursor: pointer;\n}\n\n/* Hover effect */\n#computer-grid .cell:hover {\n  background-color: #00bcd4;\n}\n\n/* Game states */\n.cell.ship {\n  background-color: #4caf50;\n}\n\n.cell.hit {\n  background-color: #f44336;\n}\n\n.cell.miss {\n  background-color: #607d8b;\n}\n\n.cell.sunk {\n  background-color: #8b0000;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./styles/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\n\nclass Gameboard {\n  constructor() {\n    this.grid = Array.from({ length: 10 }, () =>\n      Array.from({ length: 10 }, () => ({\n        ship: null,\n        isHit: false,\n      }))\n    );\n    this.ships = [];\n  }\n\n  canPlaceShip(x, y, direction, length) {\n    if (direction === \"x\") {\n      if (x + length > 10) return false;\n      for (let i = 0; i < length; i++) {\n        if (this.grid[y][x + i].ship) return false;\n      }\n    } else if (direction === \"y\") {\n      if (y + length > 10) return false;\n      for (let i = 0; i < length; i++) {\n        if (this.grid[y + i][x].ship) return false;\n      }\n    } else {\n      return false;\n    }\n    return true;\n  }\n\n  placeShip(x, y, direction, shapeLength) {\n    let ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(shapeLength);\n    const length = ship.length;\n    // Check boundaries and overlap\n    if (direction === \"x\") {\n      if (x + length > 10) return false;\n      for (let i = 0; i < length; i++) {\n        if (this.grid[y][x + i].ship) return false;\n      }\n      for (let i = 0; i < length; i++) {\n        this.grid[y][x + i].ship = ship;\n      }\n    } else if (direction === \"y\") {\n      if (y + length > 10) return false;\n      for (let i = 0; i < length; i++) {\n        if (this.grid[y + i][x].ship) return false;\n      }\n      for (let i = 0; i < length; i++) {\n        this.grid[y + i][x].ship = ship;\n      }\n    } else {\n      return false;\n    }\n    this.ships.push(ship);\n    return true;\n  }\n\n  receiveAttack(x, y) {\n    const cell = this.grid[y][x];\n    if (cell.isHit) return false; // Already attacked\n    cell.isHit = true;\n    if (cell.ship) {\n      cell.ship.hit();\n      return true; // Hit\n    }\n    return false; // Miss\n  }\n\n  isAllSunk() {\n    return this.ships.every((ship) => ship.isSunk());\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?\n}");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _src_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Gameboard.js */ \"./src/Gameboard.js\");\n\n\nclass Player {\n  constructor(isComputer, name = \"\") {\n    this.isComputer = isComputer;\n    this.gameboard = new _src_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n    this.name = name;\n    if (isComputer) {\n      this.previousMoves = new Set();\n    }\n  }\n\n  canPlaceShip(x, y, length, direction) {\n    return this.gameboard.canPlaceShip(x, y, direction, length);\n  }\n\n  attack(x, y, boardSize = 10) {\n    if (this.isComputer) {\n      const { x: randX, y: randY } = this.getRandomLegalMove(boardSize);\n      this.gameboard.receiveAttack(randX, randY);\n    } else {\n      this.gameboard.receiveAttack(x, y);\n    }\n  }\n\n  placeShip(x, y, shipLength, direction, boardSize = 10) {\n    if (this.isComputer) {\n      const directions = [\"x\", \"y\"];\n      let placed = false;\n\n      while (!placed) {\n        const dir = directions[Math.floor(Math.random() * 2)];\n        const rx = Math.floor(\n          Math.random() * (dir === \"x\" ? boardSize - shipLength : boardSize)\n        );\n        const ry = Math.floor(\n          Math.random() * (dir === \"y\" ? boardSize - shipLength : boardSize)\n        );\n\n        if (this.canPlaceShip(rx, ry, shipLength, dir)) {\n          this.gameboard.placeShip(rx, ry, dir, shipLength);\n          placed = true;\n        }\n      }\n    } else {\n      this.gameboard.placeShip(x, y, direction, shipLength);\n    }\n  }\n\n  getRandomLegalMove(boardSize = 10) {\n    if (!this.isComputer) return null;\n    let x, y, key;\n    do {\n      x = Math.floor(Math.random() * boardSize);\n      y = Math.floor(Math.random() * boardSize);\n      key = `${x},${y}`;\n    } while (this.previousMoves.has(key));\n    this.previousMoves.add(key);\n    return { x, y };\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Player.js?\n}");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hitCount = 0;\n  }\n\n  hit() {\n    this.hitCount++;\n  }\n  isSunk() {\n    if (this.hitCount >= this.length) {\n      return true;\n    }\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Ship.js?\n}");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: () => (/* binding */ DOM)\n/* harmony export */ });\nclass DOM {\n  constructor() {}\n\n  createGrid(gridElement, isComputer = false, handleClick = null) {\n    // Clear any existing grid cells\n    gridElement.innerHTML = \"\";\n\n    for (let i = 0; i < 100; i++) {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n\n      const x = i % 10;\n      const y = Math.floor(i / 10);\n\n      cell.dataset.x = x;\n      cell.dataset.y = y;\n\n      if (isComputer && typeof handleClick === \"function\") {\n        cell.addEventListener(\"click\", () => {\n          handleClick(x, y, cell);\n        });\n      }\n\n      if (!isComputer && typeof handleClick === \"function\") {\n        cell.addEventListener(\"click\", () => {\n          handleClick(x, y, cell);\n        });\n      }\n\n      gridElement.appendChild(cell);\n    }\n  }\n\n  initializeGrids(startCallback) {\n    const gameContainer = document.querySelector(\".game-container\");\n    const startGame = document.querySelector(\".intro-page\");\n    const nameDisplay = document.querySelector(\".right-grid .name\");\n\n    startGame.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      const playerName = document.querySelector(\".player-name\").value;\n      if (playerName.trim()) {\n        startGame.style.display = \"none\";\n        gameContainer.style.display = \"flex\";\n        nameDisplay.textContent = playerName;\n\n        const playerGrid = document.getElementById(\"player-grid\");\n        const computerGrid = document.getElementById(\"computer-grid\");\n\n        // ⚠️ Don't create grid here — we’ll do it in game logic\n        startCallback(playerName, computerGrid, playerGrid);\n      }\n    });\n  }\n\n  createMessage(msg) {\n    const message = document.querySelector(\".message\");\n    message.textContent = `[ ${msg} ]`;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n\n\n\n\nconst dom = new _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM();\n\nfunction createPlayers(name) {\n  const human = new _Player_js__WEBPACK_IMPORTED_MODULE_1__.Player(false, name);\n  const computer = new _Player_js__WEBPACK_IMPORTED_MODULE_1__.Player(true, \"Computer\");\n  return { human, computer };\n}\n\nfunction markSunkShip(ship, board, gridId) {\n  for (let y = 0; y < board.grid.length; y++) {\n    for (let x = 0; x < board.grid[y].length; x++) {\n      const cellData = board.grid[y][x];\n      if (cellData.ship === ship) {\n        const cell = document.querySelector(\n          `#${gridId} .cell[data-x='${x}'][data-y='${y}']`\n        );\n        if (cell) cell.classList.add(\"sunk\");\n      }\n    }\n  }\n}\n\nfunction randomlyPlaceShips(player, shipLengths) {\n  const directions = [\"x\", \"y\"];\n  for (const length of shipLengths) {\n    let placed = false;\n    while (!placed) {\n      const direction = directions[Math.floor(Math.random() * 2)];\n      const x = Math.floor(\n        Math.random() * (direction === \"x\" ? 10 - length : 10)\n      );\n      const y = Math.floor(\n        Math.random() * (direction === \"y\" ? 10 - length : 10)\n      );\n\n      if (player.canPlaceShip(x, y, length, direction)) {\n        player.placeShip(x, y, length, direction);\n        placed = true;\n      }\n    }\n  }\n}\n\ndom.initializeGrids((playerName, computerGrid) => {\n  const { human, computer } = createPlayers(playerName);\n\n  const shipLengths = [5, 4, 3, 3, 2]; // Classic Battleship sizes\n  let currentShipIndex = 0;\n  let placingPhase = true;\n  let currentDirection = \"x\";\n\n  // Allow R key to rotate ship\n  document.addEventListener(\"keydown\", (e) => {\n    if (e.key === \"r\" || e.key === \"R\") {\n      currentDirection = currentDirection === \"x\" ? \"y\" : \"x\";\n      dom.createMessage(`Direction: ${currentDirection.toUpperCase()}`);\n    }\n  });\n\n  // Create player grid for ship placement\n  const playerGrid = document.querySelector(\"#player-grid\");\n  dom.createGrid(playerGrid, false, (x, y) => {\n    if (!placingPhase) return;\n\n    const length = shipLengths[currentShipIndex];\n    if (human.canPlaceShip(x, y, length, currentDirection)) {\n      human.placeShip(x, y, length, currentDirection);\n\n      // Show placed ship\n      for (let i = 0; i < length; i++) {\n        const cx = currentDirection === \"x\" ? x + i : x;\n        const cy = currentDirection === \"y\" ? y + i : y;\n        const cell = document.querySelector(\n          `#player-grid .cell[data-x=\"${cx}\"][data-y=\"${cy}\"]`\n        );\n        if (cell) cell.classList.add(\"ship\");\n      }\n\n      currentShipIndex++;\n      if (currentShipIndex === shipLengths.length) {\n        placingPhase = false;\n        dom.createMessage(\"✅ All ships placed. Game starts!\");\n\n        randomlyPlaceShips(computer, shipLengths);\n\n        // Now enable attacking on the computer grid\n        dom.createGrid(computerGrid, true, handleHumanAttack);\n      } else {\n        dom.createMessage(\n          `Place ship of length ${shipLengths[currentShipIndex]}`\n        );\n      }\n    } else {\n      dom.createMessage(\"⚠️ Invalid position. Try again.\");\n    }\n  });\n\n  // Initial message for ship placement instructions\n  dom.createMessage(\n    \"🛠 Place your ships on the grid. Press [R] to rotate direction (X/Y).\"\n  );\n\n  function handleHumanAttack(x, y, cell) {\n    const alreadyAttacked =\n      cell.classList.contains(\"hit\") || cell.classList.contains(\"miss\");\n    if (alreadyAttacked) return;\n\n    const hit = computer.gameboard.receiveAttack(x, y);\n    cell.classList.add(hit ? \"hit\" : \"miss\");\n\n    if (hit) {\n      const ship = computer.gameboard.grid[y][x].ship;\n      if (ship.isSunk()) {\n        markSunkShip(ship, computer.gameboard, \"computer-grid\");\n      }\n    }\n\n    dom.createMessage(`You attacked (${x},${y}) - ${hit ? \"Hit!\" : \"Miss!\"}`);\n\n    if (computer.gameboard.isAllSunk()) {\n      dom.createMessage(\"🎉 Human wins!\");\n      return;\n    }\n\n    setTimeout(() => {\n      computerAttack();\n    }, 500);\n  }\n\n  function computerAttack() {\n    let x, y;\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n    } while (human.gameboard.grid[y][x].isHit);\n\n    const hit = human.gameboard.receiveAttack(x, y);\n    dom.createMessage(\n      `Computer attacks (${x},${y}) - ${hit ? \"Hit!\" : \"Miss!\"}`\n    );\n\n    const cell = document.querySelector(\n      `#player-grid .cell[data-x='${x}'][data-y='${y}']`\n    );\n    if (cell) {\n      cell.classList.add(hit ? \"hit\" : \"miss\");\n      if (hit) {\n        const ship = human.gameboard.grid[y][x].ship;\n        if (ship.isSunk()) {\n          markSunkShip(ship, human.gameboard, \"player-grid\");\n        }\n      }\n    }\n\n    if (human.gameboard.isAllSunk()) {\n      dom.createMessage(\"💥 Computer wins!\");\n    }\n  }\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?\n}");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./styles/style.css?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;