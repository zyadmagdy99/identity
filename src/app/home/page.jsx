"use client"
import { getposts } from '@/lib/postslice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiTwotoneLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import Link from 'next/link';

export default function Home() {
    let dispatch = useDispatch()
   let {posts} = useSelector((state)=>state.post)
    useEffect(() => {
        dispatch(getposts())
    }, [])
    const orderedPosts = [...posts].reverse();
  return (
    <div className='bg-[#F0F2F5] flex justify-center'>
      <div className='hidden xl:flex h-full w-[20%] fixed left-0 mt-24 ms-6 rounded-lg  flex-col gap-4'>
        <div className='rounded-xl'><img className='rounded-xl' src="/pexels-kevin-malik-8763269.jpg" alt="" /></div>
        <div className=''><img className='rounded-xl' src="/dog.jpg" alt="" /></div>
      </div>
      <div>

      <Link href="/test">
      
      <div className='hover:cursor-pointer p-10 flex justify-between items-center max-w-[40rem] mt-24 m-auto bg-gradient-to-r from-[#A5B4FC] to-[#87019c91] bg-white rounded-xl'>
        <div className='w-10'><img className='w-full' src="./images.png" alt="" /></div>
        <div className='bg-[#F0F2F5] p-2 px-8 rounded-2xl sm:w-[25rem]'> what's on your mind?</div>
        <IoMdPhotos className='text-2xl' />

      </div>
      </Link>
      
      {orderedPosts?.map((post) => (
  <Link href={`/single/${post.id}`} key={post.id}>
    <div className="w-full flex flex-col p-4 gap-4 my-8 bg-white rounded-xl max-w-[40rem] m-auto">
      <div className="flex gap-3">
        <div className="w-10 rounded-full">
          <img className="w-full" src={post.user.photo} alt="" />
        </div>
        <div className="flex flex-col font-semibold justify-center">
          <p>{post.user.name}</p>
          <p>{post.createdAt.slice(0, 10)}</p>
        </div>
      </div>
      <div>{post.body}</div>
      <div className="flex justify-center items-center">
        <img src={post.image} alt="" />
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="w-[8rem] h-[3rem] flex justify-center gap-3 items-center rounded-3xl bg-[#F0F2F5]">
          <AiTwotoneLike />
          <div>like</div>
        </div>
        <div className="w-[8rem] h-[3rem] flex justify-center gap-3 items-center rounded-3xl bg-[#F0F2F5]">
          <FaComment />
          <div>comment</div>
        </div>
        <div className="w-[8rem] h-[3rem] flex justify-center gap-3 items-center rounded-3xl bg-[#F0F2F5]">
          <FaShare />
          <div>share</div>
        </div>
      </div>
    </div>
  </Link>
))}

      </div>
      <div className='hidden xl:block fixed right-0 w-[20%] bg-white rounded-xl mt-24'>
        <div className='h-[8rem] rounded-t-xl flex justify-center bg-[url("/pexels-lulizler-3165335.jpg")] bg-center bg-cover items-end text-white font-bold text-2xl'>
          Top Gaming Communities
        </div>
        <div className='flex flex-col gap-5 p-4'>
          <div className='flex items-center font-bold text-xl mt-3 gap-3'>
          <div>1</div>
          <div className='w-9'><img className='w-full' src="/glorious-p-c-master-race-logo-zcif4uxt5qx9fnnl.png" alt="" /></div>
         <Link href="https://pcmasterrace.org/">
          <div>r/pcmasterrace</div>
         
         </Link>
          </div>
          <hr />
          <div className='flex items-center font-bold text-xl mt-3 gap-3'>
          <div>2</div>
          <div className='w-9'><img className='w-full' src="/download (1).jpeg" alt="" /></div>
          <Link href="         https://www.halowaypoint.com/en-gb">

          <div>r/halo</div>
          </Link>

          </div>
          <hr />
          <div className='flex items-center font-bold text-xl mt-3 gap-3'>
          <div>3</div>
          <div className='w-9'><img className='w-full' src="/download.jpeg" alt="" /></div>
          <Link href="https://dnd5e.wikidot.com/">

          <div>r/DnD</div>
          </Link>

          </div>
          <hr />
          <div className='flex items-center font-bold text-xl mt-3 gap-3'>
          <div>4</div>
          <div className='w-9'><img className='w-full' src="/download (2).jpeg" alt="" /></div>
          <Link href="https://www.pokemon.com/us">

<div>r/Pokemon</div>
</Link>

          </div>
          <hr />
          <div className='flex items-center font-bold text-xl mt-3 gap-3'>
          <div>5</div>
          <div className='w-9'><img className='w-full' src="/mm.jpg" alt="" /></div>
          <Link href="https://www.minecraft.net/en-us">

<div>r/Minecraft</div>
</Link>
          </div>
          <hr />
        </div>
        <div className='flex justify-center items-center gap-3 px-3 mb-6 text-sky-600'>
          <Link href="https://www.gametop.com/category/top.html">
          
          <p className='bg-sky-100 p-3 px-5 rounded-lg'>Top</p>
          </Link>
          <Link href="https://www.foxsports.com/scores">
          <p className='bg-sky-100 p-3 px-5 rounded-lg'>Sports</p>
          
          </Link>
          <Link href="https://store.epicgames.com/en-US/c/action-games?sortBy=releaseDate&sortDir=DESC&count=40">
          
          <p className='bg-sky-100 p-3 px-5 rounded-lg'>Action</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
