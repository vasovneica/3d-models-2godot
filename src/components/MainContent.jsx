import React, { useState } from "react";
import { ItemCard } from "./ItemCard";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../redux/slices/posts";
import { Loader } from "./Loader";



export const MainContent=()=>{



  const dispatch = useDispatch();
  const { posts } = useSelector((state) =>state.posts);
let title;
 
  let isPostsLoading;
  if (posts.status==="loading"){
    isPostsLoading=true
  }
  if(posts.status!=="loading"){
    isPostsLoading=false
  }
  
  React.useEffect(() => {
    dispatch(fetchPosts());
    if (posts.items[0]!=undefined){
    title=posts.items[0].group;
    }
  }, [])

   if (isPostsLoading){
    return (<>
    <Loader/>
    </>)
    
   }
   else{
    return(
        <>
        
        <main className="main-content">
        <div className="cards-section">
       
        {(isPostsLoading ? [...Array()] : posts.items).map((obj, index) =>
            isPostsLoading ? (<ItemCard key={index} isLoading={isPostsLoading} />) : (
              <div class="card-wrap">
              <ItemCard
              key={obj.id}
                id={obj._id}
                title={obj.title}
                text={obj.text}
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={3}
                faces={obj.faces}
                imageUrl={obj.imageUrl}
                secondImageUrl={obj.secondImageUrl}
       
              />

              
</div>
              ))} 



        </div>
      </main>

      </>


    );
}
}