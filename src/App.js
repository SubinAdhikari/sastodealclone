import React from 'react';
import {Switch , NavLink } from 'react-router-dom';
import Topbar from './components/Topbar';
import './App.css';
import Logobar from './components/Logobar';
import NavBar from './components/NavBar';
import ImageSlider from './components/ImageSlider';
import Offer from './components/Offer';
import ProductAdv from './components/ProductAdv';
import FoodEssential from './components/FoodEssential';
import ProductSlider from './components/ProductSlider';
import WorkFromHomeEssential from './components/componentData/WorkFromHomeEssential'
import AdvDiv from './components/AdvDiv';
import EssentialSupplyData from './components/componentData/EssentialSupplyData'
import AdvSecondRow from './components/componentData/AdvSecondRow';
import AdvThirdRow from './components/componentData/AdvThirdRow';
import OurFeature from './components/OurFeature';
import EmailSubscription from './components/EmailSubscription';
import Footer from './components/Footer';
const App = () =>{
  return(
    <>
    <div className="mainDiv">
    <Topbar/>
    <Logobar/>
    <NavBar/>
    <ImageSlider/>
    <Offer/>
    <ProductAdv/>
    <FoodEssential/>
    <ProductSlider title="Essential Supplies" data={EssentialSupplyData}/>
    <AdvDiv data={AdvSecondRow}/>
    <ProductSlider title="Work From Home Essential" data={WorkFromHomeEssential} />
    <AdvDiv data={AdvThirdRow}/>
    <OurFeature/>
    <EmailSubscription/>
    <Footer/>
    </div>
    </>
  );
}
export default App;