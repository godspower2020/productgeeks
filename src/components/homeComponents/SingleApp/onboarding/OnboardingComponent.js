import React, { useState } from 'react'
import VideoComponent from './VideoComponent';

const OnboardingComponent = ({defaultProduct}) => {
  const [showScreens, setShowScreens] = useState(true);

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
        <div className="flow">
          {showScreens ? (
            defaultProduct && defaultProduct.screensFlow && defaultProduct.screensFlow.map((item) => (
              <img key={item._id} className={`${defaultProduct.platform === 'Mobile' ? 'img-mobile' : 'img-web'}`} src={item.url} alt={defaultProduct.brandName} />
            ))
          ) : (
            <VideoComponent videos={defaultProduct && defaultProduct.videosFlow} />
          )}
        </div>
      </div>
    </>
  )
}

export default OnboardingComponent