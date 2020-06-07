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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_onerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-onerror */ \"koa-onerror\");\n/* harmony import */ var koa_onerror__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_onerror__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-logger */ \"koa-logger\");\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_logger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_apis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/apis */ \"./routes/apis.js\");\n/* harmony import */ var _routes_apis__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes_apis__WEBPACK_IMPORTED_MODULE_5__);\n// const Koa = require('koa')\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a(); // const views = require('koa-views')\n\n\n\n\n // const json = require('koa-json')\n// const onerror = require('koa-onerror')\n// const bodyparser = require('koa-bodyparser')\n// const logger = require('koa-logger')\n// const apis = require('./routes/apis')\n\n // error handler\n\nkoa_onerror__WEBPACK_IMPORTED_MODULE_2___default()(app);\n\ntry {\n  // middlewares\n  app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default()({\n    enableTypes: ['json', 'form', 'text']\n  }));\n  app.use(koa_json__WEBPACK_IMPORTED_MODULE_1___default()());\n  app.use(koa_logger__WEBPACK_IMPORTED_MODULE_4___default()()); // app.use(require('koa-static')(__dirname + '/public'))\n  // app.use(views(__dirname + '/views', {\n  //   extension: 'pug'\n  // }))\n  // logger\n\n  app.use(async (ctx, next) => {\n    const start = new Date();\n    await next();\n    const ms = new Date() - start;\n    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);\n  }); // routes\n\n  app.use(_routes_apis__WEBPACK_IMPORTED_MODULE_5___default.a.routes(), _routes_apis__WEBPACK_IMPORTED_MODULE_5___default.a.allowedMethods()); // error-handling\n\n  app.on('error', (err, ctx) => {\n    console.error('server error', err, ctx);\n  });\n  module.exports = app;\n} catch (e) {\n  console.log('e', e);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./models/resModel.js":
/*!****************************!*\
  !*** ./models/resModel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class ResModel {\n  constructor(code, message, data) {\n    // if (typeof code === 'string') {\n    //   this.message = data\n    //   data = null\n    //   message = null\n    // }\n    if (code) {\n      this.code = code;\n    }\n\n    if (message) {\n      this.message = message;\n    }\n\n    if (data) {\n      this.data = data;\n    }\n  }\n\n}\n\nmodule.exports = {\n  ResModel\n};\n\n//# sourceURL=webpack:///./models/resModel.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./routes/apis.js":
/*!************************!*\
  !*** ./routes/apis.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const router = __webpack_require__(/*! koa-router */ \"koa-router\")();\n\nconst {\n  ResModel\n} = __webpack_require__(/*! ../models/resModel.js */ \"./models/resModel.js\");\n\nrouter.prefix('/api');\nrouter.get('/string', async (ctx, next) => {\n  ctx.body = 'koa2 string';\n});\nrouter.post('/user', async (ctx, next) => {\n  const {\n    name,\n    email\n  } = ctx.request.body;\n\n  if (!name || !email) {\n    ctx.body = JSON.stringify(new ResModel(404, 'name与email不能为空'), null, 2);\n    return;\n  }\n\n  if (ctx.request.header.role !== 'admin') {\n    ctx.body = JSON.stringify(new ResModel(401, 'unauthorized post'), null, 2);\n    return;\n  }\n\n  let resdata = { ...ctx.request.body\n  };\n  ctx.body = JSON.stringify(new ResModel(200, '上传成功', resdata), null, 2);\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/apis.js?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");\n\n//# sourceURL=webpack:///external_%22koa-json%22?");

/***/ }),

/***/ "koa-logger":
/*!*****************************!*\
  !*** external "koa-logger" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-logger\");\n\n//# sourceURL=webpack:///external_%22koa-logger%22?");

/***/ }),

/***/ "koa-onerror":
/*!******************************!*\
  !*** external "koa-onerror" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-onerror\");\n\n//# sourceURL=webpack:///external_%22koa-onerror%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ })

/******/ });