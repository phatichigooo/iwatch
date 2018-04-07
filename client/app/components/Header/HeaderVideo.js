import React from 'react';
import { Link } from 'react-router-dom';

const HeaderVideo = () => (
  <div>
        <article>
          <h1>GROSS DESIGN co. <br /> <span>(Made by <a href="http://mattgross.io" target="_blank">Matt Gross</a>, for <a href="https://evenvision.com">EvenVision</a>)</span></h1>
          
        </article>
        
        {/*  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  */}
        <video autoPlay loop id="video-background" muted plays-inline>
          <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>
);

export default HeaderVideo;
