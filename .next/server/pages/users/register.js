"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 2691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ShowErrorsForm = ({ message  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-red-700 flex gap-2",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: message
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowErrorsForm);


/***/ }),

/***/ 1541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_showErrorsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2691);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_FormikComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8057);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6201);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6514);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_models_user_model_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3207);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Register() {
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
            confirmPassword: ""
        },
        validateOnMount: true,
        onSubmit: function(values) {
            axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/users/register", values).then((res)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.toast.success("registered successfully");
                console.log("registered successfully");
                push("/users/login");
            }).catch((err)=>{
                console.log(err.response);
                setFormErrors([
                    err.response.data?.error?.message
                ]);
            });
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__.object({
            name: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("please enter the Name").min(3, "Name cannot be less than 3 characters").max(20, "Name cannot be more than 20 characters"),
            email: yup__WEBPACK_IMPORTED_MODULE_4__.string().email("email format is not true").required("please enter the email").max(30, "email cannot be more than 60 characters"),
            mobile: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("please enter the mobile").matches(/09[0-9]{9}/ig, "mobile is wrong"),
            password: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("please enter the password").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter and one number"),
            confirmPassword: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("please enter the confirm password").oneOf([
                yup__WEBPACK_IMPORTED_MODULE_4__.ref("password"),
                null
            ], "Password confirm is no match with password")
        })
    });
    console.log(formik.isValid);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container mx-auto max-w-md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                href: "/users/login",
                legacyBehavior: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "text-teal-500 hover:text-teal-800",
                    children: "login ?"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: formik.handleSubmit,
                className: "flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-3xl mb-3 text-center text-teal-800 mt-10",
                        children: "Register"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col gap-2 mb-8",
                        children: formErrors && formErrors.map((item, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_showErrorsForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                message: item
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormikComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "Full Name",
                        name: "name",
                        formik: formik
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormikComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "Email",
                        name: "email",
                        formik: formik
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormikComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "mobile",
                        name: "mobile",
                        formik: formik
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormikComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "password",
                        name: "password",
                        formik: formik
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormikComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "confirm Password",
                        name: "confirmPassword",
                        formik: formik
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "submit",
                        value: "register",
                        className: `bg-teal-500 rounded p-3 w-full mt-10 text-white ${formik.isValid ? "cursor-pointer" : "cursor-not-allowed"}`,
                        disabled: !formik.isValid
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps({ req , res  }) {
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_12__.getCookie)("todoToken", {
        req,
        res
    });
    if (token) {
        const [bearer, main] = token.split(" ");
        const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_13___default().verify(main, process.env.SECRET_KEY);
        const { mobile , email  } = payload;
        //connect to DB
        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
        //search the user based on mobile and email
        const user = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_10___default().findOne({
            mobile
        });
        if (user) {
            const compareResult = user.email === email;
            if (compareResult) {
                return {
                    redirect: {
                        permanent: false,
                        destination: "/todos"
                    },
                    props: {}
                };
            }
        }
    } else {
        return {
            props: {}
        };
    }
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,892,57], () => (__webpack_exec__(1541)));
module.exports = __webpack_exports__;

})();