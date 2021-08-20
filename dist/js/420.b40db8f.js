(self["webpackChunkreact_admin"] = self["webpackChunkreact_admin"] || []).push([[420],{

/***/ 79508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ icons_CheckOutlined)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js
// This icon file is generated automatically.
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
/* harmony default export */ const asn_CheckOutlined = (CheckOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(27029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CheckOutlined_CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_CheckOutlined
  }));
};

CheckOutlined_CheckOutlined.displayName = 'CheckOutlined';
/* harmony default export */ const icons_CheckOutlined = (/*#__PURE__*/react.forwardRef(CheckOutlined_CheckOutlined));

/***/ }),

/***/ 66213:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _get)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(77608);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,getPrototypeOf/* default */.Z)(object);
    if (object === null) break;
  }

  return object;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ 14722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ antd_img_crop_esm)
});

;// CONCATENATED MODULE: ./node_modules/antd-img-crop/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/antd-img-crop/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/antd-img-crop/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/antd-img-crop/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(30224);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-easy-crop/index.module.js + 1 modules
var index_module = __webpack_require__(33275);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(42051);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/rc-dialog/es/index.js + 10 modules
var es = __webpack_require__(89493);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(54549);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(42921);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28481);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/usePatchElement.js



function usePatchElement() {
  var _React$useState = react.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  var patchElement = react.useCallback(function (element) {
    // append a new element to elements (and create a new ref)
    setElements(function (originElements) {
      return [].concat((0,toConsumableArray/* default */.Z)(originElements), [element]);
    }); // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect

    return function () {
      setElements(function (originElements) {
        return originElements.filter(function (ele) {
          return ele !== element;
        });
      });
    };
  }, []);
  return [elements, patchElement];
}
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/button/button.js + 5 modules
var button_button = __webpack_require__(37827);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/ActionButton.js






var ActionButton = function ActionButton(props) {
  var clickedRef = react.useRef(false);
  var ref = react.useRef();

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  react.useEffect(function () {
    var timeoutId;

    if (props.autoFocus) {
      var $this = ref.current;
      timeoutId = setTimeout(function () {
        return $this.focus();
      });
    }

    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  var handlePromiseOnOk = function handlePromiseOnOk(returnValueOfOnOk) {
    var closeModal = props.closeModal;

    if (!returnValueOfOnOk || !returnValueOfOnOk.then) {
      return;
    }

    setLoading(true);
    returnValueOfOnOk.then(function () {
      // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
      // setState({ loading: false });
      closeModal.apply(void 0, arguments);
    }, function (e) {
      // Emit error when catch promise reject
      // eslint-disable-next-line no-console
      console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

      setLoading(false);
      clickedRef.current = false;
    });
  };

  var onClick = function onClick() {
    var actionFn = props.actionFn,
        closeModal = props.closeModal;

    if (clickedRef.current) {
      return;
    }

    clickedRef.current = true;

    if (!actionFn) {
      closeModal();
      return;
    }

    var returnValueOfOnOk;

    if (actionFn.length) {
      returnValueOfOnOk = actionFn(closeModal); // https://github.com/ant-design/ant-design/issues/23358

      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();

      if (!returnValueOfOnOk) {
        closeModal();
        return;
      }
    }

    handlePromiseOnOk(returnValueOfOnOk);
  };

  var type = props.type,
      children = props.children,
      prefixCls = props.prefixCls,
      buttonProps = props.buttonProps;
  return /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, (0,button_button/* convertLegacyProps */.n)(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: ref
  }), children);
};

/* harmony default export */ const modal_ActionButton = (ActionButton);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(21687);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js
var config_provider = __webpack_require__(49134);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/ConfirmDialog.js









var ConfirmDialog = function ConfirmDialog(props) {
  var icon = props.icon,
      onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okText = props.okText,
      okButtonProps = props.okButtonProps,
      cancelText = props.cancelText,
      cancelButtonProps = props.cancelButtonProps,
      direction = props.direction,
      prefixCls = props.prefixCls,
      rootPrefixCls = props.rootPrefixCls,
      bodyStyle = props.bodyStyle,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? false : _props$closable,
      closeIcon = props.closeIcon,
      modalRender = props.modalRender,
      focusTriggerAfterClose = props.focusTriggerAfterClose;
  (0,devWarning/* default */.Z)(!(typeof icon === 'string' && icon.length > 2), 'Modal', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")); // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon

  var okType = props.okType || 'primary';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var classString = classnames_default()(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), (0,defineProperty/* default */.Z)({}, "".concat(contentPrefixCls, "-rtl"), direction === 'rtl'), props.className);
  var cancelButton = okCancel && /*#__PURE__*/react.createElement(modal_ActionButton, {
    actionFn: onCancel,
    closeModal: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, cancelText);
  return /*#__PURE__*/react.createElement(modal_Modal, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(contentPrefixCls, "-centered"), !!props.centered)),
    onCancel: function onCancel() {
      return close({
        triggerCancel: true
      });
    },
    visible: visible,
    title: "",
    footer: "",
    transitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'fade', props.maskTransitionName),
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer,
    closable: closable,
    closeIcon: closeIcon,
    modalRender: modalRender,
    focusTriggerAfterClose: focusTriggerAfterClose
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    prefixCls: rootPrefixCls
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-body"),
    style: bodyStyle
  }, icon, props.title === undefined ? null : /*#__PURE__*/react.createElement("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content))), /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, /*#__PURE__*/react.createElement(modal_ActionButton, {
    type: okType,
    actionFn: onOk,
    closeModal: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, okText))));
};

/* harmony default export */ const modal_ConfirmDialog = (ConfirmDialog);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js
var locale_default = __webpack_require__(7734);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(65632);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/HookModal.js








var HookModal = function HookModal(_ref, ref) {
  var afterClose = _ref.afterClose,
      config = _ref.config;

  var _React$useState = react.useState(true),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var _React$useState3 = react.useState(config),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      innerConfig = _React$useState4[0],
      setInnerConfig = _React$useState4[1];

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      direction = _React$useContext.direction,
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('modal');
  var rootPrefixCls = getPrefixCls();

  function close() {
    setVisible(false);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (innerConfig.onCancel && triggerCancel) {
      innerConfig.onCancel();
    }
  }

  react.useImperativeHandle(ref, function () {
    return {
      destroy: close,
      update: function update(newConfig) {
        setInnerConfig(function (originConfig) {
          return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, originConfig), newConfig);
        });
      }
    };
  });
  return /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, {
    componentName: "Modal",
    defaultLocale: locale_default/* default.Modal */.Z.Modal
  }, function (modalLocale) {
    return /*#__PURE__*/react.createElement(modal_ConfirmDialog, (0,esm_extends/* default */.Z)({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls
    }, innerConfig, {
      close: close,
      visible: visible,
      afterClose: afterClose,
      okText: innerConfig.okText || (innerConfig.okCancel ? modalLocale.okText : modalLocale.justOkText),
      direction: direction,
      cancelText: innerConfig.cancelText || modalLocale.cancelText
    }));
  });
};

/* harmony default export */ const useModal_HookModal = (/*#__PURE__*/react.forwardRef(HookModal));
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__(68628);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(15873);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(73218);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__(57119);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/locale.js
var locale = __webpack_require__(83008);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/confirm.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












var defaultRootPrefixCls = '';

function getRootPrefixCls() {
  return defaultRootPrefixCls;
}

function confirm_confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div); // eslint-disable-next-line @typescript-eslint/no-use-before-define

  var currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, config), {
    close: close,
    visible: true
  });

  function destroy() {
    var unmountResult = react_dom.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < destroyFns.length; i++) {
      var fn = destroyFns[i]; // eslint-disable-next-line @typescript-eslint/no-use-before-define

      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render(_a) {
    var okText = _a.okText,
        cancelText = _a.cancelText,
        customizePrefixCls = _a.prefixCls,
        props = __rest(_a, ["okText", "cancelText", "prefixCls"]);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */


    setTimeout(function () {
      var runtimeLocale = (0,locale/* getConfirmLocale */.A)();

      var _globalConfig = (0,config_provider/* globalConfig */.w6)(),
          getPrefixCls = _globalConfig.getPrefixCls; // because Modal.config  set rootPrefixCls, which is different from other components


      var rootPrefixCls = getPrefixCls(undefined, getRootPrefixCls());
      var prefixCls = customizePrefixCls || "".concat(rootPrefixCls, "-modal");
      react_dom.render( /*#__PURE__*/react.createElement(modal_ConfirmDialog, (0,esm_extends/* default */.Z)({}, props, {
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        okText: okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText),
        cancelText: cancelText || runtimeLocale.cancelText
      })), div);
    });
  }

  function close() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, currentConfig), {
      visible: false,
      afterClose: function afterClose() {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }

        destroy.apply(_this, args);
      }
    });
    render(currentConfig);
  }

  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, currentConfig), configUpdate);
    }

    render(currentConfig);
  }

  render(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
}
function withWarn(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(ExclamationCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'warning'
  });
}
function withInfo(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(InfoCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'info'
  });
}
function withSuccess(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(CheckCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'success'
  });
}
function withError(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(CloseCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'error'
  });
}
function withConfirm(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(ExclamationCircleOutlined/* default */.Z, null),
    okCancel: true
  }, props), {
    type: 'confirm'
  });
}
function modalGlobalConfig(_ref) {
  var rootPrefixCls = _ref.rootPrefixCls;
  (0,devWarning/* default */.Z)(false, 'Modal', 'Modal.config is deprecated. Please use ConfigProvider.config instead.');
  defaultRootPrefixCls = rootPrefixCls;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/index.js






var uuid = 0;
var ElementsHolder = /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(function (_props, ref) {
  var _usePatchElement = usePatchElement(),
      _usePatchElement2 = (0,slicedToArray/* default */.Z)(_usePatchElement, 2),
      elements = _usePatchElement2[0],
      patchElement = _usePatchElement2[1];

  react.useImperativeHandle(ref, function () {
    return {
      patchElement: patchElement
    };
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, elements);
}));
function useModal() {
  var holderRef = react.useRef(null); // ========================== Effect ==========================

  var _React$useState = react.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      actionQueue = _React$useState2[0],
      setActionQueue = _React$useState2[1];

  react.useEffect(function () {
    if (actionQueue.length) {
      var cloneQueue = (0,toConsumableArray/* default */.Z)(actionQueue);

      cloneQueue.forEach(function (action) {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]); // =========================== Hook ===========================

  var getConfirmFunc = react.useCallback(function (withFunc) {
    return function hookConfirm(config) {
      var _a;

      uuid += 1;
      var modalRef = /*#__PURE__*/react.createRef();
      var closeFunc;
      var modal = /*#__PURE__*/react.createElement(useModal_HookModal, {
        key: "modal-".concat(uuid),
        config: withFunc(config),
        ref: modalRef,
        afterClose: function afterClose() {
          closeFunc();
        }
      });
      closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
      return {
        destroy: function destroy() {
          function destroyAction() {
            var _a;

            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
          }

          if (modalRef.current) {
            destroyAction();
          } else {
            setActionQueue(function (prev) {
              return [].concat((0,toConsumableArray/* default */.Z)(prev), [destroyAction]);
            });
          }
        },
        update: function update(newConfig) {
          function updateAction() {
            var _a;

            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.update(newConfig);
          }

          if (modalRef.current) {
            updateAction();
          } else {
            setActionQueue(function (prev) {
              return [].concat((0,toConsumableArray/* default */.Z)(prev), [updateAction]);
            });
          }
        }
      };
    };
  }, []);
  var fns = react.useMemo(function () {
    return {
      info: getConfirmFunc(withInfo),
      success: getConfirmFunc(withSuccess),
      error: getConfirmFunc(withError),
      warning: getConfirmFunc(withWarn),
      confirm: getConfirmFunc(withConfirm)
    };
  }, []); // eslint-disable-next-line react/jsx-key

  return [fns, /*#__PURE__*/react.createElement(ElementsHolder, {
    ref: holderRef
  })];
}
// EXTERNAL MODULE: ./node_modules/antd/es/_util/styleChecker.js
var styleChecker = __webpack_require__(31808);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/Modal.js



var Modal_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













var mousePosition;
var destroyFns = []; // ref: https://github.com/ant-design/ant-design/issues/15795

var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if ((0,styleChecker/* canUseDocElement */.jD)()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}

var Modal = function Modal(props) {
  var _classNames;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var handleCancel = function handleCancel(e) {
    var onCancel = props.onCancel;
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };

  var handleOk = function handleOk(e) {
    var onOk = props.onOk;
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
  };

  var renderFooter = function renderFooter(locale) {
    var okText = props.okText,
        okType = props.okType,
        cancelText = props.cancelText,
        confirmLoading = props.confirmLoading;
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({
      onClick: handleCancel
    }, props.cancelButtonProps), cancelText || locale.cancelText), /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, (0,button_button/* convertLegacyProps */.n)(okType), {
      loading: confirmLoading,
      onClick: handleOk
    }, props.okButtonProps), okText || locale.okText));
  };

  var customizePrefixCls = props.prefixCls,
      footer = props.footer,
      visible = props.visible,
      wrapClassName = props.wrapClassName,
      centered = props.centered,
      getContainer = props.getContainer,
      closeIcon = props.closeIcon,
      _props$focusTriggerAf = props.focusTriggerAfterClose,
      focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
      restProps = Modal_rest(props, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);

  var prefixCls = getPrefixCls('modal', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var defaultFooter = /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, {
    componentName: "Modal",
    defaultLocale: (0,locale/* getConfirmLocale */.A)()
  }, renderFooter);
  var closeIconToRender = /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var wrapClassNameExtended = classnames_default()(wrapClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-centered"), !!centered), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrap-rtl"), direction === 'rtl'), _classNames));
  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({}, restProps, {
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    wrapClassName: wrapClassNameExtended,
    footer: footer === undefined ? defaultFooter : footer,
    visible: visible,
    mousePosition: mousePosition,
    onClose: handleCancel,
    closeIcon: closeIconToRender,
    focusTriggerAfterClose: focusTriggerAfterClose,
    transitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'fade', props.maskTransitionName)
  }));
};

Modal.useModal = useModal;
Modal.defaultProps = {
  width: 520,
  confirmLoading: false,
  visible: false,
  okType: 'primary'
};
/* harmony default export */ const modal_Modal = (Modal);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/index.js



function modalWarn(props) {
  return confirm_confirm(withWarn(props));
}

var es_modal_Modal = modal_Modal;

es_modal_Modal.info = function infoFn(props) {
  return confirm_confirm(withInfo(props));
};

es_modal_Modal.success = function successFn(props) {
  return confirm_confirm(withSuccess(props));
};

es_modal_Modal.error = function errorFn(props) {
  return confirm_confirm(withError(props));
};

es_modal_Modal.warning = modalWarn;
es_modal_Modal.warn = modalWarn;

es_modal_Modal.confirm = function confirmFn(props) {
  return confirm_confirm(withConfirm(props));
};

es_modal_Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    var close = destroyFns.pop();

    if (close) {
      close();
    }
  }
};

es_modal_Modal.config = modalGlobalConfig;
/* harmony default export */ const modal = (es_modal_Modal);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(90484);
// EXTERNAL MODULE: ./node_modules/rc-slider/es/index.js + 10 modules
var rc_slider_es = __webpack_require__(16230);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 1 modules
var tooltip = __webpack_require__(31097);
;// CONCATENATED MODULE: ./node_modules/antd/es/slider/SliderTooltip.js






var SliderTooltip = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var visible = props.visible;
  var innerRef = (0,react.useRef)(null);
  var rafRef = (0,react.useRef)(null);

  function cancelKeepAlign() {
    raf/* default.cancel */.Z.cancel(rafRef.current);
    rafRef.current = null;
  }

  function keepAlign() {
    rafRef.current = (0,raf/* default */.Z)(function () {
      var _a;

      (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
      rafRef.current = null;
    });
  }

  react.useEffect(function () {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [visible, props.title]);
  return /*#__PURE__*/react.createElement(tooltip/* default */.Z, (0,esm_extends/* default */.Z)({
    ref: (0,es_ref/* composeRef */.sQ)(innerRef, ref)
  }, props));
});
/* harmony default export */ const slider_SliderTooltip = (SliderTooltip);
;// CONCATENATED MODULE: ./node_modules/antd/es/slider/index.js





var slider_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var Slider = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      getPopupContainer = _React$useContext.getPopupContainer;

  var _React$useState = react.useState({}),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      visibles = _React$useState2[0],
      setVisibles = _React$useState2[1];

  var toggleTooltipVisible = function toggleTooltipVisible(index, visible) {
    setVisibles(function (prev) {
      return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, prev), (0,defineProperty/* default */.Z)({}, index, visible));
    });
  };

  var getTooltipPlacement = function getTooltipPlacement(tooltipPlacement, vertical) {
    if (tooltipPlacement) {
      return tooltipPlacement;
    }

    if (!vertical) {
      return 'top';
    }

    return direction === 'rtl' ? 'left' : 'right';
  };

  var handleWithTooltip = function handleWithTooltip(_a) {
    var tooltipPrefixCls = _a.tooltipPrefixCls,
        prefixCls = _a.prefixCls,
        _b = _a.info,
        value = _b.value,
        dragging = _b.dragging,
        index = _b.index,
        restProps = slider_rest(_b, ["value", "dragging", "index"]);

    var tipFormatter = props.tipFormatter,
        tooltipVisible = props.tooltipVisible,
        tooltipPlacement = props.tooltipPlacement,
        getTooltipPopupContainer = props.getTooltipPopupContainer,
        vertical = props.vertical;
    var isTipFormatter = tipFormatter ? visibles[index] || dragging : false;
    var visible = tooltipVisible || tooltipVisible === undefined && isTipFormatter;
    var rootPrefixCls = getPrefixCls();
    return /*#__PURE__*/react.createElement(slider_SliderTooltip, {
      prefixCls: tooltipPrefixCls,
      title: tipFormatter ? tipFormatter(value) : '',
      visible: visible,
      placement: getTooltipPlacement(tooltipPlacement, vertical),
      transitionName: "".concat(rootPrefixCls, "-zoom-down"),
      key: index,
      overlayClassName: "".concat(prefixCls, "-tooltip"),
      getPopupContainer: getTooltipPopupContainer || getPopupContainer
    }, /*#__PURE__*/react.createElement(rc_slider_es/* Handle */.HH, (0,esm_extends/* default */.Z)({}, restProps, {
      value: value,
      onMouseEnter: function onMouseEnter() {
        return toggleTooltipVisible(index, true);
      },
      onMouseLeave: function onMouseLeave() {
        return toggleTooltipVisible(index, false);
      }
    })));
  };

  var customizePrefixCls = props.prefixCls,
      customizeTooltipPrefixCls = props.tooltipPrefixCls,
      range = props.range,
      className = props.className,
      restProps = slider_rest(props, ["prefixCls", "tooltipPrefixCls", "range", "className"]);

  var prefixCls = getPrefixCls('slider', customizePrefixCls);
  var tooltipPrefixCls = getPrefixCls('tooltip', customizeTooltipPrefixCls);
  var cls = classnames_default()(className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl')); // make reverse default on rtl direction

  if (direction === 'rtl' && !restProps.vertical) {
    restProps.reverse = !restProps.reverse;
  } // extrack draggableTrack from range={{ ... }}


  var draggableTrack;

  if ((0,esm_typeof/* default */.Z)(range) === 'object') {
    draggableTrack = range.draggableTrack;
  }

  if (range) {
    return /*#__PURE__*/react.createElement(rc_slider_es/* Range */.e6, (0,esm_extends/* default */.Z)({}, restProps, {
      step: restProps.step,
      draggableTrack: draggableTrack,
      className: cls,
      ref: ref,
      handle: function handle(info) {
        return handleWithTooltip({
          tooltipPrefixCls: tooltipPrefixCls,
          prefixCls: prefixCls,
          info: info
        });
      },
      prefixCls: prefixCls
    }));
  }

  return /*#__PURE__*/react.createElement(rc_slider_es/* default */.ZP, (0,esm_extends/* default */.Z)({}, restProps, {
    step: restProps.step,
    className: cls,
    ref: ref,
    handle: function handle(info) {
      return handleWithTooltip({
        tooltipPrefixCls: tooltipPrefixCls,
        prefixCls: prefixCls,
        info: info
      });
    },
    prefixCls: prefixCls
  }));
});
Slider.displayName = 'Slider';
Slider.defaultProps = {
  tipFormatter: function tipFormatter(value) {
    return typeof value === 'number' ? value.toString() : '';
  }
};
/* harmony default export */ const slider = (Slider);
;// CONCATENATED MODULE: ./node_modules/antd-img-crop/dist/antd-img-crop.esm.js
function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}












__$styleInject(".antd-img-crop-modal .ant-modal-body {\n  padding-bottom: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-container {\n  position: relative;\n  width: 100%;\n  height: 40vh;\n  margin-bottom: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-control {\n  display: flex;\n  align-items: center;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.antd-img-crop-modal .antd-img-crop-control button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  font-style: normal;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n}\n.antd-img-crop-modal .antd-img-crop-control button[disabled] {\n  cursor: default;\n}\n.antd-img-crop-modal .antd-img-crop-control.zoom button {\n  font-size: 18px;\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button {\n  font-size: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button:first-of-type {\n  transform: rotate(-20deg);\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button:last-of-type {\n  transform: rotate(20deg);\n}\n.antd-img-crop-modal .antd-img-crop-control .ant-slider {\n  flex: 1;\n  margin: 0 8px;\n}\n");

var _excluded = ["beforeUpload", "accept"];
var pkg = 'antd-img-crop';

var noop = function noop() {};

var MEDIA_CLASS = pkg + "-media";
var ZOOM_STEP = 0.1;
var MIN_ROTATE = 0;
var MAX_ROTATE = 360;
var ROTATE_STEP = 1;
var EasyCrop = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var src = props.src,
      aspect = props.aspect,
      shape = props.shape,
      grid = props.grid,
      hasZoom = props.hasZoom,
      zoomVal = props.zoomVal,
      rotateVal = props.rotateVal,
      setZoomVal = props.setZoomVal,
      setRotateVal = props.setRotateVal,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      onComplete = props.onComplete,
      cropperProps = props.cropperProps;

  var _useState = (0,react.useState)({
    x: 0,
    y: 0
  }),
      crop = _useState[0],
      setCrop = _useState[1];

  var _useState2 = (0,react.useState)({
    width: 0,
    height: 0
  }),
      cropSize = _useState2[0],
      setCropSize = _useState2[1];

  var onCropComplete = (0,react.useCallback)(function (croppedArea, croppedAreaPixels) {
    onComplete(croppedAreaPixels);
  }, [onComplete]);
  var onMediaLoaded = (0,react.useCallback)(function (mediaSize) {
    var width = mediaSize.width,
        height = mediaSize.height;
    var ratioWidth = height * aspect;

    if (width > ratioWidth) {
      setCropSize({
        width: ratioWidth,
        height: height
      });
    } else {
      setCropSize({
        width: width,
        height: width / aspect
      });
    }
  }, [aspect]);
  return /*#__PURE__*/react.createElement(index_module/* default */.Z, Object.assign({}, cropperProps, {
    ref: ref,
    image: src,
    crop: crop,
    cropSize: cropSize,
    onCropChange: setCrop,
    aspect: aspect,
    cropShape: shape,
    showGrid: grid,
    zoomWithScroll: hasZoom,
    zoom: zoomVal,
    rotation: rotateVal,
    onZoomChange: setZoomVal,
    onRotationChange: setRotateVal,
    minZoom: minZoom,
    maxZoom: maxZoom,
    onCropComplete: onCropComplete,
    onMediaLoaded: onMediaLoaded,
    classes: {
      containerClassName: pkg + "-container",
      mediaClassName: MEDIA_CLASS
    }
  }));
});
EasyCrop.propTypes = {
  src: (prop_types_default()).string,
  aspect: (prop_types_default()).number,
  shape: (prop_types_default()).string,
  grid: (prop_types_default()).bool,
  hasZoom: (prop_types_default()).bool,
  zoomVal: (prop_types_default()).number,
  rotateVal: (prop_types_default()).number,
  setZoomVal: (prop_types_default()).func,
  setRotateVal: (prop_types_default()).func,
  minZoom: (prop_types_default()).number,
  maxZoom: (prop_types_default()).number,
  onComplete: (prop_types_default()).func,
  cropperProps: (prop_types_default()).object
};
var ImgCrop = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var aspect = props.aspect,
      shape = props.shape,
      grid = props.grid,
      quality = props.quality,
      zoom = props.zoom,
      rotate = props.rotate,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      fillColor = props.fillColor,
      modalTitle = props.modalTitle,
      modalWidth = props.modalWidth,
      modalOk = props.modalOk,
      modalCancel = props.modalCancel,
      beforeCrop = props.beforeCrop,
      children = props.children,
      cropperProps = props.cropperProps;
  var hasZoom = zoom === true;
  var hasRotate = rotate === true;

  var _useState3 = (0,react.useState)(''),
      src = _useState3[0],
      setSrc = _useState3[1];

  var _useState4 = (0,react.useState)(1),
      zoomVal = _useState4[0],
      setZoomVal = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      rotateVal = _useState5[0],
      setRotateVal = _useState5[1];

  var beforeUploadRef = (0,react.useRef)();
  var fileRef = (0,react.useRef)();
  var resolveRef = (0,react.useRef)(noop);
  var rejectRef = (0,react.useRef)(noop);
  var cropPixelsRef = (0,react.useRef)();
  /**
   * Upload
   */

  var renderUpload = (0,react.useCallback)(function () {
    var upload = Array.isArray(children) ? children[0] : children;

    var _upload$props = upload.props,
        beforeUpload = _upload$props.beforeUpload,
        accept = _upload$props.accept,
        restUploadProps = _objectWithoutPropertiesLoose(_upload$props, _excluded);

    beforeUploadRef.current = beforeUpload;
    return _extends({}, upload, {
      props: _extends({}, restUploadProps, {
        accept: accept || 'image/*',
        beforeUpload: function beforeUpload(file, fileList) {
          return new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(resolve, reject) {
              var reader;
              return regenerator_default().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = beforeCrop;

                      if (!_context.t0) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 4;
                      return beforeCrop(file, fileList);

                    case 4:
                      _context.t0 = !_context.sent;

                    case 5:
                      if (!_context.t0) {
                        _context.next = 8;
                        break;
                      }

                      reject();
                      return _context.abrupt("return");

                    case 8:
                      fileRef.current = file;
                      resolveRef.current = resolve;
                      rejectRef.current = reject;
                      reader = new FileReader();
                      reader.addEventListener('load', function () {
                        setSrc(reader.result);
                      });
                      reader.readAsDataURL(file);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      })
    });
  }, [beforeCrop, children]);
  /**
   * EasyCrop
   */

  var onComplete = (0,react.useCallback)(function (croppedAreaPixels) {
    cropPixelsRef.current = croppedAreaPixels;
  }, []);
  /**
   * Controls
   */

  var isMinZoom = zoomVal - ZOOM_STEP < minZoom;
  var isMaxZoom = zoomVal + ZOOM_STEP > maxZoom;
  var isMinRotate = rotateVal === MIN_ROTATE;
  var isMaxRotate = rotateVal === MAX_ROTATE;
  var subZoomVal = (0,react.useCallback)(function () {
    if (!isMinZoom) setZoomVal(zoomVal - ZOOM_STEP);
  }, [isMinZoom, zoomVal]);
  var addZoomVal = (0,react.useCallback)(function () {
    if (!isMaxZoom) setZoomVal(zoomVal + ZOOM_STEP);
  }, [isMaxZoom, zoomVal]);
  var subRotateVal = (0,react.useCallback)(function () {
    if (!isMinRotate) setRotateVal(rotateVal - ROTATE_STEP);
  }, [isMinRotate, rotateVal]);
  var addRotateVal = (0,react.useCallback)(function () {
    if (!isMaxRotate) setRotateVal(rotateVal + ROTATE_STEP);
  }, [isMaxRotate, rotateVal]);
  /**
   * Modal
   */

  var modalProps = (0,react.useMemo)(function () {
    var obj = {
      width: modalWidth,
      okText: modalOk,
      cancelText: modalCancel
    };
    Object.keys(obj).forEach(function (key) {
      if (!obj[key]) delete obj[key];
    });
    return obj;
  }, [modalCancel, modalOk, modalWidth]);
  var onClose = (0,react.useCallback)(function () {
    setSrc('');
    setZoomVal(1);
    setRotateVal(0);
  }, []);
  var onOk = (0,react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3() {
    var naturalImg, naturalWidth, naturalHeight, canvas, ctx, maxLen, halfMax, left, top, maxImgData, _cropPixelsRef$curren, width, height, x, y, _fileRef$current, type, name, uid;

    return regenerator_default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            onClose();
            naturalImg = document.querySelector("." + MEDIA_CLASS);
            naturalWidth = naturalImg.naturalWidth, naturalHeight = naturalImg.naturalHeight;
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d'); // create a max canvas to cover the source image after rotated

            maxLen = Math.sqrt(Math.pow(naturalWidth, 2) + Math.pow(naturalHeight, 2));
            canvas.width = maxLen;
            canvas.height = maxLen; // rotate the image

            if (hasRotate && rotateVal > 0 && rotateVal < 360) {
              halfMax = maxLen / 2;
              ctx.translate(halfMax, halfMax);
              ctx.rotate(rotateVal * Math.PI / 180);
              ctx.translate(-halfMax, -halfMax);
            }

            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height); // draw the source image in the center of the max canvas

            left = (maxLen - naturalWidth) / 2;
            top = (maxLen - naturalHeight) / 2;
            ctx.drawImage(naturalImg, left, top); // shrink the max canvas to the crop area size, then align two center points

            maxImgData = ctx.getImageData(0, 0, maxLen, maxLen);
            _cropPixelsRef$curren = cropPixelsRef.current, width = _cropPixelsRef$curren.width, height = _cropPixelsRef$curren.height, x = _cropPixelsRef$curren.x, y = _cropPixelsRef$curren.y;
            canvas.width = width;
            canvas.height = height; // fill the background once again

            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.putImageData(maxImgData, Math.round(-left - x), Math.round(-top - y)); // get the new image

            _fileRef$current = fileRef.current, type = _fileRef$current.type, name = _fileRef$current.name, uid = _fileRef$current.uid;
            canvas.toBlob( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(blob) {
                var newFile, res, passedFile, _type;

                return regenerator_default().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        newFile = new File([blob], name, {
                          type: type
                        });
                        newFile.uid = uid;

                        if (!(typeof beforeUploadRef.current !== 'function')) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return", resolveRef.current(newFile));

                      case 4:
                        res = beforeUploadRef.current(newFile, [newFile]);

                        if (!(typeof res !== 'boolean' && !res)) {
                          _context2.next = 8;
                          break;
                        }

                        console.error('beforeUpload must return a boolean or Promise');
                        return _context2.abrupt("return");

                      case 8:
                        if (!(res === true)) {
                          _context2.next = 10;
                          break;
                        }

                        return _context2.abrupt("return", resolveRef.current(newFile));

                      case 10:
                        if (!(res === false)) {
                          _context2.next = 12;
                          break;
                        }

                        return _context2.abrupt("return", rejectRef.current('not upload'));

                      case 12:
                        if (!(res && typeof res.then === 'function')) {
                          _context2.next = 25;
                          break;
                        }

                        _context2.prev = 13;
                        _context2.next = 16;
                        return res;

                      case 16:
                        passedFile = _context2.sent;
                        _type = Object.prototype.toString.call(passedFile);
                        if (_type === '[object File]' || _type === '[object Blob]') newFile = passedFile;
                        resolveRef.current(newFile);
                        _context2.next = 25;
                        break;

                      case 22:
                        _context2.prev = 22;
                        _context2.t0 = _context2["catch"](13);
                        rejectRef.current(_context2.t0);

                      case 25:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[13, 22]]);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }(), type, quality);

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [hasRotate, onClose, quality, rotateVal]);

  var renderComponent = function renderComponent(titleOfModal) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, renderUpload(), src && /*#__PURE__*/react.createElement(modal, Object.assign({
      visible: true,
      wrapClassName: pkg + "-modal",
      title: titleOfModal,
      onOk: onOk,
      onCancel: onClose,
      maskClosable: false,
      destroyOnClose: true
    }, modalProps), /*#__PURE__*/react.createElement(EasyCrop, {
      ref: ref,
      src: src,
      aspect: aspect,
      shape: shape,
      grid: grid,
      hasZoom: hasZoom,
      zoomVal: zoomVal,
      rotateVal: rotateVal,
      setZoomVal: setZoomVal,
      setRotateVal: setRotateVal,
      minZoom: minZoom,
      maxZoom: maxZoom,
      onComplete: onComplete,
      cropperProps: cropperProps
    }), hasZoom && /*#__PURE__*/react.createElement("div", {
      className: pkg + "-control zoom"
    }, /*#__PURE__*/react.createElement("button", {
      onClick: subZoomVal,
      disabled: isMinZoom
    }, "\uFF0D"), /*#__PURE__*/react.createElement(slider, {
      min: minZoom,
      max: maxZoom,
      step: ZOOM_STEP,
      value: zoomVal,
      onChange: setZoomVal
    }), /*#__PURE__*/react.createElement("button", {
      onClick: addZoomVal,
      disabled: isMaxZoom
    }, "\uFF0B")), hasRotate && /*#__PURE__*/react.createElement("div", {
      className: pkg + "-control rotate"
    }, /*#__PURE__*/react.createElement("button", {
      onClick: subRotateVal,
      disabled: isMinRotate
    }, "\u21BA"), /*#__PURE__*/react.createElement(slider, {
      min: MIN_ROTATE,
      max: MAX_ROTATE,
      step: ROTATE_STEP,
      value: rotateVal,
      onChange: setRotateVal
    }), /*#__PURE__*/react.createElement("button", {
      onClick: addRotateVal,
      disabled: isMaxRotate
    }, "\u21BB"))));
  };

  if (modalTitle) return renderComponent(modalTitle);
  return /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, null, function (locale, localeCode) {
    return renderComponent(localeCode === 'zh-cn' ? '编辑图片' : 'Edit image');
  });
});
ImgCrop.propTypes = {
  aspect: (prop_types_default()).number,
  shape: prop_types_default().oneOf(['rect', 'round']),
  grid: (prop_types_default()).bool,
  quality: (prop_types_default()).number,
  zoom: (prop_types_default()).bool,
  rotate: (prop_types_default()).bool,
  minZoom: (prop_types_default()).number,
  maxZoom: (prop_types_default()).number,
  fillColor: (prop_types_default()).string,
  modalTitle: (prop_types_default()).string,
  modalWidth: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  modalOk: (prop_types_default()).string,
  modalCancel: (prop_types_default()).string,
  beforeCrop: (prop_types_default()).func,
  cropperProps: (prop_types_default()).object,
  children: (prop_types_default()).node
};
ImgCrop.defaultProps = {
  aspect: 1,
  shape: 'rect',
  grid: false,
  quality: 0.4,
  zoom: true,
  rotate: false,
  minZoom: 1,
  maxZoom: 3,
  fillColor: 'white'
};

/* harmony default export */ const antd_img_crop_esm = (ImgCrop);


/***/ }),

/***/ 30224:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(35666);


/***/ }),

/***/ 71194:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36208);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83318);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57663);

 // style dependencies



/***/ }),

/***/ 66126:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36208);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40650);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22385);

 // style dependencies



/***/ }),

/***/ 11528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ upload)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(90484);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(42921);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28481);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-upload/es/index.js + 6 modules
var es = __webpack_require__(13059);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/Dragger.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var InternalDragger = function InternalDragger(_a, ref) {
  var style = _a.style,
      height = _a.height,
      restProps = __rest(_a, ["style", "height"]);

  return /*#__PURE__*/react.createElement(upload_Upload, (0,esm_extends/* default */.Z)({
    ref: ref
  }, restProps, {
    type: "drag",
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, style), {
      height: height
    })
  }));
};

var Dragger = /*#__PURE__*/react.forwardRef(InternalDragger);
Dragger.displayName = 'Dragger';
/* harmony default export */ const upload_Dragger = (Dragger);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(60444);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7085);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PaperClipOutlined.js
// This icon file is generated automatically.
var PaperClipOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, "name": "paper-clip", "theme": "outlined" };
/* harmony default export */ const asn_PaperClipOutlined = (PaperClipOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(27029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PaperClipOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PaperClipOutlined_PaperClipOutlined = function PaperClipOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_PaperClipOutlined
  }));
};

PaperClipOutlined_PaperClipOutlined.displayName = 'PaperClipOutlined';
/* harmony default export */ const icons_PaperClipOutlined = (/*#__PURE__*/react.forwardRef(PaperClipOutlined_PaperClipOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PictureTwoTone.js
// This icon file is generated automatically.
var PictureTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", "fill": primaryColor } }] }; }, "name": "picture", "theme": "twotone" };
/* harmony default export */ const asn_PictureTwoTone = (PictureTwoTone);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PictureTwoTone.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PictureTwoTone_PictureTwoTone = function PictureTwoTone(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_PictureTwoTone
  }));
};

PictureTwoTone_PictureTwoTone.displayName = 'PictureTwoTone';
/* harmony default export */ const icons_PictureTwoTone = (/*#__PURE__*/react.forwardRef(PictureTwoTone_PictureTwoTone));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FileTwoTone.js
// This icon file is generated automatically.
var FileTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", "fill": primaryColor } }] }; }, "name": "file", "theme": "twotone" };
/* harmony default export */ const asn_FileTwoTone = (FileTwoTone);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FileTwoTone.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileTwoTone_FileTwoTone = function FileTwoTone(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_FileTwoTone
  }));
};

FileTwoTone_FileTwoTone.displayName = 'FileTwoTone';
/* harmony default export */ const icons_FileTwoTone = (/*#__PURE__*/react.forwardRef(FileTwoTone_FileTwoTone));
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/utils.js


function file2Obj(file) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, file), {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file
  });
}
/** Upload fileList. Replace file if exist or just push into it. */

function updateFileList(file, fileList) {
  var nextFileList = (0,toConsumableArray/* default */.Z)(fileList);

  var fileIndex = nextFileList.findIndex(function (_ref) {
    var uid = _ref.uid;
    return uid === file.uid;
  });

  if (fileIndex === -1) {
    nextFileList.push(file);
  } else {
    nextFileList[fileIndex] = file;
  }

  return nextFileList;
}
function getFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  return fileList.filter(function (item) {
    return item[matchKey] === file[matchKey];
  })[0];
}
function removeFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  var removed = fileList.filter(function (item) {
    return item[matchKey] !== file[matchKey];
  });

  if (removed.length === fileList.length) {
    return null;
  }

  return removed;
} // ==================== Default Image Preview ====================

var extname = function extname() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var temp = url.split('/');
  var filename = temp[temp.length - 1];
  var filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

var isImageFileType = function isImageFileType(type) {
  return type.indexOf('image/') === 0;
};

var isImageUrl = function isImageUrl(file) {
  if (file.type && !file.thumbUrl) {
    return isImageFileType(file.type);
  }

  var url = file.thumbUrl || file.url || '';
  var extension = extname(url);

  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)) {
    return true;
  }

  if (/^data:/.test(url)) {
    // other file types of base64
    return false;
  }

  if (extension) {
    // other file types which have extension
    return false;
  }

  return true;
};
var MEASURE_SIZE = 200;
function previewImage(file) {
  return new Promise(function (resolve) {
    if (!file.type || !isImageFileType(file.type)) {
      resolve('');
      return;
    }

    var canvas = document.createElement('canvas');
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(MEASURE_SIZE, "px; height: ").concat(MEASURE_SIZE, "px; z-index: 9999; display: none;");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var img = new Image();

    img.onload = function () {
      var width = img.width,
          height = img.height;
      var drawWidth = MEASURE_SIZE;
      var drawHeight = MEASURE_SIZE;
      var offsetX = 0;
      var offsetY = 0;

      if (width > height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      var dataURL = canvas.toDataURL();
      document.body.removeChild(canvas);
      resolve(dataURL);
    };

    img.src = window.URL.createObjectURL(file);
  });
}
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(65632);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useForceUpdate.js
var useForceUpdate = __webpack_require__(57838);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeOutlined.js + 1 modules
var EyeOutlined = __webpack_require__(95357);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DeleteOutlined.js
// This icon file is generated automatically.
var DeleteOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, "name": "delete", "theme": "outlined" };
/* harmony default export */ const asn_DeleteOutlined = (DeleteOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DeleteOutlined_DeleteOutlined = function DeleteOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_DeleteOutlined
  }));
};

DeleteOutlined_DeleteOutlined.displayName = 'DeleteOutlined';
/* harmony default export */ const icons_DeleteOutlined = (/*#__PURE__*/react.forwardRef(DeleteOutlined_DeleteOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DownloadOutlined.js
// This icon file is generated automatically.
var DownloadOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, "name": "download", "theme": "outlined" };
/* harmony default export */ const asn_DownloadOutlined = (DownloadOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DownloadOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DownloadOutlined_DownloadOutlined = function DownloadOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_DownloadOutlined
  }));
};

DownloadOutlined_DownloadOutlined.displayName = 'DownloadOutlined';
/* harmony default export */ const icons_DownloadOutlined = (/*#__PURE__*/react.forwardRef(DownloadOutlined_DownloadOutlined));
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 1 modules
var tooltip = __webpack_require__(31097);
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
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(54549);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(79508);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(38819);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(43061);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(93355);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(21687);
// EXTERNAL MODULE: ./node_modules/@ant-design/colors/dist/index.esm.js
var index_esm = __webpack_require__(92138);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/utils.js

function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }

  if (progress > 100) {
    return 100;
  }

  return progress;
}
function getSuccessPercent(_ref) {
  var success = _ref.success,
      successPercent = _ref.successPercent;
  var percent = successPercent;
  /** @deprecated Use `percent` instead */

  if (success && 'progress' in success) {
    (0,devWarning/* default */.Z)(false, 'Progress', '`success.progress` is deprecated. Please use `success.percent` instead.');
    percent = success.progress;
  }

  if (success && 'percent' in success) {
    percent = success.percent;
  }

  return percent;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/Line.js


var Line_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




/**
 * @example
 *   {
 *     "0%": "#afc163",
 *     "75%": "#009900",
 *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *     "25%": "#66FF00",
 *     "100%": "#ffffff"
 *   }
 */

var sortGradient = function sortGradient(gradients) {
  var tempArr = [];
  Object.keys(gradients).forEach(function (key) {
    var formattedKey = parseFloat(key.replace(/%/g, ''));

    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(', ');
};
/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */

var handleGradient = function handleGradient(strokeColor, directionConfig) {
  var _strokeColor$from = strokeColor.from,
      from = _strokeColor$from === void 0 ? index_esm/* presetPrimaryColors.blue */.ez.blue : _strokeColor$from,
      _strokeColor$to = strokeColor.to,
      to = _strokeColor$to === void 0 ? index_esm/* presetPrimaryColors.blue */.ez.blue : _strokeColor$to,
      _strokeColor$directio = strokeColor.direction,
      direction = _strokeColor$directio === void 0 ? directionConfig === 'rtl' ? 'to left' : 'to right' : _strokeColor$directio,
      rest = Line_rest(strokeColor, ["from", "to", "direction"]);

  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }

  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};

var Line = function Line(props) {
  var prefixCls = props.prefixCls,
      directionConfig = props.direction,
      percent = props.percent,
      strokeWidth = props.strokeWidth,
      size = props.size,
      strokeColor = props.strokeColor,
      strokeLinecap = props.strokeLinecap,
      children = props.children,
      trailColor = props.trailColor,
      success = props.success;
  var backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
    background: strokeColor
  };
  var trailStyle = trailColor ? {
    backgroundColor: trailColor
  } : undefined;

  var percentStyle = (0,esm_extends/* default */.Z)({
    width: "".concat(validProgress(percent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : ''
  }, backgroundProps);

  var successPercent = getSuccessPercent(props);
  var successPercentStyle = {
    width: "".concat(validProgress(successPercent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : '',
    backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
  };
  var successSegment = successPercent !== undefined ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-success-bg"),
    style: successPercentStyle
  }) : null;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-outer")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    style: trailStyle
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-bg"),
    style: percentStyle
  }), successSegment)), children);
};

/* harmony default export */ const progress_Line = (Line);
// EXTERNAL MODULE: ./node_modules/rc-progress/es/index.js + 3 modules
var rc_progress_es = __webpack_require__(93770);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/Circle.js







function getPercentage(_ref) {
  var percent = _ref.percent,
      success = _ref.success,
      successPercent = _ref.successPercent;
  var realSuccessPercent = validProgress(getSuccessPercent({
    success: success,
    successPercent: successPercent
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
}

function getStrokeColor(_ref2) {
  var _ref2$success = _ref2.success,
      success = _ref2$success === void 0 ? {} : _ref2$success,
      strokeColor = _ref2.strokeColor;
  var successColor = success.strokeColor;
  return [successColor || index_esm/* presetPrimaryColors.green */.ez.green, strokeColor || null];
}

var Circle = function Circle(props) {
  var prefixCls = props.prefixCls,
      width = props.width,
      strokeWidth = props.strokeWidth,
      trailColor = props.trailColor,
      strokeLinecap = props.strokeLinecap,
      gapPosition = props.gapPosition,
      gapDegree = props.gapDegree,
      type = props.type,
      children = props.children,
      success = props.success;
  var circleSize = width || 120;
  var circleStyle = {
    width: circleSize,
    height: circleSize,
    fontSize: circleSize * 0.15 + 6
  };
  var circleWidth = strokeWidth || 6;
  var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';

  var getGapDegree = function getGapDegree() {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }

    if (type === 'dashboard') {
      return 75;
    }

    return undefined;
  }; // using className to style stroke color


  var isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
  var strokeColor = getStrokeColor({
    success: success,
    strokeColor: props.strokeColor
  });
  var wrapperClassName = classnames_default()("".concat(prefixCls, "-inner"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-circle-gradient"), isGradient));
  return /*#__PURE__*/react.createElement("div", {
    className: wrapperClassName,
    style: circleStyle
  }, /*#__PURE__*/react.createElement(rc_progress_es/* Circle */.Cd, {
    percent: getPercentage(props),
    strokeWidth: circleWidth,
    trailWidth: circleWidth,
    strokeColor: strokeColor,
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: getGapDegree(),
    gapPosition: gapPos
  }), children);
};

/* harmony default export */ const progress_Circle = (Circle);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/Steps.js




var Steps = function Steps(props) {
  var size = props.size,
      steps = props.steps,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth,
      strokeColor = props.strokeColor,
      trailColor = props.trailColor,
      prefixCls = props.prefixCls,
      children = props.children;
  var current = Math.round(steps * (percent / 100));
  var stepWidth = size === 'small' ? 2 : 14;
  var styledSteps = [];

  for (var i = 0; i < steps; i += 1) {
    styledSteps.push( /*#__PURE__*/react.createElement("div", {
      key: i,
      className: classnames_default()("".concat(prefixCls, "-steps-item"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-steps-item-active"), i <= current - 1)),
      style: {
        backgroundColor: i <= current - 1 ? strokeColor : trailColor,
        width: stepWidth,
        height: strokeWidth
      }
    }));
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-steps-outer")
  }, styledSteps, children);
};

/* harmony default export */ const progress_Steps = (Steps);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/progress.js








var progress_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















var ProgressTypes = (0,type/* tuple */.b)('line', 'circle', 'dashboard');
var ProgressStatuses = (0,type/* tuple */.b)('normal', 'exception', 'active', 'success');

var Progress = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Progress, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Progress);

  function Progress() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Progress);

    _this = _super.apply(this, arguments);

    _this.renderProgress = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;

      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          props = _assertThisInitialize.props;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          size = props.size,
          type = props.type,
          steps = props.steps,
          showInfo = props.showInfo,
          strokeColor = props.strokeColor,
          restProps = progress_rest(props, ["prefixCls", "className", "size", "type", "steps", "showInfo", "strokeColor"]);

      var prefixCls = getPrefixCls('progress', customizePrefixCls);

      var progressStatus = _this.getProgressStatus();

      var progressInfo = _this.renderProcessInfo(prefixCls, progressStatus);

      (0,devWarning/* default */.Z)(!('successPercent' in props), 'Progress', '`successPercent` is deprecated. Please use `success.percent` instead.');
      var progress; // Render progress shape

      if (type === 'line') {
        progress = steps ? /*#__PURE__*/react.createElement(progress_Steps, (0,esm_extends/* default */.Z)({}, _this.props, {
          strokeColor: typeof strokeColor === 'string' ? strokeColor : undefined,
          prefixCls: prefixCls,
          steps: steps
        }), progressInfo) : /*#__PURE__*/react.createElement(progress_Line, (0,esm_extends/* default */.Z)({}, _this.props, {
          prefixCls: prefixCls,
          direction: direction
        }), progressInfo);
      } else if (type === 'circle' || type === 'dashboard') {
        progress = /*#__PURE__*/react.createElement(progress_Circle, (0,esm_extends/* default */.Z)({}, _this.props, {
          prefixCls: prefixCls,
          progressStatus: progressStatus
        }), progressInfo);
      }

      var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || steps && 'steps' || type), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-status-").concat(progressStatus), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-show-info"), showInfo), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(size), size), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, (0,omit/* default */.Z)(restProps, ['status', 'format', 'trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeLinecap', 'percent', 'success', 'successPercent']), {
        className: classString
      }), progress);
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Progress, [{
    key: "getPercentNumber",
    value: function getPercentNumber() {
      var _this$props$percent = this.props.percent,
          percent = _this$props$percent === void 0 ? 0 : _this$props$percent;
      var successPercent = getSuccessPercent(this.props);
      return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
    }
  }, {
    key: "getProgressStatus",
    value: function getProgressStatus() {
      var status = this.props.status;

      if (ProgressStatuses.indexOf(status) < 0 && this.getPercentNumber() >= 100) {
        return 'success';
      }

      return status || 'normal';
    }
  }, {
    key: "renderProcessInfo",
    value: function renderProcessInfo(prefixCls, progressStatus) {
      var _this$props = this.props,
          showInfo = _this$props.showInfo,
          format = _this$props.format,
          type = _this$props.type,
          percent = _this$props.percent;
      var successPercent = getSuccessPercent(this.props);

      if (!showInfo) {
        return null;
      }

      var text;

      var textFormatter = format || function (percentNumber) {
        return "".concat(percentNumber, "%");
      };

      var isLineType = type === 'line';

      if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
        text = textFormatter(validProgress(percent), validProgress(successPercent));
      } else if (progressStatus === 'exception') {
        text = isLineType ? /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null) : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null);
      } else if (progressStatus === 'success') {
        text = isLineType ? /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.Z, null) : /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null);
      }

      return /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-text"),
        title: typeof text === 'string' ? text : undefined
      }, text);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, this.renderProgress);
    }
  }]);

  return Progress;
}(react.Component);


Progress.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  // null for different theme definition
  trailColor: null,
  size: 'default',
  gapDegree: undefined,
  strokeLinecap: 'round'
};
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/index.js

/* harmony default export */ const progress = (Progress);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/UploadList/ListItem.js












var ListItem = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var _classNames3;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      style = _ref.style,
      locale = _ref.locale,
      listType = _ref.listType,
      file = _ref.file,
      items = _ref.items,
      progressProps = _ref.progress,
      iconRender = _ref.iconRender,
      actionIconRender = _ref.actionIconRender,
      itemRender = _ref.itemRender,
      isImgUrl = _ref.isImgUrl,
      showPreviewIcon = _ref.showPreviewIcon,
      showRemoveIcon = _ref.showRemoveIcon,
      showDownloadIcon = _ref.showDownloadIcon,
      customRemoveIcon = _ref.removeIcon,
      customDownloadIcon = _ref.downloadIcon,
      onPreview = _ref.onPreview,
      onDownload = _ref.onDownload,
      onClose = _ref.onClose;

  var _a, _b; // Delay to show the progress bar


  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      showProgress = _React$useState2[0],
      setShowProgress = _React$useState2[1];

  var progressRafRef = react.useRef();
  react.useEffect(function () {
    progressRafRef.current = setTimeout(function () {
      setShowProgress(true);
    }, 300);
    return function () {
      window.clearTimeout(progressRafRef.current);
    };
  }, []); // This is used for legacy span make scrollHeight the wrong value.
  // We will force these to be `display: block` with non `picture-card`

  var spanClassName = "".concat(prefixCls, "-span");
  var iconNode = iconRender(file);
  var icon = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-text-icon")
  }, iconNode);

  if (listType === 'picture' || listType === 'picture-card') {
    if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
      var _classNames;

      var uploadingClassName = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list-item-thumbnail"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list-item-file"), file.status !== 'uploading'), _classNames));
      icon = /*#__PURE__*/react.createElement("div", {
        className: uploadingClassName
      }, iconNode);
    } else {
      var _classNames2;

      var thumbnail = (isImgUrl === null || isImgUrl === void 0 ? void 0 : isImgUrl(file)) ? /*#__PURE__*/react.createElement("img", {
        src: file.thumbUrl || file.url,
        alt: file.name,
        className: "".concat(prefixCls, "-list-item-image")
      }) : iconNode;
      var aClassName = classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-list-item-thumbnail"), true), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)), _classNames2));
      icon = /*#__PURE__*/react.createElement("a", {
        className: aClassName,
        onClick: function onClick(e) {
          return onPreview(file, e);
        },
        href: file.url || file.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, thumbnail);
    }
  }

  var infoUploadingClass = classnames_default()((_classNames3 = {}, (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-list-item"), true), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-list-item-").concat(file.status), true), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _classNames3));
  var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
  var removeIcon = showRemoveIcon ? actionIconRender((typeof customRemoveIcon === 'function' ? customRemoveIcon(file) : customRemoveIcon) || /*#__PURE__*/react.createElement(icons_DeleteOutlined, null), function () {
    return onClose(file);
  }, prefixCls, locale.removeFile) : null;
  var downloadIcon = showDownloadIcon && file.status === 'done' ? actionIconRender((typeof customDownloadIcon === 'function' ? customDownloadIcon(file) : customDownloadIcon) || /*#__PURE__*/react.createElement(icons_DownloadOutlined, null), function () {
    return onDownload(file);
  }, prefixCls, locale.downloadFile) : null;
  var downloadOrDelete = listType !== 'picture-card' && /*#__PURE__*/react.createElement("span", {
    key: "download-delete",
    className: classnames_default()("".concat(prefixCls, "-list-item-card-actions"), {
      picture: listType === 'picture'
    })
  }, downloadIcon, removeIcon);
  var listItemNameClass = classnames_default()("".concat(prefixCls, "-list-item-name"));
  var preview = file.url ? [/*#__PURE__*/react.createElement("a", (0,esm_extends/* default */.Z)({
    key: "view",
    target: "_blank",
    rel: "noopener noreferrer",
    className: listItemNameClass,
    title: file.name
  }, linkProps, {
    href: file.url,
    onClick: function onClick(e) {
      return onPreview(file, e);
    }
  }), file.name), downloadOrDelete] : [/*#__PURE__*/react.createElement("span", {
    key: "view",
    className: listItemNameClass,
    onClick: function onClick(e) {
      return onPreview(file, e);
    },
    title: file.name
  }, file.name), downloadOrDelete];
  var previewStyle = {
    pointerEvents: 'none',
    opacity: 0.5
  };
  var previewIcon = showPreviewIcon ? /*#__PURE__*/react.createElement("a", {
    href: file.url || file.thumbUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: file.url || file.thumbUrl ? undefined : previewStyle,
    onClick: function onClick(e) {
      return onPreview(file, e);
    },
    title: locale.previewFile
  }, /*#__PURE__*/react.createElement(EyeOutlined/* default */.Z, null)) : null;
  var actions = listType === 'picture-card' && file.status !== 'uploading' && /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-list-item-actions")
  }, previewIcon, file.status === 'done' && downloadIcon, removeIcon);
  var message;

  if (file.response && typeof file.response === 'string') {
    message = file.response;
  } else {
    message = ((_a = file.error) === null || _a === void 0 ? void 0 : _a.statusText) || ((_b = file.error) === null || _b === void 0 ? void 0 : _b.message) || locale.uploadError;
  }

  var iconAndPreview = /*#__PURE__*/react.createElement("span", {
    className: spanClassName
  }, icon, preview);

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var rootPrefixCls = getPrefixCls();
  var dom = /*#__PURE__*/react.createElement("div", {
    className: infoUploadingClass
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-list-item-info")
  }, iconAndPreview), actions, showProgress && /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, {
    motionName: "".concat(rootPrefixCls, "-fade"),
    visible: file.status === 'uploading',
    motionDeadline: 2000
  }, function (_ref2) {
    var motionClassName = _ref2.className;
    // show loading icon if upload progress listener is disabled
    var loadingProgress = 'percent' in file ? /*#__PURE__*/react.createElement(progress, (0,esm_extends/* default */.Z)({}, progressProps, {
      type: "line",
      percent: file.percent
    })) : null;
    return /*#__PURE__*/react.createElement("div", {
      className: classnames_default()("".concat(prefixCls, "-list-item-progress"), motionClassName)
    }, loadingProgress);
  }));
  var listContainerNameClass = classnames_default()("".concat(prefixCls, "-list-").concat(listType, "-container"), className);
  var item = file.status === 'error' ? /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
    title: message,
    getPopupContainer: function getPopupContainer(node) {
      return node.parentNode;
    }
  }, dom) : dom;
  return /*#__PURE__*/react.createElement("div", {
    className: listContainerNameClass,
    style: style,
    ref: ref
  }, itemRender ? itemRender(item, file, items, {
    download: onDownload.bind(null, file),
    preview: onPreview.bind(null, file),
    remove: onClose.bind(null, file)
  }) : item);
});
/* harmony default export */ const UploadList_ListItem = (ListItem);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/UploadList/index.js



















var listItemMotion = (0,esm_extends/* default */.Z)({}, motion/* default */.Z);

delete listItemMotion.onAppearEnd;
delete listItemMotion.onEnterEnd;
delete listItemMotion.onLeaveEnd;

var InternalUploadList = function InternalUploadList(_ref, ref) {
  var _classNames;

  var listType = _ref.listType,
      previewFile = _ref.previewFile,
      onPreview = _ref.onPreview,
      onDownload = _ref.onDownload,
      onRemove = _ref.onRemove,
      locale = _ref.locale,
      iconRender = _ref.iconRender,
      isImgUrl = _ref.isImageUrl,
      customizePrefixCls = _ref.prefixCls,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      showPreviewIcon = _ref.showPreviewIcon,
      showRemoveIcon = _ref.showRemoveIcon,
      showDownloadIcon = _ref.showDownloadIcon,
      removeIcon = _ref.removeIcon,
      downloadIcon = _ref.downloadIcon,
      progress = _ref.progress,
      appendAction = _ref.appendAction,
      itemRender = _ref.itemRender;
  var forceUpdate = (0,useForceUpdate/* default */.Z)();

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      motionAppear = _React$useState2[0],
      setMotionAppear = _React$useState2[1]; // ============================= Effect =============================


  react.useEffect(function () {
    if (listType !== 'picture' && listType !== 'picture-card') {
      return;
    }

    (items || []).forEach(function (file) {
      if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
        return;
      }

      file.thumbUrl = '';

      if (previewFile) {
        previewFile(file.originFileObj).then(function (previewDataUrl) {
          // Need append '' to avoid dead loop
          file.thumbUrl = previewDataUrl || '';
          forceUpdate();
        });
      }
    });
  }, [listType, items, previewFile]);
  react.useEffect(function () {
    setMotionAppear(true);
  }, []); // ============================= Events =============================

  var onInternalPreview = function onInternalPreview(file, e) {
    if (!onPreview) {
      return;
    }

    e === null || e === void 0 ? void 0 : e.preventDefault();
    return onPreview(file);
  };

  var onInternalDownload = function onInternalDownload(file) {
    if (typeof onDownload === 'function') {
      onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  };

  var onInternalClose = function onInternalClose(file) {
    onRemove === null || onRemove === void 0 ? void 0 : onRemove(file);
  };

  var internalIconRender = function internalIconRender(file) {
    if (iconRender) {
      return iconRender(file, listType);
    }

    var isLoading = file.status === 'uploading';
    var fileIcon = isImgUrl && isImgUrl(file) ? /*#__PURE__*/react.createElement(icons_PictureTwoTone, null) : /*#__PURE__*/react.createElement(icons_FileTwoTone, null);
    var icon = isLoading ? /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(icons_PaperClipOutlined, null);

    if (listType === 'picture') {
      icon = isLoading ? /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null) : fileIcon;
    } else if (listType === 'picture-card') {
      icon = isLoading ? locale.uploading : fileIcon;
    }

    return icon;
  };

  var actionIconRender = function actionIconRender(customIcon, callback, prefixCls, title) {
    var btnProps = {
      type: 'text',
      size: 'small',
      title: title,
      onClick: function onClick(e) {
        callback();

        if ((0,reactNode/* isValidElement */.l$)(customIcon) && customIcon.props.onClick) {
          customIcon.props.onClick(e);
        }
      },
      className: "".concat(prefixCls, "-list-item-card-actions-btn")
    };

    if ((0,reactNode/* isValidElement */.l$)(customIcon)) {
      var btnIcon = (0,reactNode/* cloneElement */.Tm)(customIcon, (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, customIcon.props), {
        onClick: function onClick() {}
      }));
      return /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, btnProps, {
        icon: btnIcon
      }));
    }

    return /*#__PURE__*/react.createElement(es_button/* default */.Z, btnProps, /*#__PURE__*/react.createElement("span", null, customIcon));
  }; // ============================== Ref ===============================
  // Test needs


  react.useImperativeHandle(ref, function () {
    return {
      handlePreview: onInternalPreview,
      handleDownload: onInternalDownload
    };
  });

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction; // ============================= Render =============================


  var prefixCls = getPrefixCls('upload', customizePrefixCls);
  var listClassNames = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list-").concat(listType), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list-rtl"), direction === 'rtl'), _classNames)); // >>> Motion config

  var motionKeyList = (0,toConsumableArray/* default */.Z)(items.map(function (file) {
    return {
      key: file.uid,
      file: file
    };
  }));

  var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate'; // const transitionName = list.length === 0 ? '' : `${prefixCls}-${animationDirection}`;

  var motionConfig = {
    motionDeadline: 2000,
    motionName: "".concat(prefixCls, "-").concat(animationDirection),
    keys: motionKeyList,
    motionAppear: motionAppear
  };

  if (listType !== 'picture-card') {
    motionConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, listItemMotion), motionConfig);
  }

  return /*#__PURE__*/react.createElement("div", {
    className: listClassNames
  }, /*#__PURE__*/react.createElement(rc_motion_es/* CSSMotionList */.V, (0,esm_extends/* default */.Z)({}, motionConfig, {
    component: false
  }), function (_ref2) {
    var key = _ref2.key,
        file = _ref2.file,
        motionClassName = _ref2.className,
        motionStyle = _ref2.style;
    return /*#__PURE__*/react.createElement(UploadList_ListItem, {
      key: key,
      locale: locale,
      prefixCls: prefixCls,
      className: motionClassName,
      style: motionStyle,
      file: file,
      items: items,
      progress: progress,
      listType: listType,
      isImgUrl: isImgUrl,
      showPreviewIcon: showPreviewIcon,
      showRemoveIcon: showRemoveIcon,
      showDownloadIcon: showDownloadIcon,
      removeIcon: removeIcon,
      downloadIcon: downloadIcon,
      iconRender: internalIconRender,
      actionIconRender: actionIconRender,
      itemRender: itemRender,
      onPreview: onInternalPreview,
      onDownload: onInternalDownload,
      onClose: onInternalClose
    });
  }), appendAction && /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, motionConfig, function (_ref3) {
    var motionClassName = _ref3.className,
        motionStyle = _ref3.style;
    return (0,reactNode/* cloneElement */.Tm)(appendAction, function (oriProps) {
      return {
        className: classnames_default()(oriProps.className, motionClassName),
        style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, motionStyle), oriProps.style)
      };
    });
  }));
};

var UploadList = /*#__PURE__*/react.forwardRef(InternalUploadList);
UploadList.displayName = 'UploadList';
UploadList.defaultProps = {
  listType: 'text',
  progress: {
    strokeWidth: 2,
    showInfo: false
  },
  showRemoveIcon: true,
  showDownloadIcon: false,
  showPreviewIcon: true,
  previewFile: previewImage,
  isImageUrl: isImageUrl
};
/* harmony default export */ const upload_UploadList = (UploadList);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(42051);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js
var locale_default = __webpack_require__(7734);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/Upload.js







var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};












var LIST_IGNORE = "__LIST_IGNORE_".concat(Date.now(), "__");

var InternalUpload = function InternalUpload(props, ref) {
  var _classNames2;

  var fileList = props.fileList,
      defaultFileList = props.defaultFileList,
      onRemove = props.onRemove,
      showUploadList = props.showUploadList,
      listType = props.listType,
      onPreview = props.onPreview,
      onDownload = props.onDownload,
      onChange = props.onChange,
      onDrop = props.onDrop,
      previewFile = props.previewFile,
      disabled = props.disabled,
      propLocale = props.locale,
      iconRender = props.iconRender,
      isImageUrl = props.isImageUrl,
      progress = props.progress,
      customizePrefixCls = props.prefixCls,
      className = props.className,
      type = props.type,
      children = props.children,
      style = props.style,
      itemRender = props.itemRender,
      maxCount = props.maxCount;

  var _useMergedState = (0,useMergedState/* default */.Z)(defaultFileList || [], {
    value: fileList,
    postState: function postState(list) {
      return list !== null && list !== void 0 ? list : [];
    }
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      mergedFileList = _useMergedState2[0],
      setMergedFileList = _useMergedState2[1];

  var _React$useState = react.useState('drop'),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      dragState = _React$useState2[0],
      setDragState = _React$useState2[1];

  var upload = react.useRef();
  react.useEffect(function () {
    (0,devWarning/* default */.Z)('fileList' in props || !('value' in props), 'Upload', '`value` is not a valid prop, do you mean `fileList`?');
    (0,devWarning/* default */.Z)(!('transformFile' in props), 'Upload', '`transformFile` is deprecated. Please use `beforeUpload` directly.');
  }, []); // Control mode will auto fill file uid if not provided

  react.useMemo(function () {
    var timestamp = Date.now();
    (fileList || []).forEach(function (file, index) {
      if (!file.uid && !Object.isFrozen(file)) {
        file.uid = "__AUTO__".concat(timestamp, "_").concat(index, "__");
      }
    });
  }, [fileList]);

  var onInternalChange = function onInternalChange(file, changedFileList, event) {
    var cloneList = (0,toConsumableArray/* default */.Z)(changedFileList); // Cut to match count


    if (maxCount === 1) {
      cloneList = cloneList.slice(-1);
    } else if (maxCount) {
      cloneList = cloneList.slice(0, maxCount);
    }

    setMergedFileList(cloneList);
    var changeInfo = {
      file: file,
      fileList: cloneList
    };

    if (event) {
      changeInfo.event = event;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo);
  };

  var mergedBeforeUpload = function mergedBeforeUpload(file, fileListArgs) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regenerator_default().mark(function _callee() {
      var beforeUpload, transformFile, parsedFile, result;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              beforeUpload = props.beforeUpload, transformFile = props.transformFile;
              parsedFile = file;

              if (!beforeUpload) {
                _context.next = 13;
                break;
              }

              _context.next = 5;
              return beforeUpload(file, fileListArgs);

            case 5:
              result = _context.sent;

              if (!(result === false)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", false);

            case 8:
              // Hack for LIST_IGNORE, we add additional info to remove from the list
              delete file[LIST_IGNORE];

              if (!(result === LIST_IGNORE)) {
                _context.next = 12;
                break;
              }

              Object.defineProperty(file, LIST_IGNORE, {
                value: true,
                configurable: true
              });
              return _context.abrupt("return", false);

            case 12:
              if ((0,esm_typeof/* default */.Z)(result) === 'object' && result) {
                parsedFile = result;
              }

            case 13:
              if (!transformFile) {
                _context.next = 17;
                break;
              }

              _context.next = 16;
              return transformFile(parsedFile);

            case 16:
              parsedFile = _context.sent;

            case 17:
              return _context.abrupt("return", parsedFile);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  var onBatchStart = function onBatchStart(batchFileInfoList) {
    // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
    var filteredFileInfoList = batchFileInfoList.filter(function (info) {
      return !info.file[LIST_IGNORE];
    }); // Nothing to do since no file need upload

    if (!filteredFileInfoList.length) {
      return;
    }

    var objectFileList = filteredFileInfoList.map(function (info) {
      return file2Obj(info.file);
    }); // Concat new files with prev files

    var newFileList = (0,toConsumableArray/* default */.Z)(mergedFileList);

    objectFileList.forEach(function (fileObj) {
      // Replace file if exist
      newFileList = updateFileList(fileObj, newFileList);
    });
    objectFileList.forEach(function (fileObj, index) {
      // Repeat trigger `onChange` event for compatible
      var triggerFileObj = fileObj;

      if (!filteredFileInfoList[index].parsedFile) {
        // `beforeUpload` return false
        var originFileObj = fileObj.originFileObj;
        var clone;

        try {
          clone = new File([originFileObj], originFileObj.name, {
            type: originFileObj.type
          });
        } catch (e) {
          clone = new Blob([originFileObj], {
            type: originFileObj.type
          });
          clone.name = originFileObj.name;
          clone.lastModifiedDate = new Date();
          clone.lastModified = new Date().getTime();
        }

        clone.uid = fileObj.uid;
        triggerFileObj = clone;
      } else {
        // Inject `uploading` status
        fileObj.status = 'uploading';
      }

      onInternalChange(triggerFileObj, newFileList);
    });
  };

  var onSuccess = function onSuccess(response, file, xhr) {
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) {
      /* do nothing */
    } // removed


    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    var targetItem = file2Obj(file);
    targetItem.status = 'done';
    targetItem.percent = 100;
    targetItem.response = response;
    targetItem.xhr = xhr;
    var nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList);
  };

  var onProgress = function onProgress(e, file) {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    var targetItem = file2Obj(file);
    targetItem.status = 'uploading';
    targetItem.percent = e.percent;
    var nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList, e);
  };

  var onError = function onError(error, response, file) {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    var targetItem = file2Obj(file);
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';
    var nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList);
  };

  var handleRemove = function handleRemove(file) {
    var currentFile;
    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
      var _a; // Prevent removing file


      if (ret === false) {
        return;
      }

      var removedFileList = removeFileItem(file, mergedFileList);

      if (removedFileList) {
        currentFile = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, file), {
          status: 'removed'
        });
        mergedFileList === null || mergedFileList === void 0 ? void 0 : mergedFileList.forEach(function (item) {
          var matchKey = currentFile.uid !== undefined ? 'uid' : 'name';

          if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
            item.status = 'removed';
          }
        });
        (_a = upload.current) === null || _a === void 0 ? void 0 : _a.abort(currentFile);
        onInternalChange(currentFile, removedFileList);
      }
    });
  };

  var onFileDrop = function onFileDrop(e) {
    setDragState(e.type);

    if (e.type === 'drop') {
      onDrop === null || onDrop === void 0 ? void 0 : onDrop(e);
    }
  }; // Test needs


  react.useImperativeHandle(ref, function () {
    return {
      onBatchStart: onBatchStart,
      onSuccess: onSuccess,
      onProgress: onProgress,
      onError: onError,
      fileList: mergedFileList,
      upload: upload.current
    };
  });

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('upload', customizePrefixCls);

  var rcUploadProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    onBatchStart: onBatchStart,
    onError: onError,
    onProgress: onProgress,
    onSuccess: onSuccess
  }, props), {
    prefixCls: prefixCls,
    beforeUpload: mergedBeforeUpload,
    onChange: undefined
  });

  delete rcUploadProps.className;
  delete rcUploadProps.style; // Remove id to avoid open by label when trigger is hidden
  // !children: https://github.com/ant-design/ant-design/issues/14298
  // disabled: https://github.com/ant-design/ant-design/issues/16478
  //           https://github.com/ant-design/ant-design/issues/24197

  if (!children || disabled) {
    delete rcUploadProps.id;
  }

  var renderUploadList = function renderUploadList(button) {
    return showUploadList ? /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, {
      componentName: "Upload",
      defaultLocale: locale_default/* default.Upload */.Z.Upload
    }, function (locale) {
      var _ref = typeof showUploadList === 'boolean' ? {} : showUploadList,
          showRemoveIcon = _ref.showRemoveIcon,
          showPreviewIcon = _ref.showPreviewIcon,
          showDownloadIcon = _ref.showDownloadIcon,
          removeIcon = _ref.removeIcon,
          downloadIcon = _ref.downloadIcon;

      return /*#__PURE__*/react.createElement(upload_UploadList, {
        listType: listType,
        items: mergedFileList,
        previewFile: previewFile,
        onPreview: onPreview,
        onDownload: onDownload,
        onRemove: handleRemove,
        showRemoveIcon: !disabled && showRemoveIcon,
        showPreviewIcon: showPreviewIcon,
        showDownloadIcon: showDownloadIcon,
        removeIcon: removeIcon,
        downloadIcon: downloadIcon,
        iconRender: iconRender,
        locale: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, locale), propLocale),
        isImageUrl: isImageUrl,
        progress: progress,
        appendAction: button,
        itemRender: itemRender
      });
    }) : button;
  };

  if (type === 'drag') {
    var _classNames;

    var dragCls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-drag"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-drag-uploading"), mergedFileList.some(function (file) {
      return file.status === 'uploading';
    })), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-drag-hover"), dragState === 'dragover'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("div", {
      className: dragCls,
      onDrop: onFileDrop,
      onDragOver: onFileDrop,
      onDragLeave: onFileDrop,
      style: style
    }, /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({}, rcUploadProps, {
      ref: upload,
      className: "".concat(prefixCls, "-btn")
    }), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-drag-container")
    }, children))), renderUploadList());
  }

  var uploadButtonCls = classnames_default()(prefixCls, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-select"), true), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-select-").concat(listType), true), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2));
  var uploadButton = /*#__PURE__*/react.createElement("div", {
    className: uploadButtonCls,
    style: children ? undefined : {
      display: 'none'
    }
  }, /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({}, rcUploadProps, {
    ref: upload
  })));

  if (listType === 'picture-card') {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()("".concat(prefixCls, "-picture-card-wrapper"), className)
    }, renderUploadList(uploadButton));
  }

  return /*#__PURE__*/react.createElement("span", {
    className: className
  }, uploadButton, renderUploadList());
};

var Upload = /*#__PURE__*/react.forwardRef(InternalUpload);
Upload.Dragger = upload_Dragger;
Upload.LIST_IGNORE = LIST_IGNORE;
Upload.displayName = 'Upload';
Upload.defaultProps = {
  type: 'select',
  multiple: false,
  action: '',
  data: {},
  accept: '',
  showUploadList: true,
  listType: 'text',
  className: '',
  disabled: false,
  supportServerRender: true
};
/* harmony default export */ const upload_Upload = (Upload);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/index.js


upload_Upload.Dragger = upload_Dragger;
/* harmony default export */ const upload = (upload_Upload);

/***/ }),

/***/ 84494:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var style = __webpack_require__(36208);
// EXTERNAL MODULE: ./node_modules/antd/es/upload/style/index.less
var upload_style = __webpack_require__(51406);
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__(57663);
// EXTERNAL MODULE: ./node_modules/antd/es/progress/style/index.less
var progress_style = __webpack_require__(24686);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/style/index.js


// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js
var tooltip_style = __webpack_require__(22385);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/style/index.js

 // style dependencies





/***/ }),

/***/ 83318:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 24686:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 40650:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 51406:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 52796:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(10643);


/***/ }),

/***/ 13264:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */



var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;


/***/ }),

/***/ 84518:
/***/ ((module) => {

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false;

// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;

// Actual IE browser for compatibility mode
var _ie_real_version;

// Platforms
var _osx, _windows, _linux, _android;

// Architectures
var _win64;

// Devices
var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true;

  // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os    = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas);

  // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.
  _win64 = !!(/Win64/.exec(uas));

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : (
          agent[5] ? parseFloat(agent[5]) : NaN);
    // IE compatibility mode
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    }
    // grab the "true" ie version from the trident token if available
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera   = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit  = agent[4] ? parseFloat(agent[4]) : NaN;
    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }
    _windows = !!os[2];
    _linux   = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED = {

  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return _populate() || (_ie_real_version > _ie);
  },


  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return UserAgent_DEPRECATED.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return _populate() || _firefox;
  },


  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return _populate() || _opera;
  },


  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return UserAgent_DEPRECATED.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome : function() {
    return _populate() || _chrome;
  },


  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return _populate() || _windows;
  },


  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return _populate() || _iphone;
  },

  mobile: function() {
    return _populate() || (_iphone || _ipad || _android || _mobile);
  },

  nativeApp: function() {
    // webviews inside of the native apps
    return _populate() || _native;
  },

  android: function() {
    return _populate() || _android;
  },

  ipad: function() {
    return _populate() || _ipad;
  }
};

module.exports = UserAgent_DEPRECATED;


/***/ }),

/***/ 96534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */



var ExecutionEnvironment = __webpack_require__(13264);

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

module.exports = isEventSupported;


/***/ }),

/***/ 10643:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */



var UserAgent_DEPRECATED = __webpack_require__(84518);

var isEventSupported = __webpack_require__(96534);


// Reasonable defaults
var PIXEL_STEP  = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */
function normalizeWheel(/*object*/ event) /*object*/ {
  var sX = 0, sY = 0,       // spinX, spinY
      pX = 0, pY = 0;       // pixelX, pixelY

  // Legacy
  if ('detail'      in event) { sY = event.detail; }
  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

  // side scrolling on FF with DOMMouseScroll
  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) { pY = event.deltaY; }
  if ('deltaX' in event) { pX = event.deltaX; }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {          // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {                             // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

  return { spinX  : sX,
           spinY  : sY,
           pixelX : pX,
           pixelY : pY };
}


/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */
normalizeWheel.getEventType = function() /*string*/ {
  return (UserAgent_DEPRECATED.firefox())
           ? 'DOMMouseScroll'
           : (isEventSupported('wheel'))
               ? 'wheel'
               : 'mousewheel';
};

module.exports = normalizeWheel;


/***/ })

}]);