import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const TweenBlueRedBox = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      [boxRef.current],
      {
        background: "#D93654",
      },
      {
        scrollTrigger: {
          trigger: [boxRef.current],
          start: "top 70%",
          end: "bottom 15%",
          scrub: true,
        },
        background: "#93D0D9",
      }
    );
  });

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        margin: "2rem auto 0",
        borderRadius: "4px",
      }}
    />
  );
};

export default TweenBlueRedBox;
