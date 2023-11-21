// VideoComponent.js
import React from "react";
import "./VideoComponent.css"; // Import your CSS file

const VideoComponent = () => {
  const videoUrl = "https://www.youtube.com/embed/zWh3CShX_do";

  return (
    <div className='flex-container'>
      <div className='video-container'>
        <h1 className='video-heading'>Video Demonstration</h1>
        <div className='video-wrapper'>
          <iframe
            title='Video Demonstration'
            className='video-iframe'
            src={videoUrl}
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
