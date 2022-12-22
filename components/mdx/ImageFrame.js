import styled from "styled-components";

export default function ImageFrame({
  src,
  alt,
  width,
  margin,
  showalt,
  sourceUrl,
  sourceTitle,
  ...props
}) {
  const { srcSet } = props;
  delete props.srcSet;

  return (
    <Container margin={margin} {...props}>
      <StyledImageFrame src={src} srcSet={srcSet} alt={alt} width={width || "100%"} />
      {showalt ? (
        sourceUrl ? (
          <figcaption>
            {alt} – Source: <a href={sourceUrl}>{sourceTitle}</a>
          </figcaption>
        ) : (
          <figcaption>{alt}</figcaption>
        )
      ) : null}
    </Container>
  );
}

const Container = styled.figure`
  max-width: 100%;
  grid-column: 1 / 4 !important;
  margin: ${(props) => props.margin || "var(--space-s) auto var(--space-xl)"};
  text-align: center;
  figcaption {
    margin-top: var(--space-xs);
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    color: var(--color-gray-600);
  }
`;

const StyledImageFrame = styled.img`
  width: ${(props) => props.width || "1100px"};
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-tinted-cream);
  box-shadow: var(--box-shadow-lg);
  margin-bottom: var(--space-s);
`;
