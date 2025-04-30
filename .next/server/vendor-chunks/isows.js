"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/isows";
exports.ids = ["vendor-chunks/isows"];
exports.modules = {

/***/ "(ssr)/./node_modules/isows/_cjs/index.js":
/*!******************************************!*\
  !*** ./node_modules/isows/_cjs/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.WebSocket = void 0;\nconst WebSocket_ = __webpack_require__(/*! ws */ \"(ssr)/./node_modules/ws/index.js\");\nconst utils_js_1 = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/isows/_cjs/utils.js\");\nexports.WebSocket = (()=>{\n    try {\n        return (0, utils_js_1.getNativeWebSocket)();\n    } catch  {\n        if (WebSocket_.WebSocket) return WebSocket_.WebSocket;\n        return WebSocket_;\n    }\n})(); //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvd3MvX2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3REQsaUJBQWlCLEdBQUcsS0FBSztBQUN6QixNQUFNRyxhQUFhQyxtQkFBT0EsQ0FBQyw0Q0FBSTtBQUMvQixNQUFNQyxhQUFhRCxtQkFBT0EsQ0FBQyw0REFBWTtBQUN2Q0osaUJBQWlCLEdBQUcsQ0FBQztJQUNqQixJQUFJO1FBQ0EsT0FBTyxDQUFDLEdBQUdLLFdBQVdDLGtCQUFrQjtJQUM1QyxFQUNBLE9BQU07UUFDRixJQUFJSCxXQUFXRCxTQUFTLEVBQ3BCLE9BQU9DLFdBQVdELFNBQVM7UUFDL0IsT0FBT0M7SUFDWDtBQUNKLE1BQ0EsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmF1bHQvLi9ub2RlX21vZHVsZXMvaXNvd3MvX2Nqcy9pbmRleC5qcz8xNjJkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5XZWJTb2NrZXQgPSB2b2lkIDA7XG5jb25zdCBXZWJTb2NrZXRfID0gcmVxdWlyZShcIndzXCIpO1xuY29uc3QgdXRpbHNfanNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xuZXhwb3J0cy5XZWJTb2NrZXQgPSAoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoMCwgdXRpbHNfanNfMS5nZXROYXRpdmVXZWJTb2NrZXQpKCk7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgaWYgKFdlYlNvY2tldF8uV2ViU29ja2V0KVxuICAgICAgICAgICAgcmV0dXJuIFdlYlNvY2tldF8uV2ViU29ja2V0O1xuICAgICAgICByZXR1cm4gV2ViU29ja2V0XztcbiAgICB9XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiV2ViU29ja2V0IiwiV2ViU29ja2V0XyIsInJlcXVpcmUiLCJ1dGlsc19qc18xIiwiZ2V0TmF0aXZlV2ViU29ja2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/isows/_cjs/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/isows/_cjs/utils.js":
/*!******************************************!*\
  !*** ./node_modules/isows/_cjs/utils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.getNativeWebSocket = void 0;\nfunction getNativeWebSocket() {\n    if (typeof WebSocket !== \"undefined\") return WebSocket;\n    if (typeof global.WebSocket !== \"undefined\") return global.WebSocket;\n    if (typeof window.WebSocket !== \"undefined\") return window.WebSocket;\n    if (typeof self.WebSocket !== \"undefined\") return self.WebSocket;\n    throw new Error(\"`WebSocket` is not supported in this environment\");\n}\nexports.getNativeWebSocket = getNativeWebSocket; //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvd3MvX2Nqcy91dGlscy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3REQsMEJBQTBCLEdBQUcsS0FBSztBQUNsQyxTQUFTRTtJQUNMLElBQUksT0FBT0MsY0FBYyxhQUNyQixPQUFPQTtJQUNYLElBQUksT0FBT0MsT0FBT0QsU0FBUyxLQUFLLGFBQzVCLE9BQU9DLE9BQU9ELFNBQVM7SUFDM0IsSUFBSSxPQUFPRSxPQUFPRixTQUFTLEtBQUssYUFDNUIsT0FBT0UsT0FBT0YsU0FBUztJQUMzQixJQUFJLE9BQU9HLEtBQUtILFNBQVMsS0FBSyxhQUMxQixPQUFPRyxLQUFLSCxTQUFTO0lBQ3pCLE1BQU0sSUFBSUksTUFBTTtBQUNwQjtBQUNBUCwwQkFBMEIsR0FBR0Usb0JBQzdCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYXZhdWx0Ly4vbm9kZV9tb2R1bGVzL2lzb3dzL19janMvdXRpbHMuanM/MTVjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0TmF0aXZlV2ViU29ja2V0ID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0TmF0aXZlV2ViU29ja2V0KCkge1xuICAgIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gV2ViU29ja2V0O1xuICAgIGlmICh0eXBlb2YgZ2xvYmFsLldlYlNvY2tldCAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5XZWJTb2NrZXQ7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gd2luZG93LldlYlNvY2tldDtcbiAgICBpZiAodHlwZW9mIHNlbGYuV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gc2VsZi5XZWJTb2NrZXQ7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYFdlYlNvY2tldGAgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50XCIpO1xufVxuZXhwb3J0cy5nZXROYXRpdmVXZWJTb2NrZXQgPSBnZXROYXRpdmVXZWJTb2NrZXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJnZXROYXRpdmVXZWJTb2NrZXQiLCJXZWJTb2NrZXQiLCJnbG9iYWwiLCJ3aW5kb3ciLCJzZWxmIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/isows/_cjs/utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/isows/_esm/index.js":
/*!******************************************!*\
  !*** ./node_modules/isows/_esm/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebSocket: () => (/* binding */ WebSocket)\n/* harmony export */ });\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ \"(ssr)/./node_modules/ws/wrapper.mjs\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/isows/_esm/utils.js\");\n\n\nconst WebSocket = (()=>{\n    try {\n        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getNativeWebSocket)();\n    } catch  {\n        if (ws__WEBPACK_IMPORTED_MODULE_0__.WebSocket) return ws__WEBPACK_IMPORTED_MODULE_0__.WebSocket;\n        return ws__WEBPACK_IMPORTED_MODULE_0__;\n    }\n})(); //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvd3MvX2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFDZTtBQUN6QyxNQUFNRSxZQUFZLENBQUM7SUFDdEIsSUFBSTtRQUNBLE9BQU9ELDZEQUFrQkE7SUFDN0IsRUFDQSxPQUFNO1FBQ0YsSUFBSUQseUNBQW9CLEVBQ3BCLE9BQU9BLHlDQUFvQjtRQUMvQixPQUFPQSwrQkFBVUE7SUFDckI7QUFDSixLQUFLLENBQ0wsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmF1bHQvLi9ub2RlX21vZHVsZXMvaXNvd3MvX2VzbS9pbmRleC5qcz9hMmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFdlYlNvY2tldF8gZnJvbSBcIndzXCI7XG5pbXBvcnQgeyBnZXROYXRpdmVXZWJTb2NrZXQgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuZXhwb3J0IGNvbnN0IFdlYlNvY2tldCA9ICgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGdldE5hdGl2ZVdlYlNvY2tldCgpO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIGlmIChXZWJTb2NrZXRfLldlYlNvY2tldClcbiAgICAgICAgICAgIHJldHVybiBXZWJTb2NrZXRfLldlYlNvY2tldDtcbiAgICAgICAgcmV0dXJuIFdlYlNvY2tldF87XG4gICAgfVxufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJXZWJTb2NrZXRfIiwiZ2V0TmF0aXZlV2ViU29ja2V0IiwiV2ViU29ja2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/isows/_esm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/isows/_esm/utils.js":
/*!******************************************!*\
  !*** ./node_modules/isows/_esm/utils.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNativeWebSocket: () => (/* binding */ getNativeWebSocket)\n/* harmony export */ });\nfunction getNativeWebSocket() {\n    if (typeof WebSocket !== \"undefined\") return WebSocket;\n    if (typeof global.WebSocket !== \"undefined\") return global.WebSocket;\n    if (typeof window.WebSocket !== \"undefined\") return window.WebSocket;\n    if (typeof self.WebSocket !== \"undefined\") return self.WebSocket;\n    throw new Error(\"`WebSocket` is not supported in this environment\");\n} //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvd3MvX2VzbS91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0E7SUFDWixJQUFJLE9BQU9DLGNBQWMsYUFDckIsT0FBT0E7SUFDWCxJQUFJLE9BQU9DLE9BQU9ELFNBQVMsS0FBSyxhQUM1QixPQUFPQyxPQUFPRCxTQUFTO0lBQzNCLElBQUksT0FBT0UsT0FBT0YsU0FBUyxLQUFLLGFBQzVCLE9BQU9FLE9BQU9GLFNBQVM7SUFDM0IsSUFBSSxPQUFPRyxLQUFLSCxTQUFTLEtBQUssYUFDMUIsT0FBT0csS0FBS0gsU0FBUztJQUN6QixNQUFNLElBQUlJLE1BQU07QUFDcEIsRUFDQSxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmF2YXVsdC8uL25vZGVfbW9kdWxlcy9pc293cy9fZXNtL3V0aWxzLmpzPzgwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGl2ZVdlYlNvY2tldCgpIHtcbiAgICBpZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgcmV0dXJuIFdlYlNvY2tldDtcbiAgICBpZiAodHlwZW9mIGdsb2JhbC5XZWJTb2NrZXQgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHJldHVybiBnbG9iYWwuV2ViU29ja2V0O1xuICAgIGlmICh0eXBlb2Ygd2luZG93LldlYlNvY2tldCAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5XZWJTb2NrZXQ7XG4gICAgaWYgKHR5cGVvZiBzZWxmLldlYlNvY2tldCAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgcmV0dXJuIHNlbGYuV2ViU29ja2V0O1xuICAgIHRocm93IG5ldyBFcnJvcihcImBXZWJTb2NrZXRgIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudFwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6WyJnZXROYXRpdmVXZWJTb2NrZXQiLCJXZWJTb2NrZXQiLCJnbG9iYWwiLCJ3aW5kb3ciLCJzZWxmIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/isows/_esm/utils.js\n");

/***/ })

};
;