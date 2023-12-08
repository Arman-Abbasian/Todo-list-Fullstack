import { z } from 'zod'
export function userRegisterValidation(body){
    const schema = z.object({
        name: z.string().nonempty({message:"please enter a name"})
        .min(3,{ message: "Must be 3 or more characters long" })
        .max(20, { message: "Must be 20 or fewer characters long" }),
        email: z.string().nonempty({message:"please enter the email"})
        .email({message:"this is not a email"}),
        mobile:z.string().nonempty({message:"please enter the mobile number"}).regex(/09[0-9]{9}/,'Invalid moblie Number!'),
        password:z.string().nonempty("please enter a password")
        .min(3,{ message: "Must be 3 or more characters long" })
        .max(20, { message: "Must be 20 or fewer characters long" }),
        confirmPassword:z.string().nonempty("please enter a password confirmation")
        .min(3,{ message: "Must be 3 or more characters long" })
        .max(20, { message: "Must be 20 or fewer characters long" }),
      }).superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
          ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
          });
        }
      });
      const response = schema.safeParse(body);
      return response
}