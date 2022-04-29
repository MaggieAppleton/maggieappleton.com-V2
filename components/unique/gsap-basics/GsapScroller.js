import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { breakpoints } from "../../../utils/breakpoints";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

function GsapScroller() {
  const pinDiv = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: [pinDiv.current],
        start: "top top",
        end: "+=800px",
        scrub: 1,
      },
    });

    timeline
      .to([img2.current], {
        opacity: 1,
      })
      .to([img3.current], {
        opacity: 1,
      })
      .to([img4.current], {
        opacity: 1,
      });
  }, []);

  const Container = styled.div`
    height: 1800px;
    margin: 0 0 var(--space-80);
    position: static;
    display: block;
    @media ${breakpoints.mediaSM} {
      height: auto;
      margin-bottom: 0;
    }
  `;

  const TriggerDiv = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    top: 0;
    height: auto;
    margin-bottom: 600px;
    @media ${breakpoints.mediaSM} {
      position: static;
      margin-bottom: 0;
    }
  `;

  const Img = styled.img`
    width: 100%;
    max-width: 580px;
    margin: 0.4rem auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 320px;
    opacity: ${({ childImage }) => (childImage ? 0 : 1)};
    z-index: ${(props) => props.zIndex};
    display: ${({ topImage }) => (topImage ? "inline-block" : "")};
    @media ${breakpoints.mediaSM} {
      display: none;
      position: ${({ topImage }) => (topImage ? "relative" : "")};
      top: ${({ topImage }) => (topImage ? "0" : "320px")};
      margin: ${({ topImage }) => (topImage ? "0" : "0.4em auto")};
    }
  `;

  return (
    <Container>
      <TriggerDiv ref={pinDiv}>
        <div>
          <h3>Greensock in Plain English</h3>
          <p>
            Greensock is a JavaScript library that changes DOM nodes directly.
            Once our browser has read the HTML document of a website, it
            transforms it into a set of DOM nodes - all our usual div's,
            paragraphs, and images. Greensock then manipulates those nodes to
            create our animations.
          </p>
        </div>
        <Img
          topImage
          alt="Greensock animation changes DOM nodes"
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/c_scale,f_auto,q_auto:good,w_1200/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM.jpg"
        />
        <Img
          childImage
          zIndex={2}
          ref={img2}
          alt="Greensock animation changes DOM nodes"
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/c_scale,f_auto,q_auto:good,w_1200/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-2.jpg"
        />
        <Img
          childImage
          zIndex={3}
          ref={img3}
          alt="Greensock animation changes DOM nodes"
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/c_scale,f_auto,q_auto:good,w_1200/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-3.jpg"
        />
        <Img
          childImage
          zIndex={4}
          ref={img4}
          alt="Greensock animation changes DOM nodes"
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/c_scale,f_auto,q_auto:good,w_1200/v1599595798/maggieappleton.com/notes/gsap/GSAP-DOM-4.jpg"
        />
      </TriggerDiv>
    </Container>
  );
}

export default GsapScroller;
