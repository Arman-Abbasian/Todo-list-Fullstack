"use strict";
(() => {
var exports = {};
exports.id = 204;
exports.ids = [204];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 7984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4205);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2390);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user_model_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validations_register_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4082);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_validations_register_validation__WEBPACK_IMPORTED_MODULE_2__]);
_validations_register_validation__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function handler(req, res) {
    const { method  } = req;
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(method){
        case "POST":
            try {
                //validation with zod
                const response = (0,_validations_register_validation__WEBPACK_IMPORTED_MODULE_2__/* .userRegisterValidation */ .l)(req.body);
                if (!response.success) {
                    const { errors  } = response.error;
                    const returnedErrors = errors.map((item)=>{
                        return {
                            fieldName: item.path[0],
                            message: item.message
                        };
                    });
                    console.log(returnedErrors);
                    return res.status(400).json({
                        success: "false",
                        error: {
                            message: "Invalid request",
                            returnedErrors
                        }
                    });
                }
                //if there would be no problem then create data in db
                //1-create a token
                const payload = {
                    mobile: req.body.mobile,
                    email: req.body.email
                };
                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign(payload, process.env.SECRET_KEY, {
                    expiresIn: "365 days"
                });
                const { name , email , mobile , password  } = req.body;
                //2- hash the password
                const salt = bcrypt__WEBPACK_IMPORTED_MODULE_4___default().genSaltSync(10);
                const hashPassword = bcrypt__WEBPACK_IMPORTED_MODULE_4___default().hashSync(password, salt);
                const newUser = {
                    name,
                    email,
                    mobile,
                    password: hashPassword,
                    token
                };
                //3-check if the mobile is not registered before
                const existenceMobileCheck = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_1___default().findOne({
                    mobile: mobile
                });
                if (existenceMobileCheck) {
                    return res.status(400).json({
                        error: {
                            message: "mobile number is registered before"
                        }
                    });
                }
                //4-check if the email is not registered before
                const existenceEmailCheck = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_1___default().findOne({
                    email
                });
                if (existenceEmailCheck) {
                    return res.status(400).json({
                        error: {
                            message: "email is registered before"
                        }
                    });
                }
                const oneUser = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_1___default().create(newUser);
                /* create a new model in the database */ res.status(201).json({
                    success: true,
                    data: "user added successfully"
                });
            } catch (error) {
                console.log(error);
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ userRegisterValidation)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function userRegisterValidation(body) {
    const schema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nonempty({
            message: "please enter a name"
        }).min(3, {
            message: "Must be 3 or more characters long"
        }).max(20, {
            message: "Must be 20 or fewer characters long"
        }),
        email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nonempty({
            message: "please enter the email"
        }).email({
            message: "this is not a email"
        }),
        mobile: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nonempty({
            message: "please enter the mobile number"
        }).regex(/09[0-9]{9}/, "Invalid moblie Number!"),
        password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nonempty("please enter a password").min(3, {
            message: "Must be 3 or more characters long"
        }).max(20, {
            message: "Must be 20 or fewer characters long"
        }),
        confirmPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nonempty("please enter a password confirmation").min(3, {
            message: "Must be 3 or more characters long"
        }).max(20, {
            message: "Must be 20 or fewer characters long"
        })
    }).superRefine(({ confirmPassword , password  }, ctx)=>{
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match"
            });
        }
    });
    const response = schema.safeParse(body);
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [195], () => (__webpack_exec__(7984)));
module.exports = __webpack_exports__;

})();