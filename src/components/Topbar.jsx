import React from 'react';
import './style/Topbar.css';

const  Topbar = () =>{
    return(
        <>
        <div className="main">
            <div className="leftDiv">
                <div className="TopBarcontent">
                    <span style={{fontSize:'13px'}}>Connect with us &nbsp;</span>
                    <span style={{fontSize:'13px'}}>|&nbsp;</span>
                    <span style={{fontSize:'13px'}}>Call Us +98726262727</span>
                </div>

            </div>
            <div className="rightDiv">
                <div className="TopBarcontent">
                    <span style={{color:'blue',fontSize:'13px'}}>SELL ON SASTODEAL&nbsp;</span>
                    <span  style={{fontSize:'13px'}}>|&nbsp;</span>
                    <span style={{fontSize:'13px'}}>WISHLIST&nbsp;</span>
                    <span style={{fontSize:'13px'}}>|&nbsp;</span>
                    <span style={{fontSize:'13px'}}>TRACK ORDER</span>
                </div>
            </div>

        </div>
        </>
    )
}
export default Topbar;