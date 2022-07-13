import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { breakpoints } from "../../utils/breakpoints";

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
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: [triggerDiv.current],
        start: "top top",
        end: "+=3000px",
        scrub: 1,
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
  }, []);

  const Container = styled.div`
    height: 3800px;
    grid-column: 1/4 !important;
    margin: var(--space-16) 0 var(--space-64);
    position: static;
    display: block;
    @media ${breakpoints.mediaMD} {
      height: 2600px;
    }
    @media ${breakpoints.mediaSM} {
      height: 1600px;
    }
  `;

  const TriggerDiv = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    top: 5%;
    margin-bottom: 840px;
    @media ${breakpoints.mediaSM} {
      top: 25%;
      margin-bottom: 300px;
    }
  `;

  const Img = styled.img`
    width: 1300px;
    max-width: 100%;
    border: 1px solid var(--color-gray-100);
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow-sm);
    margin: 0 auto;
    position: absolute;
    top: 48px;
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
    margin: 0 auto var(--space-s);
  `;

  return (
    <Container>
      <TriggerDiv ref={triggerDiv}>
        <Title>{title}</Title>
        <Img topImage alt={data[0].alt} src={data[0].src} />
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
