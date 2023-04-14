import React from "react";
import imaget78 from './foto2.png';
import './Connecte.css';

import { Link } from "react-router-dom";
export default function Connecte(){
return(

<div>
<div className="w1">
<img src={imaget78}className="img1"/>
<p className="p1">Entrez votre email pour nous<br/>

rejoindre ou connectez-vous.</p>
<p className="maroc">Maroc <a href="" className="a3">Changement</a></p>
<input type="email" placeholder="E-mail" className="input1"/>
<div className="p5">
<p>En continuant, j'accepte <a href="#" className="a5">la politique de</a><br/>

< a href="#" className="a5">confidentialité </a>et < a href=""className="a5">les conditions d'utilisation</a> de Nike .</p>
 <Link to="/pass"className="a6"><button className="bnt55">Continue</button></Link></div>
 </div>
 
 </div>)
}