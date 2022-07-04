/**
 * Requirements:
 *
 * 1. Takes an arbitrary amount of images as children
 * 1b Verifies that all children are image tags?
 * 2. Calculates the appropriate height for triggering based on image heights
 * 3. Mobile responsive!
 */
import React, { useRef, useEffect, createRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  // No harm in registering a plugin multiple times, so this component
  // can safely be used multiple times on the same page
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

function ScrollMultiImage({ children }) {
  const triggerDiv = useRef(null);
  // const img2 = useRef(null);
  // const img3 = useRef(null);
  // const img4 = useRef(null);

  const [imageRefs, setImageRefs] = React.useState([]);

  useEffect(() => {
    // add or remove refs
    setImageRefs((elRefs) =>
      Array(children.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        pin: true,
        trigger: triggerDiv.current,
        start: "top top",
        end: "+=1000px", // Image height + a bit?
        scrub: 1,
      },
    });

    imageRefs.forEach((imageRef) => {
      timeline.to([imageRef.current], {
        opacity: 1,
      });
    });

    // timeline
    //   .to([img2.current], {
    //     opacity: 1,
    //   })
    //   .to([img3.current], {
    //     opacity: 1,
    //   })
    //   .to([img4.current], {
    //     opacity: 1,
    //   });
  }, []);

  const Container = styled.div`
    height: 1900px; // Needs to be the height of the whole distance to scroll
    margin: 0 0 var(--space-80);
  `;

  // Work out how much of this styling is necessary. Position sticky?
  const TriggerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    top: 0;
    height: auto;
    margin-bottom: 600px;
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
  `;

  return (
    <Container>
      <TriggerDiv ref={triggerDiv}>
        {/* <div>
          <h3>Greensock in Plain English</h3>
          <p>
            Greensock is a JavaScript library that changes DOM nodes directly.
            Once our browser has read the HTML document of a website, it
            transforms it into a set of DOM nodes - all our usual div's,
            paragraphs, and images. Greensock then manipulates those nodes to
            create our animations.
          </p>
        </div> */}

        {children.map((el, i) => {
          const zIndex = i + 1;
          const childProp = i === 0 ? "" : "childImage";
        })}

        <Img
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

export default ScrollMultiImage;
