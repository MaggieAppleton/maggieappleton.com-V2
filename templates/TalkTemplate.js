import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import Link from "next/link";
import BackToTop from "../components/mdx/BackToTop";
import { TwitterReply } from "../components/templates/TwitterReply";
import Topics from "../components/templates/Topics";
import Dates from "../components/templates/Dates";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import BackHoverLink from "../components/links/BackHoverLink";
import Header from "../components/Header";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/20/solid";

export default function TalkTemplate({
  source,
  frontMatter,
  components,
  slug,
  ogImage,
}) {
  return (
    <>
      <Header
        title={frontMatter.title}
        description={frontMatter.description}
        ogImage={ogImage}
      />
      <HeaderSection>
        <div className="above-title">
          <Link href="/talks">
            <BackHoverLink href="/talks">Talks</BackHoverLink>
          </Link>
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
        <ConferenceContainer>
          <p className="title">Conferences</p>
          <div className="conf-grid">
            {frontMatter.conferences.map(({ name, date, location }, i) => {
              return (
                <div className="conf-item" key={i}>
                  <h3>{name}</h3>
                  <div className="conf-meta">
                    <p>
                      <CalendarIcon width="16" height="16" />
                      {date}
                    </p>
                    <p>
                      <MapPinIcon width="16" height="16" />
                      {location}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ConferenceContainer>
      </HeaderSection>
      <StyledMain>
        <BackToTop />
        <ProseWrapper>
          <MDXRemote {...source} components={components} />
        </ProseWrapper>
      </StyledMain>
      <TwitterReply
        url={`https://maggieappleton.com/${slug}/`}
        title={frontMatter.title}
      />
    </>
  );
}

const ConferenceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--space-xs);
  border-bottom: 1px solid var(--color-tinted-cream);
  padding-bottom: var(--space-2xs);
  div.conf-grid {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    grid-gap: 0.25rem;
  }
  p.title {
    text-transform: uppercase;
    font-family: var(--font-sans);
    color: var(--color-gray-600);
    font-size: var(--font-size-xs);
    letter-spacing: 0.05rem;
    margin: 1.25rem var(--space-m) 0 0;
  }
  .conf-item {
    margin: 1rem 0 1.5rem 0;
    width: 100%;
    max-width: 260px;
    div.conf-meta {
      margin-top: 0.25rem;
      display: flex;
      align-items: center;
      grid-gap: 1rem;
    }
    p {
      font-family: var(--font-sans);
      color: var(--color-gray-600);
      font-size: var(--font-size-xs);
      display: flex;
      align-items: center;
      grid-gap: 0.25rem;
    }
  }
`;

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
  background-color: white;
  background-image: linear-gradient(var(--color-cream) 0, white 110px);
  grid-column: 1/4 !important;
  width: 100%;
  @media ${breakpoints.mediaSM} {
    padding: var(--space-m) var(--space-xs);
  }
`;
