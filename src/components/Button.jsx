import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchModelDownload } from "../redux/slices/posts";
import axios from "axios";

export const DownloadButton=(props)=>{

    const dispatch = useDispatch();
    
    // React.useEffect(() => {
    //     dispatch(fetchModelDownload(props.modelUrl));
    //     console.log(props.modelUrl);
     
    //   }, [])
    const download=()=>{
axios.get(`${props.modelUrl}`);
console.log(props.modelUrl);

    }

    return(
        <>
 <button  onClick={download} className="card__button">Download</button>
       </>
    )
}