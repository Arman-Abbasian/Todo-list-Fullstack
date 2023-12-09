"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4205);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2390);
/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user_model_js__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    const { method  } = req;
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(method){
        case "GET":
            try {
                const users = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_1___default().find({});
                /* find all the data in our database */ res.status(200).json({
                    success: true,
                    data: users
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: error.message
                });
            }
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [195], () => (__webpack_exec__(7186)));
module.exports = __webpack_exports__;

})();