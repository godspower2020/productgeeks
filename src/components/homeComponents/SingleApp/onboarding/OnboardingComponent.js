import React, { useState } from 'react';
import VideoComponent from './VideoComponent';

const OnboardingComponent = ({ defaultProduct }) => {
  const [showScreens, setShowScreens] = useState(true);

  const handleContextMenu = e => {
    e.preventDefault();
  };

  const renderScreensByCategory = category => {
    return (
      defaultProduct &&
      defaultProduct.screensFlow
        .filter(screen => screen.screensCategory === category)
        .map(screen => (
          <img
            key={screen._id}
            className={`${defaultProduct.platform === 'Mobile' ? 'img-mobile' : 'img-web'}`}
            src={screen.url}
            alt={defaultProduct.brandName}
            onContextMenu={handleContextMenu}
          />
        ))
    );
  };

  const renderCategories = () => {
    const categories = defaultProduct.screensFlow.reduce((acc, screen) => {
      if (!acc.includes(screen.screensCategory)) {
        acc.push(screen.screensCategory);
      }
      return acc;
    }, []);

    return categories.map(category => (
      <div key={category} className="category">
        <p className='mt-3 text-black'>{category}</p>
        <div className='screens-container'>
          <div className="screens">{renderScreensByCategory(category)}</div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="screen-video-button">
        <div className="screen-video-button">
          <div className={`screen-button ${showScreens ? 'active' : ''}`} onClick={() => setShowScreens(true)}>
            <p>screens</p>
          </div>
          <div className={`video-button ${!showScreens ? 'active' : ''}`} onClick={() => setShowScreens(false)}>
            <p>Video Process Flow</p>
          </div>
        </div>
      </div>
      <div className="product-flows">
        <>
          {showScreens ? (
            <div className="categories-container">{renderCategories()}</div>
          ) : (
            <VideoComponent videos={defaultProduct && defaultProduct.videosFlow} />
          )}
        </>
      </div>
    </>
  );
};

export default OnboardingComponent;
