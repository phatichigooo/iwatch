import React from 'react';

import { Link } from 'react-router-dom';


const VideoBackground = () => (
  <div>
  <video autoPlay loop className="video-background" muted plays-inline>
      <source src="./assets/img/introwatch.mp4" type="video/mp4" />
  </video>
  
  </div>
);

export default VideoBackground;
