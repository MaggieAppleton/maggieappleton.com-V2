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
import Footnote from "../components/mdx/Footnote";
import SeedlingIcon from "../components/icons/SeedlingIcon";
import BuddingIcon from "../components/icons/BuddingIcon";
import EvergreenIcon from "../components/icons/EvergreenIcon";
import { Spacer } from "../components/Spacer";

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
          <ProseWrapper>
            <p>
              I designed and built this site myself. Everything is open souce
              and published on{" "}
              <TooltipLink href="https://github.com/MaggieAppleton/maggieappleton.com-V2">
                Github
              </TooltipLink>{" "}
              if you'd like to poke around. The whole thing is frankly
              overengineered for a personal website, but playing with transient
              web technologies is an indulgent hobby I don't want to relinquish.
              I started building it in late 2021 and tinker on it regularly.
            </p>
            <Title3>Technologies & Techniques</Title3>

            <p>
              <TooltipLink href="https://nextjs.org/">Next.js</TooltipLink> does
              most of the heavy lifting – it's a static site builder that takes
              care of a lot of otherwise cumbersome optimisations like
              server-side rendering, image loading, and routing.
            </p>
            <p>
              I used{" "}
              <TooltipLink href="https://reactjs.org/">React</TooltipLink> and{" "}
              <TooltipLink href="https://styled-components.com/">
                styled components
              </TooltipLink>{" "}
              to build and design the interface. All the individual notes and
              essays are written in{" "}
              <TooltipLink href="https://github.com/mdx-js/mdx">
                MDX
              </TooltipLink>{" "}
              – a souped-up version of markdown that makes it easy to design and
              reuse custom components and interactive JavaScript elements.{" "}
              <TooltipLink href="https://vercel.com/">Vercel</TooltipLink> takes
              care of hosting. Animations are built with{" "}
              <TooltipLink href="https://www.framer.com/motion/">
                Framer Motion
              </TooltipLink>
              .
            </p>
            <Title3>Writing and Editing Content</Title3>
            <p>
              My CMS is just a bunch of flat files and folders. When I edit
              content on here I'm just typing text and syntax into MDX and JS
              files in VS Code. There's no fancy pipeline shuttling content
              directly from my personal knowledge management database (eg.{" "}
              <TooltipLink href="https://roamresearch.com">Roam</TooltipLink> or{" "}
              <TooltipLink href="https://tana.inc">Tana</TooltipLink>
              ). All my ideas start and marinate in my Tana, but I wait for them
              to mature a bit before they move over to this garden.
            </p>
            <p>
              I know other people prefer setups where they can click one button
              and push content from personal notes to the web. I personally like
              having more control over how the material is displayed and laid
              out. Working directly in the native medium of the web – HTML, CSS,
              and JavaScript – gives me fine-grained control. It allows me to
              play with typography, illustrations, graphic design, videos,
              animations, and interactive elements that pure text pipelines
              can't support. Text isn't the only way to represent ideas.
            </p>
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

            <Title3>Growth Stages</Title3>
            <p>
              Every post on this site has a <b>growth stage</b> indicating how
              complete and comprehensive it is. They start as{" "}
              <SeedlingIcon width="24px" height="24px" /> seedlings, grow into{" "}
              <BuddingIcon width="24px" height="24px" /> buddings, and finally
              end up as <EvergreenIcon width="24px" height="24px" /> evergreens.
              You'll often find notes and essays that are unfinished or in
              progress. In an ideal world I'd finish everything I started. But
              we don't live there and I'm notoriously bad at leaving things half
              baked. I do cycle back though. Sometimes months or years later.
              What goes around comes around.
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
              <Spacer size="xs" />
              <AssumedAudience>
                People who care about how websites are built.
              </AssumedAudience>
            </p>
            <Spacer size="xs" />
            <p>
              I occasionally need to <i>alert</i> readers to dangers and
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
              Some are nicely styled callouts for books:
              <ResourceBook
                url="https://www.librarything.com/work/9697447"
                title="Addiction By Design"
                image="/images/books/addiction.webp"
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
