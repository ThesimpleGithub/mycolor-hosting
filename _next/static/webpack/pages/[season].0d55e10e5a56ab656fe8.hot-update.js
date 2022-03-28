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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_resultPage_TopScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/resultPage/TopScroll */ "./components/resultPage/TopScroll.tsx");
/* harmony import */ var _components_Adsense__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Adsense */ "./components/Adsense.tsx");
/* harmony import */ var _components_Adfit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Adfit */ "./components/Adfit.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.ts");
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










var Wrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(_utils_theme__WEBPACK_IMPORTED_MODULE_9__.default.Container)(_templateObject());
_c = Wrapper;
var SideAds = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.css)(_templateObject2());
var RightAd = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div(_templateObject3(), SideAds);
_c2 = RightAd;
var LeftAd = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div(_templateObject4(), SideAds);
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_explain_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_explain_ExplainSec__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_explain_Pccs__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_TopScroll__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adsense__WEBPACK_IMPORTED_MODULE_6__.default, {
      slot: "2321304174",
      styles: "display:inline-block;width:720px;height:100px;",
      responsive: "false"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_7__.default, {
      unit: "DAN-NixGj0oVzVgaAhTm",
      width: "320",
      height: "50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), onSideAds ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RightAd, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_7__.default, {
          unit: "DAN-CLB4F2NPnCjZ7dZQ",
          width: "160",
          height: "600"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LeftAd, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adsense__WEBPACK_IMPORTED_MODULE_6__.default, {
          slot: "3456354078",
          styles: "display:inline-block;width:160px;height:600px",
          responsive: "false",
          format: "vertical"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwbGFpbi50c3giXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsInRoZW1lIiwiU2lkZUFkcyIsImNzcyIsIlJpZ2h0QWQiLCJMZWZ0QWQiLCJleHBsYWluIiwidXNlU3RhdGUiLCJvblNpZGVBZHMiLCJzZXRTaWRlQWRzIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsMkRBQU0sQ0FBQ0MsMkRBQUQsQ0FBVCxtQkFBYjtLQUFNRixPO0FBSU4sSUFBTUcsT0FBTyxHQUFHQyx1REFBSCxvQkFBYjtBQUtPLElBQU1DLE9BQU8sR0FBR0osMkRBQUgscUJBQ2hCRSxPQURnQixDQUFiO01BQU1FLE87QUFJTixJQUFNQyxNQUFNLEdBQUdMLDJEQUFILHFCQUNmRSxPQURlLENBQVo7TUFBTUcsTTs7QUFJYixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLCtDQUFRLENBQUMsSUFBRCxDQURwQjtBQUFBLE1BQ2JDLFNBRGE7QUFBQSxNQUNGQyxVQURFOztBQUVwQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLElBQXhCLEVBQThCSCxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQzlCRSxVQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdEMsVUFBSUYsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLElBQXhCLEVBQThCSCxVQUFVLENBQUMsS0FBRCxDQUFWLENBQTlCLEtBQ0tBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDTixLQUhEO0FBSUQsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLHNCQUNFLDhEQUFDLE9BQUQ7QUFBQSw0QkFDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSw4REFBQyx3REFBRDtBQUNFLFVBQUksRUFBQyxZQURQO0FBRUUsWUFBTSxFQUFDLGdEQUZUO0FBR0UsZ0JBQVUsRUFBQztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVVFLDhEQUFDLHNEQUFEO0FBQU8sVUFBSSxFQUFDLHNCQUFaO0FBQW1DLFdBQUssRUFBQyxLQUF6QztBQUErQyxZQUFNLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLEVBV0dELFNBQVMsZ0JBQ1I7QUFBQSw4QkFDRSw4REFBQyxPQUFEO0FBQUEsK0JBQ0UsOERBQUMsc0RBQUQ7QUFBTyxjQUFJLEVBQUMsc0JBQVo7QUFBbUMsZUFBSyxFQUFDLEtBQXpDO0FBQStDLGdCQUFNLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLE1BQUQ7QUFBQSwrQkFDRSw4REFBQyx3REFBRDtBQUNFLGNBQUksRUFBQyxZQURQO0FBRUUsZ0JBQU0sRUFBQywrQ0FGVDtBQUdFLG9CQUFVLEVBQUMsT0FIYjtBQUlFLGdCQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLEdBZVIsRUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0F4Q0Q7O0dBQU1GLE87O0FBMENOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tzZWFzb25dLjBkNTVlMTBlNWE1NmFiNjU2ZmU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwbGFpblNlYyBmcm9tICcuLi9jb21wb25lbnRzL2V4cGxhaW4vRXhwbGFpblNlYyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9leHBsYWluL0hlYWRlcic7XHJcbmltcG9ydCBQY2NzIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwbGFpbi9QY2NzJztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUb3BTY3JvbGwgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bHRQYWdlL1RvcFNjcm9sbCc7XHJcbmltcG9ydCBBZHNlbnNlIGZyb20gJy4uL2NvbXBvbmVudHMvQWRzZW5zZSc7XHJcbmltcG9ydCBBZGZpdCBmcm9tICcuLi9jb21wb25lbnRzL0FkZml0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3V0aWxzL3RoZW1lJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZCh0aGVtZS5Db250YWluZXIpYFxyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5jb25zdCBTaWRlQWRzID0gY3NzYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBSaWdodEFkID0gc3R5bGVkLmRpdmBcclxuICAke1NpZGVBZHN9XHJcbiAgcmlnaHQ6IGNhbGMoKDEwMCUgLSA3MjBweCkgLyAyIC8gMiAtIDgwcHgpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTGVmdEFkID0gc3R5bGVkLmRpdmBcclxuICAke1NpZGVBZHN9XHJcbiAgbGVmdDogY2FsYygoMTAwJSAtIDcyMHB4KSAvIDIgLyAyIC0gODBweCk7XHJcbmA7XHJcbmNvbnN0IGV4cGxhaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW29uU2lkZUFkcywgc2V0U2lkZUFkc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTEwMCkgc2V0U2lkZUFkcyhmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMTAwKSBzZXRTaWRlQWRzKGZhbHNlKTtcclxuICAgICAgZWxzZSBzZXRTaWRlQWRzKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8RXhwbGFpblNlYyAvPlxyXG4gICAgICA8UGNjcyAvPlxyXG4gICAgICA8VG9wU2Nyb2xsIC8+XHJcbiAgICAgIDxBZHNlbnNlXHJcbiAgICAgICAgc2xvdD1cIjIzMjEzMDQxNzRcIlxyXG4gICAgICAgIHN0eWxlcz1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjcyMHB4O2hlaWdodDoxMDBweDtcIlxyXG4gICAgICAgIHJlc3BvbnNpdmU9XCJmYWxzZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxBZGZpdCB1bml0PVwiREFOLU5peEdqMG9WelZnYUFoVG1cIiB3aWR0aD1cIjMyMFwiIGhlaWdodD1cIjUwXCI+PC9BZGZpdD5cclxuICAgICAge29uU2lkZUFkcyA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFJpZ2h0QWQ+XHJcbiAgICAgICAgICAgIDxBZGZpdCB1bml0PVwiREFOLUNMQjRGMk5QbkNqWjdkWlFcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjYwMFwiPjwvQWRmaXQ+XHJcbiAgICAgICAgICA8L1JpZ2h0QWQ+XHJcbiAgICAgICAgICA8TGVmdEFkPlxyXG4gICAgICAgICAgICA8QWRzZW5zZVxyXG4gICAgICAgICAgICAgIHNsb3Q9XCIzNDU2MzU0MDc4XCJcclxuICAgICAgICAgICAgICBzdHlsZXM9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxNjBweDtoZWlnaHQ6NjAwcHhcIlxyXG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MZWZ0QWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXhwbGFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==