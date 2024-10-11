"use client";
import React from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import Link from 'next/link';
import axios from 'axios';
import * as Yup from "yup";


export default function Page() {
  let validation = Yup.object().shape({
    name: Yup.string().min(4, "min lenght is 4").max(10, "max lenght is 10").required("name is required"),
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "must contain capital & small & special character").required("password is required"),})
  const formik = useFormik({
    initialValues: {
     
      email: "",
      password: "",
    
    },
    onSubmit: async (values) => {
      await handlelogin(values);
    },
  });

  const handlelogin = async (values) => {
    try {
      const response = await axios.post(`https://linked-posts.routemisr.com/users/signin`, values);
      console.log(response.data.message); 
      if(response.data.message =="success"){
       localStorage.setItem("token",response.data.token)
       window.location.href = '/';


      }
    } catch (error) {
      console.error('Registration error:', error);
      
    }
  };

  return (
    <div className="bg-[#c8c1e0] p-10 h-[100vh]">
      <div className="contain py-20 mt-10 md:mt-0 bg-[#2B2738] rounded-xl text-white px-8 h-[45rem] flex justify-center flex-row-reverse sm:gap-[5rem] lg:gap-[5rem]">
        <form onSubmit={formik.handleSubmit} className="flex gap-12 items-center flex-col w-full">
          <div className='flex flex-col'>
            <h1 className="text-3xl text-bold">Welcome Back</h1>
            <Link href="/login">
              <p className="text-[#f6f6f8ad] text-sm mt-8">Don not have an account? <span className="text-[#aa96e2] underline">Register</span></p>
            </Link>
          </div>
          <div className="flex w-[80%] lg:w-[50%] md:w-[60%] sm:w-[70%] flex-col justify-center items-center gap-8">
          <div className='w-full flex flex-col'>
            <input
              value={formik.values.email}
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-[3rem] bg-[#4e495ef3] rounded-lg px-3 focus:outline-[#aa96e2]"
              type="email"
              placeholder="E-mail"
            />

              {formik.errors.email && formik.touched.email?<div className='text-red-400 text-sm'>
                {formik.errors.email}
              </div>: null}
              </div>
            
            <div className='flex gap-4 w-full'>
            <div className='w-full flex flex-col'>
              <input
                value={formik.values.password}
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full h-[3rem] bg-[#4e495ef3] rounded-lg px-3 focus:outline-[#aa96e2]"
                type="password"
                placeholder="Enter Password"
              />
                {formik.errors.password && formik.touched.password?<div className='text-red-400 text-sm'>
                {formik.errors.password}
              </div>: null}
              </div>
            
            </div>
        
       
            <button type='submit' className="bg-[#6E54B5] w-full h-[3rem] rounded-md">Log in</button>
            <div className="text-4xl">identity.</div>
          </div>
        </form>
        <div className="hidden md:flex sm:w-[40rem] lg:ms-[5rem] items-center">
          <Image className="rounded-xl md:w-[100%]"
            src="/pexels-bertellifotografia-799443.jpg"
            alt="Sign up image"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
