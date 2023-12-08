import axios from "axios";
import { getCookie } from "cookies-next";
import  jwt  from 'jsonwebtoken'
import dbConnect from "../../../lib/mongodb";
import { useState } from "react";
import User from '../../../models/user.model.js'
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from 'yup';
import FormikComponent from "../../../components/FormikComponent";
 
const CraeteTodo = ({findedUser}) => {
    const user=JSON.parse(findedUser);
    const id=user._id;
    console.log(id)
    const [formErrors,setFormErrors]=useState([])
    const [dbError,setDbError]=useState("")
      const formik = useFormik({
          initialValues: {
            todoName: '',
            todoDate:''
          },
          validateOnMount:true,
          onSubmit: function (values,{resetForm}) {
            console.log(values)
            axios.post ('/api/todos/staticTodos',{...values,id})
            .then(res=>{
              toast.success(res.data.message)
              resetForm({values:''})
            })
            .catch(err=>{
              setFormErrors(err.response?.data?.error?.returnedErrors || []);
              setDbError(err.response?.data?.message || [])
            })
          },
          validationSchema: Yup.object({
              todoName: Yup.string().required("please enter the todo name")
              .min(3,"todo name should be at least 3 character").max(100,"todo name should be maximum 100 character"),
              todoDate: Yup.date("please enter date format").required("please enter the todo date")
            })
        })
    return ( 
        <div className="container mx-auto max-w-md">
          <Link href='/todos' legacyBehavior><a className="text-teal-500 hover:text-teal-800">Todo list?</a></Link>
            <div className="mt-10">
            <p>{formErrors}</p>
            <p>{dbError}</p>
                <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
                  <FormikComponent label={"todo name"} name={"todoName"} formik={formik} />
                  <FormikComponent label={"todo date"} name={"todoDate"}  type="date" formik={formik}/> 
                    <input type="submit" value="Add" className={`bg-teal-500 rounded p-3 w-full mt-10 text-white ${formik.isValid?'cursor-pointer':'cursor-not-allowed'}`} disabled={!formik.isValid}/>
                    <Toaster />
                </form>
            </div>
        </div>
     );
}
 
export default CraeteTodo;
export async function getServerSideProps({ req, res }) {
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
          const findedUser= JSON.stringify(user)
        return { props: {findedUser} };
      }