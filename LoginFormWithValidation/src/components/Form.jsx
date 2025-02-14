import { useRef } from "react";
import "../css/Form.css"
import {useForm} from "react-hook-form";
function Form() {
  const {register, handleSubmit,formState: {errors,isSubmitting}} = useForm();
  const passwordField = useRef(null);

  const onSubmit =  (data)=>{
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="content-wrapper">
        <label htmlFor="name">User Name</label>
        <input {...register("name",{
          required: "name is required",
          minLength:5
        })} type="text" placeholder="john doe" />
        {errors.name && <div className="error">{errors.name.message} </div>}
      </div>
      
      <div className="content-wrapper">
        <label htmlFor="email">Email</label>
        <input  {...register("email",{
          required: "email is required",
          validate: (str) => {
            if(!str.includes("@")){
              return "email must include @ symbol"
            }
            return true;
          }
        })} type="email" placeholder="johndoe@gmail.com" />
        {errors.email && <div className="error">{errors.email.message} </div>}
      </div>

      <div className="content-wrapper">
        <label htmlFor="password1">Password</label>
        <input  {...register("password1",{
          required: "password is required",
          minLength: {
            value: 8,
            message: "password must have at least 8 characters"
          }
        })} type="password" ref={passwordField} />
        {errors.password1 && <div className="error">{errors.password1?.message} </div>}
      </div>

      <div className="content-wrapper">
        <label htmlFor="password2">Check password</label>
        <input  {...register("password2",{
          required: "password is required",
          validate: (passw)=>{
            if(passw != passwordField.current.value){
              return "passwords must match"
            }
          },
          minLength: {
            value: 8,
            message: "password must have at least 8 characters"
          }
        })} type="password"/>
        {errors.password2 && <div className="error">{errors.password2.message} </div>}
      </div>

      <div className="content-wrapper">
       <button type="submit">{isSubmitting? "...loading" : "submit"}</button>
      </div>
    </form>
  )
}

export default Form