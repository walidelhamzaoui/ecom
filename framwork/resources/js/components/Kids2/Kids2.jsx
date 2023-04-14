
import React from "react"
import image1 from './nike1.jpg'
import image2 from './nike2.jpg'
import image3 from './nike3.jpg'
import'./Kids2.css'
export default function Kids2(){
return(
<div className="top1">
<h1 className="kl1">Plus d'articles</h1>
<div className="ds1">

<ul className="nb1">
<img src={image2} className="cv1"/>
<button className="bnt">Homme</button>

</ul>
<ul className="nb1">
<img src={image1}className="cv1"/>
<button className="bnt">Femme</button></ul>
<ul className="nb1">
<img src={image3}className="cv1"/>
<button className="bnt" >Enfant</button>

</ul>
<hr/>
</div>
</div>
)}