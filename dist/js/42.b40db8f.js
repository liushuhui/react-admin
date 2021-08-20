(self["webpackChunkreact_admin"] = self["webpackChunkreact_admin"] || []).push([[42],{

/***/ 89493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ rc_dialog_es)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28481);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(10379);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 2 modules
var createSuper = __webpack_require__(81907);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(90484);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Portal.js
var Portal = __webpack_require__(59015);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
// EXTERNAL MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize = __webpack_require__(74204);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/setStyle.js
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!style) {
    return {};
  }

  var _options$element = options.element,
      element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style); // IE browser compatible

  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}

/* harmony default export */ const es_setStyle = (setStyle);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/switchScrollingEffect.js



function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var cacheStyle = {};
/* harmony default export */ const switchScrollingEffect = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    es_setStyle(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }

  var scrollBarSize = (0,getScrollBarSize/* default */.Z)();

  if (scrollBarSize) {
    cacheStyle = es_setStyle({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(42921);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/scrollLocker.js




var locks = [];
var scrollingEffectClassName = 'ant-scrolling-effect';
var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
var uuid = 0; // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var scrollLocker_cacheStyle = new Map();

var ScrollLocker = function ScrollLocker(_options) {
  var _this = this;

  (0,classCallCheck/* default */.Z)(this, ScrollLocker);

  this.lockTarget = void 0;
  this.options = void 0;

  this.getContainer = function () {
    var _this$options;

    return (_this$options = _this.options) === null || _this$options === void 0 ? void 0 : _this$options.container;
  };

  this.reLock = function (options) {
    var findLock = locks.find(function (_ref) {
      var target = _ref.target;
      return target === _this.lockTarget;
    });

    if (findLock) {
      _this.unLock();
    }

    _this.options = options;

    if (findLock) {
      findLock.options = options;

      _this.lock();
    }
  };

  this.lock = function () {
    var _this$options3;

    // If lockTarget exist return
    if (locks.some(function (_ref2) {
      var target = _ref2.target;
      return target === _this.lockTarget;
    })) {
      return;
    } // If same container effect, return


    if (locks.some(function (_ref3) {
      var _this$options2;

      var options = _ref3.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.container);
    })) {
      locks = [].concat((0,toConsumableArray/* default */.Z)(locks), [{
        target: _this.lockTarget,
        options: _this.options
      }]);
      return;
    }

    var scrollBarSize = 0;
    var container = ((_this$options3 = _this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.container) || document.body;

    if (container === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || container.scrollHeight > container.clientHeight) {
      scrollBarSize = (0,getScrollBarSize/* default */.Z)();
    }

    var containerClassName = container.className;

    if (locks.filter(function (_ref4) {
      var _this$options4;

      var options = _ref4.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options4 = _this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.container);
    }).length === 0) {
      scrollLocker_cacheStyle.set(container, es_setStyle({
        width: scrollBarSize !== 0 ? "calc(100% - ".concat(scrollBarSize, "px)") : undefined,
        overflow: 'hidden',
        overflowX: 'hidden',
        overflowY: 'hidden'
      }, {
        element: container
      }));
    } // https://github.com/ant-design/ant-design/issues/19729


    if (!scrollingEffectClassNameReg.test(containerClassName)) {
      var addClassName = "".concat(containerClassName, " ").concat(scrollingEffectClassName);
      container.className = addClassName.trim();
    }

    locks = [].concat((0,toConsumableArray/* default */.Z)(locks), [{
      target: _this.lockTarget,
      options: _this.options
    }]);
  };

  this.unLock = function () {
    var _this$options5;

    var findLock = locks.find(function (_ref5) {
      var target = _ref5.target;
      return target === _this.lockTarget;
    });
    locks = locks.filter(function (_ref6) {
      var target = _ref6.target;
      return target !== _this.lockTarget;
    });

    if (!findLock || locks.some(function (_ref7) {
      var _findLock$options;

      var options = _ref7.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_findLock$options = findLock.options) === null || _findLock$options === void 0 ? void 0 : _findLock$options.container);
    })) {
      return;
    } // Remove Effect


    var container = ((_this$options5 = _this.options) === null || _this$options5 === void 0 ? void 0 : _this$options5.container) || document.body;
    var containerClassName = container.className;
    if (!scrollingEffectClassNameReg.test(containerClassName)) return;
    es_setStyle(scrollLocker_cacheStyle.get(container), {
      element: container
    });
    scrollLocker_cacheStyle.delete(container);
    container.className = container.className.replace(scrollingEffectClassNameReg, '').trim();
  };

  // eslint-disable-next-line no-plusplus
  this.lockTarget = uuid++;
  this.options = _options;
};


;// CONCATENATED MODULE: ./node_modules/rc-util/es/PortalWrapper.js






/* eslint-disable no-underscore-dangle,react/require-default-props */







var openCount = 0;
var supportDom = (0,canUseDom/* default */.Z)();
/** @private Test usage only */

function getOpenCount() {
  return  false ? 0 : 0;
} // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheOverflow = {};

var getParent = function getParent(getContainer) {
  if (!supportDom) {
    return null;
  }

  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }

    if (typeof getContainer === 'function') {
      return getContainer();
    }

    if ((0,esm_typeof/* default */.Z)(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }

  return document.body;
};

var PortalWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(PortalWrapper, _React$Component);

  var _super = (0,createSuper/* default */.Z)(PortalWrapper);

  function PortalWrapper(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, PortalWrapper);

    _this = _super.call(this, props);
    _this.container = void 0;
    _this.componentRef = /*#__PURE__*/react.createRef();
    _this.rafId = void 0;
    _this.scrollLocker = void 0;
    _this.renderComponent = void 0;

    _this.updateScrollLocker = function (prevProps) {
      var _ref = prevProps || {},
          prevVisible = _ref.visible;

      var _this$props = _this.props,
          getContainer = _this$props.getContainer,
          visible = _this$props.visible;

      if (visible && visible !== prevVisible && supportDom && getParent(getContainer) !== _this.scrollLocker.getContainer()) {
        _this.scrollLocker.reLock({
          container: getParent(getContainer)
        });
      }
    };

    _this.updateOpenCount = function (prevProps) {
      var _ref2 = prevProps || {},
          prevVisible = _ref2.visible,
          prevGetContainer = _ref2.getContainer;

      var _this$props2 = _this.props,
          visible = _this$props2.visible,
          getContainer = _this$props2.getContainer; // Update count

      if (visible !== prevVisible && supportDom && getParent(getContainer) === document.body) {
        if (visible && !prevVisible) {
          openCount += 1;
        } else if (prevProps) {
          openCount -= 1;
        }
      } // Clean up container if needed


      var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

      if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
        _this.removeCurrentContainer();
      }
    };

    _this.attachToParent = function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (force || _this.container && !_this.container.parentNode) {
        var parent = getParent(_this.props.getContainer);

        if (parent) {
          parent.appendChild(_this.container);
          return true;
        }

        return false;
      }

      return true;
    };

    _this.getContainer = function () {
      if (!supportDom) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        _this.attachToParent(true);
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.removeCurrentContainer = function () {
      var _this$container, _this$container$paren;

      // Portal will remove from `parentNode`.
      // Let's handle this again to avoid refactor issue.
      (_this$container = _this.container) === null || _this$container === void 0 ? void 0 : (_this$container$paren = _this$container.parentNode) === null || _this$container$paren === void 0 ? void 0 : _this$container$paren.removeChild(_this.container);
    };

    _this.switchScrollingEffect = function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        switchScrollingEffect(); // Must be set after switchScrollingEffect

        cacheOverflow = es_setStyle({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        es_setStyle(cacheOverflow);
        cacheOverflow = {};
        switchScrollingEffect(true);
      }
    };

    _this.scrollLocker = new ScrollLocker({
      container: getParent(props.getContainer)
    });
    return _this;
  }

  (0,createClass/* default */.Z)(PortalWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updateOpenCount();

      if (!this.attachToParent()) {
        this.rafId = (0,raf/* default */.Z)(function () {
          _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateOpenCount(prevProps);
      this.updateScrollLocker(prevProps);
      this.setWrapperClassName();
      this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props3 = this.props,
          visible = _this$props3.visible,
          getContainer = _this$props3.getContainer;

      if (supportDom && getParent(getContainer) === document.body) {
        // 离开时不会 render， 导到离开时数值不变，改用 func 。。
        openCount = visible && openCount ? openCount - 1 : openCount;
      }

      this.removeCurrentContainer();
      raf/* default.cancel */.Z.cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          forceRender = _this$props4.forceRender,
          visible = _this$props4.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      };

      if (forceRender || visible || this.componentRef.current) {
        portal = /*#__PURE__*/react.createElement(Portal/* default */.Z, {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, children(childProps));
      }

      return portal;
    }
  }]);

  return PortalWrapper;
}(react.Component);

/* harmony default export */ const es_PortalWrapper = (PortalWrapper);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(28991);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__(94999);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(64217);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(60444);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Mask.js





function Mask(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      visible = props.visible,
      maskProps = props.maskProps,
      motionName = props.motionName;
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    key: "mask",
    visible: visible,
    motionName: motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function (_ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style),
      className: classnames_default()("".concat(prefixCls, "-mask"), motionClassName)
    }, maskProps));
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/util.js
// =============================== Motion ===============================
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;

  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }

  return motionName;
} // ================================ UUID ================================

var util_uuid = -1;
function getUUID() {
  util_uuid += 1;
  return util_uuid;
} // =============================== Offset ===============================

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }

  return ret;
}

function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js

/* harmony default export */ const MemoChildren = (/*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
}));
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/index.js









var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var Content = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var closable = props.closable,
      prefixCls = props.prefixCls,
      width = props.width,
      height = props.height,
      footer = props.footer,
      title = props.title,
      closeIcon = props.closeIcon,
      style = props.style,
      className = props.className,
      visible = props.visible,
      forceRender = props.forceRender,
      bodyStyle = props.bodyStyle,
      bodyProps = props.bodyProps,
      children = props.children,
      destroyOnClose = props.destroyOnClose,
      modalRender = props.modalRender,
      motionName = props.motionName,
      ariaId = props.ariaId,
      onClose = props.onClose,
      onVisibleChanged = props.onVisibleChanged,
      onMouseDown = props.onMouseDown,
      onMouseUp = props.onMouseUp,
      mousePosition = props.mousePosition;
  var sentinelStartRef = (0,react.useRef)();
  var sentinelEndRef = (0,react.useRef)();
  var dialogRef = (0,react.useRef)(); // ============================== Ref ===============================

  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;

        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 ? void 0 : _sentinelStartRef$cur.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document,
            activeElement = _document.activeElement;

        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus();
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus();
        }
      }
    };
  }); // ============================= Style ==============================

  var _React$useState = react.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      transformOrigin = _React$useState2[0],
      setTransformOrigin = _React$useState2[1];

  var contentStyle = {};

  if (width !== undefined) {
    contentStyle.width = width;
  }

  if (height !== undefined) {
    contentStyle.height = height;
  }

  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }

  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : '');
  } // ============================= Render =============================


  var footerNode;

  if (footer) {
    footerNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  var headerNode;

  if (title) {
    headerNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-header")
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-title"),
      id: ariaId
    }, title));
  }

  var closer;

  if (closable) {
    closer = /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close")
    }, closeIcon || /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-close-x")
    }));
  }

  var content = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, closer, headerNode, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, bodyProps), children), footerNode);
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    visible: visible,
    onVisibleChanged: onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender: forceRender,
    motionName: motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement("div", {
      key: "dialog-element",
      role: "document",
      ref: motionRef,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style), contentStyle),
      className: classnames_default()(prefixCls, className, motionClassName),
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp
    }, /*#__PURE__*/react.createElement("div", {
      tabIndex: 0,
      ref: sentinelStartRef,
      style: sentinelStyle,
      "aria-hidden": "true"
    }), /*#__PURE__*/react.createElement(MemoChildren, {
      shouldUpdate: visible || forceRender
    }, modalRender ? modalRender(content) : content), /*#__PURE__*/react.createElement("div", {
      tabIndex: 0,
      ref: sentinelEndRef,
      style: sentinelStyle,
      "aria-hidden": "true"
    }));
  });
});
Content.displayName = 'Content';
/* harmony default export */ const Dialog_Content = (Content);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/index.js












function Dialog(props) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls,
      zIndex = props.zIndex,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      _props$keyboard = props.keyboard,
      keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
      _props$focusTriggerAf = props.focusTriggerAfterClose,
      focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
      scrollLocker = props.scrollLocker,
      title = props.title,
      wrapStyle = props.wrapStyle,
      wrapClassName = props.wrapClassName,
      wrapProps = props.wrapProps,
      onClose = props.onClose,
      afterClose = props.afterClose,
      transitionName = props.transitionName,
      animation = props.animation,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? true : _props$closable,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      maskStyle = props.maskStyle,
      maskProps = props.maskProps;
  var lastOutSideActiveElementRef = (0,react.useRef)();
  var wrapperRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();

  var _React$useState = react.useState(visible),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      animatedVisible = _React$useState2[0],
      setAnimatedVisible = _React$useState2[1]; // ========================== Init ==========================


  var ariaIdRef = (0,react.useRef)();

  if (!ariaIdRef.current) {
    ariaIdRef.current = "rcDialogTitle".concat(getUUID());
  } // ========================= Events =========================


  function onDialogVisibleChanged(newVisible) {
    if (newVisible) {
      // Try to focus
      if (!(0,contains/* default */.Z)(wrapperRef.current, document.activeElement)) {
        var _contentRef$current;

        lastOutSideActiveElementRef.current = document.activeElement;
        (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.focus();
      }
    } else {
      // Clean up scroll bar & focus back
      setAnimatedVisible(false);

      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {// Do nothing
        }

        lastOutSideActiveElementRef.current = null;
      } // Trigger afterClose only when change visible from true to false


      if (animatedVisible) {
        afterClose === null || afterClose === void 0 ? void 0 : afterClose();
      }
    }
  }

  function onInternalClose(e) {
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
  } // >>> Content


  var contentClickRef = (0,react.useRef)(false);
  var contentTimeoutRef = (0,react.useRef)(); // We need record content click incase content popup out of dialog

  var onContentMouseDown = function onContentMouseDown() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };

  var onContentMouseUp = function onContentMouseUp() {
    contentTimeoutRef.current = setTimeout(function () {
      contentClickRef.current = false;
    });
  }; // >>> Wrapper
  // Close only when element not on dialog


  var onWrapperClick = null;

  if (maskClosable) {
    onWrapperClick = function onWrapperClick(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }

  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode/* default.ESC */.Z.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    } // keep focus inside dialog


    if (visible) {
      if (e.keyCode === KeyCode/* default.TAB */.Z.TAB) {
        contentRef.current.changeActive(!e.shiftKey);
      }
    }
  } // ========================= Effect =========================


  (0,react.useEffect)(function () {
    if (visible) {
      setAnimatedVisible(true);
    }

    return function () {};
  }, [visible]); // Remove direct should also check the scroll bar update

  (0,react.useEffect)(function () {
    return function () {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  (0,react.useEffect)(function () {
    if (animatedVisible) {
      scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
      return scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock;
    }

    return function () {};
  }, [animatedVisible, scrollLocker]); // ========================= Render =========================

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: "".concat(prefixCls, "-root")
  }, (0,pickAttrs/* default */.Z)(props, {
    data: true
  })), /*#__PURE__*/react.createElement(Mask, {
    prefixCls: prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: (0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, maskStyle),
    maskProps: maskProps
  }), /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: classnames_default()("".concat(prefixCls, "-wrap"), wrapClassName),
    ref: wrapperRef,
    onClick: onWrapperClick,
    role: "dialog",
    "aria-labelledby": title ? ariaIdRef.current : null,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, wrapStyle), {}, {
      display: !animatedVisible ? 'none' : null
    })
  }, wrapProps), /*#__PURE__*/react.createElement(Dialog_Content, (0,esm_extends/* default */.Z)({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable: closable,
    ariaId: ariaIdRef.current,
    prefixCls: prefixCls,
    visible: visible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/DialogWrap.js




 // fix issue #10656

/*
 * getContainer remarks
 * Custom container should not be return, because in the Portal component, it will remove the
 * return container element here, if the custom container is the only child of it's component,
 * like issue #10656, It will has a conflict with removeChild method in react-dom.
 * So here should add a child (div element) to custom container.
 * */

var DialogWrap = function DialogWrap(props) {
  var visible = props.visible,
      getContainer = props.getContainer,
      forceRender = props.forceRender,
      _props$destroyOnClose = props.destroyOnClose,
      destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
      _afterClose = props.afterClose;

  var _React$useState = react.useState(visible),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      animatedVisible = _React$useState2[0],
      setAnimatedVisible = _React$useState2[1];

  react.useEffect(function () {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]); // 渲染在当前 dom 里；

  if (getContainer === false) {
    return /*#__PURE__*/react.createElement(Dialog, (0,esm_extends/* default */.Z)({}, props, {
      getOpenCount: function getOpenCount() {
        return 2;
      } // 不对 body 做任何操作。。

    }));
  } // Destroy on close will remove wrapped div


  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }

  return /*#__PURE__*/react.createElement(es_PortalWrapper, {
    visible: visible,
    forceRender: forceRender,
    getContainer: getContainer
  }, function (childProps) {
    return /*#__PURE__*/react.createElement(Dialog, (0,esm_extends/* default */.Z)({}, props, {
      destroyOnClose: destroyOnClose,
      afterClose: function afterClose() {
        _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
        setAnimatedVisible(false);
      }
    }, childProps));
  });
};

DialogWrap.displayName = 'Dialog';
/* harmony default export */ const es_DialogWrap = (DialogWrap);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/index.js

/* harmony default export */ const rc_dialog_es = (es_DialogWrap);

/***/ }),

/***/ 93770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Cd": () => (/* reexport */ es_Circle)
});

// UNUSED EXPORTS: Line, default

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28481);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/common.js

var defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};
var useTransitionDuration = function useTransitionDuration(percentList) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var paths = percentList.map(function () {
    return (0,react.useRef)();
  });
  var prevTimeStamp = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var now = Date.now();
    var updated = false;
    Object.keys(paths).forEach(function (key) {
      var path = paths[key].current;

      if (!path) {
        return;
      }

      updated = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';

      if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
    });

    if (updated) {
      prevTimeStamp.current = Date.now();
    }
  });
  return [paths];
};
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/Line.js







var Line = function Line(_ref) {
  var className = _ref.className,
      percent = _ref.percent,
      prefixCls = _ref.prefixCls,
      strokeColor = _ref.strokeColor,
      strokeLinecap = _ref.strokeLinecap,
      strokeWidth = _ref.strokeWidth,
      style = _ref.style,
      trailColor = _ref.trailColor,
      trailWidth = _ref.trailWidth,
      transition = _ref.transition,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, ["className", "percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "style", "trailColor", "trailWidth", "transition"]);

  // eslint-disable-next-line no-param-reassign
  delete restProps.gapPosition;
  var percentList = Array.isArray(percent) ? percent : [percent];
  var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];

  var _useTransitionDuratio = useTransitionDuration(percentList),
      _useTransitionDuratio2 = (0,slicedToArray/* default */.Z)(_useTransitionDuratio, 1),
      paths = _useTransitionDuratio2[0];

  var center = strokeWidth / 2;
  var right = 100 - strokeWidth / 2;
  var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\n         L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
  var viewBoxString = "0 0 100 ".concat(strokeWidth);
  var stackPtg = 0;
  return /*#__PURE__*/react.createElement("svg", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-line"), className),
    viewBox: viewBoxString,
    preserveAspectRatio: "none",
    style: style
  }, restProps), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-line-trail"),
    d: pathString,
    strokeLinecap: strokeLinecap,
    stroke: trailColor,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0"
  }), percentList.map(function (ptg, index) {
    var dashPercent = 1;

    switch (strokeLinecap) {
      case 'round':
        dashPercent = 1 - strokeWidth / 100;
        break;

      case 'square':
        dashPercent = 1 - strokeWidth / 2 / 100;
        break;

      default:
        dashPercent = 1;
        break;
    }

    var pathStyle = {
      strokeDasharray: "".concat(ptg * dashPercent, "px, 100px"),
      strokeDashoffset: "-".concat(stackPtg, "px"),
      transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
    };
    var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
    stackPtg += ptg;
    return /*#__PURE__*/react.createElement("path", {
      key: index,
      className: "".concat(prefixCls, "-line-path"),
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: color,
      strokeWidth: strokeWidth,
      fillOpacity: "0",
      ref: paths[index],
      style: pathStyle
    });
  }));
};

Line.defaultProps = defaultProps;
Line.displayName = 'Line';
/* harmony default export */ const es_Line = (Line);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/Circle.js






var gradientSeed = 0;

function stripPercentToNumber(percent) {
  return +percent.replace('%', '');
}

function toArray(symArray) {
  return Array.isArray(symArray) ? symArray : [symArray];
}

function getPathStyles(offset, percent, strokeColor, strokeWidth) {
  var gapDegree = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var gapPosition = arguments.length > 5 ? arguments[5] : undefined;
  var radius = 50 - strokeWidth / 2;
  var beginPositionX = 0;
  var beginPositionY = -radius;
  var endPositionX = 0;
  var endPositionY = -2 * radius;

  switch (gapPosition) {
    case 'left':
      beginPositionX = -radius;
      beginPositionY = 0;
      endPositionX = 2 * radius;
      endPositionY = 0;
      break;

    case 'right':
      beginPositionX = radius;
      beginPositionY = 0;
      endPositionX = -2 * radius;
      endPositionY = 0;
      break;

    case 'bottom':
      beginPositionY = radius;
      endPositionY = 2 * radius;
      break;

    default:
  }

  var pathString = "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
  var len = Math.PI * 2 * radius;
  var pathStyle = {
    stroke: typeof strokeColor === 'string' ? strokeColor : undefined,
    strokeDasharray: "".concat(percent / 100 * (len - gapDegree), "px ").concat(len, "px"),
    strokeDashoffset: "-".concat(gapDegree / 2 + offset / 100 * (len - gapDegree), "px"),
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s' // eslint-disable-line

  };
  return {
    pathString: pathString,
    pathStyle: pathStyle
  };
}

var Circle = function Circle(_ref) {
  var prefixCls = _ref.prefixCls,
      strokeWidth = _ref.strokeWidth,
      trailWidth = _ref.trailWidth,
      gapDegree = _ref.gapDegree,
      gapPosition = _ref.gapPosition,
      trailColor = _ref.trailColor,
      strokeLinecap = _ref.strokeLinecap,
      style = _ref.style,
      className = _ref.className,
      strokeColor = _ref.strokeColor,
      percent = _ref.percent,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"]);

  var gradientId = react.useMemo(function () {
    gradientSeed += 1;
    return gradientSeed;
  }, []);

  var _getPathStyles = getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition),
      pathString = _getPathStyles.pathString,
      pathStyle = _getPathStyles.pathStyle;

  var percentList = toArray(percent);
  var strokeColorList = toArray(strokeColor);
  var gradient = strokeColorList.find(function (color) {
    return Object.prototype.toString.call(color) === '[object Object]';
  });

  var _useTransitionDuratio = useTransitionDuration(percentList),
      _useTransitionDuratio2 = (0,slicedToArray/* default */.Z)(_useTransitionDuratio, 1),
      paths = _useTransitionDuratio2[0];

  var getStokeList = function getStokeList() {
    var stackPtg = 0;
    return percentList.map(function (ptg, index) {
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      var stroke = Object.prototype.toString.call(color) === '[object Object]' ? "url(#".concat(prefixCls, "-gradient-").concat(gradientId, ")") : '';
      var pathStyles = getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition);
      stackPtg += ptg;
      return /*#__PURE__*/react.createElement("path", {
        key: index,
        className: "".concat(prefixCls, "-circle-path"),
        d: pathStyles.pathString,
        stroke: stroke,
        strokeLinecap: strokeLinecap,
        strokeWidth: strokeWidth,
        opacity: ptg === 0 ? 0 : 1,
        fillOpacity: "0",
        style: pathStyles.pathStyle,
        ref: paths[index]
      });
    });
  };

  return /*#__PURE__*/react.createElement("svg", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-circle"), className),
    viewBox: "0 0 100 100",
    style: style
  }, restProps), gradient && /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "".concat(prefixCls, "-gradient-").concat(gradientId),
    x1: "100%",
    y1: "0%",
    x2: "0%",
    y2: "0%"
  }, Object.keys(gradient).sort(function (a, b) {
    return stripPercentToNumber(a) - stripPercentToNumber(b);
  }).map(function (key, index) {
    return /*#__PURE__*/react.createElement("stop", {
      key: index,
      offset: key,
      stopColor: gradient[key]
    });
  }))), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-circle-trail"),
    d: pathString,
    stroke: trailColor,
    strokeLinecap: strokeLinecap,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0",
    style: pathStyle
  }), getStokeList().reverse());
};

Circle.defaultProps = defaultProps;
Circle.displayName = 'Circle';
/* harmony default export */ const es_Circle = (Circle);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/index.js



/* harmony default export */ const es = ({
  Line: es_Line,
  Circle: es_Circle
});

/***/ }),

/***/ 16230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HH": () => (/* reexport */ Handle),
  "e6": () => (/* reexport */ es_Range),
  "ZP": () => (/* binding */ rc_slider_es)
});

// UNUSED EXPORTS: SliderTooltip, createSliderWithTooltip

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
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/common/Track.js




var Track = function Track(props) {
  var _ref, _ref2;

  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      style = props.style;
  var length = props.length,
      offset = props.offset,
      reverse = props.reverse;

  if (length < 0) {
    reverse = !reverse;
    length = Math.abs(length);
    offset = 100 - offset;
  }

  var positonStyle = vertical ? (_ref = {}, (0,defineProperty/* default */.Z)(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), (0,defineProperty/* default */.Z)(_ref, reverse ? 'bottom' : 'top', 'auto'), (0,defineProperty/* default */.Z)(_ref, "height", "".concat(length, "%")), _ref) : (_ref2 = {}, (0,defineProperty/* default */.Z)(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), (0,defineProperty/* default */.Z)(_ref2, reverse ? 'left' : 'right', 'auto'), (0,defineProperty/* default */.Z)(_ref2, "width", "".concat(length, "%")), _ref2);

  var elStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), positonStyle);

  return included ? /*#__PURE__*/react.createElement("div", {
    className: className,
    style: elStyle
  }) : null;
};

/* harmony default export */ const common_Track = (Track);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(42921);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(66213);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(77608);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__(64019);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/common/Steps.js






var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0,warning/* default */.ZP)(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });

  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }

  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;
  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = "".concat(Math.abs(point - min) / range * 100, "%");
    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, dotStyle), {}, (0,defineProperty/* default */.Z)({}, reverse ? 'top' : 'bottom', offset)) : (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, dotStyle), {}, (0,defineProperty/* default */.Z)({}, reverse ? 'right' : 'left', offset));

    if (isActived) {
      style = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), activeDotStyle);
    }

    var pointClassName = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-dot"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-dot-active"), isActived), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
    return /*#__PURE__*/react.createElement("span", {
      className: pointClassName,
      style: style,
      key: point
    });
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, elements);
};

/* harmony default export */ const common_Steps = (Steps);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(90484);
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/common/Marks.js






var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;
  var marksKeys = Object.keys(marks);
  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = (0,esm_typeof/* default */.Z)(markPoint) === 'object' && ! /*#__PURE__*/react.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;

    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(className, "-text"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(className, "-text-active"), isActive), _classNames));

    var bottomStyle = (0,defineProperty/* default */.Z)({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', "".concat((point - min) / range * 100, "%"));

    var leftStyle = (0,defineProperty/* default */.Z)({
      transform: "translateX(".concat(reverse ? "50%" : "-50%", ")"),
      msTransform: "translateX(".concat(reverse ? "50%" : "-50%", ")")
    }, reverse ? 'right' : 'left', "".concat((point - min) / range * 100, "%"));

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), markPoint.style) : style;
    return /*#__PURE__*/react.createElement("span", {
      className: markClassName,
      style: markStyle,
      key: point,
      onMouseDown: function onMouseDown(e) {
        return onClickLabel(e, point);
      },
      onTouchStart: function onTouchStart(e) {
        return onClickLabel(e, point);
      }
    }, markLabel);
  });
  return /*#__PURE__*/react.createElement("div", {
    className: className
  }, elements);
};

/* harmony default export */ const common_Marks = (Marks);
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/Handle.js












var Handle = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Handle, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Handle);

  function Handle() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Handle);

    _this = _super.apply(this, arguments);
    _this.state = {
      clickFocused: false
    };

    _this.setHandleRef = function (node) {
      _this.handle = node;
    };

    _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    };

    _this.handleMouseDown = function (e) {
      // avoid selecting text during drag
      // https://github.com/ant-design/ant-design/issues/25010
      e.preventDefault(); // fix https://github.com/ant-design/ant-design/issues/15324

      _this.focus();
    };

    _this.handleBlur = function () {
      _this.setClickFocus(false);
    };

    _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Handle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = (0,addEventListener/* default */.Z)(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: "setClickFocus",
    value: function setClickFocus(focused) {
      this.setState({
        clickFocused: focused
      });
    }
  }, {
    key: "clickFocus",
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _ref, _ref2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          vertical = _this$props.vertical,
          reverse = _this$props.reverse,
          offset = _this$props.offset,
          style = _this$props.style,
          disabled = _this$props.disabled,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          tabIndex = _this$props.tabIndex,
          ariaLabel = _this$props.ariaLabel,
          ariaLabelledBy = _this$props.ariaLabelledBy,
          ariaValueTextFormatter = _this$props.ariaValueTextFormatter,
          restProps = (0,objectWithoutProperties/* default */.Z)(_this$props, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"]);

      var className = classnames_default()(this.props.className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-handle-click-focused"), this.state.clickFocused));
      var positionStyle = vertical ? (_ref = {}, (0,defineProperty/* default */.Z)(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), (0,defineProperty/* default */.Z)(_ref, reverse ? 'bottom' : 'top', 'auto'), (0,defineProperty/* default */.Z)(_ref, "transform", reverse ? null : "translateY(+50%)"), _ref) : (_ref2 = {}, (0,defineProperty/* default */.Z)(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), (0,defineProperty/* default */.Z)(_ref2, reverse ? 'left' : 'right', 'auto'), (0,defineProperty/* default */.Z)(_ref2, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref2);

      var elStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), positionStyle);

      var mergedTabIndex = tabIndex || 0;

      if (disabled || tabIndex === null) {
        mergedTabIndex = null;
      }

      var ariaValueText;

      if (ariaValueTextFormatter) {
        ariaValueText = ariaValueTextFormatter(value);
      }

      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
        ref: this.setHandleRef,
        tabIndex: mergedTabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown // aria attribute
        ,
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": !!disabled,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText
      }));
    }
  }]);

  return Handle;
}(react.Component);


// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/utils.js



function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function (key) {
      return e.target === (0,react_dom.findDOMNode)(handles[key]);
    });
  } catch (error) {
    return false;
  }
}
function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  return value < min || value > max;
}
function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}
function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min,
      max = _ref2.max;
  var points = Object.keys(marks).map(parseFloat);

  if (step !== null) {
    var baseNum = Math.pow(10, getPrecision(step));
    var maxSteps = Math.floor((max * baseNum - min * baseNum) / (step * baseNum));
    var steps = Math.min((val - min) / step, maxSteps);
    var closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }

  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, (0,toConsumableArray/* default */.Z)(diffs)))];
}
function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;

  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }

  return precision;
}
function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}
function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}
function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }

  if (val >= max) {
    return max;
  }

  return val;
}
function ensureValuePrecision(val, props) {
  var step = props.step;
  var closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line

  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}
function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
function calculateNextValue(func, value, props) {
  var operations = {
    increase: function increase(a, b) {
      return a + b;
    },
    decrease: function decrease(a, b) {
      return a - b;
    }
  };
  var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
  var keyToGet = Object.keys(props.marks)[indexToGet];

  if (props.step) {
    return operations[func](value, props.step);
  }

  if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) {
    return props.marks[keyToGet];
  }

  return value;
}
function getKeyboardValueMutator(e, vertical, reverse) {
  var increase = 'increase';
  var decrease = 'decrease';
  var method = increase;

  switch (e.keyCode) {
    case KeyCode/* default.UP */.Z.UP:
      method = vertical && reverse ? decrease : increase;
      break;

    case KeyCode/* default.RIGHT */.Z.RIGHT:
      method = !vertical && reverse ? decrease : increase;
      break;

    case KeyCode/* default.DOWN */.Z.DOWN:
      method = vertical && reverse ? increase : decrease;
      break;

    case KeyCode/* default.LEFT */.Z.LEFT:
      method = !vertical && reverse ? increase : decrease;
      break;

    case KeyCode/* default.END */.Z.END:
      return function (value, props) {
        return props.max;
      };

    case KeyCode/* default.HOME */.Z.HOME:
      return function (value, props) {
        return props.min;
      };

    case KeyCode/* default.PAGE_UP */.Z.PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };

    case KeyCode/* default.PAGE_DOWN */.Z.PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }

  return function (value, props) {
    return calculateNextValue(method, value, props);
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/common/createSlider.js



















/* eslint-disable @typescript-eslint/no-explicit-any */

function noop() {}

function createSlider(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_Component) {
    (0,inherits/* default */.Z)(ComponentEnhancer, _Component);

    var _super = (0,createSuper/* default */.Z)(ComponentEnhancer);

    function ComponentEnhancer(props) {
      var _this;

      (0,classCallCheck/* default */.Z)(this, ComponentEnhancer);

      _this = _super.call(this, props);

      _this.onDown = function (e, position) {
        var p = position;
        var _this$props = _this.props,
            draggableTrack = _this$props.draggableTrack,
            isVertical = _this$props.vertical;
        var bounds = _this.state.bounds;
        var value = draggableTrack && _this.positionGetValue ? _this.positionGetValue(p) || [] : [];
        var inPoint = isEventFromHandle(e, _this.handlesRefs);
        _this.dragTrack = draggableTrack && bounds.length >= 2 && !inPoint && !value.map(function (n, i) {
          var v = !i ? n >= bounds[i] : true;
          return i === value.length - 1 ? n <= bounds[i] : v;
        }).some(function (c) {
          return !c;
        });

        if (_this.dragTrack) {
          _this.dragOffset = p;
          _this.startBounds = (0,toConsumableArray/* default */.Z)(bounds);
        } else {
          if (!inPoint) {
            _this.dragOffset = 0;
          } else {
            var handlePosition = getHandleCenterPosition(isVertical, e.target);
            _this.dragOffset = p - handlePosition;
            p = handlePosition;
          }

          _this.onStart(p);
        }
      };

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        _this.removeDocumentEvents();

        var isVertical = _this.props.vertical;
        var position = getMousePosition(isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (isNotTouchEvent(e)) return;
        var isVertical = _this.props.vertical;
        var position = getTouchPosition(isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentTouchEvents();

        pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props2 = _this.props,
            onFocus = _this$props2.onFocus,
            vertical = _this$props2.vertical;

        if (isEventFromHandle(e, _this.handlesRefs) && !_this.dragTrack) {
          var handlePosition = getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;

          _this.onStart(handlePosition);

          pauseEvent(e);

          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        if (!_this.dragTrack) {
          _this.onEnd();
        }

        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = getMousePosition(_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onTouchMove = function (e) {
        if (isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = getTouchPosition(_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();

        _this.onChange({
          value: value
        }); // eslint-disable-next-line react/no-unused-state


        _this.setState({
          value: value
        }, function () {
          return _this.onEnd(true);
        });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      var step = props.step,
          max = props.max,
          min = props.min;
      var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line

      (0,warning/* default */.ZP)(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
      _this.handlesRefs = {};
      return _this;
    }

    (0,createClass/* default */.Z)(ComponentEnhancer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
        var _this$props3 = this.props,
            autoFocus = _this$props3.autoFocus,
            disabled = _this$props3.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if ((0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(ComponentEnhancer.prototype), "componentWillUnmount", this)) (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(ComponentEnhancer.prototype), "componentWillUnmount", this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: "getSliderStart",
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var _this$props4 = this.props,
            vertical = _this$props4.vertical,
            reverse = _this$props4.reverse;
        var rect = slider.getBoundingClientRect();

        if (vertical) {
          return reverse ? rect.bottom : rect.top;
        }

        return window.pageXOffset + (reverse ? rect.right : rect.left);
      }
    }, {
      key: "getSliderLength",
      value: function getSliderLength() {
        var slider = this.sliderRef;

        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: "addDocumentTouchEvents",
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = (0,addEventListener/* default */.Z)(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = (0,addEventListener/* default */.Z)(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: "addDocumentMouseEvents",
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = (0,addEventListener/* default */.Z)(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = (0,addEventListener/* default */.Z)(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: "removeDocumentEvents",
      value: function removeDocumentEvents() {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();
        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: "focus",
      value: function focus() {
        var _this$handlesRefs$;

        if (this.props.disabled) {
          return;
        }

        (_this$handlesRefs$ = this.handlesRefs[0]) === null || _this$handlesRefs$ === void 0 ? void 0 : _this$handlesRefs$.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        var _this2 = this;

        if (this.props.disabled) {
          return;
        }

        Object.keys(this.handlesRefs).forEach(function (key) {
          var _this2$handlesRefs$ke, _this2$handlesRefs$ke2;

          (_this2$handlesRefs$ke = _this2.handlesRefs[key]) === null || _this2$handlesRefs$ke === void 0 ? void 0 : (_this2$handlesRefs$ke2 = _this2$handlesRefs$ke.blur) === null || _this2$handlesRefs$ke2 === void 0 ? void 0 : _this2$handlesRefs$ke2.call(_this2$handlesRefs$ke);
        });
      }
    }, {
      key: "calcValue",
      value: function calcValue(offset) {
        var _this$props5 = this.props,
            vertical = _this$props5.vertical,
            min = _this$props5.min,
            max = _this$props5.max;
        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: "calcValueByPos",
      value: function calcValueByPos(position) {
        var sign = this.props.reverse ? -1 : +1;
        var pixelOffset = sign * (position - this.getSliderStart());
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: "calcOffset",
      value: function calcOffset(value) {
        var _this$props6 = this.props,
            min = _this$props6.min,
            max = _this$props6.max;
        var ratio = (value - min) / (max - min);
        return Math.max(0, ratio * 100);
      }
    }, {
      key: "saveHandle",
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props7 = this.props,
            prefixCls = _this$props7.prefixCls,
            className = _this$props7.className,
            marks = _this$props7.marks,
            dots = _this$props7.dots,
            step = _this$props7.step,
            included = _this$props7.included,
            disabled = _this$props7.disabled,
            vertical = _this$props7.vertical,
            reverse = _this$props7.reverse,
            min = _this$props7.min,
            max = _this$props7.max,
            children = _this$props7.children,
            maximumTrackStyle = _this$props7.maximumTrackStyle,
            style = _this$props7.style,
            railStyle = _this$props7.railStyle,
            dotStyle = _this$props7.dotStyle,
            activeDotStyle = _this$props7.activeDotStyle;

        var _get$call = (0,get/* default */.Z)((0,getPrototypeOf/* default */.Z)(ComponentEnhancer.prototype), "render", this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-vertical"), vertical), (0,defineProperty/* default */.Z)(_classNames, className, className), _classNames));
        return /*#__PURE__*/react.createElement("div", {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        }, /*#__PURE__*/react.createElement("div", {
          className: "".concat(prefixCls, "-rail"),
          style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, maximumTrackStyle), railStyle)
        }), tracks, /*#__PURE__*/react.createElement(common_Steps, {
          prefixCls: prefixCls,
          vertical: vertical,
          reverse: reverse,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }), handles, /*#__PURE__*/react.createElement(common_Marks, {
          className: "".concat(prefixCls, "-mark"),
          onClickLabel: disabled ? noop : this.onClickMarkLabel,
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          reverse: reverse
        }), children);
      }
    }]);

    return ComponentEnhancer;
  }(Component), _a.displayName = "ComponentEnhancer(".concat(Component.displayName, ")"), _a.defaultProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, Component.defaultProps), {}, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(props) {
      var index = props.index,
          restProps = (0,objectWithoutProperties/* default */.Z)(props, ["index"]);

      delete restProps.dragging;

      if (restProps.value === null) {
        return null;
      }

      return /*#__PURE__*/react.createElement(Handle, (0,esm_extends/* default */.Z)({}, restProps, {
        key: index
      }));
    },
    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    reverse: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _a;
}
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/Slider.js











var Slider = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Slider, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Slider);

  /* eslint-enable */
  function Slider(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Slider);

    _this = _super.call(this, props);

    _this.positionGetValue = function (position) {
      return [];
    };

    _this.onEnd = function (force) {
      var dragging = _this.state.dragging;

      _this.removeDocumentEvents();

      if (dragging || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        dragging: false
      });
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;
    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    (0,warning/* default */.ZP)(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecated, please use trackStyle instead.');
    (0,warning/* default */.ZP)(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecated, please use railStyle instead.');
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  (0,createClass/* default */.Z)(Slider, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          onChange = _this$props.onChange;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      var theValue = value !== undefined ? value : prevState.value;
      var nextValue = this.trimAlignValue(theValue, this.props);

      if (nextValue === prevState.value) {
        return;
      } // eslint-disable-next-line


      this.setState({
        value: nextValue
      });

      if (!(min === prevProps.min && max === prevProps.max) && isValueOutOfRange(theValue, this.props)) {
        onChange(nextValue);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      var nextState = state.value > this.props.max ? (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
        value: this.props.max
      }) : state;

      if (isNotControlled) {
        this.setState(nextState);
      }

      var changedValue = nextState.value;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      this.setState({
        dragging: true
      });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      if (value === prevValue) return;
      this.prevMovedHandleIndex = 0;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position) {
      pauseEvent(e);
      var oldValue = this.state.value;
      var value = this.calcValueByPos(position);
      if (value === oldValue) return;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = getKeyboardValueMutator(e, vertical, reverse);

      if (valueMutator) {
        pauseEvent(e);
        var state = this.state;
        var oldValue = state.value;
        var mutatedValue = valueMutator(oldValue, this.props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;
        this.onChange({
          value: value
        });
        this.props.onAfterChange(value);
        this.onEnd();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      var minPoint = this.props.startPoint || this.props.min;
      return this.state.value > minPoint ? minPoint : this.state.value;
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      if (this.state.value < this.props.startPoint) {
        return this.props.startPoint;
      }

      return this.state.value;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (v === null) {
        return null;
      }

      var mergedProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, this.props), nextProps);

      var val = ensureValueInRange(v, mergedProps);
      return ensureValuePrecision(val, mergedProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          vertical = _this$props3.vertical,
          included = _this$props3.included,
          disabled = _this$props3.disabled,
          minimumTrackStyle = _this$props3.minimumTrackStyle,
          trackStyle = _this$props3.trackStyle,
          handleStyle = _this$props3.handleStyle,
          tabIndex = _this$props3.tabIndex,
          ariaLabelForHandle = _this$props3.ariaLabelForHandle,
          ariaLabelledByForHandle = _this$props3.ariaLabelledByForHandle,
          ariaValueTextFormatterForHandle = _this$props3.ariaValueTextFormatterForHandle,
          min = _this$props3.min,
          max = _this$props3.max,
          startPoint = _this$props3.startPoint,
          reverse = _this$props3.reverse,
          handleGenerator = _this$props3.handle;
      var _this$state = this.state,
          value = _this$state.value,
          dragging = _this$state.dragging;
      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: "".concat(prefixCls, "-handle"),
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        reverse: reverse,
        index: 0,
        tabIndex: tabIndex,
        ariaLabel: ariaLabelForHandle,
        ariaLabelledBy: ariaLabelledByForHandle,
        ariaValueTextFormatter: ariaValueTextFormatterForHandle,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });
      var trackOffset = startPoint !== undefined ? this.calcOffset(startPoint) : 0;
      var mergedTrackStyle = trackStyle[0] || trackStyle;
      var track = /*#__PURE__*/react.createElement(common_Track, {
        className: "".concat(prefixCls, "-track"),
        vertical: vertical,
        included: included,
        offset: trackOffset,
        reverse: reverse,
        length: offset - trackOffset,
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, minimumTrackStyle), mergedTrackStyle)
      });
      return {
        tracks: track,
        handles: handle
      };
    }
  }]);

  return Slider;
}(react.Component);

/* harmony default export */ const es_Slider = (createSlider(Slider));
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/Range.js













var _trimAlignValue = function trimAlignValue(_ref) {
  var value = _ref.value,
      handle = _ref.handle,
      bounds = _ref.bounds,
      props = _ref.props;
  var allowCross = props.allowCross,
      pushable = props.pushable;
  var thershold = Number(pushable);
  var valInRange = ensureValueInRange(value, props);
  var valNotConflict = valInRange;

  if (!allowCross && handle != null && bounds !== undefined) {
    if (handle > 0 && valInRange <= bounds[handle - 1] + thershold) {
      valNotConflict = bounds[handle - 1] + thershold;
    }

    if (handle < bounds.length - 1 && valInRange >= bounds[handle + 1] - thershold) {
      valNotConflict = bounds[handle + 1] - thershold;
    }
  }

  return ensureValuePrecision(valNotConflict, props);
};

var Range = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Range, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Range);

  function Range(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Range);

    _this = _super.call(this, props);

    _this.positionGetValue = function (position) {
      var bounds = _this.getValue();

      var value = _this.calcValueByPos(position);

      var closestBound = _this.getClosestBound(value);

      var index = _this.getBoundNeedMoving(value, closestBound);

      var prevValue = bounds[index];
      if (value === prevValue) return null;

      var nextBounds = (0,toConsumableArray/* default */.Z)(bounds);

      nextBounds[index] = value;
      return nextBounds;
    };

    _this.onEnd = function (force) {
      var handle = _this.state.handle;

      _this.removeDocumentEvents();

      if (!handle) {
        _this.dragTrack = false;
      }

      if (handle !== null || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        handle: null
      });
    };

    var count = props.count,
        min = props.min,
        max = props.max;
    var initialValue = Array.apply(void 0, (0,toConsumableArray/* default */.Z)(Array(count + 1))).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _trimAlignValue({
        value: v,
        handle: i,
        props: props
      });
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;
    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  (0,createClass/* default */.Z)(Range, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "getSliderLength",
    value: function getSliderLength() {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          min = _this$props.min,
          max = _this$props.max;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      if (min === prevProps.min && max === prevProps.max) {
        return;
      }

      var currentValue = value || prevState.bounds;

      if (currentValue.some(function (v) {
        return isValueOutOfRange(v, _this2.props);
      })) {
        var newValues = currentValue.map(function (v) {
          return ensureValueInRange(v, _this2.props);
        });
        onChange(newValues);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);

      if (isNotControlled) {
        this.setState(state);
      } else {
        var controlledState = {};
        ['handle', 'recent'].forEach(function (item) {
          if (state[item] !== undefined) {
            controlledState[item] = state[item];
          }
        });

        if (Object.keys(controlledState).length) {
          this.setState(controlledState);
        }
      }

      var data = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, this.state), state);

      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      var props = this.props,
          state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      var closestBound = this.getClosestBound(value);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);
      this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });
      var prevValue = bounds[this.prevMovedHandleIndex];
      if (value === prevValue) return;

      var nextBounds = (0,toConsumableArray/* default */.Z)(state.bounds);

      nextBounds[this.prevMovedHandleIndex] = value;
      this.onChange({
        bounds: nextBounds
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position, dragTrack, startBounds) {
      pauseEvent(e);
      var state = this.state,
          props = this.props;
      var maxValue = props.max || 100;
      var minValue = props.min || 0;

      if (dragTrack) {
        var pos = props.vertical ? -position : position;
        pos = props.reverse ? -pos : pos;
        var max = maxValue - Math.max.apply(Math, (0,toConsumableArray/* default */.Z)(startBounds));
        var min = minValue - Math.min.apply(Math, (0,toConsumableArray/* default */.Z)(startBounds));
        var ratio = Math.min(Math.max(pos / (this.getSliderLength() / 100), min), max);
        var nextBounds = startBounds.map(function (v) {
          return Math.floor(Math.max(Math.min(v + ratio, maxValue), minValue));
        });

        if (state.bounds.map(function (c, i) {
          return c === nextBounds[i];
        }).some(function (c) {
          return !c;
        })) {
          this.onChange({
            bounds: nextBounds
          });
        }

        return;
      }

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;
      this.moveTo(value);
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = getKeyboardValueMutator(e, vertical, reverse);

      if (valueMutator) {
        pauseEvent(e);
        var state = this.state,
            props = this.props;
        var bounds = state.bounds,
            handle = state.handle;
        var oldValue = bounds[handle === null ? state.recent : handle];
        var mutatedValue = valueMutator(oldValue, props);

        var value = _trimAlignValue({
          value: mutatedValue,
          handle: handle,
          bounds: state.bounds,
          props: props
        });

        if (value === oldValue) return;
        var isFromKeyboardEvent = true;
        this.moveTo(value, isFromKeyboardEvent);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: "getClosestBound",
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;
      var closestBound = 0;

      for (var i = 1; i < bounds.length - 1; i += 1) {
        if (value >= bounds[i]) {
          closestBound = i;
        }
      }

      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound += 1;
      }

      return closestBound;
    }
  }, {
    key: "getBoundNeedMoving",
    value: function getBoundNeedMoving(value, closestBound) {
      var _this$state = this.state,
          bounds = _this$state.bounds,
          recent = _this$state.recent;
      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

      if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }

      return boundNeedMoving;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      var bounds = this.state.bounds;
      return bounds[bounds.length - 1];
    }
    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: "getPoints",
    value: function getPoints() {
      var _this$props3 = this.props,
          marks = _this$props3.marks,
          step = _this$props3.step,
          min = _this$props3.min,
          max = _this$props3.max;
      var cache = this.internalPointsCache;

      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = (0,objectSpread2/* default */.Z)({}, marks);

        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }

        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this.internalPointsCache = {
          marks: marks,
          step: step,
          points: points
        };
      }

      return this.internalPointsCache.points;
    }
  }, {
    key: "moveTo",
    value: function moveTo(value, isFromKeyboardEvent) {
      var _this3 = this;

      var state = this.state,
          props = this.props;

      var nextBounds = (0,toConsumableArray/* default */.Z)(state.bounds);

      var handle = state.handle === null ? state.recent : state.handle;
      nextBounds[handle] = value;
      var nextHandle = handle;

      if (props.pushable !== false) {
        this.pushSurroundingHandles(nextBounds, nextHandle);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }

      this.onChange({
        recent: nextHandle,
        handle: nextHandle,
        bounds: nextBounds
      });

      if (isFromKeyboardEvent) {
        // known problem: because setState is async,
        // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
        // cause onBeforeChange and onAfterChange receive wrong value.
        // here use setState callback to hack，but not elegant
        this.props.onAfterChange(nextBounds);
        this.setState({}, function () {
          _this3.handlesRefs[nextHandle].focus();
        });
        this.onEnd();
      }
    }
  }, {
    key: "pushSurroundingHandles",
    value: function pushSurroundingHandles(bounds, handle) {
      var value = bounds[handle];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var direction = 0;

      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }

      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        // eslint-disable-next-line no-param-reassign
        bounds[handle] = bounds[nextHandle] - direction * threshold;
      }
    }
  }, {
    key: "pushHandle",
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];

      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          // eslint-disable-next-line no-param-reassign
          bounds[handle] = originalValue;
          return false;
        }

        currentValue = bounds[handle];
      } // the handle was pushed enough to create the needed `amount` gap


      return true;
    }
  }, {
    key: "pushHandleOnePoint",
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;

      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }

      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var diffToNext = direction * (bounds[nextHandle] - nextValue);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      } // push the handle
      // eslint-disable-next-line no-param-reassign


      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(value) {
      var _this$state2 = this.state,
          handle = _this$state2.handle,
          bounds = _this$state2.bounds;
      return _trimAlignValue({
        value: value,
        handle: handle,
        bounds: bounds,
        props: this.props
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          handle = _this$state3.handle,
          bounds = _this$state3.bounds;
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          vertical = _this$props4.vertical,
          included = _this$props4.included,
          disabled = _this$props4.disabled,
          min = _this$props4.min,
          max = _this$props4.max,
          reverse = _this$props4.reverse,
          handleGenerator = _this$props4.handle,
          trackStyle = _this$props4.trackStyle,
          handleStyle = _this$props4.handleStyle,
          tabIndex = _this$props4.tabIndex,
          ariaLabelGroupForHandles = _this$props4.ariaLabelGroupForHandles,
          ariaLabelledByGroupForHandles = _this$props4.ariaLabelledByGroupForHandles,
          ariaValueTextFormatterGroupForHandles = _this$props4.ariaValueTextFormatterGroupForHandles;
      var offsets = bounds.map(function (v) {
        return _this4.calcOffset(v);
      });
      var handleClassName = "".concat(prefixCls, "-handle");
      var handles = bounds.map(function (v, i) {
        var _classNames;

        var mergedTabIndex = tabIndex[i] || 0;

        if (disabled || tabIndex[i] === null) {
          mergedTabIndex = null;
        }

        var dragging = handle === i;
        return handleGenerator({
          className: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, handleClassName, true), (0,defineProperty/* default */.Z)(_classNames, "".concat(handleClassName, "-").concat(i + 1), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(handleClassName, "-dragging"), dragging), _classNames)),
          prefixCls: prefixCls,
          vertical: vertical,
          dragging: dragging,
          offset: offsets[i],
          value: v,
          index: i,
          tabIndex: mergedTabIndex,
          min: min,
          max: max,
          reverse: reverse,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this4.saveHandle(i, h);
          },
          ariaLabel: ariaLabelGroupForHandles[i],
          ariaLabelledBy: ariaLabelledByGroupForHandles[i],
          ariaValueTextFormatter: ariaValueTextFormatterGroupForHandles[i]
        });
      });
      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-track"), true), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-track-").concat(i), true), _classNames2));
        return /*#__PURE__*/react.createElement(common_Track, {
          className: trackClassName,
          vertical: vertical,
          reverse: reverse,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });
      return {
        tracks: tracks,
        handles: handles
      };
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!('value' in props || 'min' in props || 'max' in props)) {
        return null;
      }

      var value = props.value || state.bounds;
      var nextBounds = value.map(function (v, i) {
        return _trimAlignValue({
          value: v,
          handle: i,
          bounds: state.bounds,
          props: props
        });
      });

      if (state.bounds.length === nextBounds.length) {
        if (nextBounds.every(function (v, i) {
          return v === state.bounds[i];
        })) {
          return null;
        }
      } else {
        nextBounds = value.map(function (v, i) {
          return _trimAlignValue({
            value: v,
            handle: i,
            props: props
          });
        });
      }

      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
        bounds: nextBounds
      });
    }
  }]);

  return Range;
}(react.Component);
/* eslint-enable */


Range.displayName = 'Range';
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  draggableTrack: false,
  tabIndex: [],
  ariaLabelGroupForHandles: [],
  ariaLabelledByGroupForHandles: [],
  ariaValueTextFormatterGroupForHandles: []
};
/* harmony default export */ const es_Range = (createSlider(Range));
// EXTERNAL MODULE: ./node_modules/rc-tooltip/es/index.js + 2 modules
var es = __webpack_require__(51472);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/common/SliderTooltip.js





var SliderTooltip = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var visible = props.visible,
      overlay = props.overlay;
  var innerRef = react.useRef(null);
  var tooltipRef = (0,es_ref/* composeRef */.sQ)(ref, innerRef);
  var rafRef = react.useRef(null);

  function cancelKeepAlign() {
    raf/* default.cancel */.Z.cancel(rafRef.current);
  }

  function keepAlign() {
    rafRef.current = (0,raf/* default */.Z)(function () {
      var _innerRef$current;

      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.forcePopupAlign();
    });
  }

  react.useEffect(function () {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [visible, overlay]);
  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
    ref: tooltipRef
  }, props));
});
/* harmony default export */ const common_SliderTooltip = (SliderTooltip);
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/createSliderWithTooltip.js











function createSliderWithTooltip(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_React$Component) {
    (0,inherits/* default */.Z)(ComponentWrapper, _React$Component);

    var _super = (0,createSuper/* default */.Z)(ComponentWrapper);

    function ComponentWrapper() {
      var _this;

      (0,classCallCheck/* default */.Z)(this, ComponentWrapper);

      _this = _super.apply(this, arguments);
      _this.state = {
        visibles: {}
      };

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, prevState.visibles), {}, (0,defineProperty/* default */.Z)({}, index, visible))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = (0,objectWithoutProperties/* default */.Z)(_ref, ["value", "dragging", "index", "disabled"]);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle,
            getTooltipContainer = _this$props.getTooltipContainer;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === void 0 ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === void 0 ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === void 0 ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === void 0 ? false : _tipProps$visible,
            restTooltipProps = (0,objectWithoutProperties/* default */.Z)(tipProps, ["prefixCls", "overlay", "placement", "visible"]);

        var handleStyleWithIndex;

        if (Array.isArray(handleStyle)) {
          handleStyleWithIndex = handleStyle[index] || handleStyle[0];
        } else {
          handleStyleWithIndex = handleStyle;
        }

        return /*#__PURE__*/react.createElement(common_SliderTooltip, (0,esm_extends/* default */.Z)({}, restTooltipProps, {
          getTooltipContainer: getTooltipContainer,
          prefixCls: prefixCls,
          overlay: overlay,
          placement: placement,
          visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
          key: index
        }), /*#__PURE__*/react.createElement(Handle, (0,esm_extends/* default */.Z)({}, restProps, {
          style: (0,objectSpread2/* default */.Z)({}, handleStyleWithIndex),
          value: value,
          onMouseEnter: function onMouseEnter() {
            return _this.handleTooltipVisibleChange(index, true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this.handleTooltipVisibleChange(index, false);
          }
        })));
      };

      return _this;
    }

    (0,createClass/* default */.Z)(ComponentWrapper, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, this.props, {
          handle: this.handleWithTooltip
        }));
      }
    }]);

    return ComponentWrapper;
  }(react.Component), _a.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },
    handleStyle: [{}],
    tipProps: {},
    getTooltipContainer: function getTooltipContainer(node) {
      return node.parentNode;
    }
  }, _a;
}
;// CONCATENATED MODULE: ./node_modules/rc-slider/es/index.js





var InternalSlider = es_Slider;
InternalSlider.Range = es_Range;
InternalSlider.Handle = Handle;
InternalSlider.createSliderWithTooltip = createSliderWithTooltip;
/* harmony default export */ const rc_slider_es = (InternalSlider);


/***/ }),

/***/ 13059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ es)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(90484);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(42921);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(64217);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/request.js
function getError(option, xhr) {
  var msg = "cannot ".concat(option.method, " ").concat(option.action, " ").concat(xhr.status, "'");
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;

  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

function upload(option) {
  // eslint-disable-next-line no-undef
  var xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }

      option.onProgress(e);
    };
  } // eslint-disable-next-line no-undef


  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).forEach(function (key) {
      var value = option.data[key]; // support key-value array data

      if (Array.isArray(value)) {
        value.forEach(function (item) {
          // { list: [ 11, 22 ] }
          // formData.append('list[]', 11);
          formData.append("".concat(key, "[]"), item);
        });
        return;
      }

      formData.append(key, option.data[key]);
    });
  } // eslint-disable-next-line no-undef


  if (option.file instanceof Blob) {
    formData.append(option.filename, option.file, option.file.name);
  } else {
    formData.append(option.filename, option.file);
  }

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    return option.onSuccess(getBody(xhr), xhr);
  };

  xhr.open(option.method, option.action, true); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {}; // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33

  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  Object.keys(headers).forEach(function (h) {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  });
  xhr.send(formData);
  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/uid.js
var now = +new Date();
var index = 0;
function uid() {
  // eslint-disable-next-line no-plusplus
  return "rc-upload-".concat(now, "-").concat(++index);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/attr-accept.js

/* harmony default export */ const attr_accept = (function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim(); // This is something like */*,*  allow all files

      if (/^\*(\/\*)?$/.test(type)) {
        return true;
      } // like .jpg, .png


      if (validType.charAt(0) === '.') {
        var lowerFileName = fileName.toLowerCase();
        var lowerType = validType.toLowerCase();
        var affixList = [lowerType];

        if (lowerType === '.jpg' || lowerType === '.jpeg') {
          affixList = ['.jpg', 'jpeg'];
        }

        return affixList.some(function (affix) {
          return lowerFileName.endsWith(affix);
        });
      } // This is something like a image/* mime type


      if (/\/\*$/.test(validType)) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      } // Full match


      if (mimeType === validType) {
        return true;
      } // Invalidate type should skip


      if (/^\w+$/.test(validType)) {
        (0,warning/* default */.ZP)(false, "Upload takes an invalidate 'accept' type '".concat(validType, "'.Skip for check."));
        return true;
      }

      return false;
    });
  }

  return true;
});
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/traverseFileTree.js
function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];

  function sequence() {
    dirReader.readEntries(function (entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList); // Check if all the file has been viewed

      var isFinished = !entryList.length;

      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }

  sequence();
}

var traverseFileTree = function traverseFileTree(files, callback, isAccepted) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  var _traverseFileTree = function _traverseFileTree(item, path) {
    // eslint-disable-next-line no-param-reassign
    item.path = path || '';

    if (item.isFile) {
      item.file(function (file) {
        if (isAccepted(file)) {
          // https://github.com/ant-design/ant-design/issues/16426
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            }); // eslint-disable-next-line no-param-reassign

            file.webkitRelativePath = item.fullPath.replace(/^\//, '');
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }

          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function (entries) {
        entries.forEach(function (entryItem) {
          _traverseFileTree(entryItem, "".concat(path).concat(item.name, "/"));
        });
      });
    }
  };

  files.forEach(function (file) {
    _traverseFileTree(file.webkitGetAsEntry());
  });
};

/* harmony default export */ const es_traverseFileTree = (traverseFileTree);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/AjaxUploader.js



















var AjaxUploader = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(AjaxUploader, _Component);

  var _super = (0,createSuper/* default */.Z)(AjaxUploader);

  function AjaxUploader() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, AjaxUploader);

    _this = _super.apply(this, arguments);
    _this.state = {
      uid: uid()
    };
    _this.reqs = {};

    _this.onChange = function (e) {
      var _this$props = _this.props,
          accept = _this$props.accept,
          directory = _this$props.directory;
      var files = e.target.files;

      var acceptedFiles = (0,toConsumableArray/* default */.Z)(files).filter(function (file) {
        return !directory || attr_accept(file, accept);
      });

      _this.uploadFiles(acceptedFiles);

      _this.reset();
    };

    _this.onClick = function (e) {
      var el = _this.fileInput;

      if (!el) {
        return;
      }

      var _this$props2 = _this.props,
          children = _this$props2.children,
          onClick = _this$props2.onClick;

      if (children && children.type === 'button') {
        var parent = el.parentNode;
        parent.focus();
        parent.querySelector('button').blur();
      }

      el.click();

      if (onClick) {
        onClick(e);
      }
    };

    _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.onClick(e);
      }
    };

    _this.onFileDrop = function (e) {
      var multiple = _this.props.multiple;
      e.preventDefault();

      if (e.type === 'dragover') {
        return;
      }

      if (_this.props.directory) {
        es_traverseFileTree(Array.prototype.slice.call(e.dataTransfer.items), _this.uploadFiles, function (_file) {
          return attr_accept(_file, _this.props.accept);
        });
      } else {
        var files = (0,toConsumableArray/* default */.Z)(e.dataTransfer.files).filter(function (file) {
          return attr_accept(file, _this.props.accept);
        });

        if (multiple === false) {
          files = files.slice(0, 1);
        }

        _this.uploadFiles(files);
      }
    };

    _this.uploadFiles = function (files) {
      var originFiles = (0,toConsumableArray/* default */.Z)(files);

      var postFiles = originFiles.map(function (file) {
        // eslint-disable-next-line no-param-reassign
        file.uid = uid();
        return _this.processFile(file, originFiles);
      }); // Batch upload files

      Promise.all(postFiles).then(function (fileList) {
        var onBatchStart = _this.props.onBatchStart;
        onBatchStart === null || onBatchStart === void 0 ? void 0 : onBatchStart(fileList.map(function (_ref) {
          var origin = _ref.origin,
              parsedFile = _ref.parsedFile;
          return {
            file: origin,
            parsedFile: parsedFile
          };
        }));
        fileList.filter(function (file) {
          return file.parsedFile !== null;
        }).forEach(function (file) {
          _this.post(file);
        });
      });
    };
    /**
     * Process file before upload. When all the file is ready, we start upload.
     */


    _this.processFile = /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(file, fileList) {
        var beforeUpload, transformedFile, action, mergedAction, data, mergedData, parsedData, parsedFile, mergedParsedFile;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                beforeUpload = _this.props.beforeUpload;
                transformedFile = file;

                if (!beforeUpload) {
                  _context.next = 14;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return beforeUpload(file, fileList);

              case 6:
                transformedFile = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                // Rejection will also trade as false
                transformedFile = false;

              case 12:
                if (!(transformedFile === false)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", {
                  origin: file,
                  parsedFile: null,
                  action: null,
                  data: null
                });

              case 14:
                // Get latest action
                action = _this.props.action;

                if (!(typeof action === 'function')) {
                  _context.next = 21;
                  break;
                }

                _context.next = 18;
                return action(file);

              case 18:
                mergedAction = _context.sent;
                _context.next = 22;
                break;

              case 21:
                mergedAction = action;

              case 22:
                // Get latest data
                data = _this.props.data;

                if (!(typeof data === 'function')) {
                  _context.next = 29;
                  break;
                }

                _context.next = 26;
                return data(file);

              case 26:
                mergedData = _context.sent;
                _context.next = 30;
                break;

              case 29:
                mergedData = data;

              case 30:
                parsedData = // string type is from legacy `transformFile`.
                // Not sure if this will work since no related test case works with it
                ((0,esm_typeof/* default */.Z)(transformedFile) === 'object' || typeof transformedFile === 'string') && transformedFile ? transformedFile : file;

                if (parsedData instanceof File) {
                  parsedFile = parsedData;
                } else {
                  parsedFile = new File([parsedData], file.name, {
                    type: file.type
                  });
                }

                mergedParsedFile = parsedFile;
                mergedParsedFile.uid = file.uid;
                return _context.abrupt("return", {
                  origin: file,
                  data: mergedData,
                  parsedFile: mergedParsedFile,
                  action: mergedAction
                });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 9]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.saveFileInput = function (node) {
      _this.fileInput = node;
    };

    return _this;
  }

  (0,createClass/* default */.Z)(AjaxUploader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.abort();
    }
  }, {
    key: "post",
    value: function post(_ref3) {
      var _this2 = this;

      var data = _ref3.data,
          origin = _ref3.origin,
          action = _ref3.action,
          parsedFile = _ref3.parsedFile;

      if (!this._isMounted) {
        return;
      }

      var _this$props3 = this.props,
          onStart = _this$props3.onStart,
          customRequest = _this$props3.customRequest,
          name = _this$props3.name,
          headers = _this$props3.headers,
          withCredentials = _this$props3.withCredentials,
          method = _this$props3.method;
      var uid = origin.uid;
      var request = customRequest || upload;
      var requestOption = {
        action: action,
        filename: name,
        data: data,
        file: parsedFile,
        headers: headers,
        withCredentials: withCredentials,
        method: method || 'post',
        onProgress: function onProgress(e) {
          var onProgress = _this2.props.onProgress;
          onProgress === null || onProgress === void 0 ? void 0 : onProgress(e, parsedFile);
        },
        onSuccess: function onSuccess(ret, xhr) {
          var onSuccess = _this2.props.onSuccess;
          onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(ret, parsedFile, xhr);
          delete _this2.reqs[uid];
        },
        onError: function onError(err, ret) {
          var onError = _this2.props.onError;
          onError === null || onError === void 0 ? void 0 : onError(err, ret, parsedFile);
          delete _this2.reqs[uid];
        }
      };
      onStart(origin);
      this.reqs[uid] = request(requestOption);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        uid: uid()
      });
    }
  }, {
    key: "abort",
    value: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file.uid ? file.uid : file;

        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort();
        }

        delete reqs[uid];
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid] && reqs[uid].abort) {
            reqs[uid].abort();
          }

          delete reqs[uid];
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props4 = this.props,
          Tag = _this$props4.component,
          prefixCls = _this$props4.prefixCls,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          id = _this$props4.id,
          style = _this$props4.style,
          multiple = _this$props4.multiple,
          accept = _this$props4.accept,
          children = _this$props4.children,
          directory = _this$props4.directory,
          openFileDialogOnClick = _this$props4.openFileDialogOnClick,
          onMouseEnter = _this$props4.onMouseEnter,
          onMouseLeave = _this$props4.onMouseLeave,
          capture = _this$props4.capture,
          otherProps = (0,objectWithoutProperties/* default */.Z)(_this$props4, ["component", "prefixCls", "className", "disabled", "id", "style", "multiple", "accept", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave", "capture"]);

      var cls = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, prefixCls, true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, className, className), _classNames)); // because input don't have directory/webkitdirectory type declaration

      var dirProps = directory ? {
        directory: 'directory',
        webkitdirectory: 'webkitdirectory'
      } : {};
      var events = disabled ? {} : {
        onClick: openFileDialogOnClick ? this.onClick : function () {},
        onKeyDown: openFileDialogOnClick ? this.onKeyDown : function () {},
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        tabIndex: '0'
      };
      return /*#__PURE__*/react.createElement(Tag, (0,esm_extends/* default */.Z)({}, events, {
        className: cls,
        role: "button",
        style: style
      }), /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({}, (0,pickAttrs/* default */.Z)(otherProps, {
        aria: true,
        data: true
      }), {
        id: id,
        type: "file",
        ref: this.saveFileInput,
        onClick: function onClick(e) {
          return e.stopPropagation();
        } // https://github.com/ant-design/ant-design/issues/19948
        ,
        key: this.state.uid,
        style: {
          display: 'none'
        },
        accept: accept
      }, dirProps, {
        multiple: multiple,
        onChange: this.onChange
      }, capture != null ? {
        capture: capture
      } : {})), children);
    }
  }]);

  return AjaxUploader;
}(react.Component);

/* harmony default export */ const es_AjaxUploader = (AjaxUploader);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/Upload.js






/* eslint react/prop-types:0 */



function empty() {}

var Upload = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(Upload, _Component);

  var _super = (0,createSuper/* default */.Z)(Upload);

  function Upload() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Upload);

    _this = _super.apply(this, arguments);

    _this.saveUploader = function (node) {
      _this.uploader = node;
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Upload, [{
    key: "abort",
    value: function abort(file) {
      this.uploader.abort(file);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(es_AjaxUploader, (0,esm_extends/* default */.Z)({}, this.props, {
        ref: this.saveUploader
      }));
    }
  }]);

  return Upload;
}(react.Component);

Upload.defaultProps = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false,
  openFileDialogOnClick: true
};
/* harmony default export */ const es_Upload = (Upload);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/index.js

/* harmony default export */ const es = (es_Upload);

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

/***/ }),

/***/ 64217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ pickAttrs)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28991);

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
/* eslint-enable max-len */

var ariaPrefix = 'aria-';
var dataPrefix = 'data-';

function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */


function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;

  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({}, ariaOnly);
  }

  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if ( // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) || // Data
    mergedConfig.data && match(key, dataPrefix) || // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

/***/ }),

/***/ 33275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ index_module)
});

;// CONCATENATED MODULE: ./node_modules/react-easy-crop/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/normalize-wheel/index.js
var normalize_wheel = __webpack_require__(52796);
var normalize_wheel_default = /*#__PURE__*/__webpack_require__.n(normalize_wheel);
;// CONCATENATED MODULE: ./node_modules/react-easy-crop/index.module.js




/**
 * Compute the dimension of the crop area based on media size,
 * aspect ratio and optionally rotation
 */

function getCropSize(mediaWidth, mediaHeight, containerWidth, containerHeight, aspect, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaWidth, mediaHeight, rotation),
      width = _a.width,
      height = _a.height;

  var fittingWidth = Math.min(width, containerWidth);
  var fittingHeight = Math.min(height, containerHeight);

  if (fittingWidth > fittingHeight * aspect) {
    return {
      width: fittingHeight * aspect,
      height: fittingHeight
    };
  }

  return {
    width: fittingWidth,
    height: fittingWidth / aspect
  };
}
/**
 * Ensure a new media position stays in the crop area.
 */

function restrictPosition(position, mediaSize, cropSize, zoom, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaSize.width, mediaSize.height, rotation),
      width = _a.width,
      height = _a.height;

  return {
    x: restrictPositionCoord(position.x, width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, height, cropSize.height, zoom)
  };
}

function restrictPositionCoord(position, mediaSize, cropSize, zoom) {
  var maxPosition = mediaSize * zoom / 2 - cropSize / 2;
  return Math.min(maxPosition, Math.max(position, -maxPosition));
}

function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getRotationBetweenPoints(pointA, pointB) {
  return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
}
/**
 * Compute the output cropped area of the media in percentages and pixels.
 * x/y are the top-left coordinates on the src media
 */

function computeCroppedArea(crop, mediaSize, cropSize, aspect, zoom, rotation, restrictPosition) {
  if (rotation === void 0) {
    rotation = 0;
  }

  if (restrictPosition === void 0) {
    restrictPosition = true;
  } // if the media is rotated by the user, we cannot limit the position anymore
  // as it might need to be negative.


  var limitAreaFn = restrictPosition && rotation === 0 ? limitArea : noOp;
  var croppedAreaPercentages = {
    x: limitAreaFn(100, ((mediaSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / mediaSize.width * 100),
    y: limitAreaFn(100, ((mediaSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / mediaSize.height * 100),
    width: limitAreaFn(100, cropSize.width / mediaSize.width * 100 / zoom),
    height: limitAreaFn(100, cropSize.height / mediaSize.height * 100 / zoom)
  }; // we compute the pixels size naively

  var widthInPixels = Math.round(limitAreaFn(mediaSize.naturalWidth, croppedAreaPercentages.width * mediaSize.naturalWidth / 100));
  var heightInPixels = Math.round(limitAreaFn(mediaSize.naturalHeight, croppedAreaPercentages.height * mediaSize.naturalHeight / 100));
  var isImgWiderThanHigh = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect; // then we ensure the width and height exactly match the aspect (to avoid rounding approximations)
  // if the media is wider than high, when zoom is 0, the crop height will be equals to iamge height
  // thus we want to compute the width from the height and aspect for accuracy.
  // Otherwise, we compute the height from width and aspect.

  var sizePixels = isImgWiderThanHigh ? {
    width: Math.round(heightInPixels * aspect),
    height: heightInPixels
  } : {
    width: widthInPixels,
    height: Math.round(widthInPixels / aspect)
  };

  var croppedAreaPixels = __assign(__assign({}, sizePixels), {
    x: Math.round(limitAreaFn(mediaSize.naturalWidth - sizePixels.width, croppedAreaPercentages.x * mediaSize.naturalWidth / 100)),
    y: Math.round(limitAreaFn(mediaSize.naturalHeight - sizePixels.height, croppedAreaPercentages.y * mediaSize.naturalHeight / 100))
  });

  return {
    croppedAreaPercentages: croppedAreaPercentages,
    croppedAreaPixels: croppedAreaPixels
  };
}
/**
 * Ensure the returned value is between 0 and max
 */

function limitArea(max, value) {
  return Math.min(max, Math.max(0, value));
}

function noOp(_max, value) {
  return value;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;

  if (cropSize) {
    var isHeightMaxSize_1 = cropSize.height > cropSize.width;
    return isHeightMaxSize_1 ? cropSize.height / mediaZoom / croppedAreaPixels.height : cropSize.width / mediaZoom / croppedAreaPixels.width;
  }

  var aspect = croppedAreaPixels.width / croppedAreaPixels.height;
  var isHeightMaxSize = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect;
  return isHeightMaxSize ? mediaSize.naturalHeight / croppedAreaPixels.height : mediaSize.naturalWidth / croppedAreaPixels.width;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getInitialCropFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;
  var zoom = getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize);
  var cropZoom = mediaZoom * zoom;
  var crop = {
    x: ((mediaSize.naturalWidth - croppedAreaPixels.width) / 2 - croppedAreaPixels.x) * cropZoom,
    y: ((mediaSize.naturalHeight - croppedAreaPixels.height) / 2 - croppedAreaPixels.y) * cropZoom
  };
  return {
    crop: crop,
    zoom: zoom
  };
}
/**
 * Return the point that is the center of point a and b
 */

function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
/**
 *
 * Returns an x,y point once rotated around xMid,yMid
 */

function rotateAroundMidPoint(x, y, xMid, yMid, degrees) {
  var cos = Math.cos;
  var sin = Math.sin;
  var radian = degrees * Math.PI / 180; // Convert to radians
  // Subtract midpoints, so that midpoint is translated to origin
  // and add it in the end again

  var xr = (x - xMid) * cos(radian) - (y - yMid) * sin(radian) + xMid;
  var yr = (x - xMid) * sin(radian) + (y - yMid) * cos(radian) + yMid;
  return [xr, yr];
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */

function translateSize(width, height, rotation) {
  var centerX = width / 2;
  var centerY = height / 2;
  var outerBounds = [rotateAroundMidPoint(0, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, height, centerX, centerY, rotation), rotateAroundMidPoint(0, height, centerX, centerY, rotation)];
  var minX = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var maxX = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var minY = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  var maxY = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  return {
    width: maxX - minX,
    height: maxY - minY
  };
}
/**
 * Combine multiple class names into a single string.
 */

function classNames() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return args.filter(function (value) {
    if (typeof value === 'string' && value.length > 0) {
      return true;
    }

    return false;
  }).join(' ').trim();
}

var css_248z = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n";

var MIN_ZOOM = 1;
var MAX_ZOOM = 3;

var Cropper =
/** @class */
function (_super) {
  __extends(Cropper, _super);

  function Cropper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.imageRef = null;
    _this.videoRef = null;
    _this.containerRef = null;
    _this.styleRef = null;
    _this.containerRect = null;
    _this.mediaSize = {
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0
    };
    _this.dragStartPosition = {
      x: 0,
      y: 0
    };
    _this.dragStartCrop = {
      x: 0,
      y: 0
    };
    _this.lastPinchDistance = 0;
    _this.lastPinchRotation = 0;
    _this.rafDragTimeout = null;
    _this.rafPinchTimeout = null;
    _this.wheelTimer = null;
    _this.state = {
      cropSize: null,
      hasWheelJustStarted: false
    }; // this is to prevent Safari on iOS >= 10 to zoom the page

    _this.preventZoomSafari = function (e) {
      return e.preventDefault();
    };

    _this.cleanEvents = function () {
      document.removeEventListener('mousemove', _this.onMouseMove);
      document.removeEventListener('mouseup', _this.onDragStopped);
      document.removeEventListener('touchmove', _this.onTouchMove);
      document.removeEventListener('touchend', _this.onDragStopped);
    };

    _this.clearScrollEvent = function () {
      if (_this.containerRef) _this.containerRef.removeEventListener('wheel', _this.onWheel);

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }
    };

    _this.onMediaLoad = function () {
      _this.computeSizes();

      _this.emitCropData();

      _this.setInitialCrop();

      if (_this.props.onMediaLoaded) {
        _this.props.onMediaLoaded(_this.mediaSize);
      }
    };

    _this.setInitialCrop = function () {
      var _a = _this.props,
          initialCroppedAreaPixels = _a.initialCroppedAreaPixels,
          cropSize = _a.cropSize;

      if (!initialCroppedAreaPixels) {
        return;
      }

      var _b = getInitialCropFromCroppedAreaPixels(initialCroppedAreaPixels, _this.mediaSize, cropSize),
          crop = _b.crop,
          zoom = _b.zoom;

      _this.props.onCropChange(crop);

      _this.props.onZoomChange && _this.props.onZoomChange(zoom);
    };

    _this.computeSizes = function () {
      var _a, _b, _c, _d, _e, _f;

      var mediaRef = _this.imageRef || _this.videoRef;

      if (mediaRef && _this.containerRef) {
        _this.containerRect = _this.containerRef.getBoundingClientRect();
        _this.mediaSize = {
          width: mediaRef.offsetWidth,
          height: mediaRef.offsetHeight,
          naturalWidth: ((_a = _this.imageRef) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = _this.videoRef) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0,
          naturalHeight: ((_c = _this.imageRef) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = _this.videoRef) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0
        };
        var cropSize = _this.props.cropSize ? _this.props.cropSize : getCropSize(mediaRef.offsetWidth, mediaRef.offsetHeight, _this.containerRect.width, _this.containerRect.height, _this.props.aspect, _this.props.rotation);

        if (((_e = _this.state.cropSize) === null || _e === void 0 ? void 0 : _e.height) !== cropSize.height || ((_f = _this.state.cropSize) === null || _f === void 0 ? void 0 : _f.width) !== cropSize.width) {
          _this.props.onCropSizeChange && _this.props.onCropSizeChange(cropSize);
        }

        _this.setState({
          cropSize: cropSize
        }, _this.recomputeCropPosition);
      }
    };

    _this.onMouseDown = function (e) {
      e.preventDefault();
      document.addEventListener('mousemove', _this.onMouseMove);
      document.addEventListener('mouseup', _this.onDragStopped);

      _this.onDragStart(Cropper.getMousePoint(e));
    };

    _this.onMouseMove = function (e) {
      return _this.onDrag(Cropper.getMousePoint(e));
    };

    _this.onTouchStart = function (e) {
      e.preventDefault();
      document.addEventListener('touchmove', _this.onTouchMove, {
        passive: false
      }); // iOS 11 now defaults to passive: true

      document.addEventListener('touchend', _this.onDragStopped);

      if (e.touches.length === 2) {
        _this.onPinchStart(e);
      } else if (e.touches.length === 1) {
        _this.onDragStart(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onTouchMove = function (e) {
      // Prevent whole page from scrolling on iOS.
      e.preventDefault();

      if (e.touches.length === 2) {
        _this.onPinchMove(e);
      } else if (e.touches.length === 1) {
        _this.onDrag(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onDragStart = function (_a) {
      var _b, _c;

      var x = _a.x,
          y = _a.y;
      _this.dragStartPosition = {
        x: x,
        y: y
      };
      _this.dragStartCrop = __assign({}, _this.props.crop);
      (_c = (_b = _this.props).onInteractionStart) === null || _c === void 0 ? void 0 : _c.call(_b);
    };

    _this.onDrag = function (_a) {
      var x = _a.x,
          y = _a.y;
      if (_this.rafDragTimeout) window.cancelAnimationFrame(_this.rafDragTimeout);
      _this.rafDragTimeout = window.requestAnimationFrame(function () {
        if (!_this.state.cropSize) return;
        if (x === undefined || y === undefined) return;
        var offsetX = x - _this.dragStartPosition.x;
        var offsetY = y - _this.dragStartPosition.y;
        var requestedPosition = {
          x: _this.dragStartCrop.x + offsetX,
          y: _this.dragStartCrop.y + offsetY
        };
        var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : requestedPosition;

        _this.props.onCropChange(newPosition);
      });
    };

    _this.onDragStopped = function () {
      var _a, _b;

      _this.cleanEvents();

      _this.emitCropData();

      (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
    };

    _this.onWheel = function (e) {
      e.preventDefault();
      var point = Cropper.getMousePoint(e);
      var pixelY = normalize_wheel_default()(e).pixelY;
      var newZoom = _this.props.zoom - pixelY * _this.props.zoomSpeed / 200;

      _this.setNewZoom(newZoom, point);

      if (!_this.state.hasWheelJustStarted) {
        _this.setState({
          hasWheelJustStarted: true
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }

      _this.wheelTimer = window.setTimeout(function () {
        return _this.setState({
          hasWheelJustStarted: false
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }, 250);
    };

    _this.getPointOnContainer = function (_a) {
      var x = _a.x,
          y = _a.y;

      if (!_this.containerRect) {
        throw new Error('The Cropper is not mounted');
      }

      return {
        x: _this.containerRect.width / 2 - (x - _this.containerRect.left),
        y: _this.containerRect.height / 2 - (y - _this.containerRect.top)
      };
    };

    _this.getPointOnMedia = function (_a) {
      var x = _a.x,
          y = _a.y;
      var _b = _this.props,
          crop = _b.crop,
          zoom = _b.zoom;
      return {
        x: (x + crop.x) / zoom,
        y: (y + crop.y) / zoom
      };
    };

    _this.setNewZoom = function (zoom, point) {
      if (!_this.state.cropSize || !_this.props.onZoomChange) return;

      var zoomPoint = _this.getPointOnContainer(point);

      var zoomTarget = _this.getPointOnMedia(zoomPoint);

      var newZoom = Math.min(_this.props.maxZoom, Math.max(zoom, _this.props.minZoom));
      var requestedPosition = {
        x: zoomTarget.x * newZoom - zoomPoint.x,
        y: zoomTarget.y * newZoom - zoomPoint.y
      };
      var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, newZoom, _this.props.rotation) : requestedPosition;

      _this.props.onCropChange(newPosition);

      _this.props.onZoomChange(newZoom);
    };

    _this.getCropData = function () {
      if (!_this.state.cropSize) {
        return null;
      } // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ricardo-ch/react-easy-crop/issues/6)


      var restrictedPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;
      return computeCroppedArea(restrictedPosition, _this.mediaSize, _this.state.cropSize, _this.getAspect(), _this.props.zoom, _this.props.rotation, _this.props.restrictPosition);
    };

    _this.emitCropData = function () {
      var cropData = _this.getCropData();

      if (!cropData) return;
      var croppedAreaPercentages = cropData.croppedAreaPercentages,
          croppedAreaPixels = cropData.croppedAreaPixels;

      if (_this.props.onCropComplete) {
        _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels);
      }

      if (_this.props.onCropAreaChange) {
        _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
      }
    };

    _this.emitCropAreaChange = function () {
      var cropData = _this.getCropData();

      if (!cropData) return;
      var croppedAreaPercentages = cropData.croppedAreaPercentages,
          croppedAreaPixels = cropData.croppedAreaPixels;

      if (_this.props.onCropAreaChange) {
        _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
      }
    };

    _this.recomputeCropPosition = function () {
      if (!_this.state.cropSize) return;
      var newPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;

      _this.props.onCropChange(newPosition);

      _this.emitCropData();
    };

    return _this;
  }

  Cropper.prototype.componentDidMount = function () {
    window.addEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.props.zoomWithScroll && this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      });
      this.containerRef.addEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.addEventListener('gesturechange', this.preventZoomSafari);
    }

    if (!this.props.disableAutomaticStylesInjection) {
      this.styleRef = document.createElement('style');
      this.styleRef.setAttribute('type', 'text/css');
      this.styleRef.innerHTML = css_248z;
      document.head.appendChild(this.styleRef);
    } // when rendered via SSR, the image can already be loaded and its onLoad callback will never be called


    if (this.imageRef && this.imageRef.complete) {
      this.onMediaLoad();
    }
  };

  Cropper.prototype.componentWillUnmount = function () {
    var _a;

    window.removeEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.containerRef.removeEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.removeEventListener('gesturechange', this.preventZoomSafari);
    }

    if (this.styleRef) {
      (_a = this.styleRef.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.styleRef);
    }

    this.cleanEvents();
    this.props.zoomWithScroll && this.clearScrollEvent();
  };

  Cropper.prototype.componentDidUpdate = function (prevProps) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;

    if (prevProps.rotation !== this.props.rotation) {
      this.computeSizes();
      this.recomputeCropPosition();
    } else if (prevProps.aspect !== this.props.aspect) {
      this.computeSizes();
    } else if (prevProps.zoom !== this.props.zoom) {
      this.recomputeCropPosition();
    } else if (((_a = prevProps.cropSize) === null || _a === void 0 ? void 0 : _a.height) !== ((_b = this.props.cropSize) === null || _b === void 0 ? void 0 : _b.height) || ((_c = prevProps.cropSize) === null || _c === void 0 ? void 0 : _c.width) !== ((_d = this.props.cropSize) === null || _d === void 0 ? void 0 : _d.width)) {
      this.computeSizes();
    } else if (((_e = prevProps.crop) === null || _e === void 0 ? void 0 : _e.x) !== ((_f = this.props.crop) === null || _f === void 0 ? void 0 : _f.x) || ((_g = prevProps.crop) === null || _g === void 0 ? void 0 : _g.y) !== ((_h = this.props.crop) === null || _h === void 0 ? void 0 : _h.y)) {
      this.emitCropAreaChange();
    }

    if (prevProps.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
      this.props.zoomWithScroll ? this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      }) : this.clearScrollEvent();
    }

    if (prevProps.video !== this.props.video) {
      (_j = this.videoRef) === null || _j === void 0 ? void 0 : _j.load();
    }
  };

  Cropper.prototype.getAspect = function () {
    var _a = this.props,
        cropSize = _a.cropSize,
        aspect = _a.aspect;

    if (cropSize) {
      return cropSize.width / cropSize.height;
    }

    return aspect;
  };

  Cropper.prototype.onPinchStart = function (e) {
    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB);
    this.lastPinchRotation = getRotationBetweenPoints(pointA, pointB);
    this.onDragStart(getCenter(pointA, pointB));
  };

  Cropper.prototype.onPinchMove = function (e) {
    var _this = this;

    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    var center = getCenter(pointA, pointB);
    this.onDrag(center);
    if (this.rafPinchTimeout) window.cancelAnimationFrame(this.rafPinchTimeout);
    this.rafPinchTimeout = window.requestAnimationFrame(function () {
      var distance = getDistanceBetweenPoints(pointA, pointB);
      var newZoom = _this.props.zoom * (distance / _this.lastPinchDistance);

      _this.setNewZoom(newZoom, center);

      _this.lastPinchDistance = distance;
      var rotation = getRotationBetweenPoints(pointA, pointB);
      var newRotation = _this.props.rotation + (rotation - _this.lastPinchRotation);
      _this.props.onRotationChange && _this.props.onRotationChange(newRotation);
      _this.lastPinchRotation = rotation;
    });
  };

  Cropper.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        image = _a.image,
        video = _a.video,
        mediaProps = _a.mediaProps,
        transform = _a.transform,
        _b = _a.crop,
        x = _b.x,
        y = _b.y,
        rotation = _a.rotation,
        zoom = _a.zoom,
        cropShape = _a.cropShape,
        showGrid = _a.showGrid,
        _c = _a.style,
        containerStyle = _c.containerStyle,
        cropAreaStyle = _c.cropAreaStyle,
        mediaStyle = _c.mediaStyle,
        _d = _a.classes,
        containerClassName = _d.containerClassName,
        cropAreaClassName = _d.cropAreaClassName,
        mediaClassName = _d.mediaClassName,
        objectFit = _a.objectFit;
    return /*#__PURE__*/react.createElement("div", {
      onMouseDown: this.onMouseDown,
      onTouchStart: this.onTouchStart,
      ref: function ref(el) {
        return _this.containerRef = el;
      },
      "data-testid": "container",
      style: containerStyle,
      className: classNames('reactEasyCrop_Container', containerClassName)
    }, image ? /*#__PURE__*/react.createElement("img", __assign({
      alt: "",
      className: classNames('reactEasyCrop_Image', objectFit === 'contain' && 'reactEasyCrop_Contain', objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal', objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical', mediaClassName)
    }, mediaProps, {
      src: image,
      ref: function ref(el) {
        return _this.imageRef = el;
      },
      style: __assign(__assign({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      onLoad: this.onMediaLoad
    })) : video && /*#__PURE__*/react.createElement("video", __assign({
      autoPlay: true,
      loop: true,
      muted: true,
      className: classNames('reactEasyCrop_Video', objectFit === 'contain' && 'reactEasyCrop_Contain', objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal', objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical', mediaClassName)
    }, mediaProps, {
      ref: function ref(el) {
        return _this.videoRef = el;
      },
      onLoadedMetadata: this.onMediaLoad,
      style: __assign(__assign({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      controls: false
    }), (Array.isArray(video) ? video : [{
      src: video
    }]).map(function (item) {
      return /*#__PURE__*/react.createElement("source", __assign({
        key: item.src
      }, item));
    })), this.state.cropSize && /*#__PURE__*/react.createElement("div", {
      style: __assign(__assign({}, cropAreaStyle), {
        width: this.state.cropSize.width,
        height: this.state.cropSize.height
      }),
      "data-testid": "cropper",
      className: classNames('reactEasyCrop_CropArea', cropShape === 'round' && 'reactEasyCrop_CropAreaRound', showGrid && 'reactEasyCrop_CropAreaGrid', cropAreaClassName)
    }));
  };

  Cropper.defaultProps = {
    zoom: 1,
    rotation: 0,
    aspect: 4 / 3,
    maxZoom: MAX_ZOOM,
    minZoom: MIN_ZOOM,
    cropShape: 'rect',
    objectFit: 'contain',
    showGrid: true,
    style: {},
    classes: {},
    mediaProps: {},
    zoomSpeed: 1,
    restrictPosition: true,
    zoomWithScroll: true
  };

  Cropper.getMousePoint = function (e) {
    return {
      x: Number(e.clientX),
      y: Number(e.clientY)
    };
  };

  Cropper.getTouchPoint = function (touch) {
    return {
      x: Number(touch.clientX),
      y: Number(touch.clientY)
    };
  };

  return Cropper;
}(react.Component);

/* harmony default export */ const index_module = (Cropper);
//# sourceMappingURL=index.module.js.map


/***/ })

}]);