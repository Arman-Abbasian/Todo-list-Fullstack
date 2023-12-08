import { z } from 'zod'
export function userLoginValidation(body){
    const schema = z.object({
        mobile:z.string().regex(/09[0-9]{9}/,{message:'Invalid mobile number!'}),
        password:z.string().nonempty({message:"please enter password"})
        .min(3,{ message: "Must be 3 or more characters long" })
        .max(20, { message: "Must be 20 or fewer characters long" }),
      });
      const response = schema.safeParse(body);
      return response
}