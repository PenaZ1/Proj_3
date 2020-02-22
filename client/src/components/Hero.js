import React, { useState } from "react";
import { ButtonGroup, Button, Dropdown, DropdownButton } from "react-bootstrap";


function Hero() {
  return (       
    <video id="background-video" loop autoplay>
      <source src="./images/video.mp4" type="video/mp4" />
        {/* <source src="" type="video/mp4"> */}
        {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg"> */}
        Your browser does not support the video tag.
    </video>
  )
}
export default Hero;
services/app.css:
#background-video {
  height: 200px;
}