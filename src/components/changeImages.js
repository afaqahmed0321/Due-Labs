import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Slider2 from '../Assets/images/slider2.jpg';
const ChangeImages = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
        <img src='../Assets/images/slider3.jpg'/>
      <Image
        src={hovered ? Slider2 : 'Slider1.jpg'}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className={hovered ? 'hovered custom-size' : 'custom-size'}
      />
    </div>
  );
};

export default ChangeImages;




