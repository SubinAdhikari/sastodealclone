import React from 'react';
import './style/ImageSlider.css';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../image1.jpg';
import image2 from '../image2.png';
import image3 from '../image3.jpg';

const ImageSlider = () =>{
    return(
        <>
        <div className="imageSlider">
        <div class="Slidercontain">
                    <Carousel className="slider">
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                // src={Pimage}
                                src={image1}
                                alt="First slide"
                                width="98%"
                                height="100%"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                // src={profile}
                                src={image2}
                                alt="Second slide"
                                width="98%"
                                height="100%"
                                />

                                {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                // src={work1}
                                src={image3}
                                alt="Third slide"
                                width="98%"
                                height="100%"
                                />

                                {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                    </div>
        </div>
        </>
    )
}
export default ImageSlider;