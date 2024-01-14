import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";


function Header() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (


    <div className="App text-200 fw-bolder" data-aos="fade-left" data-aos-duration="2000">

      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("ABOUT")
            .pauseFor(500)
            .deleteAll()
            .typeString("ABOUT")
            .start();
        }}
      />
      {/* <div className='text-center'>
        <h1 className='text-200' data-aos="fade-left" data-aos-duration="2000">ABOUT</h1>
      </div> */}
    </div>

  )
}

export default Header
