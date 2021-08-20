(self["webpackChunkreact_admin"] = self["webpackChunkreact_admin"] || []).push([[460],{

/***/ 50132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96156);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81253);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28991);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6610);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5991);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10379);
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81907);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);








// eslint-disable-next-line import/no-extraneous-dependencies



var Checkbox = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(Checkbox, _Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(Checkbox);

  function Checkbox(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, Checkbox);

    _this = _super.call(this, props);

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (disabled) {
        return;
      }

      if (!('checked' in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }

      if (onChange) {
        onChange({
          target: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({}, _this.props), {}, {
            checked: e.target.checked
          }),
          stopPropagation: function stopPropagation() {
            e.stopPropagation();
          },
          preventDefault: function preventDefault() {
            e.preventDefault();
          },
          nativeEvent: e.nativeEvent
        });
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    var checked = 'checked' in props ? props.checked : props.defaultChecked;
    _this.state = {
      checked: checked
    };
    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(Checkbox, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          style = _this$props2.style,
          name = _this$props2.name,
          id = _this$props2.id,
          type = _this$props2.type,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          tabIndex = _this$props2.tabIndex,
          onClick = _this$props2.onClick,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          onKeyDown = _this$props2.onKeyDown,
          onKeyPress = _this$props2.onKeyPress,
          onKeyUp = _this$props2.onKeyUp,
          autoFocus = _this$props2.autoFocus,
          value = _this$props2.value,
          required = _this$props2.required,
          others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_this$props2, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]);

      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          // eslint-disable-next-line no-param-reassign
          prev[key] = others[key];
        }

        return prev;
      }, {});
      var checked = this.state.checked;
      var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(_classNames, "".concat(prefixCls, "-checked"), checked), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: classString,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)({
        name: name,
        id: id,
        type: type,
        required: required,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: "".concat(prefixCls, "-input"),
        checked: !!checked,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onChange: this.handleChange,
        autoFocus: autoFocus,
        ref: this.saveInput,
        value: value
      }, globalProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if ('checked' in props) {
        return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({}, state), {}, {
          checked: props.checked
        });
      }

      return null;
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ 10384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ es_Pagination)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(28991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(10379);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 2 modules
var createSuper = __webpack_require__(81907);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/Pager.js


/* eslint react/prop-types: 0 */



var Pager = function Pager(props) {
  var _classNames;

  var prefixCls = "".concat(props.rootPrefixCls, "-item");
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(props.page), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active"), props.active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), !props.page), (0,defineProperty/* default */.Z)(_classNames, props.className, !!props.className), _classNames));

  var handleClick = function handleClick() {
    props.onClick(props.page);
  };

  var handleKeyPress = function handleKeyPress(e) {
    props.onKeyPress(e, props.onClick, props.page);
  };

  return /*#__PURE__*/react.createElement("li", {
    title: props.showTitle ? props.page : null,
    className: cls,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    tabIndex: "0"
  }, props.itemRender(props.page, 'page', /*#__PURE__*/react.createElement("a", {
    rel: "nofollow"
  }, props.page)));
};

/* harmony default export */ const es_Pager = (Pager);
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/KeyCode.js
/* harmony default export */ const KeyCode = ({
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
});
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/Options.js





/* eslint react/prop-types: 0 */



var Options = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Options, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Options);

  function Options() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Options);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      goInputText: ''
    };

    _this.buildOptionText = function (value) {
      return "".concat(value, " ").concat(_this.props.locale.items_per_page);
    };

    _this.changeSize = function (value) {
      _this.props.changeSize(Number(value));
    };

    _this.handleChange = function (e) {
      _this.setState({
        goInputText: e.target.value
      });
    };

    _this.handleBlur = function (e) {
      var _this$props = _this.props,
          goButton = _this$props.goButton,
          quickGo = _this$props.quickGo,
          rootPrefixCls = _this$props.rootPrefixCls;
      var goInputText = _this.state.goInputText;

      if (goButton || goInputText === '') {
        return;
      }

      _this.setState({
        goInputText: ''
      });

      if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item-link")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item")) >= 0)) {
        return;
      }

      quickGo(_this.getValidValue());
    };

    _this.go = function (e) {
      var goInputText = _this.state.goInputText;

      if (goInputText === '') {
        return;
      }

      if (e.keyCode === KeyCode.ENTER || e.type === 'click') {
        _this.setState({
          goInputText: ''
        });

        _this.props.quickGo(_this.getValidValue());
      }
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Options, [{
    key: "getValidValue",
    value: function getValidValue() {
      var goInputText = this.state.goInputText; // eslint-disable-next-line no-restricted-globals

      return !goInputText || isNaN(goInputText) ? undefined : Number(goInputText);
    }
  }, {
    key: "getPageSizeOptions",
    value: function getPageSizeOptions() {
      var _this$props2 = this.props,
          pageSize = _this$props2.pageSize,
          pageSizeOptions = _this$props2.pageSizeOptions;

      if (pageSizeOptions.some(function (option) {
        return option.toString() === pageSize.toString();
      })) {
        return pageSizeOptions;
      }

      return pageSizeOptions.concat([pageSize.toString()]).sort(function (a, b) {
        // eslint-disable-next-line no-restricted-globals
        var numberA = isNaN(Number(a)) ? 0 : Number(a); // eslint-disable-next-line no-restricted-globals

        var numberB = isNaN(Number(b)) ? 0 : Number(b);
        return numberA - numberB;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          pageSize = _this$props3.pageSize,
          locale = _this$props3.locale,
          rootPrefixCls = _this$props3.rootPrefixCls,
          changeSize = _this$props3.changeSize,
          quickGo = _this$props3.quickGo,
          goButton = _this$props3.goButton,
          selectComponentClass = _this$props3.selectComponentClass,
          buildOptionText = _this$props3.buildOptionText,
          selectPrefixCls = _this$props3.selectPrefixCls,
          disabled = _this$props3.disabled;
      var goInputText = this.state.goInputText;
      var prefixCls = "".concat(rootPrefixCls, "-options");
      var Select = selectComponentClass;
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;

      if (!changeSize && !quickGo) {
        return null;
      }

      var pageSizeOptions = this.getPageSizeOptions();

      if (changeSize && Select) {
        var options = pageSizeOptions.map(function (opt, i) {
          return /*#__PURE__*/react.createElement(Select.Option, {
            key: i,
            value: opt.toString()
          }, (buildOptionText || _this2.buildOptionText)(opt));
        });
        changeSelect = /*#__PURE__*/react.createElement(Select, {
          disabled: disabled,
          prefixCls: selectPrefixCls,
          showSearch: false,
          className: "".concat(prefixCls, "-size-changer"),
          optionLabelProp: "children",
          dropdownMatchSelectWidth: false,
          value: (pageSize || pageSizeOptions[0]).toString(),
          onChange: this.changeSize,
          getPopupContainer: function getPopupContainer(triggerNode) {
            return triggerNode.parentNode;
          }
        }, options);
      }

      if (quickGo) {
        if (goButton) {
          gotoButton = typeof goButton === 'boolean' ? /*#__PURE__*/react.createElement("button", {
            type: "button",
            onClick: this.go,
            onKeyUp: this.go,
            disabled: disabled,
            className: "".concat(prefixCls, "-quick-jumper-button")
          }, locale.jump_to_confirm) : /*#__PURE__*/react.createElement("span", {
            onClick: this.go,
            onKeyUp: this.go
          }, goButton);
        }

        goInput = /*#__PURE__*/react.createElement("div", {
          className: "".concat(prefixCls, "-quick-jumper")
        }, locale.jump_to, /*#__PURE__*/react.createElement("input", {
          disabled: disabled,
          type: "text",
          value: goInputText,
          onChange: this.handleChange,
          onKeyUp: this.go,
          onBlur: this.handleBlur
        }), locale.page, gotoButton);
      }

      return /*#__PURE__*/react.createElement("li", {
        className: "".concat(prefixCls)
      }, changeSelect, goInput);
    }
  }]);

  return Options;
}(react.Component);

Options.defaultProps = {
  pageSizeOptions: ['10', '20', '50', '100']
};
/* harmony default export */ const es_Options = (Options);
// EXTERNAL MODULE: ./node_modules/rc-pagination/es/locale/zh_CN.js
var zh_CN = __webpack_require__(81626);
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/Pagination.js








/* eslint react/prop-types: 0 */







function noop() {}

function isInteger(value) {
  return (// eslint-disable-next-line no-restricted-globals
    typeof value === 'number' && isFinite(value) && Math.floor(value) === value
  );
}

function defaultItemRender(page, type, element) {
  return element;
}

function calculatePage(p, state, props) {
  var pageSize = typeof p === 'undefined' ? state.pageSize : p;
  return Math.floor((props.total - 1) / pageSize) + 1;
}

var Pagination = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Pagination, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Pagination);

  function Pagination(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Pagination);

    _this = _super.call(this, props);

    _this.getJumpPrevPage = function () {
      return Math.max(1, _this.state.current - (_this.props.showLessItems ? 3 : 5));
    };

    _this.getJumpNextPage = function () {
      return Math.min(calculatePage(undefined, _this.state, _this.props), _this.state.current + (_this.props.showLessItems ? 3 : 5));
    };

    _this.getItemIcon = function (icon, label) {
      var prefixCls = _this.props.prefixCls;
      var iconNode = icon || /*#__PURE__*/react.createElement("button", {
        type: "button",
        "aria-label": label,
        className: "".concat(prefixCls, "-item-link")
      });

      if (typeof icon === 'function') {
        iconNode = /*#__PURE__*/react.createElement(icon, (0,objectSpread2/* default */.Z)({}, _this.props));
      }

      return iconNode;
    };

    _this.savePaginationNode = function (node) {
      _this.paginationNode = node;
    };

    _this.isValid = function (page) {
      return isInteger(page) && page !== _this.state.current;
    };

    _this.shouldDisplayQuickJumper = function () {
      var _this$props = _this.props,
          showQuickJumper = _this$props.showQuickJumper,
          pageSize = _this$props.pageSize,
          total = _this$props.total;

      if (total <= pageSize) {
        return false;
      }

      return showQuickJumper;
    };

    _this.handleKeyDown = function (e) {
      if (e.keyCode === KeyCode.ARROW_UP || e.keyCode === KeyCode.ARROW_DOWN) {
        e.preventDefault();
      }
    };

    _this.handleKeyUp = function (e) {
      var value = _this.getValidValue(e);

      var currentInputValue = _this.state.currentInputValue;

      if (value !== currentInputValue) {
        _this.setState({
          currentInputValue: value
        });
      }

      if (e.keyCode === KeyCode.ENTER) {
        _this.handleChange(value);
      } else if (e.keyCode === KeyCode.ARROW_UP) {
        _this.handleChange(value - 1);
      } else if (e.keyCode === KeyCode.ARROW_DOWN) {
        _this.handleChange(value + 1);
      }
    };

    _this.changePageSize = function (size) {
      var current = _this.state.current;
      var newCurrent = calculatePage(size, _this.state, _this.props);
      current = current > newCurrent ? newCurrent : current; // fix the issue:
      // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.

      if (newCurrent === 0) {
        // eslint-disable-next-line prefer-destructuring
        current = _this.state.current;
      }

      if (typeof size === 'number') {
        if (!('pageSize' in _this.props)) {
          _this.setState({
            pageSize: size
          });
        }

        if (!('current' in _this.props)) {
          _this.setState({
            current: current,
            currentInputValue: current
          });
        }
      }

      _this.props.onShowSizeChange(current, size);

      if ('onChange' in _this.props && _this.props.onChange) {
        _this.props.onChange(current, size);
      }
    };

    _this.handleChange = function (p) {
      var disabled = _this.props.disabled;
      var page = p;

      if (_this.isValid(page) && !disabled) {
        var currentPage = calculatePage(undefined, _this.state, _this.props);

        if (page > currentPage) {
          page = currentPage;
        } else if (page < 1) {
          page = 1;
        }

        if (!('current' in _this.props)) {
          _this.setState({
            current: page,
            currentInputValue: page
          });
        }

        var pageSize = _this.state.pageSize;

        _this.props.onChange(page, pageSize);

        return page;
      }

      return _this.state.current;
    };

    _this.prev = function () {
      if (_this.hasPrev()) {
        _this.handleChange(_this.state.current - 1);
      }
    };

    _this.next = function () {
      if (_this.hasNext()) {
        _this.handleChange(_this.state.current + 1);
      }
    };

    _this.jumpPrev = function () {
      _this.handleChange(_this.getJumpPrevPage());
    };

    _this.jumpNext = function () {
      _this.handleChange(_this.getJumpNextPage());
    };

    _this.hasPrev = function () {
      return _this.state.current > 1;
    };

    _this.hasNext = function () {
      return _this.state.current < calculatePage(undefined, _this.state, _this.props);
    };

    _this.runIfEnter = function (event, callback) {
      if (event.key === 'Enter' || event.charCode === 13) {
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }

        callback.apply(void 0, restParams);
      }
    };

    _this.runIfEnterPrev = function (e) {
      _this.runIfEnter(e, _this.prev);
    };

    _this.runIfEnterNext = function (e) {
      _this.runIfEnter(e, _this.next);
    };

    _this.runIfEnterJumpPrev = function (e) {
      _this.runIfEnter(e, _this.jumpPrev);
    };

    _this.runIfEnterJumpNext = function (e) {
      _this.runIfEnter(e, _this.jumpNext);
    };

    _this.handleGoTO = function (e) {
      if (e.keyCode === KeyCode.ENTER || e.type === 'click') {
        _this.handleChange(_this.state.currentInputValue);
      }
    };

    var hasOnChange = props.onChange !== noop;
    var hasCurrent = ('current' in props);

    if (hasCurrent && !hasOnChange) {
      // eslint-disable-next-line no-console
      console.warn('Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.');
    }

    var _current = props.defaultCurrent;

    if ('current' in props) {
      // eslint-disable-next-line prefer-destructuring
      _current = props.current;
    }

    var _pageSize = props.defaultPageSize;

    if ('pageSize' in props) {
      // eslint-disable-next-line prefer-destructuring
      _pageSize = props.pageSize;
    }

    _current = Math.min(_current, calculatePage(_pageSize, undefined, props));
    _this.state = {
      current: _current,
      currentInputValue: _current,
      pageSize: _pageSize
    };
    return _this;
  }

  (0,createClass/* default */.Z)(Pagination, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // When current page change, fix focused style of prev item
      // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
      var prefixCls = this.props.prefixCls;

      if (prevState.current !== this.state.current && this.paginationNode) {
        var lastCurrentNode = this.paginationNode.querySelector(".".concat(prefixCls, "-item-").concat(prevState.current));

        if (lastCurrentNode && document.activeElement === lastCurrentNode) {
          lastCurrentNode.blur();
        }
      }
    }
  }, {
    key: "getValidValue",
    value: function getValidValue(e) {
      var inputValue = e.target.value;
      var allPages = calculatePage(undefined, this.state, this.props);
      var currentInputValue = this.state.currentInputValue;
      var value;

      if (inputValue === '') {
        value = inputValue; // eslint-disable-next-line no-restricted-globals
      } else if (isNaN(Number(inputValue))) {
        value = currentInputValue;
      } else if (inputValue >= allPages) {
        value = allPages;
      } else {
        value = Number(inputValue);
      }

      return value;
    }
  }, {
    key: "getShowSizeChanger",
    value: function getShowSizeChanger() {
      var _this$props2 = this.props,
          showSizeChanger = _this$props2.showSizeChanger,
          total = _this$props2.total,
          totalBoundaryShowSizeChanger = _this$props2.totalBoundaryShowSizeChanger;

      if (typeof showSizeChanger !== 'undefined') {
        return showSizeChanger;
      }

      return total > totalBoundaryShowSizeChanger;
    }
  }, {
    key: "renderPrev",
    value: function renderPrev(prevPage) {
      var _this$props3 = this.props,
          prevIcon = _this$props3.prevIcon,
          itemRender = _this$props3.itemRender;
      var prevButton = itemRender(prevPage, 'prev', this.getItemIcon(prevIcon, 'prev page'));
      var disabled = !this.hasPrev();
      return /*#__PURE__*/(0,react.isValidElement)(prevButton) ? /*#__PURE__*/(0,react.cloneElement)(prevButton, {
        disabled: disabled
      }) : prevButton;
    }
  }, {
    key: "renderNext",
    value: function renderNext(nextPage) {
      var _this$props4 = this.props,
          nextIcon = _this$props4.nextIcon,
          itemRender = _this$props4.itemRender;
      var nextButton = itemRender(nextPage, 'next', this.getItemIcon(nextIcon, 'next page'));
      var disabled = !this.hasNext();
      return /*#__PURE__*/(0,react.isValidElement)(nextButton) ? /*#__PURE__*/(0,react.cloneElement)(nextButton, {
        disabled: disabled
      }) : nextButton;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          className = _this$props5.className,
          style = _this$props5.style,
          disabled = _this$props5.disabled,
          hideOnSinglePage = _this$props5.hideOnSinglePage,
          total = _this$props5.total,
          locale = _this$props5.locale,
          showQuickJumper = _this$props5.showQuickJumper,
          showLessItems = _this$props5.showLessItems,
          showTitle = _this$props5.showTitle,
          showTotal = _this$props5.showTotal,
          simple = _this$props5.simple,
          itemRender = _this$props5.itemRender,
          showPrevNextJumpers = _this$props5.showPrevNextJumpers,
          jumpPrevIcon = _this$props5.jumpPrevIcon,
          jumpNextIcon = _this$props5.jumpNextIcon,
          selectComponentClass = _this$props5.selectComponentClass,
          selectPrefixCls = _this$props5.selectPrefixCls,
          pageSizeOptions = _this$props5.pageSizeOptions;
      var _this$state = this.state,
          current = _this$state.current,
          pageSize = _this$state.pageSize,
          currentInputValue = _this$state.currentInputValue; // When hideOnSinglePage is true and there is only 1 page, hide the pager

      if (hideOnSinglePage === true && total <= pageSize) {
        return null;
      }

      var allPages = calculatePage(undefined, this.state, this.props);
      var pagerList = [];
      var jumpPrev = null;
      var jumpNext = null;
      var firstPager = null;
      var lastPager = null;
      var gotoButton = null;
      var goButton = showQuickJumper && showQuickJumper.goButton;
      var pageBufferSize = showLessItems ? 1 : 2;
      var prevPage = current - 1 > 0 ? current - 1 : 0;
      var nextPage = current + 1 < allPages ? current + 1 : allPages;
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          // eslint-disable-next-line no-param-reassign
          prev[key] = _this2.props[key];
        }

        return prev;
      }, {});

      if (simple) {
        if (goButton) {
          if (typeof goButton === 'boolean') {
            gotoButton = /*#__PURE__*/react.createElement("button", {
              type: "button",
              onClick: this.handleGoTO,
              onKeyUp: this.handleGoTO
            }, locale.jump_to_confirm);
          } else {
            gotoButton = /*#__PURE__*/react.createElement("span", {
              onClick: this.handleGoTO,
              onKeyUp: this.handleGoTO
            }, goButton);
          }

          gotoButton = /*#__PURE__*/react.createElement("li", {
            title: showTitle ? "".concat(locale.jump_to).concat(current, "/").concat(allPages) : null,
            className: "".concat(prefixCls, "-simple-pager")
          }, gotoButton);
        }

        return /*#__PURE__*/react.createElement("ul", (0,esm_extends/* default */.Z)({
          className: classnames_default()(prefixCls, "".concat(prefixCls, "-simple"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled), className),
          style: style,
          ref: this.savePaginationNode
        }, dataOrAriaAttributeProps), /*#__PURE__*/react.createElement("li", {
          title: showTitle ? locale.prev_page : null,
          onClick: this.prev,
          tabIndex: this.hasPrev() ? 0 : null,
          onKeyPress: this.runIfEnterPrev,
          className: classnames_default()("".concat(prefixCls, "-prev"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), !this.hasPrev())),
          "aria-disabled": !this.hasPrev()
        }, this.renderPrev(prevPage)), /*#__PURE__*/react.createElement("li", {
          title: showTitle ? "".concat(current, "/").concat(allPages) : null,
          className: "".concat(prefixCls, "-simple-pager")
        }, /*#__PURE__*/react.createElement("input", {
          type: "text",
          value: currentInputValue,
          disabled: disabled,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onChange: this.handleKeyUp,
          size: "3"
        }), /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-slash")
        }, "/"), allPages), /*#__PURE__*/react.createElement("li", {
          title: showTitle ? locale.next_page : null,
          onClick: this.next,
          tabIndex: this.hasPrev() ? 0 : null,
          onKeyPress: this.runIfEnterNext,
          className: classnames_default()("".concat(prefixCls, "-next"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), !this.hasNext())),
          "aria-disabled": !this.hasNext()
        }, this.renderNext(nextPage)), gotoButton);
      }

      if (allPages <= 3 + pageBufferSize * 2) {
        var pagerProps = {
          locale: locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          showTitle: showTitle,
          itemRender: itemRender
        };

        if (!allPages) {
          pagerList.push( /*#__PURE__*/react.createElement(es_Pager, (0,esm_extends/* default */.Z)({}, pagerProps, {
            key: "noPager",
            page: 1,
            className: "".concat(prefixCls, "-item-disabled")
          })));
        }

        for (var i = 1; i <= allPages; i += 1) {
          var active = current === i;
          pagerList.push( /*#__PURE__*/react.createElement(es_Pager, (0,esm_extends/* default */.Z)({}, pagerProps, {
            key: i,
            page: i,
            active: active
          })));
        }
      } else {
        var prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
        var nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;

        if (showPrevNextJumpers) {
          jumpPrev = /*#__PURE__*/react.createElement("li", {
            title: showTitle ? prevItemTitle : null,
            key: "prev",
            onClick: this.jumpPrev,
            tabIndex: "0",
            onKeyPress: this.runIfEnterJumpPrev,
            className: classnames_default()("".concat(prefixCls, "-jump-prev"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
          }, itemRender(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(jumpPrevIcon, 'prev page')));
          jumpNext = /*#__PURE__*/react.createElement("li", {
            title: showTitle ? nextItemTitle : null,
            key: "next",
            tabIndex: "0",
            onClick: this.jumpNext,
            onKeyPress: this.runIfEnterJumpNext,
            className: classnames_default()("".concat(prefixCls, "-jump-next"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
          }, itemRender(this.getJumpNextPage(), 'jump-next', this.getItemIcon(jumpNextIcon, 'next page')));
        }

        lastPager = /*#__PURE__*/react.createElement(es_Pager, {
          locale: locale,
          last: true,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: allPages,
          page: allPages,
          active: false,
          showTitle: showTitle,
          itemRender: itemRender
        });
        firstPager = /*#__PURE__*/react.createElement(es_Pager, {
          locale: locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: 1,
          page: 1,
          active: false,
          showTitle: showTitle,
          itemRender: itemRender
        });
        var left = Math.max(1, current - pageBufferSize);
        var right = Math.min(current + pageBufferSize, allPages);

        if (current - 1 <= pageBufferSize) {
          right = 1 + pageBufferSize * 2;
        }

        if (allPages - current <= pageBufferSize) {
          left = allPages - pageBufferSize * 2;
        }

        for (var _i = left; _i <= right; _i += 1) {
          var _active = current === _i;

          pagerList.push( /*#__PURE__*/react.createElement(es_Pager, {
            locale: locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: _i,
            page: _i,
            active: _active,
            showTitle: showTitle,
            itemRender: itemRender
          }));
        }

        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
          pagerList[0] = /*#__PURE__*/(0,react.cloneElement)(pagerList[0], {
            className: "".concat(prefixCls, "-item-after-jump-prev")
          });
          pagerList.unshift(jumpPrev);
        }

        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
          pagerList[pagerList.length - 1] = /*#__PURE__*/(0,react.cloneElement)(pagerList[pagerList.length - 1], {
            className: "".concat(prefixCls, "-item-before-jump-next")
          });
          pagerList.push(jumpNext);
        }

        if (left !== 1) {
          pagerList.unshift(firstPager);
        }

        if (right !== allPages) {
          pagerList.push(lastPager);
        }
      }

      var totalText = null;

      if (showTotal) {
        totalText = /*#__PURE__*/react.createElement("li", {
          className: "".concat(prefixCls, "-total-text")
        }, showTotal(total, [total === 0 ? 0 : (current - 1) * pageSize + 1, current * pageSize > total ? total : current * pageSize]));
      }

      var prevDisabled = !this.hasPrev() || !allPages;
      var nextDisabled = !this.hasNext() || !allPages;
      return /*#__PURE__*/react.createElement("ul", (0,esm_extends/* default */.Z)({
        className: classnames_default()(prefixCls, className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled)),
        style: style,
        unselectable: "unselectable",
        ref: this.savePaginationNode
      }, dataOrAriaAttributeProps), totalText, /*#__PURE__*/react.createElement("li", {
        title: showTitle ? locale.prev_page : null,
        onClick: this.prev,
        tabIndex: prevDisabled ? null : 0,
        onKeyPress: this.runIfEnterPrev,
        className: classnames_default()("".concat(prefixCls, "-prev"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
        "aria-disabled": prevDisabled
      }, this.renderPrev(prevPage)), pagerList, /*#__PURE__*/react.createElement("li", {
        title: showTitle ? locale.next_page : null,
        onClick: this.next,
        tabIndex: nextDisabled ? null : 0,
        onKeyPress: this.runIfEnterNext,
        className: classnames_default()("".concat(prefixCls, "-next"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
        "aria-disabled": nextDisabled
      }, this.renderNext(nextPage)), /*#__PURE__*/react.createElement(es_Options, {
        disabled: disabled,
        locale: locale,
        rootPrefixCls: prefixCls,
        selectComponentClass: selectComponentClass,
        selectPrefixCls: selectPrefixCls,
        changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
        current: current,
        pageSize: pageSize,
        pageSizeOptions: pageSizeOptions,
        quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
        goButton: goButton
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var newState = {};

      if ('current' in props) {
        newState.current = props.current;

        if (props.current !== prevState.current) {
          newState.currentInputValue = newState.current;
        }
      }

      if ('pageSize' in props && props.pageSize !== prevState.pageSize) {
        var current = prevState.current;
        var newCurrent = calculatePage(props.pageSize, prevState, props);
        current = current > newCurrent ? newCurrent : current;

        if (!('current' in props)) {
          newState.current = current;
          newState.currentInputValue = current;
        }

        newState.pageSize = props.pageSize;
      }

      return newState;
    }
  }]);

  return Pagination;
}(react.Component);

Pagination.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: noop,
  className: '',
  selectPrefixCls: 'rc-select',
  prefixCls: 'rc-pagination',
  selectComponentClass: null,
  hideOnSinglePage: false,
  showPrevNextJumpers: true,
  showQuickJumper: false,
  showLessItems: false,
  showTitle: true,
  onShowSizeChange: noop,
  locale: zh_CN/* default */.Z,
  style: {},
  itemRender: defaultItemRender,
  totalBoundaryShowSizeChanger: 50
};
/* harmony default export */ const es_Pagination = (Pagination);
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/index.js


/***/ }),

/***/ 13283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96156);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28991);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81253);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90484);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42550);
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38299);




var _excluded = ["colSpan", "rowSpan", "style", "className"];





function isRenderCell(data) {
  return data && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(data) === 'object' && !Array.isArray(data) && ! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(data);
}

function isRefComponent(component) {
  // String tag component also support ref
  if (typeof component === 'string') {
    return true;
  }

  return (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__/* .supportRef */ .Yr)(component);
}

function Cell(_ref, ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      record = _ref.record,
      index = _ref.index,
      dataIndex = _ref.dataIndex,
      render = _ref.render,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'td' : _ref$component,
      colSpan = _ref.colSpan,
      rowSpan = _ref.rowSpan,
      fixLeft = _ref.fixLeft,
      fixRight = _ref.fixRight,
      firstFixLeft = _ref.firstFixLeft,
      lastFixLeft = _ref.lastFixLeft,
      firstFixRight = _ref.firstFixRight,
      lastFixRight = _ref.lastFixRight,
      appendNode = _ref.appendNode,
      _ref$additionalProps = _ref.additionalProps,
      additionalProps = _ref$additionalProps === void 0 ? {} : _ref$additionalProps,
      ellipsis = _ref.ellipsis,
      align = _ref.align,
      rowType = _ref.rowType,
      isSticky = _ref.isSticky;
  var cellPrefixCls = "".concat(prefixCls, "-cell"); // ==================== Child Node ====================

  var cellProps;
  var childNode;

  if (children) {
    childNode = children;
  } else {
    var value = (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_4__/* .getPathValue */ .aM)(record, dataIndex); // Customize render node

    childNode = value;

    if (render) {
      var renderData = render(value, record, index);

      if (isRenderCell(renderData)) {
        childNode = renderData.children;
        cellProps = renderData.props;
      } else {
        childNode = renderData;
      }
    }
  } // Not crash if final `childNode` is not validate ReactNode


  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(childNode) === 'object' && !Array.isArray(childNode) && ! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(childNode)) {
    childNode = null;
  }

  if (ellipsis && (lastFixLeft || firstFixRight)) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "".concat(cellPrefixCls, "-content")
    }, childNode);
  }

  var _ref2 = cellProps || {},
      cellColSpan = _ref2.colSpan,
      cellRowSpan = _ref2.rowSpan,
      cellStyle = _ref2.style,
      cellClassName = _ref2.className,
      restCellProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_ref2, _excluded);

  var mergedColSpan = cellColSpan !== undefined ? cellColSpan : colSpan;
  var mergedRowSpan = cellRowSpan !== undefined ? cellRowSpan : rowSpan;

  if (mergedColSpan === 0 || mergedRowSpan === 0) {
    return null;
  } // ====================== Fixed =======================


  var fixedStyle = {};
  var isFixLeft = typeof fixLeft === 'number';
  var isFixRight = typeof fixRight === 'number';

  if (isFixLeft) {
    fixedStyle.position = 'sticky';
    fixedStyle.left = fixLeft;
  }

  if (isFixRight) {
    fixedStyle.position = 'sticky';
    fixedStyle.right = fixRight;
  } // ====================== Align =======================


  var alignStyle = {};

  if (align) {
    alignStyle.textAlign = align;
  } // ====================== Render ======================


  var title;
  var ellipsisConfig = ellipsis === true ? {
    showTitle: true
  } : ellipsis;

  if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
    if (typeof childNode === 'string' || typeof childNode === 'number') {
      title = childNode.toString();
    } else if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(childNode) && typeof childNode.props.children === 'string') {
      title = childNode.props.children;
    }
  }

  var componentProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
    title: title
  }, restCellProps), additionalProps), {}, {
    colSpan: mergedColSpan && mergedColSpan !== 1 ? mergedColSpan : null,
    rowSpan: mergedRowSpan && mergedRowSpan !== 1 ? mergedRowSpan : null,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(cellPrefixCls, className, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky), _classNames), additionalProps.className, cellClassName),
    style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({}, additionalProps.style), alignStyle), fixedStyle), cellStyle),
    ref: isRefComponent(Component) ? ref : null
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, componentProps, appendNode, childNode);
}

var RefCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Cell);
RefCell.displayName = 'Cell';
var MemoCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(RefCell, function (prev, next) {
  if (next.shouldCellUpdate) {
    return !next.shouldCellUpdate(next.record, prev.record);
  }

  return false;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemoCell);

/***/ }),

/***/ 47002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer_Summary)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-table/es/Footer/index.js
var Footer = __webpack_require__(80540);
// EXTERNAL MODULE: ./node_modules/rc-table/es/Cell/index.js
var Cell = __webpack_require__(13283);
// EXTERNAL MODULE: ./node_modules/rc-table/es/context/TableContext.js
var TableContext = __webpack_require__(88946);
// EXTERNAL MODULE: ./node_modules/rc-table/es/utils/fixUtil.js
var fixUtil = __webpack_require__(3991);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/Cell.js






function SummaryCell(_ref) {
  var className = _ref.className,
      index = _ref.index,
      children = _ref.children,
      _ref$colSpan = _ref.colSpan,
      colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan,
      rowSpan = _ref.rowSpan,
      align = _ref.align;

  var _React$useContext = react.useContext(TableContext/* default */.Z),
      prefixCls = _React$useContext.prefixCls,
      direction = _React$useContext.direction;

  var _React$useContext2 = react.useContext(Footer/* SummaryContext */.pr),
      scrollColumnIndex = _React$useContext2.scrollColumnIndex,
      stickyOffsets = _React$useContext2.stickyOffsets,
      flattenColumns = _React$useContext2.flattenColumns;

  var lastIndex = index + colSpan - 1;
  var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
  var fixedInfo = (0,fixUtil/* getCellFixedInfo */.v)(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction);
  return /*#__PURE__*/react.createElement(Cell/* default */.Z, (0,esm_extends/* default */.Z)({
    className: className,
    index: index,
    component: "td",
    prefixCls: prefixCls,
    record: null,
    dataIndex: null,
    align: align,
    render: function render() {
      return {
        children: children,
        props: {
          colSpan: mergedColSpan,
          rowSpan: rowSpan
        }
      };
    }
  }, fixedInfo));
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/Row.js

var _excluded = ["children"];

function FooterRow(_ref) {
  var children = _ref.children,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  return /*#__PURE__*/react.createElement("tr", props, children);
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/Summary.js


/**
 * Syntactic sugar. Do not support HOC.
 */

function Summary(_ref) {
  var children = _ref.children;
  return children;
}

Summary.Row = FooterRow;
Summary.Cell = SummaryCell;
/* harmony default export */ const Footer_Summary = (Summary);

/***/ }),

/***/ 80540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pr": () => (/* binding */ SummaryContext),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c8": () => (/* binding */ FooterComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _context_TableContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88946);
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47002);



var SummaryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

function Footer(_ref) {
  var children = _ref.children,
      stickyOffsets = _ref.stickyOffsets,
      flattenColumns = _ref.flattenColumns;
  var tableContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_context_TableContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
  var prefixCls = tableContext.prefixCls;
  var lastColumnIndex = flattenColumns.length - 1;
  var scrollColumn = flattenColumns[lastColumnIndex];
  var summaryContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return {
      stickyOffsets: stickyOffsets,
      flattenColumns: flattenColumns,
      scrollColumnIndex: (scrollColumn === null || scrollColumn === void 0 ? void 0 : scrollColumn.scrollbar) ? lastColumnIndex : null
    };
  }, [scrollColumn, flattenColumns, lastColumnIndex, stickyOffsets]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SummaryContext.Provider, {
    value: summaryContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot", {
    className: "".concat(prefixCls, "-summary")
  }, children));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
var FooterComponents = _Summary__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z;

/***/ }),

/***/ 59898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ INTERNAL_HOOKS),
  "Z": () => (/* binding */ es_Table)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(28991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(42921);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28481);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(90484);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(5110);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(96774);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js
var es = __webpack_require__(4084);
// EXTERNAL MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize = __webpack_require__(74204);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/sugar/ColumnGroup.js
/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ColumnGroup(_) {
  return null;
}

/* harmony default export */ const sugar_ColumnGroup = (ColumnGroup);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/sugar/Column.js
/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Column(_) {
  return null;
}

/* harmony default export */ const sugar_Column = (Column);
// EXTERNAL MODULE: ./node_modules/rc-table/es/Cell/index.js
var Cell = __webpack_require__(13283);
// EXTERNAL MODULE: ./node_modules/rc-table/es/context/TableContext.js
var TableContext = __webpack_require__(88946);
// EXTERNAL MODULE: ./node_modules/rc-table/es/utils/fixUtil.js
var fixUtil = __webpack_require__(3991);
// EXTERNAL MODULE: ./node_modules/rc-table/es/utils/valueUtil.js
var valueUtil = __webpack_require__(38299);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Header/HeaderRow.js







function HeaderRow(_ref) {
  var cells = _ref.cells,
      stickyOffsets = _ref.stickyOffsets,
      flattenColumns = _ref.flattenColumns,
      RowComponent = _ref.rowComponent,
      CellComponent = _ref.cellComponent,
      onHeaderRow = _ref.onHeaderRow,
      index = _ref.index;

  var _React$useContext = react.useContext(TableContext/* default */.Z),
      prefixCls = _React$useContext.prefixCls,
      direction = _React$useContext.direction;

  var rowProps;

  if (onHeaderRow) {
    rowProps = onHeaderRow(cells.map(function (cell) {
      return cell.column;
    }), index);
  }

  var columnsKey = (0,valueUtil/* getColumnsKey */.cz)(cells.map(function (cell) {
    return cell.column;
  }));
  return /*#__PURE__*/react.createElement(RowComponent, rowProps, cells.map(function (cell, cellIndex) {
    var column = cell.column;
    var fixedInfo = (0,fixUtil/* getCellFixedInfo */.v)(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction);
    var additionalProps;

    if (column && column.onHeaderCell) {
      additionalProps = cell.column.onHeaderCell(column);
    }

    return /*#__PURE__*/react.createElement(Cell/* default */.Z, (0,esm_extends/* default */.Z)({}, cell, {
      ellipsis: column.ellipsis,
      align: column.align,
      component: CellComponent,
      prefixCls: prefixCls,
      key: columnsKey[cellIndex]
    }, fixedInfo, {
      additionalProps: additionalProps,
      rowType: "header"
    }));
  }));
}

HeaderRow.displayName = 'HeaderRow';
/* harmony default export */ const Header_HeaderRow = (HeaderRow);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Header/Header.js




function parseHeaderRows(rootColumns) {
  var rows = [];

  function fillRowCells(columns, colIndex) {
    var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    // Init rows
    rows[rowIndex] = rows[rowIndex] || [];
    var currentColIndex = colIndex;
    var colSpans = columns.filter(Boolean).map(function (column) {
      var cell = {
        key: column.key,
        className: column.className || '',
        children: column.title,
        column: column,
        colStart: currentColIndex
      };
      var colSpan = 1;
      var subColumns = column.children;

      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce(function (total, count) {
          return total + count;
        }, 0);
        cell.hasSubColumns = true;
      }

      if ('colSpan' in column) {
        colSpan = column.colSpan;
      }

      if ('rowSpan' in column) {
        cell.rowSpan = column.rowSpan;
      }

      cell.colSpan = colSpan;
      cell.colEnd = cell.colStart + colSpan - 1;
      rows[rowIndex].push(cell);
      currentColIndex += colSpan;
      return colSpan;
    });
    return colSpans;
  } // Generate `rows` cell data


  fillRowCells(rootColumns, 0); // Handle `rowSpan`

  var rowCount = rows.length;

  var _loop = function _loop(rowIndex) {
    rows[rowIndex].forEach(function (cell) {
      if (!('rowSpan' in cell) && !cell.hasSubColumns) {
        // eslint-disable-next-line no-param-reassign
        cell.rowSpan = rowCount - rowIndex;
      }
    });
  };

  for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    _loop(rowIndex);
  }

  return rows;
}

function Header(_ref) {
  var stickyOffsets = _ref.stickyOffsets,
      columns = _ref.columns,
      flattenColumns = _ref.flattenColumns,
      onHeaderRow = _ref.onHeaderRow;

  var _React$useContext = react.useContext(TableContext/* default */.Z),
      prefixCls = _React$useContext.prefixCls,
      getComponent = _React$useContext.getComponent;

  var rows = react.useMemo(function () {
    return parseHeaderRows(columns);
  }, [columns]);
  var WrapperComponent = getComponent(['header', 'wrapper'], 'thead');
  var trComponent = getComponent(['header', 'row'], 'tr');
  var thComponent = getComponent(['header', 'cell'], 'th');
  return /*#__PURE__*/react.createElement(WrapperComponent, {
    className: "".concat(prefixCls, "-thead")
  }, rows.map(function (row, rowIndex) {
    var rowNode = /*#__PURE__*/react.createElement(Header_HeaderRow, {
      key: rowIndex,
      flattenColumns: flattenColumns,
      cells: row,
      stickyOffsets: stickyOffsets,
      rowComponent: trComponent,
      cellComponent: thComponent,
      onHeaderRow: onHeaderRow,
      index: rowIndex
    });
    return rowNode;
  }));
}

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/BodyContext.js

var BodyContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ const context_BodyContext = (BodyContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/ExpandedRow.js




function ExpandedRow(_ref) {
  var prefixCls = _ref.prefixCls,
      children = _ref.children,
      Component = _ref.component,
      cellComponent = _ref.cellComponent,
      fixHeader = _ref.fixHeader,
      fixColumn = _ref.fixColumn,
      horizonScroll = _ref.horizonScroll,
      className = _ref.className,
      expanded = _ref.expanded,
      componentWidth = _ref.componentWidth,
      colSpan = _ref.colSpan;

  var _React$useContext = react.useContext(TableContext/* default */.Z),
      scrollbarSize = _React$useContext.scrollbarSize; // Cache render node


  return react.useMemo(function () {
    var contentNode = children;

    if (fixColumn) {
      contentNode = /*#__PURE__*/react.createElement("div", {
        style: {
          width: componentWidth - (fixHeader ? scrollbarSize : 0),
          position: 'sticky',
          left: 0,
          overflow: 'hidden'
        },
        className: "".concat(prefixCls, "-expanded-row-fixed")
      }, contentNode);
    }

    return /*#__PURE__*/react.createElement(Component, {
      className: className,
      style: {
        display: expanded ? null : 'none'
      }
    }, /*#__PURE__*/react.createElement(Cell/* default */.Z, {
      component: cellComponent,
      prefixCls: prefixCls,
      colSpan: colSpan
    }, contentNode));
  }, [children, Component, fixHeader, horizonScroll, className, expanded, componentWidth, colSpan, scrollbarSize]);
}

/* harmony default export */ const Body_ExpandedRow = (ExpandedRow);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/BodyRow.js











function BodyRow(props) {
  var className = props.className,
      style = props.style,
      record = props.record,
      index = props.index,
      rowKey = props.rowKey,
      getRowKey = props.getRowKey,
      rowExpandable = props.rowExpandable,
      expandedKeys = props.expandedKeys,
      onRow = props.onRow,
      _props$indent = props.indent,
      indent = _props$indent === void 0 ? 0 : _props$indent,
      RowComponent = props.rowComponent,
      cellComponent = props.cellComponent,
      childrenColumnName = props.childrenColumnName;

  var _React$useContext = react.useContext(TableContext/* default */.Z),
      prefixCls = _React$useContext.prefixCls,
      fixedInfoList = _React$useContext.fixedInfoList;

  var _React$useContext2 = react.useContext(context_BodyContext),
      fixHeader = _React$useContext2.fixHeader,
      fixColumn = _React$useContext2.fixColumn,
      horizonScroll = _React$useContext2.horizonScroll,
      componentWidth = _React$useContext2.componentWidth,
      flattenColumns = _React$useContext2.flattenColumns,
      expandableType = _React$useContext2.expandableType,
      expandRowByClick = _React$useContext2.expandRowByClick,
      onTriggerExpand = _React$useContext2.onTriggerExpand,
      rowClassName = _React$useContext2.rowClassName,
      expandedRowClassName = _React$useContext2.expandedRowClassName,
      indentSize = _React$useContext2.indentSize,
      expandIcon = _React$useContext2.expandIcon,
      expandedRowRender = _React$useContext2.expandedRowRender,
      expandIconColumnIndex = _React$useContext2.expandIconColumnIndex;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      expandRended = _React$useState2[0],
      setExpandRended = _React$useState2[1];

  var expanded = expandedKeys && expandedKeys.has(props.recordKey);
  react.useEffect(function () {
    if (expanded) {
      setExpandRended(true);
    }
  }, [expanded]);
  var rowSupportExpand = expandableType === 'row' && (!rowExpandable || rowExpandable(record)); // Only when row is not expandable and `children` exist in record

  var nestExpandable = expandableType === 'nest';
  var hasNestChildren = childrenColumnName && record && record[childrenColumnName];
  var mergedExpandable = rowSupportExpand || nestExpandable; // =========================== onRow ===========================

  var additionalProps;

  if (onRow) {
    additionalProps = onRow(record, index);
  }

  var onClick = function onClick(event) {
    if (expandRowByClick && mergedExpandable) {
      onTriggerExpand(record, event);
    }

    if (additionalProps && additionalProps.onClick) {
      var _additionalProps;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_additionalProps = additionalProps).onClick.apply(_additionalProps, [event].concat(args));
    }
  }; // ======================== Base tr row ========================


  var computeRowClassName;

  if (typeof rowClassName === 'string') {
    computeRowClassName = rowClassName;
  } else if (typeof rowClassName === 'function') {
    computeRowClassName = rowClassName(record, index, indent);
  }

  var columnsKey = (0,valueUtil/* getColumnsKey */.cz)(flattenColumns);
  var baseRowNode = /*#__PURE__*/react.createElement(RowComponent, (0,esm_extends/* default */.Z)({}, additionalProps, {
    "data-row-key": rowKey,
    className: classnames_default()(className, "".concat(prefixCls, "-row"), "".concat(prefixCls, "-row-level-").concat(indent), computeRowClassName, additionalProps && additionalProps.className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), additionalProps ? additionalProps.style : null),
    onClick: onClick
  }), flattenColumns.map(function (column, colIndex) {
    var render = column.render,
        dataIndex = column.dataIndex,
        columnClassName = column.className;
    var key = columnsKey[colIndex];
    var fixedInfo = fixedInfoList[colIndex]; // ============= Used for nest expandable =============

    var appendCellNode;

    if (colIndex === (expandIconColumnIndex || 0) && nestExpandable) {
      appendCellNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
        style: {
          paddingLeft: "".concat(indentSize * indent, "px")
        },
        className: "".concat(prefixCls, "-row-indent indent-level-").concat(indent)
      }), expandIcon({
        prefixCls: prefixCls,
        expanded: expanded,
        expandable: hasNestChildren,
        record: record,
        onExpand: onTriggerExpand
      }));
    }

    var additionalCellProps;

    if (column.onCell) {
      additionalCellProps = column.onCell(record, index);
    }

    return /*#__PURE__*/react.createElement(Cell/* default */.Z, (0,esm_extends/* default */.Z)({
      className: columnClassName,
      ellipsis: column.ellipsis,
      align: column.align,
      component: cellComponent,
      prefixCls: prefixCls,
      key: key,
      record: record,
      index: index,
      dataIndex: dataIndex,
      render: render,
      shouldCellUpdate: column.shouldCellUpdate
    }, fixedInfo, {
      appendNode: appendCellNode,
      additionalProps: additionalCellProps
    }));
  })); // ======================== Expand Row =========================

  var expandRowNode;

  if (rowSupportExpand && (expandRended || expanded)) {
    var expandContent = expandedRowRender(record, index, indent + 1, expanded);
    var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
    expandRowNode = /*#__PURE__*/react.createElement(Body_ExpandedRow, {
      expanded: expanded,
      className: classnames_default()("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName),
      prefixCls: prefixCls,
      fixHeader: fixHeader,
      fixColumn: fixColumn,
      horizonScroll: horizonScroll,
      component: RowComponent,
      componentWidth: componentWidth,
      cellComponent: cellComponent,
      colSpan: flattenColumns.length
    }, expandContent);
  } // ========================= Nest Row ==========================


  var nestRowNode;

  if (hasNestChildren && expanded) {
    nestRowNode = (record[childrenColumnName] || []).map(function (subRecord, subIndex) {
      var subKey = getRowKey(subRecord, subIndex);
      return /*#__PURE__*/react.createElement(BodyRow, (0,esm_extends/* default */.Z)({}, props, {
        key: subKey,
        rowKey: subKey,
        record: subRecord,
        recordKey: subKey,
        index: subIndex,
        indent: indent + 1
      }));
    });
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, baseRowNode, expandRowNode, nestRowNode);
}

BodyRow.displayName = 'BodyRow';
/* harmony default export */ const Body_BodyRow = (BodyRow);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/ResizeContext.js

var ResizeContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ const context_ResizeContext = (ResizeContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/MeasureCell.js


function MeasureCell(_ref) {
  var columnKey = _ref.columnKey,
      onColumnResize = _ref.onColumnResize;
  var cellRef = react.useRef();
  react.useEffect(function () {
    if (cellRef.current) {
      onColumnResize(columnKey, cellRef.current.offsetWidth);
    }
  }, []);
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: function onResize(_ref2) {
      var offsetWidth = _ref2.offsetWidth;
      onColumnResize(columnKey, offsetWidth);
    }
  }, /*#__PURE__*/react.createElement("td", {
    ref: cellRef,
    style: {
      padding: 0,
      border: 0,
      height: 0
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      height: 0,
      overflow: 'hidden'
    }
  }, "\xA0")));
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/index.js









function Body(_ref) {
  var data = _ref.data,
      getRowKey = _ref.getRowKey,
      measureColumnWidth = _ref.measureColumnWidth,
      expandedKeys = _ref.expandedKeys,
      onRow = _ref.onRow,
      rowExpandable = _ref.rowExpandable,
      emptyNode = _ref.emptyNode,
      childrenColumnName = _ref.childrenColumnName;

  var _React$useContext = react.useContext(context_ResizeContext),
      onColumnResize = _React$useContext.onColumnResize;

  var _React$useContext2 = react.useContext(TableContext/* default */.Z),
      prefixCls = _React$useContext2.prefixCls,
      getComponent = _React$useContext2.getComponent;

  var _React$useContext3 = react.useContext(context_BodyContext),
      fixHeader = _React$useContext3.fixHeader,
      horizonScroll = _React$useContext3.horizonScroll,
      flattenColumns = _React$useContext3.flattenColumns,
      componentWidth = _React$useContext3.componentWidth;

  return react.useMemo(function () {
    var WrapperComponent = getComponent(['body', 'wrapper'], 'tbody');
    var trComponent = getComponent(['body', 'row'], 'tr');
    var tdComponent = getComponent(['body', 'cell'], 'td');
    var rows;

    if (data.length) {
      rows = data.map(function (record, index) {
        var key = getRowKey(record, index);
        return /*#__PURE__*/react.createElement(Body_BodyRow, {
          key: key,
          rowKey: key,
          record: record,
          recordKey: key,
          index: index,
          rowComponent: trComponent,
          cellComponent: tdComponent,
          expandedKeys: expandedKeys,
          onRow: onRow,
          getRowKey: getRowKey,
          rowExpandable: rowExpandable,
          childrenColumnName: childrenColumnName
        });
      });
    } else {
      rows = /*#__PURE__*/react.createElement(Body_ExpandedRow, {
        expanded: true,
        className: "".concat(prefixCls, "-placeholder"),
        prefixCls: prefixCls,
        fixHeader: fixHeader,
        fixColumn: horizonScroll,
        horizonScroll: horizonScroll,
        component: trComponent,
        componentWidth: componentWidth,
        cellComponent: tdComponent,
        colSpan: flattenColumns.length
      }, emptyNode);
    }

    var columnsKey = (0,valueUtil/* getColumnsKey */.cz)(flattenColumns);
    return /*#__PURE__*/react.createElement(WrapperComponent, {
      className: "".concat(prefixCls, "-tbody")
    }, measureColumnWidth && /*#__PURE__*/react.createElement("tr", {
      "aria-hidden": "true",
      className: "".concat(prefixCls, "-measure-row"),
      style: {
        height: 0,
        fontSize: 0
      }
    }, columnsKey.map(function (columnKey) {
      return /*#__PURE__*/react.createElement(MeasureCell, {
        key: columnKey,
        columnKey: columnKey,
        onColumnResize: onColumnResize
      });
    })), rows);
  }, [data, prefixCls, onRow, measureColumnWidth, expandedKeys, getRowKey, getComponent, componentWidth, emptyNode, flattenColumns]);
}

var MemoBody = /*#__PURE__*/react.memo(Body);
MemoBody.displayName = 'Body';
/* harmony default export */ const es_Body = (MemoBody);
// EXTERNAL MODULE: ./node_modules/rc-table/es/hooks/useColumns.js
var useColumns = __webpack_require__(75797);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useFrame.js


/**
 * Execute code before next frame but async
 */

function useLayoutState(defaultState) {
  var stateRef = (0,react.useRef)(defaultState);

  var _useState = (0,react.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      forceUpdate = _useState2[1];

  var lastPromiseRef = (0,react.useRef)(null);
  var updateBatchRef = (0,react.useRef)([]);

  function setFrameState(updater) {
    updateBatchRef.current.push(updater);
    var promise = Promise.resolve();
    lastPromiseRef.current = promise;
    promise.then(function () {
      if (lastPromiseRef.current === promise) {
        var prevBatch = updateBatchRef.current;
        var prevState = stateRef.current;
        updateBatchRef.current = [];
        prevBatch.forEach(function (batchUpdater) {
          stateRef.current = batchUpdater(stateRef.current);
        });
        lastPromiseRef.current = null;

        if (prevState !== stateRef.current) {
          forceUpdate({});
        }
      }
    });
  }

  (0,react.useEffect)(function () {
    return function () {
      lastPromiseRef.current = null;
    };
  }, []);
  return [stateRef.current, setFrameState];
}
/** Lock frame, when frame pass reset the lock. */

function useTimeoutLock(defaultState) {
  var frameRef = (0,react.useRef)(defaultState || null);
  var timeoutRef = (0,react.useRef)();

  function cleanUp() {
    window.clearTimeout(timeoutRef.current);
  }

  function setState(newState) {
    frameRef.current = newState;
    cleanUp();
    timeoutRef.current = window.setTimeout(function () {
      frameRef.current = null;
      timeoutRef.current = undefined;
    }, 100);
  }

  function getState() {
    return frameRef.current;
  }

  (0,react.useEffect)(function () {
    return cleanUp;
  }, []);
  return [setState, getState];
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useStickyOffsets.js

/**
 * Get sticky column offset width
 */

function useStickyOffsets(colWidths, columnCount, direction) {
  var stickyOffsets = (0,react.useMemo)(function () {
    var leftOffsets = [];
    var rightOffsets = [];
    var left = 0;
    var right = 0;

    for (var start = 0; start < columnCount; start += 1) {
      if (direction === 'rtl') {
        // Left offset
        rightOffsets[start] = right;
        right += colWidths[start] || 0; // Right offset

        var end = columnCount - start - 1;
        leftOffsets[end] = left;
        left += colWidths[end] || 0;
      } else {
        // Left offset
        leftOffsets[start] = left;
        left += colWidths[start] || 0; // Right offset

        var _end = columnCount - start - 1;

        rightOffsets[_end] = right;
        right += colWidths[_end] || 0;
      }
    }

    return {
      left: leftOffsets,
      right: rightOffsets
    };
  }, [colWidths, columnCount, direction]);
  return stickyOffsets;
}

/* harmony default export */ const hooks_useStickyOffsets = (useStickyOffsets);
// EXTERNAL MODULE: ./node_modules/rc-table/es/utils/legacyUtil.js
var legacyUtil = __webpack_require__(62978);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/ColGroup.js




function ColGroup(_ref) {
  var colWidths = _ref.colWidths,
      columns = _ref.columns,
      columCount = _ref.columCount;
  var cols = [];
  var len = columCount || columns.length; // Only insert col with width & additional props
  // Skip if rest col do not have any useful info

  var mustInsert = false;

  for (var i = len - 1; i >= 0; i -= 1) {
    var width = colWidths[i];
    var column = columns && columns[i];
    var additionalProps = column && column[legacyUtil/* INTERNAL_COL_DEFINE */.vP];

    if (width || additionalProps || mustInsert) {
      cols.unshift( /*#__PURE__*/react.createElement("col", (0,esm_extends/* default */.Z)({
        key: i,
        style: {
          width: width
        }
      }, additionalProps)));
      mustInsert = true;
    }
  }

  return /*#__PURE__*/react.createElement("colgroup", null, cols);
}

/* harmony default export */ const es_ColGroup = (ColGroup);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Panel/index.js


function Panel(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    className: className
  }, children);
}

/* harmony default export */ const es_Panel = (Panel);
// EXTERNAL MODULE: ./node_modules/rc-table/es/Footer/index.js
var Footer = __webpack_require__(80540);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/utils/expandUtil.js



function renderExpandIcon(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      record = _ref.record,
      onExpand = _ref.onExpand,
      expanded = _ref.expanded,
      expandable = _ref.expandable;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");

  if (!expandable) {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()(expandClassName, "".concat(prefixCls, "-row-spaced"))
    });
  }

  var onClick = function onClick(event) {
    onExpand(record, event);
    event.stopPropagation();
  };

  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(expandClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _classNames)),
    onClick: onClick
  });
}
function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
  var keys = [];

  function dig(list) {
    (list || []).forEach(function (item, index) {
      keys.push(getRowKey(item, index));
      dig(item[childrenColumnName]);
    });
  }

  dig(data);
  return keys;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__(64019);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/css.js
/* eslint-disable no-nested-ternary */
var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset/;
var removePixel = {
  left: true,
  top: true
};
var floatMap = {
  cssFloat: 1,
  styleFloat: 1,
  float: 1
};

function getComputedStyle(node) {
  return node.nodeType === 1 ? node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
}

function getStyleValue(node, type, value) {
  type = type.toLowerCase();

  if (value === 'auto') {
    if (type === 'height') {
      return node.offsetHeight;
    }

    if (type === 'width') {
      return node.offsetWidth;
    }
  }

  if (!(type in removePixel)) {
    removePixel[type] = PIXEL_PATTERN.test(type);
  }

  return removePixel[type] ? parseFloat(value) || 0 : value;
}

function get(node, name) {
  var length = arguments.length;
  var style = getComputedStyle(node);
  name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;
  return length === 1 ? style : getStyleValue(node, name, style[name] || node.style[name]);
}
function set(node, name, value) {
  var length = arguments.length;
  name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;

  if (length === 3) {
    if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
      value = "".concat(value, "px");
    }

    node.style[name] = value; // Number

    return value;
  }

  for (var x in name) {
    if (name.hasOwnProperty(x)) {
      set(node, x, name[x]);
    }
  }

  return getComputedStyle(node);
}
function getOuterWidth(el) {
  if (el === document.body) {
    return document.documentElement.clientWidth;
  }

  return el.offsetWidth;
}
function getOuterHeight(el) {
  if (el === document.body) {
    return window.innerHeight || document.documentElement.clientHeight;
  }

  return el.offsetHeight;
}
function getDocSize() {
  var width = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
  var height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  return {
    width: width,
    height: height
  };
}
function getClientSize() {
  var width = document.documentElement.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width: width,
    height: height
  };
}
function getScroll() {
  return {
    scrollLeft: Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
    scrollTop: Math.max(document.documentElement.scrollTop, document.body.scrollTop)
  };
}
function getOffset(node) {
  var box = node.getBoundingClientRect();
  var docElem = document.documentElement; // < ie8 不支持 win.pageXOffset, 则使用 docElem.scrollLeft

  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/stickyScrollBar.js











var StickyScrollBar = function StickyScrollBar(_ref, ref) {
  var _scrollBodyRef$curren, _scrollBodyRef$curren2;

  var scrollBodyRef = _ref.scrollBodyRef,
      onScroll = _ref.onScroll,
      offsetScroll = _ref.offsetScroll,
      container = _ref.container;

  var _React$useContext = react.useContext(TableContext/* default */.Z),
      prefixCls = _React$useContext.prefixCls;

  var bodyScrollWidth = ((_scrollBodyRef$curren = scrollBodyRef.current) === null || _scrollBodyRef$curren === void 0 ? void 0 : _scrollBodyRef$curren.scrollWidth) || 0;
  var bodyWidth = ((_scrollBodyRef$curren2 = scrollBodyRef.current) === null || _scrollBodyRef$curren2 === void 0 ? void 0 : _scrollBodyRef$curren2.clientWidth) || 0;
  var scrollBarWidth = bodyScrollWidth && bodyWidth * (bodyWidth / bodyScrollWidth);
  var scrollBarRef = react.useRef();

  var _useLayoutState = useLayoutState({
    scrollLeft: 0,
    isHiddenScrollBar: false
  }),
      _useLayoutState2 = (0,slicedToArray/* default */.Z)(_useLayoutState, 2),
      scrollState = _useLayoutState2[0],
      setScrollState = _useLayoutState2[1];

  var refState = react.useRef({
    delta: 0,
    x: 0
  });

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      isActive = _React$useState2[0],
      setActive = _React$useState2[1];

  var onMouseUp = function onMouseUp() {
    setActive(false);
  };

  var onMouseDown = function onMouseDown(event) {
    event.persist();
    refState.current.delta = event.pageX - scrollState.scrollLeft;
    refState.current.x = 0;
    setActive(true);
    event.preventDefault();
  };

  var onMouseMove = function onMouseMove(event) {
    var _window;

    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
    var _ref2 = event || ((_window = window) === null || _window === void 0 ? void 0 : _window.event),
        buttons = _ref2.buttons;

    if (!isActive || buttons === 0) {
      // If out body mouse up, we can set isActive false when mouse move
      if (isActive) {
        setActive(false);
      }

      return;
    }

    var left = refState.current.x + event.pageX - refState.current.x - refState.current.delta;

    if (left <= 0) {
      left = 0;
    }

    if (left + scrollBarWidth >= bodyWidth) {
      left = bodyWidth - scrollBarWidth;
    }

    onScroll({
      scrollLeft: left / bodyWidth * (bodyScrollWidth + 2)
    });
    refState.current.x = event.pageX;
  };

  var onContainerScroll = function onContainerScroll() {
    var tableOffsetTop = getOffset(scrollBodyRef.current).top;
    var tableBottomOffset = tableOffsetTop + scrollBodyRef.current.offsetHeight;
    var currentClientOffset = container === window ? document.documentElement.scrollTop + window.innerHeight : getOffset(container).top + container.clientHeight;

    if (tableBottomOffset - (0,getScrollBarSize/* default */.Z)() <= currentClientOffset || tableOffsetTop >= currentClientOffset - offsetScroll) {
      setScrollState(function (state) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          isHiddenScrollBar: true
        });
      });
    } else {
      setScrollState(function (state) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          isHiddenScrollBar: false
        });
      });
    }
  };

  var setScrollLeft = function setScrollLeft(left) {
    setScrollState(function (state) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
        scrollLeft: left / bodyScrollWidth * bodyWidth || 0
      });
    });
  };

  react.useImperativeHandle(ref, function () {
    return {
      setScrollLeft: setScrollLeft
    };
  });
  react.useEffect(function () {
    var onMouseUpListener = (0,addEventListener/* default */.Z)(document.body, 'mouseup', onMouseUp, false);
    var onMouseMoveListener = (0,addEventListener/* default */.Z)(document.body, 'mousemove', onMouseMove, false);
    onContainerScroll();
    return function () {
      onMouseUpListener.remove();
      onMouseMoveListener.remove();
    };
  }, [scrollBarWidth, isActive]);
  react.useEffect(function () {
    var onScrollListener = (0,addEventListener/* default */.Z)(container, 'scroll', onContainerScroll, false);
    var onResizeListener = (0,addEventListener/* default */.Z)(window, 'resize', onContainerScroll, false);
    return function () {
      onScrollListener.remove();
      onResizeListener.remove();
    };
  }, [container]);
  react.useEffect(function () {
    if (!scrollState.isHiddenScrollBar) {
      setScrollState(function (state) {
        var bodyNode = scrollBodyRef.current;

        if (!bodyNode) {
          return state;
        }

        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          scrollLeft: bodyNode.scrollLeft / bodyNode.scrollWidth * bodyNode.clientWidth
        });
      });
    }
  }, [scrollState.isHiddenScrollBar]);

  if (bodyScrollWidth <= bodyWidth || !scrollBarWidth || scrollState.isHiddenScrollBar) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    style: {
      height: (0,getScrollBarSize/* default */.Z)(),
      width: bodyWidth,
      bottom: offsetScroll
    },
    className: "".concat(prefixCls, "-sticky-scroll")
  }, /*#__PURE__*/react.createElement("div", {
    onMouseDown: onMouseDown,
    ref: scrollBarRef,
    className: classnames_default()("".concat(prefixCls, "-sticky-scroll-bar"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-sticky-scroll-bar-active"), isActive)),
    style: {
      width: "".concat(scrollBarWidth, "px"),
      transform: "translate3d(".concat(scrollState.scrollLeft, "px, 0, 0)")
    }
  }));
};

/* harmony default export */ const stickyScrollBar = (/*#__PURE__*/react.forwardRef(StickyScrollBar));
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useSticky.js


 // fix ssr render

var defaultContainer = (0,canUseDom/* default */.Z)() ? window : null;
/** Sticky header hooks */

function useSticky(sticky, prefixCls) {
  var _ref = (0,esm_typeof/* default */.Z)(sticky) === 'object' ? sticky : {},
      _ref$offsetHeader = _ref.offsetHeader,
      offsetHeader = _ref$offsetHeader === void 0 ? 0 : _ref$offsetHeader,
      _ref$offsetSummary = _ref.offsetSummary,
      offsetSummary = _ref$offsetSummary === void 0 ? 0 : _ref$offsetSummary,
      _ref$offsetScroll = _ref.offsetScroll,
      offsetScroll = _ref$offsetScroll === void 0 ? 0 : _ref$offsetScroll,
      _ref$getContainer = _ref.getContainer,
      getContainer = _ref$getContainer === void 0 ? function () {
    return defaultContainer;
  } : _ref$getContainer;

  var container = getContainer() || defaultContainer;
  return react.useMemo(function () {
    var isSticky = !!sticky;
    return {
      isSticky: isSticky,
      stickyClassName: isSticky ? "".concat(prefixCls, "-sticky-holder") : '',
      offsetHeader: offsetHeader,
      offsetSummary: offsetSummary,
      offsetScroll: offsetScroll,
      container: container
    };
  }, [offsetScroll, offsetHeader, offsetSummary, prefixCls, container]);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/FixedHolder/index.js




var _excluded = ["className", "noData", "columns", "flattenColumns", "colWidths", "columCount", "stickyOffsets", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName", "onScroll", "maxContentScroll", "children"];







function useColumnWidth(colWidths, columCount) {
  return (0,react.useMemo)(function () {
    var cloneColumns = [];

    for (var i = 0; i < columCount; i += 1) {
      var val = colWidths[i];

      if (val !== undefined) {
        cloneColumns[i] = val;
      } else {
        return null;
      }
    }

    return cloneColumns;
  }, [colWidths.join('_'), columCount]);
}

var FixedHolder = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      noData = _ref.noData,
      columns = _ref.columns,
      flattenColumns = _ref.flattenColumns,
      colWidths = _ref.colWidths,
      columCount = _ref.columCount,
      stickyOffsets = _ref.stickyOffsets,
      direction = _ref.direction,
      fixHeader = _ref.fixHeader,
      stickyTopOffset = _ref.stickyTopOffset,
      stickyBottomOffset = _ref.stickyBottomOffset,
      stickyClassName = _ref.stickyClassName,
      onScroll = _ref.onScroll,
      maxContentScroll = _ref.maxContentScroll,
      children = _ref.children,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  var _React$useContext = react.useContext(TableContext/* default */.Z),
      prefixCls = _React$useContext.prefixCls,
      scrollbarSize = _React$useContext.scrollbarSize,
      isSticky = _React$useContext.isSticky;

  var combinationScrollBarSize = isSticky && !fixHeader ? 0 : scrollbarSize; // Pass wheel to scroll event

  var scrollRef = react.useRef(null);
  var setScrollRef = react.useCallback(function (element) {
    (0,es_ref/* fillRef */.mH)(ref, element);
    (0,es_ref/* fillRef */.mH)(scrollRef, element);
  }, []);
  react.useEffect(function () {
    var _scrollRef$current;

    function onWheel(e) {
      var currentTarget = e.currentTarget,
          deltaX = e.deltaX;

      if (deltaX) {
        onScroll({
          currentTarget: currentTarget,
          scrollLeft: currentTarget.scrollLeft + deltaX
        });
        e.preventDefault();
      }
    }

    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.addEventListener('wheel', onWheel);
    return function () {
      var _scrollRef$current2;

      (_scrollRef$current2 = scrollRef.current) === null || _scrollRef$current2 === void 0 ? void 0 : _scrollRef$current2.removeEventListener('wheel', onWheel);
    };
  }, []); // Check if all flattenColumns has width

  var allFlattenColumnsWithWidth = react.useMemo(function () {
    return flattenColumns.every(function (column) {
      return column.width >= 0;
    });
  }, [flattenColumns]); // Add scrollbar column

  var lastColumn = flattenColumns[flattenColumns.length - 1];
  var ScrollBarColumn = {
    fixed: lastColumn ? lastColumn.fixed : null,
    scrollbar: true,
    onHeaderCell: function onHeaderCell() {
      return {
        className: "".concat(prefixCls, "-cell-scrollbar")
      };
    }
  };
  var columnsWithScrollbar = (0,react.useMemo)(function () {
    return combinationScrollBarSize ? [].concat((0,toConsumableArray/* default */.Z)(columns), [ScrollBarColumn]) : columns;
  }, [combinationScrollBarSize, columns]);
  var flattenColumnsWithScrollbar = (0,react.useMemo)(function () {
    return combinationScrollBarSize ? [].concat((0,toConsumableArray/* default */.Z)(flattenColumns), [ScrollBarColumn]) : flattenColumns;
  }, [combinationScrollBarSize, flattenColumns]); // Calculate the sticky offsets

  var headerStickyOffsets = (0,react.useMemo)(function () {
    var right = stickyOffsets.right,
        left = stickyOffsets.left;
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, stickyOffsets), {}, {
      left: direction === 'rtl' ? [].concat((0,toConsumableArray/* default */.Z)(left.map(function (width) {
        return width + combinationScrollBarSize;
      })), [0]) : left,
      right: direction === 'rtl' ? right : [].concat((0,toConsumableArray/* default */.Z)(right.map(function (width) {
        return width + combinationScrollBarSize;
      })), [0]),
      isSticky: isSticky
    });
  }, [combinationScrollBarSize, stickyOffsets, isSticky]);
  var mergedColumnWidth = useColumnWidth(colWidths, columCount);
  return /*#__PURE__*/react.createElement("div", {
    style: (0,objectSpread2/* default */.Z)({
      overflow: 'hidden'
    }, isSticky ? {
      top: stickyTopOffset,
      bottom: stickyBottomOffset
    } : {}),
    ref: setScrollRef,
    className: classnames_default()(className, (0,defineProperty/* default */.Z)({}, stickyClassName, !!stickyClassName))
  }, /*#__PURE__*/react.createElement("table", {
    style: {
      tableLayout: 'fixed',
      visibility: noData || mergedColumnWidth ? null : 'hidden'
    }
  }, (!noData || !maxContentScroll || allFlattenColumnsWithWidth) && /*#__PURE__*/react.createElement(es_ColGroup, {
    colWidths: mergedColumnWidth ? [].concat((0,toConsumableArray/* default */.Z)(mergedColumnWidth), [combinationScrollBarSize]) : [],
    columCount: columCount + 1,
    columns: flattenColumnsWithScrollbar
  }), children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    stickyOffsets: headerStickyOffsets,
    columns: columnsWithScrollbar,
    flattenColumns: flattenColumnsWithScrollbar
  }))));
});
FixedHolder.displayName = 'FixedHolder';
/* harmony default export */ const es_FixedHolder = (FixedHolder);
// EXTERNAL MODULE: ./node_modules/rc-table/es/Footer/Summary.js + 2 modules
var Summary = __webpack_require__(47002);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Table.js







/**
 * Feature:
 *  - fixed not need to set width
 *  - support `rowExpandable` to config row expand logic
 *  - add `summary` to support `() => ReactNode`
 *
 * Update:
 *  - `dataIndex` is `array[]` now
 *  - `expandable` wrap all the expand related props
 *
 * Removed:
 *  - expandIconAsCell
 *  - useFixedHeader
 *  - rowRef
 *  - columns[number].onCellClick
 *  - onRowClick
 *  - onRowDoubleClick
 *  - onRowMouseEnter
 *  - onRowMouseLeave
 *  - getBodyWrapper
 *  - bodyStyle
 *
 * Deprecated:
 *  - All expanded props, move into expandable
 */



























 // Used for conditions cache

var EMPTY_DATA = []; // Used for customize scroll

var EMPTY_SCROLL_TARGET = {};
var INTERNAL_HOOKS = 'rc-table-internal-hook';
var MemoTableContent = /*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (prev, next) {
  if (!shallowequal_default()(prev.props, next.props)) {
    return false;
  } // No additional render when pinged status change.
  // This is not a bug.


  return prev.pingLeft !== next.pingLeft || prev.pingRight !== next.pingRight;
});

function Table(props) {
  var _classNames;

  var prefixCls = props.prefixCls,
      className = props.className,
      rowClassName = props.rowClassName,
      style = props.style,
      data = props.data,
      rowKey = props.rowKey,
      scroll = props.scroll,
      tableLayout = props.tableLayout,
      direction = props.direction,
      title = props.title,
      footer = props.footer,
      summary = props.summary,
      id = props.id,
      showHeader = props.showHeader,
      components = props.components,
      emptyText = props.emptyText,
      onRow = props.onRow,
      onHeaderRow = props.onHeaderRow,
      internalHooks = props.internalHooks,
      transformColumns = props.transformColumns,
      internalRefs = props.internalRefs,
      sticky = props.sticky;
  var mergedData = data || EMPTY_DATA;
  var hasData = !!mergedData.length; // ===================== Warning ======================

  if (false) {} // ==================== Customize =====================


  var mergedComponents = react.useMemo(function () {
    return (0,valueUtil/* mergeObject */.Gm)(components, {});
  }, [components]);
  var getComponent = react.useCallback(function (path, defaultComponent) {
    return (0,valueUtil/* getPathValue */.aM)(mergedComponents, path) || defaultComponent;
  }, [mergedComponents]);
  var getRowKey = react.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }

    return function (record) {
      var key = record && record[rowKey];

      if (false) {}

      return key;
    };
  }, [rowKey]); // ====================== Expand ======================

  var expandableConfig = (0,legacyUtil/* getExpandableProps */.gm)(props);
  var expandIcon = expandableConfig.expandIcon,
      expandedRowKeys = expandableConfig.expandedRowKeys,
      defaultExpandedRowKeys = expandableConfig.defaultExpandedRowKeys,
      defaultExpandAllRows = expandableConfig.defaultExpandAllRows,
      expandedRowRender = expandableConfig.expandedRowRender,
      onExpand = expandableConfig.onExpand,
      onExpandedRowsChange = expandableConfig.onExpandedRowsChange,
      expandRowByClick = expandableConfig.expandRowByClick,
      rowExpandable = expandableConfig.rowExpandable,
      expandIconColumnIndex = expandableConfig.expandIconColumnIndex,
      expandedRowClassName = expandableConfig.expandedRowClassName,
      childrenColumnName = expandableConfig.childrenColumnName,
      indentSize = expandableConfig.indentSize;
  var mergedExpandIcon = expandIcon || renderExpandIcon;
  var mergedChildrenColumnName = childrenColumnName || 'children';
  var expandableType = react.useMemo(function () {
    if (expandedRowRender) {
      return 'row';
    }
    /* eslint-disable no-underscore-dangle */

    /**
     * Fix https://github.com/ant-design/ant-design/issues/21154
     * This is a workaround to not to break current behavior.
     * We can remove follow code after final release.
     *
     * To other developer:
     *  Do not use `__PARENT_RENDER_ICON__` in prod since we will remove this when refactor
     */


    if (props.expandable && internalHooks === INTERNAL_HOOKS && props.expandable.__PARENT_RENDER_ICON__ || mergedData.some(function (record) {
      return record && (0,esm_typeof/* default */.Z)(record) === 'object' && record[mergedChildrenColumnName];
    })) {
      return 'nest';
    }
    /* eslint-enable */


    return false;
  }, [!!expandedRowRender, mergedData]);

  var _React$useState = react.useState(function () {
    if (defaultExpandedRowKeys) {
      return defaultExpandedRowKeys;
    }

    if (defaultExpandAllRows) {
      return findAllChildrenKeys(mergedData, getRowKey, mergedChildrenColumnName);
    }

    return [];
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerExpandedKeys = _React$useState2[0],
      setInnerExpandedKeys = _React$useState2[1];

  var mergedExpandedKeys = react.useMemo(function () {
    return new Set(expandedRowKeys || innerExpandedKeys || []);
  }, [expandedRowKeys, innerExpandedKeys]);
  var onTriggerExpand = react.useCallback(function (record) {
    var key = getRowKey(record, mergedData.indexOf(record));
    var newExpandedKeys;
    var hasKey = mergedExpandedKeys.has(key);

    if (hasKey) {
      mergedExpandedKeys.delete(key);
      newExpandedKeys = (0,toConsumableArray/* default */.Z)(mergedExpandedKeys);
    } else {
      newExpandedKeys = [].concat((0,toConsumableArray/* default */.Z)(mergedExpandedKeys), [key]);
    }

    setInnerExpandedKeys(newExpandedKeys);

    if (onExpand) {
      onExpand(!hasKey, record);
    }

    if (onExpandedRowsChange) {
      onExpandedRowsChange(newExpandedKeys);
    }
  }, [getRowKey, mergedExpandedKeys, mergedData, onExpand, onExpandedRowsChange]); // ====================== Column ======================

  var _React$useState3 = react.useState(0),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      componentWidth = _React$useState4[0],
      setComponentWidth = _React$useState4[1];

  var _useColumns = (0,useColumns/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), expandableConfig), {}, {
    expandable: !!expandedRowRender,
    expandedKeys: mergedExpandedKeys,
    getRowKey: getRowKey,
    // https://github.com/ant-design/ant-design/issues/23894
    onTriggerExpand: onTriggerExpand,
    expandIcon: mergedExpandIcon,
    expandIconColumnIndex: expandIconColumnIndex,
    direction: direction
  }), internalHooks === INTERNAL_HOOKS ? transformColumns : null),
      _useColumns2 = (0,slicedToArray/* default */.Z)(_useColumns, 2),
      columns = _useColumns2[0],
      flattenColumns = _useColumns2[1];

  var columnContext = react.useMemo(function () {
    return {
      columns: columns,
      flattenColumns: flattenColumns
    };
  }, [columns, flattenColumns]); // ====================== Scroll ======================

  var fullTableRef = react.useRef();
  var scrollHeaderRef = react.useRef();
  var scrollBodyRef = react.useRef();
  var scrollSummaryRef = react.useRef();

  var _React$useState5 = react.useState(false),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      pingedLeft = _React$useState6[0],
      setPingedLeft = _React$useState6[1];

  var _React$useState7 = react.useState(false),
      _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
      pingedRight = _React$useState8[0],
      setPingedRight = _React$useState8[1];

  var _useLayoutState = useLayoutState(new Map()),
      _useLayoutState2 = (0,slicedToArray/* default */.Z)(_useLayoutState, 2),
      colsWidths = _useLayoutState2[0],
      updateColsWidths = _useLayoutState2[1]; // Convert map to number width


  var colsKeys = (0,valueUtil/* getColumnsKey */.cz)(flattenColumns);
  var pureColWidths = colsKeys.map(function (columnKey) {
    return colsWidths.get(columnKey);
  });
  var colWidths = react.useMemo(function () {
    return pureColWidths;
  }, [pureColWidths.join('_')]);
  var stickyOffsets = hooks_useStickyOffsets(colWidths, flattenColumns.length, direction);
  var fixHeader = scroll && (0,valueUtil/* validateValue */.ik)(scroll.y);
  var horizonScroll = scroll && (0,valueUtil/* validateValue */.ik)(scroll.x) || Boolean(expandableConfig.fixed);
  var fixColumn = horizonScroll && flattenColumns.some(function (_ref2) {
    var fixed = _ref2.fixed;
    return fixed;
  }); // Sticky

  var stickyRef = react.useRef();

  var _useSticky = useSticky(sticky, prefixCls),
      isSticky = _useSticky.isSticky,
      offsetHeader = _useSticky.offsetHeader,
      offsetSummary = _useSticky.offsetSummary,
      offsetScroll = _useSticky.offsetScroll,
      stickyClassName = _useSticky.stickyClassName,
      container = _useSticky.container; // Footer (Fix footer must fixed header)


  var summaryNode = summary === null || summary === void 0 ? void 0 : summary(mergedData);
  var fixFooter = (fixHeader || isSticky) && /*#__PURE__*/react.isValidElement(summaryNode) && summaryNode.type === Summary/* default */.Z && summaryNode.props.fixed; // Scroll

  var scrollXStyle;
  var scrollYStyle;
  var scrollTableStyle;

  if (fixHeader) {
    scrollYStyle = {
      overflowY: 'scroll',
      maxHeight: scroll.y
    };
  }

  if (horizonScroll) {
    scrollXStyle = {
      overflowX: 'auto'
    }; // When no vertical scrollbar, should hide it
    // https://github.com/ant-design/ant-design/pull/20705
    // https://github.com/ant-design/ant-design/issues/21879

    if (!fixHeader) {
      scrollYStyle = {
        overflowY: 'hidden'
      };
    }

    scrollTableStyle = {
      width: scroll.x === true ? 'auto' : scroll.x,
      minWidth: '100%'
    };
  }

  var onColumnResize = react.useCallback(function (columnKey, width) {
    if ((0,isVisible/* default */.Z)(fullTableRef.current)) {
      updateColsWidths(function (widths) {
        if (widths.get(columnKey) !== width) {
          var newWidths = new Map(widths);
          newWidths.set(columnKey, width);
          return newWidths;
        }

        return widths;
      });
    }
  }, []);

  var _useTimeoutLock = useTimeoutLock(null),
      _useTimeoutLock2 = (0,slicedToArray/* default */.Z)(_useTimeoutLock, 2),
      setScrollTarget = _useTimeoutLock2[0],
      getScrollTarget = _useTimeoutLock2[1];

  function forceScroll(scrollLeft, target) {
    if (!target) {
      return;
    }

    if (typeof target === 'function') {
      target(scrollLeft);
    } else if (target.scrollLeft !== scrollLeft) {
      // eslint-disable-next-line no-param-reassign
      target.scrollLeft = scrollLeft;
    }
  }

  var onScroll = function onScroll(_ref3) {
    var currentTarget = _ref3.currentTarget,
        scrollLeft = _ref3.scrollLeft;
    var isRTL = direction === 'rtl';
    var mergedScrollLeft = typeof scrollLeft === 'number' ? scrollLeft : currentTarget.scrollLeft;
    var compareTarget = currentTarget || EMPTY_SCROLL_TARGET;

    if (!getScrollTarget() || getScrollTarget() === compareTarget) {
      var _stickyRef$current;

      setScrollTarget(compareTarget);
      forceScroll(mergedScrollLeft, scrollHeaderRef.current);
      forceScroll(mergedScrollLeft, scrollBodyRef.current);
      forceScroll(mergedScrollLeft, scrollSummaryRef.current);
      forceScroll(mergedScrollLeft, (_stickyRef$current = stickyRef.current) === null || _stickyRef$current === void 0 ? void 0 : _stickyRef$current.setScrollLeft);
    }

    if (currentTarget) {
      var scrollWidth = currentTarget.scrollWidth,
          clientWidth = currentTarget.clientWidth;

      if (isRTL) {
        setPingedLeft(-mergedScrollLeft < scrollWidth - clientWidth);
        setPingedRight(-mergedScrollLeft > 0);
      } else {
        setPingedLeft(mergedScrollLeft > 0);
        setPingedRight(mergedScrollLeft < scrollWidth - clientWidth);
      }
    }
  };

  var triggerOnScroll = function triggerOnScroll() {
    if (scrollBodyRef.current) {
      onScroll({
        currentTarget: scrollBodyRef.current
      });
    }
  };

  var onFullTableResize = function onFullTableResize(_ref4) {
    var width = _ref4.width;

    if (width !== componentWidth) {
      triggerOnScroll();
      setComponentWidth(fullTableRef.current ? fullTableRef.current.offsetWidth : width);
    }
  }; // Sync scroll bar when init or `horizonScroll` changed


  react.useEffect(function () {
    return triggerOnScroll;
  }, []);
  react.useEffect(function () {
    if (horizonScroll) {
      triggerOnScroll();
    }
  }, [horizonScroll]); // ===================== Effects ======================

  var _React$useState9 = react.useState(0),
      _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
      scrollbarSize = _React$useState10[0],
      setScrollbarSize = _React$useState10[1];

  react.useEffect(function () {
    setScrollbarSize((0,getScrollBarSize/* getTargetScrollBarSize */.o)(scrollBodyRef.current).width);
  }, []); // ================== INTERNAL HOOKS ==================

  react.useEffect(function () {
    if (internalHooks === INTERNAL_HOOKS && internalRefs) {
      internalRefs.body.current = scrollBodyRef.current;
    }
  }); // ====================== Render ======================

  var TableComponent = getComponent(['table'], 'table'); // Table layout

  var mergedTableLayout = react.useMemo(function () {
    if (tableLayout) {
      return tableLayout;
    } // https://github.com/ant-design/ant-design/issues/25227
    // When scroll.x is max-content, no need to fix table layout
    // it's width should stretch out to fit content


    if (fixColumn) {
      return scroll.x === 'max-content' ? 'auto' : 'fixed';
    }

    if (fixHeader || isSticky || flattenColumns.some(function (_ref5) {
      var ellipsis = _ref5.ellipsis;
      return ellipsis;
    })) {
      return 'fixed';
    }

    return 'auto';
  }, [fixHeader, fixColumn, flattenColumns, tableLayout, isSticky]);
  var groupTableNode; // Header props

  var headerProps = {
    colWidths: colWidths,
    columCount: flattenColumns.length,
    stickyOffsets: stickyOffsets,
    onHeaderRow: onHeaderRow,
    fixHeader: fixHeader,
    scroll: scroll
  }; // Empty

  var emptyNode = react.useMemo(function () {
    if (hasData) {
      return null;
    }

    if (typeof emptyText === 'function') {
      return emptyText();
    }

    return emptyText;
  }, [hasData, emptyText]); // Body

  var bodyTable = /*#__PURE__*/react.createElement(es_Body, {
    data: mergedData,
    measureColumnWidth: fixHeader || horizonScroll || isSticky,
    expandedKeys: mergedExpandedKeys,
    rowExpandable: rowExpandable,
    getRowKey: getRowKey,
    onRow: onRow,
    emptyNode: emptyNode,
    childrenColumnName: mergedChildrenColumnName
  });
  var bodyColGroup = /*#__PURE__*/react.createElement(es_ColGroup, {
    colWidths: flattenColumns.map(function (_ref6) {
      var width = _ref6.width;
      return width;
    }),
    columns: flattenColumns
  });
  var customizeScrollBody = getComponent(['body']);

  if (false) {}

  if (fixHeader || isSticky) {
    // >>>>>> Fixed Header
    var bodyContent;

    if (typeof customizeScrollBody === 'function') {
      bodyContent = customizeScrollBody(mergedData, {
        scrollbarSize: scrollbarSize,
        ref: scrollBodyRef,
        onScroll: onScroll
      });
      headerProps.colWidths = flattenColumns.map(function (_ref7, index) {
        var width = _ref7.width;
        var colWidth = index === columns.length - 1 ? width - scrollbarSize : width;

        if (typeof colWidth === 'number' && !Number.isNaN(colWidth)) {
          return colWidth;
        }

        (0,warning/* default */.ZP)(false, 'When use `components.body` with render props. Each column should have a fixed `width` value.');
        return 0;
      });
    } else {
      bodyContent = /*#__PURE__*/react.createElement("div", {
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollXStyle), scrollYStyle),
        onScroll: onScroll,
        ref: scrollBodyRef,
        className: classnames_default()("".concat(prefixCls, "-body"))
      }, /*#__PURE__*/react.createElement(TableComponent, {
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollTableStyle), {}, {
          tableLayout: mergedTableLayout
        })
      }, bodyColGroup, bodyTable, !fixFooter && summaryNode && /*#__PURE__*/react.createElement(Footer/* default */.ZP, {
        stickyOffsets: stickyOffsets,
        flattenColumns: flattenColumns
      }, summaryNode)));
    } // Fixed holder share the props


    var fixedHolderProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      noData: !mergedData.length,
      maxContentScroll: horizonScroll && scroll.x === 'max-content'
    }, headerProps), columnContext), {}, {
      direction: direction,
      stickyClassName: stickyClassName,
      onScroll: onScroll
    });

    groupTableNode = /*#__PURE__*/react.createElement(react.Fragment, null, showHeader !== false && /*#__PURE__*/react.createElement(es_FixedHolder, (0,esm_extends/* default */.Z)({}, fixedHolderProps, {
      stickyTopOffset: offsetHeader,
      className: "".concat(prefixCls, "-header"),
      ref: scrollHeaderRef
    }), function (fixedHolderPassProps) {
      return /*#__PURE__*/react.createElement(Header_Header, fixedHolderPassProps);
    }), bodyContent, fixFooter && /*#__PURE__*/react.createElement(es_FixedHolder, (0,esm_extends/* default */.Z)({}, fixedHolderProps, {
      stickyBottomOffset: offsetSummary,
      className: "".concat(prefixCls, "-summary"),
      ref: scrollSummaryRef
    }), function (fixedHolderPassProps) {
      return /*#__PURE__*/react.createElement(Footer/* default */.ZP, fixedHolderPassProps, summaryNode);
    }), isSticky && /*#__PURE__*/react.createElement(stickyScrollBar, {
      ref: stickyRef,
      offsetScroll: offsetScroll,
      scrollBodyRef: scrollBodyRef,
      onScroll: onScroll,
      container: container
    }));
  } else {
    // >>>>>> Unique table
    groupTableNode = /*#__PURE__*/react.createElement("div", {
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollXStyle), scrollYStyle),
      className: classnames_default()("".concat(prefixCls, "-content")),
      onScroll: onScroll,
      ref: scrollBodyRef
    }, /*#__PURE__*/react.createElement(TableComponent, {
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollTableStyle), {}, {
        tableLayout: mergedTableLayout
      })
    }, bodyColGroup, showHeader !== false && /*#__PURE__*/react.createElement(Header_Header, (0,esm_extends/* default */.Z)({}, headerProps, columnContext)), bodyTable, summaryNode && /*#__PURE__*/react.createElement(Footer/* default */.ZP, {
      stickyOffsets: stickyOffsets,
      flattenColumns: flattenColumns
    }, summaryNode)));
  }

  var ariaProps = (0,legacyUtil/* getDataAndAriaProps */.Xz)(props);
  var fullTable = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ping-left"), pingedLeft), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ping-right"), pingedRight), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-layout-fixed"), tableLayout === 'fixed'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-fixed-header"), fixHeader), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-fixed-column"), fixColumn), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-scroll-horizontal"), horizonScroll), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-fix-left"), flattenColumns[0] && flattenColumns[0].fixed), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-fix-right"), flattenColumns[flattenColumns.length - 1] && flattenColumns[flattenColumns.length - 1].fixed === 'right'), _classNames)),
    style: style,
    id: id,
    ref: fullTableRef
  }, ariaProps), /*#__PURE__*/react.createElement(MemoTableContent, {
    pingLeft: pingedLeft,
    pingRight: pingedRight,
    props: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      stickyOffsets: stickyOffsets,
      mergedExpandedKeys: mergedExpandedKeys
    })
  }, title && /*#__PURE__*/react.createElement(es_Panel, {
    className: "".concat(prefixCls, "-title")
  }, title(mergedData)), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-container")
  }, groupTableNode), footer && /*#__PURE__*/react.createElement(es_Panel, {
    className: "".concat(prefixCls, "-footer")
  }, footer(mergedData))));

  if (horizonScroll) {
    fullTable = /*#__PURE__*/react.createElement(es/* default */.Z, {
      onResize: onFullTableResize
    }, fullTable);
  }

  var TableContextValue = react.useMemo(function () {
    return {
      prefixCls: prefixCls,
      getComponent: getComponent,
      scrollbarSize: scrollbarSize,
      direction: direction,
      fixedInfoList: flattenColumns.map(function (_, colIndex) {
        return (0,fixUtil/* getCellFixedInfo */.v)(colIndex, colIndex, flattenColumns, stickyOffsets, direction);
      }),
      isSticky: isSticky
    };
  }, [prefixCls, getComponent, scrollbarSize, direction, flattenColumns, stickyOffsets, direction, isSticky]);
  var BodyContextValue = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, columnContext), {}, {
      tableLayout: mergedTableLayout,
      rowClassName: rowClassName,
      expandedRowClassName: expandedRowClassName,
      componentWidth: componentWidth,
      fixHeader: fixHeader,
      fixColumn: fixColumn,
      horizonScroll: horizonScroll,
      expandIcon: mergedExpandIcon,
      expandableType: expandableType,
      expandRowByClick: expandRowByClick,
      expandedRowRender: expandedRowRender,
      onTriggerExpand: onTriggerExpand,
      expandIconColumnIndex: expandIconColumnIndex,
      indentSize: indentSize
    });
  }, [columnContext, mergedTableLayout, rowClassName, expandedRowClassName, componentWidth, fixHeader, fixColumn, horizonScroll, mergedExpandIcon, expandableType, expandRowByClick, expandedRowRender, onTriggerExpand, expandIconColumnIndex, indentSize]);
  var ResizeContextValue = react.useMemo(function () {
    return {
      onColumnResize: onColumnResize
    };
  }, [onColumnResize]);
  return /*#__PURE__*/react.createElement(TableContext/* default.Provider */.Z.Provider, {
    value: TableContextValue
  }, /*#__PURE__*/react.createElement(context_BodyContext.Provider, {
    value: BodyContextValue
  }, /*#__PURE__*/react.createElement(context_ResizeContext.Provider, {
    value: ResizeContextValue
  }, fullTable)));
}

Table.Column = sugar_Column;
Table.ColumnGroup = sugar_ColumnGroup;
Table.Summary = Footer/* FooterComponents */.c8;
Table.defaultProps = {
  rowKey: 'key',
  prefixCls: 'rc-table',
  emptyText: function emptyText() {
    return 'No Data';
  }
};
/* harmony default export */ const es_Table = (Table);

/***/ }),

/***/ 88946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var TableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableContext);

/***/ }),

/***/ 75797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ convertChildrenToColumns),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96156);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42921);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28991);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80334);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50344);
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62978);




var _excluded = ["children"],
    _excluded2 = ["fixed"];




function convertChildrenToColumns(children) {
  return (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(children).filter(function (node) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(node);
  }).map(function (_ref) {
    var key = _ref.key,
        props = _ref.props;

    var nodeChildren = props.children,
        restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(props, _excluded);

    var column = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
      key: key
    }, restProps);

    if (nodeChildren) {
      column.children = convertChildrenToColumns(nodeChildren);
    }

    return column;
  });
}

function flatColumns(columns) {
  return columns.reduce(function (list, column) {
    var fixed = column.fixed; // Convert `fixed='true'` to `fixed='left'` instead

    var parsedFixed = fixed === true ? 'left' : fixed;
    var subColumns = column.children;

    if (subColumns && subColumns.length > 0) {
      return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(list), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(flatColumns(subColumns).map(function (subColum) {
        return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          fixed: parsedFixed
        }, subColum);
      })));
    }

    return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(list), [(0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({}, column), {}, {
      fixed: parsedFixed
    })]);
  }, []);
}

function warningFixed(flattenColumns) {
  var allFixLeft = true;

  for (var i = 0; i < flattenColumns.length; i += 1) {
    var col = flattenColumns[i];

    if (allFixLeft && col.fixed !== 'left') {
      allFixLeft = false;
    } else if (!allFixLeft && col.fixed === 'left') {
      warning(false, "Index ".concat(i - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }

  var allFixRight = true;

  for (var _i = flattenColumns.length - 1; _i >= 0; _i -= 1) {
    var _col = flattenColumns[_i];

    if (allFixRight && _col.fixed !== 'right') {
      allFixRight = false;
    } else if (!allFixRight && _col.fixed === 'right') {
      warning(false, "Index ".concat(_i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}

function revertForRtl(columns) {
  return columns.map(function (column) {
    var fixed = column.fixed,
        restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(column, _excluded2); // Convert `fixed='left'` to `fixed='right'` instead


    var parsedFixed = fixed;

    if (fixed === 'left') {
      parsedFixed = 'right';
    } else if (fixed === 'right') {
      parsedFixed = 'left';
    }

    return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
      fixed: parsedFixed
    }, restProps);
  });
}
/**
 * Parse `columns` & `children` into `columns`.
 */


function useColumns(_ref2, transformColumns) {
  var prefixCls = _ref2.prefixCls,
      columns = _ref2.columns,
      children = _ref2.children,
      expandable = _ref2.expandable,
      expandedKeys = _ref2.expandedKeys,
      getRowKey = _ref2.getRowKey,
      onTriggerExpand = _ref2.onTriggerExpand,
      expandIcon = _ref2.expandIcon,
      rowExpandable = _ref2.rowExpandable,
      expandIconColumnIndex = _ref2.expandIconColumnIndex,
      direction = _ref2.direction,
      expandRowByClick = _ref2.expandRowByClick,
      columnWidth = _ref2.columnWidth,
      fixed = _ref2.fixed;
  var baseColumns = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return columns || convertChildrenToColumns(children);
  }, [columns, children]); // Add expand column

  var withExpandColumns = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    if (expandable) {
      var _expandColumn;

      var expandColIndex = expandIconColumnIndex || 0;
      var prevColumn = baseColumns[expandColIndex];
      var fixedColumn;

      if ((fixed === 'left' || fixed) && !expandIconColumnIndex) {
        fixedColumn = 'left';
      } else if ((fixed === 'right' || fixed) && expandIconColumnIndex === baseColumns.length) {
        fixedColumn = 'right';
      } else {
        fixedColumn = prevColumn ? prevColumn.fixed : null;
      }

      var expandColumn = (_expandColumn = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_expandColumn, _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_3__/* .INTERNAL_COL_DEFINE */ .vP, {
        className: "".concat(prefixCls, "-expand-icon-col")
      }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_expandColumn, "title", ''), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_expandColumn, "fixed", fixedColumn), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_expandColumn, "className", "".concat(prefixCls, "-row-expand-icon-cell")), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_expandColumn, "width", columnWidth), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_expandColumn, "render", function render(_, record, index) {
        var rowKey = getRowKey(record, index);
        var expanded = expandedKeys.has(rowKey);
        var recordExpandable = rowExpandable ? rowExpandable(record) : true;
        var icon = expandIcon({
          prefixCls: prefixCls,
          expanded: expanded,
          expandable: recordExpandable,
          record: record,
          onExpand: onTriggerExpand
        });

        if (expandRowByClick) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, icon);
        }

        return icon;
      }), _expandColumn); // Insert expand column in the target position

      var cloneColumns = baseColumns.slice();

      if (expandColIndex >= 0) {
        cloneColumns.splice(expandColIndex, 0, expandColumn);
      }

      return cloneColumns;
    }

    return baseColumns;
  }, [expandable, baseColumns, getRowKey, expandedKeys, expandIcon, direction]);
  var mergedColumns = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    var finalColumns = withExpandColumns;

    if (transformColumns) {
      finalColumns = transformColumns(finalColumns);
    } // Always provides at least one column for table display


    if (!finalColumns.length) {
      finalColumns = [{
        render: function render() {
          return null;
        }
      }];
    }

    return finalColumns;
  }, [transformColumns, withExpandColumns, direction]);
  var flattenColumns = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    if (direction === 'rtl') {
      return revertForRtl(flatColumns(mergedColumns));
    }

    return flatColumns(mergedColumns);
  }, [mergedColumns, direction]); // Only check out of production since it's waste for each render

  if (false) {}

  return [mergedColumns, flattenColumns];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useColumns);

/***/ }),

/***/ 82327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ER": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.c8),
/* harmony export */   "vP": () => (/* reexport safe */ _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_2__.vP),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59898);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80540);
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62978);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Table__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z);

/***/ }),

/***/ 3991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getCellFixedInfo)
/* harmony export */ });
function getCellFixedInfo(colStart, colEnd, columns, stickyOffsets, direction) {
  var startColumn = columns[colStart] || {};
  var endColumn = columns[colEnd] || {};
  var fixLeft;
  var fixRight;

  if (startColumn.fixed === 'left') {
    fixLeft = stickyOffsets.left[colStart];
  } else if (endColumn.fixed === 'right') {
    fixRight = stickyOffsets.right[colEnd];
  }

  var lastFixLeft = false;
  var firstFixRight = false;
  var lastFixRight = false;
  var firstFixLeft = false;
  var nextColumn = columns[colEnd + 1];
  var prevColumn = columns[colStart - 1];

  if (direction === 'rtl') {
    if (fixLeft !== undefined) {
      var prevFixLeft = prevColumn && prevColumn.fixed === 'left';
      firstFixLeft = !prevFixLeft;
    } else if (fixRight !== undefined) {
      var nextFixRight = nextColumn && nextColumn.fixed === 'right';
      lastFixRight = !nextFixRight;
    }
  } else if (fixLeft !== undefined) {
    var nextFixLeft = nextColumn && nextColumn.fixed === 'left';
    lastFixLeft = !nextFixLeft;
  } else if (fixRight !== undefined) {
    var prevFixRight = prevColumn && prevColumn.fixed === 'right';
    firstFixRight = !prevFixRight;
  }

  return {
    fixLeft: fixLeft,
    fixRight: fixRight,
    lastFixLeft: lastFixLeft,
    firstFixRight: firstFixRight,
    lastFixRight: lastFixRight,
    firstFixLeft: firstFixLeft,
    isSticky: stickyOffsets.isSticky
  };
}

/***/ }),

/***/ 62978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vP": () => (/* binding */ INTERNAL_COL_DEFINE),
/* harmony export */   "gm": () => (/* binding */ getExpandableProps),
/* harmony export */   "Xz": () => (/* binding */ getDataAndAriaProps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28991);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80334);


var _excluded = ["expandable"];

var INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';
function getExpandableProps(props) {
  var expandable = props.expandable,
      legacyExpandableConfig = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  if ('expandable' in props) {
    return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({}, legacyExpandableConfig), expandable);
  }

  if (false) {}

  return legacyExpandableConfig;
}
/**
 * Returns only data- and aria- key/value pairs
 * @param {object} props
 */

function getDataAndAriaProps(props) {
  /* eslint-disable no-param-reassign */
  return Object.keys(props).reduce(function (memo, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      memo[key] = props[key];
    }

    return memo;
  }, {});
  /* eslint-enable */
}

/***/ }),

/***/ 38299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aM": () => (/* binding */ getPathValue),
/* harmony export */   "cz": () => (/* binding */ getColumnsKey),
/* harmony export */   "Gm": () => (/* binding */ mergeObject),
/* harmony export */   "ik": () => (/* binding */ validateValue)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90484);

var INTERNAL_KEY_PREFIX = 'RC_TABLE_KEY';

function toArray(arr) {
  if (arr === undefined || arr === null) {
    return [];
  }

  return Array.isArray(arr) ? arr : [arr];
}

function getPathValue(record, path) {
  // Skip if path is empty
  if (!path && typeof path !== 'number') {
    return record;
  }

  var pathList = toArray(path);
  var current = record;

  for (var i = 0; i < pathList.length; i += 1) {
    if (!current) {
      return null;
    }

    var prop = pathList[i];
    current = current[prop];
  }

  return current;
}
function getColumnsKey(columns) {
  var columnKeys = [];
  var keys = {};
  columns.forEach(function (column) {
    var _ref = column || {},
        key = _ref.key,
        dataIndex = _ref.dataIndex;

    var mergedKey = key || toArray(dataIndex).join('-') || INTERNAL_KEY_PREFIX;

    while (keys[mergedKey]) {
      mergedKey = "".concat(mergedKey, "_next");
    }

    keys[mergedKey] = true;
    columnKeys.push(mergedKey);
  });
  return columnKeys;
}
function mergeObject() {
  var merged = {};
  /* eslint-disable no-param-reassign */

  function fillProps(obj, clone) {
    if (clone) {
      Object.keys(clone).forEach(function (key) {
        var value = clone[key];

        if (value && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(value) === 'object') {
          obj[key] = obj[key] || {};
          fillProps(obj[key], value);
        } else {
          obj[key] = value;
        }
      });
    }
  }
  /* eslint-enable */


  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  objects.forEach(function (clone) {
    fillProps(merged, clone);
  });
  return merged;
}
function validateValue(val) {
  return val !== null && val !== undefined;
}

/***/ }),

/***/ 32239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L0": () => (/* binding */ arrAdd),
  "_5": () => (/* binding */ arrDel),
  "NL": () => (/* binding */ getDataAndAria),
  "bt": () => (/* binding */ getPosition)
});

// UNUSED EXPORTS: calcDropPosition, calcSelectedKeys, conductExpandParent, convertDataToTree, getDragChildrenKeys, isFirstChild, isLastChild, isTreeNode, parseCheckedKeys, posToArr

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var es_warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(28991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(63349);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(10379);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 2 modules
var createSuper = __webpack_require__(81907);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/contextTypes.js
/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */

var TreeContext = /*#__PURE__*/react.createContext(null);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/Indent.js




var Indent = function Indent(_ref) {
  var prefixCls = _ref.prefixCls,
      level = _ref.level,
      isStart = _ref.isStart,
      isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];

  for (var i = 0; i < level; i += 1) {
    var _classNames;

    list.push( /*#__PURE__*/react.createElement("span", {
      key: i,
      className: classnames_default()(baseClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(baseClassName, "-start"), isStart[i]), (0,defineProperty/* default */.Z)(_classNames, "".concat(baseClassName, "-end"), isEnd[i]), _classNames))
    }));
  }

  return /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-indent")
  }, list);
};

/* harmony default export */ const es_Indent = (Indent);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/utils/treeUtil.js
var treeUtil = __webpack_require__(1089);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/TreeNode.js









var _excluded = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove"];

 // @ts-ignore





var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';

var InternalTreeNode = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(InternalTreeNode, _React$Component);

  var _super = (0,createSuper/* default */.Z)(InternalTreeNode);

  function InternalTreeNode() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, InternalTreeNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      dragNodeHighlight: false
    };
    _this.selectHandle = void 0;

    _this.onSelectorClick = function (e) {
      // Click trigger before select/check operation
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));

      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    };

    _this.onSelectorDoubleClick = function (e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };

    _this.onSelect = function (e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };

    _this.onCheck = function (e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props,
          disableCheckbox = _this$props.disableCheckbox,
          checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props), targetChecked);
    };

    _this.onMouseEnter = function (e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };

    _this.onMouseLeave = function (e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };

    _this.onContextMenu = function (e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };

    _this.onDragStart = function (e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: true
      });

      onNodeDragStart(e, (0,assertThisInitialized/* default */.Z)(_this));

      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {// empty
      }
    };

    _this.onDragEnter = function (e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onDragOver = function (e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onDragLeave = function (e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onDragEnd = function (e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDragEnd(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onDrop = function (e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDrop(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onExpand = function (e) {
      var _this$props2 = _this.props,
          loading = _this$props2.loading,
          onNodeExpand = _this$props2.context.onNodeExpand;
      if (loading) return;
      onNodeExpand(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };

    _this.setSelectHandle = function (node) {
      _this.selectHandle = node;
    };

    _this.getNodeState = function () {
      var expanded = _this.props.expanded;

      if (_this.isLeaf()) {
        return null;
      }

      return expanded ? ICON_OPEN : ICON_CLOSE;
    };

    _this.hasChildren = function () {
      var eventKey = _this.props.eventKey;
      var keyEntities = _this.props.context.keyEntities;

      var _ref = keyEntities[eventKey] || {},
          children = _ref.children;

      return !!(children || []).length;
    };

    _this.isLeaf = function () {
      var _this$props3 = _this.props,
          isLeaf = _this$props3.isLeaf,
          loaded = _this$props3.loaded;
      var loadData = _this.props.context.loadData;

      var hasChildren = _this.hasChildren();

      if (isLeaf === false) {
        return false;
      }

      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    };

    _this.isDisabled = function () {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled;
      return !!(treeDisabled || disabled);
    };

    _this.isCheckable = function () {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable; // Return false if tree or treeNode is not checkable

      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    };

    _this.syncLoadData = function (props) {
      var expanded = props.expanded,
          loading = props.loading,
          loaded = props.loaded;
      var _this$props$context = _this.props.context,
          loadData = _this$props$context.loadData,
          onNodeLoad = _this$props$context.onNodeLoad;

      if (loading) {
        return;
      }

      ; // read from state to avoid loadData at same time

      if (loadData && expanded && !_this.isLeaf()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        if (!_this.hasChildren() && !loaded) {
          onNodeLoad((0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
        }
      }
    };

    _this.renderSwitcherIconDom = function (isLeaf) {
      var switcherIconFromProps = _this.props.switcherIcon;
      var switcherIconFromCtx = _this.props.context.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx; // if switcherIconDom is null, no render switcher span

      if (typeof switcherIcon === 'function') {
        return switcherIcon((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.props), {}, {
          isLeaf: isLeaf
        }));
      }

      return switcherIcon;
    };

    _this.renderSwitcher = function () {
      var expanded = _this.props.expanded;
      var prefixCls = _this.props.context.prefixCls;

      if (_this.isLeaf()) {
        // if switcherIconDom is null, no render switcher span
        var _switcherIconDom = _this.renderSwitcherIconDom(true);

        return _switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
          className: classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, _switcherIconDom) : null;
      }

      var switcherCls = classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));

      var switcherIconDom = _this.renderSwitcherIconDom(false);

      return switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
        onClick: _this.onExpand,
        className: switcherCls
      }, switcherIconDom) : null;
    };

    _this.renderCheckbox = function () {
      var _this$props4 = _this.props,
          checked = _this$props4.checked,
          halfChecked = _this$props4.halfChecked,
          disableCheckbox = _this$props4.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;

      var disabled = _this.isDisabled();

      var checkable = _this.isCheckable();

      if (!checkable) return null; // [Legacy] Custom element should be separate with `checkable` in future

      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        onClick: _this.onCheck
      }, $custom);
    };

    _this.renderIcon = function () {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      });
    };

    _this.renderSelector = function () {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props5 = _this.props,
          title = _this$props5.title,
          selected = _this$props5.selected,
          icon = _this$props5.icon,
          loading = _this$props5.loading,
          data = _this$props5.data;
      var _this$props$context2 = _this.props.context,
          prefixCls = _this$props$context2.prefixCls,
          showIcon = _this$props$context2.showIcon,
          treeIcon = _this$props$context2.icon,
          draggable = _this$props$context2.draggable,
          loadData = _this$props$context2.loadData,
          titleRender = _this$props$context2.titleRender;

      var disabled = _this.isDisabled();

      var mergedDraggable = typeof draggable === 'function' ? draggable(data) : draggable;
      var wrapClass = "".concat(prefixCls, "-node-content-wrapper"); // Icon - Still show loading icon when loading without showIcon

      var $icon;

      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? /*#__PURE__*/react.createElement("span", {
          className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      } // Title


      var titleNode;

      if (typeof title === 'function') {
        titleNode = title(data);
      } else if (titleRender) {
        titleNode = titleRender(data);
      } else {
        titleNode = title;
      }

      var $title = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-title")
      }, titleNode);
      return /*#__PURE__*/react.createElement("span", {
        ref: _this.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: classnames_default()("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected"), !disabled && mergedDraggable && 'draggable'),
        draggable: !disabled && mergedDraggable || undefined,
        "aria-grabbed": !disabled && mergedDraggable || undefined,
        onMouseEnter: _this.onMouseEnter,
        onMouseLeave: _this.onMouseLeave,
        onContextMenu: _this.onContextMenu,
        onClick: _this.onSelectorClick,
        onDoubleClick: _this.onSelectorDoubleClick,
        onDragStart: mergedDraggable ? _this.onDragStart : undefined
      }, $icon, $title, _this.renderDropIndicator());
    };

    _this.renderDropIndicator = function () {
      var _this$props6 = _this.props,
          disabled = _this$props6.disabled,
          eventKey = _this$props6.eventKey;
      var _this$props$context3 = _this.props.context,
          draggable = _this$props$context3.draggable,
          dropLevelOffset = _this$props$context3.dropLevelOffset,
          dropPosition = _this$props$context3.dropPosition,
          prefixCls = _this$props$context3.prefixCls,
          indent = _this$props$context3.indent,
          dropIndicatorRender = _this$props$context3.dropIndicatorRender,
          dragOverNodeKey = _this$props$context3.dragOverNodeKey,
          direction = _this$props$context3.direction;
      var mergedDraggable = draggable !== false; // allowDrop is calculated in Tree.tsx, there is no need for calc it here

      var showIndicator = !disabled && mergedDraggable && dragOverNodeKey === eventKey;
      return showIndicator ? dropIndicatorRender({
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        indent: indent,
        prefixCls: prefixCls,
        direction: direction
      }) : null;
    };

    return _this;
  }

  (0,createClass/* default */.Z)(InternalTreeNode, [{
    key: "componentDidMount",
    value: // Isomorphic needn't load data in server side
    function componentDidMount() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.props.context.selectable; // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props7 = this.props,
          eventKey = _this$props7.eventKey,
          className = _this$props7.className,
          style = _this$props7.style,
          dragOver = _this$props7.dragOver,
          dragOverGapTop = _this$props7.dragOverGapTop,
          dragOverGapBottom = _this$props7.dragOverGapBottom,
          isLeaf = _this$props7.isLeaf,
          isStart = _this$props7.isStart,
          isEnd = _this$props7.isEnd,
          expanded = _this$props7.expanded,
          selected = _this$props7.selected,
          checked = _this$props7.checked,
          halfChecked = _this$props7.halfChecked,
          loading = _this$props7.loading,
          domRef = _this$props7.domRef,
          active = _this$props7.active,
          data = _this$props7.data,
          onMouseMove = _this$props7.onMouseMove,
          otherProps = (0,objectWithoutProperties/* default */.Z)(_this$props7, _excluded);

      var _this$props$context4 = this.props.context,
          prefixCls = _this$props$context4.prefixCls,
          filterTreeNode = _this$props$context4.filterTreeNode,
          draggable = _this$props$context4.draggable,
          keyEntities = _this$props$context4.keyEntities,
          dropContainerKey = _this$props$context4.dropContainerKey,
          dropTargetKey = _this$props$context4.dropTargetKey;
      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = getDataAndAria(otherProps);

      var _ref2 = keyEntities[eventKey] || {},
          level = _ref2.level;

      var isEndNode = isEnd[isEnd.length - 1];
      var mergedDraggable = typeof draggable === 'function' ? draggable(data) : draggable;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
        ref: domRef,
        className: classnames_default()(className, "".concat(prefixCls, "-treenode"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-selected"), selected), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-loading"), loading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), (0,defineProperty/* default */.Z)(_classNames, 'drop-target', dropTargetKey === eventKey), (0,defineProperty/* default */.Z)(_classNames, 'drop-container', dropContainerKey === eventKey), (0,defineProperty/* default */.Z)(_classNames, 'drag-over', !disabled && dragOver), (0,defineProperty/* default */.Z)(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), (0,defineProperty/* default */.Z)(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), (0,defineProperty/* default */.Z)(_classNames, 'filter-node', filterTreeNode && filterTreeNode((0,treeUtil/* convertNodePropsToEventData */.F)(this.props))), _classNames)),
        style: style,
        onDragEnter: mergedDraggable ? this.onDragEnter : undefined,
        onDragOver: mergedDraggable ? this.onDragOver : undefined,
        onDragLeave: mergedDraggable ? this.onDragLeave : undefined,
        onDrop: mergedDraggable ? this.onDrop : undefined,
        onDragEnd: mergedDraggable ? this.onDragEnd : undefined,
        onMouseMove: onMouseMove
      }, dataOrAriaAttributeProps), /*#__PURE__*/react.createElement(es_Indent, {
        prefixCls: prefixCls,
        level: level,
        isStart: isStart,
        isEnd: isEnd
      }), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
    }
  }]);

  return InternalTreeNode;
}(react.Component);

var ContextTreeNode = function ContextTreeNode(props) {
  return /*#__PURE__*/react.createElement(TreeContext.Consumer, null, function (context) {
    return /*#__PURE__*/react.createElement(InternalTreeNode, (0,esm_extends/* default */.Z)({}, props, {
      context: context
    }));
  });
};

ContextTreeNode.displayName = 'TreeNode';
ContextTreeNode.defaultProps = {
  title: defaultTitle
};
ContextTreeNode.isTreeNode = 1;

/* harmony default export */ const es_TreeNode = ((/* unused pure expression or super */ null && (ContextTreeNode)));
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/util.js



var util_excluded = (/* unused pure expression or super */ null && (["children"]));

/* eslint-disable no-lonely-if */

/**
 * Legacy code. Should avoid to use if you are new to import these code.
 */



function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);

  if (index >= 0) {
    clone.splice(index, 1);
  }

  return clone;
}
function arrAdd(list, value) {
  var clone = list.slice();

  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }

  return clone;
}
function posToArr(pos) {
  return pos.split('-');
}
function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  // not contains self
  // self for left or right drag
  var dragChildrenKeys = [];
  var entity = keyEntities[dragNodeKey];

  function dig() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (_ref) {
      var key = _ref.key,
          children = _ref.children;
      dragChildrenKeys.push(key);
      dig(children);
    });
  }

  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }

  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
} // Only used when drag, not affect SSR.

function calcDropPosition(event, dragNode, targetNode, indent, startMousePosition, allowDrop, flattenedNodes, keyEntities, expandKeys, direction) {
  var _abstractDropNodeEnti;

  var clientX = event.clientX,
      clientY = event.clientY;

  var _event$target$getBoun = event.target.getBoundingClientRect(),
      top = _event$target$getBoun.top,
      height = _event$target$getBoun.height; // optional chain for testing


  var horizontalMouseOffset = (direction === 'rtl' ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent; // find abstract drop node by horizontal offset

  var abstractDropNodeEntity = keyEntities[targetNode.props.eventKey];

  if (clientY < top + height / 2) {
    // first half, set abstract drop node to previous node
    var nodeIndex = flattenedNodes.findIndex(function (flattenedNode) {
      return flattenedNode.data.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].data.key;
    abstractDropNodeEntity = keyEntities[prevNodeKey];
  }

  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0; // Only allow cross level drop when dragging on a non-expanded node

  if (!expandKeys.includes(initialAbstractDropNodeKey)) {
    for (var i = 0; i < rawDropLevelOffset; i += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }

  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;

  if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop({
    dropNode: abstractDropDataNode,
    dropPosition: -1
  }) && abstractDropNodeEntity.key === targetNode.props.eventKey) {
    // first half of first node in first level
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && expandKeys.includes(dragOverNodeKey)) {
    // drop on expanded node
    // only allow drop inside
    if (allowDrop({
      dropNode: abstractDropDataNode,
      dropPosition: 0
    })) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      // | Node     | <- abstractDropNode
      // | -^-===== | <- mousePosition
      // 1. try drop after
      // 2. do not allow drop
      if (allowDrop({
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      // | Node     | <- abstractDropNode
      // | ---==^== | <- mousePosition
      // whether it has children or doesn't has children
      // always
      // 1. try drop inside
      // 2. try drop after
      // 3. do not allow drop
      if (allowDrop({
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })) {
        dropPosition = 0;
      } else if (allowDrop({
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    // | Node1 | <- abstractDropNode
    //      |  Node2  |
    // --^--|----=====| <- mousePosition
    // 1. try insert after Node1
    // 2. do not allow drop
    if (allowDrop({
      dropNode: abstractDropDataNode,
      dropPosition: 1
    })) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }

  return {
    dropPosition: dropPosition,
    dropLevelOffset: dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey: dragOverNodeKey,
    dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
    dropAllowed: dropAllowed
  };
}
/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */

function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;
  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }

  return selectedKeys;
}

var internalProcessProps = function internalProcessProps(props) {
  return props;
};

function convertDataToTree(treeData, processor) {
  if (!treeData) return [];

  var _ref2 = processor || {},
      _ref2$processProps = _ref2.processProps,
      processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref3) {
    var children = _ref3.children,
        props = _objectWithoutProperties(_ref3, util_excluded);

    var childrenNodes = convertDataToTree(children, processor);
    return /*#__PURE__*/React.createElement(TreeNode, processProps(props), childrenNodes);
  });
}
/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */

function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  } // Convert keys to object format


  var keyProps;

  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if (_typeof(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    warning(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  return keyProps;
}
/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */

function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = new Set();

  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = keyEntities[key];
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent,
        node = entity.node;
    if (node.disabled) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });
  return _toConsumableArray(expandedKeys);
}
/**
 * Returns only the data- and aria- key/value pairs
 */

function getDataAndAria(props) {
  var omitProps = {};
  Object.keys(props).forEach(function (key) {
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      omitProps[key] = props[key];
    }
  });
  return omitProps;
}

/***/ }),

/***/ 17341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ conductCheck)
/* harmony export */ });
/* unused harmony export isCheckDisabled */
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80334);


function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = new Set();
  halfCheckedKeys.forEach(function (key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}

function isCheckDisabled(node) {
  var _ref = node || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox,
      checkable = _ref.checkable;

  return !!(disabled || disableCheckbox) || checkable === false;
} // Fill miss keys

function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(); // Add checked keys top to bottom

  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
          node = entity.node,
          _entity$children = entity.children,
          children = _entity$children === void 0 ? [] : _entity$children;

      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  } // Add checked keys from bottom to top


  var visitedKeys = new Set();

  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || new Set();

    _entities.forEach(function (entity) {
      var parent = entity.parent,
          node = entity.node; // Skip if no need to check

      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      } // Skip if parent is disabled


      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }

      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);

        if (allChecked && !checked) {
          allChecked = false;
        }

        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });

      if (allChecked) {
        checkedKeys.add(parent.key);
      }

      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }

      visitedKeys.add(parent.key);
    });
  }

  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
} // Remove useless key


function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys); // Remove checked keys from top to bottom

  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
          node = entity.node,
          _entity$children2 = entity.children,
          children = _entity$children2 === void 0 ? [] : _entity$children2;

      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  } // Remove checked keys form bottom to top


  halfCheckedKeys = new Set();
  var visitedKeys = new Set();

  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || new Set();

    _entities2.forEach(function (entity) {
      var parent = entity.parent,
          node = entity.node; // Skip if no need to check

      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      } // Skip if parent is disabled


      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }

      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);

        if (allChecked && !checked) {
          allChecked = false;
        }

        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });

      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }

      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }

      visitedKeys.add(parent.key);
    });
  }

  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
/**
 * Conduct with keys.
 * @param keyList current key list
 * @param keyEntities key - dataEntity map
 * @param mode `fill` to fill missing key, `clean` to remove useless key
 */


function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;

  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  } // We only handle exist keys


  var keys = new Set(keyList.filter(function (key) {
    var hasEntity = !!keyEntities[key];

    if (!hasEntity) {
      warningMissKeys.push(key);
    }

    return hasEntity;
  }));
  var levelEntities = new Map();
  var maxLevel = 0; // Convert entities by level for calculation

  Object.keys(keyEntities).forEach(function (key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);

    if (!levelSet) {
      levelSet = new Set();
      levelEntities.set(level, levelSet);
    }

    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__/* .default */ .ZP)(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function (key) {
    return "'".concat(key, "'");
  }).join(', ')));
  var result;

  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }

  return result;
}

/***/ }),

/***/ 1089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ convertDataToEntities),
/* harmony export */   "F": () => (/* binding */ convertNodePropsToEventData)
/* harmony export */ });
/* unused harmony exports getKey, warningWithoutKey, convertTreeToData, flattenTreeData, traverseDataNodes, getTreeNodeProps */
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90484);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28991);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50344);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80334);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32239);




var _excluded = (/* unused pure expression or super */ null && (["children"]));



function getKey(key, pos) {
  if (key !== null && key !== undefined) {
    return key;
  }

  return pos;
}
/**
 * Warning if TreeNode do not provides key
 */

function warningWithoutKey() {
  var treeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keys = new Map();

  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (list || []).forEach(function (treeNode) {
      var key = treeNode.key,
          children = treeNode.children;
      warning(key !== null && key !== undefined, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
      var recordKey = String(key);
      warning(!keys.has(recordKey) || key === null || key === undefined, "Same 'key' exist in the Tree: ".concat(recordKey));
      keys.set(recordKey, true);
      dig(children, "".concat(path).concat(recordKey, " > "));
    });
  }

  dig(treeData);
}
/**
 * Convert `children` of Tree into `treeData` structure.
 */

function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = toArray(node);
    return treeNodes.map(function (treeNode) {
      // Filter invalidate node
      if (!isTreeNode(treeNode)) {
        warning(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
        return null;
      }

      var key = treeNode.key;

      var _treeNode$props = treeNode.props,
          children = _treeNode$props.children,
          rest = _objectWithoutProperties(_treeNode$props, _excluded);

      var dataNode = _objectSpread({
        key: key
      }, rest);

      var parsedChildren = dig(children);

      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }

      return dataNode;
    }).filter(function (dataNode) {
      return dataNode;
    });
  }

  return dig(rootNodes);
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param treeNodeList Origin data node list
 * @param expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 */

function flattenTreeData() {
  var treeNodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var expandedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];

  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return list.map(function (treeNode, index) {
      var pos = getPosition(parent ? parent.pos : '0', index);
      var mergedKey = getKey(treeNode.key, pos); // Add FlattenDataNode into list

      var flattenNode = _objectSpread(_objectSpread({}, treeNode), {}, {
        parent: parent,
        pos: pos,
        children: null,
        data: treeNode,
        isStart: [].concat(_toConsumableArray(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat(_toConsumableArray(parent ? parent.isEnd : []), [index === list.length - 1])
      });

      flattenList.push(flattenNode); // Loop treeNode children

      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode.children || [], flattenNode);
      } else {
        flattenNode.children = [];
      }

      return flattenNode;
    });
  }

  dig(treeNodeList);
  return flattenList;
}
/**
 * Traverse all the data by `treeData`.
 * Please not use it out of the `rc-tree` since we may refactor this code.
 */

function traverseDataNodes(dataNodes, callback, // To avoid too many params, let use config instead of origin param
config) {
  // Init config
  var externalGetKey = null;
  var childrenPropName;

  var configType = (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(config);

  if (configType === 'function' || configType === 'string') {
    // Legacy getKey param
    externalGetKey = config;
  } else if (config && configType === 'object') {
    childrenPropName = config.childrenPropName;
    externalGetKey = config.externalGetKey;
  }

  childrenPropName = childrenPropName || 'children'; // Get keys

  var syntheticGetKey;

  if (externalGetKey) {
    if (typeof externalGetKey === 'string') {
      syntheticGetKey = function syntheticGetKey(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === 'function') {
      syntheticGetKey = function syntheticGetKey(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey(node, pos) {
      return getKey(node.key, pos);
    };
  } // Process


  function processNode(node, index, parent) {
    var children = node ? node[childrenPropName] : dataNodes;
    var pos = node ? (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .getPosition */ .bt)(parent.pos, index) : '0'; // Process node if is not root

    if (node) {
      var key = syntheticGetKey(node, pos);
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1
      };
      callback(data);
    } // Process children node


    if (children) {
      children.forEach(function (subNode, subIndex) {
        processNode(subNode, subIndex, {
          node: node,
          pos: pos,
          level: parent ? parent.level + 1 : -1
        });
      });
    }
  }

  processNode(null);
}
/**
 * Convert `treeData` into entity records.
 */

function convertDataToEntities(dataNodes) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref.initWrapper,
      processEntity = _ref.processEntity,
      onProcessFinished = _ref.onProcessFinished,
      externalGetKey = _ref.externalGetKey,
      childrenPropName = _ref.childrenPropName;

  var
  /** @deprecated Use `config.externalGetKey` instead */
  legacyExternalGetKey = arguments.length > 2 ? arguments[2] : undefined;
  // Init config
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseDataNodes(dataNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos,
        level = item.level;
    var entity = {
      node: node,
      index: index,
      key: key,
      pos: pos,
      level: level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity; // Fill children

    entity.parent = posEntities[parentPos];

    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName: childrenPropName
  });

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}
/**
 * Get TreeNode props with Tree props.
 */

function getTreeNodeProps(key, _ref2) {
  var expandedKeys = _ref2.expandedKeys,
      selectedKeys = _ref2.selectedKeys,
      loadedKeys = _ref2.loadedKeys,
      loadingKeys = _ref2.loadingKeys,
      checkedKeys = _ref2.checkedKeys,
      halfCheckedKeys = _ref2.halfCheckedKeys,
      dragOverNodeKey = _ref2.dragOverNodeKey,
      dropPosition = _ref2.dropPosition,
      keyEntities = _ref2.keyEntities;
  var entity = keyEntities[key];
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ''),
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}
function convertNodePropsToEventData(props) {
  var data = props.data,
      expanded = props.expanded,
      selected = props.selected,
      checked = props.checked,
      loaded = props.loaded,
      loading = props.loading,
      halfChecked = props.halfChecked,
      dragOver = props.dragOver,
      dragOverGapTop = props.dragOverGapTop,
      dragOverGapBottom = props.dragOverGapBottom,
      pos = props.pos,
      active = props.active;

  var eventData = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({}, data), {}, {
    expanded: expanded,
    selected: selected,
    checked: checked,
    loaded: loaded,
    loading: loading,
    halfChecked: halfChecked,
    dragOver: dragOver,
    dragOverGapTop: dragOverGapTop,
    dragOverGapBottom: dragOverGapBottom,
    pos: pos,
    active: active
  });

  if (!('props' in eventData)) {
    Object.defineProperty(eventData, 'props', {
      get: function get() {
        (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP)(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
        return props;
      }
    });
  }

  return eventData;
}

/***/ }),

/***/ 74204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getScrollBarSize),
/* harmony export */   "o": () => (/* binding */ getTargetScrollBarSize)
/* harmony export */ });
/* eslint-disable no-param-reassign */
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}

function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }

  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
      width = _getComputedStyle.width,
      height = _getComputedStyle.height;

  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}

/***/ })

}]);