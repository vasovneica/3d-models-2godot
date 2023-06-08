import{createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.js"

export const fetchModelDownload=createAsyncThunk("/posts/fetchPosts", async(link)=>{

    const {data}=await axios.get(`/${link}`);
    return data;
});

export const fetchPosts=createAsyncThunk("/posts/fetchPosts", async()=>{

    const {data}=await axios.get("/posts");
    return data;
});

// export const fetchGroup=createAsyncThunk("/posts/fetchGroup", async(group)=>{

//     const {data}=await axios.get(`/posts/${group}`);
//     return data;
// });

export const fetchGroup=createAsyncThunk("/groups/fetchGroup", async(group)=>{

    const {data}=await axios.get(`/groups/${group}`);
    return data;
});





export const fetchTags=createAsyncThunk("/posts/fetchTags", async()=>{

    const {data}=await axios.get("/tags");
    return data;
});

export const fetchDeletePost=createAsyncThunk("/posts/fetchDeletePost", async(id)=>{

  await axios.delete(`/posts/${id}`);
  
});




const initialState={
    posts:{
        items:[],
        status:"loading"
    },
    tags:{
        items:[],
        status:"loading"
    }
};

const postsSlice= createSlice({
    name:"posts",
    initialState,
    reducer:{},
    extraReducers:{
        [fetchPosts.pending]:(state)=>{
            state.posts.items=[];
            state.posts.status="loading";
        },
        [fetchPosts.fulfilled]:(state,action)=>{
            state.posts.items=action.payload;
            state.posts.status="loaded";
         },
         [fetchPosts.rejected]:(state)=>{
            state.posts.items=[];
            state.posts.status="error";
         },
         [fetchTags.pending]:(state)=>{
            state.tags.items=[];
            state.tags.status="loading";
        },
        [fetchTags.fulfilled]:(state,action)=>{
            state.tags.items=action.payload;
            state.tags.status="loaded";
         },
         [fetchTags.rejected]:(state)=>{
            state.tags.items=[];
            state.tags.status="error";
         },//delete post
         [fetchDeletePost.pending]:(state,action)=>{
            state.posts.items= state.posts.items.filter((obj)=>obj._id !==action.meta.arg);
            
        },
        [fetchGroup.pending]:(state)=>{
            state.posts.items=[];
            state.posts.status="loading";
        },
        [fetchGroup.fulfilled]:(state,action)=>{
            state.posts.items=action.payload;
            state.posts.status="loaded";
         },
         [fetchGroup.rejected]:(state)=>{
            state.posts.items=[];
            state.posts.status="error";
         },
       


    }
});

export const postsReducer= postsSlice.reducer;