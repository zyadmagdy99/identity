import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function Payment() {
  return (
    <div className='p-5'>
      <div className='flex flex-col justify-center items-center gap-9 mt-28'>
        <h1 className='font-bold text-2xl'>Select your Package</h1>
        <p className='text-sm'>select hte best type by matching your business need</p>
      </div>
      <div className='flex flex-col md:flex-row gap-6 justify-center items-center' >
        <div className='flex flex-col gap-3 border border-[#00000062] hover:border-2 h-[22rem] hover:border-black p-3 rounded-2xl mt-5'>
            <p className='font-bold'>Single User</p>
            <p className='font-bold'>$0</p>
            <p className='text-sm font-semibold'>1 user/per month</p>
            <div className='flex flex-col gap-2 text-[#00000062]'>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>Limited to minting</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>1collection/month</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>15% sales fees for the platform</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>5% resale royalty</p>
                </div>

            </div>
            <div className='flex justify-center'>
            <button className='py-2 px-4 border border-[#00000062] hover:border-2 hover:border-black w-[80%] mt rounded-2xl'> Continue</button>

            </div>
        </div>
        <div className='flex flex-col gap-3 border border-[#00000062] h-[22rem] hover:border-2 hover:border-purple-500 p-3 rounded-2xl mt-5'>
            <p className='font-bold text-purple-500'>Small Agency</p>
            <p className='font-bold'>$300</p>
            <p className='text-sm font-semibold'>3 user/per month</p>
            <div className='flex flex-col gap-2 text-[#00000062]'>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>3 Users</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
            <p>Up to 5 collections/month</p>
            </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>5% sales fees for the platform</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>5% resale royalty</p>
                </div>

            </div>
            <div className='flex justify-center'>
            <button className='py-2 px-4 border border-[#00000062] w-[80%] hover:border-2 hover:border-purple-500 rounded-2xl'> Continue</button>

            </div>
        </div>
        <div className='flex flex-col gap-3 border border-[#00000062] h-[22rem] hover:border-2 hover:border-green-500 p-3 rounded-2xl mt-5'>
            <p className='font-bold text-green-500'>Enterprise</p>
            <p className='font-bold'>$1,000</p>
            <p className='text-sm font-semibold'>5 user/per month</p>
            <div className='flex flex-col gap-2 text-[#00000062]'>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>5 Users</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>Up to 5 collections/month</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>5% sales fees for the platform</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>3% resale royalty</p>
                </div>

            </div>
            <div className='flex justify-center'>
            <button className='py-2 px-4 border hover:border-2 hover:border-green-500 border-[#00000062] w-[80%] rounded-2xl'> Continue</button>

            </div>
        </div>
        <div className='flex flex-col gap-3 border border-[#00000062] h-[22rem] p-3 hover:border-2 hover:border-red-500 rounded-2xl mt-5'>
            <p className='font-bold text-red-500'>Custome</p>
            <p className='font-bold'>--</p>
            <p className='text-sm font-semibold'>For large organization</p>
            <div className='flex flex-col gap-2 text-[#00000062]'>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>Unlimited Users</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>15 collection/month</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>5% sales fees for the platform</p>
                </div>
                <div className='flex gap-2 items-center'>
            <IoMdCheckmarkCircle />
                <p>5% resale royalty</p>
                </div>

            </div>
            <div className='flex justify-center'>
            <button className='py-2 px-4 border hover:border-2 hover:border-red-500 border-[#00000062] w-[80%] rounded-2xl'> Continue</button>

            </div>
        </div>
      </div>
    </div>
  )
}
