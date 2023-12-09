"use strict";
(() => {
var exports = {};
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7507:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/adapters/headers.js");

/***/ }),

/***/ 2006:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/adapters/request-cookies.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/cookies.js");

/***/ }),

/***/ 4205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* This is a database connection function*/ 
const connection = {};
async function dbConnect() {
    /* check if we have connection to our databse*/ if (connection.isConnected) {
        console.log("db connected");
        return;
    }
    /* connecting to our database */ const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log({
        dbCondition: db.connections[0].readyState
    });
    connection.isConnected = db.connections[0].readyState;
    console.log({
        connection
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 7453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/client/components/headers.js
var headers = __webpack_require__(1225);
// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(4205);
// EXTERNAL MODULE: ./models/todo.model.js
var todo_model = __webpack_require__(8767);
var todo_model_default = /*#__PURE__*/__webpack_require__.n(todo_model);
;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/todos/staticTodos/index.js




async function handler(req, res) {
    const { method  } = req;
    await (0,mongodb/* default */.Z)();
    switch(method){
        case "GET":
            try {
                const todos = await todo_model_default().find({});
                /* find all the data in our database */ res.status(200).json({
                    success: true,
                    data: todos
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: error.message
                });
            }
            break;
        case "POST":
            try {
                const { todoName , todoDate , id  } = req.body;
                const userID = new external_mongodb_namespaceObject.ObjectId(id);
                const newTodo = {
                    todoName,
                    todoDate,
                    userID
                };
                const conc = await todo_model_default().create(newTodo);
                if (!conc) {
                    res.status(500).json({
                        success: false,
                        message: "server error"
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        message: "todo created successfully"
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: error.message
                });
            }
            break;
        default:
            res.status(400).json({
                success: false,
                message: "error"
            });
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [997,767], () => (__webpack_exec__(7453)));
module.exports = __webpack_exports__;

})();