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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\uD37C\uC2A4\uB110\uCEEC\uB7EC\uB780 \uBB34\uC5C7\uC77C\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "\uC778\uACF5\uC9C0\uB2A5 \uD37C\uC2A4\uB110\uCEEC\uB7EC \uC790\uAC00\uC9C4\uB2E8 \uD14C\uC2A4\uD2B8-\uD37C\uC2A4\uB110\uCEEC\uB7EC\uB780 \uBB34\uC5C7\uC77C\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "\uB098\uB294 \uC6DC\uD1A4\uC77C\uAE4C? \uCFE8\uD1A4\uC77C\uAE4C? \uD37C\uC2A4\uB110\uCEEC\uB7EC \uC790\uAC00 \uC9C4\uB2E8\uD558\uB7EC\uAC00\uAE30!! \uC778\uACF5\uC9C0\uB2A5\uC774 \uD53C\uBD80\uC0AC\uC9C4\uC744 \uBD84\uC11D\uD558\uC5EC \uACB0\uACFC\uB97C \uC54C\uB824\uC90D\uB2C8\uB2E4. \uD68C\uC6D0\uAC00\uC785\uC5C6\uC774 \uBD04 \uC6DC\uD1A4, \uC5EC\uB984 \uCFE8\uD1A4, \uAC00\uC744 \uC6DC\uD1A4, \uACA8\uC6B8 \uCFE8\uD1A4 \uC911 \uC5B4\uB514\uC5D0 \uD574\uB2F9\uD558\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "".concat("", "/images/metaImg.jpg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:site",
        content: "https://mycolor.kr/explain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: "".concat("", "/images/metaImg.jpg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: "\uC778\uACF5\uC9C0\uB2A5 \uD37C\uC2A4\uB110\uCEEC\uB7EC \uC790\uAC00\uC9C4\uB2E8 \uD14C\uC2A4\uD2B8-\uD37C\uC2A4\uB110\uCEEC\uB7EC\uB780 \uBB34\uC5C7\uC77C\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: "\uB098\uB294 \uC6DC\uD1A4\uC77C\uAE4C? \uCFE8\uD1A4\uC77C\uAE4C? \uC778\uACF5\uC9C0\uB2A5\uC744 \uC774\uC6A9\uD55C \uC2E4\uC2DC\uAC04 \uD37C\uC2A4\uB110\uCEEC\uB7EC \uCE21\uC815 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4. \uD68C\uC6D0\uAC00\uC785\uC5C6\uC774 \uBD04 \uBE0C\uB77C\uC774\uD2B8, \uBD04 \uB77C\uC774\uD2B8, \uC5EC\uB984 \uB77C\uC774\uD2B8, \uC5EC\uB984 \uBE0C\uB77C\uC774\uD2B8, \uC5EC\uB984 \uBBA4\uD2B8, \uAC00\uC744 \uBBA4\uD2B8, \uAC00\uC744 \uC2A4\uD2B8\uB871(\uD2B8\uB8E8), \uAC00\uC744 \uB525, \uACA8\uC6B8 \uB525  , \uACA8\uC6B8 \uBE0C\uB77C\uC774\uD2B8 \uC911 \uC5B4\uB5A4 \uD1A4\uC5D0 \uD574\uB2F9\uD558\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "\uC778\uACF5\uC9C0\uB2A5 \uD37C\uC2A4\uB110\uCEEC\uB7EC \uC790\uAC00\uC9C4\uB2E8 \uD14C\uC2A4\uD2B8-\uD37C\uC2A4\uB110\uCEEC\uB7EC\uB780 \uBB34\uC5C7\uC77C\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "canonical",
        href: "https://mycolor.kr/explain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "\uB098\uB294 \uC6DC\uD1A4\uC77C\uAE4C? \uCFE8\uD1A4\uC77C\uAE4C? \uC778\uACF5\uC9C0\uB2A5\uC744 \uC774\uC6A9\uD55C \uC2E4\uC2DC\uAC04 \uD37C\uC2A4\uB110\uCEEC\uB7EC \uCE21\uC815 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4. \uD68C\uC6D0\uAC00\uC785\uC5C6\uC774 \uBD04 \uBE0C\uB77C\uC774\uD2B8, \uBD04 \uB77C\uC774\uD2B8, \uC5EC\uB984 \uB77C\uC774\uD2B8, \uC5EC\uB984 \uBE0C\uB77C\uC774\uD2B8, \uC5EC\uB984 \uBBA4\uD2B8, \uAC00\uC744 \uBBA4\uD2B8, \uAC00\uC744 \uC2A4\uD2B8\uB871(\uD2B8\uB8E8), \uAC00\uC744 \uB525, \uACA8\uC6B8 \uB525  , \uACA8\uC6B8 \uBE0C\uB77C\uC774\uD2B8 \uC911 \uC5B4\uB5A4 \uD1A4\uC5D0 \uD574\uB2F9\uD558\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_explain_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_explain_ExplainSec__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_explain_Pccs__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_TopScroll__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_7__.default, {
      unit: "DAN-mWxivkVNfF1ZNywM",
      width: "320",
      height: "100"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_7__.default, {
      unit: "DAN-NixGj0oVzVgaAhTm",
      width: "320",
      height: "50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this), onSideAds ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RightAd, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_7__.default, {
          unit: "DAN-CLB4F2NPnCjZ7dZQ",
          width: "160",
          height: "600"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LeftAd, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adsense__WEBPACK_IMPORTED_MODULE_6__.default, {
          slot: "3456354078",
          styles: "display:inline-block;width:160px;height:600px",
          responsive: "false",
          format: "vertical"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwbGFpbi50c3giXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsInRoZW1lIiwiU2lkZUFkcyIsImNzcyIsIlJpZ2h0QWQiLCJMZWZ0QWQiLCJleHBsYWluIiwidXNlU3RhdGUiLCJvblNpZGVBZHMiLCJzZXRTaWRlQWRzIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHQywyREFBTSxDQUFDQywyREFBRCxDQUFULG1CQUFiO0tBQU1GLE87QUFJTixJQUFNRyxPQUFPLEdBQUdDLHVEQUFILG9CQUFiO0FBS08sSUFBTUMsT0FBTyxHQUFHSiwyREFBSCxxQkFDaEJFLE9BRGdCLENBQWI7TUFBTUUsTztBQUlOLElBQU1DLE1BQU0sR0FBR0wsMkRBQUgscUJBQ2ZFLE9BRGUsQ0FBWjtNQUFNRyxNOztBQUliLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsK0NBQVEsQ0FBQyxJQUFELENBRHBCO0FBQUEsTUFDYkMsU0FEYTtBQUFBLE1BQ0ZDLFVBREU7O0FBRXBCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsSUFBeEIsRUFBOEJILFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDOUJFLFVBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0QyxVQUFJRixNQUFNLENBQUNDLFVBQVAsR0FBb0IsSUFBeEIsRUFBOEJILFVBQVUsQ0FBQyxLQUFELENBQVYsQ0FB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QUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQWVSLEVBakVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0VELENBL0VEOztHQUFNRixPOztBQWlGTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc2Vhc29uXS5lZTQwYWNlNzE1NGYxOTQ4MWFkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cGxhaW5TZWMgZnJvbSAnLi4vY29tcG9uZW50cy9leHBsYWluL0V4cGxhaW5TZWMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwbGFpbi9IZWFkZXInO1xyXG5pbXBvcnQgUGNjcyBmcm9tICcuLi9jb21wb25lbnRzL2V4cGxhaW4vUGNjcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVG9wU2Nyb2xsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdWx0UGFnZS9Ub3BTY3JvbGwnO1xyXG5pbXBvcnQgQWRzZW5zZSBmcm9tICcuLi9jb21wb25lbnRzL0Fkc2Vuc2UnO1xyXG5pbXBvcnQgQWRmaXQgZnJvbSAnLi4vY29tcG9uZW50cy9BZGZpdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi91dGlscy90aGVtZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQodGhlbWUuQ29udGFpbmVyKWBcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHggIWltcG9ydGFudDtcclxuYDtcclxuY29uc3QgU2lkZUFkcyA9IGNzc2BcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUmlnaHRBZCA9IHN0eWxlZC5kaXZgXHJcbiAgJHtTaWRlQWRzfVxyXG4gIHJpZ2h0OiBjYWxjKCgxMDAlIC0gNzIwcHgpIC8gMiAvIDIgLSA4MHB4KTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IExlZnRBZCA9IHN0eWxlZC5kaXZgXHJcbiAgJHtTaWRlQWRzfVxyXG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSA3MjBweCkgLyAyIC8gMiAtIDgwcHgpO1xyXG5gO1xyXG5jb25zdCBleHBsYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvblNpZGVBZHMsIHNldFNpZGVBZHNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDExMDApIHNldFNpZGVBZHMoZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTEwMCkgc2V0U2lkZUFkcyhmYWxzZSk7XHJcbiAgICAgIGVsc2Ugc2V0U2lkZUFkcyh0cnVlKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7tjbzsiqTrhJDsu6zrn6zrnoAg66y07JeH7J286rmMPzwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuXHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCLsnbjqs7Xsp4DriqUg7Y287Iqk64SQ7Lus65+sIOyekOqwgOynhOuLqCDthYzsiqTtirgt7Y287Iqk64SQ7Lus65+s656AIOustOyXh+ydvOq5jD9cIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwi64KY64qUIOybnO2GpOydvOq5jD8g7L+o7Yak7J286rmMPyDtjbzsiqTrhJDsu6zrn6wg7J6Q6rCAIOynhOuLqO2VmOufrOqwgOq4sCEhIOyduOqzteyngOuKpeydtCDtlLzrtoDsgqzsp4TsnYQg67aE7ISd7ZWY7JesIOqysOqzvOulvCDslYzroKTspI3ri4jri6QuIO2ajOybkOqwgOyeheyXhuydtCDrtIQg7Juc7YakLCDsl6zrpoQg7L+o7YakLCDqsIDsnYQg7Juc7YakLCDqsqjsmrgg7L+o7YakIOykkSDslrTrlJTsl5Ag7ZW064u57ZWY64qU7KeAIOyVjOyVhOuztOyEuOyalFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL21ldGFJbWcuanBnYH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cImh0dHBzOi8vbXljb2xvci5rci9leHBsYWluXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PXtgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvbWV0YUltZy5qcGdgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCLsnbjqs7Xsp4DriqUg7Y287Iqk64SQ7Lus65+sIOyekOqwgOynhOuLqCDthYzsiqTtirgt7Y287Iqk64SQ7Lus65+s656AIOustOyXh+ydvOq5jD9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIuuCmOuKlCDsm5zthqTsnbzquYw/IOy/qO2GpOydvOq5jD8g7J246rO17KeA64ql7J2EIOydtOyaqe2VnCDsi6Tsi5zqsIQg7Y287Iqk64SQ7Lus65+sIOy4oeyglSDshJzruYTsiqTsnoXri4jri6QuIO2ajOybkOqwgOyeheyXhuydtCDrtIQg67iM65287J207Yq4LCDrtIQg65287J207Yq4LCDsl6zrpoQg65287J207Yq4LCDsl6zrpoQg67iM65287J207Yq4LCDsl6zrpoQg666k7Yq4LCDqsIDsnYQg666k7Yq4LCDqsIDsnYQg7Iqk7Yq466GxKO2KuOujqCksIOqwgOydhCDrlKUsIOqyqOyauCDrlKUgICwg6rKo7Jq4IOu4jOudvOydtO2KuCDspJEg7Ja065akIO2GpOyXkCDtlbTri7ntlZjripTsp4Ag7JWM7JWE67O07IS47JqULlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIlxyXG4gICAgICAgICAgY29udGVudD1cIuyduOqzteyngOuKpSDtjbzsiqTrhJDsu6zrn6wg7J6Q6rCA7KeE64uoIO2FjOyKpO2KuC3tjbzsiqTrhJDsu6zrn6zrnoAg66y07JeH7J286rmMP1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9teWNvbG9yLmtyL2V4cGxhaW5cIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIuuCmOuKlCDsm5zthqTsnbzquYw/IOy/qO2GpOydvOq5jD8g7J246rO17KeA64ql7J2EIOydtOyaqe2VnCDsi6Tsi5zqsIQg7Y287Iqk64SQ7Lus65+sIOy4oeyglSDshJzruYTsiqTsnoXri4jri6QuIO2ajOybkOqwgOyeheyXhuydtCDrtIQg67iM65287J207Yq4LCDrtIQg65287J207Yq4LCDsl6zrpoQg65287J207Yq4LCDsl6zrpoQg67iM65287J207Yq4LCDsl6zrpoQg666k7Yq4LCDqsIDsnYQg666k7Yq4LCDqsIDsnYQg7Iqk7Yq466GxKO2KuOujqCksIOqwgOydhCDrlKUsIOqyqOyauCDrlKUgICwg6rKo7Jq4IOu4jOudvOydtO2KuCDspJEg7Ja065akIO2GpOyXkCDtlbTri7ntlZjripTsp4Ag7JWM7JWE67O07IS47JqULlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxFeHBsYWluU2VjIC8+XHJcbiAgICAgIDxQY2NzIC8+XHJcbiAgICAgIDxUb3BTY3JvbGwgLz5cclxuICAgICAgPEFkZml0IHVuaXQ9XCJEQU4tbVd4aXZrVk5mRjFaTnl3TVwiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiMTAwXCI+PC9BZGZpdD5cclxuICAgICAgPEFkZml0IHVuaXQ9XCJEQU4tTml4R2owb1Z6VmdhQWhUbVwiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiNTBcIj48L0FkZml0PlxyXG5cclxuICAgICAge29uU2lkZUFkcyA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFJpZ2h0QWQ+XHJcbiAgICAgICAgICAgIDxBZGZpdCB1bml0PVwiREFOLUNMQjRGMk5QbkNqWjdkWlFcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjYwMFwiPjwvQWRmaXQ+XHJcbiAgICAgICAgICA8L1JpZ2h0QWQ+XHJcbiAgICAgICAgICA8TGVmdEFkPlxyXG4gICAgICAgICAgICA8QWRzZW5zZVxyXG4gICAgICAgICAgICAgIHNsb3Q9XCIzNDU2MzU0MDc4XCJcclxuICAgICAgICAgICAgICBzdHlsZXM9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxNjBweDtoZWlnaHQ6NjAwcHhcIlxyXG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MZWZ0QWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXhwbGFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==