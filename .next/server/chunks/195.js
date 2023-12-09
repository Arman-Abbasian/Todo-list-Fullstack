"use strict";
exports.id = 195;
exports.ids = [195];
exports.modules = {

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

/***/ 2390:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interop_require_default = __webpack_require__(4770);
const _mongoose = /*#__PURE__*/ _interop_require_default._(__webpack_require__(1185));
/* PetSchema will correspond to a collection in your MongoDB database. */ const UserSchema = new _mongoose.default.Schema({
    name: {
        type: String,
        required: [
            true,
            "please enter the name"
        ],
        maxlength: [
            20,
            "Name cannot be more than 20 characters"
        ],
        minlength: [
            3,
            "Name cannot be less than 3 characters"
        ]
    },
    email: {
        type: String,
        email: [
            true,
            "email format is not true"
        ],
        required: [
            true,
            "please enter the email"
        ],
        maxlength: [
            30,
            "email cannot be more than 60 characters"
        ],
        unique: true
    },
    mobile: {
        type: String,
        required: [
            true,
            "please enter the mobile"
        ],
        minlength: [
            11,
            "mobile number is not true"
        ],
        maxlength: [
            11,
            "mobile number is not true"
        ],
        unique: true
    },
    password: {
        type: String,
        required: [
            true,
            "please enter the password"
        ]
    },
    token: {
        type: String,
        default: ""
    }
});
module.exports = _mongoose.default.models.User || _mongoose.default.model("User", UserSchema);


/***/ }),

/***/ 4770:
/***/ ((__unused_webpack_module, exports) => {



exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;