"use strict";
(() => {
var exports = {};
exports.id = 729;
exports.ids = [729];
exports.modules = {

/***/ 2199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3207);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6514);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_models_user_model_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_FormikComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8057);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CraeteTodo = ({ findedUser  })=>{
    const user = JSON.parse(findedUser);
    const id = user._id;
    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [dbError, setDbError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_9__.useFormik)({
        initialValues: {
            todoName: "",
            todoDate: ""
        },
        validateOnMount: true,
        onSubmit: function(values, { resetForm  }) {
            axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/todos/staticTodos", {
                ...values,
                id
            }).then((res)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success(res.data.message);
                resetForm({
                    values: ""
                });
            }).catch((err)=>{
                setFormErrors(err?.response?.data?.error?.returnedErrors || []);
                setDbError(err?.response?.data?.message || []);
            });
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_10__.object({
            todoName: yup__WEBPACK_IMPORTED_MODULE_10__.string().required("please enter the todo name").min(3, "todo name should be at least 3 character").max(100, "todo name should be maximum 100 character"),
            todoDate: yup__WEBPACK_IMPORTED_MODULE_10__.date("please enter date format").required("please enter the todo date")
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container mx-auto max-w-md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                href: "/todos",
                legacyBehavior: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "text-teal-500 hover:text-teal-800",
                    children: "Todo list?"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: formErrors
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: dbError
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "flex flex-col gap-6",
                        onSubmit: formik.handleSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormikComponent__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                label: "todo name",
                                name: "todoName",
                                formik: formik
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormikComponent__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                label: "todo date",
                                name: "todoDate",
                                type: "date",
                                formik: formik
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "submit",
                                value: "Add",
                                className: `bg-teal-500 rounded p-3 w-full mt-10 text-white ${formik.isValid ? "cursor-pointer" : "cursor-not-allowed"}`,
                                disabled: !formik.isValid
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.Toaster, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CraeteTodo);
async function getServerSideProps({ req , res  }) {
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("todoToken", {
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
    const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(main, process.env.SECRET_KEY);
    const { mobile , email  } = payload;
    //connect to DB
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    //search the user based on mobile and email
    const user = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_6___default().findOne({
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
    const findedUser = JSON.stringify(user);
    return {
        props: {
            findedUser
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 5581:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,892,57], () => (__webpack_exec__(2199)));
module.exports = __webpack_exports__;

})();