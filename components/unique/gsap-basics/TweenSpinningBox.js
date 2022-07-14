import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const TweenSpinningBox = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to([boxRef.current], {
      scrollTrigger: {
        trigger: [boxRef.current],
        start: "top 70%",
        end: "bottom 15%",
        scrub: true,
      },
      x: "+=20vw",
      rotation: 360,
    });
  });

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        background: "#2D2A55",
        borderRadius: "4px",
        margin: "2em",
      }}
    />
  );
};

export default TweenSpinningBox;
