import React from "react";
import { Link } from "react-router-dom";
import { DownloadButton } from "./Button";



export const ItemCard=(props)=>{


const download=()=>{

}



    return(   
    
<>

      <div className="card-wrap">
      <Link to={`/posts/${props.id}`}>
    <div className="card">
        <div className="card-img-section">
            <img src={props.imageUrl} alt="front-view"/>
            <img src={props.secondImageUrl} alt="rear-view-optional"/>
        </div>
            <div className="card-description-section">
            
                <h4>{props.title}</h4>
                
                <h5>faces:{props.faces}</h5>
                
                <hr/>
            </div>
       
    </div>
    </Link>
</div>
</>   

    );
}