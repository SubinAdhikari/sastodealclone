import React from 'react';
import './style/Logobar.css';
import Logo from '../SDLogo_White-Logo.png';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavBarMobile from './NavBarMobile';
const Logobar = () =>{
    return(
        <>
        <div className="mainLogoDiv">
            <div className="logoContent"> 

        

                    {/* NavBar for Mobile Device */}
                        <NavBarMobile/>
                    {/* Navbar for Mobile Device End */}


                    <div className="logo">
                    {/* <h1>LOGO</h1> */}
                    <img  src={Logo} style={{width:'75%',height:'40%'}}/>
                    </div>
                    <div className="searchBar">
                    {/* <h1>SEARCH BAR</h1> */}
                    <input type="text" name="search" placeholder="search entire store here..." autoComplete="off" style={{width:'90%',height:'40%',borderRadius:'5px',borderColor:'skyBlue',outline:'none'}}/>
                    </div>
                    <div className="signIn">
                    {/* <h1>SIGN IN</h1> */}
                        <div className="signInLogo">
                            <PersonOutlineIcon style={{width:'70%',height:'70%'}}/>
                        </div>
                        <div className="signInContent">
                            <div className="nameste"><span style={{fontSize:'12px'}}>Nameste, Sign In</span></div>
                            <div className="myaccount"><span style={{fontWeight:'bold',fontSize:'12px'}}>My Account</span><ExpandMoreIcon className="expandIconMyAccount"/>
                            <div className="displayData">
                                SUBIN

                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart">
                    <AddShoppingCartIcon /> <span style={{fontSize:'16px'}}>My Cart </span><ExpandMoreIcon className="expandIconMyCart"/>
                    
                    </div>
            </div>
        </div>
        </>
    )
}
export default Logobar;