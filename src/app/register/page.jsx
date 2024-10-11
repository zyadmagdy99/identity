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
      "must contain capital & small & special character").required("password is required"),
   rePassword: Yup.string().oneOf([Yup.ref("password")],"password not match").required("password is required"),
   gender:Yup.string().required("gender is required")  
  })
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "7-10-1994",
      gender: ""
    },
    onSubmit: async (values) => {
      await handleRegister(values);
    },
    validationSchema:validation
  });

  const handleRegister = async (values) => {
    try {
      const response = await axios.post('https://linked-posts.routemisr.com/users/signup', values);
      console.log(response.data.message); 
      if(response.data.message =="success"){
        window.location.href = '/login';

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
            <h1 className="text-3xl text-bold">Create an account</h1>
            <Link href="/login">
              <p className="text-[#f6f6f8ad] text-sm mt-8">Already have an account? <span className="text-[#aa96e2] underline">Log in</span></p>
            </Link>
          </div>
          <div className="flex w-[80%] lg:w-[50%] md:w-[60%] sm:w-[70%] flex-col justify-center items-center gap-8">
            <div className='w-full flex flex-col'>
            <input
              value={formik.values.name}
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-[3rem] bg-[#4e495ef3] rounded-lg px-3 focus:outline-[#aa96e2]"
              type="text"
              placeholder="Name"
            />
              {formik.errors.name && formik.touched.naem?<div className='text-red-400 text-sm'>
                {formik.errors.name}
              </div>: null}
            </div>
            
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
              <div className='w-full flex flex-col'>
              <input
                value={formik.values.rePassword}
                name='rePassword'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full h-[3rem] bg-[#4e495ef3] rounded-lg px-3 focus:outline-[#aa96e2]"
                type="password"
                placeholder="Re-enter Password"
              />
                {formik.errors.rePassword && formik.touched.rePassword?<div className='text-red-400 text-sm'>
                {formik.errors.rePassword}
              </div>: null}
              </div>
            </div>
            <div className='flex gap-8'>
              <label className="inline-flex items-center">
                <input
                  checked={formik.values.gender === "male"}
                  onChange={formik.handleChange}
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio text-blue-600"
                  required
                />
                 
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio text-blue-600"
                  required
                />
                 
                <span className="ml-2">Female</span>
              </label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="terms" required />
              <p>I agree to the <span>Terms & Conditions</span></p>
            </div>
            <button type='submit' className="bg-[#6E54B5] w-full h-[3rem] rounded-md">Create account</button>
            <p className='text-sm'>you can explore by clicking overview</p>
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
