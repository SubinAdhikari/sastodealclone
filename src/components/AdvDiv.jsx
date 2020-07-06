import React from 'react';
import './style/AdvDiv.css';
import Adv1 from './componentData/Adv1.jpg'
import Adv2 from './componentData/Adv2.jpg'
import Adv3 from './componentData/Adv3.jpeg'

const AdvDiv = (props) =>{
    return(
        
        <div className="AdvDivMain">
            <div className="advHere">
                
            {  props.data.map((data)=>{
              return(
                
                    <div className="firstAdv">
                    {/* {data.name} */}
                    <img src={Adv1} alt={data.name} style={{width:'100%',height:'100%'}}/>
                    </div>
               
              
            );

            })
        }

                    
            </div>
            
        </div>
    )
}
export default AdvDiv;