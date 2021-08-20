(self["webpackChunkreact_admin"] = self["webpackChunkreact_admin"] || []).push([[103],{

/***/ 79174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ detail)
});

// EXTERNAL MODULE: ./node_modules/antd/es/divider/style/index.js
var style = __webpack_require__(48736);
// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(27049);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/api/index.js + 1 modules
var api = __webpack_require__(53690);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 17 modules
var es = __webpack_require__(49226);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/style/index.js
var avatar_style = __webpack_require__(94233);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 3 modules
var avatar = __webpack_require__(51890);
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__(57663);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js
var form_style = __webpack_require__(9715);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 12 modules
var es_form = __webpack_require__(35845);
// EXTERNAL MODULE: ./node_modules/antd/es/list/style/index.js
var list_style = __webpack_require__(54421);
// EXTERNAL MODULE: ./node_modules/antd/es/list/index.js + 1 modules
var list = __webpack_require__(38272);
// EXTERNAL MODULE: ./node_modules/antd/es/comment/style/index.js
var comment_style = __webpack_require__(60663);
// EXTERNAL MODULE: ./node_modules/antd/es/comment/index.js
var comment = __webpack_require__(31990);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__(47673);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(14617);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
;// CONCATENATED MODULE: ./src/pages/juejin/detail/addComment.jsx













var _this = undefined;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var TextArea = input/* default.TextArea */.Z.TextArea;

var CommentList = function CommentList(_ref) {
  var comments = _ref.comments;
  return /*#__PURE__*/react.createElement(list/* default */.ZP, {
    dataSource: comments,
    header: "".concat(comments.length, " ").concat(comments.length > 1 ? 'replies' : 'reply'),
    itemLayout: "horizontal",
    renderItem: function renderItem(props) {
      return /*#__PURE__*/react.createElement(comment/* default */.Z, props);
    }
  });
};

var Editor = function Editor(_ref2) {
  var onChange = _ref2.onChange,
      onSubmit = _ref2.onSubmit,
      submitting = _ref2.submitting,
      value = _ref2.value;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(TextArea, {
    rows: 4,
    onChange: onChange,
    value: value
  })), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    htmlType: "submit",
    loading: submitting,
    onClick: onSubmit,
    type: "primary"
  }, "\u63D0\u4EA4")));
};

/* harmony default export */ const addComment = (function () {
  var _useState = (0,react.useState)([1111]),
      _useState2 = _slicedToArray(_useState, 2),
      comments = _useState2[0],
      setComments = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      submitting = _useState4[0],
      setSubmitting = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      show = _useState8[0],
      setShow = _useState8[1];

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state;
  }),
      img = _useSelector.img;

  console.log(111111);

  var handleSubmit = function handleSubmit() {
    console.log('this', _this);
  };

  var handleChange = function handleChange(e) {
    console.log('eee', e);
  };

  var showComment = function showComment() {
    setShow(function (show) {
      return !show;
    });
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, comments.length > 0 && /*#__PURE__*/react.createElement(CommentList, {
    comments: comments
  }), /*#__PURE__*/react.createElement("span", {
    style: {
      fontSize: '12px',
      color: '#00000073',
      cursor: 'pointer'
    },
    onClick: showComment
  }, "\u8BC4\u8BBA"), show && /*#__PURE__*/react.createElement(comment/* default */.Z, {
    avatar: /*#__PURE__*/react.createElement(avatar/* default */.C, {
      src: img,
      alt: "Han Solo"
    }),
    content: /*#__PURE__*/react.createElement(Editor, {
      onChange: handleChange,
      onSubmit: handleSubmit,
      submitting: submitting,
      value: value
    })
  }));
});
;// CONCATENATED MODULE: ./src/pages/juejin/detail/index.jsx



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function detail_slicedToArray(arr, i) { return detail_arrayWithHoles(arr) || detail_iterableToArrayLimit(arr, i) || detail_unsupportedIterableToArray(arr, i) || detail_nonIterableRest(); }

function detail_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function detail_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return detail_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return detail_arrayLikeToArray(o, minLen); }

function detail_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function detail_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function detail_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ const detail = (function () {
  console.log('父组件');

  var _useState = (0,react.useState)([]),
      _useState2 = detail_slicedToArray(_useState, 2),
      article = _useState2[0],
      setArticle = _useState2[1];

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state;
  }),
      username = _useSelector.username;

  var getArticleDetail = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,api/* getArticle */.fq)();

            case 2:
              res = _context.sent;

              if (res.code === 200) {
                setArticle(res.data);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getArticleDetail() {
      return _ref.apply(this, arguments);
    };
  }();

  var dateFormat = function dateFormat(time) {
    var now = Date.parse(new Date());
    var cnt = now - time;
    var s = Math.floor(cnt / 1000); //秒

    var m = Math.floor(s / 60); //分

    var h = Math.floor(m / 60); //时

    var d = Math.floor(h / 24); //天

    return d > 0 ? "".concat(d, "\u5929\u524D") : h > 0 ? "".concat(h, "\u5C0F\u65F6\u524D") : m > 0 ? "".concat(m, "\u5206\u949F\u524D") : "".concat(s, "\u79D2\u524D");
  };

  (0,react.useEffect)(function () {
    getArticleDetail();
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, article.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "detail",
      key: item._id
    }, /*#__PURE__*/react.createElement("div", {
      className: "detail_top"
    }, /*#__PURE__*/react.createElement("span", null, username.username), /*#__PURE__*/react.createElement("span", {
      className: "fenge"
    }), /*#__PURE__*/react.createElement("span", null, dateFormat(item.dateTime)), /*#__PURE__*/react.createElement("span", {
      className: "fenge"
    }), /*#__PURE__*/react.createElement("span", null, item.classify)), /*#__PURE__*/react.createElement("div", {
      className: "detail_content"
    }, /*#__PURE__*/react.createElement("p", {
      className: "title"
    }, item.title), /*#__PURE__*/react.createElement("p", {
      className: "content"
    }, item.article)), /*#__PURE__*/react.createElement(addComment, null), /*#__PURE__*/react.createElement(divider/* default */.Z, null));
  }));
});

/***/ }),

/***/ 46700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 42786,
	"./af.js": 42786,
	"./ar": 30867,
	"./ar-dz": 14130,
	"./ar-dz.js": 14130,
	"./ar-kw": 96135,
	"./ar-kw.js": 96135,
	"./ar-ly": 56440,
	"./ar-ly.js": 56440,
	"./ar-ma": 47702,
	"./ar-ma.js": 47702,
	"./ar-sa": 16040,
	"./ar-sa.js": 16040,
	"./ar-tn": 37100,
	"./ar-tn.js": 37100,
	"./ar.js": 30867,
	"./az": 31083,
	"./az.js": 31083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 68338,
	"./bg.js": 68338,
	"./bm": 67438,
	"./bm.js": 67438,
	"./bn": 8905,
	"./bn-bd": 76225,
	"./bn-bd.js": 76225,
	"./bn.js": 8905,
	"./bo": 11560,
	"./bo.js": 11560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 80622,
	"./bs.js": 80622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 50877,
	"./cv.js": 50877,
	"./cy": 47373,
	"./cy.js": 47373,
	"./da": 24780,
	"./da.js": 24780,
	"./de": 59740,
	"./de-at": 60217,
	"./de-at.js": 60217,
	"./de-ch": 60894,
	"./de-ch.js": 60894,
	"./de.js": 59740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 50837,
	"./el.js": 50837,
	"./en-au": 78348,
	"./en-au.js": 78348,
	"./en-ca": 77925,
	"./en-ca.js": 77925,
	"./en-gb": 22243,
	"./en-gb.js": 22243,
	"./en-ie": 46436,
	"./en-ie.js": 46436,
	"./en-il": 47207,
	"./en-il.js": 47207,
	"./en-in": 44175,
	"./en-in.js": 44175,
	"./en-nz": 76319,
	"./en-nz.js": 76319,
	"./en-sg": 31662,
	"./en-sg.js": 31662,
	"./eo": 92915,
	"./eo.js": 92915,
	"./es": 55655,
	"./es-do": 55251,
	"./es-do.js": 55251,
	"./es-mx": 96112,
	"./es-mx.js": 96112,
	"./es-us": 71146,
	"./es-us.js": 71146,
	"./es.js": 55655,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 77763,
	"./eu.js": 77763,
	"./fa": 76959,
	"./fa.js": 76959,
	"./fi": 11897,
	"./fi.js": 11897,
	"./fil": 42549,
	"./fil.js": 42549,
	"./fo": 94694,
	"./fo.js": 94694,
	"./fr": 94470,
	"./fr-ca": 63049,
	"./fr-ca.js": 63049,
	"./fr-ch": 52330,
	"./fr-ch.js": 52330,
	"./fr.js": 94470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 29295,
	"./ga.js": 29295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 38794,
	"./gl.js": 38794,
	"./gom-deva": 27884,
	"./gom-deva.js": 27884,
	"./gom-latn": 23168,
	"./gom-latn.js": 23168,
	"./gu": 95349,
	"./gu.js": 95349,
	"./he": 24206,
	"./he.js": 24206,
	"./hi": 30094,
	"./hi.js": 30094,
	"./hr": 30316,
	"./hr.js": 30316,
	"./hu": 22138,
	"./hu.js": 22138,
	"./hy-am": 11423,
	"./hy-am.js": 11423,
	"./id": 29218,
	"./id.js": 29218,
	"./is": 90135,
	"./is.js": 90135,
	"./it": 90626,
	"./it-ch": 63120,
	"./it-ch.js": 63120,
	"./it.js": 90626,
	"./ja": 39183,
	"./ja.js": 39183,
	"./jv": 24286,
	"./jv.js": 24286,
	"./ka": 12105,
	"./ka.js": 12105,
	"./kk": 47772,
	"./kk.js": 47772,
	"./km": 37766,
	"./km.js": 37766,
	"./kn": 79282,
	"./kn.js": 79282,
	"./ko": 33730,
	"./ko.js": 33730,
	"./ku": 1408,
	"./ku.js": 1408,
	"./ky": 33291,
	"./ky.js": 33291,
	"./lb": 36841,
	"./lb.js": 36841,
	"./lo": 55466,
	"./lo.js": 55466,
	"./lt": 57010,
	"./lt.js": 57010,
	"./lv": 37595,
	"./lv.js": 37595,
	"./me": 39861,
	"./me.js": 39861,
	"./mi": 35493,
	"./mi.js": 35493,
	"./mk": 95966,
	"./mk.js": 95966,
	"./ml": 87341,
	"./ml.js": 87341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 10370,
	"./mr.js": 10370,
	"./ms": 9847,
	"./ms-my": 41237,
	"./ms-my.js": 41237,
	"./ms.js": 9847,
	"./mt": 72126,
	"./mt.js": 72126,
	"./my": 56165,
	"./my.js": 56165,
	"./nb": 64924,
	"./nb.js": 64924,
	"./ne": 16744,
	"./ne.js": 16744,
	"./nl": 93901,
	"./nl-be": 59814,
	"./nl-be.js": 59814,
	"./nl.js": 93901,
	"./nn": 83877,
	"./nn.js": 83877,
	"./oc-lnc": 92135,
	"./oc-lnc.js": 92135,
	"./pa-in": 15858,
	"./pa-in.js": 15858,
	"./pl": 64495,
	"./pl.js": 64495,
	"./pt": 89520,
	"./pt-br": 57971,
	"./pt-br.js": 57971,
	"./pt.js": 89520,
	"./ro": 96459,
	"./ro.js": 96459,
	"./ru": 21793,
	"./ru.js": 21793,
	"./sd": 40950,
	"./sd.js": 40950,
	"./se": 10490,
	"./se.js": 10490,
	"./si": 90124,
	"./si.js": 90124,
	"./sk": 64249,
	"./sk.js": 64249,
	"./sl": 14985,
	"./sl.js": 14985,
	"./sq": 51104,
	"./sq.js": 51104,
	"./sr": 49131,
	"./sr-cyrl": 79915,
	"./sr-cyrl.js": 79915,
	"./sr.js": 49131,
	"./ss": 85893,
	"./ss.js": 85893,
	"./sv": 98760,
	"./sv.js": 98760,
	"./sw": 91172,
	"./sw.js": 91172,
	"./ta": 27333,
	"./ta.js": 27333,
	"./te": 23110,
	"./te.js": 23110,
	"./tet": 52095,
	"./tet.js": 52095,
	"./tg": 27321,
	"./tg.js": 27321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 19005,
	"./tk.js": 19005,
	"./tl-ph": 75768,
	"./tl-ph.js": 75768,
	"./tlh": 89444,
	"./tlh.js": 89444,
	"./tr": 72397,
	"./tr.js": 72397,
	"./tzl": 28254,
	"./tzl.js": 28254,
	"./tzm": 51106,
	"./tzm-latn": 30699,
	"./tzm-latn.js": 30699,
	"./tzm.js": 51106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 67691,
	"./uk.js": 67691,
	"./ur": 13795,
	"./ur.js": 13795,
	"./uz": 6791,
	"./uz-latn": 60588,
	"./uz-latn.js": 60588,
	"./uz.js": 6791,
	"./vi": 65666,
	"./vi.js": 65666,
	"./x-pseudo": 14378,
	"./x-pseudo.js": 14378,
	"./yo": 75805,
	"./yo.js": 75805,
	"./zh-cn": 83839,
	"./zh-cn.js": 83839,
	"./zh-hk": 55726,
	"./zh-hk.js": 55726,
	"./zh-mo": 99807,
	"./zh-mo.js": 99807,
	"./zh-tw": 74152,
	"./zh-tw.js": 74152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

}]);