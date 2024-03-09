import React, { useState } from 'react'
import VideoComponent from './VideoComponent';

const OnboardingComponent = ({product}) => {
  const [showScreens, setShowScreens] = useState(true);

  return (
    <>
      <div className="screen-video-version-button">
        <div className="screen-video-button">
          <div className={`screen-button ${showScreens ? 'active' : ''}`} onClick={() => setShowScreens(true)}>
            <p>screens</p>
          </div>
          <div className={`video-button ${!showScreens ? 'active' : ''}`} onClick={() => setShowScreens(false)}>
            <p>Video Process Flow</p>
          </div>
        </div>
        <div className="version">
          <p className="version-text">version</p>
          <div className="d-inline-block">
            <div className="version-button">
              <p>Aug 2023 (Latest)</p>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="product-flows">
        <div className="flow">
          {showScreens ? (
            product && product.screensFlow && product.screensFlow.map((item) => (
              <img key={item._id} className={`${product.platform === 'Mobile' ? 'img-mobile' : 'img-web'}`} src={item.url} alt={product.brandName} />
            ))
          ) : (
            <VideoComponent videos={product && product.videosFlow} />
          )}
        </div>
      </div>
    </>
  )
}

export default OnboardingComponent