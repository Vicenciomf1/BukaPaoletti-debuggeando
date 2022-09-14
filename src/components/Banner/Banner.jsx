import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css"

function Banner() {
    return (
            <Carousel fade indicators={false} controls={false} touch={false} className="carousel">
                <Carousel.Item interval ={2000}>
                    <img
                        className="d-block w-100 m-auto"
                        src="./img/latas.jpg"
                        alt="latas" />
                </Carousel.Item>
                <Carousel.Item interval ={2000}>
                    <img
                        className="d-block w-100 m-auto"
                        src="./img/latas2.jpg"
                        alt="latas" />
                </Carousel.Item>
                <Carousel.Item interval ={2000}>
                    <img
                        className="d-block w-100 m-auto"
                        src="./img/latas3.jpg"
                        alt="latas" />
                </Carousel.Item>
                <Carousel.Item interval ={2000}>
                    <img
                        className="d-block w-100 m-auto"
                        src="./img/pinta.jpg"
                        alt="latas" />
                </Carousel.Item>
                <Carousel.Item interval ={2000}>
                    <img
                        className="d-block w-100 m-auto"
                        src="./img/pintaArena.jpg"
                        alt="latas" />
                </Carousel.Item>
            </Carousel>
    )
}

export default Banner