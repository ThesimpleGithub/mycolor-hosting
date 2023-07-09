self["webpackHotUpdate_N_E"]("pages/index",{

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

function _templateObject7() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  z-index: 1;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.2s;\n  background-color: #ffffff;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  transition: opacity 0.5s ease;\n  background-color: rgba(0, 0, 0, 0.25);\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 5px;\n  img {\n    width: 68px;\n    height: 68px;\n    border-radius: 15px;\n    margin-right: 10px;\n  }\n  div:last-child {\n    width: 55%;\n    max-width: 285px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    h3 {\n      margin: 0;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      font-size: 16px;\n      font-weight: bold;\n    }\n    div {\n      margin: 5px 0px;\n      display: flex;\n      align-items: center;\n    }\n    span {\n      font-size: 14px;\n      font-weight: 100;\n    }\n    p {\n      font-size: 10px;\n      font-weight: 100;\n    }\n    button {\n      margin-left: 10px;\n      padding-top: 0px;\n      font-size: 10px;\n      font-weight: 900;\n      background-color: #ffc6c6;\n      color: black;\n      border-radius: 20px;\n      width: 80px;\n      height: 23.7px;\n      font-family: 'Pretendard Variable';\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  transition: opacity 0.5s ease;\n  background-color: rgba(0, 0, 0, 0.25);\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 5px;\n\n  div:first-child {\n    width: 68px;\n    height: 68px;\n    border-radius: 15px;\n    margin-right: 10px;\n    background: gray;\n  }\n  div:last-child {\n    width: 55%;\n    max-width: 285px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"]);

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
var ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.header(_templateObject5());
_c4 = ProductWrapper;
var CaptureBG = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject6());
_c5 = CaptureBG;
var IMG = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.img(_templateObject7());

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
        lineNumber: 353,
        columnNumber: 9
      }, _this), selectedFilter.company === 'NONE' || /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductWrapper, {
        ref: ProductRef,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: selectedFilter.productImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: selectedFilter.company + ' ' + selectedFilter.type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: selectedFilter.colorName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://link.coupang.com/a/".concat(selectedFilter.href),
              target: "_blank",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                children: ["\uC790\uC138\uD788\uBCF4\uAE30 ", '>']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 364,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u203B \uCFE0\uD321 \uD30C\uD2B8\uB108\uC2A4 \uD65C\uB3D9\uC744 \uD1B5\uD574 \uC77C\uC815\uC561\uC758 \uC218\uC218\uB8CC\uB97C \uC81C\uACF5\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 355,
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
              lineNumber: 382,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 374,
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
              lineNumber: 392,
              columnNumber: 26
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineFullscreen, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 56
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return confirm('가상 메이크업을 종료하시겠습니까?') && setIsStarted(false);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_12__.RxExit, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 372,
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
        lineNumber: 402,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 352,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0ZpbHRlci50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiVUlfV3JhcHBlciIsIkJ0bldyYXBwZXIiLCJTa2VsZXRvbiIsIlByb2R1Y3RXcmFwcGVyIiwiQ2FwdHVyZUJHIiwiSU1HIiwiRmlsdGVyIiwic2V0SXNTdGFydGVkIiwicHJvZHVjdFR5cGUiLCJjb2xvck5hbWUiLCJ1c2VTdGF0ZSIsImlzSGlkZWQiLCJzZXRJc0hpZGVkIiwic2VsZWN0ZWRUeXBlIiwic2V0U2VsZWN0ZWRUeXBlIiwiZmlsdGVySW1nIiwiY29tcGFueSIsInR5cGUiLCJwcm9kdWN0SW1nIiwicmdiIiwiaHJlZiIsInNlbGVjdGVkRmlsdGVyIiwic2V0U2VsZWNldGVkRmlsdGVyIiwiZmlsdGVyVHlwZXMiLCJ1c2VSZWYiLCJjb3NtZXRpY1R5cGVBcnIiLCJmaWx0ZXJEYXRhIiwiQ29udGFpbmVyUmVmIiwiUHJvZHVjdFJlZiIsIlNsaWRlclJlZiIsImZhY2VNZXNoIiwibWluZGFyVGhyZWUiLCJpc0NhcHR1cmUiLCJDYXB0dXJlX0JHX1JlZiIsInByZXZGaWx0ZXJJbWciLCJnZXRDaGFuZ2VkQ2FudmFzIiwidGV4dHVyZSIsImhleCIsImNvcHlDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidGVtcENhbnZhcyIsInRlbXBDdHgiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImhhbmRsZUNoYW5nZVR5cGUiLCJjdXJyZW50IiwiaGFuZGxlQ2hhbmdlRmlsdGVyIiwidXNlQ2FsbGJhY2siLCJyZURyYXdGaWx0ZXIiLCJUSFJFRSIsImxvYWQiLCJwcm9jZXNzIiwibWF0ZXJpYWwiLCJtYXAiLCJpbWFnZSIsImNvbG9yIiwic2V0SGV4IiwicGFyc2VJbnQiLCJ1c2VFZmZlY3QiLCJNaW5kQVJUaHJlZSIsImNvbnRhaW5lciIsInJlbmRlcmVyIiwic2NlbmUiLCJjYW1lcmEiLCJsaWdodCIsImFkZCIsImFkZEZhY2VNZXNoIiwidHJhbnNwYXJlbnQiLCJzdGFydCIsImNhcHR1cmVDYW52YXMiLCJjdHgiLCJ2aWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJkb21FbGVtZW50IiwidHJhbnNsYXRlIiwic2NhbGUiLCJzZXRBbmltYXRpb25Mb29wIiwicmVuZGVyIiwiY2xlYXJSZWN0IiwibGluayIsImRvd25sb2FkIiwiRGF0ZSIsInRvRGF0YVVSTCIsImNsaWNrIiwicmVtb3ZlIiwib3BhY2l0eSIsImZldGNoRGF0YSIsImF4aW9zIiwicGFyYW1zIiwiZmV0Y2hlZERhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZpbHRlckRhdGFzIiwiYWxlcnQiLCJzdG9wIiwiZWxlbSIsInN0eWxlIiwic2V0VGltZW91dCIsImNvbmZpcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBLElBQU1BLFNBQVMsR0FBR0MsMERBQUgsbUJBQWY7S0FBTUQsUztBQWtCTixJQUFNRSxVQUFVLEdBQUdELDBEQUFILG9CQUFoQjtNQUFNQyxVO0FBTU4sSUFBTUMsVUFBVSxHQUFHRiwwREFBSCxvQkFBaEI7TUFBTUUsVTtBQStCTixJQUFNQyxRQUFRLEdBQUdILDBEQUFILG9CQUFkO0FBNkJBLElBQU1JLGNBQWMsR0FBR0osNkRBQUgsb0JBQXBCO01BQU1JLGM7QUE2RE4sSUFBTUMsU0FBUyxHQUFHTCwwREFBSCxvQkFBZjtNQUFNSyxTO0FBV04sSUFBTUMsR0FBRyxHQUFHTiwwREFBSCxvQkFBVDs7QUFhQSxJ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QUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRixlQWtERSw4REFBQyxrREFBRDtBQUNFLGtCQUFVLEVBQUVtQixVQUFVLENBQUMwQixPQUR6QjtBQUVFLG1CQUFXLEVBQUU3QixXQUFXLENBQUM2QixPQUYzQjtBQUdFLGlCQUFTLEVBQUV2QixTQUhiO0FBSUUsaUJBQVMsRUFBRXBCLFNBSmI7QUFLRSxzQkFBYyxFQUFFWSxjQUxsQjtBQU1FLG9CQUFZLEVBQUVSLFlBTmhCO0FBT0UsMEJBQWtCLEVBQUV3QyxrQkFQdEI7QUFRRSx3QkFBZ0IsRUFBRUY7QUFScEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlFRCxDQXBPRDs7R0FBTTdDLE07O01BQUFBLE07QUFzT04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGNhNmEwNWExMWJhZjRjNjhjYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1pbmRBUlRocmVlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWluZGFyLWZhY2UtdGhyZWUucHJvZCc7XHJcbmltcG9ydCB7IEFpT3V0bGluZUZ1bGxzY3JlZW5FeGl0LCBBaU91dGxpbmVGdWxsc2NyZWVuLCBBaUZpbGxDYW1lcmEgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IFJ4RXhpdCB9IGZyb20gJ3JlYWN0LWljb25zL3J4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgRmlsdGVyU2xpZGVyIGZyb20gJy4vRmlsdGVyU2xpZGVyJztcclxuaW1wb3J0IHtcclxuICBmZXRjaEZpbHRlclR5cGUsXHJcbiAgZmlsdGVyVHlwZXMsXHJcbiAgSUZpbHRlcixcclxuICBwcm9kdWN0VHlwZXMsXHJcbiAgY29sb3JUeXBlcyxcclxufSBmcm9tICcuLi8uLi9kYXRhcy9maWx0ZXJEYXRhJztcclxuaW1wb3J0IHsgY29zbWV0aWNUeXBlQXJyLCBjb3NtZXRpY1R5cGVzIH0gZnJvbSAnLi4vLi4vZGF0YXMvY29zbWV0aWNEYXRhJztcclxuaW1wb3J0IHsgbWFza1R5cGVBcnIsIG1hc2tUeXBlcyB9IGZyb20gJy4uLy4uL2RhdGFzL21hc2tEYXRhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAzO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGNhbnZhcyB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIHZpZGVvLFxyXG4gIGNhbnZhcyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFVJX1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHotaW5kZXg6IDM7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzMlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5jb25zdCBCdG5XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyM3B4IDEzcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg1IDE4NSAxODUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICA6YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDYyIDYyIDYyIC8gOTAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA3MjBweCksXHJcbiAgICAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xyXG4gICAgcGFkZGluZzogMTZweCA5cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2tlbGV0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCA1cHg7XHJcblxyXG4gIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIGhlaWdodDogNjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIH1cclxuICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWF4LXdpZHRoOiAyODVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuY29uc3QgUHJvZHVjdFdyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCA1cHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIG1heC13aWR0aDogMjg1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNmM2O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDIzLjdweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQcmV0ZW5kYXJkIFZhcmlhYmxlJztcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IENhcHR1cmVCRyA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuYDtcclxuY29uc3QgSU1HID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgY29sb3JOYW1lOiBjb2xvclR5cGVzO1xyXG4gIHNldElzU3RhcnRlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG4gIHByb2R1Y3RUeXBlOiBwcm9kdWN0VHlwZXM7XHJcbn1cclxuXHJcbmNvbnN0IEZpbHRlciA9ICh7IHNldElzU3RhcnRlZCwgcHJvZHVjdFR5cGUsIGNvbG9yTmFtZSB9OiBwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpc0hpZGVkLCBzZXRJc0hpZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUeXBlLCBzZXRTZWxlY3RlZFR5cGVdID0gdXNlU3RhdGU8Y29zbWV0aWNUeXBlcyB8IG1hc2tUeXBlcz4oJ+umvScpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEZpbHRlciwgc2V0U2VsZWNldGVkRmlsdGVyXSA9IHVzZVN0YXRlPElGaWx0ZXI+KHtcclxuICAgIGNvbG9yTmFtZTogJ+2BtOuemOyLnCcsXHJcbiAgICBmaWx0ZXJJbWc6ICcnLFxyXG4gICAgY29tcGFueTogJycsXHJcbiAgICB0eXBlOiAnJyxcclxuICAgIHByb2R1Y3RJbWc6ICcnLFxyXG4gICAgcmdiOiAnJyxcclxuICAgIGhyZWY6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmaWx0ZXJUeXBlcyA9IHVzZVJlZjx0eXBlb2YgY29zbWV0aWNUeXBlQXJyIHwgdHlwZW9mIG1hc2tUeXBlQXJyPihjb3NtZXRpY1R5cGVBcnIpO1xyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSB1c2VSZWY8ZmV0Y2hGaWx0ZXJUeXBlPih7fSk7XHJcbiAgY29uc3QgQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBQcm9kdWN0UmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBTbGlkZXJSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGZhY2VNZXNoID0gdXNlUmVmPFRIUkVFLk1lc2g8VEhSRUUuQnVmZmVyR2VvbWV0cnksIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPj4oKTtcclxuICBjb25zdCBtaW5kYXJUaHJlZSA9IHVzZVJlZjxNaW5kQVJUaHJlZT4oe30pO1xyXG4gIGNvbnN0IGlzQ2FwdHVyZSA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgQ2FwdHVyZV9CR19SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHByZXZGaWx0ZXJJbWcgPSB1c2VSZWY8c3RyaW5nPihzZWxlY3RlZEZpbHRlci5wcm9kdWN0SW1nKTtcclxuXHJcbiAgY29uc3QgZ2V0Q2hhbmdlZENhbnZhcyA9ICh0ZXh0dXJlOiBDYW52YXNJbWFnZVNvdXJjZSwgaGV4OiBzdHJpbmcpID0+IHtcclxuICAgIGhleCA9ICcjJyArIGhleDtcclxuICAgIGNvbnN0IGNvcHlDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvcHlDYW52YXMud2lkdGggPSA1MDA7XHJcbiAgICBjb3B5Q2FudmFzLmhlaWdodCA9IDUwMDtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjb3B5Q2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGV4dHVyZSwgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IHRlbXBDdHggPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgdGVtcENhbnZhcy53aWR0aCA9IGNvcHlDYW52YXMud2lkdGg7XHJcbiAgICB0ZW1wQ2FudmFzLmhlaWdodCA9IGNvcHlDYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgIHRlbXBDdHguZHJhd0ltYWdlKHRleHR1cmUsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0ZW1wQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtYXRvcCc7XHJcbiAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IGhleDtcclxuICAgIHRlbXBDdHguZmlsbFJlY3QoMCwgMCwgdGVtcENhbnZhcy53aWR0aCwgdGVtcENhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRlbXBDYW52YXMsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0ZW1wQ3R4LmRyYXdJbWFnZSh0ZXh0dXJlLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcbiAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IGhleDtcclxuICAgIHRlbXBDdHguZmlsbFJlY3QoMCwgMCwgdGVtcENhbnZhcy53aWR0aCwgdGVtcENhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRlbXBDYW52YXMsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gY29weUNhbnZhcztcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUeXBlID0gKHR5cGU6IGZpbHRlclR5cGVzKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFR5cGUodHlwZSk7XHJcbiAgICBzZXRTZWxlY2V0ZWRGaWx0ZXIoZmlsdGVyRGF0YS5jdXJyZW50W3R5cGVdIVswXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRmlsdGVyID0gdXNlQ2FsbGJhY2soKGZpbHRlckRhdGE6IElGaWx0ZXIpID0+IHtcclxuICAgIHNldFNlbGVjZXRlZEZpbHRlcihmaWx0ZXJEYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJlRHJhd0ZpbHRlciA9ICgpID0+IHtcclxuICAgIG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vc2VydmVySW1hZ2VzLyR7c2VsZWN0ZWRGaWx0ZXIuZmlsdGVySW1nfWAsXHJcbiAgICAgIHRleHR1cmUgPT4ge1xyXG4gICAgICAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm1hcCA9XHJcbiAgICAgICAgICBwcm9kdWN0VHlwZSA9PT0gJ21hc2snXHJcbiAgICAgICAgICAgID8gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoZ2V0Q2hhbmdlZENhbnZhcyh0ZXh0dXJlLmltYWdlLCBzZWxlY3RlZEZpbHRlci5yZ2IpKVxyXG4gICAgICAgICAgICA6IHRleHR1cmU7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RUeXBlID09PSAnY29zbWV0aWMnKSB7XHJcbiAgICAgICAgICBwcmV2RmlsdGVySW1nLmN1cnJlbnQgPSBzZWxlY3RlZEZpbHRlci5maWx0ZXJJbWc7XHJcbiAgICAgICAgICBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5jb2xvci5zZXRIZXgocGFyc2VJbnQoc2VsZWN0ZWRGaWx0ZXIucmdiLCAxNikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFmYWNlTWVzaC5jdXJyZW50KSB7XHJcbiAgICAgIG1pbmRhclRocmVlLmN1cnJlbnQgPSBuZXcgTWluZEFSVGhyZWUoe1xyXG4gICAgICAgIGNvbnRhaW5lcjogQ29udGFpbmVyUmVmLmN1cnJlbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhIH0gPSBtaW5kYXJUaHJlZS5jdXJyZW50O1xyXG4gICAgICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDEpO1xyXG4gICAgICBzY2VuZS5hZGQobGlnaHQpO1xyXG4gICAgICBmYWNlTWVzaC5jdXJyZW50ID0gbWluZGFyVGhyZWUuY3VycmVudC5hZGRGYWNlTWVzaCgpO1xyXG4gICAgICBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IG1pbmRhclRocmVlLmN1cnJlbnQuc3RhcnQoKTtcclxuICAgICAgICBjb25zdCBjYXB0dXJlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FwdHVyZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XHJcbiAgICAgICAgY2FwdHVyZUNhbnZhcy53aWR0aCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGg7XHJcbiAgICAgICAgY2FwdHVyZUNhbnZhcy5oZWlnaHQgPSByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodDtcclxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhcHR1cmVDYW52YXMhO1xyXG4gICAgICAgIGN0eCEudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY3R4IS5zY2FsZSgtMSwgMSk7XHJcbiAgICAgICAgY3R4IS50cmFuc2xhdGUoLXdpZHRoIC8gMiwgLWhlaWdodCAvIDIpO1xyXG5cclxuICAgICAgICByZW5kZXJlci5zZXRBbmltYXRpb25Mb29wKCgpID0+IHtcclxuICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICAgICAgICAgIGlmIChpc0NhcHR1cmUuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHZpZGVvISwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocmVuZGVyZXIuZG9tRWxlbWVudCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGxpbmsuZG93bmxvYWQgPSBuZXcgRGF0ZSgpICsgJ+2NvOyKpOuEkOy7rOufrC5wbmcnO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBjYXB0dXJlQ2FudmFzIS50b0RhdGFVUkwoKTtcclxuICAgICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgICAgICBsaW5rLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpc0NhcHR1cmUuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBzY2VuZS5hZGQoZmFjZU1lc2guY3VycmVudCEpO1xyXG4gICAgICBzdGFydCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkRmlsdGVyLmNvbXBhbnkgPT09ICdOT05FJykgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwub3BhY2l0eSA9IDA7XHJcbiAgICBlbHNlIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgIGlmICghKHByb2R1Y3RUeXBlID09PSAnY29zbWV0aWMnICYmIHByZXZGaWx0ZXJJbWcuY3VycmVudCA9PT0gc2VsZWN0ZWRGaWx0ZXIuZmlsdGVySW1nKSlcclxuICAgICAgcmVEcmF3RmlsdGVyKCk7XHJcbiAgICBlbHNlIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLmNvbG9yLnNldEhleChwYXJzZUludChzZWxlY3RlZEZpbHRlci5yZ2IsIDE2KSk7XHJcbiAgfSwgW3NlbGVjdGVkRmlsdGVyXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoIWZhY2VNZXNoLmN1cnJlbnQpIHJldHVybjtcclxuICAvLyAgIGlmIChzZWxlY3RlZEZpbHRlci5jb21wYW55ID09PSAnTk9ORScpIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAwO1xyXG4gIC8vICAgZWxzZSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5vcGFjaXR5ID0gMTtcclxuICAvLyAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLmNvbG9yLnNldEhleChwYXJzZUludChzZWxlY3RlZEZpbHRlci5yZ2IucmVwbGFjZSgnIycsICcnKSwgMTYpKTtcclxuICAvLyB9LCBbc2VsZWN0ZWRGaWx0ZXJdKTtcclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IChcclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZ2V0RmlsdGVyRGF0YScsIHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBjb2xvck5hbWU6IGNvbG9yTmFtZSxcclxuICAgICAgICAgICAgcHJvZHVjdFR5cGU6IHByb2R1Y3RUeXBlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZldGNoZWREYXRhKTtcclxuICAgICAgZmlsdGVyRGF0YS5jdXJyZW50ID0gZmV0Y2hlZERhdGEuZmlsdGVyRGF0YXM7XHJcbiAgICAgIGZpbHRlclR5cGVzLmN1cnJlbnQgPSBmZXRjaGVkRGF0YS5maWx0ZXJUeXBlcztcclxuICAgICAgc2V0U2VsZWNldGVkRmlsdGVyKGZpbHRlckRhdGEuY3VycmVudFtmaWx0ZXJUeXBlcy5jdXJyZW50WzBdXSFbMF0pO1xyXG4gICAgICBzZXRTZWxlY3RlZFR5cGUoZmV0Y2hlZERhdGEuZmlsdGVyVHlwZXNbMF0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBhbGVydCgn7JeQ65+s6rCAIOuwnOyDne2WiOyKteuLiOuLpC4g64Sk7Yq47JuM7YGs66W8IO2ZleyduO2VtOuztOyLnOqzoCDri6Tsi5wg7Iuc64+E7ZW07KO87IS47JqUJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG5cclxuICAgIC8vIHJlbmRlcmVyLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudD8uaW5zZXJ0QmVmb3JlKGNhbnZhcywgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICByZXR1cm4gKCkgPT4gbWluZGFyVGhyZWUuY3VycmVudC5zdG9wKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lciByZWY9e0NvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgPENhcHR1cmVCRyByZWY9e0NhcHR1cmVfQkdfUmVmfSAvPlxyXG4gICAgICAgIHtzZWxlY3RlZEZpbHRlci5jb21wYW55ID09PSAnTk9ORScgfHwgKFxyXG4gICAgICAgICAgPFByb2R1Y3RXcmFwcGVyIHJlZj17UHJvZHVjdFJlZn0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkRmlsdGVyLnByb2R1Y3RJbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMz57c2VsZWN0ZWRGaWx0ZXIuY29tcGFueSArICcgJyArIHNlbGVjdGVkRmlsdGVyLnR5cGV9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3NlbGVjdGVkRmlsdGVyLmNvbG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9saW5rLmNvdXBhbmcuY29tL2EvJHtzZWxlY3RlZEZpbHRlci5ocmVmfWB9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uPuyekOyEuO2eiOuztOq4sCB7Jz4nfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwPuKAuyDsv6DtjKEg7YyM7Yq464SI7IqkIO2ZnOuPmeydhCDthrXtlbQg7J287KCV7JWh7J2YIOyImOyImOujjOulvCDsoJzqs7XrsJvsnYQg7IiYIOyeiOyKteuLiOuLpC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Qcm9kdWN0V3JhcHBlcj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHsvKiA8SU1HIHNyYz17cHJvY2Vzcy5lbnYuUEFUSCArICcvaW1hZ2VzL3Rlc3RJbWcuanBnJ30gLz4gKi99XHJcbiAgICAgICAgPFVJX1dyYXBwZXI+XHJcbiAgICAgICAgICA8QnRuV3JhcHBlcj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlzQ2FwdHVyZS5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBDYXB0dXJlX0JHX1JlZi5jdXJyZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJy43JztcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGVsZW0uc3R5bGUub3BhY2l0eSA9ICcwJyksIDIwMCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBaUZpbGxDYW1lcmEgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gaXNIaWRlZCA/ICcxJyA6ICcwJztcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEZpbHRlci5jb21wYW55ICE9PSAnTk9ORScpIFByb2R1Y3RSZWYuY3VycmVudCEuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICBTbGlkZXJSZWYuY3VycmVudCEuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0hpZGVkKCFpc0hpZGVkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzSGlkZWQgPyA8QWlPdXRsaW5lRnVsbHNjcmVlbkV4aXQgLz4gOiA8QWlPdXRsaW5lRnVsbHNjcmVlbiAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25maXJtKCfqsIDsg4Eg66mU7J207YGs7JeF7J2EIOyiheujjO2VmOyLnOqyoOyKteuLiOq5jD8nKSAmJiBzZXRJc1N0YXJ0ZWQoZmFsc2UpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFJ4RXhpdCAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvQnRuV3JhcHBlcj5cclxuICAgICAgICAgIHsvKiA8VXRpbEJ1dHRvbiAvPiAqL31cclxuICAgICAgICA8L1VJX1dyYXBwZXI+XHJcbiAgICAgICAgPEZpbHRlclNsaWRlclxyXG4gICAgICAgICAgZmlsdGVyRGF0YT17ZmlsdGVyRGF0YS5jdXJyZW50fVxyXG4gICAgICAgICAgZmlsdGVyVHlwZXM9e2ZpbHRlclR5cGVzLmN1cnJlbnR9XHJcbiAgICAgICAgICBTbGlkZXJSZWY9e1NsaWRlclJlZn1cclxuICAgICAgICAgIGNvbG9yTmFtZT17Y29sb3JOYW1lfVxyXG4gICAgICAgICAgc2VsZWN0ZWRGaWx0ZXI9e3NlbGVjdGVkRmlsdGVyfVxyXG4gICAgICAgICAgc2VsZWN0ZWRUeXBlPXtzZWxlY3RlZFR5cGV9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2VGaWx0ZXI9e2hhbmRsZUNoYW5nZUZpbHRlcn1cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZVR5cGU9e2hhbmRsZUNoYW5nZVR5cGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9