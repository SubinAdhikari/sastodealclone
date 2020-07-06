import React from 'react';
import './style/NavBarMobile.css';
import NavBarData from './componentData/NavBarData';



const NavBarMobile = () =>{
    return(
        <div className="hamburgerMenu">
             

                    <label for="toggle">&#9776;</label>
                    <input type="checkbox" id="toggle"/>

            <nav>
                
            <ul>
            {  NavBarData.map((data)=>{
                        return(
                            <>
                            <li>{data.category}</li> 
                            </>
                            
                    );
  
                    })
                    } 


            </ul>
            </nav>
        </div>
    )
}
export default NavBarMobile;