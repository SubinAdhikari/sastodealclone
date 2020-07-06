import React from 'react';
import './style/Offer.css';
import OfferPrice from '../offer.png';
const Offer = () =>{
    return(
        <>
        <div className="offerDiv">
            <img src={OfferPrice} alt="Offer" width="100%" />
        </div>
        </>
    )
}
export default Offer;