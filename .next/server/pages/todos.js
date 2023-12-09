"use strict";
(() => {
var exports = {};
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 6738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Todo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: ./components/Todo.jsx




const Todoo = ({ id , todoName , remainedTime , completed , onChangeCondition , onTodoDelete  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `grid grid-cols-6 p-4 shadow-md rounded-md gap-6 ${completed ? "bg-teal-700 " : "bg-teal-300"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between item-center flex-1 col-span-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: todoName
                    }),
                    completed ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "done"
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "flex items-center gap-x-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineHourglass, {
                                className: "icon"
                            }),
                            remainedTime
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-end items-center gap-4 col-span-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-center items-center",
                        children: [
                            completed && /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineCheck, {
                                className: "icon cursor-pointer",
                                onClick: onChangeCondition
                            }),
                            !completed && /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdCheckBoxOutlineBlank, {
                                className: "icon cursor-pointer",
                                onClick: onChangeCondition
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        legacyBehavior: true,
                        href: `/todos/${id}`,
                        className: "flex justify-center items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineEdit, {
                                className: "icon cursor-pointer"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-center items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineDelete, {
                            className: "icon cursor-pointer",
                            onClick: onTodoDelete
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Todo = (Todoo);


/***/ }),

/***/ 4816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3207);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6514);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_user_model_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2471);
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_models_todo_model__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6738);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6201);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_10__]);
([axios__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Todos = ({ userTodos , name  })=>{
    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
        data: JSON.parse(userTodos),
        loading: false,
        error: null
    });
    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
        condition: "All"
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const remainedTime = (todoDate)=>{
        const remainedDayy = (new Date(todoDate).getTime() - Date.now()) / 86400000;
        const remainedDay = remainedDayy + 1;
        if (remainedDay + 1 < 0) return "expired";
        const day = Math.floor(remainedDay);
        const hour = Math.floor(remainedDay % 1 * 24);
        return `${day}d:${hour}h`;
    };
    const changeConditionHandler = (id)=>{
        axios__WEBPACK_IMPORTED_MODULE_9__["default"].patch(`/api/todos/dynamicTodos/${id}`).then((res)=>{
            setTodos({
                ...todos,
                data: res.data.todos
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_10__.toast.success("changed");
        }).catch((err)=>{
            setTodos({
                ...todos,
                error: err
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_10__.toast.error(err.message);
        });
    };
    const todoDeleteHandler = (id)=>{
        axios__WEBPACK_IMPORTED_MODULE_9__["default"]["delete"](`/api/todos/dynamicTodos/${id}`).then((res)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_10__.toast.success(res.data.message);
            setTodos({
                ...todos,
                data: res.data.todos
            });
        }).catch((err)=>{
            setTodos({
                ...todos,
                error: err
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_10__.toast.error(err.message);
        });
    };
    const logoutHandler = ()=>{
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.deleteCookie)("todoToken");
        router.reload(window.location.pathname);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col gap-2 container mx-auto max-w-2xl",
        children: todos.loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "loading"
        }) : todos.data.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/todos/create",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "text-teal-500 hover:text-teal-800",
                        children: "Add new Todo?"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "no todo"
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-3 w-full",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/todos/create",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "text-teal-500 hover:text-teal-800",
                                children: "Add new Todo?"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineLogout, {
                            className: "icon cursor-pointer",
                            onClick: logoutHandler
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-10 flex flex-col gap-6",
                    children: [
                        todos.data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Todo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                todoName: item.todoName,
                                id: item._id,
                                remainedTime: remainedTime(item.todoDate),
                                completed: item.completed,
                                onChangeCondition: ()=>changeConditionHandler(item._id),
                                onCompleteHandler: ()=>completeHandler(item._id),
                                onTodoDelete: ()=>todoDeleteHandler(item._id)
                            }, item._id)),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_10__.Toaster, {})
                    ]
                })
            ]
        })
    });
};
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
    const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(main, process.env.SECRET_KEY);
    const { mobile , email  } = payload;
    //connect to DB
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    //search the user based on mobile and email
    const user = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_5___default().findOne({
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
    const _id = user._id;
    const findedUserr = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_5___default().find({
        _id
    });
    const name = findedUserr[0].name;
    console.log({
        name
    });
    const todos = await _models_todo_model__WEBPACK_IMPORTED_MODULE_6___default().find({
        userID: _id
    });
    const userTodos = JSON.stringify(todos);
    return {
        props: {
            userTodos,
            name
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,892,471], () => (__webpack_exec__(4816)));
module.exports = __webpack_exports__;

})();