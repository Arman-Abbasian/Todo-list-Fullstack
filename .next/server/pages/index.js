"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3207);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6514);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_user_model__WEBPACK_IMPORTED_MODULE_4__);





function Home() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Todo App"
        })
    });
}
async function getServerSideProps({ req , res  }) {
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("todoToken", {
        req,
        res
    });
    if (!token) {
        return {
            redirect: {
                permanent: false,
                destination: "/users/login"
            },
            props: {}
        };
    }
    const [bearer, main] = token.split(" ");
    const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(main, process.env.SECRET_KEY);
    const { mobile , email  } = payload;
    //connect to DB
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    //search the user based on mobile and email
    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_4___default().findOne({
        mobile
    });
    // if mobile number is not found
    if (!user) {
        return {
            redirect: {
                permanent: false,
                destination: "/users/login"
            },
            props: {}
        };
    }
    //2- check if the userEmail in DB match with the email in token
    const compareResult = user.email === email;
    if (!compareResult) {
        return {
            redirect: {
                permanent: false,
                destination: "/users/login"
            },
            props: {}
        };
    }
    //3- set the token to the header and redirect to the main page
    return {
        redirect: {
            permanent: false,
            destination: "/todos"
        },
        props: {}
    };
}


/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {



exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [892], () => (__webpack_exec__(6616)));
module.exports = __webpack_exports__;

})();