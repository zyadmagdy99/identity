"use client"; 

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjcwNTNjNWE4MDNmNzZiZjAwNjVhNjZhIiwiaWF0IjoxNzI4NjQ2NDQxfQ.75XnFcin1EE2J33pQCtJE8RZAiYzzJC9j3fLvk2vh1k"
let headers ={token}
let initialState = {
  posts:[],isloading:false,iserror: null,post:[]
};


export let getposts = createAsyncThunk("post/getposts",async ()=>{
  let data = await fetch(`https://linked-posts.routemisr.com/posts?limit=20`,
  {method: "GET",
   headers : headers,
});
let response =await data.json()
console.log(response.posts);
return response.posts
})

export let singlePost = createAsyncThunk("post/singlePost",async(id)=>{
 let data = await fetch(`https://linked-posts.routemisr.com/posts/${id}`,
  {headers:headers}
 )
 let response =await data.json()
 console.log(response.post);
 return response.post})


const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state, action) => action.payload
  },
  extraReducers:(builder)=>{
    builder.addCase(getposts.fulfilled,(state,action)=>{
        state.posts =action.payload
    }),
    builder.addCase(getposts.pending,(state,action)=>{
        state.isloading = true
    }),
    builder.addCase(getposts.rejected,(state,action)=>{
        state.iserror =true
    });
    builder.addCase(singlePost.fulfilled,(state,action)=>{
      state.post =action.payload
  })
  }
});

export let postreducer = postSlice.reducer;
