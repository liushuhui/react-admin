(self["webpackChunkreact_admin"] = self["webpackChunkreact_admin"] || []).push([[856],{

/***/ 64288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57663);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71577);
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47673);
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14617);
/* harmony import */ var antd_es_message_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34792);
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48086);
/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43358);
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7031);
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9715);
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35845);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16550);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53690);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49226);











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var FormItem = antd_es_form__WEBPACK_IMPORTED_MODULE_8__/* .default.Item */ .Z.Item;
var Option = antd_es_select__WEBPACK_IMPORTED_MODULE_9__/* .default.Option */ .Z.Option;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  console.log('props', props);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__/* .useDispatch */ .I0)();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .useHistory */ .k6)();
  var _props$match$params = props.match.params,
      _id = _props$match$params._id,
      index = _props$match$params.index,
      level = _props$match$params.level,
      parentId = _props$match$params.parentId,
      title = _props$match$params.title,
      childId = _props$match$params.childId;

  var _Form$useForm = antd_es_form__WEBPACK_IMPORTED_MODULE_8__/* .default.useForm */ .Z.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var getMenuDetail = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api__WEBPACK_IMPORTED_MODULE_6__/* .reqGetMenuDetail */ .lP)(_id, parentId, level, title, childId);

            case 2:
              res = _context.sent;
              (res === null || res === void 0 ? void 0 : res.code) === 0 ? res.data instanceof Array && res.data[0].children[0].level == 2 ? form.setFieldsValue(_objectSpread({}, res === null || res === void 0 ? void 0 : res.data[0].children[0])) : form.setFieldsValue(_objectSpread({}, res === null || res === void 0 ? void 0 : res.data)) : antd_es_message__WEBPACK_IMPORTED_MODULE_11__/* .default.error */ .ZP.error(res === null || res === void 0 ? void 0 : res.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getMenuDetail() {
      return _ref.apply(this, arguments);
    };
  }();

  var update = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = data.level == 1 ? _objectSpread(_objectSpread({}, data), {}, {
                _id: _id
              }) : _objectSpread(_objectSpread({}, data), {}, {
                parentId: parentId,
                index: index,
                childId: childId
              });
              console.log('data', data);
              _context2.next = 4;
              return (0,_api__WEBPACK_IMPORTED_MODULE_6__/* .updateMenu */ ._8)(data);

            case 4:
              res = _context2.sent;

              if (res.code === 0) {
                dispatch({
                  type: 'UPDATE_MENU',
                  payload: {
                    data: data,
                    index: index
                  }
                });

                antd_es_message__WEBPACK_IMPORTED_MODULE_11__/* .default.success */ .ZP.success(res.message);

                history.push('/home');
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function update(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    getMenuDetail();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(FormItem, {
    label: "\u83DC\u5355\u540D",
    name: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(FormItem, {
    label: "\u83DC\u5355\u7EA7\u522B",
    name: "level"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Option, {
    value: "1"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Option, {
    value: "2"
  }, "2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(FormItem, {
    label: "\u8DEF\u5F84",
    name: "key"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(FormItem, {
    label: "\u56FE\u6807",
    name: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(FormItem, {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    type: "primary",
    htmlType: "submit",
    style: {
      marginRight: '20px'
    }
  }, "\u786E\u5B9A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    type: "default",
    onClick: function onClick() {
      history.push('/home');
    }
  }, "\u8FD4\u56DE")));
});

/***/ })

}]);