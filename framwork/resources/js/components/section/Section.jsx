import React from 'react';
import imga from'./CONVERSE.png';
import imgaE from'./JORDAN.png';

import { Link } from 'react-router-dom';


import'./Section.css';
export default function section(){
return(

<div  >

<nav fixed='top'>


<ul className="nava" >

<img src={imgaE} alt="" className="imaee"/>
<img src={imga} alt="" className="imaee"/>
 <li className="lia">< Link to ="/Aide" className='a2' ><h4 className="h21"> Aide</h4></Link></li>  
 <li className="lia"><Link to="/"className='a2' ><h4 className="h21">Nous contacter</h4></Link></li>  
<li className="lia">< Link to="/s-identifierj" className='a2'><h4 className="h21">Nous rejoindre</h4 ></Link></li>
<li className="lia">< Link to=""className='a2' ><h4 className="h21">S'identifier</h4> </Link></li>
</ul></nav>
{/* web vue */}

</div>)
}