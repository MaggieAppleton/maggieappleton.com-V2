import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRect } from "../../utils/useRect"
// import { breakpoints } from "../../utils/breakpoints";


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

function ScrollingImages({ data, title }) {

  console.log(data.length)

  // need to wrap this in use memo
  const imageRefs = Array(data.length).fill(0).map(i => React.createRef())

  const triggerDiv = useRef(null);
  // autogenerate number of refs based on length of input array
  const img1 = useRef(null)
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const [rect, measureRef] = useRect();

  console.log({rect})

  const refsArray = [img1, img2, img3, img4];

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 770px)": function() {
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
    zIndex: 4;
  `;

  const TriggerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto var(--space-m);
    padding: 0 1rem;
    height: 960px;
    @media (max-width: 1200px) {
      height: 580px;
    }
    @media (max-width: 1400px) {
      height: 820px;
    }
    @media (max-width: 800px) {
      height: 520px;
    }
  `;

  const Img = styled.img`
    width: 1300px;
    max-width: 80%;
    max-height: auto;
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
    @media (max-width: 770px) {
      display: block;
      position: static;
      top: 0;
      max-width: 100%;
    }
  `;

  const Title = styled.span`
    display: block;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    color: var(--color-gray-800);
    font-weight: 400;
    text-align: center;
    margin: var(--space-l) auto;
    @media (max-width: 770px) {
      margin: 0 auto;
    }
  `;

  return (
    <Container>
      <TriggerDiv ref={triggerDiv}>
        <Title>{title}</Title>
        <Img id="image" topImage alt={data[0].alt} src={data[0].src} />
        {data.map((img, i) => (
          <Img
            childImage
            zIndex={i+5}
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
