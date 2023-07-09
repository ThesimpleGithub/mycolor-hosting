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
var ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.header(_templateObject6());
_c4 = ProductWrapper;
var CaptureBG = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject7());
_c5 = CaptureBG;
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: selectedFilter.productImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: selectedFilter.company + ' ' + selectedFilter.type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: selectedFilter.colorName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://link.coupang.com/a/".concat(selectedFilter.href),
              target: "_blank",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                children: ["\uC790\uC138\uD788\uBCF4\uAE30 ", '>']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u203B \uCFE0\uD321 \uD30C\uD2B8\uB108\uC2A4 \uD65C\uB3D9\uC744 \uD1B5\uD574 \uC77C\uC815\uC561\uC758 \uC218\uC218\uB8CC\uB97C \uC81C\uACF5\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
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
              lineNumber: 385,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 377,
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
              lineNumber: 395,
              columnNumber: 26
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineFullscreen, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 56
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return confirm('가상 메이크업을 종료하시겠습니까?') && setIsStarted(false);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_12__.RxExit, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 397,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 375,
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
        lineNumber: 405,
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

_c6 = Filter;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "UI_Wrapper");
$RefreshReg$(_c3, "BtnWrapper");
$RefreshReg$(_c4, "ProductWrapper");
$RefreshReg$(_c5, "CaptureBG");
$RefreshReg$(_c6, "Filter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0ZpbHRlci50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiVUlfV3JhcHBlciIsIkJ0bldyYXBwZXIiLCJTa2VsZXRvbiIsIlByb2R1Y3REaXYiLCJQcm9kdWN0V3JhcHBlciIsIkNhcHR1cmVCRyIsIklNRyIsIkZpbHRlciIsInNldElzU3RhcnRlZCIsInByb2R1Y3RUeXBlIiwiY29sb3JOYW1lIiwidXNlU3RhdGUiLCJpc0hpZGVkIiwic2V0SXNIaWRlZCIsInNlbGVjdGVkVHlwZSIsInNldFNlbGVjdGVkVHlwZSIsImZpbHRlckltZyIsImNvbXBhbnkiLCJ0eXBlIiwicHJvZHVjdEltZyIsInJnYiIsImhyZWYiLCJzZWxlY3RlZEZpbHRlciIsInNldFNlbGVjZXRlZEZpbHRlciIsImZpbHRlclR5cGVzIiwidXNlUmVmIiwiY29zbWV0aWNUeXBlQXJyIiwiZmlsdGVyRGF0YSIsIkNvbnRhaW5lclJlZiIsIlByb2R1Y3RSZWYiLCJTbGlkZXJSZWYiLCJmYWNlTWVzaCIsIm1pbmRhclRocmVlIiwiaXNDYXB0dXJlIiwiQ2FwdHVyZV9CR19SZWYiLCJwcmV2RmlsdGVySW1nIiwiZ2V0Q2hhbmdlZENhbnZhcyIsInRleHR1cmUiLCJoZXgiLCJjb3B5Q2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInRlbXBDYW52YXMiLCJ0ZW1wQ3R4IiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJoYW5kbGVDaGFuZ2VUeXBlIiwiY3VycmVudCIsImhhbmRsZUNoYW5nZUZpbHRlciIsInVzZUNhbGxiYWNrIiwicmVEcmF3RmlsdGVyIiwiVEhSRUUiLCJsb2FkIiwicHJvY2VzcyIsIm1hdGVyaWFsIiwibWFwIiwiaW1hZ2UiLCJjb2xvciIsInNldEhleCIsInBhcnNlSW50IiwidXNlRWZmZWN0IiwiTWluZEFSVGhyZWUiLCJjb250YWluZXIiLCJyZW5kZXJlciIsInNjZW5lIiwiY2FtZXJhIiwibGlnaHQiLCJhZGQiLCJhZGRGYWNlTWVzaCIsInRyYW5zcGFyZW50Iiwic3RhcnQiLCJjYXB0dXJlQ2FudmFzIiwiY3R4IiwidmlkZW8iLCJxdWVyeVNlbGVjdG9yIiwiZG9tRWxlbWVudCIsInRyYW5zbGF0ZSIsInNjYWxlIiwic2V0QW5pbWF0aW9uTG9vcCIsInJlbmRlciIsImNsZWFyUmVjdCIsImxpbmsiLCJkb3dubG9hZCIsIkRhdGUiLCJ0b0RhdGFVUkwiLCJjbGljayIsInJlbW92ZSIsIm9wYWNpdHkiLCJmZXRjaERhdGEiLCJheGlvcyIsInBhcmFtcyIsImZldGNoZWREYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJEYXRhcyIsImFsZXJ0Iiwic3RvcCIsImVsZW0iLCJzdHlsZSIsInNldFRpbWVvdXQiLCJjb25maXJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywwREFBSCxtQkFBZjtLQUFNRCxTO0FBa0JOLElBQU1FLFVBQVUsR0FBR0QsMERBQUgsb0JBQWhCO01BQU1DLFU7QUFNTixJQUFNQyxVQUFVLEdBQUdGLDBEQUFILG9CQUFoQjtNQUFNRSxVO0FBK0JOLElBQU1DLFFBQVEsR0FBR0gsMERBQUgsb0JBQWQ7QUE2QkEsSUFBTUksVUFBVSxHQUFHSiwwREFBSCxvQkFBaEI7QUFxREEsSUFBTUssY0FBYyxHQUFHTCw2REFBSCxvQkFBcEI7TUFBTUssYztBQVdOLElBQU1DLFNBQVMsR0FBR04sMERB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QUQsQ0FBbkQ7QUFBQSxhQURYO0FBQUEsbUNBR0UsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkYsZUFrREUsOERBQUMsa0RBQUQ7QUFDRSxrQkFBVSxFQUFFbUIsVUFBVSxDQUFDMEIsT0FEekI7QUFFRSxtQkFBVyxFQUFFN0IsV0FBVyxDQUFDNkIsT0FGM0I7QUFHRSxpQkFBUyxFQUFFdkIsU0FIYjtBQUlFLGlCQUFTLEVBQUVwQixTQUpiO0FBS0Usc0JBQWMsRUFBRVksY0FMbEI7QUFNRSxvQkFBWSxFQUFFUixZQU5oQjtBQU9FLDBCQUFrQixFQUFFd0Msa0JBUHRCO0FBUUUsd0JBQWdCLEVBQUVGO0FBUnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpRUQsQ0FwT0Q7O0dBQU03QyxNOztNQUFBQSxNO0FBc09OLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tzZWFzb25dLjJjOTNhYzYyMThjMTFjNGNhOTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNaW5kQVJUaHJlZSB9IGZyb20gJy4uLy4uL3V0aWxzL21pbmRhci1mYWNlLXRocmVlLnByb2QnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVGdWxsc2NyZWVuRXhpdCwgQWlPdXRsaW5lRnVsbHNjcmVlbiwgQWlGaWxsQ2FtZXJhIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBSeEV4aXQgfSBmcm9tICdyZWFjdC1pY29ucy9yeCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IEZpbHRlclNsaWRlciBmcm9tICcuL0ZpbHRlclNsaWRlcic7XHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hGaWx0ZXJUeXBlLFxyXG4gIGZpbHRlclR5cGVzLFxyXG4gIElGaWx0ZXIsXHJcbiAgcHJvZHVjdFR5cGVzLFxyXG4gIGNvbG9yVHlwZXMsXHJcbn0gZnJvbSAnLi4vLi4vZGF0YXMvZmlsdGVyRGF0YSc7XHJcbmltcG9ydCB7IGNvc21ldGljVHlwZUFyciwgY29zbWV0aWNUeXBlcyB9IGZyb20gJy4uLy4uL2RhdGFzL2Nvc21ldGljRGF0YSc7XHJcbmltcG9ydCB7IG1hc2tUeXBlQXJyLCBtYXNrVHlwZXMgfSBmcm9tICcuLi8uLi9kYXRhcy9tYXNrRGF0YSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBjYW52YXMge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICB2aWRlbyxcclxuICBjYW52YXMge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBVSV9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB6LWluZGV4OiAzO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDMzJTtcclxuICByaWdodDogMTBweDtcclxuYDtcclxuY29uc3QgQnRuV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjNweCAxM3B4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE4NSAxODUgMTg1KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYig2MiA2MiA2MiAvIDkwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNzIwcHgpLFxyXG4gICAgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNzIwcHgpIHtcclxuICAgIHBhZGRpbmc6IDE2cHggOXB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNrZWxldG9uID0gc3R5bGVkLmRpdmBcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIGhlaWdodDogNjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIH1cclxuICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWF4LXdpZHRoOiAyODVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3REaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDY4cHg7XHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWF4LXdpZHRoOiAyODVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM2YzY7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogMjMuN3B4O1xyXG4gICAgICBmb250LWZhbWlseTogJ1ByZXRlbmRhcmQgVmFyaWFibGUnO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgUHJvZHVjdFdyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMztcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIHBhZGRpbmc6IDhweCA1cHg7XHJcbmA7XHJcbmNvbnN0IENhcHR1cmVCRyA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuYDtcclxuY29uc3QgSU1HID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgY29sb3JOYW1lOiBjb2xvclR5cGVzO1xyXG4gIHNldElzU3RhcnRlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG4gIHByb2R1Y3RUeXBlOiBwcm9kdWN0VHlwZXM7XHJcbn1cclxuXHJcbmNvbnN0IEZpbHRlciA9ICh7IHNldElzU3RhcnRlZCwgcHJvZHVjdFR5cGUsIGNvbG9yTmFtZSB9OiBwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpc0hpZGVkLCBzZXRJc0hpZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUeXBlLCBzZXRTZWxlY3RlZFR5cGVdID0gdXNlU3RhdGU8Y29zbWV0aWNUeXBlcyB8IG1hc2tUeXBlcz4oJ+umvScpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEZpbHRlciwgc2V0U2VsZWNldGVkRmlsdGVyXSA9IHVzZVN0YXRlPElGaWx0ZXI+KHtcclxuICAgIGNvbG9yTmFtZTogJ+2BtOuemOyLnCcsXHJcbiAgICBmaWx0ZXJJbWc6ICcnLFxyXG4gICAgY29tcGFueTogJycsXHJcbiAgICB0eXBlOiAnJyxcclxuICAgIHByb2R1Y3RJbWc6ICcnLFxyXG4gICAgcmdiOiAnJyxcclxuICAgIGhyZWY6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJUeXBlcyA9IHVzZVJlZjx0eXBlb2YgY29zbWV0aWNUeXBlQXJyIHwgdHlwZW9mIG1hc2tUeXBlQXJyPihjb3NtZXRpY1R5cGVBcnIpO1xyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSB1c2VSZWY8ZmV0Y2hGaWx0ZXJUeXBlPih7fSk7XHJcbiAgY29uc3QgQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBQcm9kdWN0UmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBTbGlkZXJSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGZhY2VNZXNoID0gdXNlUmVmPFRIUkVFLk1lc2g8VEhSRUUuQnVmZmVyR2VvbWV0cnksIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPj4oKTtcclxuICBjb25zdCBtaW5kYXJUaHJlZSA9IHVzZVJlZjxNaW5kQVJUaHJlZT4oe30pO1xyXG4gIGNvbnN0IGlzQ2FwdHVyZSA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgQ2FwdHVyZV9CR19SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHByZXZGaWx0ZXJJbWcgPSB1c2VSZWY8c3RyaW5nPihzZWxlY3RlZEZpbHRlci5wcm9kdWN0SW1nKTtcclxuXHJcbiAgY29uc3QgZ2V0Q2hhbmdlZENhbnZhcyA9ICh0ZXh0dXJlOiBDYW52YXNJbWFnZVNvdXJjZSwgaGV4OiBzdHJpbmcpID0+IHtcclxuICAgIGhleCA9ICcjJyArIGhleDtcclxuICAgIGNvbnN0IGNvcHlDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvcHlDYW52YXMud2lkdGggPSA1MDA7XHJcbiAgICBjb3B5Q2FudmFzLmhlaWdodCA9IDUwMDtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjb3B5Q2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGV4dHVyZSwgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IHRlbXBDdHggPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgdGVtcENhbnZhcy53aWR0aCA9IGNvcHlDYW52YXMud2lkdGg7XHJcbiAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGNvcHlDYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgIHRlbXBDdHguZHJhd0ltYWdlKHRleHR1cmUsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0ZW1wQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtYXRvcCc7XHJcbiAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IGhleDtcclxuICAgIHRlbXBDdHguZmlsbFJlY3QoMCwgMCwgdGVtcENhbnZhcy53aWR0aCwgdGVtcENhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRlbXBDYW52YXMsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0ZW1wQ3R4LmRyYXdJbWFnZSh0ZXh0dXJlLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcbiAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IGhleDtcclxuICAgIHRlbXBDdHguZmlsbFJlY3QoMCwgMCwgdGVtcENhbnZhcy53aWR0aCwgdGVtcENhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRlbXBDYW52YXMsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gY29weUNhbnZhcztcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUeXBlID0gKHR5cGU6IGZpbHRlclR5cGVzKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFR5cGUodHlwZSk7XHJcbiAgICBzZXRTZWxlY2V0ZWRGaWx0ZXIoZmlsdGVyRGF0YS5jdXJyZW50W3R5cGVdIVswXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRmlsdGVyID0gdXNlQ2FsbGJhY2soKGZpbHRlckRhdGE6IElGaWx0ZXIpID0+IHtcclxuICAgIHNldFNlbGVjZXRlZEZpbHRlcihmaWx0ZXJEYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJlRHJhd0ZpbHRlciA9ICgpID0+IHtcclxuICAgIG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vc2VydmVySW1hZ2VzLyR7c2VsZWN0ZWRGaWx0ZXIuZmlsdGVySW1nfWAsXHJcbiAgICAgIHRleHR1cmUgPT4ge1xyXG4gICAgICAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm1hcCA9XHJcbiAgICAgICAgICBwcm9kdWN0VHlwZSA9PT0gJ21hc2snXHJcbiAgICAgICAgICAgID8gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoZ2V0Q2hhbmdlZENhbnZhcyh0ZXh0dXJlLmltYWdlLCBzZWxlY3RlZEZpbHRlci5yZ2IpKVxyXG4gICAgICAgICAgICA6IHRleHR1cmU7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RUeXBlID09PSAnY29zbWV0aWMnKSB7XHJcbiAgICAgICAgICBwcmV2RmlsdGVySW1nLmN1cnJlbnQgPSBzZWxlY3RlZEZpbHRlci5maWx0ZXJJbWc7XHJcbiAgICAgICAgICBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5jb2xvci5zZXRIZXgocGFyc2VJbnQoc2VsZWN0ZWRGaWx0ZXIucmdiLCAxNikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFmYWNlTWVzaC5jdXJyZW50KSB7XHJcbiAgICAgIG1pbmRhclRocmVlLmN1cnJlbnQgPSBuZXcgTWluZEFSVGhyZWUoe1xyXG4gICAgICAgIGNvbnRhaW5lcjogQ29udGFpbmVyUmVmLmN1cnJlbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhIH0gPSBtaW5kYXJUaHJlZS5jdXJyZW50O1xyXG4gICAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDEpO1xyXG4gICAgICBzY2VuZS5hZGQobGlnaHQpO1xyXG4gICAgICBmYWNlTWVzaC5jdXJyZW50ID0gbWluZGFyVGhyZWUuY3VycmVudC5hZGRGYWNlTWVzaCgpO1xyXG4gICAgICBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IG1pbmRhclRocmVlLmN1cnJlbnQuc3RhcnQoKTtcclxuICAgICAgICBjb25zdCBjYXB0dXJlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FwdHVyZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XHJcbiAgICAgICAgY2FwdHVyZUNhbnZhcy53aWR0aCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGg7XHJcbiAgICAgICAgY2FwdHVyZUNhbnZhcy5oZWlnaHQgPSByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodDtcclxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhcHR1cmVDYW52YXMhO1xyXG4gICAgICAgIGN0eCEudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY3R4IS5zY2FsZSgtMSwgMSk7XHJcbiAgICAgICAgY3R4IS50cmFuc2xhdGUoLXdpZHRoIC8gMiwgLWhlaWdodCAvIDIpO1xyXG5cclxuICAgICAgICByZW5kZXJlci5zZXRBbmltYXRpb25Mb29wKCgpID0+IHtcclxuICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICAgICAgICAgIGlmIChpc0NhcHR1cmUuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHZpZGVvISwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocmVuZGVyZXIuZG9tRWxlbWVudCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGxpbmsuZG93bmxvYWQgPSBuZXcgRGF0ZSgpICsgJ+2NvOyKpOuEkOy7rOufrC5wbmcnO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBjYXB0dXJlQ2FudmFzIS50b0RhdGFVUkwoKTtcclxuICAgICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgICAgICBsaW5rLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpc0NhcHR1cmUuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBzY2VuZS5hZGQoZmFjZU1lc2guY3VycmVudCEpO1xyXG4gICAgICBzdGFydCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkRmlsdGVyLmNvbXBhbnkgPT09ICdOT05FJykgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwub3BhY2l0eSA9IDA7XHJcbiAgICBlbHNlIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgIGlmICghKHByb2R1Y3RUeXBlID09PSAnY29zbWV0aWMnICYmIHByZXZGaWx0ZXJJbWcuY3VycmVudCA9PT0gc2VsZWN0ZWRGaWx0ZXIuZmlsdGVySW1nKSlcclxuICAgICAgcmVEcmF3RmlsdGVyKCk7XHJcbiAgICBlbHNlIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLmNvbG9yLnNldEhleChwYXJzZUludChzZWxlY3RlZEZpbHRlci5yZ2IsIDE2KSk7XHJcbiAgfSwgW3NlbGVjdGVkRmlsdGVyXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoIWZhY2VNZXNoLmN1cnJlbnQpIHJldHVybjtcclxuICAvLyAgIGlmIChzZWxlY3RlZEZpbHRlci5jb21wYW55ID09PSAnTk9ORScpIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAwO1xyXG4gIC8vICAgZWxzZSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5vcGFjaXR5ID0gMTtcclxuICAvLyAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLmNvbG9yLnNldEhleChwYXJzZUludChzZWxlY3RlZEZpbHRlci5yZ2IucmVwbGFjZSgnIycsICcnKSwgMTYpKTtcclxuICAvLyB9LCBbc2VsZWN0ZWRGaWx0ZXJdKTtcclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IChcclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZ2V0RmlsdGVyRGF0YScsIHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBjb2xvck5hbWU6IGNvbG9yTmFtZSxcclxuICAgICAgICAgICAgcHJvZHVjdFR5cGU6IHByb2R1Y3RUeXBlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZldGNoZWREYXRhKTtcclxuICAgICAgZmlsdGVyRGF0YS5jdXJyZW50ID0gZmV0Y2hlZERhdGEuZmlsdGVyRGF0YXM7XHJcbiAgICAgIGZpbHRlclR5cGVzLmN1cnJlbnQgPSBmZXRjaGVkRGF0YS5maWx0ZXJUeXBlcztcclxuICAgICAgc2V0U2VsZWNldGVkRmlsdGVyKGZpbHRlckRhdGEuY3VycmVudFtmaWx0ZXJUeXBlcy5jdXJyZW50WzBdXSFbMF0pO1xyXG4gICAgICBzZXRTZWxlY3RlZFR5cGUoZmV0Y2hlZERhdGEuZmlsdGVyVHlwZXNbMF0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBhbGVydCgn7JeQ65+s6rCAIOuwnOyDne2WiOyKteuLiOuLpC4g64Sk7Yq47JuM7YGs66W8IO2ZleyduO2VtOuztOyLnOqzoCDri6Tsi5wg7Iuc64+E7ZW07KO87IS47JqUJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG5cclxuICAgIC8vIHJlbmRlcmVyLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudD8uaW5zZXJ0QmVmb3JlKGNhbnZhcywgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICByZXR1cm4gKCkgPT4gbWluZGFyVGhyZWUuY3VycmVudC5zdG9wKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lciByZWY9e0NvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgPENhcHR1cmVCRyByZWY9e0NhcHR1cmVfQkdfUmVmfSAvPlxyXG4gICAgICAgIHtzZWxlY3RlZEZpbHRlci5jb21wYW55ID09PSAnTk9ORScgfHwgKFxyXG4gICAgICAgICAgPFByb2R1Y3RXcmFwcGVyIHJlZj17UHJvZHVjdFJlZn0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkRmlsdGVyLnByb2R1Y3RJbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMz57c2VsZWN0ZWRGaWx0ZXIuY29tcGFueSArICcgJyArIHNlbGVjdGVkRmlsdGVyLnR5cGV9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3NlbGVjdGVkRmlsdGVyLmNvbG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9saW5rLmNvdXBhbmcuY29tL2EvJHtzZWxlY3RlZEZpbHRlci5ocmVmfWB9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uPuyekOyEuO2eiOuztOq4sCB7Jz4nfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwPuKAuyDsv6DtjKEg7YyM7Yq464SI7IqkIO2ZnOuPmeydhCDthrXtlbQg7J287KCV7JWh7J2YIOyImOyImOujjOulvCDsoJzqs7XrsJvsnYQg7IiYIOyeiOyKteuLiOuLpC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Qcm9kdWN0V3JhcHBlcj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHsvKiA8SU1HIHNyYz17cHJvY2Vzcy5lbnYuUEFUSCArICcvaW1hZ2VzL3Rlc3RJbWcuanBnJ30gLz4gKi99XHJcbiAgICAgICAgPFVJX1dyYXBwZXI+XHJcbiAgICAgICAgICA8QnRuV3JhcHBlcj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlzQ2FwdHVyZS5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBDYXB0dXJlX0JHX1JlZi5jdXJyZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJy43JztcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGVsZW0uc3R5bGUub3BhY2l0eSA9ICcwJyksIDIwMCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBaUZpbGxDYW1lcmEgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gaXNIaWRlZCA/ICcxJyA6ICcwJztcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEZpbHRlci5jb21wYW55ICE9PSAnTk9ORScpIFByb2R1Y3RSZWYuY3VycmVudCEuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICBTbGlkZXJSZWYuY3VycmVudCEuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0hpZGVkKCFpc0hpZGVkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzSGlkZWQgPyA8QWlPdXRsaW5lRnVsbHNjcmVlbkV4aXQgLz4gOiA8QWlPdXRsaW5lRnVsbHNjcmVlbiAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25maXJtKCfqsIDsg4Eg66mU7J207YGs7JeF7J2EIOyiheujjO2VmOyLnOqyoOyKteuLiOq5jD8nKSAmJiBzZXRJc1N0YXJ0ZWQoZmFsc2UpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFJ4RXhpdCAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvQnRuV3JhcHBlcj5cclxuICAgICAgICAgIHsvKiA8VXRpbEJ1dHRvbiAvPiAqL31cclxuICAgICAgICA8L1VJX1dyYXBwZXI+XHJcbiAgICAgICAgPEZpbHRlclNsaWRlclxyXG4gICAgICAgICAgZmlsdGVyRGF0YT17ZmlsdGVyRGF0YS5jdXJyZW50fVxyXG4gICAgICAgICAgZmlsdGVyVHlwZXM9e2ZpbHRlclR5cGVzLmN1cnJlbnR9XHJcbiAgICAgICAgICBTbGlkZXJSZWY9e1NsaWRlclJlZn1cclxuICAgICAgICAgIGNvbG9yTmFtZT17Y29sb3JOYW1lfVxyXG4gICAgICAgICAgc2VsZWN0ZWRGaWx0ZXI9e3NlbGVjdGVkRmlsdGVyfVxyXG4gICAgICAgICAgc2VsZWN0ZWRUeXBlPXtzZWxlY3RlZFR5cGV9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2VGaWx0ZXI9e2hhbmRsZUNoYW5nZUZpbHRlcn1cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZVR5cGU9e2hhbmRsZUNoYW5nZVR5cGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9