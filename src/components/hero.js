import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { Card } from 'react-bootstrap';

const HeroSection = () => {
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const cardsElement = cardsRef.current;

    // Register TextPlugin
    gsap.registerPlugin(TextPlugin);

    // Text animation
    gsap.from(textElement, {
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.05,
      ease: 'power4.out',
      text: 'Hero Section',
    });

    // Scroll animation for cards
    gsap.from(cardsElement, {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: cardsElement,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div>
      <h1 ref={textRef}>Hero Section</h1>

      <div ref={cardsRef}>
        <Card>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>Content for Card 1</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>Content for Card 2</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>Content for Card 3</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HeroSection;
