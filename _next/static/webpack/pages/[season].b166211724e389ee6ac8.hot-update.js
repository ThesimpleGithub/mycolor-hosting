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
  var data = (0,C_Users_JAEHOON_OneDrive_Desktop_Projects_company_mycolor_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  > div:first-of-type {\n    width: 68px;\n    height: 68px;\n    border-radius: 15px;\n    margin-right: 10px;\n    background: #b5b4b4;\n  }\n  > div:last-of-type {\n    width: 55%;\n    max-width: 285px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    > div:first-of-type {\n      width: 100%;\n      margin: 5px 0px;\n      display: flex;\n      align-items: center;\n      > :first-of-type {\n        height: 20px;\n        width: 30%;\n        background: #b5b4b4;\n      }\n      > :last-child {\n        width: 40%;\n        height: 20px;\n        background: #b5b4b4;\n      }\n    }\n    > :last-of-type {\n      width: 90%;\n      height: 20px;\n      background: #b5b4b4;\n    }\n  }\n"]);

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
_c4 = Skeleton;
var ProductDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject5());
_c5 = ProductDiv;
var ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.header(_templateObject6());
_c6 = ProductWrapper;
var CaptureBG = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject7());
_c7 = CaptureBG;
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
        lineNumber: 369,
        columnNumber: 9
      }, _this), selectedFilter.company === 'NONE' || /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductWrapper, {
        ref: ProductRef,
        children: selectedFilter.href ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductDiv, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: selectedFilter.productImg
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: selectedFilter.company + ' ' + selectedFilter.type
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: selectedFilter.colorName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://link.coupang.com/a/".concat(selectedFilter.href),
                target: "_blank",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  children: ["\uC790\uC138\uD788\uBCF4\uAE30 ", '>']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 381,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "\u203B \uCFE0\uD321 \uD30C\uD2B8\uB108\uC2A4 \uD65C\uB3D9\uC744 \uD1B5\uD574 \uC77C\uC815\uC561\uC758 \uC218\uC218\uB8CC\uB97C \uC81C\uACF5\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skeleton, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 394,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 371,
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
              lineNumber: 413,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 405,
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
              lineNumber: 423,
              columnNumber: 26
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineFullscreen, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 56
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return confirm('가상 메이크업을 종료하시겠습니까?') && setIsStarted(false);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_12__.RxExit, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 428,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 403,
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
        lineNumber: 433,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Filter, "CziXhFDA8AFP5WMQpJkMDiiViL4=");

_c8 = Filter;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "UI_Wrapper");
$RefreshReg$(_c3, "BtnWrapper");
$RefreshReg$(_c4, "Skeleton");
$RefreshReg$(_c5, "ProductDiv");
$RefreshReg$(_c6, "ProductWrapper");
$RefreshReg$(_c7, "CaptureBG");
$RefreshReg$(_c8, "Filter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bHRQYWdlL0ZpbHRlci50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiVUlfV3JhcHBlciIsIkJ0bldyYXBwZXIiLCJTa2VsZXRvbiIsIlByb2R1Y3REaXYiLCJQcm9kdWN0V3JhcHBlciIsIkNhcHR1cmVCRyIsIklNRyIsIkZpbHRlciIsInNldElzU3RhcnRlZCIsInByb2R1Y3RUeXBlIiwiY29sb3JOYW1lIiwidXNlU3RhdGUiLCJpc0hpZGVkIiwic2V0SXNIaWRlZCIsInNlbGVjdGVkVHlwZSIsInNldFNlbGVjdGVkVHlwZSIsImZpbHRlckltZyIsImNvbXBhbnkiLCJ0eXBlIiwicHJvZHVjdEltZyIsInJnYiIsImhyZWYiLCJzZWxlY3RlZEZpbHRlciIsInNldFNlbGVjZXRlZEZpbHRlciIsImZpbHRlclR5cGVzIiwidXNlUmVmIiwiY29zbWV0aWNUeXBlQXJyIiwiZmlsdGVyRGF0YSIsIkNvbnRhaW5lclJlZiIsIlByb2R1Y3RSZWYiLCJTbGlkZXJSZWYiLCJmYWNlTWVzaCIsIm1pbmRhclRocmVlIiwiaXNDYXB0dXJlIiwiQ2FwdHVyZV9CR19SZWYiLCJwcmV2RmlsdGVySW1nIiwiZ2V0Q2hhbmdlZENhbnZhcyIsInRleHR1cmUiLCJoZXgiLCJjb3B5Q2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInRlbXBDYW52YXMiLCJ0ZW1wQ3R4IiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJoYW5kbGVDaGFuZ2VUeXBlIiwiY3VycmVudCIsImhhbmRsZUNoYW5nZUZpbHRlciIsInVzZUNhbGxiYWNrIiwicmVEcmF3RmlsdGVyIiwiVEhSRUUiLCJsb2FkIiwicHJvY2VzcyIsIm1hdGVyaWFsIiwibWFwIiwiaW1hZ2UiLCJjb2xvciIsInNldEhleCIsInBhcnNlSW50IiwidXNlRWZmZWN0IiwiTWluZEFSVGhyZWUiLCJjb250YWluZXIiLCJyZW5kZXJlciIsInNjZW5lIiwiY2FtZXJhIiwibGlnaHQiLCJhZGQiLCJhZGRGYWNlTWVzaCIsInRyYW5zcGFyZW50Iiwic3RhcnQiLCJjYXB0dXJlQ2FudmFzIiwiY3R4IiwidmlkZW8iLCJxdWVyeVNlbGVjdG9yIiwiZG9tRWxlbWVudCIsInRyYW5zbGF0ZSIsInNjYWxlIiwic2V0QW5pbWF0aW9uTG9vcCIsInJlbmRlciIsImNsZWFyUmVjdCIsImxpbmsiLCJkb3dubG9hZCIsIkRhdGUiLCJ0b0RhdGFVUkwiLCJjbGljayIsInJlbW92ZSIsIm9wYWNpdHkiLCJmZXRjaERhdGEiLCJheGlvcyIsInBhcmFtcyIsImZldGNoZWREYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJEYXRhcyIsImFsZXJ0Iiwic3RvcCIsImVsZW0iLCJzdHlsZSIsInNldFRpbWVvdXQiLCJjb25maXJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywwREFBSCxtQkFBZjtLQUFNRCxTO0FBa0JOLElBQU1FLFVBQVUsR0FBR0QsMERBQUgsb0JBQWhCO01BQU1DLFU7QUFNTixJQUFNQyxVQUFVLEdBQUdGLDBEQUFILG9CQUFoQjtNQUFNRSxVO0FBK0JOLElBQU1DLFFBQVEsR0FBR0gsMERBQUgsb0JBQWQ7TUFBTUcsUTtBQTBDTixJQUFNQyxVQUFVLEdBQUdKLDBEQUFILG9CQUFoQjtNQUFNSSxVO0FBcUROLElBQU1DLGNBQWMsR0FBR0wsNkRBQUgsb0JBQXBCO01BQU1LLGM7QUFXTixJQUFN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YWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNaW5kQVJUaHJlZSB9IGZyb20gJy4uLy4uL3V0aWxzL21pbmRhci1mYWNlLXRocmVlLnByb2QnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVGdWxsc2NyZWVuRXhpdCwgQWlPdXRsaW5lRnVsbHNjcmVlbiwgQWlGaWxsQ2FtZXJhIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBSeEV4aXQgfSBmcm9tICdyZWFjdC1pY29ucy9yeCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IEZpbHRlclNsaWRlciBmcm9tICcuL0ZpbHRlclNsaWRlcic7XHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hGaWx0ZXJUeXBlLFxyXG4gIGZpbHRlclR5cGVzLFxyXG4gIElGaWx0ZXIsXHJcbiAgcHJvZHVjdFR5cGVzLFxyXG4gIGNvbG9yVHlwZXMsXHJcbn0gZnJvbSAnLi4vLi4vZGF0YXMvZmlsdGVyRGF0YSc7XHJcbmltcG9ydCB7IGNvc21ldGljVHlwZUFyciwgY29zbWV0aWNUeXBlcyB9IGZyb20gJy4uLy4uL2RhdGFzL2Nvc21ldGljRGF0YSc7XHJcbmltcG9ydCB7IG1hc2tUeXBlQXJyLCBtYXNrVHlwZXMgfSBmcm9tICcuLi8uLi9kYXRhcy9tYXNrRGF0YSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBjYW52YXMge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICB2aWRlbyxcclxuICBjYW52YXMge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBVSV9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB6LWluZGV4OiAzO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDMzJTtcclxuICByaWdodDogMTBweDtcclxuYDtcclxuY29uc3QgQnRuV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjNweCAxM3B4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE4NSAxODUgMTg1KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYig2MiA2MiA2MiAvIDkwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNzIwcHgpLFxyXG4gICAgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNzIwcHgpIHtcclxuICAgIHBhZGRpbmc6IDE2cHggOXB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNrZWxldG9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIGhlaWdodDogNjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjViNGI0O1xyXG4gIH1cclxuICA+IGRpdjpsYXN0LW9mLXR5cGUge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIG1heC13aWR0aDogMjg1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgID4gZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICA+IDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjViNGI0O1xyXG4gICAgICB9XHJcbiAgICAgID4gOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiNWI0YjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgID4gOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2I1YjRiNDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0RGl2ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIG1heC13aWR0aDogMjg1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNmM2O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDIzLjdweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQcmV0ZW5kYXJkIFZhcmlhYmxlJztcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFByb2R1Y3RXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG5gO1xyXG5jb25zdCBDYXB0dXJlQkcgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbmA7XHJcbmNvbnN0IElNRyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgcHJvcHMge1xyXG4gIGNvbG9yTmFtZTogY29sb3JUeXBlcztcclxuICBzZXRJc1N0YXJ0ZWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxuICBwcm9kdWN0VHlwZTogcHJvZHVjdFR5cGVzO1xyXG59XHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoeyBzZXRJc1N0YXJ0ZWQsIHByb2R1Y3RUeXBlLCBjb2xvck5hbWUgfTogcHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNIaWRlZCwgc2V0SXNIaWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVHlwZSwgc2V0U2VsZWN0ZWRUeXBlXSA9IHVzZVN0YXRlPGNvc21ldGljVHlwZXMgfCBtYXNrVHlwZXM+KCfrpr0nKTtcclxuICBjb25zdCBbc2VsZWN0ZWRGaWx0ZXIsIHNldFNlbGVjZXRlZEZpbHRlcl0gPSB1c2VTdGF0ZTxJRmlsdGVyPih7XHJcbiAgICBjb2xvck5hbWU6ICftgbTrnpjsi5wnLFxyXG4gICAgZmlsdGVySW1nOiAnJyxcclxuICAgIGNvbXBhbnk6ICcnLFxyXG4gICAgdHlwZTogJycsXHJcbiAgICBwcm9kdWN0SW1nOiAnJyxcclxuICAgIHJnYjogJycsXHJcbiAgICBocmVmOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmlsdGVyVHlwZXMgPSB1c2VSZWY8dHlwZW9mIGNvc21ldGljVHlwZUFyciB8IHR5cGVvZiBtYXNrVHlwZUFycj4oY29zbWV0aWNUeXBlQXJyKTtcclxuICBjb25zdCBmaWx0ZXJEYXRhID0gdXNlUmVmPGZldGNoRmlsdGVyVHlwZT4oe30pO1xyXG4gIGNvbnN0IENvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgUHJvZHVjdFJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgU2xpZGVyUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBmYWNlTWVzaCA9IHVzZVJlZjxUSFJFRS5NZXNoPFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4+KCk7XHJcbiAgY29uc3QgbWluZGFyVGhyZWUgPSB1c2VSZWY8TWluZEFSVGhyZWU+KHt9KTtcclxuICBjb25zdCBpc0NhcHR1cmUgPSB1c2VSZWY8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IENhcHR1cmVfQkdfUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBwcmV2RmlsdGVySW1nID0gdXNlUmVmPHN0cmluZz4oc2VsZWN0ZWRGaWx0ZXIucHJvZHVjdEltZyk7XHJcblxyXG4gIGNvbnN0IGdldENoYW5nZWRDYW52YXMgPSAodGV4dHVyZTogQ2FudmFzSW1hZ2VTb3VyY2UsIGhleDogc3RyaW5nKSA9PiB7XHJcbiAgICBoZXggPSAnIycgKyBoZXg7XHJcbiAgICBjb25zdCBjb3B5Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb3B5Q2FudmFzLndpZHRoID0gNTAwO1xyXG4gICAgY29weUNhbnZhcy5oZWlnaHQgPSA1MDA7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gY29weUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRleHR1cmUsIDAsIDAsIGNvcHlDYW52YXMud2lkdGgsIGNvcHlDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBjb25zdCB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCB0ZW1wQ3R4ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHRlbXBDYW52YXMud2lkdGggPSBjb3B5Q2FudmFzLndpZHRoO1xyXG4gICAgdGVtcENhbnZhcy5oZWlnaHQgPSBjb3B5Q2FudmFzLmhlaWdodDtcclxuXHJcbiAgICB0ZW1wQ3R4LmRyYXdJbWFnZSh0ZXh0dXJlLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgdGVtcEN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLWF0b3AnO1xyXG4gICAgdGVtcEN0eC5maWxsU3R5bGUgPSBoZXg7XHJcbiAgICB0ZW1wQ3R4LmZpbGxSZWN0KDAsIDAsIHRlbXBDYW52YXMud2lkdGgsIHRlbXBDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZW1wQ2FudmFzLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgdGVtcEN0eC5kcmF3SW1hZ2UodGV4dHVyZSwgMCwgMCwgY29weUNhbnZhcy53aWR0aCwgY29weUNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGVtcEN0eC5maWxsU3R5bGUgPSBoZXg7XHJcbiAgICB0ZW1wQ3R4LmZpbGxSZWN0KDAsIDAsIHRlbXBDYW52YXMud2lkdGgsIHRlbXBDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZW1wQ2FudmFzLCAwLCAwLCBjb3B5Q2FudmFzLndpZHRoLCBjb3B5Q2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIGNvcHlDYW52YXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVHlwZSA9ICh0eXBlOiBmaWx0ZXJUeXBlcykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRUeXBlKHR5cGUpO1xyXG4gICAgc2V0U2VsZWNldGVkRmlsdGVyKGZpbHRlckRhdGEuY3VycmVudFt0eXBlXSFbMF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUZpbHRlciA9IHVzZUNhbGxiYWNrKChmaWx0ZXJEYXRhOiBJRmlsdGVyKSA9PiB7XHJcbiAgICBzZXRTZWxlY2V0ZWRGaWx0ZXIoZmlsdGVyRGF0YSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByZURyYXdGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L3NlcnZlckltYWdlcy8ke3NlbGVjdGVkRmlsdGVyLmZpbHRlckltZ31gLFxyXG4gICAgICB0ZXh0dXJlID0+IHtcclxuICAgICAgICBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5tYXAgPVxyXG4gICAgICAgICAgcHJvZHVjdFR5cGUgPT09ICdtYXNrJ1xyXG4gICAgICAgICAgICA/IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGdldENoYW5nZWRDYW52YXModGV4dHVyZS5pbWFnZSwgc2VsZWN0ZWRGaWx0ZXIucmdiKSlcclxuICAgICAgICAgICAgOiB0ZXh0dXJlO1xyXG4gICAgICAgIGlmIChwcm9kdWN0VHlwZSA9PT0gJ2Nvc21ldGljJykge1xyXG4gICAgICAgICAgcHJldkZpbHRlckltZy5jdXJyZW50ID0gc2VsZWN0ZWRGaWx0ZXIuZmlsdGVySW1nO1xyXG4gICAgICAgICAgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KHBhcnNlSW50KHNlbGVjdGVkRmlsdGVyLnJnYiwgMTYpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZmFjZU1lc2guY3VycmVudCkge1xyXG4gICAgICBtaW5kYXJUaHJlZS5jdXJyZW50ID0gbmV3IE1pbmRBUlRocmVlKHtcclxuICAgICAgICBjb250YWluZXI6IENvbnRhaW5lclJlZi5jdXJyZW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyByZW5kZXJlciwgc2NlbmUsIGNhbWVyYSB9ID0gbWluZGFyVGhyZWUuY3VycmVudDtcclxuICAgICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxKTtcclxuICAgICAgc2NlbmUuYWRkKGxpZ2h0KTtcclxuICAgICAgZmFjZU1lc2guY3VycmVudCA9IG1pbmRhclRocmVlLmN1cnJlbnQuYWRkRmFjZU1lc2goKTtcclxuICAgICAgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICBjb25zdCBzdGFydCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBtaW5kYXJUaHJlZS5jdXJyZW50LnN0YXJ0KCk7XHJcbiAgICAgICAgY29uc3QgY2FwdHVyZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhcHR1cmVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xyXG4gICAgICAgIGNhcHR1cmVDYW52YXMud2lkdGggPSByZW5kZXJlci5kb21FbGVtZW50LndpZHRoO1xyXG4gICAgICAgIGNhcHR1cmVDYW52YXMuaGVpZ2h0ID0gcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYXB0dXJlQ2FudmFzITtcclxuICAgICAgICBjdHghLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgIGN0eCEuc2NhbGUoLTEsIDEpO1xyXG4gICAgICAgIGN0eCEudHJhbnNsYXRlKC13aWR0aCAvIDIsIC1oZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuc2V0QW5pbWF0aW9uTG9vcCgoKSA9PiB7XHJcbiAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICAgICAgICBpZiAoaXNDYXB0dXJlLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh2aWRlbyEsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHJlbmRlcmVyLmRvbUVsZW1lbnQsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaW5rLmRvd25sb2FkID0gbmV3IERhdGUoKSArICftjbzsiqTrhJDsu6zrn6wucG5nJztcclxuICAgICAgICAgICAgbGluay5ocmVmID0gY2FwdHVyZUNhbnZhcyEudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgbGluay5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaXNDYXB0dXJlLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgc2NlbmUuYWRkKGZhY2VNZXNoLmN1cnJlbnQhKTtcclxuICAgICAgc3RhcnQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3RlZEZpbHRlci5jb21wYW55ID09PSAnTk9ORScpIGZhY2VNZXNoLmN1cnJlbnQhLm1hdGVyaWFsLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxzZSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICBpZiAoIShwcm9kdWN0VHlwZSA9PT0gJ2Nvc21ldGljJyAmJiBwcmV2RmlsdGVySW1nLmN1cnJlbnQgPT09IHNlbGVjdGVkRmlsdGVyLmZpbHRlckltZykpXHJcbiAgICAgIHJlRHJhd0ZpbHRlcigpO1xyXG4gICAgZWxzZSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5jb2xvci5zZXRIZXgocGFyc2VJbnQoc2VsZWN0ZWRGaWx0ZXIucmdiLCAxNikpO1xyXG4gIH0sIFtzZWxlY3RlZEZpbHRlcl0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKCFmYWNlTWVzaC5jdXJyZW50KSByZXR1cm47XHJcbiAgLy8gICBpZiAoc2VsZWN0ZWRGaWx0ZXIuY29tcGFueSA9PT0gJ05PTkUnKSBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5vcGFjaXR5ID0gMDtcclxuICAvLyAgIGVsc2UgZmFjZU1lc2guY3VycmVudCEubWF0ZXJpYWwub3BhY2l0eSA9IDE7XHJcbiAgLy8gICBmYWNlTWVzaC5jdXJyZW50IS5tYXRlcmlhbC5jb2xvci5zZXRIZXgocGFyc2VJbnQoc2VsZWN0ZWRGaWx0ZXIucmdiLnJlcGxhY2UoJyMnLCAnJyksIDE2KSk7XHJcbiAgLy8gfSwgW3NlbGVjdGVkRmlsdGVyXSk7XHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZmV0Y2hlZERhdGEgPSAoXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldEZpbHRlckRhdGEnLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBjb2xvck5hbWUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RUeXBlOiBwcm9kdWN0VHlwZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhmZXRjaGVkRGF0YSk7XHJcbiAgICAgIGZpbHRlckRhdGEuY3VycmVudCA9IGZldGNoZWREYXRhLmZpbHRlckRhdGFzO1xyXG4gICAgICBmaWx0ZXJUeXBlcy5jdXJyZW50ID0gZmV0Y2hlZERhdGEuZmlsdGVyVHlwZXM7XHJcbiAgICAgIHNldFNlbGVjZXRlZEZpbHRlcihmaWx0ZXJEYXRhLmN1cnJlbnRbZmlsdGVyVHlwZXMuY3VycmVudFswXV0hWzBdKTtcclxuICAgICAgc2V0U2VsZWN0ZWRUeXBlKGZldGNoZWREYXRhLmZpbHRlclR5cGVzWzBdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgYWxlcnQoJ+yXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuIOuEpO2KuOybjO2BrOulvCDtmZXsnbjtlbTrs7Tsi5zqs6Ag64uk7IucIOyLnOuPhO2VtOyjvOyEuOyalCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgICAvLyByZW5kZXJlci5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ/Lmluc2VydEJlZm9yZShjYW52YXMsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgcmV0dXJuICgpID0+IG1pbmRhclRocmVlLmN1cnJlbnQuc3RvcCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXIgcmVmPXtDb250YWluZXJSZWZ9PlxyXG4gICAgICAgIDxDYXB0dXJlQkcgcmVmPXtDYXB0dXJlX0JHX1JlZn0gLz5cclxuICAgICAgICB7c2VsZWN0ZWRGaWx0ZXIuY29tcGFueSA9PT0gJ05PTkUnIHx8IChcclxuICAgICAgICAgIDxQcm9kdWN0V3JhcHBlciByZWY9e1Byb2R1Y3RSZWZ9PlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRGaWx0ZXIuaHJlZiA/IChcclxuICAgICAgICAgICAgICA8UHJvZHVjdERpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZWxlY3RlZEZpbHRlci5wcm9kdWN0SW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e3NlbGVjdGVkRmlsdGVyLmNvbXBhbnkgKyAnICcgKyBzZWxlY3RlZEZpbHRlci50eXBlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlbGVjdGVkRmlsdGVyLmNvbG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vbGluay5jb3VwYW5nLmNvbS9hLyR7c2VsZWN0ZWRGaWx0ZXIuaHJlZn1gfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+7J6Q7IS47Z6I67O06riwIHsnPid9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+4oC7IOy/oO2MoSDtjIztirjrhIjsiqQg7Zmc64+Z7J2EIO2Gte2VtCDsnbzsoJXslaHsnZgg7IiY7IiY66OM66W8IOygnOqzteuwm+ydhCDsiJgg7J6I7Iq164uI64ukLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvUHJvZHVjdERpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8U2tlbGV0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUHJvZHVjdFdyYXBwZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7LyogPElNRyBzcmM9e3Byb2Nlc3MuZW52LlBBVEggKyAnL2ltYWdlcy90ZXN0SW1nLmpwZyd9IC8+ICovfVxyXG4gICAgICAgIDxVSV9XcmFwcGVyPlxyXG4gICAgICAgICAgPEJ0bldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpc0NhcHR1cmUuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtID0gQ2FwdHVyZV9CR19SZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcuNyc7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChlbGVtLnN0eWxlLm9wYWNpdHkgPSAnMCcpLCAyMDApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWlGaWxsQ2FtZXJhIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IGlzSGlkZWQgPyAnMScgOiAnMCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRGaWx0ZXIuY29tcGFueSAhPT0gJ05PTkUnKSBQcm9kdWN0UmVmLmN1cnJlbnQhLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgU2xpZGVyUmVmLmN1cnJlbnQhLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgc2V0SXNIaWRlZCghaXNIaWRlZCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0hpZGVkID8gPEFpT3V0bGluZUZ1bGxzY3JlZW5FeGl0IC8+IDogPEFpT3V0bGluZUZ1bGxzY3JlZW4gLz59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybSgn6rCA7IOBIOuplOydtO2BrOyXheydhCDsooXro4ztlZjsi5zqsqDsirXri4jquYw/JykgJiYgc2V0SXNTdGFydGVkKGZhbHNlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxSeEV4aXQgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0J0bldyYXBwZXI+XHJcbiAgICAgICAgICB7LyogPFV0aWxCdXR0b24gLz4gKi99XHJcbiAgICAgICAgPC9VSV9XcmFwcGVyPlxyXG4gICAgICAgIDxGaWx0ZXJTbGlkZXJcclxuICAgICAgICAgIGZpbHRlckRhdGE9e2ZpbHRlckRhdGEuY3VycmVudH1cclxuICAgICAgICAgIGZpbHRlclR5cGVzPXtmaWx0ZXJUeXBlcy5jdXJyZW50fVxyXG4gICAgICAgICAgU2xpZGVyUmVmPXtTbGlkZXJSZWZ9XHJcbiAgICAgICAgICBjb2xvck5hbWU9e2NvbG9yTmFtZX1cclxuICAgICAgICAgIHNlbGVjdGVkRmlsdGVyPXtzZWxlY3RlZEZpbHRlcn1cclxuICAgICAgICAgIHNlbGVjdGVkVHlwZT17c2VsZWN0ZWRUeXBlfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlRmlsdGVyPXtoYW5kbGVDaGFuZ2VGaWx0ZXJ9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2VUeXBlPXtoYW5kbGVDaGFuZ2VUeXBlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==