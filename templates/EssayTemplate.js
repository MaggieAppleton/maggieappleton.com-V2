import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import GrowthIcon from "../components/icons/GrowthIcon";
import BackHoverLink from "../components/links/BackHoverLink";
import Dates from "../components/templates/Dates";
import TableOfContents from "../components/TableOfContents";
import GrowthStage from "../components/templates/GrowthStage";
import Topics from "../components/templates/Topics";
import Header from "../components/Header";
import BackToTop from "../components/mdx/BackToTop";
import Backlinks from "../components/templates/Backlinks";
import { TwitterReply } from "../components/templates/TwitterReply";
import WebMentions from "../components/templates/WebMentions";

export default function EssayTemplate({
  source,
  frontMatter,
  components,
  slug,
  headings,
  toc,
  backlinks,
  ogImage,
}) {
  return (
    <>
      <Header
        title={frontMatter.title}
        description={frontMatter.description}
        keywords={frontMatter.topics}
        ogImage={ogImage}
      />
      <HeaderSection>
        <div className="above-title">
          <Link href="/essays">
            <BackHoverLink href="/essays">Essays</BackHoverLink>
          </Link>
          <GrowthIcon size="16" growthStage={frontMatter.growthStage} />
          <GrowthStage stage={frontMatter.growthStage} />
        </div>
        <TitleContainer>
          <h1>{frontMatter.title}</h1>
          {frontMatter.description && <p>{frontMatter.description}</p>}
        </TitleContainer>
        <Metadata>
          {frontMatter.topics && <Topics topics={frontMatter.topics} />}
          <Dates
            startDate={frontMatter.startDate}
            updated={frontMatter.updated}
          />
        </Metadata>
      </HeaderSection>
      <StyledMain>
        <BackToTop />
        <ProseWrapper>
          {toc && <TableOfContents headings={headings} />}
          <MDXRemote {...source} components={components} />
        </ProseWrapper>
      </StyledMain>
      <TwitterReply
        url={`https://maggieappleton.com/${slug}/`}
        title={frontMatter.title}
      />

        {backlinks.length ? <Backlinks backlinks={backlinks} /> : null}
        <WebMentions postSlug={slug} hasBacklinks={backlinks.length > 0} />

    </>
  );
}


const TitleContainer = styled.div`
  padding: var(--space-s) 0 var(--space-l);
  border-bottom: 1px solid var(--color-tinted-cream);
  h1 {
    font-size: var(--font-size-2xl);
    line-height: var(--leading-tighter);
    max-width: 100%;
    @media screen and (max-width: 425px) {
      font-size: var(--font-size-xl);
    }
  }
  p {
    font-size: var(--font-size-md);
    margin: var(--space-s) 0 0 0;
    color: var(--color-gray-600);
    @media screen and (max-width: 425px) {
      font-size: var(--font-size-base);
    }
  }
`;

const HeaderSection = styled.header`
  max-width: 800px;
  margin: var(--space-l) auto 0;
  div.above-title {
    a,
    p {
      display: inline-block;
      font-family: var(--font-sans);
      font-size: var(--font-size-xs);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: bold;
      padding-right: var(--space-xs);
    }
    p {
      padding-left: var(--space-2xs);
    }
    svg {
      position: relative;
      top: 3px;
    }
  }

  @media ${breakpoints.mediaSM} {
    padding: 0 var(--space-xs);
  }
`;

const Metadata = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
  }
`;

const StyledMain = styled.main`
  margin-top: var(--space-xs);
  padding: var(--space-xl) 0;
  background: linear-gradient(var(--color-cream) 0, white 110px);
  grid-column: 1/4 !important;
  width: 100%;
  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-xs);
  }
`;
