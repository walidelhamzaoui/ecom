// import React from "react";
// import imagar from'./img1.png';


import React, { useEffect, useState } from "react";
import './Slide.css';
// import { Link } from "react-router-dom";
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './IMG3.jpg'


const images = [img1,img2,img3];


 export default function  Slide () {
    const[currentState,setCurrentState]=useState(0)
    

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentState((currentState + 1) % images.length);
        },4000);

        return()=>clearInterval(intervalId);
    },[currentState]);

return(
<div>
<div className="imge6">
<img  src={`${images[currentState]}`} className='imgea'/>



</div>
</div>)
}

