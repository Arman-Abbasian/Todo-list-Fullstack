"use strict";
(() => {
var exports = {};
exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 9816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4205);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2390);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user_model_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validations_login_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1306);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_validations_login_validation__WEBPACK_IMPORTED_MODULE_2__]);
_validations_login_validation__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function handler(req, res) {
    const { method  } = req;
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(method){
        case "POST":
            try {
                //validation with zod
                const response = (0,_validations_login_validation__WEBPACK_IMPORTED_MODULE_2__/* .userLoginValidation */ .x)(req.body);
                //if the validation is failed
                if (!response.success) {
                    const { errors  } = response.error;
                    const returnedErrors = errors.map((item)=>{
                        return {
                            fieldName: item.path[0],
                            message: item.message
                        };
                    });
                    return res.status(400).json({
                        error: {
                            message: "Invalid request",
                            returnedErrors
                        }
                    });
                }
                //if there would be no problem then create data in db
                //1-find users based on mobile in collection
                const { mobile  } = req.body;
                const user = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_1___default().findOne({
                    mobile
                });
                // if mobile number is not found
                if (!user) return res.status(400).json({
                    success: false,
                    message: "mobile or password is wrong"
                });
                //2- if mobile number is found but the password was not matched
                const compareResult = bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compareSync(req.body.password, user.password);
                if (!compareResult) return res.status(400).json({
                    success: false,
                    message: "mobile or password is wrong"
                });
                //3- set the token to the header and redirect to the main page
                return res.status(201).json({
                    success: true,
                    data: {
                        message: "user login successfully",
                        token: `bearer ${user.token}`
                    }
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

/***/ 1306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ userLoginValidation)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function userLoginValidation(body) {
    const schema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        mobile: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().regex(/09[0-9]{9}/, {
            message: "Invalid mobile number!"
        }),
        password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nonempty({
            message: "please enter password"
        }).min(3, {
            message: "Must be 3 or more characters long"
        }).max(20, {
            message: "Must be 20 or fewer characters long"
        })
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
var __webpack_exports__ = __webpack_require__.X(0, [195], () => (__webpack_exec__(9816)));
module.exports = __webpack_exports__;

})();