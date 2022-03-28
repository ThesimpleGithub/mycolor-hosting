self["webpackHotUpdate_N_E"]("pages/[season]",{

/***/ "./pages/[season].tsx":
/*!****************************!*\
  !*** ./pages/[season].tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_resultPage_CoupangAds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/resultPage/CoupangAds */ "./components/resultPage/CoupangAds.tsx");
/* harmony import */ var _components_resultPage_TopScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/resultPage/TopScroll */ "./components/resultPage/TopScroll.tsx");
/* harmony import */ var _components_home_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/Loading */ "./components/home/Loading.tsx");
/* harmony import */ var _components_resultPage_MaskRecommend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/resultPage/MaskRecommend */ "./components/resultPage/MaskRecommend.tsx");
/* harmony import */ var _components_resultPage_CelebContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/resultPage/CelebContainer */ "./components/resultPage/CelebContainer.tsx");
/* harmony import */ var _components_home_ML_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/ML_Loading */ "./components/home/ML_Loading.tsx");
/* harmony import */ var _components_resultPage_Chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/resultPage/Chart */ "./components/resultPage/Chart.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_colorStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/colorStore */ "./store/colorStore.ts");
/* harmony import */ var _utils_lazyLoading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/lazyLoading */ "./utils/lazyLoading.js");
/* harmony import */ var _components_resultPage_ClothesRecommend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/resultPage/ClothesRecommend */ "./components/resultPage/ClothesRecommend.tsx");
/* harmony import */ var _components_resultPage_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/resultPage/Footer */ "./components/resultPage/Footer.tsx");
/* harmony import */ var _components_PageData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/PageData */ "./components/PageData.ts");
/* harmony import */ var _components_resultPage_ColorInfoSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/resultPage/ColorInfoSection */ "./components/resultPage/ColorInfoSection.tsx");
/* harmony import */ var _components_resultPage_Header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/resultPage/Header */ "./components/resultPage/Header.tsx");
/* harmony import */ var _components_Adsense__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Adsense */ "./components/Adsense.tsx");
/* harmony import */ var _components_Adfit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Adfit */ "./components/Adfit.tsx");
/* harmony import */ var _explain__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./explain */ "./pages/explain.tsx");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.ts");
/* harmony import */ var _components_Result_Og_graph__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Result_Og_graph */ "./components/Result_Og_graph.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\company-mycolor\\pages\\[season].tsx",
    _this = undefined,
    _s = $RefreshSig$();























 // import AdSense from 'react-adsense';

var Season = function Season() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  if (router.query.isShared) router.push('/');
  var season = router.query['season'];
  var Data = _components_PageData__WEBPACK_IMPORTED_MODULE_16__.default[season];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      onSideAds = _useState[0],
      setSideAds = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      maskOn = _useState2[0],
      setMaskOn = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
  console.log(123);
  dispatch(_store_colorStore__WEBPACK_IMPORTED_MODULE_12__.actionCreators.setSeasonInfo({
    korName: Data.webInfo.korName,
    query: Data.webInfo.query,
    engName: Data.webInfo.engName
  }));
  var seasonPercent = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(function (state) {
    return state.ColorReducer.seasonPercent;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!router.isReady) return;
    document.body.parentElement.style.fontSize = '14px';

    var scroll = function scroll() {
      var targetPrev = document.getElementById('clothesContainer');

      if (targetPrev) {
        var pos = targetPrev.getBoundingClientRect();

        if (pos.top <= window.innerHeight) {
          setMaskOn(true);
          window.removeEventListener('scroll', scroll);
        }
      }
    };

    if (window.innerWidth < 1100) setSideAds(false);
    window.addEventListener('resize', function () {
      if (window.innerWidth < 1100) setSideAds(false);else setSideAds(true);
    });
    window.addEventListener('scroll', scroll);
    var isUpdate = seasonPercent.length > 0 ? true : false;
    axios__WEBPACK_IMPORTED_MODULE_10___default().post('/api/getResult', {
      season: Data.webInfo.query,
      isUpdate: isUpdate
    }).then(function (res) {
      // switch (res.data.celeb[0].colorID) {
      //   case 1:
      //     res.data.seasonKr = '봄 웜톤';
      //     res.data.seasonEng = 'spring';
      //     break;
      //   case 2:
      //     res.data.seasonKr = '여름 쿨톤';
      //     res.data.seasonEng = 'summer';
      //     break;
      //   case 3:
      //     res.data.seasonKr = '가을 웜톤';
      //     res.data.seasonEng = 'fall';
      //     break;
      //   case 4:
      //     res.data.seasonKr = '겨울 쿨톤';
      //     res.data.seasonEng = 'winter';
      //     break;
      //   default:
      //     break;
      // }
      dispatch(_store_colorStore__WEBPACK_IMPORTED_MODULE_12__.actionCreators.setResultData(res.data));
      (0,_utils_lazyLoading__WEBPACK_IMPORTED_MODULE_13__.default)();
    });
  }, [router.isReady]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_theme__WEBPACK_IMPORTED_MODULE_22__.default.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ML_Loading__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Result_Og_graph__WEBPACK_IMPORTED_MODULE_23__.default, {
      korName: Data.webInfo.korName,
      engName: Data.webInfo.engName,
      query: Data.webInfo.query
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Loading__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_Header__WEBPACK_IMPORTED_MODULE_18__.default, {
      data: Data.header,
      webInfo: Data.webInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adsense__WEBPACK_IMPORTED_MODULE_19__.default, {
      slot: "9855630521",
      styles: "display:inline-block;width:720px;height:100px;",
      responsive: "false"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_ColorInfoSection__WEBPACK_IMPORTED_MODULE_17__.default, {
      data: Data.infoSection,
      webInfo: Data.webInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adsense__WEBPACK_IMPORTED_MODULE_19__.default, {
      slot: "6097538288",
      layout: "in-article",
      format: "fluid"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_ClothesRecommend__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this), maskOn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_CoupangAds__WEBPACK_IMPORTED_MODULE_3__.default, {
      data: Data.coupang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }, _this) : '', maskOn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_MaskRecommend__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }, _this) : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_CelebContainer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_20__.default, {
      unit: "DAN-cuQcWPeQcUjWblUj",
      width: "320",
      height: "100"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_20__.default, {
      unit: "DAN-aEupzYscqPHBAbMF",
      width: "320",
      height: "50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_Chart__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_Footer__WEBPACK_IMPORTED_MODULE_15__.default, {
      webInfo: Data.webInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultPage_TopScroll__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this), onSideAds ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_explain__WEBPACK_IMPORTED_MODULE_21__.RightAd, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adfit__WEBPACK_IMPORTED_MODULE_20__.default, {
          unit: "DAN-6y26098M2bmqGsh7",
          width: "160",
          height: "600"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_explain__WEBPACK_IMPORTED_MODULE_21__.LeftAd, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Adsense__WEBPACK_IMPORTED_MODULE_19__.default, {
          slot: "8708680759",
          styles: "display:inline-block;width:160px;height:600px",
          responsive: "false",
          format: "vertical"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }, _this) : '']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, _this);
};

_s(Season, "S2IlgHqIUKmX88VIuHKBClgfQTM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector];
});

_c = Season;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Season);

var _c;

$RefreshReg$(_c, "Season");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NlYXNvbl0udHN4Il0sIm5hbWVzIjpbIlNlYXNvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaXNTaGFyZWQiLCJwdXNoIiwic2Vhc29uIiwiRGF0YSIsInBhZ2VEYXRhIiwidXNlU3RhdGUiLCJvblNpZGVBZHMiLCJzZXRTaWRlQWRzIiwibWFza09uIiwic2V0TWFza09uIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhY3Rpb25DcmVhdG9ycyIsImtvck5hbWUiLCJ3ZWJJbmZvIiwiZW5nTmFtZSIsInNlYXNvblBlcmNlbnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiQ29sb3JSZWR1Y2VyIiwidXNlRWZmZWN0IiwiaXNSZWFkeSIsImRvY3VtZW50IiwiYm9keSIsInBhcmVudEVsZW1lbnQiLCJzdHlsZSIsImZvbnRTaXplIiwic2Nyb2xsIiwidGFyZ2V0UHJldiIsImdldEVsZW1lbnRCeUlkIiwicG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc1VwZGF0ZSIsImxlbmd0aCIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJsYXp5TG9hZGluZyIsImhlYWRlciIsImluZm9TZWN0aW9uIiwiY291cGFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFvQjtBQUFBOztBQUNq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QUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQWVSLEVBMUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0NELENBMUhEOztHQUFNVixNO1VBQ1dFLGtELEVBT0VhLHFELEVBVUtRLHFEOzs7S0FsQmxCdkIsTTs7QUE0SE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3NlYXNvbl0uYTYwN2ExZjZlNjhjZmE3Y2E3YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ291cGFuZ0FkcyBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3VsdFBhZ2UvQ291cGFuZ0Fkcyc7XHJcbmltcG9ydCBUb3BTY3JvbGwgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bHRQYWdlL1RvcFNjcm9sbCc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9Mb2FkaW5nJztcclxuaW1wb3J0IE1hc2tSZWNvbW1lbmQgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bHRQYWdlL01hc2tSZWNvbW1lbmQnO1xyXG5pbXBvcnQgQ2VsZWJDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0NlbGViQ29udGFpbmVyJztcclxuaW1wb3J0IE1MX0xvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL01MX0xvYWRpbmcnO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0NoYXJ0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyB9IGZyb20gJy4uL3N0b3JlL2NvbG9yU3RvcmUnO1xyXG5pbXBvcnQgbGF6eUxvYWRpbmcgZnJvbSAnLi4vdXRpbHMvbGF6eUxvYWRpbmcnO1xyXG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgQ2xvdGhlc1JlY29tbWVuZCBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3VsdFBhZ2UvQ2xvdGhlc1JlY29tbWVuZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0Zvb3Rlcic7XHJcbmltcG9ydCBwYWdlRGF0YSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VEYXRhJztcclxuaW1wb3J0IENvbG9ySW5mb1NlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0NvbG9ySW5mb1NlY3Rpb24nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdWx0UGFnZS9IZWFkZXInO1xyXG5pbXBvcnQgQWRzZW5zZSBmcm9tICcuLi9jb21wb25lbnRzL0Fkc2Vuc2UnO1xyXG5pbXBvcnQgQWRmaXQgZnJvbSAnLi4vY29tcG9uZW50cy9BZGZpdCc7XHJcbmltcG9ydCB7IExlZnRBZCwgUmlnaHRBZCB9IGZyb20gJy4vZXhwbGFpbic7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi91dGlscy90aGVtZSc7XHJcbmltcG9ydCBSZXN1bHRfT2dfZ3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9SZXN1bHRfT2dfZ3JhcGgnO1xyXG4vLyBpbXBvcnQgQWRTZW5zZSBmcm9tICdyZWFjdC1hZHNlbnNlJztcclxuXHJcbmNvbnN0IFNlYXNvbiA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBpZiAocm91dGVyLnF1ZXJ5LmlzU2hhcmVkKSByb3V0ZXIucHVzaCgnLycpO1xyXG4gIGNvbnN0IHNlYXNvbiA9IHJvdXRlci5xdWVyeVsnc2Vhc29uJ10gYXMgc3RyaW5nO1xyXG4gIGNvbnN0IERhdGEgPSBwYWdlRGF0YVtzZWFzb25dO1xyXG4gIGNvbnN0IFtvblNpZGVBZHMsIHNldFNpZGVBZHNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW21hc2tPbiwgc2V0TWFza09uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc29sZS5sb2coMTIzKTtcclxuICBkaXNwYXRjaChcclxuICAgIGFjdGlvbkNyZWF0b3JzLnNldFNlYXNvbkluZm8oe1xyXG4gICAgICBrb3JOYW1lOiBEYXRhLndlYkluZm8ua29yTmFtZSxcclxuICAgICAgcXVlcnk6IERhdGEud2ViSW5mby5xdWVyeSxcclxuICAgICAgZW5nTmFtZTogRGF0YS53ZWJJbmZvLmVuZ05hbWUsXHJcbiAgICB9KSxcclxuICApO1xyXG5cclxuICBjb25zdCBzZWFzb25QZXJjZW50ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLkNvbG9yUmVkdWNlci5zZWFzb25QZXJjZW50LFxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcclxuICAgIGRvY3VtZW50LmJvZHkucGFyZW50RWxlbWVudCEuc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XHJcbiAgICBjb25zdCBzY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldFByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvdGhlc0NvbnRhaW5lcicpO1xyXG4gICAgICBpZiAodGFyZ2V0UHJldikge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRhcmdldFByZXYhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChwb3MudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgc2V0TWFza09uKHRydWUpO1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTEwMCkgc2V0U2lkZUFkcyhmYWxzZSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTEwMCkgc2V0U2lkZUFkcyhmYWxzZSk7XHJcbiAgICAgIGVsc2Ugc2V0U2lkZUFkcyh0cnVlKTtcclxuICAgIH0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XHJcblxyXG4gICAgY29uc3QgaXNVcGRhdGUgPSBzZWFzb25QZXJjZW50Lmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnL2FwaS9nZXRSZXN1bHQnLCB7XHJcbiAgICAgICAgc2Vhc29uOiBEYXRhLndlYkluZm8ucXVlcnksXHJcbiAgICAgICAgaXNVcGRhdGU6IGlzVXBkYXRlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vIHN3aXRjaCAocmVzLmRhdGEuY2VsZWJbMF0uY29sb3JJRCkge1xyXG4gICAgICAgIC8vICAgY2FzZSAxOlxyXG4gICAgICAgIC8vICAgICByZXMuZGF0YS5zZWFzb25LciA9ICfrtIQg7Juc7YakJztcclxuICAgICAgICAvLyAgICAgcmVzLmRhdGEuc2Vhc29uRW5nID0gJ3NwcmluZyc7XHJcbiAgICAgICAgLy8gICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgY2FzZSAyOlxyXG4gICAgICAgIC8vICAgICByZXMuZGF0YS5zZWFzb25LciA9ICfsl6zrpoQg7L+o7YakJztcclxuICAgICAgICAvLyAgICAgcmVzLmRhdGEuc2Vhc29uRW5nID0gJ3N1bW1lcic7XHJcbiAgICAgICAgLy8gICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgY2FzZSAzOlxyXG4gICAgICAgIC8vICAgICByZXMuZGF0YS5zZWFzb25LciA9ICfqsIDsnYQg7Juc7YakJztcclxuICAgICAgICAvLyAgICAgcmVzLmRhdGEuc2Vhc29uRW5nID0gJ2ZhbGwnO1xyXG4gICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAvLyAgIGNhc2UgNDpcclxuICAgICAgICAvLyAgICAgcmVzLmRhdGEuc2Vhc29uS3IgPSAn6rKo7Jq4IOy/qO2GpCc7XHJcbiAgICAgICAgLy8gICAgIHJlcy5kYXRhLnNlYXNvbkVuZyA9ICd3aW50ZXInO1xyXG4gICAgICAgIC8vICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2V0UmVzdWx0RGF0YShyZXMuZGF0YSkpO1xyXG4gICAgICAgIGxhenlMb2FkaW5nKCk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRoZW1lLkNvbnRhaW5lcj5cclxuICAgICAgPE1MX0xvYWRpbmcgLz5cclxuICAgICAgPFJlc3VsdF9PZ19ncmFwaFxyXG4gICAgICAgIGtvck5hbWU9e0RhdGEud2ViSW5mby5rb3JOYW1lfVxyXG4gICAgICAgIGVuZ05hbWU9e0RhdGEud2ViSW5mby5lbmdOYW1lfVxyXG4gICAgICAgIHF1ZXJ5PXtEYXRhLndlYkluZm8ucXVlcnl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgIDxIZWFkZXIgZGF0YT17RGF0YS5oZWFkZXJ9IHdlYkluZm89e0RhdGEud2ViSW5mb30gLz5cclxuICAgICAgPEFkc2Vuc2VcclxuICAgICAgICBzbG90PVwiOTg1NTYzMDUyMVwiXHJcbiAgICAgICAgc3R5bGVzPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6NzIwcHg7aGVpZ2h0OjEwMHB4O1wiXHJcbiAgICAgICAgcmVzcG9uc2l2ZT1cImZhbHNlXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxDb2xvckluZm9TZWN0aW9uIGRhdGE9e0RhdGEuaW5mb1NlY3Rpb259IHdlYkluZm89e0RhdGEud2ViSW5mb30gLz5cclxuICAgICAgPEFkc2Vuc2Ugc2xvdD1cIjYwOTc1MzgyODhcIiBsYXlvdXQ9XCJpbi1hcnRpY2xlXCIgZm9ybWF0PVwiZmx1aWRcIiAvPlxyXG5cclxuICAgICAgPENsb3RoZXNSZWNvbW1lbmQ+PC9DbG90aGVzUmVjb21tZW5kPlxyXG4gICAgICB7bWFza09uID8gPENvdXBhbmdBZHMgZGF0YT17RGF0YS5jb3VwYW5nfT48L0NvdXBhbmdBZHM+IDogJyd9XHJcbiAgICAgIHttYXNrT24gPyA8TWFza1JlY29tbWVuZCAvPiA6ICcnfVxyXG4gICAgICA8Q2VsZWJDb250YWluZXIgLz5cclxuICAgICAgPEFkZml0IHVuaXQ9XCJEQU4tY3VRY1dQZVFjVWpXYmxValwiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiMTAwXCI+PC9BZGZpdD5cclxuICAgICAgPEFkZml0IHVuaXQ9XCJEQU4tYUV1cHpZc2NxUEhCQWJNRlwiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiNTBcIj48L0FkZml0PlxyXG4gICAgICA8Q2hhcnQ+PC9DaGFydD5cclxuICAgICAgPEZvb3RlciB3ZWJJbmZvPXtEYXRhLndlYkluZm99IC8+XHJcbiAgICAgIDxUb3BTY3JvbGwgLz5cclxuICAgICAge29uU2lkZUFkcyA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFJpZ2h0QWQ+XHJcbiAgICAgICAgICAgIDxBZGZpdCB1bml0PVwiREFOLTZ5MjYwOThNMmJtcUdzaDdcIiB3aWR0aD1cIjE2MFwiIGhlaWdodD1cIjYwMFwiPjwvQWRmaXQ+XHJcbiAgICAgICAgICA8L1JpZ2h0QWQ+XHJcbiAgICAgICAgICA8TGVmdEFkPlxyXG4gICAgICAgICAgICA8QWRzZW5zZVxyXG4gICAgICAgICAgICAgIHNsb3Q9XCI4NzA4NjgwNzU5XCJcclxuICAgICAgICAgICAgICBzdHlsZXM9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxNjBweDtoZWlnaHQ6NjAwcHhcIlxyXG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgZm9ybWF0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MZWZ0QWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvdGhlbWUuQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFzb247XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXHJcbiAgICAgIHsgcGFyYW1zOiB7IHNlYXNvbjogJ3NwcmluZ0xpZ2h0JyB9IH0sXHJcbiAgICAgIHsgcGFyYW1zOiB7IHNlYXNvbjogJ3NwcmluZ0JyaWdodCcgfSB9LFxyXG4gICAgICB7IHBhcmFtczogeyBzZWFzb246ICdzdW1tZXJMaWdodCcgfSB9LFxyXG4gICAgICB7IHBhcmFtczogeyBzZWFzb246ICdzdW1tZXJCcmlnaHQnIH0gfSxcclxuICAgICAgeyBwYXJhbXM6IHsgc2Vhc29uOiAnc3VtbWVyTXV0ZScgfSB9LFxyXG4gICAgICB7IHBhcmFtczogeyBzZWFzb246ICdmYWxsTXV0ZScgfSB9LFxyXG4gICAgICB7IHBhcmFtczogeyBzZWFzb246ICdmYWxsU3Ryb25nJyB9IH0sXHJcbiAgICAgIHsgcGFyYW1zOiB7IHNlYXNvbjogJ2ZhbGxEZWVwJyB9IH0sXHJcbiAgICAgIHsgcGFyYW1zOiB7IHNlYXNvbjogJ3dpbnRlckRlZXAnIH0gfSxcclxuICAgICAgeyBwYXJhbXM6IHsgc2Vhc29uOiAnd2ludGVyQnJpZ2h0JyB9IH0sXHJcbiAgICAgIC8vIHsgcGFyYW1zOiB7IHNlYXNvbjogJ3NwcmluZ1dhcm0nIH0gfSxcclxuICAgICAgLy8geyBwYXJhbXM6IHsgc2Vhc29uOiAnc3VtbWVyQ29vbCcgfSB9LFxyXG4gICAgICAvLyB7IHBhcmFtczogeyBzZWFzb246ICdmYWxsV2FybScgfSB9LFxyXG4gICAgICAvLyB7IHBhcmFtczogeyBzZWFzb246ICd3aW50ZXJDb29sJyB9IH0sXHJcbiAgICBdLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==