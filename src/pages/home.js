import React, { lazy, Suspense, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Assets/css/loader.css"
const Para = React.lazy (()=> import('../components/Home/Para'))
const Example = React.lazy (()=> import('../components/Home/example'))
const TextSlide = React.lazy (()=> import('../components/Home/TextSlide'))
const JoinUs = React.lazy(()=> import('../components/Home/JoinUs'))
const HomePara = React.lazy(()=> import('../components/Home/HomePara')) 
const WaterEffect = React.lazy(()=> import("../components/WaterEffect.js"));

function Home() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <Suspense fallback={<div className="loader-parent"><div class="loader"></div></div>}>
      <WaterEffect />
      <TextSlide />
      <HomePara />
      <Example />
      <div data-aos="fade-down-up"><Para /></div>
      <JoinUs />
      </Suspense>
  )
}

export default Home
