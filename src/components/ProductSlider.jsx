import React from 'react';
import ProductCard from './ProductCard';
import ProductTitle from './ProductTitle';
const ProductSlider = (props) =>{
    return(
        <>
        <ProductTitle title={props.title}/>
        <ProductCard data={props.data}/>

        </>

    )
}
export default ProductSlider;