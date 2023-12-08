import dbConnect from '../../../lib/mongodb'
import User from '../../../models/user.model.js'
import { userRegisterValidation } from '../../../validations/register.validation'
import  jwt  from 'jsonwebtoken'
import bcrypt from "bcrypt";


export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'POST':
      try {
        //validation with zod
    const response=userRegisterValidation(req.body)
    if (!response.success) {
    const { errors } = response.error;
    const returnedErrors=errors.map(item=>{
      return {fieldName:item.path[0],message:item.message}
    })
    console.log(returnedErrors)
    return res.status(400).json({
      success:"false",
      error: { message: "Invalid request", returnedErrors },
    });
  }
  //if there would be no problem then create data in db
  //1-create a token
  const payload={mobile:req.body.mobile,email:req.body.email}
      const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"365 days"})
      const {name,email,mobile,password}=req.body
      //2- hash the password
      const salt = bcrypt.genSaltSync(10)
      const hashPassword=bcrypt.hashSync(password,salt);
      const newUser={name,email,mobile,password:hashPassword,token}
      //3-check if the mobile is not registered before
      const existenceMobileCheck=await User.findOne({mobile:mobile})
      if(existenceMobileCheck){
        return res.status(400).json({
          error: { message: "mobile number is registered before" },
          });
      } 
      //4-check if the email is not registered before
      const existenceEmailCheck=await User.findOne({email})
      if(existenceEmailCheck){
        return res.status(400).json({
          error: { message: "email is registered before" },
          });
      } 
        const oneUser = await User.create(newUser) /* create a new model in the database */
        res.status(201).json({ success: true, data: "user added successfully" })
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