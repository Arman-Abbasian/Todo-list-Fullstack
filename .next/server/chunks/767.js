"use strict";
exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 8767:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interop_require_default = __webpack_require__(4770);
const _mongoose = /*#__PURE__*/ _interop_require_default._(__webpack_require__(1185));
var Schema = _mongoose.default.Schema, ObjectId = Schema.ObjectId;
/* PetSchema will correspond to a collection in your MongoDB database. */ const TodoSchema = new _mongoose.default.Schema({
    todoName: {
        type: String,
        required: [
            true,
            "please enter the name"
        ],
        maxlength: [
            100,
            "todo name cannot be more than 100 characters"
        ],
        minlength: [
            3,
            "todo name cannot be less than 3 characters"
        ]
    },
    todoDate: {
        type: String,
        required: [
            true,
            "please enter the todo date"
        ]
    },
    completed: {
        type: Boolean,
        default: false
    },
    userID: {
        type: ObjectId,
        required: true
    }
});
module.exports = _mongoose.default.models.Todo || _mongoose.default.model("Todo", TodoSchema);


/***/ })

};
;