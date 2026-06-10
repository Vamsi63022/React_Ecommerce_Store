import React from "react";
// import ReactDOM from "react-dom/client";
import "./App.css";
import LandingPage from './stores/pages/LandingPage';
import Navbar from "./stores/components/Navbar";
// import Woman from "./stores/components/Woman";
// import Furniture from "./stores/components/Furniture";
// import Ac from "./stores/components/Ac";
import MobilePage from "./stores/pages/MobilePage";
import WomanPage from './stores/pages/WomanPage'
import MenPage from "./stores/pages/MenPage";
import AcPage from "./stores/pages/AcPage";
import FurniturePage from "./stores/pages/FurniturePage";
import WatchPage from "./stores/pages/WatchPage";
import TvPage from "./stores/pages/TvPage";
import LoginSignup from "./stores/pages/LoginSignup";

import Computer from "./stores/components/Computer";
// import Watch from "./stores/components/Watch";
// import Tv from "./stores/components/Tv";
import UserCart from './stores/UserCart'
import BannerCarousel from "./stores/components/BannerCarousel";
import Footer from "./stores/components/Footer";
import MobileSingle from './stores/singles/MobileSingle'
import AcSingle from "./stores/singles/AcSingle";
import WomanSingle from "./stores/singles/WomanSingle";
import MenSingle from "./stores/singles/MenSingle";
import FurnitureSingle from "./stores/singles/FurnitureSingle";
import WatchSingle from "./stores/singles/WatchSingle";
import TvSingle from "./stores/singles/TvSingle";


import {Routes,Route} from 'react-router-dom'

const App = () =>{
return(
    <>
    <Navbar />
    <Routes>
        <Route path ="/BannerCarousel" element ={<BannerCarousel/>}/>
        <Route path = "/Mobiles" element ={<MobilePage/>}/>
        <Route path = "/Computer" element ={<Computer/>}/>
        {/* <Route path = "/Watch" element ={<Watch/>}/> */}
        {/* <Route path = "/Woman" element ={<Woman/>}/> */}
        {/* <Route path = "/Furniture" element ={<Furniture/>}/> */}
        {/* <Route path = "/Ac" element ={<Ac/>}/> */}
        {/* <Route path = "/Tv" element ={<Tv/>}/> */}
        <Route path='/mobiles/:id' element = {<MobileSingle />} />
        <Route path='/woman/:id' element = {<WomanSingle />} />
         <Route path='/men/:id'  element={<MenSingle />} />  
        <Route path='/ac/:id' element = {<AcSingle />} />
        <Route path='/furniture/:id'  element={<FurnitureSingle />} /> 
          <Route path = '/Watch/:id' element ={<WatchSingle/>}/>
              <Route path = '/tv/:id' element ={<TvSingle/>}/>

        <Route path='/woman' element= {<WomanPage />} />
        <Route path='/men'  element={<MenPage />} />  
        <Route path='/furniture'  element={<FurniturePage />} /> 
        <Route path='/ac' element={<AcPage />} />
          <Route path = "/Watch" element ={<WatchPage/>}/>
             <Route path = "/tv" element ={<TvPage/>}/>
             <Route path="/login" element={<LoginSignup />} />
        <Route path='/' element = { <LandingPage />}/>
           <Route path='/cart' element = {<UserCart />} />
    </Routes>
    <Footer />
    </>
);
}

export default App;
