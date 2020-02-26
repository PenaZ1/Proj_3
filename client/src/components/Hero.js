import React, { useState } from "react";
// import { ButtonGroup, Button, Dropdown, DropdownButton } from "react-bootstrap";


function Hero() {
  return (       
    <video id="background-video" loop autoPlay muted>
      <source src="./images/clouds.mp4" type="video/mp4" />
        
        Your browser does not support the video tag.
    </video>
  )
}
export default Hero;

