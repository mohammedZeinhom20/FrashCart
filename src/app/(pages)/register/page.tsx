"use client"

import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
import { registerSchema, RegisterSchemaType } from '@/schema/register.s'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const Register = () => {

    const router = useRouter()
    
    const form = useForm <RegisterSchemaType>({
        defaultValues : {
            name: "",
            email:"",
            password:"",
            rePassword:"",
            phone:""
        },

        resolver : zodResolver(registerSchema)
    })

     async function handleRegister(values : RegisterSchemaType){

      try{
        const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , values)
        console.log(data)
        toast.add({
          type:"success",
          description:data.message,
          
        } )
        router.push("/login")
        // form.reset();
      } catch(error){
        if (axios.isAxiosError(error)) {
          toast.add({
          type: "error",
          description: error.response?.data?.message || "Something went wrong",
        });
        }
      }
    }
  return (
    <div className='mx-auto px-5 md:px-0 w-full my-12 md:w-1/2'>
        <h1 className='text-3xl text-center mb-5 font-bold'>Register Form</h1>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleRegister)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-name">
                    Name
                  </FieldLabel>
                  <Input
                    {...field}
                    type='text'
                    id="form-rhf-demo-name"
                    aria-invalid={fieldState.invalid}
                    placeholder='Name'
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
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
            <Controller
              name="rePassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-rePassword">
                    rePassword
                  </FieldLabel>
                  <Input
                    {...field}
                    type='password'
                    id="form-rhf-demo-rePassword"
                    aria-invalid={fieldState.invalid}
                    placeholder='rePassword'
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-phone">
                    phone
                  </FieldLabel>
                  <Input
                    {...field}
                    type='tel'
                    id="form-rhf-demo-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder='phone'
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
            Register Now
        </Button>
    </div>  
  )
}

export default Register