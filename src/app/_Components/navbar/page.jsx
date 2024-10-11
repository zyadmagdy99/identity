"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoAppsSharp, IoCloseSharp  } from "react-icons/io5";
import { GrOverview } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import Link from 'next/link';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setUser(token);
  }, []); 

  function logout() {
    localStorage.removeItem('token');
    setUser(null); 
  }

  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <div className='bg-indigo-300 p-3 md:px-10 flex justify-between top-0 items-center w-full fixed'>
      <div className={`flex gap-2 items-center ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <Image
          className="rounded-xl"
          src="/original-8117aeb856d90d25d0d165c94e17966b.gif"
          alt="Sign up image"
          width={40}
          height={40}
        />
        <p className='font-bold text-lg'>identety.</p>
      </div>

   
      <div className={`hidden md:flex gap-4 text-black ${isMobileMenuOpen ? 'hidden' : ''}`}>
       
            <Link href="/">
              <div className='flex gap-3 items-center text-xl hover:cursor-pointer hover:bg-purple-100 p-2 rounded-xl'>
                <p>Overview</p>
              </div>
            </Link>
            <Link href="/payment">
              <div className='flex gap-3 items-center text-xl hover:cursor-pointer hover:bg-purple-100 p-2 rounded-xl'>
                <p>Payment</p>
              </div>
            </Link>
            <Link href="/setting">
              <div className='flex gap-3 items-center text-xl hover:cursor-pointer hover:bg-purple-100 p-2 rounded-xl'>
                <p>Setting</p>
              </div>
            </Link>
            <Link href="register">
            
            <div onClick={() => logout()} className='flex gap-3 items-center text-xl hover:cursor-pointer hover:bg-purple-100 p-2 rounded-xl'>
              <p>Logout</p>
            </div>
            </Link>
       
      </div>


      <div className={`text-3xl md:hidden ${isMobileMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        <IoAppsSharp id='svg' />
      </div>

  
      <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} w-full flex justify-between px-3 h-full gap-4 bg-[#F0F2F5] border-[4px] border-[#aa96e2] md:hidden`}>
        <div>
        <Link href="/">
        
        <div className='flex gap-3 items-center text-3xl p-2 rounded-xl hover:bg-white text-[#aa96e2]'>
          <p>Overview</p>
          <GrOverview />
        </div>
        </Link>
        <Link href="/payment">
        <div className='flex gap-5 items-center text-3xl p-2 rounded-xl hover:bg-white text-[#aa96e2]'>
          <p>Payment</p>
          <MdPayment />
        </div>
        
        </Link>
        <Link href="/setting">
        
        <div className='flex gap-9 items-center text-3xl p-2 rounded-xl hover:bg-white text-[#aa96e2]'>
          <p>Setting</p>
          <CiSettings />
        </div>
        </Link>
        <Link href="/register">
        <div onClick={() => logout()} className='flex gap-9 items-center text-3xl p-2 rounded-xl hover:bg-white text-[#aa96e2]'>
          <p>Logout</p>
          <CiLogout />
        </div>
        
        </Link>
        <div className='flex justify-center mb-6'>
          <Image
            className="rounded-xl md:w-[100%]"
            src="/pexels-joslyn-pickens-2185980-3831730.jpg"
            alt="Sign up image"
            width={300}
            height={400}
          />
        </div>
        </div>
        <div className='text-3xl md:hidden' onClick={toggleMenu}>
        {isMobileMenuOpen ? <IoCloseSharp id='svg' /> : <IoAppsSharp id='svg' />}
      </div>
      </div>
    </div>
  );
  }