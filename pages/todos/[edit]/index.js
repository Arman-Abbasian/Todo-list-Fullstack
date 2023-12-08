import { getCookie } from "cookies-next";
import Link from "next/link";
import  jwt  from 'jsonwebtoken'
import dbConnect from "../../../lib/mongodb";
import User from '../../../models/user.model'
import Todo from '../../../models/todo.model'
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { inputDateFormat } from "../../../utils/inputDate.Format";
import axios from "axios";
import { useRouter } from "next/router";
import FormComponent from "../../../components/FormComponent";
import { AiOutlineArrowLeft} from "react-icons/ai";

const EditTodo = ({findedTodo}) => {
  const router=useRouter();
    const todo=JSON.parse(findedTodo);
    const id=todo._id;

    const [formData,setFormData]=useState({todoName:todo.todoName,todoDate:todo.todoDate});
    console.log(formData)
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put(`/api/todos/dynamicTodos/${id}`,{...formData,id})
        .then(res=>{
          toast.success(res.data.message)
          router.push("/todos")
        })
        .catch(err=>console.log(err))
    }
    return ( 
        <div className="container mx-auto max-w-md">
          <Link href='/todos' legacyBehavior><a className="text-teal-500 hover:text-teal-800"><AiOutlineArrowLeft  /></a></Link>
            <div className="mt-10">
                <form className="flex flex-col gap-6" onSubmit={submitHandler}>
                <FormComponent label={"todo name"} name={"todoName"} onChange={changeHandler} value={formData.todoName}/>
                  <FormComponent label={"todo date"} name={"todoDate"} onChange={changeHandler} value={formData.todoDate} type="date"/> 
                    <input type="submit" value="update" className="submitButton"/>
                    <Toaster />
                </form>
            </div>
        </div>
     );
}
 
export default EditTodo;
export async function getServerSideProps({ req, res,query }) {
    const token=getCookie('todoToken',{ req, res });
    if(!token){
      return {
        redirect: {
          permanent: false,
          destination: "/users/login",
        },
        props:{},
      };
    }
    const [bearer,main]=token.split(" ");
    const payload=jwt.verify(main,process.env.SECRET_KEY);
    const {mobile,email}=payload;
    //connect to DB
    await dbConnect();
    //search the user based on mobile and email
    const user=await User.findOne({mobile})
          // if mobile number is not found
          if(!user){
            return {
              redirect: {
                permanent: false,
                destination: "/users/login",
              },
              props:{},
            };
          }
          //2- check if the userEmail in DB match with the email in token
          const compareResult=(user.email===email)
         if(!compareResult){
          return {
            redirect: {
              permanent: false,
              destination: "/users/login",
            },
            props:{},
          };
         }
           //3- set the token to the header and redirect to the main page
           const _id=user._id
           console.log(query.edit)
           const todo=await Todo.findOne({userID:_id,_id:query.edit});
          const findedTodo= JSON.stringify(todo)
        return { props: {findedTodo} };
      }