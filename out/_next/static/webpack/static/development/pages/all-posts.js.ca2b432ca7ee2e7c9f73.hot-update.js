webpackHotUpdate("static/development/pages/all-posts.js",{

/***/ "./pages/all-posts.js":
/*!****************************!*\
  !*** ./pages/all-posts.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 35px;\n  letter-spacing: 0.6em;\n  text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  font-size: 34px;\n  line-height: 1.15;\n  padding: 0 20px;\n\n  @media screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  font-size: 34px;\n  line-height: 1.15;\n\n  @media screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject2());
var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var PostContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject5());

var AllPosts = function AllPosts(_ref) {
  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;
  var title = "".concat(posts.length, " Bible Questions and Answers | Bible Answers");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__["AmpContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      marginBottom: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, posts.length, " Bible Questions and Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Subtitle, null, "Browse all of our questions and answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null, "...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      padding: 0,
      width: "initial"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, null, "All posts"), posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      key: post.url,
      href: post.url,
      style: {
        textDecoration: "none"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListItem__WEBPACK_IMPORTED_MODULE_6__["AmpListItem"], post));
  })));
};

AllPosts.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://bibleanswersapi.herokuapp.com/all_posts");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          data.sort(function (a, b) {
            return new Date(b.date_added) - new Date(a.date_added);
          });
          return _context.abrupt("return", {
            posts: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (AllPosts);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/all-posts")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=all-posts.js.ca2b432ca7ee2e7c9f73.hot-update.js.map