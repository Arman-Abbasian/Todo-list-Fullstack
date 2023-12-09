"use strict";
(() => {
var exports = {};
exports.id = 95;
exports.ids = [95];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "cookies-next"
const external_cookies_next_namespaceObject = require("cookies-next");
// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(4205);
// EXTERNAL MODULE: ./models/todo.model.js
var todo_model = __webpack_require__(8767);
var todo_model_default = /*#__PURE__*/__webpack_require__.n(todo_model);
// EXTERNAL MODULE: ./models/user.model.js
var user_model = __webpack_require__(2390);
var user_model_default = /*#__PURE__*/__webpack_require__.n(user_model);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./pages/api/todos/dynamicTodos/[dynamicTodos]/index.js





async function handler(req, res) {
    const { method  } = req;
    await (0,mongodb/* default */.Z)();
    switch(method){
        case "PATCH":
            try {
                const [bearer, token] = (0,external_cookies_next_namespaceObject.getCookie)("todoToken", {
                    req,
                    res
                }).split(" ");
                const { mobile  } = external_jsonwebtoken_default().verify(token, process.env.SECRET_KEY);
                const { _id  } = await user_model_default().findOne({
                    mobile
                });
                const { dynamicTodos  } = req.query;
                const todo = await todo_model_default().findOne({
                    _id: dynamicTodos
                });
                if (!todo) res.status(404).json({
                    success: false,
                    message: "todo not found"
                });
                const updateTodo = await todo_model_default().updateOne({
                    _id: dynamicTodos
                }, {
                    $set: {
                        completed: !todo.completed
                    }
                });
                console.log(updateTodo);
                if (updateTodo.modifiedCount === 0) res.status(404).json({
                    success: false,
                    message: "server error"
                });
                const todos = await todo_model_default().find({
                    userID: _id
                });
                console.log(todos);
                res.status(200).json({
                    success: true,
                    message: "todo updated successfully",
                    todos
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: error.message
                });
            }
            break;
        case "PUT":
            try {
                const { dynamicTodos  } = req.query;
                const { todoName , todoDate  } = req.body;
                const todo = await todo_model_default().findOne({
                    _id: dynamicTodos
                });
                if (!todo) res.status(404).json({
                    success: false,
                    message: "todo not found"
                });
                const updateTodo = await todo_model_default().findOneAndUpdate({
                    "_id": dynamicTodos
                }, {
                    $set: {
                        "todoName": todoName,
                        "todoDate": todoDate
                    }
                });
                if (updateTodo.modifiedCount === 0) res.status(404).json({
                    success: false,
                    message: "server error"
                });
                res.status(200).json({
                    success: true,
                    message: "todo updated successfully"
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: error.message
                });
            }
            break;
        case "DELETE":
            try {
                const [bearer, token] = (0,external_cookies_next_namespaceObject.getCookie)("todoToken", {
                    req,
                    res
                }).split(" ");
                const { mobile  } = external_jsonwebtoken_default().verify(token, process.env.SECRET_KEY);
                const { _id  } = await user_model_default().findOne({
                    mobile
                });
                const { dynamicTodos  } = req.query;
                const todo = await todo_model_default().findOne({
                    _id: dynamicTodos
                });
                if (!todo) res.status(404).json({
                    success: false,
                    message: "todo not found"
                });
                const deleteTodo = await todo_model_default().deleteOne({
                    _id: dynamicTodos
                });
                if (deleteTodo.modifiedCount === 0) res.status(500).json({
                    success: false,
                    message: "server error"
                });
                const todos = await todo_model_default().find({
                    userID: _id
                });
                res.status(200).json({
                    success: true,
                    message: "todo deleted successfully",
                    todos
                });
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
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [195,767], () => (__webpack_exec__(41)));
module.exports = __webpack_exports__;

})();