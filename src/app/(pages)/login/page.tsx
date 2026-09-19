"use client"

import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
import { loginSchema, LoginSchemaType } from '@/schema/login.s'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import {signIn} from 'next-auth/react'


const Login = () => {

    const router = useRouter()
    
    const form = useForm <LoginSchemaType>({
        defaultValues : {

            email:"",
            password:"",
        },

        resolver : zodResolver(loginSchema)
    })

      async function handleLogin(values : LoginSchemaType){

      // try{
      //   const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , values)
      //   console.log(data)
      //   toast.add({
      //     type:"success",
      //     description:data.message,
          
      //   } )
      //   router.push("/")
      //   // form.reset();
      // } catch(error){
      //   if (axios.isAxiosError(error)) {
      //     toast.add({
      //     type: "error",
      //     description: error.response?.data?.message || "Something went wrong",
      //   });
      //   }
      // }

      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect : false ,
        callbackUrl:"/"
      })

      console.log(res);

      if (res?.ok) {
  toast.add({
    type: "success",
    description: "login success",
  });

  router.replace("/");
  router.refresh();
} else {
  toast.add({
    type: "error",
    description: res?.error || "Something went wrong",
  });
}



    }
  return (
    <div className='mx-auto px-5 md:px-0 w-full my-12 md:w-1/2'>
        <h1 className='text-3xl text-center mb-5 font-bold'>Login Form</h1>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleLogin)}>
          <FieldGroup>

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-email">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    type='email'
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    placeholder='Email'
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-password">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type='password'
                    id="form-rhf-demo-password"
                    aria-invalid={fieldState.invalid}
                    placeholder='Password'
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />



          </FieldGroup>
        </form>
        <Button className="w-full mt-5 " type="submit" form="form-rhf-demo">
            Login Now
        </Button>
    </div>  
  )
}

export default Login
