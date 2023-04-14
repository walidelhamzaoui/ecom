import React, { useEffect, useState } from "react";
import image1 from './image23/img1.jpg'
import image2 from './image23/women.jpg'
import image3 from './image23/women3.jpg'
import image4 from './image23/women2.jpg'
import image14 from './imagekids/img3.jpg'
import image5 from './imagekids/kids.jpg'
import image6 from './imagekids/kids1.jpg'
import image17 from './imagekids/kids3.jpg'
import image7 from './imagemen/men.jpg'
import image8 from'./imagemen/men1.jpg'
import image9 from'./imagemen/img2.jpg'
import image10 from'./imagemen/men3.jpg'
// import image10 from'./imagecasquite/cas.jpg'
// import image11 from'./imagecasquite/cas1.jpg'
// import image12 from'./imagecasquite/cas3.jpg'

import'./Kids.css'
const images = [image1,image2,image3,image4];
const images1 = [image14,image6,image5,image17];
const images2 = [image7,image8,image10,image9];
const images3 = [,];
// const images23 = [image10,image11,image12];
export default function Kids(){
    const[currentState,setCurrentState]=useState(0)
    

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentState((currentState + 1) % images.length);
            setCurrentState((currentState + 1) % images1.length);
            setCurrentState((currentState + 1) % images2.length);
            setCurrentState((currentState + 1) % images23.length);
        },4000);

        return()=>clearInterval(intervalId);
    },[currentState]);
return(
<div className="top">
<h1 className="kl">Popular Right Now</h1>
<div className="ds">
<ul className="nb">
<img src={`${images[currentState]}`}  style={{transition:"1s "}}className="cv"/>
<h3 className="cx">Nike Air Max 90 Futura    1399 DH</h3>
<a href="" className="a">Chaussure pour femme</a>

</ul>
<ul className="nb">
<img src={`${images1[currentState]}`} className="cv"/>
<h3 className="cx">Nike Air Max 90 Futura    1399 DH</h3>
<a href="" className="a">Chaussure pour enfant
</a>

</ul>
<ul className="nb">
<img src={`${images2[currentState]}`} className="cv"/>
<h3 className="cx">Nike Air Max 90 Futura    1399 DH</h3>
<a href=""  className="a">Chaussure pour homme</a>

</ul>

{/* <ul className="nb">
<img src={`${images3[currentState]}`}className="cv"/>
<h3 className="cx">Nike Air Max 90 Futura    1399 DH</h3>
<a href="" className="a">Chaussure pour enfant
</a>

</ul> */}
<hr/>
</div>
</div>
)}