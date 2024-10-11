import React from 'react'
import Home from './home/page'
import { Toaster } from 'react-hot-toast'

export default function page() {
  return (
    <div>
      <Toaster />
     
      <Home />
    </div>
  )
}
