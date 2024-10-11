"use client";
import { configureStore } from '@reduxjs/toolkit'
import { postreducer } from './postslice'

export let store = configureStore({
    reducer:{
        post : postreducer,
        
    }
})
