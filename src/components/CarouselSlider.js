import React from 'react';
import { Link } from 'react-router-dom';

const CarouselSlider = ({ active, imgSrc, title, description }) => {
  return (
    <div className={`carousel-item ${active ? 'active' : ''}`}>
      <img src={imgSrc} className="d-block w-100" alt="..." />
      <div className='carousel-text'>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to="/login">
          <button type="button">Create free account</button>
        </Link>
      </div>
    </div>
  );
}

export default CarouselSlider;
