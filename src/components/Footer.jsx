import React from 'react';
import './style/Footer.css';
import Logo from '../SDLogo_White-Logo.png';

const Footer = () =>{
    return(
        <div className="FooterMain">
            <div className="centerDiv">
                <div className="Footerbox">
                <img  src={Logo} style={{width:'100%',height:'15%'}}/><br/>
               <h6 style={{color:'#48AFBD'}}>Online Shopping Nepal</h6>
                </div>
                <div className="Footerbox">
               <h7 style={{paddingLeft: '10px'}}><b> About Us </b></h7>
                        <div className="FooterhyperLink">
                            <h7>About Sastodeal</h7>
                        </div>
                </div>
                <div className="Footerbox">
                <h7 style={{paddingLeft: '10px'}}> <b>Information</b> </h7>
                        <div className="FooterhyperLink">
                            <h7>FAQ</h7>
                            <h7>Return & Refund Poilicy</h7>
                            <h7>Privacy Policy</h7>
                        </div>
                </div>
                <div className="Footerbox">
                <h7 style={{paddingLeft: '10px'}}> <b>Life with us </b></h7>
                             <div className="FooterhyperLink">
                             <h7>Feature your Business</h7>
                            </div>
                </div>
                <div className="Footerbox">
                <h7 style={{paddingLeft: '10px'}}><b> Follow us on </b></h7>
                            <div className="FooterhyperLink">
                            <h7>Facebook</h7>
                            <h7>Instagram</h7>
                            <h7>Youtube</h7>
                            </div>
                </div>
                <div className="Footerbox">
                <h7 style={{paddingLeft: '10px'}}> <b>Customer Support </b></h7>
                        <div className="FooterhyperLink">
                        <h7>Call us at 015970000</h7>
                        <h7>Sastodeal Customer Service</h7>
                        <h7>Hours:</h7>
                        <h7>Sunday - Friday: 7 AM to 7 PM</h7>
                        <h7>(Call Center) | 9 AM to 11 PM</h7>
                        <h7>(Social Media)</h7>
                        <h7>Saturday: 9 AM to 5 PM (Call</h7>
                        <h7>Center) | 9 AM to 11 PM (Social</h7>
                        <h7>Media)</h7>
                        <h7>You can also mail us at</h7>
                        <h7>support@sastodeal.com</h7> 

                        </div>
                </div>
                
            </div>
            
            <div className="footerCredit">
           <span style={{color:'#8E68B1',fontWeight:'bold'}}> Sastodeal Pvt. Ltd.,</span>
           <span style={{color:'#3DA89F',fontWeight:'bold'}}>
                Tripureshwor, Kathmandu, Nepal
            </span>
            </div>
        
        </div>
    )
}
export default Footer;