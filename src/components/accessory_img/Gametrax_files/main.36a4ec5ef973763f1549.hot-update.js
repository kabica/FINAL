webpackHotUpdate("main",{

/***/ "./src/components/Edit/Spotify.js":
/*!****************************************!*\
  !*** ./src/components/Edit/Spotify.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spotify_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spotify-player */ "./node_modules/react-spotify-player/dist/SpotifyPlayer.js");
/* harmony import */ var react_spotify_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spotify_player__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevinalexander/Desktop/lighthouse/Final/FINAL/src/components/Edit/Spotify.js";



function Spotify(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "spotify_card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "video_col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spotify_player__WEBPACK_IMPORTED_MODULE_1___default.a, {
    uri: "spotify:album:1TIUsv8qmYLpBEhvmBmyBk",
    size: props.size,
    view: props.view,
    theme: props.theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "Enter a playlist URL",
    value: props.state.SPOT1 || "",
    onChange: event => props.updateSpotify('SPOT1', event.target.value),
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "video_col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spotify_player__WEBPACK_IMPORTED_MODULE_1___default.a, {
    uri: "spotify:album:1TIUsv8qmYLpBEhvmBmyBk",
    size: props.size,
    view: props.view,
    theme: props.theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "Enter a playlist URL",
    value: props.state.SPOT2 || "",
    onChange: event => props.updateSpotify('SPOT2', event.target.value),
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "video_col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spotify_player__WEBPACK_IMPORTED_MODULE_1___default.a, {
    uri: "spotify:album:1TIUsv8qmYLpBEhvmBmyBk",
    size: props.size,
    view: props.view,
    theme: props.theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "vid_input3",
    placeholder: "Enter a playlist URL",
    value: props.state.SPOT3 || "",
    onChange: event => props.updateSpotify('SPOT3', event.target.value),
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Spotify);

/***/ })

})
//# sourceMappingURL=main.36a4ec5ef973763f1549.hot-update.js.map