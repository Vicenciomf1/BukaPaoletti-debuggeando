import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css"


function Banner() {
    return (
        <Carousel fade indicators={false} controls={false} touch={false} className="carousel">
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 m-auto"
                    src="../../../Assets/Banner/pinta.jpg"
                    alt="latas" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 m-auto"
                    src="../../../Assets/Banner/pinta2.jpg"
                    alt="latas" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 m-auto"
                    src="../../../Assets/Banner/pinta3.jpg"
                    alt="latas" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 m-auto"
                    src="../../../Assets/Banner/pinta4.jpg"
                    alt="latas" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 m-auto"
                    src="../../../Assets/Banner/pinta5.jpg"
                    alt="latas" />
            </Carousel.Item>
            <Carousel.Item interval ={2000}>
                    <img
                        className="d-block w-100 m-auto"
                        src="../../../Assets/Banner/pinta6.jpg"
                        alt="latas" />
                </Carousel.Item>
                <Carousel.Item interval ={2000}>
                    <img
                        className="d-block w-100 m-auto"
                        src="../../../Assets/Banner/pinta7.jpg"
                        alt="latas" />
                </Carousel.Item>
        </Carousel>
    )
}

export default Banner