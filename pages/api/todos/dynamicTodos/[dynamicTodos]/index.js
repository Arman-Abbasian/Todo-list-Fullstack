import { getCookie } from 'cookies-next'
import dbConnect from '../../../../../lib/mongodb'
import Todo from '../../../../../models/todo.model'
import User from '../../../../../models/user.model'
import  jwt  from 'jsonwebtoken'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'PATCH':
      try {
        const [bearer,token]=getCookie('todoToken', { req, res }).split(" ")
        const {mobile}=jwt.verify(token,process.env.SECRET_KEY);
        const {_id}=await User.findOne({mobile});
        const {dynamicTodos}=req.query;
        const todo= await Todo.findOne({_id:dynamicTodos})
        if(!todo) res.status(404).json({success:false,message:"todo not found"})
        const updateTodo = await Todo.updateOne(
            { _id : dynamicTodos },
            { $set: { completed : !todo.completed } }
         );
         console.log(updateTodo)
         if(updateTodo.modifiedCount===0) res.status(404).json({success:false,message:"server error"})
         const todos=await Todo.find({userID:_id})
         console.log(todos)
        res.status(200).json({ success: true, message: "todo updated successfully",todos })
      } catch (error) {
        res.status(400).json({ success: false,message:error.message })
      }
      break;
      case 'PUT':
      try {
        const {dynamicTodos}=req.query;
        const {todoName,todoDate}=req.body
        const todo= await Todo.findOne({_id:dynamicTodos})
        if(!todo) res.status(404).json({success:false,message:"todo not found"})
        const updateTodo = await Todo.findOneAndUpdate(
          { "_id" : dynamicTodos },
          { $set: { "todoName" : todoName, "todoDate" : todoDate}}
        );
         if(updateTodo.modifiedCount===0) res.status(404).json({success:false,message:"server error"})
        res.status(200).json({ success: true, message: "todo updated successfully" })
      } catch (error) {
        res.status(400).json({ success: false,message:error.message })
      }
      break;
      case 'DELETE':
      try {
        const [bearer,token]=getCookie('todoToken', { req, res }).split(" ")
        const {mobile}=jwt.verify(token,process.env.SECRET_KEY);
        const {_id}=await User.findOne({mobile});
        const {dynamicTodos}=req.query;
        const todo= await Todo.findOne({_id:dynamicTodos})
        if(!todo) res.status(404).json({success:false,message:"todo not found"})
        const deleteTodo = await Todo.deleteOne({ _id : dynamicTodos });
         if(deleteTodo.modifiedCount===0) res.status(500).json({success:false,message:"server error"})
         const todos=await Todo.find({userID:_id})
        res.status(200).json({ success: true, message: "todo deleted successfully",todos })
      } catch (error) {
        res.status(400).json({ success: false,message:error.message })
      }
      break;
    default:
      res.status(400).json({ success: false,message:"error" })
      break
  }
}