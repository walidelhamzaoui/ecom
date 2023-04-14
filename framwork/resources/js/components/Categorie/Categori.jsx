import React, { Component } from "react";
import imga1 from './women.png';
import imga2 from './kids.png';
import imga3 from './men.png';
import imga4 from './access.png';

import './Categorie.css'
const produit=[
{sexe:"",image:'.png'},
{sexe:"",image:'.png'},
{sexe:"",image:'.png'},
{sexe:"",image:'.png'},



,];
export default  function Categori(){
return(
<div>
{/* <div>
// {produit.map(items=>{
// return(<div>
// <h1>{items.sexe}</h1>
// <img src={items.image}/>
// </div>);
// // })} */}
<div className="dv">
 <h1 className="h99">MEN</h1>
 <img src={imga3}className="imhea"/>
 <h1 className="h99" >WOMMEN</h1>
 <img src={imga1} className="imhea"/>
 <h1 className="h99">KIDS</h1>
 <img src={imga2} className="imhea"/>
 <h1 className="h99">ACCESS</h1>
 <img src={imga4} className="imhea"/>
 </div>
</div>)
}
