import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import  jwt  from 'jsonwebtoken'
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";
import FormikComponent from "../../components/FormikComponent";
import Link from "next/link";
import User from '../../models/user.model.js';
import dbConnect from "../../lib/mongodb";

export default function Register() {
  const {push}=useRouter();
  const [formErrors,setFormErrors]=useState([])
  const [dbError,setDbError]=useState("")
    const formik = useFormik({
        initialValues: {
          mobile: '',
          password:''
        },
        validateOnMount:true,
        onSubmit: function (values) {
          setDbError([]);
          setDbError("")
          axios.post ('/api/users/login',values)
          .then(res=>{
            // localStorage.setItem("todoToken",res.data.data.token)
            setCookie('todoToken', res.data.data.token);
            push("/todos")
          })
          .catch(err=>{
            console.log(err)
            setFormErrors(err.response?.data?.error?.returnedErrors || []);
            setDbError(err.response?.data?.message || [])
          })
        },
        
        validationSchema: Yup.object({
            mobile: Yup.string().required("please enter the mobile")
            .matches(/09[0-9]{9}/ig,"mobile is wrong"),
            password: Yup.string().required("please enter the password")
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Minimum eight characters, at least one letter and one number"),
          })
      })
      
    return (
        <div className="container mx-auto max-w-md">
          <Link href='/users/register' legacyBehavior><a className="text-teal-500 hover:text-teal-800">register ?</a></Link>
          <h1 className='text-3xl mb-3 text-center text-teal-800 mt-10'>Login</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <FormikComponent label={"mobile"} name={"mobile"}formik={formik}  />
        <FormikComponent label={"password"} name={"password"}formik={formik}  />
        <div className="flex flex-col justify-start items-center text-red-400">
          <p>{dbError}</p>
          <p>{formErrors}</p>
        </div>
            <input type="submit" value="login" className={`bg-teal-500 rounded p-3 w-full mt-10 text-white ${formik.isValid?'cursor-pointer':'cursor-not-allowed'}`} disabled={!formik.isValid} />
        </form>
      </div>
    )
  }

  export async function getServerSideProps({ req, res }) {
    const token=getCookie('todoToken',{ req, res });
    if(token){
      const [bearer,main]=token.split(" ");
    const payload=jwt.verify(main,process.env.SECRET_KEY);
    const {mobile,email}=payload;
    //connect to DB
    await dbConnect();
    //search the user based on mobile and email
    const user=await User.findOne({mobile})
    if(user){
      const compareResult=(user.email===email)
   if(compareResult){
    return {
      redirect: {
        permanent: false,
        destination: "/todos",
      },
      props:{},
    };
   }
    }
      
    }else{
      return { props: {} }
    }

  }
    
