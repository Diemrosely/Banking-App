"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("// This file must be bundled in the app's client layer, it shouldn't be directly\n// imported by the server.\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"createServerReference\", ({\n    enumerable: true,\n    get: function() {\n        return createServerReference;\n    }\n}));\nconst _appcallserver = __webpack_require__(/*! next/dist/client/app-call-server */ \"(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js\");\nfunction createServerReference(id) {\n    // Since we're using the Edge build of Flight client for SSR [1], here we need to\n    // also use the same Edge build to create the reference. For the client bundle,\n    // we use the default and let Webpack to resolve it to the correct version.\n    // 1: https://github.com/vercel/next.js/blob/16eb80b0b0be13f04a6407943664b5efd8f3d7d0/packages/next/src/server/app-render/use-flight-response.tsx#L24-L26\n    const { createServerReference: createServerReferenceImpl } =  false ? 0 : __webpack_require__(/*! react-server-dom-webpack/client */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-server-dom-webpack/client.js\");\n    return createServerReferenceImpl(id, _appcallserver.callServer);\n}\n\n//# sourceMappingURL=action-client-wrapper.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseURBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdUJBQXVCLG1CQUFPLENBQUMsZ0hBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFtRCxFQUFFLE1BQTBCLEdBQUcsQ0FBK0MsR0FBRyxtQkFBTyxDQUFDLGlJQUFpQztBQUN6TDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanM/Y2RhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgbXVzdCBiZSBidW5kbGVkIGluIHRoZSBhcHAncyBjbGllbnQgbGF5ZXIsIGl0IHNob3VsZG4ndCBiZSBkaXJlY3RseVxuLy8gaW1wb3J0ZWQgYnkgdGhlIHNlcnZlci5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlU2VydmVyUmVmZXJlbmNlXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTZXJ2ZXJSZWZlcmVuY2U7XG4gICAgfVxufSk7XG5jb25zdCBfYXBwY2FsbHNlcnZlciA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvY2xpZW50L2FwcC1jYWxsLXNlcnZlclwiKTtcbmZ1bmN0aW9uIGNyZWF0ZVNlcnZlclJlZmVyZW5jZShpZCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIHVzaW5nIHRoZSBFZGdlIGJ1aWxkIG9mIEZsaWdodCBjbGllbnQgZm9yIFNTUiBbMV0sIGhlcmUgd2UgbmVlZCB0b1xuICAgIC8vIGFsc28gdXNlIHRoZSBzYW1lIEVkZ2UgYnVpbGQgdG8gY3JlYXRlIHRoZSByZWZlcmVuY2UuIEZvciB0aGUgY2xpZW50IGJ1bmRsZSxcbiAgICAvLyB3ZSB1c2UgdGhlIGRlZmF1bHQgYW5kIGxldCBXZWJwYWNrIHRvIHJlc29sdmUgaXQgdG8gdGhlIGNvcnJlY3QgdmVyc2lvbi5cbiAgICAvLyAxOiBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvYmxvYi8xNmViODBiMGIwYmUxM2YwNGE2NDA3OTQzNjY0YjVlZmQ4ZjNkN2QwL3BhY2thZ2VzL25leHQvc3JjL3NlcnZlci9hcHAtcmVuZGVyL3VzZS1mbGlnaHQtcmVzcG9uc2UudHN4I0wyNC1MMjZcbiAgICBjb25zdCB7IGNyZWF0ZVNlcnZlclJlZmVyZW5jZTogY3JlYXRlU2VydmVyUmVmZXJlbmNlSW1wbCB9ID0gISFwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPyByZXF1aXJlKFwicmVhY3Qtc2VydmVyLWRvbS13ZWJwYWNrL2NsaWVudC5lZGdlXCIpIDogcmVxdWlyZShcInJlYWN0LXNlcnZlci1kb20td2VicGFjay9jbGllbnRcIik7XG4gICAgcmV0dXJuIGNyZWF0ZVNlcnZlclJlZmVyZW5jZUltcGwoaWQsIF9hcHBjYWxsc2VydmVyLmNhbGxTZXJ2ZXIpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/actions/user.actions */ \"(app-pages-browser)/./lib/actions/user.actions.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Footer = (param)=>{\n    let { user, type = \"desktop\" } = param;\n    const handleLogOut = async ()=>{\n        const loggedOut = await (0,_lib_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__.logoutAccount)();\n        if (loggedOut) router.push(\"/sign-in\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"footer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: type === \"mobile\" ? \"footer-name_mobile\" : \"footer_name\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xl font-bold text-gray-700\",\n                    children: user.name[0]\n                }, void 0, false, {\n                    fileName: \"/Users/diem/Desktop/Coding Projects/Banking-App/components/Footer.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/diem/Desktop/Coding Projects/Banking-App/components/Footer.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: type === \"mobile\" ? \"footer-email_mobile\" : \"footer_email\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-14 truncate font-semibold text-gray-600\",\n                        children: user.name\n                    }, void 0, false, {\n                        fileName: \"/Users/diem/Desktop/Coding Projects/Banking-App/components/Footer.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-14 truncate font-normal text-gray-600\",\n                        children: user.email\n                    }, void 0, false, {\n                        fileName: \"/Users/diem/Desktop/Coding Projects/Banking-App/components/Footer.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/diem/Desktop/Coding Projects/Banking-App/components/Footer.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"footer_image\",\n                onClick: handleLogOut,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"icons/logout.svg\",\n                    fill: true,\n                    alt: \"jsm\"\n                }, void 0, false, {\n                    fileName: \"/Users/diem/Desktop/Coding Projects/Banking-App/components/Footer.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/diem/Desktop/Coding Projects/Banking-App/components/Footer.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diem/Desktop/Coding Projects/Banking-App/components/Footer.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJEO0FBQzdCO0FBQ0w7QUFFekIsTUFBTUcsU0FBUztRQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTyxTQUFTLEVBQWU7SUFDckQsTUFBTUMsZUFBZTtRQUNuQixNQUFNQyxZQUFZLE1BQU1QLHdFQUFhQTtRQUVyQyxJQUFHTyxXQUFXQyxPQUFPQyxJQUFJLENBQUM7SUFDNUI7SUFDQSxxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFXTixTQUFTLFdBQVcsdUJBQXVCOzBCQUN6RCw0RUFBQ1E7b0JBQUVGLFdBQVU7OEJBQ1ZQLEtBQUtVLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7OzswQkFHakIsOERBQUNGO2dCQUFJRCxXQUFXTixTQUFTLFdBQVcsd0JBQXdCOztrQ0FDMUQsOERBQUNVO3dCQUFHSixXQUFVO2tDQUNYUCxLQUFLVSxJQUFJOzs7Ozs7a0NBRVosOERBQUNEO3dCQUFFRixXQUFVO2tDQUNWUCxLQUFLWSxLQUFLOzs7Ozs7Ozs7Ozs7MEJBS2YsOERBQUNKO2dCQUFJRCxXQUFVO2dCQUFlTSxTQUFTWDswQkFDbkMsNEVBQUNMLGtEQUFLQTtvQkFBQ2lCLEtBQUk7b0JBQW1CQyxJQUFJO29CQUFDQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluRDtLQTVCTWpCO0FBOEJOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeD9hNzlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZ291dEFjY291bnQgfSBmcm9tICdAL2xpYi9hY3Rpb25zL3VzZXIuYWN0aW9ucyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgRm9vdGVyID0gKHsgdXNlciwgdHlwZSA9IFwiZGVza3RvcFwiIH06IEZvb3RlclByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUxvZ091dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBsb2dnZWRPdXQgPSBhd2FpdCBsb2dvdXRBY2NvdW50KCk7IFxuXG4gICAgaWYobG9nZ2VkT3V0KSByb3V0ZXIucHVzaCgnL3NpZ24taW4nKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlID09PSAnbW9iaWxlJyA/ICdmb290ZXItbmFtZV9tb2JpbGUnIDogJ2Zvb3Rlcl9uYW1lJ30+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwJz5cbiAgICAgICAgICAgIHt1c2VyLm5hbWVbMF19XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGUgPT09ICdtb2JpbGUnID8gJ2Zvb3Rlci1lbWFpbF9tb2JpbGUnIDogJ2Zvb3Rlcl9lbWFpbCd9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMTQgdHJ1bmNhdGUgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgIHt1c2VyLm5hbWV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtMTQgdHJ1bmNhdGUgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICB7dXNlci5lbWFpbH1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9pbWFnZScgb25DbGljaz17aGFuZGxlTG9nT3V0fT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpY29ucy9sb2dvdXQuc3ZnXCIgZmlsbCBhbHQ9XCJqc21cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiXSwibmFtZXMiOlsibG9nb3V0QWNjb3VudCIsIkltYWdlIiwiUmVhY3QiLCJGb290ZXIiLCJ1c2VyIiwidHlwZSIsImhhbmRsZUxvZ091dCIsImxvZ2dlZE91dCIsInJvdXRlciIsInB1c2giLCJmb290ZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwibmFtZSIsImgxIiwiZW1haWwiLCJvbkNsaWNrIiwic3JjIiwiZmlsbCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Footer.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./lib/actions/user.actions.ts":
/*!*************************************!*\
  !*** ./lib/actions/user.actions.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoggedInUser: function() { return /* binding */ getLoggedInUser; },
/* harmony export */   logoutAccount: function() { return /* binding */ logoutAccount; },
/* harmony export */   signIn: function() { return /* binding */ signIn; },
/* harmony export */   signUp: function() { return /* binding */ signUp; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"0696fa4e4ebd7bd424a5b168b9f67d41c57bf34a":"$$ACTION_2","1e6bec7da9914f4d082ab9411b7657f5331dea52":"signIn","2605c16613967570250194d4fcf10efdeafc0e1c":"logoutAccount","40721afb0b34a99c161a6fe55fa17478adaf5ca8":"getLoggedInUser","93ac86976c42ab94991b78513aab7edad49a521e":"$$ACTION_0","972601798a44beb0cb60e32aaeb3dc97a84e0962":"signUp","c617f0cad69fd2407ab3b5b8fe32210c5ac3c608":"$$ACTION_1"} */ var logoutAccount = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("2605c16613967570250194d4fcf10efdeafc0e1c");

var signIn = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("1e6bec7da9914f4d082ab9411b7657f5331dea52");
var signUp = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("972601798a44beb0cb60e32aaeb3dc97a84e0962");
var getLoggedInUser = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("40721afb0b34a99c161a6fe55fa17478adaf5ca8");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});