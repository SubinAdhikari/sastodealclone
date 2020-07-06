import React from 'react';
import './style/OurFeature.css';
import Feature1 from '../Feature1.png';
import Feature2 from '../Feature2.png';
import Feature3 from '../Feature3.png';
import Feature4 from '../Feature4.png';

const OurFeature = () =>{
    return(
        <div className="OurFeatureMainDiv">
            <div className="featureHere">

                <div className="box">
                    <div className="boxLogo"><img src={Feature1} style={{width:'20%',height:'50%'}}/><br/></div>
                    <div className="boxTitle">Secure Payment</div>
                </div>
                <div className="box">
                    <div className="boxLogo"><img src={Feature2} style={{width:'20%',height:'50%'}}/><br/></div>
                    <div className="boxTitle">Verified Seller</div>
                </div>
                <div className="box">
                    <div className="boxLogo"><img src={Feature3} style={{width:'20%',height:'50%'}}/><br/></div>
                    <div className="boxTitle">OnTime Delivery</div>
                </div>
                <div className="box" style={{borderRight:'0px'}}>
                    <div className="boxLogo"><img src={Feature4} style={{width:'20%',height:'50%'}}/><br/></div>
                    <div className="boxTitle">Excellent Customer Service</div>
                    
                </div>

            </div> 
        </div>
    )
}
export default OurFeature;