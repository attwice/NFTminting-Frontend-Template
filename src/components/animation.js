import React from "react";

const Animation = () => {
  return (
    <div>
      <div className="animation-header purple-text text-center" id="animation">
        Animation
      </div>
      <div className="video-container">
        <video className="video-board" controls autoPlay="autoplay" muted>
          <source src="./video/Donkey_video1 FINAL.mp4" type="video/mp4"/>    
        </video>
        <video className="video-board" controls autoPlay="autoplay" muted>
          <source src="./video/Donkey video 2 FINAL.mp4" type="video/mp4"/>    
        </video>
      </div>
      
    </div>
  );  
};

export default Animation;