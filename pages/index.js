import { getCookie } from "cookies-next";
import  jwt  from 'jsonwebtoken';
import dbConnect from "../lib/mongodb";
import User from '../models/user.model'

export default function Home() {
  return (
    <div>
      <p>Todo App</p>
    </div>
  )
}
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
         return {
          redirect: {
            permanent: false,
            destination: "/todos",
          },
          props:{},
        };
  
    }
