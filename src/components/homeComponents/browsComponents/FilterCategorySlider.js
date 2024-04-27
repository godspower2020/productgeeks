import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const FilterCategorySlider = ({ loading, categories, selectedCategory, handleCategoryClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const containerRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    updateButtonVisibility();
  }, [currentIndex, categories.length]);

  const updateButtonVisibility = () => {
    const container = containerRef.current;

    if (container) {
      const containerWidth = container.offsetWidth;
      const contentWidth = container.scrollWidth;

      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(container.scrollLeft < contentWidth - containerWidth);
    }
  };

  const handlePrevCategory = () => {
    setCurrentIndex((prevIndex) => {
      const buttonWidth = containerRef.current.children[0].offsetWidth; 
      const buttonsToScroll = Math.min(6, Math.ceil(containerRef.current.offsetWidth / buttonWidth)); 
      const newIndex = Math.max(prevIndex - buttonsToScroll, 0);
      scrollIntoView(newIndex);
      return newIndex;
    });
  };

  const handleNextCategory = () => {
    setCurrentIndex((prevIndex) => {
      const buttonWidth = containerRef.current.children[0].offsetWidth; 
      const buttonsToScroll = Math.min(6, Math.ceil(containerRef.current.offsetWidth / buttonWidth)); 
      const newIndex = Math.min(prevIndex + buttonsToScroll, categories.length - 1);
      scrollIntoView(newIndex);
      return newIndex;
    });
  };  

  const scrollIntoView = (index) => {
    const container = containerRef.current;
    const element = document.getElementById(`category-${index}`);

    if (element && container) {
      container.scrollLeft = element.offsetLeft - (container.offsetWidth - element.offsetWidth) / 2;
    }
  };

  const handleScroll = () => {
    updateButtonVisibility();
  };

  return (
    <>
      <div className="filter-category-slider">
        {showLeftButton && (
          <div className="category-slider-fading left">
            <div className="category-slider-icon category-slider-icon-left" onClick={handlePrevCategory}>
              <i className="fa fa-long-arrow-left text-black" aria-hidden="true"></i>
            </div>
          </div>
        )}
  
        <div className="filter-category" ref={containerRef} onScroll={handleScroll}>
          {categories.map((category, index) => (
            <Link
              key={index}
              id={`category-${index}`}
              to={{
                pathname: location.pathname, 
                search: `?category=${category.name}`,
              }}
              className={`categoryButton ${selectedCategory === category.name ? 'activeCategory' : ''}`}
              onClick={() => handleCategoryClick(category.name)}
            >
            {category.name}
            </Link>
          ))}
        </div>
  
        {showRightButton && (
          <div className="category-slider-fading right">
            <div className="category-slider-icon category-slider-icon-right" onClick={handleNextCategory}>
              <i className="fa fa-long-arrow-right text-black" aria-hidden="true"></i>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterCategorySlider;