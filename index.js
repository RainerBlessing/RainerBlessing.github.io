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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// install a JSONP callback for chunk loading\n/******/ \tfunction webpackJsonpCallback(data) {\n/******/ \t\tvar chunkIds = data[0];\n/******/ \t\tvar moreModules = data[1];\n/******/\n/******/\n/******/ \t\t// add \"moreModules\" to the modules object,\n/******/ \t\t// then flag all \"chunkIds\" as loaded and fire callback\n/******/ \t\tvar moduleId, chunkId, i = 0, resolves = [];\n/******/ \t\tfor(;i < chunkIds.length; i++) {\n/******/ \t\t\tchunkId = chunkIds[i];\n/******/ \t\t\tif(installedChunks[chunkId]) {\n/******/ \t\t\t\tresolves.push(installedChunks[chunkId][0]);\n/******/ \t\t\t}\n/******/ \t\t\tinstalledChunks[chunkId] = 0;\n/******/ \t\t}\n/******/ \t\tfor(moduleId in moreModules) {\n/******/ \t\t\tif(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {\n/******/ \t\t\t\tmodules[moduleId] = moreModules[moduleId];\n/******/ \t\t\t}\n/******/ \t\t}\n/******/ \t\tif(parentJsonpFunction) parentJsonpFunction(data);\n/******/\n/******/ \t\twhile(resolves.length) {\n/******/ \t\t\tresolves.shift()();\n/******/ \t\t}\n/******/\n/******/ \t};\n/******/\n/******/\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// object to store loaded and loading chunks\n/******/ \t// undefined = chunk not loaded, null = chunk preloaded/prefetched\n/******/ \t// Promise = chunk loading, 0 = chunk loaded\n/******/ \tvar installedChunks = {\n/******/ \t\t\"main\": 0\n/******/ \t};\n/******/\n/******/\n/******/\n/******/ \t// script path function\n/******/ \tfunction jsonpScriptSrc(chunkId) {\n/******/ \t\treturn __webpack_require__.p + \"\" + chunkId + \".index.js\"\n/******/ \t}\n/******/\n/******/ \t// object to store loaded and loading wasm modules\n/******/ \tvar installedWasmModules = {};\n/******/\n/******/ \tfunction promiseResolve() { return Promise.resolve(); }\n/******/\n/******/ \tvar wasmImportObjects = {\n/******/ \t\t\"./pkg/canvas_bg.wasm\": function() {\n/******/ \t\t\treturn {\n/******/ \t\t\t\t\"./canvas.js\": {\n/******/ \t\t\t\t\t\"__wbindgen_object_drop_ref\": function(p0i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__wbindgen_object_drop_ref\"](p0i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_instanceof_CanvasRenderingContext2D\": function(p0i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_instanceof_CanvasRenderingContext2D\"](p0i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_f_begin_path_CanvasRenderingContext2D\": function(p0i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_f_begin_path_CanvasRenderingContext2D\"](p0i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_f_stroke_CanvasRenderingContext2D\": function(p0i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_f_stroke_CanvasRenderingContext2D\"](p0i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_f_arc_CanvasRenderingContext2D\": function(p0i32,p1f64,p2f64,p3f64,p4f64,p5f64) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_f_arc_CanvasRenderingContext2D\"](p0i32,p1f64,p2f64,p3f64,p4f64,p5f64);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_f_move_to_CanvasRenderingContext2D\": function(p0i32,p1f64,p2f64) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_f_move_to_CanvasRenderingContext2D\"](p0i32,p1f64,p2f64);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_f_get_element_by_id_Document\": function(p0i32,p1i32,p2i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_f_get_element_by_id_Document\"](p0i32,p1i32,p2i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_instanceof_HTMLCanvasElement\": function(p0i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_instanceof_HTMLCanvasElement\"](p0i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_f_get_context_HTMLCanvasElement\": function(p0i32,p1i32,p2i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_f_get_context_HTMLCanvasElement\"](p0i32,p1i32,p2i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_instanceof_Window\": function(p0i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_instanceof_Window\"](p0i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__widl_f_document_Window\": function(p0i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__widl_f_document_Window\"](p0i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__wbg_newnoargs_8d1797b163dbc9fb\": function(p0i32,p1i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__wbg_newnoargs_8d1797b163dbc9fb\"](p0i32,p1i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__wbg_call_836fa928f74337e5\": function(p0i32,p1i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__wbg_call_836fa928f74337e5\"](p0i32,p1i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__wbindgen_object_clone_ref\": function(p0i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__wbindgen_object_clone_ref\"](p0i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__wbindgen_debug_string\": function(p0i32,p1i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__wbindgen_debug_string\"](p0i32,p1i32);\n/******/ \t\t\t\t\t},\n/******/ \t\t\t\t\t\"__wbindgen_throw\": function(p0i32,p1i32) {\n/******/ \t\t\t\t\t\treturn installedModules[\"./pkg/canvas.js\"].exports[\"__wbindgen_throw\"](p0i32,p1i32);\n/******/ \t\t\t\t\t}\n/******/ \t\t\t\t}\n/******/ \t\t\t};\n/******/ \t\t},\n/******/ \t};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/ \t// This file contains only the entry chunk.\n/******/ \t// The chunk loading function for additional chunks\n/******/ \t__webpack_require__.e = function requireEnsure(chunkId) {\n/******/ \t\tvar promises = [];\n/******/\n/******/\n/******/ \t\t// JSONP chunk loading for javascript\n/******/\n/******/ \t\tvar installedChunkData = installedChunks[chunkId];\n/******/ \t\tif(installedChunkData !== 0) { // 0 means \"already installed\".\n/******/\n/******/ \t\t\t// a Promise means \"currently loading\".\n/******/ \t\t\tif(installedChunkData) {\n/******/ \t\t\t\tpromises.push(installedChunkData[2]);\n/******/ \t\t\t} else {\n/******/ \t\t\t\t// setup Promise in chunk cache\n/******/ \t\t\t\tvar promise = new Promise(function(resolve, reject) {\n/******/ \t\t\t\t\tinstalledChunkData = installedChunks[chunkId] = [resolve, reject];\n/******/ \t\t\t\t});\n/******/ \t\t\t\tpromises.push(installedChunkData[2] = promise);\n/******/\n/******/ \t\t\t\t// start chunk loading\n/******/ \t\t\t\tvar script = document.createElement('script');\n/******/ \t\t\t\tvar onScriptComplete;\n/******/\n/******/ \t\t\t\tscript.charset = 'utf-8';\n/******/ \t\t\t\tscript.timeout = 120;\n/******/ \t\t\t\tif (__webpack_require__.nc) {\n/******/ \t\t\t\t\tscript.setAttribute(\"nonce\", __webpack_require__.nc);\n/******/ \t\t\t\t}\n/******/ \t\t\t\tscript.src = jsonpScriptSrc(chunkId);\n/******/\n/******/ \t\t\t\tonScriptComplete = function (event) {\n/******/ \t\t\t\t\t// avoid mem leaks in IE.\n/******/ \t\t\t\t\tscript.onerror = script.onload = null;\n/******/ \t\t\t\t\tclearTimeout(timeout);\n/******/ \t\t\t\t\tvar chunk = installedChunks[chunkId];\n/******/ \t\t\t\t\tif(chunk !== 0) {\n/******/ \t\t\t\t\t\tif(chunk) {\n/******/ \t\t\t\t\t\t\tvar errorType = event && (event.type === 'load' ? 'missing' : event.type);\n/******/ \t\t\t\t\t\t\tvar realSrc = event && event.target && event.target.src;\n/******/ \t\t\t\t\t\t\tvar error = new Error('Loading chunk ' + chunkId + ' failed.\\n(' + errorType + ': ' + realSrc + ')');\n/******/ \t\t\t\t\t\t\terror.type = errorType;\n/******/ \t\t\t\t\t\t\terror.request = realSrc;\n/******/ \t\t\t\t\t\t\tchunk[1](error);\n/******/ \t\t\t\t\t\t}\n/******/ \t\t\t\t\t\tinstalledChunks[chunkId] = undefined;\n/******/ \t\t\t\t\t}\n/******/ \t\t\t\t};\n/******/ \t\t\t\tvar timeout = setTimeout(function(){\n/******/ \t\t\t\t\tonScriptComplete({ type: 'timeout', target: script });\n/******/ \t\t\t\t}, 120000);\n/******/ \t\t\t\tscript.onerror = script.onload = onScriptComplete;\n/******/ \t\t\t\tdocument.head.appendChild(script);\n/******/ \t\t\t}\n/******/ \t\t}\n/******/\n/******/ \t\t// Fetch + compile chunk loading for webassembly\n/******/\n/******/ \t\tvar wasmModules = {\"1\":[\"./pkg/canvas_bg.wasm\"]}[chunkId] || [];\n/******/\n/******/ \t\twasmModules.forEach(function(wasmModuleId) {\n/******/ \t\t\tvar installedWasmModuleData = installedWasmModules[wasmModuleId];\n/******/\n/******/ \t\t\t// a Promise means \"currently loading\" or \"already loaded\".\n/******/ \t\t\tif(installedWasmModuleData)\n/******/ \t\t\t\tpromises.push(installedWasmModuleData);\n/******/ \t\t\telse {\n/******/ \t\t\t\tvar importObject = wasmImportObjects[wasmModuleId]();\n/******/ \t\t\t\tvar req = fetch(__webpack_require__.p + \"\" + {\"./pkg/canvas_bg.wasm\":\"49ba326fcc4c56f1e58f\"}[wasmModuleId] + \".module.wasm\");\n/******/ \t\t\t\tvar promise;\n/******/ \t\t\t\tif(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {\n/******/ \t\t\t\t\tpromise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {\n/******/ \t\t\t\t\t\treturn WebAssembly.instantiate(items[0], items[1]);\n/******/ \t\t\t\t\t});\n/******/ \t\t\t\t} else if(typeof WebAssembly.instantiateStreaming === 'function') {\n/******/ \t\t\t\t\tpromise = WebAssembly.instantiateStreaming(req, importObject);\n/******/ \t\t\t\t} else {\n/******/ \t\t\t\t\tvar bytesPromise = req.then(function(x) { return x.arrayBuffer(); });\n/******/ \t\t\t\t\tpromise = bytesPromise.then(function(bytes) {\n/******/ \t\t\t\t\t\treturn WebAssembly.instantiate(bytes, importObject);\n/******/ \t\t\t\t\t});\n/******/ \t\t\t\t}\n/******/ \t\t\t\tpromises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {\n/******/ \t\t\t\t\treturn __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;\n/******/ \t\t\t\t}));\n/******/ \t\t\t}\n/******/ \t\t});\n/******/ \t\treturn Promise.all(promises);\n/******/ \t};\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// on error function for async loading\n/******/ \t__webpack_require__.oe = function(err) { console.error(err); throw err; };\n/******/\n/******/ \t// object with all WebAssembly.instance exports\n/******/ \t__webpack_require__.w = {};\n/******/\n/******/ \tvar jsonpArray = window[\"webpackJsonp\"] = window[\"webpackJsonp\"] || [];\n/******/ \tvar oldJsonpFunction = jsonpArray.push.bind(jsonpArray);\n/******/ \tjsonpArray.push = webpackJsonpCallback;\n/******/ \tjsonpArray = jsonpArray.slice();\n/******/ \tfor(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);\n/******/ \tvar parentJsonpFunction = oldJsonpFunction;\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./index.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./index.js\":\n/*!******************!*\\\n  !*** ./index.js ***!\n  \\******************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\neval(\"// For more comments about what's going on here, check out the `hello_world`\\n// example.\\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg/canvas */ \\\"./pkg/canvas.js\\\"))\\n  .catch(console.error);\\n\\n\\n//# sourceURL=webpack:///./index.js?\");\n\n/***/ })\n\n/******/ });\n\n//# sourceURL=webpack:///./dist/index.js?");

/***/ })

/******/ });