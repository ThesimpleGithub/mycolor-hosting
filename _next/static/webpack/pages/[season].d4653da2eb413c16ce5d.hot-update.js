self["webpackHotUpdate_N_E"]("pages/[season]",{

/***/ "./components/resultPage/Filter.tsx":
/*!******************************************!*\
  !*** ./components/resultPage/Filter.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _utils_mindar_face_three_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/mindar-face-three.prod */ "./utils/mindar-face-three.prod.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/rx */ "./node_modules/react-icons/rx/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _FilterSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterSlider */ "./components/resultPage/FilterSlider.tsx");
/* harmony import */ var _datas_cosmeticData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../datas/cosmeticData */ "./datas/cosmeticData.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\Desktop\\Projects\\company-mycolor\\components\\resultPage\\Filter.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject8() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  z-index: 1;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.2s;\n  background-color: #ffffff;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  transition: opacity 0.5s ease;\n  background-color: rgba(0, 0, 0, 0.25);\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  color: white;\n\n  padding: 8px 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  img {\n    width: 68px;\n    height: 68px;\n    border-radius: 15px;\n    margin-right: 10px;\n  }\n  div:last-child {\n    width: 55%;\n    max-width: 285px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    h3 {\n      margin: 0;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      font-size: 16px;\n      font-weight: bold;\n    }\n    div {\n      margin: 5px 0px;\n      display: flex;\n      align-items: center;\n    }\n    span {\n      font-size: 14px;\n      font-weight: 100;\n    }\n    p {\n      font-size: 10px;\n      font-weight: 100;\n    }\n    button {\n      margin-left: 10px;\n      padding-top: 0px;\n      font-size: 10px;\n      font-weight: 900;\n      background-color: #ffc6c6;\n      color: black;\n      border-radius: 20px;\n      width: 80px;\n      height: 23.7px;\n      font-family: 'Pretendard Variable';\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  transition: opacity 0.5s ease;\n  background-color: rgba(0, 0, 0, 0.25);\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 5px;\n  div:first-child {\n    width: 68px;\n    height: 68px;\n    border-radius: 15px;\n    margin-right: 10px;\n    background: gray;\n  }\n  div:last-child {\n    width: 55%;\n    max-width: 285px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  padding: 23px 13px;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 18px;\n  button:nth-child(1) {\n    margin-top: 0px;\n  }\n  button {\n    margin-top: 16px;\n    font-size: 29px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    border-radius: 100px;\n    position: relative;\n    background: rgb(185 185 185);\n    color: #ffffff;\n    :active {\n      background: rgb(62 62 62 / 90%);\n    }\n  }\n  @media (orientation: portrait) and (max-width: 720px),\n    (orientation: landscape) and (max-height: 720px) {\n    padding: 16px 9px;\n    button {\n      font-size: 22px;\n      margin-top: 10px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  z-index: 3;\n  position: fixed;\n  top: 33%;\n  right: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  position: fixed;\n  overflow: hidden;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  canvas {\n    z-index: 1;\n    display: block;\n    position: absolute;\n  }\n  video,\n  canvas {\n    transform: scale(-1, 1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject());
_c = Container;
var UI_Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject2());
_c2 = UI_Wrapper;
var BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject3());
_c3 = BtnWrapper;
var Skeleton = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject4());
var ProductDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject5());
_c4 = ProductDiv;
var ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.header(_templateObject6());
_c5 = ProductWrapper;
var CaptureBG = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject7());
_c6 = CaptureBG;
var IMG = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.img(_templateObject8());

var Filter = function Filter(_ref) {
  _s();

  var setIsStarted = _ref.setIsStarted,
      productType = _ref.productType,
      colorName = _ref.colorName;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      isHided = _useState[0],
      setIsHided = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('립'),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    colorName: '클래시',
    filterImg: '',
    company: '',
    type: '',
    productImg: '',
    rgb: '',
    href: ''
  }),
      selectedFilter = _useState3[0],
      setSelecetedFilter = _useState3[1];

  var filterTypes = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(_datas_cosmeticData__WEBPACK_IMPORTED_MODULE_7__.cosmeticTypeArr);
  var filterData = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)({});
  var ContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var ProductRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var SliderRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var faceMesh = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  var mindarThree = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)({});
  var isCapture = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(false);
  var Capture_BG_Ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var prevFilterImg = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(selectedFilter.productImg);

  var getChangedCanvas = function getChangedCanvas(texture, hex) {
    hex = '#' + hex;
    var copyCanvas = document.createElement('canvas');
    copyCanvas.width = 500;
    copyCanvas.height = 500;
    var context = copyCanvas.getContext('2d');
    context.drawImage(texture, 0, 0, copyCanvas.width, copyCanvas.height);
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = copyCanvas.width;
    tempCanvas.height = copyCanvas.height;
    tempCtx.drawImage(texture, 0, 0, copyCanvas.width, copyCanvas.height);
    tempCtx.globalCompositeOperation = 'source-atop';
    tempCtx.fillStyle = hex;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    context.globalCompositeOperation = 'multiply';
    context.drawImage(tempCanvas, 0, 0, copyCanvas.width, copyCanvas.height);
    tempCtx.drawImage(texture, 0, 0, copyCanvas.width, copyCanvas.height);
    tempCtx.fillStyle = hex;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    context.drawImage(tempCanvas, 0, 0, copyCanvas.width, copyCanvas.height);
    return copyCanvas;
  };

  var handleChangeType = function handleChangeType(type) {
    setSelectedType(type);
    setSelecetedFilter(filterData.current[type][0]);
  };

  var handleChangeFilter = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (filterData) {
    setSelecetedFilter(filterData);
  }, []);

  var reDrawFilter = function reDrawFilter() {
    new three__WEBPACK_IMPORTED_MODULE_10__.TextureLoader().load("".concat("http://localhost:7000", "/serverImages/").concat(selectedFilter.filterImg), function (texture) {
      faceMesh.current.material.map = productType === 'mask' ? new three__WEBPACK_IMPORTED_MODULE_10__.CanvasTexture(getChangedCanvas(texture.image, selectedFilter.rgb)) : texture;

      if (productType === 'cosmetic') {
        prevFilterImg.current = selectedFilter.filterImg;
        faceMesh.current.material.color.setHex(parseInt(selectedFilter.rgb, 16));
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (!faceMesh.current) {
      mindarThree.current = new _utils_mindar_face_three_prod__WEBPACK_IMPORTED_MODULE_4__.MindARThree({
        container: ContainerRef.current
      });
      var _mindarThree$current = mindarThree.current,
          renderer = _mindarThree$current.renderer,
          scene = _mindarThree$current.scene,
          camera = _mindarThree$current.camera;
      var light = new three__WEBPACK_IMPORTED_MODULE_10__.AmbientLight(0xffffff, 1);
      scene.add(light);
      faceMesh.current = mindarThree.current.addFaceMesh();
      faceMesh.current.material.transparent = true;

      var start = /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          var captureCanvas, ctx, video, _ref3, width, height;

          return C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return mindarThree.current.start();

                case 2:
                  captureCanvas = document.createElement('canvas');
                  ctx = captureCanvas.getContext('2d');
                  video = document.querySelector('video');
                  captureCanvas.width = renderer.domElement.width;
                  captureCanvas.height = renderer.domElement.height;
                  _ref3 = captureCanvas, width = _ref3.width, height = _ref3.height;
                  ctx.translate(width / 2, height / 2);
                  ctx.scale(-1, 1);
                  ctx.translate(-width / 2, -height / 2);
                  renderer.setAnimationLoop(function () {
                    renderer.render(scene, camera);

                    if (isCapture.current) {
                      ctx.clearRect(0, 0, width, height);
                      ctx.drawImage(video, 0, 0, width, height);
                      ctx.drawImage(renderer.domElement, 0, 0, width, height);
                      var link = document.createElement('a');
                      link.download = new Date() + '퍼스널컬러.png';
                      link.href = captureCanvas.toDataURL();
                      link.click();
                      link.remove();
                      isCapture.current = false;
                    }
                  });

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function start() {
          return _ref2.apply(this, arguments);
        };
      }();

      scene.add(faceMesh.current);
      start();
      return;
    }

    if (selectedFilter.company === 'NONE') faceMesh.current.material.opacity = 0;else faceMesh.current.material.opacity = 1;
    if (!(productType === 'cosmetic' && prevFilterImg.current === selectedFilter.filterImg)) reDrawFilter();else faceMesh.current.material.color.setHex(parseInt(selectedFilter.rgb, 16));
  }, [selectedFilter]); // useEffect(() => {
  //   if (!faceMesh.current) return;
  //   if (selectedFilter.company === 'NONE') faceMesh.current!.material.opacity = 0;
  //   else faceMesh.current!.material.opacity = 1;
  //   faceMesh.current!.material.color.setHex(parseInt(selectedFilter.rgb.replace('#', ''), 16));
  // }, [selectedFilter]);

  var fetchData = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var fetchedData;
      return C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().get('/api/getFilterData', {
                params: {
                  colorName: colorName,
                  productType: productType
                }
              });

            case 3:
              fetchedData = _context2.sent.data;
              console.log(fetchedData);
              filterData.current = fetchedData.filterDatas;
              filterTypes.current = fetchedData.filterTypes;
              setSelecetedFilter(filterData.current[filterTypes.current[0]][0]);
              setSelectedType(fetchedData.filterTypes[0]);
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              alert('에러가 발생했습니다. 네트워크를 확인해보시고 다시 시도해주세요');

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function fetchData() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchData(); // renderer.domElement.parentElement?.insertBefore(canvas, renderer.domElement);

    return function () {
      return mindarThree.current.stop();
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
      ref: ContainerRef,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CaptureBG, {
        ref: Capture_BG_Ref
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 9
      }, _this), selectedFilter.company === 'NONE' || /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductWrapper, {
        ref: ProductRef,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductDiv, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: selectedFilter.productImg
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: selectedFilter.company + ' ' + selectedFilter.type
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: selectedFilter.colorName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://link.coupang.com/a/".concat(selectedFilter.href),
                target: "_blank",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  children: ["\uC790\uC138\uD788\uBCF4\uAE30 ", '>']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "\u203B \uCFE0\uD321 \uD30C\uD2B8\uB108\uC2A4 \uD65C\uB3D9\uC744 \uD1B5\uD574 \uC77C\uC815\uC561\uC758 \uC218\uC218\uB8CC\uB97C \uC81C\uACF5\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UI_Wrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BtnWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              isCapture.current = true;
              var elem = Capture_BG_Ref.current;
              elem.style.opacity = '.7';
              setTimeout(function () {
                return elem.style.opacity = '0';
              }, 200);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiFillCamera, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 387,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              var opacity = isHided ? '1' : '0';
              if (selectedFilter.company !== 'NONE') ProductRef.current.style.opacity = opacity;
              SliderRef.current.style.opacity = opacity;
              setIsHided(!isHided);
            },
            children: isHided ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineFullscreenExit, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 26
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineFullscreen, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 56
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return confirm('가상 메이크업을 종료하시겠습니까?') && setIsStarted(false);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_12__.RxExit, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 402,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterSlider__WEBPACK_IMPORTED_MODULE_6__.default, {
        filterData: filterData.current,
        filterTypes: filterTypes.current,
        SliderRef: SliderRef,
        colorName: colorName,
        selectedFilter: selectedFilter,
        selectedType: selectedType,
        handleChangeFilter: handleChangeFilter,
        handleChangeType: handleChangeType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Filter, "CziXhFDA8AFP5WMQpJkMDiiViL4=");

_c7 = Filter;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "UI_Wrapper");
$RefreshReg$(_c3, "BtnWrapper");
$RefreshReg$(_c4, "ProductDiv");
$RefreshReg$(_c5, "ProductWrapper");
$RefreshReg$(_c6, "CaptureBG");
$RefreshReg$(_c7, "Filter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0ZpbHRlci50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiVUlfV3JhcHBlciIsIkJ0bldyYXBwZXIiLCJTa2VsZXRvbiIsIlByb2R1Y3REaXYiLCJQcm9kdWN0V3JhcHBlciIsIkNhcHR1cmVCRyIsIklNRyIsIkZpbHRlciIsInNldElzU3RhcnRlZCIsInByb2R1Y3RUeXBlIiwiY29sb3JOYW1lIiwidXNlU3RhdGUiLCJpc0hpZGVkIiwic2V0SXNIaWRlZCIsInNlbGVjdGVkVHlwZSIsInNldFNlbGVjdGVkVHlwZSIsImZpbHRlckltZyIsImNvbXBhbnkiLCJ0eXBlIiwicHJvZHVjdEltZyIsInJnYiIsImhyZWYiLCJzZWxlY3RlZEZpbHRlciIsInNldFNlbGVjZXRlZEZpbHRlciIsImZpbHRlclR5cGVzIiwidXNlUmVmIiwiY29zbWV0aWNUeXBlQXJyIiwiZmlsdGVyRGF0YSIsIkNvbnRhaW5lclJlZiIsIlByb2R1Y3RSZWYiLCJTbGlkZXJSZWYiLCJmYWNlTWVzaCIsIm1pbmRhclRocmVlIiwiaXNDYXB0dXJlIiwiQ2FwdHVyZV9CR19SZWYiLCJwcmV2RmlsdGVySW1nIiwiZ2V0Q2hhbmdlZENhbnZhcyIsInRleHR1cmUiLCJoZXgiLCJjb3B5Q2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInRlbXBDYW52YXMiLCJ0ZW1wQ3R4IiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJoYW5kbGVDaGFuZ2VUeXBlIiwiY3VycmVudCIsImhhbmRsZUNoYW5nZUZpbHRlciIsInVzZUNhbGxiYWNrIiwicmVEcmF3RmlsdGVyIiwiVEhSRUUiLCJsb2FkIiwicHJvY2VzcyIsIm1hdGVyaWFsIiwibWFwIiwiaW1hZ2UiLCJjb2xvciIsInNldEhleCIsInBhcnNlSW50IiwidXNlRWZmZWN0IiwiTWluZEFSVGhyZWUiLCJjb250YWluZXIiLCJyZW5kZXJlciIsInNjZW5lIiwiY2FtZXJhIiwibGlnaHQiLCJhZGQiLCJhZGRGYWNlTWVzaCIsInRyYW5zcGFyZW50Iiwic3RhcnQiLCJjYXB0dXJlQ2FudmFzIiwiY3R4IiwidmlkZW8iLCJxdWVyeVNlbGVjdG9yIiwiZG9tRWxlbWVudCIsInRyYW5zbGF0ZSIsInNjYWxlIiwic2V0QW5pbWF0aW9uTG9vcCIsInJlbmRlciIsImNsZWFyUmVjdCIsImxpbmsiLCJkb3dubG9hZCIsIkRhdGUiLCJ0b0RhdGFVUkwiLCJjbGljayIsInJlbW92ZSIsIm9wYWNpdHkiLCJmZXRjaERhdGEiLCJheGlvcyIsInBhcmFtcyIsImZldGNoZWREYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJEYXRhcyIsImFsZXJ0Iiwic3RvcCIsImVsZW0iLCJzdHlsZSIsInNldFRpbWVvdXQiLCJjb25maXJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywwREFBSCxtQkFBZjtLQUFNRCxTO0FBa0JOLElBQU1FLFVBQVUsR0FBR0QsMERBQUgsb0JBQWhCO01BQU1DLFU7QUFNTixJQUFNQyxVQUFVLEdBQUdGLDBEQUFILG9CQUFoQjtNQUFNRSxVO0FBK0JOLElBQU1DLFFBQVEsR0FBR0gsMERBQUgsb0JBQWQ7QUE2QkEsSUFBTUksVUFBVSxHQUFHSiwwREFBSCxvQkFBaEI7TUFBTUksVTtBQXFETixJQUFNQyxjQUFjLEdBQUdMLDZEQUFILG9CQUFwQjtNQUFNSyxjO0FBV04sSUFBTUMsU0FBUyxH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RTtBQUFBLHFCQUFNK0YsT0FBTyxDQUFDLG9CQUFELENBQVAsSUFBaUNuRyxZQUFZLENBQUMsS0FBRCxDQUFuRDtBQUFBLGFBRFg7QUFBQSxtQ0FHRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixlQW9ERSw4REFBQyxrREFBRDtBQUNFLGtCQUFVLEVBQUVtQixVQUFVLENBQUMwQixPQUR6QjtBQUVFLG1CQUFXLEVBQUU3QixXQUFXLENBQUM2QixPQUYzQjtBQUdFLGlCQUFTLEVBQUV2QixTQUhiO0FBSUUsaUJBQVMsRUFBRXBCLFNBSmI7QUFLRSxzQkFBYyxFQUFFWSxjQUxsQjtBQU1FLG9CQUFZLEVBQUVSLFlBTmhCO0FBT0UsMEJBQWtCLEVBQUV3QyxrQkFQdEI7QUFRRSx3QkFBZ0IsRUFBRUY7QUFScEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW1FRCxDQXRPRDs7R0FBTTdDLE07O01BQUFBLE07QUF3T04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3NlYXNvbl0uZDQ2NTNkYTJlYjQxM2MxNmNlNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1pbmRBUlRocmVlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWluZGFyLWZhY2UtdGhyZWUucHJvZCc7XHJcbmltcG9ydCB7IEFpT3V0bGluZUZ1bGxzY3JlZW5FeGl0LCBBaU91dGxpbmVGdWxsc2NyZWVuLCBBaUZpbGxDYW1lcmEgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IFJ4RXhpdCB9IGZyb20gJ3JlYWN0LWljb25zL3J4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgRmlsdGVyU2xpZGVyIGZyb20gJy4vRmlsdGVyU2xpZGVyJztcclxuaW1wb3J0IHtcclxuICBmZXRjaEZpbHRlclR5cGUsXHJcbiAgZmlsdGVyVHlwZXMsXHJcbiAgSUZpbHRlcixcclxuICBwcm9kdWN0VHlwZXMsXHJcbiAgY29sb3JUeXBlcyxcclxufSBmcm9tICcuLi8uLi9kYXRhcy9maWx0ZXJEYXRhJztcclxuaW1wb3J0IHsgY29zbWV0aWNUeXBlQXJyLCBjb3NtZXRpY1R5cGVzIH0gZnJvbSAnLi4vLi4vZGF0YXMvY29zbWV0aWNEYXRhJztcclxuaW1wb3J0IHsgbWFza1R5cGVBcnIsIG1hc2tUeXBlcyB9IGZyb20gJy4uLy4uL2RhdGFzL21hc2tEYXRhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAzO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGNhbnZhcyB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIHZpZGVvLFxyXG4gIGNhbnZhcyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFVJX1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHotaW5kZXg6IDM7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzMlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5jb25zdCBCdG5XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyM3B4IDEzcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg1IDE4NSAxODUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICA6YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDYyIDYyIDYyIC8gOTAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA3MjBweCksXHJcbiAgICAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xyXG4gICAgcGFkZGluZzogMTZweCA5cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2tlbGV0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCA1cHg7XHJcbiAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgfVxyXG4gIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXgtd2lkdGg6IDI4NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIGhlaWdodDogNjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXgtd2lkdGg6IDI4NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzZjNjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiAyMy43cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnUHJldGVuZGFyZCBWYXJpYWJsZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBQcm9kdWN0V3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgcGFkZGluZzogOHB4IDVweDtcclxuYDtcclxuY29uc3QgQ2FwdHVyZUJHID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5gO1xyXG5jb25zdCBJTUcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICBjb2xvck5hbWU6IGNvbG9yVHlwZXM7XHJcbiAgc2V0SXNTdGFydGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcbiAgcHJvZHVjdFR5cGU6IHByb2R1Y3RUeXBlcztcclxufVxyXG5cclxuY29uc3QgRmlsdGVyID0gKHsgc2V0SXNTdGFydGVkLCBwcm9kdWN0VHlwZSwgY29sb3JOYW1lIH06IHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzSGlkZWQsIHNldElzSGlkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFR5cGUsIHNldFNlbGVjdGVkVHlwZV0gPSB1c2VTdGF0ZTxjb3NtZXRpY1R5cGVzIHwgbWFza1R5cGVzPign66a9Jyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRmlsdGVyLCBzZXRTZWxlY2V0ZWRGaWx0ZXJdID0gdXNlU3RhdGU8SUZpbHRlcj4oe1xyXG4gICAgY29sb3JOYW1lOiAn7YG0656Y7IucJyxcclxuICAgIGZpbHRlckltZzogJycsXHJcbiAgICBjb21wYW55OiAnJyxcclxuICAgIHR5cGU6ICcnLFxyXG4gICAgcHJvZHVjdEltZzogJycsXHJcbiAgICByZ2I6ICcnLFxyXG4gICAgaHJlZjogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZpbHRlclR5cGVzID0gdXNlUmVmPHR5cGVvZiBjb3NtZXRpY1R5cGVBcnIgfCB0eXBlb2YgbWFza1R5cGVBcnI+KGNvc21ldGljVHlwZUFycik7XHJcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHVzZVJlZjxmZXRjaEZpbHRlclR5cGU+KHt9KTtcclxuICBjb25zdCBDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFByb2R1Y3RSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFNsaWRlclJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgZmFjZU1lc2ggPSB1c2VSZWY8VEhSRUUuTWVzaDxUSFJFRS5CdWZmZXJHZW9tZXRyeSwgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+PigpO1xyXG4gIGNvbnN0IG1pbmRhclRocmVlID0gdXNlUmVmPE1pbmRBUlRocmVlPih7fSk7XHJcbiAgY29uc3QgaXNDYXB0dXJlID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBDYXB0dXJlX0JHX1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgcHJldkZpbHRlckltZyA9IHVzZVJlZjxzdHJpbmc+KHNlbGVjdGVkRmlsdGVyLnByb2R1Y3RJbWcpO1xyXG5cclxuICBjb25zdCBnZXRDaGFuZ2VkQ2FudmFzID0gKHRleHR1cmU6IENhbnZhc0ltYWdlU291cmNlLCBoZXg6IHN0cmluZykgPT4ge1xyXG4gICAgaGV4ID0gJyMnICsgaGV4O1xyXG4gICAgY29uc3QgY29weUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29weUNhbnZhcy53aWR0aCA9IDUwMDtcclxuICAgIGNvcHlDYW52YXMuaGVpZ2h0ID0gNTAwO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNvcHlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZXh0dXJlLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgdGVtcEN0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICB0ZW1wQ2FudmFzLndpZHRoID0gY29weUNhbnZhcy53aWR0aDtcclxuICAgIHRlbXBDYW52YXMuaGVpZ2h0ID0gY29weUNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgdGVtcEN0eC5kcmF3SW1hZ2UodGV4dHVyZSwgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHRlbXBDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1hdG9wJztcclxuICAgIHRlbXBDdHguZmlsbFN0eWxlID0gaGV4O1xyXG4gICAgdGVtcEN0eC5maWxsUmVjdCgwLCAwLCB0ZW1wQ2FudmFzLndpZHRoLCB0ZW1wQ2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGVtcENhbnZhcywgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHRlbXBDdHguZHJhd0ltYWdlKHRleHR1cmUsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuICAgIHRlbXBDdHguZmlsbFN0eWxlID0gaGV4O1xyXG4gICAgdGVtcEN0eC5maWxsUmVjdCgwLCAwLCB0ZW1wQ2FudmFzLndpZHRoLCB0ZW1wQ2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGVtcENhbnZhcywgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiBjb3B5Q2FudmFzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVR5cGUgPSAodHlwZTogZmlsdGVyVHlwZXMpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVHlwZSh0eXBlKTtcclxuICAgIHNldFNlbGVjZXRlZEZpbHRlcihmaWx0ZXJEYXRhLmN1cnJlbnRbdHlwZV0hWzBdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VGaWx0ZXIgPSB1c2VDYWxsYmFjaygoZmlsdGVyRGF0YTogSUZpbHRlcikgPT4ge1xyXG4gICAgc2V0U2VsZWNldGVkRmlsdGVyKGZpbHRlckRhdGEpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcmVEcmF3RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9zZXJ2ZXJJbWFnZXMvJHtzZWxlY3RlZEZpbHRlci5maWx0ZXJJbWd9YCxcclxuICAgICAgdGV4dHVyZSA9PiB7XHJcbiAgICAgICAgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwubWFwID1cclxuICAgICAgICAgIHByb2R1Y3RUeXBlID09PSAnbWFzaydcclxuICAgICAgICAgICAgPyBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShnZXRDaGFuZ2VkQ2FudmFzKHRleHR1cmUuaW1hZ2UsIHNlbGVjdGVkRmlsdGVyLnJnYikpXHJcbiAgICAgICAgICAgIDogdGV4dHVyZTtcclxuICAgICAgICBpZiAocHJvZHVjdFR5cGUgPT09ICdjb3NtZXRpYycpIHtcclxuICAgICAgICAgIHByZXZGaWx0ZXJJbWcuY3VycmVudCA9IHNlbGVjdGVkRmlsdGVyLmZpbHRlckltZztcclxuICAgICAgICAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLmNvbG9yLnNldEhleChwYXJzZUludChzZWxlY3RlZEZpbHRlci5yZ2IsIDE2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWZhY2VNZXNoLmN1cnJlbnQpIHtcclxuICAgICAgbWluZGFyVGhyZWUuY3VycmVudCA9IG5ldyBNaW5kQVJUaHJlZSh7XHJcbiAgICAgICAgY29udGFpbmVyOiBDb250YWluZXJSZWYuY3VycmVudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgcmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEgfSA9IG1pbmRhclRocmVlLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMSk7XHJcbiAgICAgIHNjZW5lLmFkZChsaWdodCk7XHJcbiAgICAgIGZhY2VNZXNoLmN1cnJlbnQgPSBtaW5kYXJUaHJlZS5jdXJyZW50LmFkZEZhY2VNZXNoKCk7XHJcbiAgICAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgbWluZGFyVGhyZWUuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIGNvbnN0IGNhcHR1cmVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjb25zdCBjdHggPSBjYXB0dXJlQ2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcclxuICAgICAgICBjYXB0dXJlQ2FudmFzLndpZHRoID0gcmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aDtcclxuICAgICAgICBjYXB0dXJlQ2FudmFzLmhlaWdodCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FwdHVyZUNhbnZhcyE7XHJcbiAgICAgICAgY3R4IS50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICBjdHghLnNjYWxlKC0xLCAxKTtcclxuICAgICAgICBjdHghLnRyYW5zbGF0ZSgtd2lkdGggLyAyLCAtaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnNldEFuaW1hdGlvbkxvb3AoKCkgPT4ge1xyXG4gICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgICAgICAgaWYgKGlzQ2FwdHVyZS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodmlkZW8hLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShyZW5kZXJlci5kb21FbGVtZW50LCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgbGluay5kb3dubG9hZCA9IG5ldyBEYXRlKCkgKyAn7Y287Iqk64SQ7Lus65+sLnBuZyc7XHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGNhcHR1cmVDYW52YXMhLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGxpbmsucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlzQ2FwdHVyZS5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHNjZW5lLmFkZChmYWNlTWVzaC5jdXJyZW50ISk7XHJcbiAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRGaWx0ZXIuY29tcGFueSA9PT0gJ05PTkUnKSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5vcGFjaXR5ID0gMDtcclxuICAgIGVsc2UgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwub3BhY2l0eSA9IDE7XHJcblxyXG4gICAgaWYgKCEocHJvZHVjdFR5cGUgPT09ICdjb3NtZXRpYycgJiYgcHJldkZpbHRlckltZy5jdXJyZW50ID09PSBzZWxlY3RlZEZpbHRlci5maWx0ZXJJbWcpKVxyXG4gICAgICByZURyYXdGaWx0ZXIoKTtcclxuICAgIGVsc2UgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KHBhcnNlSW50KHNlbGVjdGVkRmlsdGVyLnJnYiwgMTYpKTtcclxuICB9LCBbc2VsZWN0ZWRGaWx0ZXJdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmICghZmFjZU1lc2guY3VycmVudCkgcmV0dXJuO1xyXG4gIC8vICAgaWYgKHNlbGVjdGVkRmlsdGVyLmNvbXBhbnkgPT09ICdOT05FJykgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwub3BhY2l0eSA9IDA7XHJcbiAgLy8gICBlbHNlIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAxO1xyXG4gIC8vICAgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KHBhcnNlSW50KHNlbGVjdGVkRmlsdGVyLnJnYi5yZXBsYWNlKCcjJywgJycpLCAxNikpO1xyXG4gIC8vIH0sIFtzZWxlY3RlZEZpbHRlcl0pO1xyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWREYXRhID0gKFxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRGaWx0ZXJEYXRhJywge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGNvbG9yTmFtZTogY29sb3JOYW1lLFxyXG4gICAgICAgICAgICBwcm9kdWN0VHlwZTogcHJvZHVjdFR5cGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICkuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZmV0Y2hlZERhdGEpO1xyXG4gICAgICBmaWx0ZXJEYXRhLmN1cnJlbnQgPSBmZXRjaGVkRGF0YS5maWx0ZXJEYXRhcztcclxuICAgICAgZmlsdGVyVHlwZXMuY3VycmVudCA9IGZldGNoZWREYXRhLmZpbHRlclR5cGVzO1xyXG4gICAgICBzZXRTZWxlY2V0ZWRGaWx0ZXIoZmlsdGVyRGF0YS5jdXJyZW50W2ZpbHRlclR5cGVzLmN1cnJlbnRbMF1dIVswXSk7XHJcbiAgICAgIHNldFNlbGVjdGVkVHlwZShmZXRjaGVkRGF0YS5maWx0ZXJUeXBlc1swXSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGFsZXJ0KCfsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLiDrhKTtirjsm4ztgazrpbwg7ZmV7J247ZW067O07Iuc6rOgIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgLy8gcmVuZGVyZXIuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50Py5pbnNlcnRCZWZvcmUoY2FudmFzLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIHJldHVybiAoKSA9PiBtaW5kYXJUaHJlZS5jdXJyZW50LnN0b3AoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyIHJlZj17Q29udGFpbmVyUmVmfT5cclxuICAgICAgICA8Q2FwdHVyZUJHIHJlZj17Q2FwdHVyZV9CR19SZWZ9IC8+XHJcbiAgICAgICAge3NlbGVjdGVkRmlsdGVyLmNvbXBhbnkgPT09ICdOT05FJyB8fCAoXHJcbiAgICAgICAgICA8UHJvZHVjdFdyYXBwZXIgcmVmPXtQcm9kdWN0UmVmfT5cclxuICAgICAgICAgICAgPFByb2R1Y3REaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZWxlY3RlZEZpbHRlci5wcm9kdWN0SW1nfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3NlbGVjdGVkRmlsdGVyLmNvbXBhbnkgKyAnICcgKyBzZWxlY3RlZEZpbHRlci50eXBlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57c2VsZWN0ZWRGaWx0ZXIuY29sb3JOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vbGluay5jb3VwYW5nLmNvbS9hLyR7c2VsZWN0ZWRGaWx0ZXIuaHJlZn1gfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPuyekOyEuO2eiOuztOq4sCB7Jz4nfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPuKAuyDsv6DtjKEg7YyM7Yq464SI7IqkIO2ZnOuPmeydhCDthrXtlbQg7J287KCV7JWh7J2YIOyImOyImOujjOulvCDsoJzqs7XrsJvsnYQg7IiYIOyeiOyKteuLiOuLpC48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUHJvZHVjdERpdj5cclxuICAgICAgICAgIDwvUHJvZHVjdFdyYXBwZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7LyogPElNRyBzcmM9e3Byb2Nlc3MuZW52LlBBVEggKyAnL2ltYWdlcy90ZXN0SW1nLmpwZyd9IC8+ICovfVxyXG4gICAgICAgIDxVSV9XcmFwcGVyPlxyXG4gICAgICAgICAgPEJ0bldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpc0NhcHR1cmUuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtID0gQ2FwdHVyZV9CR19SZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcuNyc7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChlbGVtLnN0eWxlLm9wYWNpdHkgPSAnMCcpLCAyMDApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWlGaWxsQ2FtZXJhIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IGlzSGlkZWQgPyAnMScgOiAnMCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRGaWx0ZXIuY29tcGFueSAhPT0gJ05PTkUnKSBQcm9kdWN0UmVmLmN1cnJlbnQhLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgU2xpZGVyUmVmLmN1cnJlbnQhLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgc2V0SXNIaWRlZCghaXNIaWRlZCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0hpZGVkID8gPEFpT3V0bGluZUZ1bGxzY3JlZW5FeGl0IC8+IDogPEFpT3V0bGluZUZ1bGxzY3JlZW4gLz59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybSgn6rCA7IOBIOuplOydtO2BrOyXheydhCDsooXro4ztlZjsi5zqsqDsirXri4jquYw/JykgJiYgc2V0SXNTdGFydGVkKGZhbHNlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxSeEV4aXQgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0J0bldyYXBwZXI+XHJcbiAgICAgICAgICB7LyogPFV0aWxCdXR0b24gLz4gKi99XHJcbiAgICAgICAgPC9VSV9XcmFwcGVyPlxyXG4gICAgICAgIDxGaWx0ZXJTbGlkZXJcclxuICAgICAgICAgIGZpbHRlckRhdGE9e2ZpbHRlckRhdGEuY3VycmVudH1cclxuICAgICAgICAgIGZpbHRlclR5cGVzPXtmaWx0ZXJUeXBlcy5jdXJyZW50fVxyXG4gICAgICAgICAgU2xpZGVyUmVmPXtTbGlkZXJSZWZ9XHJcbiAgICAgICAgICBjb2xvck5hbWU9e2NvbG9yTmFtZX1cclxuICAgICAgICAgIHNlbGVjdGVkRmlsdGVyPXtzZWxlY3RlZEZpbHRlcn1cclxuICAgICAgICAgIHNlbGVjdGVkVHlwZT17c2VsZWN0ZWRUeXBlfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlRmlsdGVyPXtoYW5kbGVDaGFuZ2VGaWx0ZXJ9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2VUeXBlPXtoYW5kbGVDaGFuZ2VUeXBlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==