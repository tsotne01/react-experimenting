import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import "../css/Form.css"



const userSchema = z.object({
  userName: z.string().min(1,{
    message: "name is required"
  }),
  email: z.string().email({
    message: "email is not valid"
  }),
  password1: z.string().min(8,{
    message: "password must be at least 8 characters long"
  }),
  password2: z.string({
    message: "password is required"
  }).min(8,{
    message: "password must be at least 8 characters long"
  }),
}).superRefine(({ password2, password1 }, ctx) => {
  if (password2 !== password1) {
    ctx.addIssue({
      code: "custom",
      message: "passwords must match",
      path: ['password2']
    });
  }
});

function Form() {
  const {register, handleSubmit,formState: {errors,isSubmitting}} = useForm({
    defaultValues:{
      userName:"John Doe",
      email: "example@gmail.com"
    },
    resolver: zodResolver(userSchema)
  });

  const onSubmit = (data)=>{
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="content-wrapper">
        <label htmlFor="userName">User Name</label>
        <input {...register("userName")} type="text" placeholder="john doe" />
        {errors.userName && <div className="error">{errors.userName.message} </div>}
      </div>
      
      <div className="content-wrapper">
        <label htmlFor="email">Email</label>
        <input  {...register("email")} type="email" placeholder="johndoe@gmail.com" />
        {errors.email && <div className="error">{errors.email.message} </div>}
      </div>

      <div className="content-wrapper">
        <label htmlFor="password1">Password</label>
        <input  {...register("password1")} type="password" />
        {errors.password1 && <div className="error">{errors.password1?.message} </div>}
      </div>

      <div className="content-wrapper">
        <label htmlFor="password2">Check password</label>
        <input  {...register("password2")} type="password"/>
        {errors.password2 && <div className="error">{errors.password2.message} </div>}
      </div>

      <div className="content-wrapper">
       <button type="submit">{isSubmitting? "...loading" : "submit"}</button>
      </div>
    </form>
  )
}

export default Form