self["webpackHotUpdate_N_E"]("pages/[season]",{

/***/ "./utils/mindar-face-three.prod.js":
/*!*****************************************!*\
  !*** ./utils/mindar-face-three.prod.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MindARThree": function() { return /* binding */ U; }
/* harmony export */ });
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_css3drenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-css3drenderer */ "./node_modules/three-css3drenderer/index.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controller.js */ "./utils/controller.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui.js */ "./utils/ui.js");
/* module decorator */ module = __webpack_require__.hmd(module);






/* eslint-disable no-debugger */




var C = {
  BufferGeometry: three__WEBPACK_IMPORTED_MODULE_8__.BufferGeometry,
  BufferAttribute: three__WEBPACK_IMPORTED_MODULE_8__.BufferAttribute
};

var U = /*#__PURE__*/function () {
  function U(_ref) {
    var o = _ref.container,
        _ref$uiLoading = _ref.uiLoading,
        e = _ref$uiLoading === void 0 ? 'yes' : _ref$uiLoading,
        _ref$uiScanning = _ref.uiScanning,
        i = _ref$uiScanning === void 0 ? 'yes' : _ref$uiScanning,
        _ref$uiError = _ref.uiError,
        n = _ref$uiError === void 0 ? 'yes' : _ref$uiError,
        _ref$filterMinCF = _ref.filterMinCF,
        t = _ref$filterMinCF === void 0 ? null : _ref$filterMinCF,
        _ref$filterBeta = _ref.filterBeta,
        h = _ref$filterBeta === void 0 ? null : _ref$filterBeta;

    (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, U);

    this.container = o, this.ui = new _ui_js__WEBPACK_IMPORTED_MODULE_7__.U({
      uiLoading: e,
      uiScanning: i,
      uiError: n
    }), this.controller = new _controller_js__WEBPACK_IMPORTED_MODULE_6__.C({
      filterMinCF: t,
      filterBeta: h
    }), this.scene = new three__WEBPACK_IMPORTED_MODULE_8__.Scene(), this.cssScene = new three__WEBPACK_IMPORTED_MODULE_8__.Scene(), this.renderer = new three__WEBPACK_IMPORTED_MODULE_8__.WebGLRenderer({
      antialias: !0,
      alpha: !0
    }), this.cssRenderer = new three_css3drenderer__WEBPACK_IMPORTED_MODULE_5__.CSS3DRenderer({
      antialias: !0
    }), this.renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_8__.sRGBEncoding, this.renderer.setPixelRatio(window.devicePixelRatio), this.camera = new three__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera(), this.anchors = [], this.faceMeshes = [], this.container.appendChild(this.renderer.domElement), this.container.appendChild(this.cssRenderer.domElement), this.shouldFaceUser = !0, window.addEventListener('resize', this._resize.bind(this));
  }

  (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(U, [{
    key: "start",
    value: function () {
      var _start = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.ui.showLoading();
                _context.next = 3;
                return this._startVideo();

              case 3:
                _context.next = 5;
                return this._startAR();

              case 5:
                this.ui.hideLoading();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      this.video.srcObject.getTracks().forEach(function (e) {
        e.stop();
      }), this.video.remove(), this.controller.stopProcessVideo();
    }
  }, {
    key: "switchCamera",
    value: function switchCamera() {
      this.shouldFaceUser = !this.shouldFaceUser, this.stop(), this.start();
    }
  }, {
    key: "addFaceMesh",
    value: function addFaceMesh() {
      var o = this.controller.createThreeFaceGeometry(C),
          e = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh(o, new three__WEBPACK_IMPORTED_MODULE_8__.MeshStandardMaterial({
        color: 16777215
      }));
      return e.visible = !1, e.matrixAutoUpdate = !1, this.faceMeshes.push(e), e;
    }
  }, {
    key: "addAnchor",
    value: function addAnchor(o) {
      var e = new three__WEBPACK_IMPORTED_MODULE_8__.Group();
      e.matrixAutoUpdate = !1;
      var i = {
        group: e,
        landmarkIndex: o,
        css: !1
      };
      return this.anchors.push(i), this.scene.add(e), i;
    }
  }, {
    key: "addCSSAnchor",
    value: function addCSSAnchor(o) {
      var e = new three__WEBPACK_IMPORTED_MODULE_8__.Group();
      e.matrixAutoUpdate = !1;
      var i = {
        group: e,
        landmarkIndex: o,
        css: !0
      };
      return this.anchors.push(i), this.cssScene.add(e), i;
    }
  }, {
    key: "_startVideo",
    value: function _startVideo() {
      var _this = this;

      return new Promise(function (o, e) {
        if (_this.video = document.createElement('video'), _this.video.setAttribute('autoplay', ''), _this.video.setAttribute('muted', ''), _this.video.setAttribute('playsinline', ''), _this.video.style.position = 'absolute', _this.video.style.top = '0px', _this.video.style.left = '0px', _this.container.appendChild(_this.video), !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          _this.ui.showCompatibility(), e();
          return;
        }

        navigator.mediaDevices.getUserMedia({
          audio: !1,
          video: {
            facingMode: 'user'
          }
        }).then(function (i) {
          _this.video.addEventListener('loadedmetadata', function () {
            _this.video.setAttribute('width', _this.video.videoWidth), _this.video.setAttribute('height', _this.video.videoHeight), o();
          }), _this.video.srcObject = i;
        })["catch"](function (i) {
          console.log('getUserMedia error', i), e();
        });
      });
    }
  }, {
    key: "_startAR",
    value: function _startAR() {
      var _this2 = this;

      // eslint-disable-next-line no-async-promise-executor
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(o, e) {
          var i, _this2$controller$get, n, t, h, d;

          return C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  i = _this2.video;
                  _this2.container;

                  _this2.controller.onUpdate = function (_ref3) {
                    var l = _ref3.hasFace,
                        f = _ref3.estimateResult;

                    for (var r = 0; r < _this2.anchors.length; r++) {
                      _this2.anchors[r].css ? _this2.anchors[r].group.children.forEach(function (a) {
                        a.element.style.visibility = l ? 'visible' : 'hidden';
                      }) : _this2.anchors[r].group.visible = l;
                    }

                    for (var _r = 0; _r < _this2.faceMeshes.length; _r++) {
                      _this2.faceMeshes[_r].visible = l;
                    }

                    if (l) {
                      var _r2 = f.metricLandmarks,
                          a = f.faceMatrix,
                          F = f.faceScale;

                      for (var c = 0; c < _this2.anchors.length; c++) {
                        var _this2$anchors$c$grou2;

                        var u = _this2.anchors[c].landmarkIndex,
                            s = _this2.controller.getLandmarkMatrix(u);

                        if (_this2.anchors[c].css) {
                          var _this2$anchors$c$grou;

                          var v = [1e-3 * s[0], 1e-3 * s[1], s[2], s[3], 1e-3 * s[4], 1e-3 * s[5], s[6], s[7], 1e-3 * s[8], 1e-3 * s[9], s[10], s[11], 1e-3 * s[12], 1e-3 * s[13], s[14], s[15]];

                          (_this2$anchors$c$grou = _this2.anchors[c].group.matrix).set.apply(_this2$anchors$c$grou, v);
                        } else (_this2$anchors$c$grou2 = _this2.anchors[c].group.matrix).set.apply(_this2$anchors$c$grou2, (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(s));
                      }

                      for (var _c = 0; _c < _this2.faceMeshes.length; _c++) {
                        var _this2$faceMeshes$_c$;

                        (_this2$faceMeshes$_c$ = _this2.faceMeshes[_c].matrix).set.apply(_this2$faceMeshes$_c$, (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(a));
                      }
                    }
                  };

                  _this2._resize();

                  _context2.next = 6;
                  return _this2.controller.setup(i);

                case 6:
                  _this2$controller$get = _this2.controller.getCameraParams(), n = _this2$controller$get.fov, t = _this2$controller$get.aspect, h = _this2$controller$get.near, d = _this2$controller$get.far;
                  _this2.camera.fov = n;
                  _this2.camera.aspect = t;
                  _this2.camera.near = h;
                  _this2.camera.far = d;

                  _this2.camera.updateProjectionMatrix();

                  _this2.renderer.setSize(_this2.video.videoWidth, _this2.video.videoHeight);

                  _this2.cssRenderer.setSize(_this2.video.videoWidth, _this2.video.videoHeight);

                  _context2.next = 16;
                  return _this2.controller.dummyRun(i);

                case 16:
                  _this2._resize();

                  _this2.controller.processVideo(i);

                  o();

                case 19:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "_resize",
    value: function _resize() {
      var o = this.renderer,
          e = this.cssRenderer,
          i = this.camera,
          n = this.container,
          t = this.video;
      if (!t) return;
      var h, d;
      var l = t.videoWidth / t.videoHeight,
          f = n.clientWidth / n.clientHeight;
      l > f ? (d = n.clientHeight, h = d * l) : (h = n.clientWidth, d = h / l), t.style.top = -(d - n.clientHeight) / 2 + 'px', t.style.left = -(h - n.clientWidth) / 2 + 'px', t.style.width = h + 'px', t.style.height = d + 'px';
      var r = o.domElement,
          a = e.domElement;
      r.style.position = 'absolute', r.style.top = t.style.top, r.style.left = t.style.left, r.style.width = t.style.width, r.style.height = t.style.height, a.style.position = 'absolute', a.style.top = t.style.top, a.style.left = t.style.left, a.style.transformOrigin = 'top left', a.style.transform = 'scale(' + h / parseFloat(a.style.width) + ',' + d / parseFloat(a.style.height) + ')';
    }
  }]);

  return U;
}(); // window.MINDAR || (window.MINDAR = {});
// window.MINDAR.FACE || (window.MINDAR.FACE = {});
// window.MINDAR.FACE.MindARThree = U;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWluZGFyLWZhY2UtdGhyZWUucHJvZC5qcyJdLCJuYW1lcyI6WyJDIiwiQnVmZmVyR2VvbWV0cnkiLCJBIiwiQnVmZmVyQXR0cmlidXRlIiwiUiIsIlUiLCJvIiwiY29udGFpbmVyIiwidWlMb2FkaW5nIiwiZSIsInVpU2Nhbm5pbmciLCJpIiwidWlFcnJvciIsIm4iLCJmaWx0ZXJNaW5DRiIsInQiLCJmaWx0ZXJCZXRhIiwiaCIsInVpIiwiRSIsImNvbnRyb2xsZXIiLCJiIiwic2NlbmUiLCJtIiwiY3NzU2NlbmUiLCJyZW5kZXJlciIsInciLCJhbnRpYWxpYXMiLCJhbHBoYSIsImNzc1JlbmRlcmVyIiwiQ1NTM0RSZW5kZXJlciIsIm91dHB1dEVuY29kaW5nIiwieSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiY2FtZXJhIiwiZyIsImFuY2hvcnMiLCJmYWNlTWVzaGVzIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2hvdWxkRmFjZVVzZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX3Jlc2l6ZSIsImJpbmQiLCJzaG93TG9hZGluZyIsIl9zdGFydFZpZGVvIiwiX3N0YXJ0QVIiLCJoaWRlTG9hZGluZyIsInZpZGVvIiwic3JjT2JqZWN0IiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInN0b3AiLCJyZW1vdmUiLCJzdG9wUHJvY2Vzc1ZpZGVvIiwic3RhcnQiLCJjcmVhdGVUaHJlZUZhY2VHZW9tZXRyeSIsIk0iLCJ4IiwiY29sb3IiLCJ2aXNpYmxlIiwibWF0cml4QXV0b1VwZGF0ZSIsInB1c2giLCJwIiwiZ3JvdXAiLCJsYW5kbWFya0luZGV4IiwiY3NzIiwiYWRkIiwiUHJvbWlzZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwic2hvd0NvbXBhdGliaWxpdHkiLCJhdWRpbyIsImZhY2luZ01vZGUiLCJ0aGVuIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwiY29uc29sZSIsImxvZyIsIm9uVXBkYXRlIiwibCIsImhhc0ZhY2UiLCJmIiwiZXN0aW1hdGVSZXN1bHQiLCJyIiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJhIiwiZWxlbWVudCIsInZpc2liaWxpdHkiLCJtZXRyaWNMYW5kbWFya3MiLCJmYWNlTWF0cml4IiwiRiIsImZhY2VTY2FsZSIsImMiLCJ1IiwicyIsImdldExhbmRtYXJrTWF0cml4IiwidiIsIm1hdHJpeCIsInNldCIsInNldHVwIiwiZ2V0Q2FtZXJhUGFyYW1zIiwiZm92IiwiYXNwZWN0IiwibmVhciIsImQiLCJmYXIiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4Iiwic2V0U2l6ZSIsImR1bW15UnVuIiwicHJvY2Vzc1ZpZGVvIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsInBhcnNlRmxvYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxDQUFDLEdBQUc7QUFBRUMsZ0JBQWMsRUFBRUMsaURBQWxCO0FBQXFCQyxpQkFBZSxFQUFFQyxrREFBQ0E7QUFBdkMsQ0FBVjs7SUFDTUMsQztBQUNKLG1CQU9HO0FBQUEsUUFOVUMsQ0FNVixRQU5EQyxTQU1DO0FBQUEsOEJBTERDLFNBS0M7QUFBQSxRQUxVQyxDQUtWLCtCQUxjLEtBS2Q7QUFBQSwrQkFKREMsVUFJQztBQUFBLFFBSldDLENBSVgsZ0NBSmUsS0FJZjtBQUFBLDRCQUhEQyxPQUdDO0FBQUEsUUFIUUMsQ0FHUiw2QkFIWSxLQUdaO0FBQUEsZ0NBRkRDLFdBRUM7QUFBQSxRQUZZQyxDQUVaLGlDQUZnQixJQUVoQjtBQUFBLCtCQUREQyxVQUNDO0FB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Q0FBQ3BCLEtBQUYsQ0FBUWtELEtBQVIsR0FBZ0I3RyxDQUFDLENBQUMyRCxLQUFGLENBQVFrRCxLQUgzQixFQUlHOUIsQ0FBQyxDQUFDcEIsS0FBRixDQUFRbUQsTUFBUixHQUFpQjlHLENBQUMsQ0FBQzJELEtBQUYsQ0FBUW1ELE1BSjVCLEVBS0c1QixDQUFDLENBQUN2QixLQUFGLENBQVFDLFFBQVIsR0FBbUIsVUFMdEIsRUFNR3NCLENBQUMsQ0FBQ3ZCLEtBQUYsQ0FBUUUsR0FBUixHQUFjN0QsQ0FBQyxDQUFDMkQsS0FBRixDQUFRRSxHQU56QixFQU9HcUIsQ0FBQyxDQUFDdkIsS0FBRixDQUFRRyxJQUFSLEdBQWU5RCxDQUFDLENBQUMyRCxLQUFGLENBQVFHLElBUDFCLEVBUUdvQixDQUFDLENBQUN2QixLQUFGLENBQVFvRCxlQUFSLEdBQTBCLFVBUjdCLEVBU0c3QixDQUFDLENBQUN2QixLQUFGLENBQVFxRCxTQUFSLEdBQ0MsV0FBVzlHLENBQUMsR0FBRytHLFVBQVUsQ0FBQy9CLENBQUMsQ0FBQ3ZCLEtBQUYsQ0FBUWtELEtBQVQsQ0FBekIsR0FBMkMsR0FBM0MsR0FBaURSLENBQUMsR0FBR1ksVUFBVSxDQUFDL0IsQ0FBQyxDQUFDdkIsS0FBRixDQUFRbUQsTUFBVCxDQUEvRCxHQUFrRixHQVZ0RjtBQVdEOzs7O0tBRUg7QUFDQTtBQUNBOzs7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc2Vhc29uXS43ZjI0ZWZkNjBhYjVkM2IwYWRkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tZGVidWdnZXIgKi9cclxuaW1wb3J0IHtcclxuICBTY2VuZSBhcyBtLFxyXG4gIFdlYkdMUmVuZGVyZXIgYXMgdyxcclxuICBzUkdCRW5jb2RpbmcgYXMgeSxcclxuICBQZXJzcGVjdGl2ZUNhbWVyYSBhcyBnLFxyXG4gIE1lc2ggYXMgTSxcclxuICBNZXNoU3RhbmRhcmRNYXRlcmlhbCBhcyB4LFxyXG4gIEdyb3VwIGFzIHAsXHJcbiAgQnVmZmVyR2VvbWV0cnkgYXMgQSxcclxuICBCdWZmZXJBdHRyaWJ1dGUgYXMgUixcclxufSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IENTUzNEUmVuZGVyZXIgfSBmcm9tICd0aHJlZS1jc3MzZHJlbmRlcmVyJztcclxuaW1wb3J0IHsgQyBhcyBiIH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcclxuaW1wb3J0IHsgVSBhcyBFIH0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5jb25zdCBDID0geyBCdWZmZXJHZW9tZXRyeTogQSwgQnVmZmVyQXR0cmlidXRlOiBSIH07XHJcbmNsYXNzIFUge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGNvbnRhaW5lcjogbyxcclxuICAgIHVpTG9hZGluZzogZSA9ICd5ZXMnLFxyXG4gICAgdWlTY2FubmluZzogaSA9ICd5ZXMnLFxyXG4gICAgdWlFcnJvcjogbiA9ICd5ZXMnLFxyXG4gICAgZmlsdGVyTWluQ0Y6IHQgPSBudWxsLFxyXG4gICAgZmlsdGVyQmV0YTogaCA9IG51bGwsXHJcbiAgfSkge1xyXG4gICAgKHRoaXMuY29udGFpbmVyID0gbyksXHJcbiAgICAgICh0aGlzLnVpID0gbmV3IEUoeyB1aUxvYWRpbmc6IGUsIHVpU2Nhbm5pbmc6IGksIHVpRXJyb3I6IG4gfSkpLFxyXG4gICAgICAodGhpcy5jb250cm9sbGVyID0gbmV3IGIoe1xyXG4gICAgICAgIGZpbHRlck1pbkNGOiB0LFxyXG4gICAgICAgIGZpbHRlckJldGE6IGgsXHJcbiAgICAgIH0pKSxcclxuICAgICAgKHRoaXMuc2NlbmUgPSBuZXcgbSgpKSxcclxuICAgICAgKHRoaXMuY3NzU2NlbmUgPSBuZXcgbSgpKSxcclxuICAgICAgKHRoaXMucmVuZGVyZXIgPSBuZXcgdyh7IGFudGlhbGlhczogITAsIGFscGhhOiAhMCB9KSksXHJcbiAgICAgICh0aGlzLmNzc1JlbmRlcmVyID0gbmV3IENTUzNEUmVuZGVyZXIoeyBhbnRpYWxpYXM6ICEwIH0pKSxcclxuICAgICAgKHRoaXMucmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSB5KSxcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKSxcclxuICAgICAgKHRoaXMuY2FtZXJhID0gbmV3IGcoKSksXHJcbiAgICAgICh0aGlzLmFuY2hvcnMgPSBbXSksXHJcbiAgICAgICh0aGlzLmZhY2VNZXNoZXMgPSBbXSksXHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCksXHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3NzUmVuZGVyZXIuZG9tRWxlbWVudCksXHJcbiAgICAgICh0aGlzLnNob3VsZEZhY2VVc2VyID0gITApLFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICBhc3luYyBzdGFydCgpIHtcclxuICAgIHRoaXMudWkuc2hvd0xvYWRpbmcoKSwgYXdhaXQgdGhpcy5fc3RhcnRWaWRlbygpLCBhd2FpdCB0aGlzLl9zdGFydEFSKCksIHRoaXMudWkuaGlkZUxvYWRpbmcoKTtcclxuICB9XHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMudmlkZW8uc3JjT2JqZWN0LmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5zdG9wKCk7XHJcbiAgICB9KSxcclxuICAgICAgdGhpcy52aWRlby5yZW1vdmUoKSxcclxuICAgICAgdGhpcy5jb250cm9sbGVyLnN0b3BQcm9jZXNzVmlkZW8oKTtcclxuICB9XHJcbiAgc3dpdGNoQ2FtZXJhKCkge1xyXG4gICAgKHRoaXMuc2hvdWxkRmFjZVVzZXIgPSAhdGhpcy5zaG91bGRGYWNlVXNlciksIHRoaXMuc3RvcCgpLCB0aGlzLnN0YXJ0KCk7XHJcbiAgfVxyXG4gIGFkZEZhY2VNZXNoKCkge1xyXG4gICAgY29uc3QgbyA9IHRoaXMuY29udHJvbGxlci5jcmVhdGVUaHJlZUZhY2VHZW9tZXRyeShDKSxcclxuICAgICAgZSA9IG5ldyBNKG8sIG5ldyB4KHsgY29sb3I6IDE2Nzc3MjE1IH0pKTtcclxuICAgIHJldHVybiAoZS52aXNpYmxlID0gITEpLCAoZS5tYXRyaXhBdXRvVXBkYXRlID0gITEpLCB0aGlzLmZhY2VNZXNoZXMucHVzaChlKSwgZTtcclxuICB9XHJcbiAgYWRkQW5jaG9yKG8pIHtcclxuICAgIGNvbnN0IGUgPSBuZXcgcCgpO1xyXG4gICAgZS5tYXRyaXhBdXRvVXBkYXRlID0gITE7XHJcbiAgICBjb25zdCBpID0geyBncm91cDogZSwgbGFuZG1hcmtJbmRleDogbywgY3NzOiAhMSB9O1xyXG4gICAgcmV0dXJuIHRoaXMuYW5jaG9ycy5wdXNoKGkpLCB0aGlzLnNjZW5lLmFkZChlKSwgaTtcclxuICB9XHJcbiAgYWRkQ1NTQW5jaG9yKG8pIHtcclxuICAgIGNvbnN0IGUgPSBuZXcgcCgpO1xyXG4gICAgZS5tYXRyaXhBdXRvVXBkYXRlID0gITE7XHJcbiAgICBjb25zdCBpID0geyBncm91cDogZSwgbGFuZG1hcmtJbmRleDogbywgY3NzOiAhMCB9O1xyXG4gICAgcmV0dXJuIHRoaXMuYW5jaG9ycy5wdXNoKGkpLCB0aGlzLmNzc1NjZW5lLmFkZChlKSwgaTtcclxuICB9XHJcbiAgX3N0YXJ0VmlkZW8oKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKG8sIGUpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICgodGhpcy52aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJykpLFxyXG4gICAgICAgIHRoaXMudmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKSxcclxuICAgICAgICB0aGlzLnZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAnJyksXHJcbiAgICAgICAgdGhpcy52aWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJycpLFxyXG4gICAgICAgICh0aGlzLnZpZGVvLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJyksXHJcbiAgICAgICAgKHRoaXMudmlkZW8uc3R5bGUudG9wID0gJzBweCcpLFxyXG4gICAgICAgICh0aGlzLnZpZGVvLnN0eWxlLmxlZnQgPSAnMHB4JyksXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy52aWRlbyksXHJcbiAgICAgICAgIW5hdmlnYXRvci5tZWRpYURldmljZXMgfHwgIW5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnVpLnNob3dDb21wYXRpYmlsaXR5KCksIGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xyXG4gICAgICAgIC5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgYXVkaW86ICExLFxyXG4gICAgICAgICAgdmlkZW86IHtcclxuICAgICAgICAgICAgZmFjaW5nTW9kZTogJ3VzZXInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGkgPT4ge1xyXG4gICAgICAgICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWRlby5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy52aWRlby52aWRlb1dpZHRoKSxcclxuICAgICAgICAgICAgICB0aGlzLnZpZGVvLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy52aWRlby52aWRlb0hlaWdodCksXHJcbiAgICAgICAgICAgICAgbygpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICh0aGlzLnZpZGVvLnNyY09iamVjdCA9IGkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2dldFVzZXJNZWRpYSBlcnJvcicsIGkpLCBlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX3N0YXJ0QVIoKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXN5bmMtcHJvbWlzZS1leGVjdXRvclxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChvLCBlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGkgPSB0aGlzLnZpZGVvO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcixcclxuICAgICAgICAodGhpcy5jb250cm9sbGVyLm9uVXBkYXRlID0gKHsgaGFzRmFjZTogbCwgZXN0aW1hdGVSZXN1bHQ6IGYgfSkgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLmFuY2hvcnMubGVuZ3RoOyByKyspXHJcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yc1tyXS5jc3NcclxuICAgICAgICAgICAgICA/IHRoaXMuYW5jaG9yc1tyXS5ncm91cC5jaGlsZHJlbi5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBhLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IGwgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiAodGhpcy5hbmNob3JzW3JdLmdyb3VwLnZpc2libGUgPSBsKTtcclxuICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5mYWNlTWVzaGVzLmxlbmd0aDsgcisrKSB0aGlzLmZhY2VNZXNoZXNbcl0udmlzaWJsZSA9IGw7XHJcbiAgICAgICAgICBpZiAobCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IG1ldHJpY0xhbmRtYXJrczogciwgZmFjZU1hdHJpeDogYSwgZmFjZVNjYWxlOiBGIH0gPSBmO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuYW5jaG9ycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHUgPSB0aGlzLmFuY2hvcnNbY10ubGFuZG1hcmtJbmRleCxcclxuICAgICAgICAgICAgICAgIHMgPSB0aGlzLmNvbnRyb2xsZXIuZ2V0TGFuZG1hcmtNYXRyaXgodSk7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYW5jaG9yc1tjXS5jc3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBbXHJcbiAgICAgICAgICAgICAgICAgIDFlLTMgKiBzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAxZS0zICogc1sxXSxcclxuICAgICAgICAgICAgICAgICAgc1syXSxcclxuICAgICAgICAgICAgICAgICAgc1szXSxcclxuICAgICAgICAgICAgICAgICAgMWUtMyAqIHNbNF0sXHJcbiAgICAgICAgICAgICAgICAgIDFlLTMgKiBzWzVdLFxyXG4gICAgICAgICAgICAgICAgICBzWzZdLFxyXG4gICAgICAgICAgICAgICAgICBzWzddLFxyXG4gICAgICAgICAgICAgICAgICAxZS0zICogc1s4XSxcclxuICAgICAgICAgICAgICAgICAgMWUtMyAqIHNbOV0sXHJcbiAgICAgICAgICAgICAgICAgIHNbMTBdLFxyXG4gICAgICAgICAgICAgICAgICBzWzExXSxcclxuICAgICAgICAgICAgICAgICAgMWUtMyAqIHNbMTJdLFxyXG4gICAgICAgICAgICAgICAgICAxZS0zICogc1sxM10sXHJcbiAgICAgICAgICAgICAgICAgIHNbMTRdLFxyXG4gICAgICAgICAgICAgICAgICBzWzE1XSxcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuY2hvcnNbY10uZ3JvdXAubWF0cml4LnNldCguLi52KTtcclxuICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5hbmNob3JzW2NdLmdyb3VwLm1hdHJpeC5zZXQoLi4ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmZhY2VNZXNoZXMubGVuZ3RoOyBjKyspIHRoaXMuZmFjZU1lc2hlc1tjXS5tYXRyaXguc2V0KC4uLmEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRoaXMuX3Jlc2l6ZSgpLFxyXG4gICAgICAgIGF3YWl0IHRoaXMuY29udHJvbGxlci5zZXR1cChpKTtcclxuICAgICAgY29uc3QgeyBmb3Y6IG4sIGFzcGVjdDogdCwgbmVhcjogaCwgZmFyOiBkIH0gPSB0aGlzLmNvbnRyb2xsZXIuZ2V0Q2FtZXJhUGFyYW1zKCk7XHJcbiAgICAgICh0aGlzLmNhbWVyYS5mb3YgPSBuKSxcclxuICAgICAgICAodGhpcy5jYW1lcmEuYXNwZWN0ID0gdCksXHJcbiAgICAgICAgKHRoaXMuY2FtZXJhLm5lYXIgPSBoKSxcclxuICAgICAgICAodGhpcy5jYW1lcmEuZmFyID0gZCksXHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpLFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnZpZGVvLnZpZGVvV2lkdGgsIHRoaXMudmlkZW8udmlkZW9IZWlnaHQpLFxyXG4gICAgICAgIHRoaXMuY3NzUmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnZpZGVvLnZpZGVvV2lkdGgsIHRoaXMudmlkZW8udmlkZW9IZWlnaHQpLFxyXG4gICAgICAgIGF3YWl0IHRoaXMuY29udHJvbGxlci5kdW1teVJ1bihpKSxcclxuICAgICAgICB0aGlzLl9yZXNpemUoKSxcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIucHJvY2Vzc1ZpZGVvKGkpLFxyXG4gICAgICAgIG8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfcmVzaXplKCkge1xyXG4gICAgY29uc3QgeyByZW5kZXJlcjogbywgY3NzUmVuZGVyZXI6IGUsIGNhbWVyYTogaSwgY29udGFpbmVyOiBuLCB2aWRlbzogdCB9ID0gdGhpcztcclxuICAgIGlmICghdCkgcmV0dXJuO1xyXG4gICAgbGV0IGgsIGQ7XHJcbiAgICBjb25zdCBsID0gdC52aWRlb1dpZHRoIC8gdC52aWRlb0hlaWdodCxcclxuICAgICAgZiA9IG4uY2xpZW50V2lkdGggLyBuLmNsaWVudEhlaWdodDtcclxuICAgIGwgPiBmID8gKChkID0gbi5jbGllbnRIZWlnaHQpLCAoaCA9IGQgKiBsKSkgOiAoKGggPSBuLmNsaWVudFdpZHRoKSwgKGQgPSBoIC8gbCkpLFxyXG4gICAgICAodC5zdHlsZS50b3AgPSAtKGQgLSBuLmNsaWVudEhlaWdodCkgLyAyICsgJ3B4JyksXHJcbiAgICAgICh0LnN0eWxlLmxlZnQgPSAtKGggLSBuLmNsaWVudFdpZHRoKSAvIDIgKyAncHgnKSxcclxuICAgICAgKHQuc3R5bGUud2lkdGggPSBoICsgJ3B4JyksXHJcbiAgICAgICh0LnN0eWxlLmhlaWdodCA9IGQgKyAncHgnKTtcclxuICAgIGNvbnN0IHIgPSBvLmRvbUVsZW1lbnQsXHJcbiAgICAgIGEgPSBlLmRvbUVsZW1lbnQ7XHJcbiAgICAoci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZScpLFxyXG4gICAgICAoci5zdHlsZS50b3AgPSB0LnN0eWxlLnRvcCksXHJcbiAgICAgIChyLnN0eWxlLmxlZnQgPSB0LnN0eWxlLmxlZnQpLFxyXG4gICAgICAoci5zdHlsZS53aWR0aCA9IHQuc3R5bGUud2lkdGgpLFxyXG4gICAgICAoci5zdHlsZS5oZWlnaHQgPSB0LnN0eWxlLmhlaWdodCksXHJcbiAgICAgIChhLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJyksXHJcbiAgICAgIChhLnN0eWxlLnRvcCA9IHQuc3R5bGUudG9wKSxcclxuICAgICAgKGEuc3R5bGUubGVmdCA9IHQuc3R5bGUubGVmdCksXHJcbiAgICAgIChhLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICd0b3AgbGVmdCcpLFxyXG4gICAgICAoYS5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICdzY2FsZSgnICsgaCAvIHBhcnNlRmxvYXQoYS5zdHlsZS53aWR0aCkgKyAnLCcgKyBkIC8gcGFyc2VGbG9hdChhLnN0eWxlLmhlaWdodCkgKyAnKScpO1xyXG4gIH1cclxufVxyXG4vLyB3aW5kb3cuTUlOREFSIHx8ICh3aW5kb3cuTUlOREFSID0ge30pO1xyXG4vLyB3aW5kb3cuTUlOREFSLkZBQ0UgfHwgKHdpbmRvdy5NSU5EQVIuRkFDRSA9IHt9KTtcclxuLy8gd2luZG93Lk1JTkRBUi5GQUNFLk1pbmRBUlRocmVlID0gVTtcclxuZXhwb3J0IHsgVSBhcyBNaW5kQVJUaHJlZSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9