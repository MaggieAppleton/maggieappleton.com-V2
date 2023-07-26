import Layout from "../components/Layout";
import { Title1, Title2, SmallCaps } from "../components/Typography";
import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

import UnderlineHoverLink from "../components/links/UnderlineHoverLink";

import { useState } from "react";

const photoSources = [
  "/images/Stripe2_1000.jpg",
  "/images/Scarf_1000.jpg",
  "/images/Brown_1000.jpg",
];

function RandomPhoto() {
  const [currentImage, setCurrentImage] = useState(
    photoSources[Math.floor(Math.random() * photoSources.length)]
  );

  return (
    <Image
      src={currentImage}
      alt="a photo of maggie appleton"
      width={800 / 1.25}
      height={1200 / 1.25}
      layout="responsive"
      objectFit="contain"
    />
  );
}

export default function About() {
  return (
    <>
      <Header title="About Maggie Appleton" />
      <Layout>
        <HeaderSection>
          <SmallCaps>About</SmallCaps>
          <Title1>Maggie Appleton</Title1>
          <Title2>Designer, anthropologist, and mediocre developer.</Title2>
        </HeaderSection>
        <StyledMain>
          <section className="intro">
            <div>
              <SmallCaps>A Little Context</SmallCaps>
              <p>
                I sit at the intersection of design, anthropology, and
                programming. These three are at the core of everything I make.
                Combining them into a coherent career is a weird and ongoing
                challenge.
              </p>
              <p>
                Titles and disciplines are fickle and fleeting. But my work fits
                under the umbrellas of UX design, visual interface design, and
                DX (developer experience). With some cultural analysis, writing,
                and visual illustration sprinkled on top.
              </p>
              <p>
                I currently lead design at
                <b style={{ margin: "0 0.6rem 0 0.3rem" }}>
                  <UnderlineHoverLink href="https://ought.org">
                    Ought
                  </UnderlineHoverLink>
                </b>
                where we're exploring how machine learning can help researchers
                with open-ended reasoning.
              </p>
              <p>
                I'm not currently available for any contract work, side
                projects, or full-time roles.
              </p>
              <p>
                Before Ought I was head of design at{" "}
                <b style={{ margin: "0 0.5rem 0 0" }}>
                  <UnderlineHoverLink href="https://hash.ai">
                    HASH
                  </UnderlineHoverLink>
                </b>{" "}
                – a company developing an open-source platform to improve the
                way we structure knowledge on the web.
              </p>
              <p>
                Before that I spent five years at the developer education
                company{" "}
                <b style={{ margin: "0 0.5rem 0 0" }}>
                  <UnderlineHoverLink href="https://egghead.io">
                    egghead
                  </UnderlineHoverLink>
                </b>
                as the art director and UX designer. It was there that I
                developed a system for visualising programming concepts through
                metaphors and cultural symbols.
              </p>
              <p>
                On the side I create{" "}
                <b style={{ margin: "0 0.4rem 0 0" }}>
                  <UnderlineHoverLink href="/essays">
                    illustrated essays
                  </UnderlineHoverLink>
                </b>{" "}
                and visual explanations about programming and culture. I'm an
                advocate of{" "}
                <b style={{ margin: "0 0.4rem 0 0" }}>
                  <UnderlineHoverLink href="/garden-history">
                    digital gardening
                  </UnderlineHoverLink>
                </b>
                ,{" "}
                <b style={{ margin: "0 0.4rem 0 0" }}>
                  <UnderlineHoverLink href="https://en.wikipedia.org/wiki/End-user_development">
                    end-user programming
                  </UnderlineHoverLink>
                </b>
                , and expanding our use of{" "}
                <b style={{ margin: "0 0.4rem 0 0" }}>
                  <UnderlineHoverLink href="https://en.wikipedia.org/wiki/Embodied_cognition">
                    embodied cognition
                  </UnderlineHoverLink>
                </b>{" "}
                and{" "}
                <b style={{ margin: "0 0.4rem 0 0" }}>
                  <UnderlineHoverLink href="https://en.wikipedia.org/wiki/Conceptual_metaphor">
                    conceptual metaphors
                  </UnderlineHoverLink>
                </b>{" "}
                in digital interfaces.
              </p>
              <SmallCaps>A Little History</SmallCaps>
              <p>
                I'm originally from London but grew up in international schools
                in Hong Kong, Vietnam, Thailand, and Singapore.
              </p>
              <p>
                {" "}
                I earned my undergraduate degree in{" "}
                <b style={{ margin: "0 0.4rem 0 0" }}>
                  <UnderlineHoverLink href="https://en.wikipedia.org/wiki/Cultural_anthropology">
                    cultural anthropology
                  </UnderlineHoverLink>
                </b>{" "}
                at a small, hippie, liberal arts college in the United States.
                While I adore anthropology, it's not terribly employable (unless
                you want to be an academic or a military advisor) and I promptly
                switched into freelance design and illustration to pay rent. I
                started developing my visual design skills at age 14 when I
                first bootlegged a copy of Photoshop to make my own icon sets,
                but never realised you could get paid for that.
              </p>
              <p>
                In my early twenties I country-hopped while working through the
                early, ugly, awkward phase of my design sensibilities. I worked
                with web developers in Vietnam, trained with feature film
                illustrators in Los Angeles, and learned typography and brand
                design at creative agencies in Prague. I made a lot of hideous
                stuff, but figured out what I liked along the way.
              </p>
              <p>
                I eventually returned to London to become a more settled,
                "normal" adult, and have come to love the dull stability of
                home.
              </p>
            </div>
            <RandomPhoto />
          </section>
        </StyledMain>
      </Layout>
    </>
  );
}

const Divider = styled.hr`
  margin: var(--space-3xl) 0;
  height: 2px;
  background-color: var(--color-salmon);
  border: none;
  width: 20%;
  @media ${breakpoints.mediaSM} {
    margin: var(--space-xl) 0;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, auto));
  gap: var(--space-m);
  margin: var(--space-xl) 0;
`;

const HeaderSection = styled.header`
  margin: var(--space-m) auto 0;
  ${SmallCaps} {
    margin-bottom: var(--space-3xs);
    color: var(--color-gray-600);
  }
  h1 {
    margin-bottom: var(--space-s);
  }
  h2 {
    color: var(--color-gray-800);
  }
`;

const StyledMain = styled.main`
  margin-top: var(--space-xs);
  padding: var(--space-xl) 0;
  width: 100%;
  @media ${breakpoints.mediaSM} {
    padding: var(--space-l) var(--space-xs);
  }
  img {
    border-radius: 4px;
  }
  h2 {
    margin-bottom: var(--space-s);
  }
  p {
    line-height: var(--leading-loose);
    max-width: 52ch;
  }
  p:not(:last-of-type) {
    margin-bottom: var(--space-s);
  }
  section.intro {
    display: grid;
    grid-template-columns: 4fr 3fr;
    gap: var(--space-xl);
    align-items: flex-start;
    ${SmallCaps}:not(:first-of-type) {
      margin-top: var(--space-xl);
      color: var(--color-gray-900);
    }
    ${SmallCaps}::before {
      content: "";
      display: inline-block;
      width: 20px;
      clear: both;
      height: 20px;
      margin-right: -1.5rem;
      background-image: url("/images/leaf-icon.svg");
      background-size: contain;
      background-repeat: no-repeat;
      position: relative;
      top: 4px;
      right: 2.25rem;
    }
    @media ${breakpoints.mediaSM} {
      grid-template-columns: 1fr;
      gap: var(--space-m);
      flex-direction: column;
    }
  }
`;
