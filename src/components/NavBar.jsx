import React from 'react';
import './style/NavBar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavBarData from './componentData/NavBarData';


const NavBar = () =>{
    return(
        <>
        <div className="navbarMain">
            <div className="navBarCenterDiv">
                    {/* <div className="navBarCategory">
                    <ExpandMoreIcon/>
                    </div> */}

                    {  NavBarData.map((data)=>{
                        return(
                            <div className="navBarCategory">
                            <span>{data.category}</span>  
                            <ExpandMoreIcon style={{color:'white'}} className="expandDiv"/> 
                            </div>
                    );
  
                    })
                    } 


            </div>
            
            
        </div>
        </>
    )
} 
 



export default NavBar;