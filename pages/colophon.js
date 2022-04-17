import Layout from "../components/Layout";
import { Title1, Title2, Title3 } from "../components/Typography";
import Header from "../components/Header";
import styled from "styled-components";
import TooltipLink from "../components/links/TooltipLink";
import ProseWrapper from "../components/mdx/ProseWrapper";
import ComingSoon from "../components/mdx/ComingSoon";
import AssumedAudience from "../components/mdx/AssumedAudience";
import ResourceBook from "../components/mdx/ResourceBook";
import Alert from "../components/mdx/Alert";

export default function Colophon() {
  return (
    <>
      <Header title="Colophon of Harvey Qiu" />
      <Layout>
        <HeaderContainer>
          <Title1>Colophon</Title1>
          <Title2>
            A <i>colophon</i> is a nobby designer word for 'how this site was
            made'
          </Title2>
        </HeaderContainer>
        <MainSection>
          <ProseWrapper>
            <Title3>Typography</Title3>
            <p>
              Headers are set in{" "}
              <TooltipLink href="https://commercialtype.com/catalog/canela/canela_deck">
                Canela Display
              </TooltipLink>{" "}
              and body copy is set in{" "}
              <TooltipLink href="https://commercialtype.com/catalog/canela/canela_text">
                Canela Text
              </TooltipLink>
              , both from{" "}
              <TooltipLink href="https://commercialtype.com/">
                Commercial Type
              </TooltipLink>
              . I love its semi-serifs and classical feel. Supporting sans-serif
              type is set in{" "}
              <TooltipLink href="https://fonts.google.com/specimen/Lato">
                Lato
              </TooltipLink>
              .
            </p>
            <p>
              I use a{" "}
              <TooltipLink href="https://utopia.fyi/blog/designing-with-fluid-type-scales">
                fluid type scale
              </TooltipLink>{" "}
              developed by{" "}
              <TooltipLink href="https://utopia.fyi/">Utopia</TooltipLink> ,
              which uses some wild CSS calculations to continuously adjust the
              font size relative to your browser's width.
            </p>
            <Title3>Technologies</Title3>
            <p>
              <TooltipLink href="https://nextjs.org/">Next.js</TooltipLink> does
              most of the heavy lifting on this site – it's a static site
              builder that takes care of a lot of otherwise cumbersome
              optimsiations like server-side rendering, image loading, and
              routing.
            </p>
            <p>
              I used React and styled components to build and design the
              interface. All the individual notes are written in{" "}
              <TooltipLink href="https://github.com/mdx-js/mdx">
                MDX
              </TooltipLink>{" "}
              – a souped-up version of markdown that makes it easy to design and
              reuse custom components and interactive JavaScript elements.{" "}
            </p>
            <p>
              <TooltipLink href="https://vercel.com/">Vercel</TooltipLink> takes
              care of hosting. Animations are built with{" "}
              <TooltipLink href="https://www.framer.com/motion/">
                Framer Motion
              </TooltipLink>
              . My CMS is just a bunch of files and folders. Everything is open
              souce and published on{" "}
              <TooltipLink href="https://github.com/harveyqiu/digital-garden">
                Github
              </TooltipLink>
              . The whole thing is frankly overengineered for a personal
              website, but playing with transient web technologies is an
              indulgent hobby I don't want to relinquish.
            </p>
            <Title3>Growth Stages</Title3>
            <p>
              Every post on this site has a <b>growth stage</b>. Everything
              starts as a reasonably unopinionated note (as much as that's
              possible – I'm a cultural relativist at heart and question the
              idea of pure, objective knowledge).
            </p>
            <p>
              Notes begin as seedlings, grow into buddings, and finally reach an
              evergreen stage. Some of them go on to become essays if I feel I
              have a clear opinion on the topic.
            </p>
            <Title3>Custom Components</Title3>
            <p>
              I've built a number of reusable custom components for various
              situations.
            </p>
            <p>
              There's the <i>coming soon</i> component that signals a post is
              half-written and needs to be finished in the future:
              <ComingSoon />
            </p>
            <p>
              There's an <i>assumed audience</i> component that I put at the top
              of some posts to make explicit who I'm writing for:
              <br />
              <AssumedAudience>
                People who care about how websites are built.
              </AssumedAudience>
            </p>
            <p>
              I occassionally need to <i>alert</i> readers to dangers and
              threats:
              <Alert>
                <h2>This is an alert</h2>
                <p>
                  Stay vigiliant to the threat of typography that is too small
                  and low contrast to read.
                </p>
              </Alert>
            </p>
            <p>
              Some are simply nicely styled callouts for books:
              <ResourceBook
                url="https://www.librarything.com/work/9697447"
                title="Addiction By Design"
                image="/images/books/addiction.jpg"
                author="Natasha Dow Schull"
              >
                Addiction by Design takes readers into the intriguing world of
                machine gambling, an increasingly popular and absorbing form of
                play that blurs the line between human and machine, compulsion
                and control, risk and reward.
              </ResourceBook>
            </p>
          </ProseWrapper>
        </MainSection>
      </Layout>
    </>
  );
}

const HeaderContainer = styled.div`
  margin: var(--space-xl) auto;
  max-width: 800px;
  @media (max-width: 768px) {
    margin: var(--space-m) 0;
    max-width: 100%;
  }
`;

const MainSection = styled.section`
  margin: var(--space-xl) auto;
  max-width: 800px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
