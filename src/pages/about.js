import React, { lazy, Suspense, useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import "../Assets/css/loader.css"
const AboutDescription = React.lazy (()=> import('../components/AboutDescription'))
const AboutVideo = React.lazy (()=> import('../components/AboutVideo'))
const AboutPara = React.lazy (()=> import('../components/AboutPara'))
const StackingCards = React.lazy (()=> import('../components/StackingCards'))
const Slide = React.lazy (()=> import('../components/Home/Slide'))
const Header = React.lazy(()=> import('../components/header'))

function About() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
<Suspense fallback={<div className="loader-parent"><div class="loader"></div></div>}>
<div className="absolute inset-0 flex items-center justify-center">
      <span className='header-position'><Header /></span>
      <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><AboutDescription /></div>
      <StackingCards />
      <AboutVideo />
      <AboutPara />
      <Slide />
    </div>
    </Suspense>
)
}

export default About