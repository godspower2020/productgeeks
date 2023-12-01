import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Slider = ({ images, productId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const containerStyle = {
    display: 'flex',
    transition: 'transform 0.3s ease-in-out',
    transform: `translateX(${-currentIndex * 100}%)`,
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {currentIndex !== 0 && (
          <div className="slider-icon slider-icon-left" onClick={goToPrev}>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </div>
        )}
        <Link to={`/products/${productId}`}>
          <div className="slider-images" style={containerStyle}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="slider-image"
              />
            ))}
          </div>
        </Link>
        {currentIndex !== images.length - 1 && (
          <div className="slider-icon slider-icon-right" onClick={goToNext}>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
        )}
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'slider-dot active' : 'slider-dot'}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
