import styled from "styled-components";

export default function BasicImage({
  src,
  alt,
  width,
  showalt,
  margin,
  sourceUrl,
  sourceTitle,
  ...props
}) {
  const { srcSet } = props;
  delete props.srcSet;

  return (
    <Container margin={margin} {...props}>
      <StyledBasicImage
        src={src}
        srcSet={srcSet}
        alt={alt}
        width={width || "100%"}
      />
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
  margin: ${(props) => props.margin || "var(--space-l) auto"};
  text-align: center;
  figcaption {
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    color: var(--color-gray-600);
    line-height: 1.5;
    width: ${(props) => props.width || "100%"};
    max-width: 800px;
    margin: var(--space-s) auto 0;
  }
  @media (max-width: 768px) {
    margin: var(--space-s) auto;
  }
`;

const StyledBasicImage = styled.img`
  width: ${(props) => props.width || "1100px"};
  max-width: 100%;
  margin: 0 auto var(--space-xs);
  border-radius: var(--border-radius-sm);
`;
