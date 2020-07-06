import React from 'react';
import './style/ProductTitle.css';
const ProductTitle = (props) =>{
    return(
        <div className="titleDiv" >
        {props.title}
        </div>
    )
}
export default ProductTitle;