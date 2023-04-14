import React from "react";
// import Signup from './signup/Signup';
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './Footer/Footer';
import Categori from './Categorie/Categori';
import Slide from './Slide/Slide'
import Section from'./section/Section';
import Header from './Nav/Header';
import Kids from './Kids/Kids';
import Kids2 from './Kids2/Kids2';
export default  function app1(){
return(
<div style={{overflow:"hidden"}}>

 
<Section/>
 <Header/>
 <Slide/>
 <Categori/>
 <Kids/> 
 <Kids2/> 
 <Footer/>
 </div>)}