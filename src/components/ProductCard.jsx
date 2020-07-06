import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import './style/ProductSlider.css';
import Prod1 from '../prod1.jpg'

// import EssentialSupplyData from './componentData/EssentialSupplyData';
// import WorkFromHomeEssential from './componentData/WorkFromHomeEssential';

const ProductCard = (props) =>{
    return(
        <>
        <div className="productSliderMain">
             
            <div className="ProductList">
            <CardGroup>


            {  props.data.map((data)=>{
              return(
                
                <Card style={{height:'310px',marginRight:'3px'}} id="grow">
                  <Card.Img variant="top" style={{height:'65%'}} src={data.img}/>
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    {/* <Card.Text>
                    </Card.Text> */}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted" >Starting From रू {data.price}</small>
                    
                  </Card.Footer>
                </Card>
               
              
            );

            })
        }

        




        
        
</CardGroup>


</div>


        </div>
        </>

    )
}
export default ProductCard;