import Layout from "../components/Layout";
import { Title1, Title2, SmallCaps } from "../components/Typography";
import Header from "../components/Header";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import { RelativeDate } from "../components/templates/Dates";

export default function About() {
  return (
    <>
      <Header title="About Harvey Qiu" />
      <Layout>
        <HeaderSection>
          <SmallCaps>About</SmallCaps>
          <Title1>Harvey Qiu</Title1>
          <Title2>Currently Law School Student, Tech hobbist</Title2>
        </HeaderSection>
        <StyledMain>
          <section className="intro">
            <div>
              <SmallCaps>A Little Context</SmallCaps>
              <p>Currently Law School Student</p>

              <SmallCaps>A Little History</SmallCaps>
              <p>History</p>
            </div>
          </section>
          <Divider />
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
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
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
    grid-template-columns: 3fr 2fr;
    gap: var(--space-l);
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
  section.talks {
    div.images {
      margin-top: var(--space-l);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, auto));
      gap: var(--space-s);
    }
  }
`;

function TalkCard({ title, host, date, url, key }) {
  return (
    <a key={key} href={url}>
      <StyledTalkCard>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "var(--space-xs)",
            }}
          >
            {/* <LeafIcon width="20" height="20" /> */}
            <svg
              fill="var(--color-sea-blue"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
              viewBox="0 0 3 20"
              width="3"
              height="20"
            >
              <rect width="3" height="20" />
            </svg>
            <h3>{title}</h3>
          </div>
          <span className="host">{host}</span>
          <span className="date">
            <RelativeDate postDate={date} />
          </span>
        </div>
      </StyledTalkCard>
    </a>
  );
}

const StyledTalkCard = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-cream);
  transition: all 0.3s ease-in-out;
  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-bottom: var(--space-3xs);
    transition: all 0.3s ease-in-out;
  }
  svg {
    display: inline-block;
    position: relative;
    top: 6px;
    flex-shrink: 0;
    transition: all 0.3s ease-in-out;
  }
  div {
    display: flex;
    flex-direction: column;
    span.host {
      color: var(--color-gray-600);
      font-family: var(--font-sans);
      font-size: var(--font-size-sm);
      margin: 0 0 var(--space-3xs) 1.3rem;
      transition: all 0.3s ease-in-out;
    }
    span.date {
      font-family: var(--font-sans);
      font-size: calc(var(--font-size-xs) / 1.08);
      color: var(--color-gray-600);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 400;
      margin: 0 0 var(--space-3xs) 1.3rem;
      transition: all 0.3s ease-in-out;
    }
  }
  &:hover {
    h3 {
      color: var(--color-bright-crimson);
      transform: translateX(8px);
    }
    span {
      transform: translateX(8px);
    }
    svg {
      transform: scaleX(3.5) translateX(1px);
    }
  }
`;
