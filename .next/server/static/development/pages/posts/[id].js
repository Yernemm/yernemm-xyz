module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/analytics.js":
/*!*********************************!*\
  !*** ./components/analytics.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Analytics; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/analytics */ "./scripts/analytics.js");
var _jsxFileName = "C:\\Users\\barte\\OneDrive\\Documents\\GitHub\\yernemm-xyz\\components\\analytics.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Analytics extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      Object(_scripts_analytics__WEBPACK_IMPORTED_MODULE_1__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_scripts_analytics__WEBPACK_IMPORTED_MODULE_1__["logPageView"])();
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.children);
  }

}

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\barte\\OneDrive\\Documents\\GitHub\\yernemm-xyz\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Copyright \xA9 2016 - 2020, Yernemm"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\barte\\OneDrive\\Documents\\GitHub\\yernemm-xyz\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

let logoStyle = {
  maxHeight: '40px',
  float: 'right'
};

const Header = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Yernemm", props.title ? " - " + props.title : ""), __jsx("link", {
  rel: "shortcut icon",
  href: "/favicon.ico",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Raleway&display=swap",
  rel: "stylesheet",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("script", {
  src: "https://kit.fontawesome.com/586954516c.js",
  crossOrigin: "anonymous",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "363504492",
  __self: undefined
}, "img.jsx-363504492{max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmFydGVcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxceWVybmVtbS14eXpcXGNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmlCLEFBR29DLGVBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYmFydGVcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxceWVybmVtbS14eXpcXGNvbXBvbmVudHNcXGhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5sZXQgbG9nb1N0eWxlID0ge1xyXG4gICAgbWF4SGVpZ2h0Oic0MHB4JyxcclxuICAgIGZsb2F0OidyaWdodCdcclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gcHJvcHMgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlllcm5lbW17cHJvcHMudGl0bGUgPyBcIiAtIFwiICsgcHJvcHMudGl0bGUgOiBcIlwifTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS81ODY5NTQ1MTZjLmpzXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbjxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQHllcm5lbW1cIiAvPlxyXG48bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9eydZZXJuZW1tJyArIChwcm9wcy50aXRsZSA/IFwiIC0gXCIgKyBwcm9wcy50aXRsZSA6IFwiXCIpfSAvPlxyXG48bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDcmVhdGluZyB3ZWIgdG9vbHMgc2luY2UgMjAxNiBqdXN0IGZvciBmdW4uXCIgLz5cclxuPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiL3N0YXRpYy9tZWRpYS9pbWFnZS9zbm93YmFsbEZ1bGwucG5nXCIgLz5cclxuXHJcbjxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsnWWVybmVtbScgKyAocHJvcHMudGl0bGUgPyBcIiAtIFwiICsgcHJvcHMudGl0bGUgOiBcIlwiKX0gLz5cclxuPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG48bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9zdGF0aWMvbWVkaWEvaW1hZ2Uvc25vd2JhbGxGdWxsLnBuZ1wiIC8+XHJcbjxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ3JlYXRpbmcgd2ViIHRvb2xzIHNpbmNlIDIwMTYganVzdCBmb3IgZnVuLlwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBoaWRkZW5Db21tZW50fX0gLz5cclxuPGgxPjxpbWcgc3JjPVwiL3N0YXRpYy9tZWRpYS9pbWFnZS9zbm93YmFsbEFuaW0uZ2lmXCIgc3R5bGU9e2xvZ29TdHlsZX0gLz5ZZXJuZW1te3Byb3BzLnRpdGxlID8gXCIgLSBcIiArIHByb3BzLnRpdGxlIDogXCJcIn08L2gxPlxyXG4gICAgICAgIDxociAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBoaWRkZW5Db21tZW50ID0gYDwhLS1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkhpLlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4tLT5cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\barte\\\\OneDrive\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\components\\\\header.js */"), __jsx("meta", {
  name: "twitter:card",
  content: "summary",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:site",
  content: "@yernemm",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:title",
  content: 'Yernemm' + (props.title ? " - " + props.title : ""),
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:description",
  content: "Creating web tools since 2016 just for fun.",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:image",
  content: "/static/media/image/snowballFull.png",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:title",
  content: 'Yernemm' + (props.title ? " - " + props.title : ""),
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image",
  content: "/static/media/image/snowballFull.png",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:description",
  content: "Creating web tools since 2016 just for fun.",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})), __jsx("span", {
  dangerouslySetInnerHTML: {
    __html: hiddenComment
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/media/image/snowballAnim.gif",
  style: logoStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), "Yernemm", props.title ? " - " + props.title : ""), __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}));

const hiddenComment = `<!--




























Hi.















-->
`;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/page-wrapper.js":
/*!************************************!*\
  !*** ./components/page-wrapper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analytics */ "./components/analytics.js");
var _jsxFileName = "C:\\Users\\barte\\OneDrive\\Documents\\GitHub\\yernemm-xyz\\components\\page-wrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const content = {
  margin: "auto",
  maxWidth: "1200px",
  padding: "30px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  backgroundColor: "#2a2b30"
};

let Wrapper = props => __jsx(_analytics__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/static/style/wrapper.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("script", {
  src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
})), __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: props.title,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("div", {
  style: content,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, props.children)), __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\barte\\OneDrive\\Documents\\GitHub\\yernemm-xyz\\components\\sidebar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const PageLink = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1316264426",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1316264426" + " " + 'sidebarLink',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "\uD83E\uDC6A ", props.name))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1316264426",
  __self: undefined
}, ".sidebarLink.jsx-1316264426{background-color:rgba(50,50,150,0.2);margin:auto;}a.jsx-1316264426{-webkit-text-decoration:none;text-decoration:none;-webkit-transition-duration:0.2s;transition-duration:0.2s;}a.jsx-1316264426:link{color:#ccf;}a.jsx-1316264426:visited{color:#ccf;}a.jsx-1316264426:hover{color:#88f;font-size:120%;}a.jsx-1316264426:active{color:#88f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmFydGVcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxceWVybmVtbS14eXpcXGNvbXBvbmVudHNcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU1ksQUFLd0MsQUFLaEIsQUFNVixBQUtBLEFBS0EsQUFNQSxXQWZiLEFBS0EsQUFLaUIsQUFNakIsZUFMQSxXQXRCYyxZQUNkLENBSTJCLDBEQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXGJhcnRlXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcblxyXG5jb25zdCBQYWdlTGluayA9IHByb3BzID0+ICg8PlxyXG48TGluayBocmVmPXtwcm9wcy5ocmVmfT48YT5cclxuPGRpdiBjbGFzc05hbWU9J3NpZGViYXJMaW5rJz7wn6GqIHtwcm9wcy5uYW1lfVxyXG48L2Rpdj5cclxuPC9hPjwvTGluaz5cclxuPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbi5zaWRlYmFyTGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCw1MCwxNTAsMC4yKTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xyXG5hOmxpbmsge1xyXG4gIGNvbG9yOiAjY2NmO1xyXG59XHJcblxyXG4vKiB2aXNpdGVkIGxpbmsgKi9cclxuYTp2aXNpdGVkIHtcclxuICBjb2xvcjogI2NjZjtcclxufVxyXG5cclxuLyogbW91c2Ugb3ZlciBsaW5rICovXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjODhmO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG5cclxuLyogc2VsZWN0ZWQgbGluayAqL1xyXG5hOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM4OGY7XHJcbn1cclxuXHJcbmB9PC9zdHlsZT5cclxuPC8+KVxyXG5cclxuY29uc3QgTm9ybWFsTGluayA9IHByb3BzID0+IChcclxuICA8PlxyXG48YSBocmVmPXtwcm9wcy5ocmVmfT5cclxuPGRpdiBjbGFzc05hbWU9J3NpZGViYXJMaW5rJz7wn6GqIHtwcm9wcy5uYW1lfVxyXG48L2Rpdj5cclxuPC9hPlxyXG48c3R5bGUganN4PntgXHJcblxyXG5cclxuLnNpZGViYXJMaW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLDUwLDE1MCwwLjIpO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi8qIHVudmlzaXRlZCBsaW5rICovXHJcbmE6bGluayB7XHJcbiAgY29sb3I6ICNjY2Y7XHJcbn1cclxuXHJcbi8qIHZpc2l0ZWQgbGluayAqL1xyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiAjY2NmO1xyXG59XHJcblxyXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICM4OGY7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG4vKiBzZWxlY3RlZCBsaW5rICovXHJcbmE6YWN0aXZlIHtcclxuICBjb2xvcjogIzg4ZjtcclxufVxyXG5cclxuYH08L3N0eWxlPlxyXG48Lz5cclxuKVxyXG5cclxuXHJcbmNvbnN0IFNpZGViYXIgPSBwcm9wcyA9PiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyc3R5bGUnPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyc3R5bGUnPlxyXG4gICAgICAgIDxoMz5QYWdlczwvaDM+XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgIDxQYWdlTGluayBocmVmPScvJyBuYW1lPSdIb21lJyAvPlxyXG4gICAgICAgICAgIDxQYWdlTGluayBocmVmPScvcHJvamVjdHMnIG5hbWU9J1Byb2plY3RzJyAvPlxyXG4gICAgICAgICAgIDxQYWdlTGluayBocmVmPScvcG9zdHMnIG5hbWU9J1Bvc3RzJyAvPlxyXG4gICAgICAgICAgIDxOb3JtYWxMaW5rIGhyZWY9Jy9ibG9nLycgbmFtZT0nQmxvZycgLz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnRzdHlsZSc+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\barte\\\\OneDrive\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\components\\\\sidebar.js */"));

const NormalLink = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("a", {
  href: props.href,
  className: "jsx-1316264426",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1316264426" + " " + 'sidebarLink',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "\uD83E\uDC6A ", props.name)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1316264426",
  __self: undefined
}, ".sidebarLink.jsx-1316264426{background-color:rgba(50,50,150,0.2);margin:auto;}a.jsx-1316264426{-webkit-text-decoration:none;text-decoration:none;-webkit-transition-duration:0.2s;transition-duration:0.2s;}a.jsx-1316264426:link{color:#ccf;}a.jsx-1316264426:visited{color:#ccf;}a.jsx-1316264426:hover{color:#88f;font-size:120%;}a.jsx-1316264426:active{color:#88f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmFydGVcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxceWVybmVtbS14eXpcXGNvbXBvbmVudHNcXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RZLEFBS3dDLEFBS2hCLEFBTVYsQUFLQSxBQUtBLEFBTUEsV0FmYixBQUtBLEFBS2lCLEFBTWpCLGVBTEEsV0F0QmMsWUFDZCxDQUkyQiwwREFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxiYXJ0ZVxcT25lRHJpdmVcXERvY3VtZW50c1xcR2l0SHViXFx5ZXJuZW1tLXh5elxcY29tcG9uZW50c1xcc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5cclxuY29uc3QgUGFnZUxpbmsgPSBwcm9wcyA9PiAoPD5cclxuPExpbmsgaHJlZj17cHJvcHMuaHJlZn0+PGE+XHJcbjxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyTGluayc+8J+hqiB7cHJvcHMubmFtZX1cclxuPC9kaXY+XHJcbjwvYT48L0xpbms+XHJcbjxzdHlsZSBqc3g+e2BcclxuXHJcblxyXG4uc2lkZWJhckxpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsNTAsMTUwLDAuMik7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxufVxyXG5cclxuLyogdW52aXNpdGVkIGxpbmsgKi9cclxuYTpsaW5rIHtcclxuICBjb2xvcjogI2NjZjtcclxufVxyXG5cclxuLyogdmlzaXRlZCBsaW5rICovXHJcbmE6dmlzaXRlZCB7XHJcbiAgY29sb3I6ICNjY2Y7XHJcbn1cclxuXHJcbi8qIG1vdXNlIG92ZXIgbGluayAqL1xyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzg4ZjtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbn1cclxuXHJcbi8qIHNlbGVjdGVkIGxpbmsgKi9cclxuYTphY3RpdmUge1xyXG4gIGNvbG9yOiAjODhmO1xyXG59XHJcblxyXG5gfTwvc3R5bGU+XHJcbjwvPilcclxuXHJcbmNvbnN0IE5vcm1hbExpbmsgPSBwcm9wcyA9PiAoXHJcbiAgPD5cclxuPGEgaHJlZj17cHJvcHMuaHJlZn0+XHJcbjxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyTGluayc+8J+hqiB7cHJvcHMubmFtZX1cclxuPC9kaXY+XHJcbjwvYT5cclxuPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbi5zaWRlYmFyTGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCw1MCwxNTAsMC4yKTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xyXG5hOmxpbmsge1xyXG4gIGNvbG9yOiAjY2NmO1xyXG59XHJcblxyXG4vKiB2aXNpdGVkIGxpbmsgKi9cclxuYTp2aXNpdGVkIHtcclxuICBjb2xvcjogI2NjZjtcclxufVxyXG5cclxuLyogbW91c2Ugb3ZlciBsaW5rICovXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjODhmO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG5cclxuLyogc2VsZWN0ZWQgbGluayAqL1xyXG5hOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM4OGY7XHJcbn1cclxuXHJcbmB9PC9zdHlsZT5cclxuPC8+XHJcbilcclxuXHJcblxyXG5jb25zdCBTaWRlYmFyID0gcHJvcHMgPT4gKFxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcnN0eWxlJz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhcnN0eWxlJz5cclxuICAgICAgICA8aDM+UGFnZXM8L2gzPlxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAgICA8UGFnZUxpbmsgaHJlZj0nLycgbmFtZT0nSG9tZScgLz5cclxuICAgICAgICAgICA8UGFnZUxpbmsgaHJlZj0nL3Byb2plY3RzJyBuYW1lPSdQcm9qZWN0cycgLz5cclxuICAgICAgICAgICA8UGFnZUxpbmsgaHJlZj0nL3Bvc3RzJyBuYW1lPSdQb3N0cycgLz5cclxuICAgICAgICAgICA8Tm9ybWFsTGluayBocmVmPScvYmxvZy8nIG5hbWU9J0Jsb2cnIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50c3R5bGUnPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcblxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\barte\\\\OneDrive\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\components\\\\sidebar.js */"));

const Sidebar = props => __jsx("div", {
  className: "wrapperstyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, __jsx("div", {
  className: "sidebarstyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, "Pages"), __jsx(PageLink, {
  href: "/",
  name: "Home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}), __jsx(PageLink, {
  href: "/projects",
  name: "Projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}), __jsx(PageLink, {
  href: "/posts",
  name: "Posts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}), __jsx(NormalLink, {
  href: "/blog/",
  name: "Blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
})), __jsx("div", {
  className: "contentstyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_page_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/page-wrapper */ "./components/page-wrapper.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_GoogleDoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../scripts/GoogleDoc */ "./scripts/GoogleDoc.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\barte\\OneDrive\\Documents\\GitHub\\yernemm-xyz\\pages\\posts\\[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const csvtojson = __webpack_require__(/*! csvtojson */ "csvtojson");

let Posts = props => __jsx(_components_page_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Post: " + props.postData.title,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  dangerouslySetInnerHTML: props.body,
  className: "belowdiv",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3050419254",
  __self: undefined
}, "a:link{color:#ccf;}a:visited{color:#ccf;}a:hover{color:#88f;}a:active{color:#88f;}img{max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmFydGVcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxceWVybmVtbS14eXpcXHBhZ2VzXFxwb3N0c1xcW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXK0IsQUFJZ0IsQUFLQSxBQUtBLEFBS0EsQUFJTSxXQWxCbkIsQUFLQSxBQUtBLEFBS0EsSUFJQSIsImZpbGUiOiJDOlxcVXNlcnNcXGJhcnRlXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxwYWdlc1xccG9zdHNcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2Utd3JhcHBlcic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgR29vZ2xlRG9jIGZyb20gJy4uLy4uL3NjcmlwdHMvR29vZ2xlRG9jJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmNvbnN0IGNzdnRvanNvbiA9IHJlcXVpcmUoXCJjc3Z0b2pzb25cIik7XHJcbmxldCBQb3N0cyA9IHByb3BzID0+ICggXHJcbiAgICA8V3JhcHBlciB0aXRsZT17XCJQb3N0OiBcIiArIHByb3BzLnBvc3REYXRhLnRpdGxlfSA+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtwcm9wcy5ib2R5fSBjbGFzc05hbWU9XCJiZWxvd2RpdlwiIC8+XHJcbiAgICAgIDxIZWFkPjxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgLyogdW52aXNpdGVkIGxpbmsgKi9cclxuICBhOmxpbmsge1xyXG4gICAgY29sb3I6ICNjY2Y7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHZpc2l0ZWQgbGluayAqL1xyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogI2NjZjtcclxuICB9XHJcbiAgXHJcbiAgLyogbW91c2Ugb3ZlciBsaW5rICovXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzg4ZjtcclxuICB9XHJcbiAgXHJcbiAgLyogc2VsZWN0ZWQgbGluayAqL1xyXG4gIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjODhmO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYH08L3N0eWxlPjwvSGVhZD5cclxuICAgICAgXHJcbiAgICAgIDxociAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2RhdGVTdHlsZX0+e2dldERhdGVzKHByb3BzLnBvc3REYXRhLmNyZWF0ZWQsIHByb3BzLnBvc3REYXRhLnVwZGF0ZWQpfTwvZGl2PlxyXG4gICAgPC9XcmFwcGVyPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0c1xyXG5cclxuY29uc3QgZGF0ZVN0eWxlID0ge1xyXG4gICAgY29sb3I6ICcjOTk5JyxcclxuICAgIGZvbnRTaXplOiAnODAlJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRlcyhjcmVhdGVkLCBlZGl0ZWQpe1xyXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcclxuXHJcbiAgIFxyXG4gICAgICAgIGlmKGNyZWF0ZWQgKiAxID09IGNyZWF0ZWQpXHJcbiAgICAgICAgY3JlYXRlZCA9IGNyZWF0ZWQgKiAxXHJcblxyXG4gICAgICAgIGlmKGVkaXRlZCAqIDEgPT0gZWRpdGVkKVxyXG4gICAgICAgIGVkaXRlZCA9IGVkaXRlZCAqIDFcclxuICAgIFxyXG4gICAgY29udGVudC5wdXNoKDxzcGFuPkNyZWF0ZWQ6IHtmb3JtYXREYXRlKG5ldyBEYXRlKGNyZWF0ZWQpKX08YnIgLz48L3NwYW4+KTtcclxuICAgIGlmKGVkaXRlZCl7XHJcbiAgICAgICAgY29udGVudC5wdXNoKDxzcGFuPkxhc3QgVXBkYXRlZDoge2Zvcm1hdERhdGUobmV3IERhdGUoZWRpdGVkKSl9PGJyIC8+PC9zcGFuPik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICg8cD57Y29udGVudH08L3A+KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKXtcclxuICAgIHJldHVybiBcIlwiXHJcbiAgICArIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSArICctJ1xyXG4gICAgKyBwYWQoKDEgKyBkYXRlLmdldFVUQ01vbnRoKCkpLDIpICsgJy0nXHJcbiAgICArIHBhZChkYXRlLmdldFVUQ0RhdGUoKSwyKSArIFwiIFwiXHJcbiAgICArIHBhZCgoZGF0ZS5nZXRVVENIb3VycygpICUgMTIpLCAyKSArIFwiOlwiXHJcbiAgICArIHBhZChkYXRlLmdldFVUQ01pbnV0ZXMoKSwgMikgKyBcIjpcIlxyXG4gICAgKyBwYWQoZGF0ZS5nZXRVVENTZWNvbmRzKCksIDIpICsgXCIgXCJcclxuICAgICsgKE1hdGguZmxvb3IoZGF0ZS5nZXRVVENIb3VycygpIC8gMTIpID09IDAgPyBcIkFNXCIgOiBcIlBNXCIpXHJcbiAgICArIFwiIChVVEMpXCJcclxufVxyXG5cclxuZnVuY3Rpb24gcGFkKG51bSwgc2l6ZSkge1xyXG4gICAgdmFyIHMgPSBudW0rXCJcIjtcclxuICAgIHdoaWxlIChzLmxlbmd0aCA8IHNpemUpIHMgPSBcIjBcIiArIHM7XHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuUG9zdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2U0FmNWExcHdJai15aktQRmhveVFkSFRTM2hIQk5aVllYUVJUQ29BSFhkNnpZTXk1OGlacjBJVzA1NFdnbEJKazlhZmtuc1RJZVZTOGVGL3B1Yj9vdXRwdXQ9Y3N2Jyk7XHJcbiAgICBjb25zdCBjc3YgPSBhd2FpdCByZXMudGV4dCgpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IGNzdnRvanNvbigpLmZyb21TdHJpbmcoY3N2KS50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIC8vZXJyb3IgcG9zdCBieSBkZWZhdWx0XHJcbiAgICBsZXQgdXJsID0gXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kL2UvMlBBQ1gtMXZUVzNLMlRZRm9FVDdJVDVmaTJ3ZlBCbUh2M0tGamlLRnA2Rldzbkw2OXZYY2tNTjZQbHdTTHVEbE82Z1JsNF9qQWZOeVpfaFE5VW9RcUsvcHViP2VtYmVkZGVkPXRydWVcIjtcclxuICAgIGxldCBwb3N0RGF0YSA9IHt0aXRsZTogXCJOb3QgZm91bmQuXCJ9XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGggJiYgIWZvdW5kOyBpKyspe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coanNvbltpXSlcclxuICAgICAgICBpZihqc29uW2ldLmlkID09IGlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpKVxyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHVybCA9IGpzb25baV0uZG9jO1xyXG4gICAgICAgICAgICBwb3N0RGF0YSA9IGpzb25baV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGxldCBkb2MgPSBuZXcgR29vZ2xlRG9jKHVybCk7XHJcbiAgICBjb25zdCBkb2NkYXRhID0gYXdhaXQgZG9jLmdldERhdGEoKTtcclxuICAgIGxldCBib2R5ID0gZG9jZGF0YS5ib2R5O1xyXG4gICAgaWYoYm9keS5pbmNsdWRlcygnPGgxPk9uZSBhY2NvdW50LiBBbGwgb2YgR29vZ2xlLjwvaDE+PGgyIGNsYXNzPVwiaGlkZGVuLXNtYWxsXCI+U2lnbiBpbiB0byBjb250aW51ZSB0byBEb2NzPC9oMj4nKSl7XHJcbiAgICAgICAgYm9keSA9IFwiPGgxPk9vcHMsIHBvc3QgY29udGVudCBub3QgZm91bmQuLi48L2gxPjxoMj5Mb29rcyBsaWtlIHRoaXMgcG9zdCBpcyBwcml2YXRlIG9yIHJlbW92ZWQuIENoZWNrIGJhY2sgbGF0ZXIhPC9oMj48cD5FcnJvciBjb2RlOiAxPC9wPlwiXHJcbiAgICB9XHJcbiAgICBpZihib2R5LmluY2x1ZGVzKCc8ZGl2ICBjbGFzcz1cIm1haW4gY29udGVudCBjbGVhcmZpeFwiPicpICYmIGJvZHkuaW5jbHVkZXMoJ09uZSBhY2NvdW50LiBBbGwgb2YgR29vZ2xlLicpICYmIGJvZHkuaW5jbHVkZXMoJyBTaWduIGluIHRvIGNvbnRpbnVlIHRvIERvY3MnKSl7XHJcbiAgICAgICAgYm9keSA9IFwiPGgxPk9vcHMsIHBvc3QgY29udGVudCBub3QgZm91bmQuLi48L2gxPjxoMj5Mb29rcyBsaWtlIHRoaXMgcG9zdCBpcyBwcml2YXRlIG9yIHJlbW92ZWQuIENoZWNrIGJhY2sgbGF0ZXIhPC9oMj48cD5FcnJvciBjb2RlOiAyPC9wPlwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZSA9IGRvY2RhdGEuc3R5bGU7XHJcbiAgICAvL2NvbnNvbGUubG9nKGJvZHkpXHJcbiAgICAvL2NvbnN0IGpzb24gPSBhd2FpdCBjc3Z0b2pzb25cclxuICAgIHJldHVybiB7cG9zdHNEYXRhOiBqc29uLCBpZDogaWQsIGJvZHk6IHtfX2h0bWw6IGJvZHl9LCBzdHlsZTogc3R5bGUsIHBvc3REYXRhfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\barte\\\\OneDrive\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\pages\\\\posts\\\\[id].js */")), __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), __jsx("div", {
  style: dateStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, getDates(props.postData.created, props.postData.updated)));

/* harmony default export */ __webpack_exports__["default"] = (Posts);
const dateStyle = {
  color: '#999',
  fontSize: '80%'
};

function getDates(created, edited) {
  let content = [];
  if (created * 1 == created) created = created * 1;
  if (edited * 1 == edited) edited = edited * 1;
  content.push(__jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Created: ", formatDate(new Date(created)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })));

  if (edited) {
    content.push(__jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Last Updated: ", formatDate(new Date(edited)), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })));
  }

  return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, content);
}

function formatDate(date) {
  return "" + date.getUTCFullYear() + '-' + pad(1 + date.getUTCMonth(), 2) + '-' + pad(date.getUTCDate(), 2) + " " + pad(date.getUTCHours() % 12, 2) + ":" + pad(date.getUTCMinutes(), 2) + ":" + pad(date.getUTCSeconds(), 2) + " " + (Math.floor(date.getUTCHours() / 12) == 0 ? "AM" : "PM") + " (UTC)";
}

function pad(num, size) {
  var s = num + "";

  while (s.length < size) s = "0" + s;

  return s;
}

Posts.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://docs.google.com/spreadsheets/d/e/2PACX-1vSAf5a1pwIj-yjKPFhoyQdHTS3hHBNZVYXQRTCoAHXd6zYMy58iZr0IW054WglBJk9afknsTIeVS8eF/pub?output=csv');
  const csv = await res.text();
  const json = await csvtojson().fromString(csv).then(json => {
    return json;
  });
  let found = false; //error post by default

  let url = "https://docs.google.com/document/d/e/2PACX-1vTW3K2TYFoET7IT5fi2wfPBmHv3KFjiKFp6FWsnL69vXckMN6PlwSLuDlO6gRl4_jAfNyZ_hQ9UoQqK/pub?embedded=true";
  let postData = {
    title: "Not found."
  };

  for (let i = 0; i < json.length && !found; i++) {
    //console.log(json[i])
    if (json[i].id == id) {
      //console.log(i)
      found = true;
      url = json[i].doc;
      postData = json[i];
    }
  }

  let doc = new _scripts_GoogleDoc__WEBPACK_IMPORTED_MODULE_5__["default"](url);
  const docdata = await doc.getData();
  let body = docdata.body;

  if (body.includes('<h1>One account. All of Google.</h1><h2 class="hidden-small">Sign in to continue to Docs</h2>')) {
    body = "<h1>Oops, post content not found...</h1><h2>Looks like this post is private or removed. Check back later!</h2><p>Error code: 1</p>";
  }

  if (body.includes('<div  class="main content clearfix">') && body.includes('One account. All of Google.') && body.includes(' Sign in to continue to Docs')) {
    body = "<h1>Oops, post content not found...</h1><h2>Looks like this post is private or removed. Check back later!</h2><p>Error code: 2</p>";
  }

  const style = docdata.style; //console.log(body)
  //const json = await csvtojson

  return {
    postsData: json,
    id: id,
    body: {
      __html: body
    },
    style: style,
    postData
  };
};

/***/ }),

/***/ "./scripts/GoogleDoc.js":
/*!******************************!*\
  !*** ./scripts/GoogleDoc.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);


const Entities = __webpack_require__(/*! html-entities */ "html-entities").XmlEntities;

const entities = new Entities();

class GoogleDoc {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(this.url);
    const data = await res.text();
    let csssplit1 = data.split('<style type="text/css">')[1];
    if (csssplit1) csssplit1 = csssplit1.split('</style>')[0];
    let body = data.split("</head>")[1].split("</html>")[0].replace("<body", "<div").replace("</body", "</div");
    let bodyCleanRegex = /(<style(.*?)<\/style>)|(<script(.*?)<\/script>)|(https:\/\/www.google.com\/url\?q\=)|(&amp;sa=D&amp;ust=[0-9]+)|( class="[a-z0-9 ]+")/gs;
    body = body.replace(bodyCleanRegex, "");

    if (body.includes("{{")) {
      let bodyArr = [];
      let bodyt = body.split("{{");
      bodyArr.push(bodyt[0]);

      for (let i = 1; i < bodyt.length; i++) {
        let bodyin = bodyt[i].split("}}");
        bodyArr.push(entities.decode(bodyin[0]));
        bodyArr.push(bodyin[1]);
      }

      body = bodyArr.join('');
    }

    body = body.replace(/{\\{/g, '{{');
    const out = {
      data: data,
      body: body,
      style: csssplit1
    };
    return out;
  }

  async getBody() {
    // dangerouslySetInnerHTML={{__html: prop.body}}
    const data = await this.getData();
    return {
      __html: data.body
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GoogleDoc);

/***/ }),

/***/ "./scripts/analytics.js":
/*!******************************!*\
  !*** ./scripts/analytics.js ***!
  \******************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

const initGA = () => {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize('UA-87387417-1');
};
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
const logEvent = (category = '', action = '') => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description,
      fatal
    });
  }
};

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/posts/[id].js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\barte\OneDrive\Documents\GitHub\yernemm-xyz\pages\posts\[id].js */"./pages/posts/[id].js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "csvtojson":
/*!****************************!*\
  !*** external "csvtojson" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("csvtojson");

/***/ }),

/***/ "html-entities":
/*!********************************!*\
  !*** external "html-entities" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-entities");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map