webpackHotUpdate("static/development/pages/confession.js",{

/***/ "./components/ConfessionParagraph.js":
/*!*******************************************!*\
  !*** ./components/ConfessionParagraph.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ConfessionParagraph = function ConfessionParagraph(_ref) {
  var paragraph = _ref.paragraph,
      index = _ref.index;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeScripture = _useState2[0],
      setActiveScripture = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1576889090"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1576889090"
  }, "Chapter ", index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1576889090"
  }, paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: section.superscript,
      className: "jsx-1576889090"
    }, section.text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#ref-".concat(index, "-").concat(section.superscript),
      id: "".concat(index, "-").concat(section.superscript),
      className: "jsx-1576889090" + " " + "superscript"
    }, "".concat(section.superscript, " ")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1576889090" + " " + "scripture-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1576889090" + " " + "nomargin"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1576889090"
  }, "References (click to view)")), paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: section.superscript,
      className: "jsx-1576889090" + " " + "nomargin"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(index, "-").concat(section.superscript),
      id: "ref-".concat(index, "-").concat(section.superscript),
      className: "jsx-1576889090"
    }, "^ "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-1576889090"
    }, section.superscript, "."), " ", section.scriptures.map(function (scripture) {
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()("scripture", {
        "scripture--active": scripture === activeScripture
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        key: scripture,
        onClick: function onClick() {
          return setActiveScripture();
        },
        className: "jsx-1576889090" + " " + (classNames || "")
      }, scripture);
    }).join(", "));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1576889090" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-1576889090"
  }, "Click on a Scripture above to view passage"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1576889090",
    css: "p.jsx-1576889090{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.first.jsx-1576889090{margin-top:8px;}.nomargin.jsx-1576889090{margin-top:0;}a.jsx-1576889090{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}@media screen and (max-width:768px){p.jsx-1576889090{font-size:18px;margin-top:21px;}}.superscript.jsx-1576889090{color:#689f38;font-size:15px;margin-left:1px;position:relative;top:-6px;}.scripture-section.jsx-1576889090{border:1px solid #bdbdbd;margin-top:20px;padding:5px 10px;}.scripture.jsx-1576889090{color:rgba(0,0,0,0.54);cursor:pointer;margin-right:5px;}.scripture--active.jsx-1576889090{color:rgba(0,0,0,0.84);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db25mZXNzaW9uUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFa0IsQUFHMEIsQUFPQSxBQUlGLEFBSUMsQUFNRyxBQU1ILEFBUVcsQUFNQyxBQU1BLGFBbkM1QixDQUl1QixBQVlOLENBM0JFLEFBT25CLEFBY29CLFFBb0JILEFBTWpCLEVBWmtCLElBUEEsRUFOaEIsQ0FyQlMsTUF5Q1EsR0F4Q0QsQUFrQ0MsSUFQQyxVQWNwQixFQXhDQSxDQWtDQSxLQVBXLENBZFgsUUFlQSIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvQ29uZmVzc2lvblBhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBDb25mZXNzaW9uUGFyYWdyYXBoID0gKHsgcGFyYWdyYXBoLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVTY3JpcHR1cmUsIHNldEFjdGl2ZVNjcmlwdHVyZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDQ+Q2hhcHRlciB7aW5kZXggKyAxfTwvaDQ+XG4gICAgICA8cD5cbiAgICAgICAge3BhcmFncmFwaC5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGtleT17c2VjdGlvbi5zdXBlcnNjcmlwdH0+XG4gICAgICAgICAgICAgIHtzZWN0aW9uLnRleHR9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YCNyZWYtJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgICAgaWQ9e2Ake2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdXBlcnNjcmlwdFwiXG4gICAgICAgICAgICAgID57YCR7c2VjdGlvbi5zdXBlcnNjcmlwdH0gYH08L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyaXB0dXJlLXNlY3Rpb25cIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIj5cbiAgICAgICAgICA8c3Ryb25nPlJlZmVyZW5jZXMgKGNsaWNrIHRvIHZpZXcpPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAge3BhcmFncmFwaC5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxwIGtleT17c2VjdGlvbi5zdXBlcnNjcmlwdH0gY2xhc3NOYW1lPVwibm9tYXJnaW5cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgIyR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICAgIGlkPXtgcmVmLSR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2BeIGB9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHN0cm9uZz57c2VjdGlvbi5zdXBlcnNjcmlwdH0uPC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAgICB7c2VjdGlvbi5zY3JpcHR1cmVzXG4gICAgICAgICAgICAgICAgLm1hcChzY3JpcHR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNzcyhcInNjcmlwdHVyZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwic2NyaXB0dXJlLS1hY3RpdmVcIjogc2NyaXB0dXJlID09PSBhY3RpdmVTY3JpcHR1cmVcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGtleT17c2NyaXB0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVTY3JpcHR1cmUoKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzY3JpcHR1cmV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgPGVtPkNsaWNrIG9uIGEgU2NyaXB0dXJlIGFib3ZlIHRvIHZpZXcgcGFzc2FnZTwvZW0+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ODtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maXJzdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vbWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnN1cGVyc2NyaXB0IHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdHVyZS1zZWN0aW9uIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0dXJlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0dXJlLS1hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25mZXNzaW9uUGFyYWdyYXBoO1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ConfessionParagraph.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfessionParagraph);

/***/ })

})
//# sourceMappingURL=confession.js.bb891fc234b1532ca0f2.hot-update.js.map