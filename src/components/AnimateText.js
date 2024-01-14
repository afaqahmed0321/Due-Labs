import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const lines = textRef.current.children;
    gsap.set(lines, { opacity: 0, y: 100 });

    gsap.to(lines, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {   
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
  }, [text]);

  return <div ref={textRef}><p className='animted-text'>{text}</p></div>;
};

export default AnimatedText;
