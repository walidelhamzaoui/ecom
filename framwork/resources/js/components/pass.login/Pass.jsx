import React from "react";
import './pass.css';
import image122 from './img122.png';
import { Link } from "react-router-dom";

export default function Pass(){
return(
<div className="body1">
<img src={image122} className="img77"/>
<h1 className=" h111">Quel est votre mot de passe?</h1>
<h2 className="p89">name@gmail.com<span><Link to="" className="modi">Modifier</Link></span></h2> 
<input type="password"
placeholder=" Mot de passe" className="inp556"/>
<Link to="" className="link">Mot de passe oublié?</Link>
<Link to="/register"> <button className='bnt69'>S'identifier</button></Link>
</div>)}