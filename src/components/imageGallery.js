import React, { useState } from 'react';
import '../Assets/css/Water.css';
import img1 from '../Assets/images/land1.jpg';
import img2 from '../Assets/images/land2.jpg';
import img3 from '../Assets/images/land3.jpg';
import img4 from '../Assets/images/land4.jpg';
import img5 from '../Assets/images/land5.jpg';
import img6 from '../Assets/images/land6.jpg';
import img7 from '../Assets/images/land7.jpg';
import img8 from '../Assets/images/land8.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ImageGallery = () => {
  const [hovered, setHovered] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleMouseEnter = () => {
    setHovered(true);
    setActiveImageIndex(0);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setActiveImageIndex(0);
  };

  const handleTransitionEnd = () => {
    if (hovered) {
      const nextIndex = (activeImageIndex + 1) % images.length;
      setActiveImageIndex(nextIndex);
    }
  };

  return (
    <div>
      <img
        className="transition-image"
        src={images[activeImageIndex]}
        alt={`Gallery alternate ${activeImageIndex + 1}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
};

export default ImageGallery;
