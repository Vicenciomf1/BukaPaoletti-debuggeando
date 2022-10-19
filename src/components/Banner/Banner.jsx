import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css"
import ImgItem from './ImgItem';

function Banner() {
    return (
        <Carousel fade indicators={false} controls={false} touch={false} className="carousel">
            <Carousel.Item interval={2000}>
                <ImgItem img="../../../Assets/Banner/pinta.jpg"></ImgItem>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <ImgItem img="../../../Assets/Banner/pinta2.jpg"></ImgItem>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <ImgItem img="../../../Assets/Banner/pinta3.jpg"></ImgItem>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <ImgItem img="../../../Assets/Banner/pinta4.jpg"></ImgItem>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <ImgItem img="../../../Assets/Banner/pinta5.jpg"></ImgItem>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <ImgItem img="../../../Assets/Banner/pinta6.jpg"></ImgItem>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <ImgItem img="../../../Assets/Banner/pinta7.jpg"></ImgItem>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner