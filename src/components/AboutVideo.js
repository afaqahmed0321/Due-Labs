import React, { useEffect, useRef } from "react";

export default function AboutVideo() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="App">
      <div>
        <video
          style={{ maxWidth: "100%", width: "1800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          alt="All the devices"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          ref={videoEl}
        />
      </div>
    </div>
  );
}