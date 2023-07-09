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
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  width: 55%;\n  max-width: 285px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

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
        lineNumber: 332,
        columnNumber: 9
      }, _this), selectedFilter.company === 'NONE' || /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductWrapper, {
        ref: ProductRef,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: selectedFilter.productImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: selectedFilter.company + ' ' + selectedFilter.type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: selectedFilter.colorName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://link.coupang.com/a/".concat(selectedFilter.href),
              target: "_blank",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                children: ["\uC790\uC138\uD788\uBCF4\uAE30 ", '>']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u203B \uCFE0\uD321 \uD30C\uD2B8\uB108\uC2A4 \uD65C\uB3D9\uC744 \uD1B5\uD574 \uC77C\uC815\uC561\uC758 \uC218\uC218\uB8CC\uB97C \uC81C\uACF5\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 334,
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
              lineNumber: 361,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
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
              lineNumber: 371,
              columnNumber: 26
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineFullscreen, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 56
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return confirm('가상 메이크업을 종료하시겠습니까?') && setIsStarted(false);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_12__.RxExit, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 351,
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
        lineNumber: 381,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 331,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0ZpbHRlci50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiVUlfV3JhcHBlciIsIkJ0bldyYXBwZXIiLCJTa2VsZXRvbiIsIlByb2R1Y3RXcmFwcGVyIiwiQ2FwdHVyZUJHIiwiSU1HIiwiRmlsdGVyIiwic2V0SXNTdGFydGVkIiwicHJvZHVjdFR5cGUiLCJjb2xvck5hbWUiLCJ1c2VTdGF0ZSIsImlzSGlkZWQiLCJzZXRJc0hpZGVkIiwic2VsZWN0ZWRUeXBlIiwic2V0U2VsZWN0ZWRUeXBlIiwiZmlsdGVySW1nIiwiY29tcGFueSIsInR5cGUiLCJwcm9kdWN0SW1nIiwicmdiIiwiaHJlZiIsInNlbGVjdGVkRmlsdGVyIiwic2V0U2VsZWNldGVkRmlsdGVyIiwiZmlsdGVyVHlwZXMiLCJ1c2VSZWYiLCJjb3NtZXRpY1R5cGVBcnIiLCJmaWx0ZXJEYXRhIiwiQ29udGFpbmVyUmVmIiwiUHJvZHVjdFJlZiIsIlNsaWRlclJlZiIsImZhY2VNZXNoIiwibWluZGFyVGhyZWUiLCJpc0NhcHR1cmUiLCJDYXB0dXJlX0JHX1JlZiIsInByZXZGaWx0ZXJJbWciLCJnZXRDaGFuZ2VkQ2FudmFzIiwidGV4dHVyZSIsImhleCIsImNvcHlDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidGVtcENhbnZhcyIsInRlbXBDdHgiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImhhbmRsZUNoYW5nZVR5cGUiLCJjdXJyZW50IiwiaGFuZGxlQ2hhbmdlRmlsdGVyIiwidXNlQ2FsbGJhY2siLCJyZURyYXdGaWx0ZXIiLCJUSFJFRSIsImxvYWQiLCJwcm9jZXNzIiwibWF0ZXJpYWwiLCJtYXAiLCJpbWFnZSIsImNvbG9yIiwic2V0SGV4IiwicGFyc2VJbnQiLCJ1c2VFZmZlY3QiLCJNaW5kQVJUaHJlZSIsImNvbnRhaW5lciIsInJlbmRlcmVyIiwic2NlbmUiLCJjYW1lcmEiLCJsaWdodCIsImFkZCIsImFkZEZhY2VNZXNoIiwidHJhbnNwYXJlbnQiLCJzdGFydCIsImNhcHR1cmVDYW52YXMiLCJjdHgiLCJ2aWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJkb21FbGVtZW50IiwidHJhbnNsYXRlIiwic2NhbGUiLCJzZXRBbmltYXRpb25Mb29wIiwicmVuZGVyIiwiY2xlYXJSZWN0IiwibGluayIsImRvd25sb2FkIiwiRGF0ZSIsInRvRGF0YVVSTCIsImNsaWNrIiwicmVtb3ZlIiwib3BhY2l0eSIsImZldGNoRGF0YSIsImF4aW9zIiwicGFyYW1zIiwiZmV0Y2hlZERhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZpbHRlckRhdGFzIiwiYWxlcnQiLCJzdG9wIiwiZWxlbSIsInN0eWxlIiwic2V0VGltZW91dCIsImNvbmZpcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBLElBQU1BLFNBQVMsR0FBR0MsMERBQUgsbUJBQWY7S0FBTUQsUztBQWtCTixJQUFNRSxVQUFVLEdBQUdELDBEQUFILG9CQUFoQjtNQUFNQyxVO0FBTU4sSUFBTUMsVUFBVSxHQUFHRiwwREFBSCxvQkFBaEI7TUFBTUUsVTtBQStCTixJQUFNQyxRQUFRLEdBQUdILDBEQUFILG9CQUFkO0FBUUEsSUFBTUksY0FBYyxHQUFHSiw2REFBSCxvQkFBcEI7TUFBTUksYztBQTZETixJQUFNQyxTQUFTLEdBQUdMLDBEQUFILG9CQUFmO01BQU1LLFM7QUFXTixJQUFNQyxHQUFHLEdBQUdOLDBEQUFILG9CQUFUOztBQWFBLElB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QUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGLGVBa0RFLDhEQUFDLGtEQUFEO0FBQ0Usa0JBQVUsRUFBRW1CLFVBQVUsQ0FBQzBCLE9BRHpCO0FBRUUsbUJBQVcsRUFBRTdCLFdBQVcsQ0FBQzZCLE9BRjNCO0FBR0UsaUJBQVMsRUFBRXZCLFNBSGI7QUFJRSxpQkFBUyxFQUFFcEIsU0FKYjtBQUtFLHNCQUFjLEVBQUVZLGNBTGxCO0FBTUUsb0JBQVksRUFBRVIsWUFOaEI7QUFPRSwwQkFBa0IsRUFBRXdDLGtCQVB0QjtBQVFFLHdCQUFnQixFQUFFRjtBQVJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUVELENBcE9EOztHQUFNN0MsTTs7TUFBQUEsTTtBQXNPTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42M2U5ZTE5N2MwMTEyMGQ2ZWMzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWluZEFSVGhyZWUgfSBmcm9tICcuLi8uLi91dGlscy9taW5kYXItZmFjZS10aHJlZS5wcm9kJztcclxuaW1wb3J0IHsgQWlPdXRsaW5lRnVsbHNjcmVlbkV4aXQsIEFpT3V0bGluZUZ1bGxzY3JlZW4sIEFpRmlsbENhbWVyYSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgUnhFeGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvcngnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCBGaWx0ZXJTbGlkZXIgZnJvbSAnLi9GaWx0ZXJTbGlkZXInO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoRmlsdGVyVHlwZSxcclxuICBmaWx0ZXJUeXBlcyxcclxuICBJRmlsdGVyLFxyXG4gIHByb2R1Y3RUeXBlcyxcclxuICBjb2xvclR5cGVzLFxyXG59IGZyb20gJy4uLy4uL2RhdGFzL2ZpbHRlckRhdGEnO1xyXG5pbXBvcnQgeyBjb3NtZXRpY1R5cGVBcnIsIGNvc21ldGljVHlwZXMgfSBmcm9tICcuLi8uLi9kYXRhcy9jb3NtZXRpY0RhdGEnO1xyXG5pbXBvcnQgeyBtYXNrVHlwZUFyciwgbWFza1R5cGVzIH0gZnJvbSAnLi4vLi4vZGF0YXMvbWFza0RhdGEnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY2FudmFzIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgdmlkZW8sXHJcbiAgY2FudmFzIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIH1cclxuYDtcclxuY29uc3QgVUlfV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgei1pbmRleDogMztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzMyU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IEJ0bldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDIzcHggMTNweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODUgMTg1IDE4NSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIDphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoNjIgNjIgNjIgLyA5MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSxcclxuICAgIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDcyMHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDlweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTa2VsZXRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDU1JTtcclxuICBtYXgtd2lkdGg6IDI4NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBQcm9kdWN0V3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4IDVweDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDY4cHg7XHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWF4LXdpZHRoOiAyODVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM2YzY7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogMjMuN3B4O1xyXG4gICAgICBmb250LWZhbWlseTogJ1ByZXRlbmRhcmQgVmFyaWFibGUnO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQ2FwdHVyZUJHID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5gO1xyXG5jb25zdCBJTUcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICBjb2xvck5hbWU6IGNvbG9yVHlwZXM7XHJcbiAgc2V0SXNTdGFydGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcbiAgcHJvZHVjdFR5cGU6IHByb2R1Y3RUeXBlcztcclxufVxyXG5cclxuY29uc3QgRmlsdGVyID0gKHsgc2V0SXNTdGFydGVkLCBwcm9kdWN0VHlwZSwgY29sb3JOYW1lIH06IHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzSGlkZWQsIHNldElzSGlkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFR5cGUsIHNldFNlbGVjdGVkVHlwZV0gPSB1c2VTdGF0ZTxjb3NtZXRpY1R5cGVzIHwgbWFza1R5cGVzPign66a9Jyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRmlsdGVyLCBzZXRTZWxlY2V0ZWRGaWx0ZXJdID0gdXNlU3RhdGU8SUZpbHRlcj4oe1xyXG4gICAgY29sb3JOYW1lOiAn7YG0656Y7IucJyxcclxuICAgIGZpbHRlckltZzogJycsXHJcbiAgICBjb21wYW55OiAnJyxcclxuICAgIHR5cGU6ICcnLFxyXG4gICAgcHJvZHVjdEltZzogJycsXHJcbiAgICByZ2I6ICcnLFxyXG4gICAgaHJlZjogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZpbHRlclR5cGVzID0gdXNlUmVmPHR5cGVvZiBjb3NtZXRpY1R5cGVBcnIgfCB0eXBlb2YgbWFza1R5cGVBcnI+KGNvc21ldGljVHlwZUFycik7XHJcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHVzZVJlZjxmZXRjaEZpbHRlclR5cGU+KHt9KTtcclxuICBjb25zdCBDb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFByb2R1Y3RSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFNsaWRlclJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgZmFjZU1lc2ggPSB1c2VSZWY8VEhSRUUuTWVzaDxUSFJFRS5CdWZmZXJHZW9tZXRyeSwgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+PigpO1xyXG4gIGNvbnN0IG1pbmRhclRocmVlID0gdXNlUmVmPE1pbmRBUlRocmVlPih7fSk7XHJcbiAgY29uc3QgaXNDYXB0dXJlID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBDYXB0dXJlX0JHX1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgcHJldkZpbHRlckltZyA9IHVzZVJlZjxzdHJpbmc+KHNlbGVjdGVkRmlsdGVyLnByb2R1Y3RJbWcpO1xyXG5cclxuICBjb25zdCBnZXRDaGFuZ2VkQ2FudmFzID0gKHRleHR1cmU6IENhbnZhc0ltYWdlU291cmNlLCBoZXg6IHN0cmluZykgPT4ge1xyXG4gICAgaGV4ID0gJyMnICsgaGV4O1xyXG4gICAgY29uc3QgY29weUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29weUNhbnZhcy53aWR0aCA9IDUwMDtcclxuICAgIGNvcHlDYW52YXMuaGVpZ2h0ID0gNTAwO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNvcHlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZXh0dXJlLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgY29uc3QgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgdGVtcEN0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICB0ZW1wQ2FudmFzLndpZHRoID0gY29weUNhbnZhcy53aWR0aDtcclxuICAgIHRlbXBDYW52YXMuaGVpZ2h0ID0gY29weUNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgdGVtcEN0eC5kcmF3SW1hZ2UodGV4dHVyZSwgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHRlbXBDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1hdG9wJztcclxuICAgIHRlbXBDdHguZmlsbFN0eWxlID0gaGV4O1xyXG4gICAgdGVtcEN0eC5maWxsUmVjdCgwLCAwLCB0ZW1wQ2FudmFzLndpZHRoLCB0ZW1wQ2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGVtcENhbnZhcywgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHRlbXBDdHguZHJhd0ltYWdlKHRleHR1cmUsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuICAgIHRlbXBDdHguZmlsbFN0eWxlID0gaGV4O1xyXG4gICAgdGVtcEN0eC5maWxsUmVjdCgwLCAwLCB0ZW1wQ2FudmFzLndpZHRoLCB0ZW1wQ2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGVtcENhbnZhcywgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiBjb3B5Q2FudmFzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVR5cGUgPSAodHlwZTogZmlsdGVyVHlwZXMpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVHlwZSh0eXBlKTtcclxuICAgIHNldFNlbGVjZXRlZEZpbHRlcihmaWx0ZXJEYXRhLmN1cnJlbnRbdHlwZV0hWzBdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VGaWx0ZXIgPSB1c2VDYWxsYmFjaygoZmlsdGVyRGF0YTogSUZpbHRlcikgPT4ge1xyXG4gICAgc2V0U2VsZWNldGVkRmlsdGVyKGZpbHRlckRhdGEpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcmVEcmF3RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9zZXJ2ZXJJbWFnZXMvJHtzZWxlY3RlZEZpbHRlci5maWx0ZXJJbWd9YCxcclxuICAgICAgdGV4dHVyZSA9PiB7XHJcbiAgICAgICAgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwubWFwID1cclxuICAgICAgICAgIHByb2R1Y3RUeXBlID09PSAnbWFzaydcclxuICAgICAgICAgICAgPyBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShnZXRDaGFuZ2VkQ2FudmFzKHRleHR1cmUuaW1hZ2UsIHNlbGVjdGVkRmlsdGVyLnJnYikpXHJcbiAgICAgICAgICAgIDogdGV4dHVyZTtcclxuICAgICAgICBpZiAocHJvZHVjdFR5cGUgPT09ICdjb3NtZXRpYycpIHtcclxuICAgICAgICAgIHByZXZGaWx0ZXJJbWcuY3VycmVudCA9IHNlbGVjdGVkRmlsdGVyLmZpbHRlckltZztcclxuICAgICAgICAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLmNvbG9yLnNldEhleChwYXJzZUludChzZWxlY3RlZEZpbHRlci5yZ2IsIDE2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWZhY2VNZXNoLmN1cnJlbnQpIHtcclxuICAgICAgbWluZGFyVGhyZWUuY3VycmVudCA9IG5ldyBNaW5kQVJUaHJlZSh7XHJcbiAgICAgICAgY29udGFpbmVyOiBDb250YWluZXJSZWYuY3VycmVudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgcmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEgfSA9IG1pbmRhclRocmVlLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMSk7XHJcbiAgICAgIHNjZW5lLmFkZChsaWdodCk7XHJcbiAgICAgIGZhY2VNZXNoLmN1cnJlbnQgPSBtaW5kYXJUaHJlZS5jdXJyZW50LmFkZEZhY2VNZXNoKCk7XHJcbiAgICAgIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgbWluZGFyVGhyZWUuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIGNvbnN0IGNhcHR1cmVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjb25zdCBjdHggPSBjYXB0dXJlQ2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcclxuICAgICAgICBjYXB0dXJlQ2FudmFzLndpZHRoID0gcmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aDtcclxuICAgICAgICBjYXB0dXJlQ2FudmFzLmhlaWdodCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FwdHVyZUNhbnZhcyE7XHJcbiAgICAgICAgY3R4IS50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICBjdHghLnNjYWxlKC0xLCAxKTtcclxuICAgICAgICBjdHghLnRyYW5zbGF0ZSgtd2lkdGggLyAyLCAtaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnNldEFuaW1hdGlvbkxvb3AoKCkgPT4ge1xyXG4gICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgICAgICAgaWYgKGlzQ2FwdHVyZS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodmlkZW8hLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShyZW5kZXJlci5kb21FbGVtZW50LCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgbGluay5kb3dubG9hZCA9IG5ldyBEYXRlKCkgKyAn7Y287Iqk64SQ7Lus65+sLnBuZyc7XHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGNhcHR1cmVDYW52YXMhLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGxpbmsucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlzQ2FwdHVyZS5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHNjZW5lLmFkZChmYWNlTWVzaC5jdXJyZW50ISk7XHJcbiAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRGaWx0ZXIuY29tcGFueSA9PT0gJ05PTkUnKSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5vcGFjaXR5ID0gMDtcclxuICAgIGVsc2UgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwub3BhY2l0eSA9IDE7XHJcblxyXG4gICAgaWYgKCEocHJvZHVjdFR5cGUgPT09ICdjb3NtZXRpYycgJiYgcHJldkZpbHRlckltZy5jdXJyZW50ID09PSBzZWxlY3RlZEZpbHRlci5maWx0ZXJJbWcpKVxyXG4gICAgICByZURyYXdGaWx0ZXIoKTtcclxuICAgIGVsc2UgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KHBhcnNlSW50KHNlbGVjdGVkRmlsdGVyLnJnYiwgMTYpKTtcclxuICB9LCBbc2VsZWN0ZWRGaWx0ZXJdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmICghZmFjZU1lc2guY3VycmVudCkgcmV0dXJuO1xyXG4gIC8vICAgaWYgKHNlbGVjdGVkRmlsdGVyLmNvbXBhbnkgPT09ICdOT05FJykgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwub3BhY2l0eSA9IDA7XHJcbiAgLy8gICBlbHNlIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAxO1xyXG4gIC8vICAgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KHBhcnNlSW50KHNlbGVjdGVkRmlsdGVyLnJnYi5yZXBsYWNlKCcjJywgJycpLCAxNikpO1xyXG4gIC8vIH0sIFtzZWxlY3RlZEZpbHRlcl0pO1xyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWREYXRhID0gKFxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRGaWx0ZXJEYXRhJywge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGNvbG9yTmFtZTogY29sb3JOYW1lLFxyXG4gICAgICAgICAgICBwcm9kdWN0VHlwZTogcHJvZHVjdFR5cGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICkuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZmV0Y2hlZERhdGEpO1xyXG4gICAgICBmaWx0ZXJEYXRhLmN1cnJlbnQgPSBmZXRjaGVkRGF0YS5maWx0ZXJEYXRhcztcclxuICAgICAgZmlsdGVyVHlwZXMuY3VycmVudCA9IGZldGNoZWREYXRhLmZpbHRlclR5cGVzO1xyXG4gICAgICBzZXRTZWxlY2V0ZWRGaWx0ZXIoZmlsdGVyRGF0YS5jdXJyZW50W2ZpbHRlclR5cGVzLmN1cnJlbnRbMF1dIVswXSk7XHJcbiAgICAgIHNldFNlbGVjdGVkVHlwZShmZXRjaGVkRGF0YS5maWx0ZXJUeXBlc1swXSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGFsZXJ0KCfsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLiDrhKTtirjsm4ztgazrpbwg7ZmV7J247ZW067O07Iuc6rOgIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgLy8gcmVuZGVyZXIuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50Py5pbnNlcnRCZWZvcmUoY2FudmFzLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIHJldHVybiAoKSA9PiBtaW5kYXJUaHJlZS5jdXJyZW50LnN0b3AoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyIHJlZj17Q29udGFpbmVyUmVmfT5cclxuICAgICAgICA8Q2FwdHVyZUJHIHJlZj17Q2FwdHVyZV9CR19SZWZ9IC8+XHJcbiAgICAgICAge3NlbGVjdGVkRmlsdGVyLmNvbXBhbnkgPT09ICdOT05FJyB8fCAoXHJcbiAgICAgICAgICA8UHJvZHVjdFdyYXBwZXIgcmVmPXtQcm9kdWN0UmVmfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRGaWx0ZXIucHJvZHVjdEltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgzPntzZWxlY3RlZEZpbHRlci5jb21wYW55ICsgJyAnICsgc2VsZWN0ZWRGaWx0ZXIudHlwZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57c2VsZWN0ZWRGaWx0ZXIuY29sb3JOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2xpbmsuY291cGFuZy5jb20vYS8ke3NlbGVjdGVkRmlsdGVyLmhyZWZ9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24+7J6Q7IS47Z6I67O06riwIHsnPid9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHA+4oC7IOy/oO2MoSDtjIztirjrhIjsiqQg7Zmc64+Z7J2EIO2Gte2VtCDsnbzsoJXslaHsnZgg7IiY7IiY66OM66W8IOygnOqzteuwm+ydhCDsiJgg7J6I7Iq164uI64ukLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Byb2R1Y3RXcmFwcGVyPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIDxJTUcgc3JjPXtwcm9jZXNzLmVudi5QQVRIICsgJy9pbWFnZXMvdGVzdEltZy5qcGcnfSAvPiAqL31cclxuICAgICAgICA8VUlfV3JhcHBlcj5cclxuICAgICAgICAgIDxCdG5XcmFwcGVyPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXNDYXB0dXJlLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbSA9IENhcHR1cmVfQkdfUmVmLmN1cnJlbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnLjcnO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAoZWxlbS5zdHlsZS5vcGFjaXR5ID0gJzAnKSwgMjAwKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFpRmlsbENhbWVyYSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSBpc0hpZGVkID8gJzEnIDogJzAnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRmlsdGVyLmNvbXBhbnkgIT09ICdOT05FJykgUHJvZHVjdFJlZi5jdXJyZW50IS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgIFNsaWRlclJlZi5jdXJyZW50IS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgIHNldElzSGlkZWQoIWlzSGlkZWQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNIaWRlZCA/IDxBaU91dGxpbmVGdWxsc2NyZWVuRXhpdCAvPiA6IDxBaU91dGxpbmVGdWxsc2NyZWVuIC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbmZpcm0oJ+qwgOyDgSDrqZTsnbTtgazsl4XsnYQg7KKF66OM7ZWY7Iuc6rKg7Iq164uI6rmMPycpICYmIHNldElzU3RhcnRlZChmYWxzZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UnhFeGl0IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9CdG5XcmFwcGVyPlxyXG4gICAgICAgICAgey8qIDxVdGlsQnV0dG9uIC8+ICovfVxyXG4gICAgICAgIDwvVUlfV3JhcHBlcj5cclxuICAgICAgICA8RmlsdGVyU2xpZGVyXHJcbiAgICAgICAgICBmaWx0ZXJEYXRhPXtmaWx0ZXJEYXRhLmN1cnJlbnR9XHJcbiAgICAgICAgICBmaWx0ZXJUeXBlcz17ZmlsdGVyVHlwZXMuY3VycmVudH1cclxuICAgICAgICAgIFNsaWRlclJlZj17U2xpZGVyUmVmfVxyXG4gICAgICAgICAgY29sb3JOYW1lPXtjb2xvck5hbWV9XHJcbiAgICAgICAgICBzZWxlY3RlZEZpbHRlcj17c2VsZWN0ZWRGaWx0ZXJ9XHJcbiAgICAgICAgICBzZWxlY3RlZFR5cGU9e3NlbGVjdGVkVHlwZX1cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZUZpbHRlcj17aGFuZGxlQ2hhbmdlRmlsdGVyfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlVHlwZT17aGFuZGxlQ2hhbmdlVHlwZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=