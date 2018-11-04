webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_layout_header_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/layout/header/header.js */ "./client/layout/header/header.js");
/* harmony import */ var _client_layout_footer_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/layout/footer/footer.js */ "./client/layout/footer/footer.js");
/* harmony import */ var _client_components_NotesList_NotesList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/components/NotesList/NotesList.js */ "./client/components/NotesList/NotesList.js");
/* harmony import */ var _client_components_aside_aside_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/components/aside/aside.js */ "./client/components/aside/aside.js");
/* harmony import */ var _client_components_iphone6_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/components/iphone6/index */ "./client/components/iphone6/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _client_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../client/utils.js */ "./client/utils.js");

var _jsxFileName = "/Users/yangxiaofu/work/opensource/docs/ditto-docs/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "page-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_layout_header_header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "banner introduction",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, " DittoJs \u662F\u4E00\u4E2A\u5F00\u653E\u5F0F\u7684\u8DE8\u5E73\u53F0\u3001 \u6846\u67B6\u7F16\u8BD1\u8F6C\u6362\u5DE5\u5177 "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, " \u7F16\u5199\u4E00\u6B21\uFF0C \u7F16\u8BD1\u6210\u4E0D\u540C\u5E73\u53F0\u3001 \u4E0D\u540C\u6846\u67B6\u7684\u4EE3\u7801 "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/doc/304bca36-3be9-4c89-955f-a7ac8693d470",
        class: "button is-info is-outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "\u5F00\u59CB\u4F7F\u7528 "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        class: "button is-info is-outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, " Github "), " "), " "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "banner showcase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "level",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "level-item has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, " \u7F16\u7801\u89C4\u8303 "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, " \u6307\u4EE4\u5F0F\u8BED\u6CD5\uFF0C \u652F\u6301 jsx \u6A21\u677F "), " "), " "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "level-item has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, " \u7EC4\u4EF6\u5316 "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, " \u652F\u6301\u7EC4\u4EF6\u5316\u5F00\u53D1\uFF0C \u5C42\u6B21\u6E05\u6670\uFF0C \u4FBF\u4E8E\u590D\u7528 "), " "), " "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "level-item has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, " \u8DE8\u7AEF\u878D\u5408 "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, " \u7F16\u5199\u4E00\u5957\u4EE3\u7801\uFF0C \u751F\u6210\u4E0D\u540C\u7AEF\u3001 \u6846\u67B6\u539F\u751F\u4EE3\u7801 "), " "), " "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "level-item has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, " \u5F00\u653E\u5F0F\u6846\u67B6 "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, " \u57FA\u4E8E\u63D2\u4EF6\u7684\u7F16\u8BD1\u65B9\u5F0F\uFF0C \u5B9A\u5236\u81EA\u5DF1\u7684\u7F16\u8BD1\u89C4\u5219 "), " "), " "), " "), " "), " "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "banner support",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "columns is-gap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "title is-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, " \u5C0F\u7A0B\u5E8F "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, " \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, " \u767E\u5EA6\u5C0F\u7A0B\u5E8F "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, " \u5934\u6761\u5C0F\u7A0B\u5E8F "), " "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "title is-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, " \u524D\u7AEF\u6846\u67B6 "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, " Vue "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, " React "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, " Angular "), " "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "title is-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, " Native \u5F00\u53D1 "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, " React Native "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, " Weex "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, " Native Script "), " "), " "), " "), " "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_layout_footer_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res, resAll;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return _client_utils_js__WEBPACK_IMPORTED_MODULE_9__["Http"].get('/notes/getDoc', {
                  key: query.id
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return _client_utils_js__WEBPACK_IMPORTED_MODULE_9__["Http"].get('/notes/docsList');

              case 6:
                resAll = _context.sent;
                return _context.abrupt("return", {
                  note: res,
                  menuObj: processMenu(resAll)
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/**
<div className='silver'>
    <IphoneComponent />
</div>
 */

/**
 * process menu data
 */




function processMenu() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [{
    title: 'The Basics',
    body: obj['transform-basics'] || []
  }, {
    title: 'The Components',
    body: obj['transform-base-components'] || []
  }, {
    title: 'The Plugins',
    body: obj['transform-plugin'] || []
  }];
}
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.94a2954380bd86253195.hot-update.js.map