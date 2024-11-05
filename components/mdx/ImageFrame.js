import styled from "styled-components";

export default function ImageFrame({
  src,
  alt,
  width,
  margin,
  padding,
  showalt,
  sourceUrl,
  sourceTitle,
  ...props
}) {
  const { srcSet } = props;
  delete props.srcSet;

  return (
    <Container margin={margin} {...props}>
      <StyledImageFrame
        src={src}
        srcSet={srcSet}
        alt={alt}
        padding={padding}
        width={width || "100%"}
      />
      {showalt ? (
        sourceUrl ? (
          <FigCaption>
            {alt} – Source: <a href={sourceUrl}>{sourceTitle}</a>
          </FigCaption>
        ) : (
          <FigCaption>{alt}</FigCaption>
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
`;

const FigCaption = styled.figcaption`
  margin-top: var(--space-xs);
  font-family: var(--font-sans);
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  display: inline-block;
  width: 800px;
  max-width: 100%;
  line-height: 1.75rem;
`;

const StyledImageFrame = styled.img`
  width: ${(props) => props.width || "1100px"};
  padding: ${(props) => props.padding || ""};
  max-width: 100%;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-tinted-cream);
  box-shadow: var(--box-shadow-lg);
  margin-bottom: var(--space-xs);
`;
