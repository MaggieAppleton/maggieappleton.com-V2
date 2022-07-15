import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { breakpoints } from "../../utils/breakpoints";


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

function ScrollingImages({ data, title }) {
  const triggerDiv = useRef(null);
  // autogenerate number of refs based on length of input array
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);

  const refsArray = [img1, img2, img3, img4, img5];

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 768px)": function() {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: [triggerDiv.current],
            start: "top top",
            end: "250%",
            scrub: 1,
            pin: [triggerDiv.current],
            toggleActions: "restart none none reverse",
          },
        });
    
        // autogenerate timeline based on length of input array
        timeline
          .to([img1.current], {
            opacity: 1,
            duration: 0.25,
          })
          .to([img2.current], {
            opacity: 1,
            duration: 1,
          })
          .to([img3.current], {
            opacity: 1,
            duration: 1,
          })
          .to([img4.current], {
            opacity: 1,
            duration: 1,
          })
          .to([img5.current], {
            opacity: 1,
            duration: 1.5,
          });
      }, 
      
    });
  }, []);

  const Container = styled.div`
    grid-column: 1/4 !important;
    margin: var(--space-16) 0;
    position: relative;
    top: 0;
    display: block;
  `;

  const TriggerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto var(--space-m);
    height: 92vh;
    @media (max-width: 768px) {
      height: calc(100vw/1.25);
    }
  `;

  const Img = styled.img`
    width: 1300px;
    max-width: 100%;
    border: 1px solid var(--color-gray-100);
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow-sm);
    margin: var(--space-m) auto;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    opacity: ${({ childImage }) => (childImage ? 0 : 1)};
    z-index: ${(props) => props.zIndex};
    display: ${({ topImage }) => (topImage ? "inline-block" : "")};
  `;

  const Title = styled.span`
    display: block;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    color: var(--color-gray-800);
    font-weight: 400;
    text-align: center;
    margin: var(--space-l) auto;
  `;

  return (
    <Container>
      <TriggerDiv ref={triggerDiv}>
        <Title>{title}</Title>
        <Img id="image" topImage alt={data[0].alt} src={data[0].src} />
        {data.map((img, i) => (
          <Img
            childImage
            zIndex={i}
            ref={refsArray[i]}
            alt={img.alt}
            src={img.src}
          />
        ))}
      </TriggerDiv>
    </Container>
  );
}

export default ScrollingImages;
