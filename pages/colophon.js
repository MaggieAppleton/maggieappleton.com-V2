import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import Header from "../components/Header";
import styled from "styled-components";
import TooltipLink from "../components/links/TooltipLink";
import Tooltip from "../components/Tooltip";

export default function Colophon() {
  return (
    <>
      <Header title="Colophon of Maggie Appleton" />
      <Layout>
        <HeaderContainer>
          <Title1>Colophon</Title1>
          <Title2>
            A <i>colophon</i> is a nobby designer word for 'how this site was
            made'
          </Title2>
        </HeaderContainer>
        <MainSection>
          <StyledSection>
            <h3>Technologies</h3>
            <p>
              <TooltipLink href="https://nextjs.org/">Next.js</TooltipLink> does
              most of the heavy lifting on this site. It uses React, styled
              components, and MDX.{" "}
              <TooltipLink href="https://netlify.com/">Netlify</TooltipLink>{" "}
              takes care of hosting. Animations are built with{" "}
              <TooltipLink href="https://www.framer.com/motion/">
                Framer Motion
              </TooltipLink>
              . My CMS is just a bunch of files and folders. Everything is open
              souce and published on{" "}
              <TooltipLink href="https://github.com/MaggieAppleton/maggieappleton.com-V2">
                Github
              </TooltipLink>
              .
            </p>
          </StyledSection>
          <StyledSection>
            <h3>Typography</h3>
            <p>
              Headers are set in Canela Display. Body copy is set in Canela
              Text. Supporting sans-serif type is set in Lato.
            </p>
            <p>
              I use a{" "}
              <TooltipLink href="https://utopia.fyi/blog/designing-with-fluid-type-scales">
                fluid type scale
              </TooltipLink>
              , which variably adjusts the font size based on your browser width
              using some wild CSS calculations.
            </p>
          </StyledSection>
          <StyledSection>
            <h3>Growth Stages</h3>
            <p>
              Every post on this site has a <b>growth stage</b>. Everything
              starts as a reasonably unopinionated note (as much as that's
              possible – I'm a cultural relativist at heart and question the
              idea of pure, objective knowledge). Notes begin as seedlings, grow
              into buddings, and finally reach an evergreen stage. Some of them
              go on to become essays if I feel I have a clear opinion on the
              topic.
            </p>
          </StyledSection>
          <StyledSection>
            <h3>Custom Components</h3>
            <p>
              I've built a number of reusable custom components for various
              situations.
            </p>
            <p>
              There's the Coming Soon component that signals a post is
              half-written and needs to be finished in the future
            </p>
            <p>
              Assumed audiences makes explicit my implicit assumptions about who
              particular posts are written for.
            </p>
            <p> Alert. Resource book. Footnotes. Tooltips.</p>
          </StyledSection>
        </MainSection>
      </Layout>
    </>
  );
}

const HeaderContainer = styled.div`
  margin: var(--space-xl) 0;
  @media (max-width: 768px) {
    margin: var(--space-m) 0;
  }
`;

const MainSection = styled.section`
  margin: var(--space-xl) 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  max-width: 100%;
  grid-gap: var(--space-xl);
  @media (max-width: 768px) {
    grid-gap: var(--space-s);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const StyledSection = styled.section`
  font-size: var(--font-size-base);
  p {
    font-size: var(--font-size-base);
    line-height: var(--leading-loose);
    margin-bottom: var(--space-m);
  }
  p.subtext {
    font-size: calc(var(--font-size-sm) * 1.1);
    line-height: var(--leading-loose);
  }
  h1 {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--space-m);
  }
  h2 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--space-m);
    line-height: var(--leading-base);
  }
  h3 {
    font-size: calc(var(--font-size-lg) / 1.1);
    font-weight: 300;
    margin-bottom: var(--space-s);
  }
  h4 {
    font-size: var(--font-size-base);
    font-weight: 700;
    margin-bottom: var(--space-s);
  }
  // Ordered and unordered list styling
  ul,
  ol {
    padding: 0;
    margin-top: 0;
  }
  ul {
    list-style: none;
  }
  ul > li {
    margin-bottom: var(--space-xs);
    line-height: var(--leading-looser);
    margin-left: 2.5rem;
  }
  ul > li::before {
    content: "";
    display: inline-block;
    width: 24px;
    clear: both;
    height: 24px;
    margin-right: -1.5rem;
    background-image: url("/images/leaf-icon.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    top: 4px;
    right: 2.5rem;
  }
  ol > li {
    margin-bottom: var(--space-xs);
    line-height: var(--leading-looser);
    margin-left: 2.5rem;
  }
`;
