module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
var _jsxFileName = "C:\\Users\\Bakk\\Documents\\GitHub\\yernemm-xyz\\components\\analytics.js";
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
        lineNumber: 14
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
var _jsxFileName = "C:\\Users\\Bakk\\Documents\\GitHub\\yernemm-xyz\\components\\footer.js";

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
var _jsxFileName = "C:\\Users\\Bakk\\Documents\\GitHub\\yernemm-xyz\\components\\header.js";


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
}, "img.jsx-363504492{max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmFra1xcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxjb21wb25lbnRzXFxoZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWlCLEFBR29DLGVBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQmFra1xcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5sZXQgbG9nb1N0eWxlID0ge1xuICAgIG1heEhlaWdodDonNDBweCcsXG4gICAgZmxvYXQ6J3JpZ2h0J1xufVxuXG5jb25zdCBIZWFkZXIgPSBwcm9wcyA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+WWVybmVtbXtwcm9wcy50aXRsZSA/IFwiIC0gXCIgKyBwcm9wcy50aXRsZSA6IFwiXCJ9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzU4Njk1NDUxNmMuanNcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG48bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkB5ZXJuZW1tXCIgLz5cbjxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17J1llcm5lbW0nICsgKHByb3BzLnRpdGxlID8gXCIgLSBcIiArIHByb3BzLnRpdGxlIDogXCJcIil9IC8+XG48bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDcmVhdGluZyB3ZWIgdG9vbHMgc2luY2UgMjAxNiBqdXN0IGZvciBmdW4uXCIgLz5cbjxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cIi9zdGF0aWMvbWVkaWEvaW1hZ2Uvc25vd2JhbGxGdWxsLnBuZ1wiIC8+XG5cbjxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsnWWVybmVtbScgKyAocHJvcHMudGl0bGUgPyBcIiAtIFwiICsgcHJvcHMudGl0bGUgOiBcIlwiKX0gLz5cbjxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbjxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL3N0YXRpYy9tZWRpYS9pbWFnZS9zbm93YmFsbEZ1bGwucG5nXCIgLz5cbjxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ3JlYXRpbmcgd2ViIHRvb2xzIHNpbmNlIDIwMTYganVzdCBmb3IgZnVuLlwiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBoaWRkZW5Db21tZW50fX0gLz5cbjxoMT48aW1nIHNyYz1cIi9zdGF0aWMvbWVkaWEvaW1hZ2Uvc25vd2JhbGxBbmltLmdpZlwiIHN0eWxlPXtsb2dvU3R5bGV9IC8+WWVybmVtbXtwcm9wcy50aXRsZSA/IFwiIC0gXCIgKyBwcm9wcy50aXRsZSA6IFwiXCJ9PC9oMT5cbiAgICAgICAgPGhyIC8+XG5cbiAgICA8L2Rpdj5cbilcblxuY29uc3QgaGlkZGVuQ29tbWVudCA9IGA8IS0tXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkhpLlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLS0+XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Bakk\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\components\\\\header.js */"), __jsx("meta", {
  name: "twitter:card",
  content: "summary",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:site",
  content: "@yernemm",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:title",
  content: 'Yernemm' + (props.title ? " - " + props.title : ""),
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:description",
  content: "Creating web tools since 2016 just for fun.",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:image",
  content: "/static/media/image/snowballFull.png",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:title",
  content: 'Yernemm' + (props.title ? " - " + props.title : ""),
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image",
  content: "/static/media/image/snowballFull.png",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:description",
  content: "Creating web tools since 2016 just for fun.",
  className: "jsx-363504492",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})), __jsx("span", {
  dangerouslySetInnerHTML: {
    __html: hiddenComment
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/media/image/snowballAnim.gif",
  style: logoStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), "Yernemm", props.title ? " - " + props.title : ""), __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
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
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-adsense */ "react-adsense");
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_adsense__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Bakk\\Documents\\GitHub\\yernemm-xyz\\components\\page-wrapper.js";

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
    lineNumber: 17
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/static/style/wrapper.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("script", {
  src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})), __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: props.title,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("div", {
  style: {
    height: '100px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(react_adsense__WEBPACK_IMPORTED_MODULE_6___default.a.Google, {
  client: "ca-pub-2219001427204097",
  slot: "9877467510",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
})), __jsx("div", {
  style: content,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, props.children)), __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
})), __jsx("script", {
  async: true,
  src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}));

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
var _jsxFileName = "C:\\Users\\Bakk\\Documents\\GitHub\\yernemm-xyz\\components\\sidebar.js";


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
}, ".sidebarLink.jsx-1316264426{background-color:rgba(50,50,150,0.2);margin:auto;}a.jsx-1316264426{-webkit-text-decoration:none;text-decoration:none;-webkit-transition-duration:0.2s;transition-duration:0.2s;}a.jsx-1316264426:link{color:#ccf;}a.jsx-1316264426:visited{color:#ccf;}a.jsx-1316264426:hover{color:#88f;font-size:120%;}a.jsx-1316264426:active{color:#88f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmFra1xcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNZLEFBS3dDLEFBS2hCLEFBTVYsQUFLQSxBQUtBLEFBTUEsV0FmYixBQUtBLEFBS2lCLEFBTWpCLGVBTEEsV0F0QmMsWUFDZCxDQUkyQiwwREFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxCYWtrXFxEb2N1bWVudHNcXEdpdEh1YlxceWVybmVtbS14eXpcXGNvbXBvbmVudHNcXHNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuXG5jb25zdCBQYWdlTGluayA9IHByb3BzID0+ICg8PlxuPExpbmsgaHJlZj17cHJvcHMuaHJlZn0+PGE+XG48ZGl2IGNsYXNzTmFtZT0nc2lkZWJhckxpbmsnPvCfoaoge3Byb3BzLm5hbWV9XG48L2Rpdj5cbjwvYT48L0xpbms+XG48c3R5bGUganN4PntgXG5cblxuLnNpZGViYXJMaW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCw1MCwxNTAsMC4yKTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuYTpsaW5rIHtcbiAgY29sb3I6ICNjY2Y7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVkIHtcbiAgY29sb3I6ICNjY2Y7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGNvbG9yOiAjODhmO1xuICBmb250LXNpemU6IDEyMCU7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY29sb3I6ICM4OGY7XG59XG5cbmB9PC9zdHlsZT5cbjwvPilcblxuY29uc3QgTm9ybWFsTGluayA9IHByb3BzID0+IChcbiAgPD5cbjxhIGhyZWY9e3Byb3BzLmhyZWZ9PlxuPGRpdiBjbGFzc05hbWU9J3NpZGViYXJMaW5rJz7wn6GqIHtwcm9wcy5uYW1lfVxuPC9kaXY+XG48L2E+XG48c3R5bGUganN4PntgXG5cblxuLnNpZGViYXJMaW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCw1MCwxNTAsMC4yKTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuYTpsaW5rIHtcbiAgY29sb3I6ICNjY2Y7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVkIHtcbiAgY29sb3I6ICNjY2Y7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGNvbG9yOiAjODhmO1xuICBmb250LXNpemU6IDEyMCU7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY29sb3I6ICM4OGY7XG59XG5cbmB9PC9zdHlsZT5cbjwvPlxuKVxuXG5cbmNvbnN0IFNpZGViYXIgPSBwcm9wcyA9PiAoXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXJzdHlsZSc+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhcnN0eWxlJz5cbiAgICAgICAgPGgzPlBhZ2VzPC9oMz5cbiAgICAgICAgXG4gICAgICBcbiAgICAgICAgICAgPFBhZ2VMaW5rIGhyZWY9Jy8nIG5hbWU9J0hvbWUnIC8+XG4gICAgICAgICAgIDxQYWdlTGluayBocmVmPScvcHJvamVjdHMnIG5hbWU9J1Byb2plY3RzJyAvPlxuICAgICAgICAgICA8UGFnZUxpbmsgaHJlZj0nL3Bvc3RzJyBuYW1lPSdQb3N0cycgLz5cbiAgICAgICAgICAgPE5vcm1hbExpbmsgaHJlZj0nL2Jsb2cvJyBuYW1lPSdCbG9nJyAvPlxuICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50c3R5bGUnPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgXG5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Bakk\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\components\\\\sidebar.js */"));

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
}, ".sidebarLink.jsx-1316264426{background-color:rgba(50,50,150,0.2);margin:auto;}a.jsx-1316264426{-webkit-text-decoration:none;text-decoration:none;-webkit-transition-duration:0.2s;transition-duration:0.2s;}a.jsx-1316264426:link{color:#ccf;}a.jsx-1316264426:visited{color:#ccf;}a.jsx-1316264426:hover{color:#88f;font-size:120%;}a.jsx-1316264426:active{color:#88f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmFra1xcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EWSxBQUt3QyxBQUtoQixBQU1WLEFBS0EsQUFLQSxBQU1BLFdBZmIsQUFLQSxBQUtpQixBQU1qQixlQUxBLFdBdEJjLFlBQ2QsQ0FJMkIsMERBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQmFra1xcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cblxuY29uc3QgUGFnZUxpbmsgPSBwcm9wcyA9PiAoPD5cbjxMaW5rIGhyZWY9e3Byb3BzLmhyZWZ9PjxhPlxuPGRpdiBjbGFzc05hbWU9J3NpZGViYXJMaW5rJz7wn6GqIHtwcm9wcy5uYW1lfVxuPC9kaXY+XG48L2E+PC9MaW5rPlxuPHN0eWxlIGpzeD57YFxuXG5cbi5zaWRlYmFyTGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsNTAsMTUwLDAuMik7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cblxuLyogdW52aXNpdGVkIGxpbmsgKi9cbmE6bGluayB7XG4gIGNvbG9yOiAjY2NmO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjY2NmO1xufVxuXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cbmE6aG92ZXIge1xuICBjb2xvcjogIzg4ZjtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiAjODhmO1xufVxuXG5gfTwvc3R5bGU+XG48Lz4pXG5cbmNvbnN0IE5vcm1hbExpbmsgPSBwcm9wcyA9PiAoXG4gIDw+XG48YSBocmVmPXtwcm9wcy5ocmVmfT5cbjxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyTGluayc+8J+hqiB7cHJvcHMubmFtZX1cbjwvZGl2PlxuPC9hPlxuPHN0eWxlIGpzeD57YFxuXG5cbi5zaWRlYmFyTGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsNTAsMTUwLDAuMik7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cblxuLyogdW52aXNpdGVkIGxpbmsgKi9cbmE6bGluayB7XG4gIGNvbG9yOiAjY2NmO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjY2NmO1xufVxuXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cbmE6aG92ZXIge1xuICBjb2xvcjogIzg4ZjtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiAjODhmO1xufVxuXG5gfTwvc3R5bGU+XG48Lz5cbilcblxuXG5jb25zdCBTaWRlYmFyID0gcHJvcHMgPT4gKFxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyc3R5bGUnPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXJzdHlsZSc+XG4gICAgICAgIDxoMz5QYWdlczwvaDM+XG4gICAgICAgIFxuICAgICAgXG4gICAgICAgICAgIDxQYWdlTGluayBocmVmPScvJyBuYW1lPSdIb21lJyAvPlxuICAgICAgICAgICA8UGFnZUxpbmsgaHJlZj0nL3Byb2plY3RzJyBuYW1lPSdQcm9qZWN0cycgLz5cbiAgICAgICAgICAgPFBhZ2VMaW5rIGhyZWY9Jy9wb3N0cycgbmFtZT0nUG9zdHMnIC8+XG4gICAgICAgICAgIDxOb3JtYWxMaW5rIGhyZWY9Jy9ibG9nLycgbmFtZT0nQmxvZycgLz5cbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgXG4gICAgICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudHN0eWxlJz5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICAgIFxuXG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Bakk\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\components\\\\sidebar.js */"));

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

/***/ "./components/tooltip.js":
/*!*******************************!*\
  !*** ./components/tooltip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bakk\\Documents\\GitHub\\yernemm-xyz\\components\\tooltip.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Tooltip = props => __jsx("span", {
  className: "jsx-3673564143" + " " + "tooltip",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, props.children, __jsx("span", {
  className: "jsx-3673564143" + " " + "tooltiptext",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, props.text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3673564143",
  __self: undefined
}, ".tooltip.jsx-3673564143{position:relative;display:inline-block;}.tooltip.jsx-3673564143 .tooltiptext.jsx-3673564143{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;bottom:100%;left:50%;margin-left:-60px;}.tooltip.jsx-3673564143:hover .tooltiptext.jsx-3673564143{visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmFra1xcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxjb21wb25lbnRzXFx0b29sdGlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlvQixBQUtxQixBQU1BLEFBbUJDLGtCQXhCRSxBQU1ULENBbUJkLFdBbEJ5QixTQU56QixjQU9hLFdBQ08sa0JBQ0osY0FDSSxrQkFHQSxrQkFDUixVQUVFLFlBQ0gsU0FDUyxrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxCYWtrXFxEb2N1bWVudHNcXEdpdEh1YlxceWVybmVtbS14eXpcXGNvbXBvbmVudHNcXHRvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb29sdGlwID0gcHJvcHMgPT4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcFwiPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dFwiPntwcm9wcy50ZXh0fTwvc3Bhbj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbi8qIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vY3NzL2Nzc190b29sdGlwLmFzcCAqL1xyXG4vKiBUb29sdGlwIGNvbnRhaW5lciAqL1xyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogVG9vbHRpcCB0ZXh0ICovXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gXHJcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgdGV4dCAtIHNlZSBleGFtcGxlcyBiZWxvdyEgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTYwcHg7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuYH08L3N0eWxlPlxyXG4gICAgPC9zcGFuPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Bakk\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\components\\\\tooltip.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_page_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/page-wrapper */ "./components/page-wrapper.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tooltip */ "./components/tooltip.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_projectsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/projectsData */ "./scripts/projectsData.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Bakk\\Documents\\GitHub\\yernemm-xyz\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["fas"]);
const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  margin: 'auto',
  padding: '0px',
  marginTop: '25px'
};
const linkBorderStyle = {
  width: '70px',
  height: '60px',
  margin: '5px',
  borderRadius: '5px',
  paddingTop: '20px'
};
const linksWrapper = {
  margin: 'auto',
  textAlign: 'center',
  height: '100px',
  display: 'inline-block',
  left: '50px'
};

const GeneralBtn = props => __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: props.desc,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("a", {
  href: props.url,
  style: linkStyle,
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("div", {
  style: {
    display: 'inline',
    float: 'left'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("div", {
  style: _objectSpread({}, {
    backgroundColor: props.color
  }, {}, linkBorderStyle),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, props.children))));

const LinkBtn = props => __jsx(GeneralBtn, {
  color: props.color,
  url: props.url,
  desc: props.desc,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
  icon: ['fab', props.name],
  style: {
    fontSize: '40px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}));

const Home = prop => __jsx(_components_page_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: "Home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("div", {
  style: {
    textAlign: 'center'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/media/image/snowballFull.png",
  height: "250px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, "Yernemm"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "Creating web tools since 2016"), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "just for fun.")), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "Profiles & Socials")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("div", {
  style: {
    textAlign: 'center'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("div", {
  style: linksWrapper,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx(LinkBtn, {
  url: "https://twitter.com/Yernemm",
  color: "#1ca0f1",
  name: "twitter",
  desc: "My Twitter Page",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}), __jsx(LinkBtn, {
  url: "https://www.youtube.com/channel/UCfOGXFJdLqnhfENzTCC9IjA/featured",
  color: "red",
  name: "youtube",
  desc: "My YouTube Channel",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}), __jsx(LinkBtn, {
  url: "https://www.reddit.com/user/yernemm",
  color: "orangered",
  name: "reddit",
  desc: "My Reddit Account",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}), __jsx(LinkBtn, {
  url: "https://github.com/Yernemm/",
  color: "#04090e",
  name: "github",
  desc: "My Github Account",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}), __jsx(LinkBtn, {
  url: "https://discord.gg/uqhkBt8",
  color: "#7289da",
  name: "discord",
  desc: "My (old) Discord Server",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}), __jsx(GeneralBtn, {
  color: "#d5855c",
  url: "https://discord.gg/wFbJZqC",
  desc: "Brigitte Mains Discord Server",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx("img", {
  style: {
    maxHeight: "40px",
    width: "auto"
  },
  src: "/static/media/icons/brigitte.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}))))), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, "Projects")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, _scripts_projectsData__WEBPACK_IMPORTED_MODULE_4__["default"].allSmall));

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "./scripts/projectsData.js":
/*!*********************************!*\
  !*** ./scripts/projectsData.js ***!
  \*********************************/
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Bakk\\Documents\\GitHub\\yernemm-xyz\\scripts\\projectsData.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fas"]);

class Project {
  constructor(data) {
    this.file = data.file;
    this.name = data.name;
    this.cat = data.cat;
    this.type = data.type;
    this.desc = data.desc;
    this.img = data.img;
  }

  getIcon() {
    let mapping = {
      'Web Tools': 'globe',
      'Standalone': 'download',
      'External': 'external-link-alt'
    };
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: mapping[this.type],
      height: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
  }

  getSmall() {
    return __jsx("div", {
      key: this.file,
      className: "jsx-3502342116" + " " + 'hoverListItem',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: this.file,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3502342116",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, this.getIcon(), " ", this.name)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3502342116",
      __self: this
    }, "a.jsx-3502342116:link{color:#ccf;}a.jsx-3502342116:visited{color:#ccf;}a.jsx-3502342116:hover{color:#88f;}a.jsx-3502342116:active{color:#88f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmFra1xcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxzY3JpcHRzXFxwcm9qZWN0c0RhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJtQyxBQUlnQixBQUtBLEFBS0EsQUFLQSxXQWRiLEFBS0EsQUFLQSxBQUtBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQmFra1xcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxzY3JpcHRzXFxwcm9qZWN0c0RhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYWIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcclxubGlicmFyeS5hZGQoZmFiLCBmYXMpO1xyXG5jbGFzcyBQcm9qZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcclxuICAgICAgICB0aGlzLmZpbGU9IGRhdGEuZmlsZVxyXG4gICAgICAgIHRoaXMubmFtZT0gZGF0YS5uYW1lXHJcbiAgICAgICAgdGhpcy5jYXQ9IGRhdGEuY2F0XHJcbiAgICAgICAgdGhpcy50eXBlPSBkYXRhLnR5cGVcclxuICAgICAgICB0aGlzLmRlc2M9IGRhdGEuZGVzY1xyXG4gICAgICAgIHRoaXMuaW1nPSBkYXRhLmltZ1xyXG4gICAgfVxyXG5cclxuICAgIGdldEljb24oKXtcclxuICAgICAgICBsZXQgbWFwcGluZyA9IHsgICAgICBcclxuICAgICAgICAgICAgJ1dlYiBUb29scyc6ICdnbG9iZScsXHJcbiAgICAgICAgICAgICdTdGFuZGFsb25lJzogJ2Rvd25sb2FkJyxcclxuICAgICAgICAgICAgJ0V4dGVybmFsJzogJ2V4dGVybmFsLWxpbmstYWx0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICg8Rm9udEF3ZXNvbWVJY29uIGljb249e21hcHBpbmdbdGhpcy50eXBlXX0gaGVpZ2h0PScxNicvPilcclxuICAgIH1cclxuXHJcbiAgICBnZXRTbWFsbCgpe1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBrZXk9e3RoaXMuZmlsZX0gY2xhc3NOYW1lPSdob3Zlckxpc3RJdGVtJz48TGluayBocmVmPXt0aGlzLmZpbGV9PjxhPlxyXG4gICAge3RoaXMuZ2V0SWNvbigpfSB7dGhpcy5uYW1lfVxyXG4gICAgICAgICAgICA8L2E+PC9MaW5rPjxzdHlsZSBqc3g+e2BcclxuICAvKiB1bnZpc2l0ZWQgbGluayAqL1xyXG4gIGE6bGluayB7XHJcbiAgICBjb2xvcjogI2NjZjtcclxuICB9XHJcbiAgXHJcbiAgLyogdmlzaXRlZCBsaW5rICovXHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAjY2NmO1xyXG4gIH1cclxuICBcclxuICAvKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjODhmO1xyXG4gIH1cclxuICBcclxuICAvKiBzZWxlY3RlZCBsaW5rICovXHJcbiAgYTphY3RpdmUge1xyXG4gICAgY29sb3I6ICM4OGY7XHJcbiAgfVxyXG5gfTwvc3R5bGU+PC9kaXY+KVxyXG4gICAgfVxyXG5cclxuICAgIGdldEJpZygpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RoaXMuZmlsZX0+PGEgY2xhc3NOYW1lPSdob3Zlckxpc3RJdGVtJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyIHczLWJvcmRlci10b3AgdzMtYm9yZGVyLWJvdHRvbSB3My1ib3JkZXItYmx1ZVwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2otY2F0LSR7dGhpcy5jYXR9YH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgPGltZyBzcmM9e3RoaXMuaW1nfSBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB3My1jaXJjbGVcIiBzdHlsZT17e3dpZHRoOlwiMzVweFwiLCBmbG9hdDonbGVmdCcsIGJvcmRlclJhZGl1czonNTAlJ319IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPnt0aGlzLmdldEljb24oKX1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3My1sYXJnZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLm5hbWV9fT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L3NwYW4+PGJyIC8+XHJcbiAgICAgICAgICA8c3Bhbj57dGhpcy5kZXNjfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiA8aHIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAvKiB1bnZpc2l0ZWQgbGluayAqL1xyXG4gIGE6bGluayB7XHJcbiAgICBjb2xvcjogI2RkZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogdmlzaXRlZCBsaW5rICovXHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAjZGRmO1xyXG4gIH1cclxuICBcclxuICAvKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjODhmO1xyXG4gIH1cclxuICBcclxuICAvKiBzZWxlY3RlZCBsaW5rICovXHJcbiAgYTphY3RpdmUge1xyXG4gICAgY29sb3I6ICM4OGY7XHJcbiAgfVxyXG5gfTwvc3R5bGU+XHJcbiAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbnZhciBwcm9qc1N0cmluZyA9IFwiXCI7XHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgYWxsQmlnID0gW107XHJcbmxldCBhbGxTbWFsbCA9IFtdO1xyXG5cclxuY29uc3QgaW1nT3ZlcndhdGNoID0gXCIvc3RhdGljL21lZGlhL2ljb25zL293LnN2Z1wiXHJcbmNvbnN0IGltZ090aGVyID0gXCIvc3RhdGljL21lZGlhL2ljb25zL2hhbW1lci5wbmdcIlxyXG5jb25zdCBpbWdPd21uID0gXCIvc3RhdGljL21lZGlhL2ljb25zL293bW4uc3ZnXCJcclxuY29uc3QgaW1nU25vYm90ID0gXCIvc3RhdGljL21lZGlhL2ljb25zL3Nub2JvdC5wbmdcIlxyXG5cclxuZnVuY3Rpb24gYWRkUHJvaihmaWxlLCBuYW1lLCB0eXBlLCBjYXQsIGRlc2MsIGltZywgaWNvbil7XHJcbiAgICBsZXQgcCA9IG5ldyBQcm9qZWN0KHtcclxuICAgICAgICBmaWxlOiBmaWxlLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgY2F0OiBjYXQsXHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgIGltZzogaW1nLFxyXG4gICAgICAgIGljb246IGljb25cclxuICAgIH0pXHJcbiAgICBwcm9qZWN0cy5wdXNoKHApO1xyXG4gICAgYWxsU21hbGwucHVzaChwLmdldFNtYWxsKCkpO1xyXG4gICAgYWxsQmlnLnB1c2gocC5nZXRCaWcoKSk7XHJcbn1cclxuXHJcbmFkZFByb2ooXHJcbiAgICAnaHR0cHM6Ly9zbm9ib3QueHl6JyxcclxuICAgICdTbm9Cb3QnLFxyXG4gICAgJ0V4dGVybmFsJyxcclxuICAgICdub3JtYWwnLFxyXG4gICAgJ0Rpc2NvcmQgQm90IC0gU3RhcnRwYWdlIC0gRWNvc3lzdGVtJyxcclxuICAgIGltZ1Nub2JvdFxyXG4pXHJcblxyXG5hZGRQcm9qKFxyXG4gICAgJy9wcm9qZWN0cy9vdmVyd2F0Y2gnLFxyXG4gICAgJ092ZXJ3YXRjaCBIZXJvIEdlbmVyYXRvcicsXHJcbiAgICAnV2ViIFRvb2xzJyxcclxuICAgICdvdycsXHJcbiAgICAnVGhpcyBwYWdlIHdpbGwgY2hvb3NlIGFuIE92ZXJ3YXRjaCBoZXJvIGZvciB5b3UgdG8gcGxheSBlaXRoZXIgcmFuZG9tbHkgb3IgYmFzZWQgb24gY2hvc2VuIGNvbmRpdGlvbnMuJyxcclxuICAgIGltZ092ZXJ3YXRjaFxyXG4pXHJcblxyXG5hZGRQcm9qKFxyXG4gICAgJy9wcm9qZWN0cy9vd2xlYWtnZW4nLFxyXG4gICAgJ092ZXJ3YXRjaCBGYWtlIDRjaGFuIExlYWsgR2VuZXJhdG9yJyxcclxuICAgICdXZWIgVG9vbHMnLFxyXG4gICAgJ293JyxcclxuICAgICdUaGlzIHBhZ2Ugd2lsbCBnZW5lcmF0ZSBhIGZha2UgNGNoYW4tc3R5bGUgbGVhayBmb3IgT3ZlcndhdGNoIGNvbnRlbnQuJyxcclxuICAgIGltZ092ZXJ3YXRjaFxyXG4pXHJcblxyXG5hZGRQcm9qKFxyXG4gICAgJy9wcm9qZWN0cy9wYXRwYXRwYXQnLFxyXG4gICAgJ1BhdCBQYXQgUGF0JyxcclxuICAgICdXZWIgVG9vbHMnLFxyXG4gICAgJ293JyxcclxuICAgICdQYXQgUGF0IFBhdCEnLFxyXG4gICAgaW1nT3ZlcndhdGNoXHJcbilcclxuXHJcbmFkZFByb2ooXHJcbiAgICAnL3Byb2plY3RzL3dpbnRlcm1laScsXHJcbiAgICAnTWVpXFwncyBXaW50ZXIgRXhwZXJpZW5jZScsXHJcbiAgICAnV2ViIFRvb2xzJyxcclxuICAgICdvdycsXHJcbiAgICBcIkV4cGVyaWVuY2UgYW4gYWNjdXJhdGUgcmVjcmVhdGlvbiBvZiBNZWkncyBXaW50ZXIgV29uZGVybGFuZC5cIixcclxuICAgIGltZ092ZXJ3YXRjaFxyXG4pXHJcblxyXG5hZGRQcm9qKFxyXG4gICAgJy9wcm9qZWN0cy9vd0hlcm9Db25jZXB0JyxcclxuICAgICdPdmVyd2F0Y2ggUmFuZG9tIEhlcm8gQ29uY2VwdCBDcmVhdG9yJyxcclxuICAgICdXZWIgVG9vbHMnLFxyXG4gICAgJ293JyxcclxuICAgIFwiVGhpcyBwYWdlIHdpbGwgcmFuZG9tbHkgZ2VuZXJhdGUgYSBjb25jZXB0IE92ZXJ3YXRjaCBoZXJvLlwiLFxyXG4gICAgaW1nT3ZlcndhdGNoXHJcbilcclxuXHJcbmFkZFByb2ooXHJcbiAgICAnL3Byb2plY3RzL293ZXQnLFxyXG4gICAgJ092ZXJXYXRjaCBFeHRyYWN0IFRvb2xraXQnLFxyXG4gICAgJ1N0YW5kYWxvbmUnLFxyXG4gICAgJ293JyxcclxuICAgICdBIHNldCBvZiB0b29scyBmb3IgZXh0cmFjdGluZyBmaWxlcyBmcm9tIE92ZXJ3YXRjaCwgaW5jbHVkaW5nIGEgRGF0YVRvb2wgR1VJLicsXHJcbiAgICBpbWdPdmVyd2F0Y2hcclxuKVxyXG5cclxuXHJcblxyXG5hZGRQcm9qKFxyXG4gICAgJy9wcm9qZWN0cy9vd21uLWljb25zJyxcclxuICAgICdPV01OIENTUyBHZW5lcmF0b3InLFxyXG4gICAgJ1dlYiBUb29scycsXHJcbiAgICAnb3cnLFxyXG4gICAgJ0dlbmVyYXRlIHRoZSBDU1MgYW5kIHNwcml0ZXNoZWV0IGZvciBPV01OIHN1YnJlZGRpdHMuJyxcclxuICAgIGltZ093bW5cclxuKVxyXG5cclxuYWRkUHJvaihcclxuICAgICcvcHJvamVjdHMvbWVtZWdlbicsXHJcbiAgICAnTWVtZSBOYW1lIEdlbmVyYXRvcicsXHJcbiAgICAnV2ViIFRvb2xzJyxcclxuICAgICdub3JtYWwnLFxyXG4gICAgJ1RoaXMgd2lsbCBnZW5lcmF0ZSBhIG5hbWUgYmFzZWQgb24gbWVtZXMuJyxcclxuICAgIGltZ090aGVyXHJcbilcclxuXHJcbmFkZFByb2ooXHJcbiAgICAnL3Byb2plY3RzL2Zhbm5hbWVnZW4nLFxyXG4gICAgJ0ZhbnRhc3kgQ2hhcmFjdGVyIE5hbWUgR2VuZXJhdG9yJyxcclxuICAgICdXZWIgVG9vbHMnLFxyXG4gICAgJ25vcm1hbCcsXHJcbiAgICAnVGhpcyB3aWxsIGdlbmVyYXRlIGEgbmFtZSB3aXRoIGEgZmFudGFzeSBzdHlsZS4nLFxyXG4gICAgaW1nT3RoZXJcclxuKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHthcnI6IHByb2plY3RzLCBhbGxTbWFsbDogYWxsU21hbGwsIGFsbEJpZzogYWxsQmlnfTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Bakk\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\scripts\\\\projectsData.js */"));
  }

  getBig() {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: this.file,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3786744468" + " " + 'hoverListItem',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3786744468" + " " + "w3-bar w3-border-top w3-border-bottom w3-border-blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3786744468" + " " + `proj-cat-${this.cat}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("img", {
      src: this.img,
      style: {
        width: "35px",
        float: 'left',
        borderRadius: '50%'
      },
      className: "jsx-3786744468" + " " + "w3-bar-item w3-circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3786744468" + " " + "w3-bar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, this.getIcon(), __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: this.name
      },
      className: "jsx-3786744468" + " " + "w3-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3786744468",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-3786744468",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, this.desc))), " ", __jsx("hr", {
      className: "jsx-3786744468",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3786744468",
      __self: this
    }, "a.jsx-3786744468:link{color:#ddf;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3786744468:visited{color:#ddf;}a.jsx-3786744468:hover{color:#88f;}a.jsx-3786744468:active{color:#88f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmFra1xcRG9jdW1lbnRzXFxHaXRIdWJcXHllcm5lbW0teHl6XFxzY3JpcHRzXFxwcm9qZWN0c0RhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VrQixBQUlnQixBQU1BLEFBS0EsQUFLQSxXQWZVLEFBTXZCLEFBS0EsQUFLQSxrREFmQSIsImZpbGUiOiJDOlxcVXNlcnNcXEJha2tcXERvY3VtZW50c1xcR2l0SHViXFx5ZXJuZW1tLXh5elxcc2NyaXB0c1xccHJvamVjdHNEYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFiIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXHJcbmxpYnJhcnkuYWRkKGZhYiwgZmFzKTtcclxuY2xhc3MgUHJvamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5maWxlPSBkYXRhLmZpbGVcclxuICAgICAgICB0aGlzLm5hbWU9IGRhdGEubmFtZVxyXG4gICAgICAgIHRoaXMuY2F0PSBkYXRhLmNhdFxyXG4gICAgICAgIHRoaXMudHlwZT0gZGF0YS50eXBlXHJcbiAgICAgICAgdGhpcy5kZXNjPSBkYXRhLmRlc2NcclxuICAgICAgICB0aGlzLmltZz0gZGF0YS5pbWdcclxuICAgIH1cclxuXHJcbiAgICBnZXRJY29uKCl7XHJcbiAgICAgICAgbGV0IG1hcHBpbmcgPSB7ICAgICAgXHJcbiAgICAgICAgICAgICdXZWIgVG9vbHMnOiAnZ2xvYmUnLFxyXG4gICAgICAgICAgICAnU3RhbmRhbG9uZSc6ICdkb3dubG9hZCcsXHJcbiAgICAgICAgICAgICdFeHRlcm5hbCc6ICdleHRlcm5hbC1saW5rLWFsdCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoPEZvbnRBd2Vzb21lSWNvbiBpY29uPXttYXBwaW5nW3RoaXMudHlwZV19IGhlaWdodD0nMTYnLz4pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U21hbGwoKXtcclxuICAgICAgICByZXR1cm4gKDxkaXYga2V5PXt0aGlzLmZpbGV9IGNsYXNzTmFtZT0naG92ZXJMaXN0SXRlbSc+PExpbmsgaHJlZj17dGhpcy5maWxlfT48YT5cclxuICAgIHt0aGlzLmdldEljb24oKX0ge3RoaXMubmFtZX1cclxuICAgICAgICAgICAgPC9hPjwvTGluaz48c3R5bGUganN4PntgXHJcbiAgLyogdW52aXNpdGVkIGxpbmsgKi9cclxuICBhOmxpbmsge1xyXG4gICAgY29sb3I6ICNjY2Y7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHZpc2l0ZWQgbGluayAqL1xyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogI2NjZjtcclxuICB9XHJcbiAgXHJcbiAgLyogbW91c2Ugb3ZlciBsaW5rICovXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzg4ZjtcclxuICB9XHJcbiAgXHJcbiAgLyogc2VsZWN0ZWQgbGluayAqL1xyXG4gIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjODhmO1xyXG4gIH1cclxuYH08L3N0eWxlPjwvZGl2PilcclxuICAgIH1cclxuXHJcbiAgICBnZXRCaWcoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt0aGlzLmZpbGV9PjxhIGNsYXNzTmFtZT0naG92ZXJMaXN0SXRlbSc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhciB3My1ib3JkZXItdG9wIHczLWJvcmRlci1ib3R0b20gdzMtYm9yZGVyLWJsdWVcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9qLWNhdC0ke3RoaXMuY2F0fWB9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIDxpbWcgc3JjPXt0aGlzLmltZ30gY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW0gdzMtY2lyY2xlXCIgc3R5bGU9e3t3aWR0aDpcIjM1cHhcIiwgZmxvYXQ6J2xlZnQnLCBib3JkZXJSYWRpdXM6JzUwJSd9fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj57dGhpcy5nZXRJY29uKCl9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidzMtbGFyZ2VcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5uYW1lfX0+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9zcGFuPjxiciAvPlxyXG4gICAgICAgICAgPHNwYW4+e3RoaXMuZGVzY308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gPGhyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgLyogdW52aXNpdGVkIGxpbmsgKi9cclxuICBhOmxpbmsge1xyXG4gICAgY29sb3I6ICNkZGY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHZpc2l0ZWQgbGluayAqL1xyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogI2RkZjtcclxuICB9XHJcbiAgXHJcbiAgLyogbW91c2Ugb3ZlciBsaW5rICovXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzg4ZjtcclxuICB9XHJcbiAgXHJcbiAgLyogc2VsZWN0ZWQgbGluayAqL1xyXG4gIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjODhmO1xyXG4gIH1cclxuYH08L3N0eWxlPlxyXG4gICAgPC9hPjwvTGluaz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG52YXIgcHJvanNTdHJpbmcgPSBcIlwiO1xyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IGFsbEJpZyA9IFtdO1xyXG5sZXQgYWxsU21hbGwgPSBbXTtcclxuXHJcbmNvbnN0IGltZ092ZXJ3YXRjaCA9IFwiL3N0YXRpYy9tZWRpYS9pY29ucy9vdy5zdmdcIlxyXG5jb25zdCBpbWdPdGhlciA9IFwiL3N0YXRpYy9tZWRpYS9pY29ucy9oYW1tZXIucG5nXCJcclxuY29uc3QgaW1nT3dtbiA9IFwiL3N0YXRpYy9tZWRpYS9pY29ucy9vd21uLnN2Z1wiXHJcbmNvbnN0IGltZ1Nub2JvdCA9IFwiL3N0YXRpYy9tZWRpYS9pY29ucy9zbm9ib3QucG5nXCJcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2ooZmlsZSwgbmFtZSwgdHlwZSwgY2F0LCBkZXNjLCBpbWcsIGljb24pe1xyXG4gICAgbGV0IHAgPSBuZXcgUHJvamVjdCh7XHJcbiAgICAgICAgZmlsZTogZmlsZSxcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIGNhdDogY2F0LFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgZGVzYzogZGVzYyxcclxuICAgICAgICBpbWc6IGltZyxcclxuICAgICAgICBpY29uOiBpY29uXHJcbiAgICB9KVxyXG4gICAgcHJvamVjdHMucHVzaChwKTtcclxuICAgIGFsbFNtYWxsLnB1c2gocC5nZXRTbWFsbCgpKTtcclxuICAgIGFsbEJpZy5wdXNoKHAuZ2V0QmlnKCkpO1xyXG59XHJcblxyXG5hZGRQcm9qKFxyXG4gICAgJ2h0dHBzOi8vc25vYm90Lnh5eicsXHJcbiAgICAnU25vQm90JyxcclxuICAgICdFeHRlcm5hbCcsXHJcbiAgICAnbm9ybWFsJyxcclxuICAgICdEaXNjb3JkIEJvdCAtIFN0YXJ0cGFnZSAtIEVjb3N5c3RlbScsXHJcbiAgICBpbWdTbm9ib3RcclxuKVxyXG5cclxuYWRkUHJvaihcclxuICAgICcvcHJvamVjdHMvb3ZlcndhdGNoJyxcclxuICAgICdPdmVyd2F0Y2ggSGVybyBHZW5lcmF0b3InLFxyXG4gICAgJ1dlYiBUb29scycsXHJcbiAgICAnb3cnLFxyXG4gICAgJ1RoaXMgcGFnZSB3aWxsIGNob29zZSBhbiBPdmVyd2F0Y2ggaGVybyBmb3IgeW91IHRvIHBsYXkgZWl0aGVyIHJhbmRvbWx5IG9yIGJhc2VkIG9uIGNob3NlbiBjb25kaXRpb25zLicsXHJcbiAgICBpbWdPdmVyd2F0Y2hcclxuKVxyXG5cclxuYWRkUHJvaihcclxuICAgICcvcHJvamVjdHMvb3dsZWFrZ2VuJyxcclxuICAgICdPdmVyd2F0Y2ggRmFrZSA0Y2hhbiBMZWFrIEdlbmVyYXRvcicsXHJcbiAgICAnV2ViIFRvb2xzJyxcclxuICAgICdvdycsXHJcbiAgICAnVGhpcyBwYWdlIHdpbGwgZ2VuZXJhdGUgYSBmYWtlIDRjaGFuLXN0eWxlIGxlYWsgZm9yIE92ZXJ3YXRjaCBjb250ZW50LicsXHJcbiAgICBpbWdPdmVyd2F0Y2hcclxuKVxyXG5cclxuYWRkUHJvaihcclxuICAgICcvcHJvamVjdHMvcGF0cGF0cGF0JyxcclxuICAgICdQYXQgUGF0IFBhdCcsXHJcbiAgICAnV2ViIFRvb2xzJyxcclxuICAgICdvdycsXHJcbiAgICAnUGF0IFBhdCBQYXQhJyxcclxuICAgIGltZ092ZXJ3YXRjaFxyXG4pXHJcblxyXG5hZGRQcm9qKFxyXG4gICAgJy9wcm9qZWN0cy93aW50ZXJtZWknLFxyXG4gICAgJ01laVxcJ3MgV2ludGVyIEV4cGVyaWVuY2UnLFxyXG4gICAgJ1dlYiBUb29scycsXHJcbiAgICAnb3cnLFxyXG4gICAgXCJFeHBlcmllbmNlIGFuIGFjY3VyYXRlIHJlY3JlYXRpb24gb2YgTWVpJ3MgV2ludGVyIFdvbmRlcmxhbmQuXCIsXHJcbiAgICBpbWdPdmVyd2F0Y2hcclxuKVxyXG5cclxuYWRkUHJvaihcclxuICAgICcvcHJvamVjdHMvb3dIZXJvQ29uY2VwdCcsXHJcbiAgICAnT3ZlcndhdGNoIFJhbmRvbSBIZXJvIENvbmNlcHQgQ3JlYXRvcicsXHJcbiAgICAnV2ViIFRvb2xzJyxcclxuICAgICdvdycsXHJcbiAgICBcIlRoaXMgcGFnZSB3aWxsIHJhbmRvbWx5IGdlbmVyYXRlIGEgY29uY2VwdCBPdmVyd2F0Y2ggaGVyby5cIixcclxuICAgIGltZ092ZXJ3YXRjaFxyXG4pXHJcblxyXG5hZGRQcm9qKFxyXG4gICAgJy9wcm9qZWN0cy9vd2V0JyxcclxuICAgICdPdmVyV2F0Y2ggRXh0cmFjdCBUb29sa2l0JyxcclxuICAgICdTdGFuZGFsb25lJyxcclxuICAgICdvdycsXHJcbiAgICAnQSBzZXQgb2YgdG9vbHMgZm9yIGV4dHJhY3RpbmcgZmlsZXMgZnJvbSBPdmVyd2F0Y2gsIGluY2x1ZGluZyBhIERhdGFUb29sIEdVSS4nLFxyXG4gICAgaW1nT3ZlcndhdGNoXHJcbilcclxuXHJcblxyXG5cclxuYWRkUHJvaihcclxuICAgICcvcHJvamVjdHMvb3dtbi1pY29ucycsXHJcbiAgICAnT1dNTiBDU1MgR2VuZXJhdG9yJyxcclxuICAgICdXZWIgVG9vbHMnLFxyXG4gICAgJ293JyxcclxuICAgICdHZW5lcmF0ZSB0aGUgQ1NTIGFuZCBzcHJpdGVzaGVldCBmb3IgT1dNTiBzdWJyZWRkaXRzLicsXHJcbiAgICBpbWdPd21uXHJcbilcclxuXHJcbmFkZFByb2ooXHJcbiAgICAnL3Byb2plY3RzL21lbWVnZW4nLFxyXG4gICAgJ01lbWUgTmFtZSBHZW5lcmF0b3InLFxyXG4gICAgJ1dlYiBUb29scycsXHJcbiAgICAnbm9ybWFsJyxcclxuICAgICdUaGlzIHdpbGwgZ2VuZXJhdGUgYSBuYW1lIGJhc2VkIG9uIG1lbWVzLicsXHJcbiAgICBpbWdPdGhlclxyXG4pXHJcblxyXG5hZGRQcm9qKFxyXG4gICAgJy9wcm9qZWN0cy9mYW5uYW1lZ2VuJyxcclxuICAgICdGYW50YXN5IENoYXJhY3RlciBOYW1lIEdlbmVyYXRvcicsXHJcbiAgICAnV2ViIFRvb2xzJyxcclxuICAgICdub3JtYWwnLFxyXG4gICAgJ1RoaXMgd2lsbCBnZW5lcmF0ZSBhIG5hbWUgd2l0aCBhIGZhbnRhc3kgc3R5bGUuJyxcclxuICAgIGltZ090aGVyXHJcbilcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7YXJyOiBwcm9qZWN0cywgYWxsU21hbGw6IGFsbFNtYWxsLCBhbGxCaWc6IGFsbEJpZ307Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Bakk\\\\Documents\\\\GitHub\\\\yernemm-xyz\\\\scripts\\\\projectsData.js */")));
  }

}

var projsString = "";
let projects = [];
let allBig = [];
let allSmall = [];
const imgOverwatch = "/static/media/icons/ow.svg";
const imgOther = "/static/media/icons/hammer.png";
const imgOwmn = "/static/media/icons/owmn.svg";
const imgSnobot = "/static/media/icons/snobot.png";

function addProj(file, name, type, cat, desc, img, icon) {
  let p = new Project({
    file: file,
    name: name,
    cat: cat,
    type: type,
    desc: desc,
    img: img,
    icon: icon
  });
  projects.push(p);
  allSmall.push(p.getSmall());
  allBig.push(p.getBig());
}

addProj('https://snobot.xyz', 'SnoBot', 'External', 'normal', 'Discord Bot - Startpage - Ecosystem', imgSnobot);
addProj('/projects/overwatch', 'Overwatch Hero Generator', 'Web Tools', 'ow', 'This page will choose an Overwatch hero for you to play either randomly or based on chosen conditions.', imgOverwatch);
addProj('/projects/owleakgen', 'Overwatch Fake 4chan Leak Generator', 'Web Tools', 'ow', 'This page will generate a fake 4chan-style leak for Overwatch content.', imgOverwatch);
addProj('/projects/patpatpat', 'Pat Pat Pat', 'Web Tools', 'ow', 'Pat Pat Pat!', imgOverwatch);
addProj('/projects/wintermei', 'Mei\'s Winter Experience', 'Web Tools', 'ow', "Experience an accurate recreation of Mei's Winter Wonderland.", imgOverwatch);
addProj('/projects/owHeroConcept', 'Overwatch Random Hero Concept Creator', 'Web Tools', 'ow', "This page will randomly generate a concept Overwatch hero.", imgOverwatch);
addProj('/projects/owet', 'OverWatch Extract Toolkit', 'Standalone', 'ow', 'A set of tools for extracting files from Overwatch, including a DataTool GUI.', imgOverwatch);
addProj('/projects/owmn-icons', 'OWMN CSS Generator', 'Web Tools', 'ow', 'Generate the CSS and spritesheet for OWMN subreddits.', imgOwmn);
addProj('/projects/memegen', 'Meme Name Generator', 'Web Tools', 'normal', 'This will generate a name based on memes.', imgOther);
addProj('/projects/fannamegen', 'Fantasy Character Name Generator', 'Web Tools', 'normal', 'This will generate a name with a fantasy style.', imgOther);
/* harmony default export */ __webpack_exports__["default"] = ({
  arr: projects,
  allSmall: allSmall,
  allBig: allBig
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bakk\Documents\GitHub\yernemm-xyz\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ "react-adsense":
/*!********************************!*\
  !*** external "react-adsense" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-adsense");

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
//# sourceMappingURL=index.js.map