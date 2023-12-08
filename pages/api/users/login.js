import dbConnect from '../../../lib/mongodb'
import User from '../../../models/user.model.js'
import { userLoginValidation } from '../../../validations/login.validation';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'POST':
      try {
        //validation with zod
    const response=userLoginValidation(req.body)
    //if the validation is failed
    if (!response.success) {
    const { errors } = response.error;
    const returnedErrors=errors.map(item=>{
      return {fieldName:item.path[0],message:item.message}
    })
    return res.status(400).json({
    error: { message: "Invalid request", returnedErrors },
    });
  }
  //if there would be no problem then create data in db
      //1-find users based on mobile in collection
      const {mobile}=req.body;
      const user=await User.findOne({mobile})
      // if mobile number is not found
      if(!user) return res.status(400).json({ success: false ,message:"mobile or password is wrong"})
      //2- if mobile number is found but the password was not matched
      const compareResult=bcrypt.compareSync(req.body.password,user.password)
     if(!compareResult) return res.status(400).json({ success: false ,message:"mobile or password is wrong"})
       //3- set the token to the header and redirect to the main page
     return res.status(201).json({ 
        success: true, 
        data: {
          message:"user login successfully",
          token: `bearer ${user.token}`
        } 
      })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false ,message:error.message})
      }
      break
    default:
      res.status(400).json({ success: false,message:"error" })
      break
  }
}