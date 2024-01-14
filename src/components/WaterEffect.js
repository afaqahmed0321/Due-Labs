import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery.ripples";
import "./../Assets/css/Water.css";
import { MotionLogo } from "./motionLogo";

function WaterEffect() {
  const elementRef = useRef(null);

  useEffect(() => {
    $(elementRef.current).ripples({
      resolution: 256,
      perturbance: 0.01,
    });

    return () => {
      $(elementRef.current).ripples("destroy");
    };
  }, []);

  return (
    <>
      <div className="position-relative">
        <div className="full-landing-image" ref={elementRef}></div>
        <div className="position-absolute top-50 start-50 translate-middle">
          <MotionLogo />
        </div>
      </div>
    </>
  );
}

export default WaterEffect;
