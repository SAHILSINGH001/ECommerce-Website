import React,{useState,useEffect} from 'react';
import "./scss/index.scss";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Categories from './components/Categories';
import Recommnd from './components/Recommnd';
import Choose from './components/Choose';
import Product from './components/Product';
import Promo from './components/Promo';
import Footer from './components/Footer';
import scrollreveal from 'scrollreveal';
export default function App() {
  const [theme,setTheme]=useState("dark");
  const changeTheme=()=>{
    theme==="dark"?setTheme("light"):setTheme("dark");
  }
  useEffect(()=>{
    const registerAnimation=()=>{
      const sr=scrollreveal({
         origin:"bottom",
         distance:"80px",
         duration:1000,
         reset:false,
      });
      sr.reveal(`
      nav,.home,.categories-container,.choose-us-container,.product-container,.promo-container,.recommend-container,.services-container,footer
      `,{
        interval:500,
      })
    };
    registerAnimation();
  })
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);
  return (
    <div className='app' data-theme={theme}>
   
    <Navbar changeTheme={changeTheme} currentTheme={theme}/>
    <Home/>
    <Services/>
    <Categories/>
    <Recommnd/>
    <Choose/>
    <Product/>
    <Promo/>
    <Footer/>
    </div>
  )
}


