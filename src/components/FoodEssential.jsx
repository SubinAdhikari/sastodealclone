import React from 'react';
import './style/FoodEssential.css';
import FE from '../foodEssentials.jpg';
const FoodEssential = () =>{
    return(
        <div className="fEMainDiv">
                <img src={FE} width="95%" height="100%"  />
        </div>
    )
}
export default FoodEssential;