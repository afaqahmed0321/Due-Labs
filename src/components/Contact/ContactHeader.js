import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";


function PressHeader() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App text-200 fw-bolder text-white" data-aos="fade-left" data-aos-duration="2000">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("PRESS")
            .pauseFor(500)
            .deleteAll()
            .typeString("PRESS")
            .start();
        }}
      />
    </div>
  )
}

export default PressHeader
