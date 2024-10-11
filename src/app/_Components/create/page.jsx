"use client"
import axios from 'axios';

import React from 'react'
import toast from 'react-hot-toast';

export default function Create(values) {

    async function create(){
     let {data} =  await axios.post(`https://linked-posts.routemisr.com/posts`, values ,{
            headers:{token:localStorage.getItem("token")}
        })
        console.log(data);
        
       if(data.message == "success"){
        toast.success("post added successfully")
        window.location.href = '/';

        
       }
        
    }

    function handlePost(e){
        e.preventDefault()
        let formdata = new FormData()
        console.log(e);
        let body = e.target.body.value
        let image = e.target.image.files[0]
        formdata.append("body",body)
        formdata.append("image",image)
        create(formdata)
    }
  return (
        <div className="bg-[#c8c1e0] p-10 h-[100vh]">
          <div className="contain py-20 lg: max-w-[50rem] m-auto mt-10 md:mt-0 bg-[#2B2738] rounded-xl text-white  h-[45rem] flex justify-center flex-row-reverse sm:gap-[5rem] lg:gap-[5rem]">
            <form onSubmit={handlePost} className="flex gap-12 items-center flex-col w-full">
              <div className='flex flex-col'>
                <h1 className="text-3xl text-bold">Create Post</h1>
                  <p className="text-[#f6f6f8ad] text-sm mt-8">What is on your mind?</p>
              </div>
              <div className="flex w-[80%] lg:w-[50%] md:w-[60%] sm:w-[70%] flex-col justify-center items-center gap-8">
                <textarea rows="8" className="w-full p-5 bg-[#4e495ef3] rounded-lg px-3 focus:outline-[#aa96e2]" name="body" id=""></textarea>
                <div className='flex gap-4 w-full'>
                  <input
                    name='image'
                    className="rounded-lg px-3 focus:outline-[#aa96e2]"
                    type="file" />
                </div>
                <button type='submit' className="bg-[#6E54B5] w-full h-[3rem] rounded-md">Next</button>
                <div className="text-4xl">identity.</div>
              </div>
            </form>
          </div>
        </div>
      );
    }
    