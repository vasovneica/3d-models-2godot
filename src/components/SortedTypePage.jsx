import React, { useState } from "react";
import { ItemCard } from "./ItemCard";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAirGroup, fetchGroup, fetchPosts } from "../redux/slices/posts";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

export const SortedTypePage=()=>{

  const { group } = useParams();

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
    dispatch(fetchGroup(group));
    if (posts.items[0]!=undefined){
    title=posts.items[0].group;
    }
  }, [group])
  console.log("sorted");

  if (isPostsLoading){
    return (<>
    <Loader/>
    </>)
    
   }
   else{
    return(
        <>
        <main class="main-content">
        <div class="cards-section">

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