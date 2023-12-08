import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"please enter the name"],
    maxlength: [20, 'Name cannot be more than 20 characters'],
    minlength: [3, 'Name cannot be less than 3 characters'],
  },
  email: {
    type: String,
    email:[true,"email format is not true"],
    required: [true,"please enter the email"],
    maxlength: [30, "email cannot be more than 60 characters"],
    unique:true
  },
  mobile:{
  type: String,
  required: [true,"please enter the mobile"],
  minlength: [11, "mobile number is not true"],
  maxlength: [11, "mobile number is not true"],
  unique:true
},
password:{
  type: String,
  required: [true,"please enter the password"],
},
  token:{
    type:String,
    default:""
  },
})
module.exports = mongoose.models.User || mongoose.model('User', UserSchema)