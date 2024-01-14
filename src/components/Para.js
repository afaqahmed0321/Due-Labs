import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const ScrambleTextComponent = ({ scrambledText }) => {
  const textRef = useRef(null);
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const textElement = textRef.current;
    const chars = Array.from(scrambledText);
    setChars(chars);

    const scrambleText = () => {
      const newChars = chars.map((char) =>
        Math.random() < 0.5 ? char : getRandomChar()
      );
      setChars(newChars);

      gsap.fromTo(
        textElement,
        {
          opacity: 0,
          scale: 0,
          y: -20,
          rotation: -90,
          transformOrigin: "50% 50%",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 5,
          stagger: 0.05,
          ease: "back.out(2)",
          onComplete: () => {
            gsap.to(textElement, {
              opacity: 0,
              scale: 0,
              y: 20,
              rotation: 90,
              duration: 0.2,
              transformOrigin: "50% 50%",
            });
          },
        }
      );
    };

    const interval = setInterval(scrambleText, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [scrambledText]);

  const getRandomChar = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  };

  return <h1 ref={textRef}>{chars.join("")}</h1>;
};

export default ScrambleTextComponent;
