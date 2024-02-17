import React from 'react'
import { Link } from 'react-router-dom'

import CarouselSlider from './CarouselSlider';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="mt-5 carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators my-0">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active indicate" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} className="indicate" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} className="indicate" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
            <CarouselSlider active imgSrc="/img/carousel1.png" title="Discover | Optimize | Share" description="Explore the world of user experiences." />
            <CarouselSlider imgSrc="/img/carousel1.png" title="Another Title" description="Another description." />
            <CarouselSlider imgSrc="/img/carousel1.png" title="Yet Another Title" description="Yet another description." />
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel