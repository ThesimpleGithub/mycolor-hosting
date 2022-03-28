self["webpackHotUpdate_N_E"]("pages/[season]",{

/***/ "./pages/explain.tsx":
/*!***************************!*\
  !*** ./pages/explain.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightAd": function() { return /* binding */ RightAd; },
/* harmony export */   "LeftAd": function() { return /* binding */ LeftAd; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _components_explain_ExplainSec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/explain/ExplainSec */ "./components/explain/ExplainSec.tsx");
/* harmony import */ var _components_explain_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/explain/Header */ "./components/explain/Header.tsx");
/* harmony import */ var _components_explain_Pccs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/explain/Pccs */ "./components/explain/Pccs.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_resultPage_TopScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/resultPage/TopScroll */ "./components/resultPage/TopScroll.tsx");
/* harmony import */ var _components_Adsense__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Adsense */ "./components/Adsense.tsx");
/* harmony import */ var _components_Adfit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Adfit */ "./components/Adfit.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\company-mycolor\\pages\\explain.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  ", "\n  left: calc((100% - 720px) / 2 / 2 - 80px);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  ", "\n  right: calc((100% - 720px) / 2 / 2 - 80px);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  padding: 0 15px;\n  margin-bottom: 100px !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var Wrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.default)(_utils_theme__WEBPACK_IMPORTED_MODULE_9__.default.Container)(_templateObject());
_c = Wrapper;
var SideAds = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.css)(_templateObject2());
var RightAd = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.div(_templateObject3(), SideAds);
_c2 = RightAd;
var LeftAd = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.div(_templateObject4(), SideAds);
_c3 = LeftAd;

var explain = function explain() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true),
      onSideAds = _useState[0],
      setSideAds = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (window.innerWidth < 1100) setSideAds(false);
    window.addEventListener('resize', function () {
      if (window.innerWidth < 1100) setSideAds(false);else setSideAds(true);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        type: "text/javascript",
        src: "//t1.daumcdn.net/kas/static/ba.min.js",
        async: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_explain_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_explain_ExplainSec__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_explain_Pccs__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_TopScroll__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adsense__WEBPACK_IMPORTED_MODULE_6__.default, {
      slot: "2321304174",
      styles: "display:inline-block;width:720px;height:100px;",
      responsive: "false"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_7__.default, {
      unit: "DAN-trqsbvdjn2hv",
      width: "320",
      height: "50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), onSideAds ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RightAd, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_7__.default, {
          unit: "DAN-CLB4F2NPnCjZ7dZQ",
          width: "160",
          height: "600"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LeftAd, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adsense__WEBPACK_IMPORTED_MODULE_6__.default, {
          slot: "3456354078",
          styles: "display:inline-block;width:160px;height:600px",
          responsive: "false",
          format: "vertical"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this) : '']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(explain, "rY5V/UPnA8B0ZRqN0oGeJKx8ySM=");

/* harmony default export */ __webpack_exports__["default"] = (explain);

var _c, _c2, _c3;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "RightAd");
$RefreshReg$(_c3, "LeftAd");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwbGFpbi50c3giXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsInRoZW1lIiwiU2lkZUFkcyIsImNzcyIsIlJpZ2h0QWQiLCJMZWZ0QWQiLCJleHBsYWluIiwidXNlU3RhdGUiLCJvblNpZGVBZHMiLCJzZXRTaWRlQWRzIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLDJEQUFNLENBQUNDLDJEQUFELENBQVQsbUJBQWI7S0FBTUYsTztBQUlOLElBQU1HLE9BQU8sR0FBR0MsdURBQUgsb0JBQWI7QUFLTyxJQUFNQyxPQUFPLEdBQUdKLDJEQUFILHFCQUNoQkUsT0FEZ0IsQ0FBYjtNQUFNRSxPO0FBSU4sSUFBTUMsTUFBTSxHQUFHTCwyREFBSCxxQkFDZkUsT0FEZSxDQUFaO01BQU1HLE07O0FBSWIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNZQywrQ0FBUSxDQUFDLElBQUQsQ0FEcEI7QUFBQSxNQUNiQyxTQURhO0FBQUEsTUFDRkMsVUFERTs7QUFFcEJDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUF4QixFQUE4QkgsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUM5QkUsVUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDLFVBQUlGLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUF4QixFQUE4QkgsVUFBVSxDQUFDLEtBQUQsQ0FBVixDQUE5QixLQUNLQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ04sS0FIRDtBQUlELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxzQkFDRSw4REFBQyxPQUFEO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxpQkFEUDtBQUVFLFdBQUcsRUFBQyx1Q0FGTjtBQUdFLGFBQUs7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBUUUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBU0UsOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBVUUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBV0UsOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBWUUsOERBQUMsd0RBQUQ7QUFDRSxVQUFJLEVBQUMsWUFEUDtBQUVFLFlBQU0sRUFBQyxnREFGVDtBQUdFLGdCQUFVLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsZUFpQkUsOERBQUMsc0RBQUQ7QUFBTyxVQUFJLEVBQUMsa0JBQVo7QUFBK0IsV0FBSyxFQUFDLEtBQXJDO0FBQTJDLFlBQU0sRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGLEVBa0JHRCxTQUFTLGdCQUNSO0FBQUEsOEJBQ0UsOERBQUMsT0FBRDtBQUFBLCtCQUNFLDhEQUFDLHNEQUFEO0FBQU8sY0FBSSxFQUFDLHNCQUFaO0FBQW1DLGVBQUssRUFBQyxLQUF6QztBQUErQyxnQkFBTSxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSw4REFBQyxNQUFEO0FBQUEsK0JBQ0UsOERBQUMsd0RBQUQ7QUFDRSxjQUFJLEVBQUMsWUFEUDtBQUVFLGdCQUFNLEVBQUMsK0NBRlQ7QUFHRSxvQkFBVSxFQUFDLE9BSGI7QUFJRSxnQkFBTSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQWVSLEVBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBL0NEOztHQUFNRixPOztBQWlETiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc2Vhc29uXS5mNDQ2OTNhY2RmODI1NWQ2NDY5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cGxhaW5TZWMgZnJvbSAnLi4vY29tcG9uZW50cy9leHBsYWluL0V4cGxhaW5TZWMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwbGFpbi9IZWFkZXInO1xyXG5pbXBvcnQgUGNjcyBmcm9tICcuLi9jb21wb25lbnRzL2V4cGxhaW4vUGNjcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVG9wU2Nyb2xsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdWx0UGFnZS9Ub3BTY3JvbGwnO1xyXG5pbXBvcnQgQWRzZW5zZSBmcm9tICcuLi9jb21wb25lbnRzL0Fkc2Vuc2UnO1xyXG5pbXBvcnQgQWRmaXQgZnJvbSAnLi4vY29tcG9uZW50cy9BZGZpdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi91dGlscy90aGVtZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQodGhlbWUuQ29udGFpbmVyKWBcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHggIWltcG9ydGFudDtcclxuYDtcclxuY29uc3QgU2lkZUFkcyA9IGNzc2BcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUmlnaHRBZCA9IHN0eWxlZC5kaXZgXHJcbiAgJHtTaWRlQWRzfVxyXG4gIHJpZ2h0OiBjYWxjKCgxMDAlIC0gNzIwcHgpIC8gMiAvIDIgLSA4MHB4KTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IExlZnRBZCA9IHN0eWxlZC5kaXZgXHJcbiAgJHtTaWRlQWRzfVxyXG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSA3MjBweCkgLyAyIC8gMiAtIDgwcHgpO1xyXG5gO1xyXG5jb25zdCBleHBsYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvblNpZGVBZHMsIHNldFNpZGVBZHNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDExMDApIHNldFNpZGVBZHMoZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTEwMCkgc2V0U2lkZUFkcyhmYWxzZSk7XHJcbiAgICAgIGVsc2Ugc2V0U2lkZUFkcyh0cnVlKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxyXG4gICAgICAgICAgc3JjPVwiLy90MS5kYXVtY2RuLm5ldC9rYXMvc3RhdGljL2JhLm1pbi5qc1wiXHJcbiAgICAgICAgICBhc3luY1xyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxFeHBsYWluU2VjIC8+XHJcbiAgICAgIDxQY2NzIC8+XHJcbiAgICAgIDxUb3BTY3JvbGwgLz5cclxuICAgICAgPEFkc2Vuc2VcclxuICAgICAgICBzbG90PVwiMjMyMTMwNDE3NFwiXHJcbiAgICAgICAgc3R5bGVzPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6NzIwcHg7aGVpZ2h0OjEwMHB4O1wiXHJcbiAgICAgICAgcmVzcG9uc2l2ZT1cImZhbHNlXCJcclxuICAgICAgLz5cclxuICAgICAgPEFkZml0IHVuaXQ9XCJEQU4tdHJxc2J2ZGpuMmh2XCIgd2lkdGg9XCIzMjBcIiBoZWlnaHQ9XCI1MFwiPjwvQWRmaXQ+XHJcbiAgICAgIHtvblNpZGVBZHMgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxSaWdodEFkPlxyXG4gICAgICAgICAgICA8QWRmaXQgdW5pdD1cIkRBTi1DTEI0RjJOUG5Dalo3ZFpRXCIgd2lkdGg9XCIxNjBcIiBoZWlnaHQ9XCI2MDBcIj48L0FkZml0PlxyXG4gICAgICAgICAgPC9SaWdodEFkPlxyXG4gICAgICAgICAgPExlZnRBZD5cclxuICAgICAgICAgICAgPEFkc2Vuc2VcclxuICAgICAgICAgICAgICBzbG90PVwiMzQ1NjM1NDA3OFwiXHJcbiAgICAgICAgICAgICAgc3R5bGVzPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTYwcHg7aGVpZ2h0OjYwMHB4XCJcclxuICAgICAgICAgICAgICByZXNwb25zaXZlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIGZvcm1hdD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGVmdEFkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cGxhaW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=