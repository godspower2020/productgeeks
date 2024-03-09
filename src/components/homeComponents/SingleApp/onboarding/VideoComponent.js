import React from 'react';

const VideoComponent = ({ videos }) => {
  if (videos && videos.length > 0) {
    const firstVideo = videos[0];

    return (
      <div className='videos'>
        <video controls>
          <source src={firstVideo.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  } else {
    return (
      <div className='no-single-video'>
        <i class="far fa-video-slash"></i>
        <p>No video available</p>
      </div>
    );
  }
};

export default VideoComponent;
