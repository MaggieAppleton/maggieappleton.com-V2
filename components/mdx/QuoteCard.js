import styled from "styled-components";

export default function QuoteCard({
  children,
  sourceTitle,
  author = "",
  year = "",
  sourceLink,
  margin,
  props,
}) {
  return (
    <CardContainer margin={margin} {...props}>
      <Quote>{children}</Quote>
      <Cite>
        {sourceLink ? (
          <a href={sourceLink}>
            <span>{sourceTitle}</span>
          </a>
        ) : (
          <span>{sourceTitle}</span>
        )}
        {author && (
          <>
            <Dot />
            <span>{author}</span>
          </>
        )}
        {year && (
          <>
            <Dot />
            <span>{year}</span>
          </>
        )}
      </Cite>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  margin: ${(props) =>
    props.margin ? props.margin : "var(--space-3xs) auto var(--space-m)"};
  box-shadow: var(--box-shadow-lg);
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-tinted-cream);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-l);
  grid-column: 1/4 !important;
  max-width: 848px;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ol,
  ul .tweet {
    margin: var(--space-2xs) 0;
  }
`;

const Quote = styled.div`
  p {
    font-size: var(--font-size-base);
    line-height: 1.75;
    margin-top: -0.5rem;
    color: var(--color-gray-700);
  }
  ol,
  ul > li {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const Cite = styled.cite`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
  span {
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-style: normal;
    color: var(--color-gray-600);
  }
  a span {
    color: var(--color-bright-crimson);
    transition: all ease-in 0.2s;
    &:hover {
      color: var(--color-crimson);
    }
  }
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  margin: 3px 2px 0 2px;
  background-color: var(--color-gray-300);
  border-radius: 50%;
  flex-shrink: 0;
`;
