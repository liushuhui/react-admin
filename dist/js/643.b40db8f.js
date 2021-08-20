(self["webpackChunkreact_admin"] = self["webpackChunkreact_admin"] || []).push([[643],{

/***/ 64643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_es_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9044);
/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83771);
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57663);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53690);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16550);





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useHistory */ .k6)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      tableData = _useState2[0],
      setTableData = _useState2[1]; // 表格列配置


  var columns = [{
    title: '菜单',
    dataIndex: 'title',
    key: 'title',
    align: 'center'
  }, {
    title: '路径',
    dataIndex: 'key',
    key: 'key',
    align: 'center'
  }, {
    title: '图标',
    dataIndex: 'icon',
    key: 'icon',
    align: 'center'
  }, {
    title: '操作',
    dataIndex: '',
    key: 'x',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        type: "primary",
        size: "small",
        className: "table_btn",
        onClick: function onClick() {
          return editFn(record);
        }
      }, "\u7F16\u8F91"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        danger: true,
        type: "primary",
        size: "small",
        className: "table_btn"
      }, "\u5220\u9664"));
    }
  }]; // 编辑

  var editFn = function editFn(val) {
    var _id = val._id,
        index = val.index,
        level = val.level,
        parentId = val.parentId,
        title = val.title,
        childId = val.childId;
    history.push({
      pathname: "/home/edit/".concat(_id, "/").concat(index, "/").concat(level, "/").concat(parentId, "/").concat(title, "/").concat(childId)
    });
  }; // 分页配置


  var paginationObj = {
    showSizeChanger: true,
    showTotal: function showTotal(total) {
      return "\u603B\u5171\u6709 ".concat(total, " \u6761\u6570\u636E");
    }
  };

  var getMenuList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api__WEBPACK_IMPORTED_MODULE_3__/* .reqGetMenu */ .xM)();

            case 2:
              result = _context.sent;

              if (result.code === 0) {
                result.data.forEach(function (item) {
                  item.children.length > 0 ? item : item.children = null;
                  return item;
                });
                setTableData(result.data);
              } else {
                message.error(result.error);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getMenuList() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getMenuList();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_table__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    columns: columns,
    dataSource: tableData,
    pagination: paginationObj,
    bordered: true
  }));
});

/***/ })

}]);