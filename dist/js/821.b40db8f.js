(self["webpackChunkreact_admin"] = self["webpackChunkreact_admin"] || []).push([[821],{

/***/ 19957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57663);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71577);
/* harmony import */ var antd_es_message_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34792);
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48086);
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47673);
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14617);
/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43358);
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7031);
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9715);
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35845);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53690);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16550);











function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var FormItem = antd_es_form__WEBPACK_IMPORTED_MODULE_7__/* .default.Item */ .Z.Item;
var Option = antd_es_select__WEBPACK_IMPORTED_MODULE_8__/* .default.Option */ .Z.Option;
var TextArea = antd_es_input__WEBPACK_IMPORTED_MODULE_9__/* .default.TextArea */ .Z.TextArea;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _Form$useForm = antd_es_form__WEBPACK_IMPORTED_MODULE_7__/* .default.useForm */ .Z.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .useHistory */ .k6)();

  var submit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,_api__WEBPACK_IMPORTED_MODULE_6__/* .addArticle */ .qM)(data);

            case 3:
              res = _context.sent;

              if (res.code === 200) {
                antd_es_message__WEBPACK_IMPORTED_MODULE_11__/* .default.success */ .ZP.success('发布成功');

                history.push('/juejin/detail');
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              antd_es_message__WEBPACK_IMPORTED_MODULE_11__/* .default.error */ .ZP.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function submit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    form: form,
    style: {
      margin: '20px'
    },
    name: "publishForm",
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 20
    },
    onFinish: function onFinish(val) {
      return submit(val);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(FormItem, {
    label: "\u6807\u9898",
    name: "title",
    rules: [{
      required: true,
      message: '请输入标题!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(FormItem, {
    label: "\u5206\u7C7B",
    name: "classify",
    rules: [{
      required: true,
      message: '请选择分类!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Option, {
    value: "\u524D\u7AEF"
  }, "\u524D\u7AEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Option, {
    value: "\u540E\u7AEF"
  }, "\u540E\u7AEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Option, {
    value: "Java"
  }, "Java"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(FormItem, {
    label: "\u6587\u7AE0",
    name: "article",
    rules: [{
      required: true,
      message: '文章内容不能为空!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(TextArea, {
    allowClear: true,
    autoSize: {
      minRows: 4
    },
    showCount: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(FormItem, {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    type: "primary",
    htmlType: "submit",
    style: {
      marginRight: '20px'
    }
  }, "\u786E\u5B9A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    type: "default",
    onClick: function onClick() {
      history.push('/home');
    }
  }, "\u8FD4\u56DE")));
});

/***/ })

}]);