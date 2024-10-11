import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";

export default function Setting() {
  return (
    <div className='mt-20'>
      <div className='flex items-center gap-1'>
        <h1 className='text-2xl font-bold p-3 tracking-wider'>Setting</h1>
        <IoSettingsOutline className='text-3xl' />

        
      </div>
      <div>
        <div className='p-3'>
          <h1 className='font-semibold text-xl hover:cursor-pointer'>Account notification</h1>
          <p className='text-[#00000088] text-sm'>We will send you notification to inform you of any updates and/or changes as event occur for you or your business in ProAcc.</p>
          <hr />
        </div>
        <div className='p-3'>
          <h1 className='font-semibold text-xl hover:cursor-pointer'>Accounting</h1>
          <p className='text-[#00000088] text-sm'>When accounting and bookkeeping transaction your attention</p>
          <hr />

        </div>
        <div className='p-3'>
          <h1 className='font-semibold text-xl hover:cursor-pointer'>Sales</h1>
          <p className='text-[#00000088] text-sm'>When you have been paid or need to notified to keep ypur wave payment operating</p>
          <hr />

        </div>
        <div className='p-3'>
          <h1 className='font-semibold text-xl hover:cursor-pointer'>Payment</h1>
          <p className='text-[#00000088] text-sm'>When relenet sales-related activity occurs such as when an invoice is overdue.</p>
          <hr />

        </div>
        <div className='p-3'>
          <h1 className='font-semibold text-xl hover:cursor-pointer'>Purchases</h1>
          <p className='text-[#00000088] text-sm'>When receipt exports are ready and when receipts you have emailed to wave need to be posted into accounting.</p>
          <hr />

        </div>
        <div className='p-3'>
          <h1 className='font-semibold text-xl hover:cursor-pointer'>Bills</h1>
          <p className='text-[#00000088] text-sm'>When you need to be reminded of upcoming and/or late bills</p>
          <hr />

        </div>
      </div>
    </div>
  )
}
