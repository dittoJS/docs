webpackHotUpdate("static/development/pages/index.js",{

/***/ "./client/layout/header/header.js":
/*!****************************************!*\
  !*** ./client/layout/header/header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bulma */ "./node_modules/bulma/bulma.sass");
/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bulma__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.scss */ "./client/layout/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_layout_common_markdown_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../client/layout/common/markdown.scss */ "./client/layout/common/markdown.scss");
/* harmony import */ var _client_layout_common_markdown_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_client_layout_common_markdown_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yangxiaofu/work/opensource/docs/ditto-docs/client/layout/header/header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isActive: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleNavActiveClass", function (classState) {
      if (classState) {
        _this.setState({
          isActive: ''
        });
      } else {
        _this.setState({
          isActive: 'is-active'
        });
      }
    });

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar is-black",
        role: "navigation",
        "aria-label": "main navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-item",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          maxHeight: "none"
        },
        src: "/static/img/ditto-logo.png",
        width: "72",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          _this2.toggleNavActiveClass(_this2.state.isActive);
        },
        className: 'navbar-burger burger ' + this.state.isActive,
        "data-target": "navMenuDocumentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          _this2.toggleNavActiveClass(_this2.state.isActive);
        },
        className: "navbar-menu " + this.state.isActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/ditt/home",
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "\u9996\u9875"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/doc/304bca36-3be9-4c89-955f-a7ac8693d470",
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\u6587\u6863"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/dittoJS/ditto",
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Github"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "www.yangxiaofu.com",
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "\u535A\u5BA2")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/*
<Link href='/'><a className="navbar-item">首页</a></Link>
<Link href='/post?id=e512e8fdd5418f746eca'><a className="navbar-item">Lab</a></Link>
*/




/***/ })

})
//# sourceMappingURL=index.js.0ecddce4b4efa82ae3c6.hot-update.js.map