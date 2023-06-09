import React, { useState } from "react";
import { ItemCard } from "../components/ItemCard.jsx";
import { useParams } from "react-router-dom";
import axios from "../axios.js";
import axios_or from "axios";
import { DownloadButton } from "./Button.jsx";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import loadimg from "../img/img_load.jpg";


export const FullItem = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);

  const { id } = useParams();
  const [isVisible, setIsVisible] = React.useState(true);



  React.useEffect(() => {
      const timeoutId = setTimeout(() => setIsVisible(false), 2000);
      return () => clearTimeout(timeoutId);
    }, []);

  React.useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    }).catch((error) => {
      console.warn(error);
      alert("trouble to get article")

    })
  }, [])

  const download = () => {
    axios_or.get(`${data.modelUrl}`);
  }

  if (isLoading) {
    return <ItemCard isLoading={isLoading} isFullPost />
  }

  return (<>
    <div className="full-card">
      <div className="card-full-screen">
        <div className="card-img-section-full-screen">
          {/* <img src={data.imageUrl} alt="front-view" />
          <img src={data.secondImageUrl} alt="rear-view-optional" /> */}
              {isVisible ? <img src={loadimg} alt="front-view"/> : <img src= {data.imageUrl}  alt="front-view"/>} 
              {isVisible ? <img src={loadimg} alt="front-view"/> : <img src= {data.secondImageUrl} alt="front-view"/>} 
     
        </div>
        <div className="card-description-section">
          <h4>{data.title}</h4>
          <h5>faces:{data.faces}</h5>
          <a className="card__button" href={data.modelUrl}>download</a>
        </div>
        <hr />
      </div>
    </div>
  </>
  );
}