import React from "react";
import "./footer.css";
import{FaFacebook, FaTiktok, FaInstagram, FaTwitter,} from 'react-icons/fa';
import img from './footer.png';

export default function Footer(){
return(
<div>
<div className="div">
<nav className="ul4">
<ul  className="ul44">
<li className="li"><h1 style={{position:'relative',right:'46px'}}>A PROPOS DE NIKE</h1></li>
<li className="li"><a href="" className="a1"><h4 className="h4">Actualisés</h4></a></li>
<li className="li"><a href="" className="a1"><h4 className="h4">Carriéres</h4></a></li>
<li className="li"><a href="" className="a1"><h4 className="h4">Investisseurs</h4></a></li>
<li className="li"><a href="" className="a1"><h4 className="h4">Développement dirable</h4></a></li>
</ul>
<ul className="ul44">
<li className="li"><h1 style={{position:'relative',right:'60px'}}>AIDE</h1></li>
<li className="li"><a href="" className="a1" ><h4 className="h4">Salut de commande</h4></a></li>
<li className="li"><a href=""className="a1"><h4 className="h4">Expédition et livraison</h4></a></li>
<li className="li"><a href=""className="a1"><h4 className="h4">Retours</h4></a></li>
<li className="li"><a href=""className="a1"><h4 className="h4">Model de paiement</h4> </a></li>
<li className="li"><a href=""className="a1"><h4 className="h4">Nous contacter</h4> </a></li>
<li ><a href=""className="a1"><h4 className="h4"> Aide-Codes promo Nike</h4></a></li>
</ul>
<ul className="ul44">
<li className="li"><h1 style={{position:'relative',right:'80px'}}>REJIONS-NOUS</h1></li>
<li className="li"><a href=""className="a1"><h4 className="h4">Nike LinkPP</h4></a></li>
<li className="li"><a href=""className="a1"><h4 className="h4">Nike Run Club</h4></a></li>
<li className="li"><a href=""className="a1"><h4 className="h4">Nike Training Club</h4></a></li>
<li className="li"><a href=""className="a1"><h4 className="h4">SNKRS</h4></a></li>
</ul>
<div className="Fa">
<a href="#"><FaFacebook className="icon"/></a>
<a href="#" ><FaInstagram  className="icon"/></a>
<a href="#" ><FaTiktok className="icon"/></a>
<a href="#" ><FaTwitter className="icon"/></a>
</div>
<p>dskjcnxj</p>
</nav>

<img src={img} className="img"/>

</div>
</div>
)
}