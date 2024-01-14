import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '../../Assets/css/Text.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Text() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Button className="Download-button btn-transparent text-200" data-aos="fade-up" data-aos-duration="500">DOWNLOAD</Button>
      <h1 className="custom-text text-white text-200 text-justify" data-aos="fade-up" data-aos-duration="500">THE MEDIA KIT</h1>
    </div>
  )
}

export default Text
