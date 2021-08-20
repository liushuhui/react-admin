(self["webpackChunkreact_admin"] = self["webpackChunkreact_admin"] || []).push([[640],{

/***/ 57653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_es_upload_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84494);
/* harmony import */ var antd_es_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11528);
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9715);
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35845);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14722);
/* harmony import */ var antd_es_modal_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71194);
/* harmony import */ var antd_es_slider_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66126);





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import { useHistory } from 'react-router-dom';




var FormItem = antd_es_form__WEBPACK_IMPORTED_MODULE_6__/* .default.Item */ .Z.Item;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  // const history = useHistory();
  var _Form$useForm = antd_es_form__WEBPACK_IMPORTED_MODULE_6__/* .default.useForm */ .Z.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
    url: props.location.state.imgUrl
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var onChange = function onChange(_ref) {
    var newFileList = _ref.fileList;
    setFileList(newFileList);
  };

  var onPreview = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
      var src, image, imgWindow;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              src = file.url;

              if (src) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return new Promise(function (resolve) {
                var reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = function () {
                  return resolve(reader.result);
                };
              });

            case 4:
              src = _context.sent;

            case 5:
              image = new Image();
              image.src = src;
              imgWindow = window.open(src);
              imgWindow.document.write(image.outerHTML);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onPreview(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    form: form,
    style: {
      margin: '20px'
    },
    name: "editForm",
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 20
    },
    onFinish: function onFinish(val) {
      return update(val);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(FormItem, {
    label: "\u5934\u50CF",
    name: "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_img_crop__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    rotate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_upload__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    maxCount: 1,
    action: "http://localhost:7001/uploadImg",
    listType: "picture-card",
    fileList: fileList,
    onChange: onChange,
    onPreview: onPreview
  }, "\u4E0A\u4F20\u5934\u50CF"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(FormItem, {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  }));
});

/***/ })

}]);