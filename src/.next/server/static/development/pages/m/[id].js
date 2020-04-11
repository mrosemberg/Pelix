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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Proyectos\\Web\\Series-\\Series-\\src\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Header() {
  return __jsx("nav", {
    className: "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "https://fontmeme.com/permalink/200411/65857c64854c31a8d0ca5720121909ae.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  })));
}
;

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "C:\\Proyectos\\Web\\Series-\\Series-\\src\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}), __jsx("section", {
  className: "content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/m/[id].js":
/*!*************************!*\
  !*** ./pages/m/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Proyectos\\Web\\Series-\\Series-\\src\\pages\\m\\[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Movie = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2916085537",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');body{background-color:#181818;background-image:linear-gradient(to bottom right,#b30077,#ff470f);background-image:none;color:#fff;height:100%;margin:0;font-family:'Noto Sans',sans-serif;}.navbar{background:#000;display:block;padding:12px 0;z-index:500;}.navbar img{width:120px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0;}.content{background-image:url(\"https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/9150ecb7-5e45-4460-a05e-187e84695eac/PY-es-20200302-popsignuptwoweeks-perspective_alpha_website_medium.jpg\");background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;}.basic-grid{background-color:rgba(0,0,0,0.55);display:grid;gap:3rem;grid-template-columns:repeat(auto-fit,minmax(220px,2fr));}.card{margin-top:10px;margin-left:5px;margin-right:5px;padding:1px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1rem;color:#fff;background-color:rgba(0,0,0,0.65);box-shadow:rgba(3,8,20,0.1) 0px 0.15rem 0.5rem,rgba(2,8,20,0.1) 0px 0.075rem 0.175rem;height:100%;border-radius:4px;-webkit-transition:all 500ms;transition:all 500ms;overflow:hidden;background-size:cover;background-position:center;background-repeat:no-repeat;}.card:hover{box-shadow:rgba(2,8,20,0.1) 0px 0.35em 1.175em,rgba(2,8,20,0.08) 0px 0.175em 0.5em;-webkit-transform:translateY(-3px) scale(1.0);-ms-transform:translateY(-3px) scale(1.0);transform:translateY(-3px) scale(1.0);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm95ZWN0b3NcXFdlYlxcU2VyaWVzLVxcU2VyaWVzLVxcc3JjXFxwYWdlc1xcbVxcW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLdUIsQUFFd0YsQUFHaEQsQUFVVCxBQU9KLEFBT3VNLEFBUTlLLEFBT3JCLEFBc0IwRSxZQTNDdkUsSUFQTCxBQTZCRSxTQXZDb0QsS0FXckQsRUE2QkUsRUFSSixXQXBCRCxFQXFCSCxFQVFHLE9BUCtDLENBckIvRCxJQTZCaUIsc0JBbUJ5QixRQTVEaEIsY0FpQmIsUUFoQkUsQUFpQ2YsQ0FoQmMsVUFoQkUsQUFpQmhCLFdBdUIwQixDQXZDYixTQUMyQixtQ0FDeEMsNkJBd0RBLEVBdENnQyxFQW9CTCwwQkFuQkksMkJBQ0MsNEJBQ04sa0JBa0JILElBakJ2Qix5RkFrQm1CLGVBQ0osV0FDMEIsa0NBQ3dELHNGQUNqRixZQUNNLGtCQUNHLGtEQUNMLGdCQUNNLHNCQUNLLDJCQUNDLDRCQUNoQyIsImZpbGUiOiJDOlxcUHJveWVjdG9zXFxXZWJcXFNlcmllcy1cXFNlcmllcy1cXHNyY1xccGFnZXNcXG1cXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmNvbnN0IE1vdmllID0gcHJvcHMgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NhbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjYjMwMDc3LCAjZmY0NzBmKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogNTAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXZiYXIgaW1ne1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYXNzZXRzLm5mbHhleHQuY29tL2ZmZS9zaXRldWkvdmx2My8zYjQ4ZjQyOC0yNGVkLTQ2OTItYmIwNC1iYzc3NzE4NTQxMzEvOTE1MGVjYjctNWU0NS00NDYwLWEwNWUtMTg3ZTg0Njk1ZWFjL1BZLWVzLTIwMjAwMzAyLXBvcHNpZ251cHR3b3dlZWtzLXBlcnNwZWN0aXZlX2FscGhhX3dlYnNpdGVfbWVkaXVtLmpwZ1wiKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJhc2ljLWdyaWR7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdhcDogM3JlbTtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAyZnIpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDMsIDgsIDIwLCAwLjEpIDBweCAwLjE1cmVtIDAuNXJlbSwgcmdiYSgyLCA4LCAyMCwgMC4xKSAwcHggMC4wNzVyZW0gMC4xNzVyZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIsIDgsIDIwLCAwLjEpIDBweCAwLjM1ZW0gMS4xNzVlbSwgcmdiYSgyLCA4LCAyMCwgMC4wOCkgMHB4IDAuMTc1ZW0gMC41ZW07XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWMtZ3JpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8aDE+e3Byb3BzLnNob3cubmFtZX08L2gxPlxyXG4gICAgICAgIDxzcGFuPntwcm9wcy5zaG93LnN1bW1hcnkucmVwbGFjZSgvPFsvXT9bcGJdPi9nLCAnJyl9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICB7cHJvcHMuc2hvdy5pbWFnZSA/IDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0gLz4gOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5Nb3ZpZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApO1xyXG4gIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBzaG93OiAke3Nob3cubmFtZX1gKTtcclxuXHJcbiAgcmV0dXJuIHsgc2hvdyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWU7Il19 */\n/*@ sourceURL=C:\\\\Proyectos\\\\Web\\\\Series-\\\\Series-\\\\src\\\\pages\\\\m\\\\[id].js */"), __jsx("div", {
  className: "jsx-2916085537" + " " + "basic-grid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-2916085537" + " " + "card",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 7
  }
}, __jsx("h1", {
  className: "jsx-2916085537",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }
}, props.show.name), __jsx("span", {
  className: "jsx-2916085537",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }
}, props.show.summary.replace(/<[/]?[pb]>/g, ''))), props.show.image ? __jsx("img", {
  src: props.show.image.medium,
  className: "jsx-2916085537",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 27
  }
}) : null));

Movie.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show: ${show.name}`);
  return {
    show
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/m/[id].js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Proyectos\Web\Series-\Series-\src\pages\m\[id].js */"./pages/m/[id].js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map