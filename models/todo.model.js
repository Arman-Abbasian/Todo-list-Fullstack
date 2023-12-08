import mongoose from 'mongoose'

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
/* PetSchema will correspond to a collection in your MongoDB database. */
const TodoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: [true,"please enter the name"],
    maxlength: [100, 'todo name cannot be more than 100 characters'],
    minlength: [3, 'todo name cannot be less than 3 characters'],
  },
  todoDate: {
    type: String,
    required: [true,"please enter the todo date"],
  },
completed:{
  type:Boolean,
  default:false
},
userID:{
    type: ObjectId,
    required:true
}

})
module.exports = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)