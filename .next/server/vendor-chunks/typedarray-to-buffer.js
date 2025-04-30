"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/typedarray-to-buffer";
exports.ids = ["vendor-chunks/typedarray-to-buffer"];
exports.modules = {

/***/ "(ssr)/./node_modules/typedarray-to-buffer/index.js":
/*!****************************************************!*\
  !*** ./node_modules/typedarray-to-buffer/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Convert a typed array to a Buffer without a copy\n *\n * Author:   Feross Aboukhadijeh <https://feross.org>\n * License:  MIT\n *\n * `npm install typedarray-to-buffer`\n */ \nvar isTypedArray = (__webpack_require__(/*! is-typedarray */ \"(ssr)/./node_modules/is-typedarray/index.js\").strict);\nmodule.exports = function typedarrayToBuffer(arr) {\n    if (isTypedArray(arr)) {\n        // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer\n        var buf = Buffer.from(arr.buffer);\n        if (arr.byteLength !== arr.buffer.byteLength) {\n            // Respect the \"view\", i.e. byteOffset and byteLength, without doing a copy\n            buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);\n        }\n        return buf;\n    } else {\n        // Pass through all other types to `Buffer.from`\n        return Buffer.from(arr);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHlwZWRhcnJheS10by1idWZmZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQztBQUVELElBQUlBLGVBQWVDLGdHQUErQjtBQUVsREUsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLG1CQUFvQkMsR0FBRztJQUMvQyxJQUFJTixhQUFhTSxNQUFNO1FBQ3JCLG1GQUFtRjtRQUNuRixJQUFJQyxNQUFNQyxPQUFPQyxJQUFJLENBQUNILElBQUlJLE1BQU07UUFDaEMsSUFBSUosSUFBSUssVUFBVSxLQUFLTCxJQUFJSSxNQUFNLENBQUNDLFVBQVUsRUFBRTtZQUM1QywyRUFBMkU7WUFDM0VKLE1BQU1BLElBQUlLLEtBQUssQ0FBQ04sSUFBSU8sVUFBVSxFQUFFUCxJQUFJTyxVQUFVLEdBQUdQLElBQUlLLFVBQVU7UUFDakU7UUFDQSxPQUFPSjtJQUNULE9BQU87UUFDTCxnREFBZ0Q7UUFDaEQsT0FBT0MsT0FBT0MsSUFBSSxDQUFDSDtJQUNyQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmF1bHQvLi9ub2RlX21vZHVsZXMvdHlwZWRhcnJheS10by1idWZmZXIvaW5kZXguanM/NjIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnZlcnQgYSB0eXBlZCBhcnJheSB0byBhIEJ1ZmZlciB3aXRob3V0IGEgY29weVxuICpcbiAqIEF1dGhvcjogICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBMaWNlbnNlOiAgTUlUXG4gKlxuICogYG5wbSBpbnN0YWxsIHR5cGVkYXJyYXktdG8tYnVmZmVyYFxuICovXG5cbnZhciBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCdpcy10eXBlZGFycmF5Jykuc3RyaWN0XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHlwZWRhcnJheVRvQnVmZmVyIChhcnIpIHtcbiAgaWYgKGlzVHlwZWRBcnJheShhcnIpKSB7XG4gICAgLy8gVG8gYXZvaWQgYSBjb3B5LCB1c2UgdGhlIHR5cGVkIGFycmF5J3MgdW5kZXJseWluZyBBcnJheUJ1ZmZlciB0byBiYWNrIG5ldyBCdWZmZXJcbiAgICB2YXIgYnVmID0gQnVmZmVyLmZyb20oYXJyLmJ1ZmZlcilcbiAgICBpZiAoYXJyLmJ5dGVMZW5ndGggIT09IGFyci5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgLy8gUmVzcGVjdCB0aGUgXCJ2aWV3XCIsIGkuZS4gYnl0ZU9mZnNldCBhbmQgYnl0ZUxlbmd0aCwgd2l0aG91dCBkb2luZyBhIGNvcHlcbiAgICAgIGJ1ZiA9IGJ1Zi5zbGljZShhcnIuYnl0ZU9mZnNldCwgYXJyLmJ5dGVPZmZzZXQgKyBhcnIuYnl0ZUxlbmd0aClcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZlxuICB9IGVsc2Uge1xuICAgIC8vIFBhc3MgdGhyb3VnaCBhbGwgb3RoZXIgdHlwZXMgdG8gYEJ1ZmZlci5mcm9tYFxuICAgIHJldHVybiBCdWZmZXIuZnJvbShhcnIpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpc1R5cGVkQXJyYXkiLCJyZXF1aXJlIiwic3RyaWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInR5cGVkYXJyYXlUb0J1ZmZlciIsImFyciIsImJ1ZiIsIkJ1ZmZlciIsImZyb20iLCJidWZmZXIiLCJieXRlTGVuZ3RoIiwic2xpY2UiLCJieXRlT2Zmc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/typedarray-to-buffer/index.js\n");

/***/ })

};
;