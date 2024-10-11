"use client"
import { AiTwotoneLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { singlePost } from '@/lib/postslice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Single(props) {
    let {post} = useSelector((state)=>state.post)
    console.log(props.params.id);
    console.log(post);
    
    let dispatch = useDispatch()
    useEffect(() => {
     dispatch(singlePost(props.params.id))
    
      
    }, [])
    
  return (
    <div className='mt-20 '>
      <div className="w-full flex flex-col p-4 gap-4 my-8 rounded-xl max-w-[40rem] m-auto">
      <div className="flex gap-3">
        <div className="w-10 rounded-full">
          <img className="w-full" src={post?.user?.photo} alt="" />
        </div>
        <div className="flex flex-col font-semibold justify-center">
          <p>{post?.user?.name}</p>
          <p>{post?.createdAt?.slice(0, 10)}</p>
        </div>
      </div>
      <div>{post?.body}</div>
      <div className="flex justify-center items-center">
        <img src={post?.image} alt="" />
      </div>
      <div className="flex justify-center items-center mt-10 gap-6">
        <div className="w-[9rem] h-[3rem] flex justify-center gap-3 items-center rounded-3xl bg-[#F0F2F5]">
          <AiTwotoneLike />
          <div>like</div>
        </div>
        <div className="w-[9rem] h-[3rem] flex justify-center gap-3 items-center rounded-3xl bg-[#F0F2F5]">
          <FaComment />
          <div>comment</div>
        </div>
        <div className="w-[9rem] h-[3rem] flex justify-center gap-3 items-center rounded-3xl bg-[#F0F2F5]">
          <FaShare />
          <div>share</div>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col p-4 gap-4 bg-white rounded-xl max-w-[40rem] m-auto">
    {post?.comments?.map((comment)=><div className="flex items-center gap-3" key={comment._id}>

      <div className="w-10">
          <img src="/images.png" alt="" />
        </div>
     
        <div className="bg-[#F0F2F5]  flex gap-2 items-center rounded-2xl w-full p-3">
        <div className="w-[7rem] text-[#00000081] ">
         <p className="text-sm font-semibold">
          </p> {comment?.commentCreator?.name}
          
          <p className="text-xs">{comment?.createdAt?.slice(0, 10)}</p>

        </div>
        <div className="text-xl flex justify-center items-center">
        {comment?.content}
        </div>
          
        </div>
        
    </div>
      )}
      </div>
    </div>
  )
}
