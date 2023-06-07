import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DownloadButton } from "./Button";
import loadimg from "../img/img_load.jpg";
import { Loader } from "./Loader";


export const ItemCard=(props)=>{
    
    const [isVisible, setIsVisible] = useState(true);
    


    useEffect(() => {
        const timeoutId = setTimeout(() => setIsVisible(false), 2000);
        return () => clearTimeout(timeoutId);
      }, []);

const download=()=>{

}

    return(   
    
<>

      <div className="card-wrap">
      <Link to={`/posts/${props.id}`}>
    <div className="card">
   
        <div className="card-img-section">
       {isVisible ? <img src={loadimg} alt="front-view"/> : <img src= {props.imageUrl} alt="front-view"/>} 
       {/* {isVisible ? <Loader/> : <img src= {props.imageUrl} alt="front-view"/>}  */}
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