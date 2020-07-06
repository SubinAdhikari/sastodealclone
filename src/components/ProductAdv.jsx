import React from 'react';
import './style/ProductAdv.css';
import adv1 from '../adv1.jpg';
import firstBox from '../firstBox.jpg';
import box1 from '../box1.jpg';
import box3 from '../box3.jpg';

const ProductAdv = () =>{
    return(
        <div className="productAdvMainDiv">
                <div className="firstRow">
                        <img src={adv1} width="94%" height="80%" />
                </div>

                <div className="secondRow">
                    <div className="firstBox">
                         <img src={firstBox} width="80%" height="100%" />
                    </div>

                    <div className="secondBox">
                        <div className="row1">
                            <div className="box1">
                            <img src={box1} width="80%" height="80%" />
                            </div>
                            <div className="box2">
                            <img src={box3} width="80%" height="80%" />
                            </div>
                        </div>
                        <div className="row2">    
                            <div className="box3">
                            <img src={box3} width="80%" height="80%" />
                            </div>
                            <div className="box4">
                            <img src={box1} width="80%" height="80%" />
                            </div>
                        </div>
                    </div>

                </div>

        </div>
    )
}
export default ProductAdv;