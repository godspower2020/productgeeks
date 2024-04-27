import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselData = [
    { title: "Discover | Optimize | Share", description: "Explore the world of user experiences." },
    { title: "Cool mobile and web screens", description: "Get inspired by the work of millions of top-rated designers & agencies around the world." },
    { title: "World's design destination", description: "Search the creative world at work" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % carouselData.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
        <div className="carousel-inner">
            {carouselData.map((item, index) => (
                <CarouselItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    isActive={index === currentIndex}
                    index={index}
                />
            ))}
        </div>
        <Link to="/register">
            <button type="button">Create free account</button>
        </Link>
        <div className="carousel-dots">
            {carouselData.map((_, index) => (
            <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
            ></span>
            ))}
        </div>
    </div>
  );
}

const CarouselItem = ({ title, description, isActive, index }) => {
    const colors = ['#8644A2', '#5F5D9C', '#D74B76'];

  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`} style={{ backgroundImage: `url('/img/carousel1.png')` }}>
      <div className={`carousel-text`}>
        <h1 style={{ color: colors[index] }}>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Carousel;
