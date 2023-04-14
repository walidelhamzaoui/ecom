import React, { useEffect, useState } from "react";
import  './Header.css';
import imga8 from './imha2.png';
import{FaUser}from 'react-icons/fa';
import{FaSearch}from 'react-icons/fa';

import { FaHeart } from 'react-icons/fa';
const title = ["Livraison et retours gratuits","-25 % POUR L'ACHAT DE DEUX ARTICLES OU PLUS"];
export default function Headear(){
     const[currentState,setCurrentState]=useState(0)
    const[text,setText]=useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentState((currentState + 1) % title.length);
        },2000);

        return()=>clearInterval(intervalId);
    },[currentState]);
return(
<div>


<section >
<nav >
<ul className='non'>
<li className="li1"><img src={imga8} alt=""  className='aimg'/></li>
<div className='h55'>
<li className="li1"><h5 className="ak">Men</h5></li>
<li className="li1"><h5 h5 className="ak">Women</h5></li>
<li className="li1"><h5 h5 className="ak">Kids</h5></li>
<li className="li1"><h5 h5 className="ak">Accessories</h5></li>



<li className='inputs'><input type="search" placeholder="Search" className='inp' />

</li>
<li className="li1"><FaSearch className="search"/></li>
<li><a href=""><FaUser className='favori1'/></a></li>

<li className="li1"><a href=""><FaHeart className='favori'/></a></li>


</div>

</ul>
<header>
<h1 className="bn">{`${title[currentState]}`}</h1>
</header>
</nav>

</section>

</div>)}
