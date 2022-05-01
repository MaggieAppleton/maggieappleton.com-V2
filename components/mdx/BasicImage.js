import styled from "styled-components";

export default function BasicImage({ src, alt, width, showalt, margin }) {
  return (
    <Container margin={margin}>
      <StyledBasicImage src={src} alt={alt} width={width} />
      {showalt && <figcaption>{alt}</figcaption>}
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
    margin-top: var(--space-xs);
  }
  @media (max-width: 768px) {
    margin: var(--space-s) auto;
  }
`;

const StyledBasicImage = styled.img`
  width: ${(props) => props.width || "1100px"};
  margin: 0 auto var(--space-xs);
  border-radius: var(--border-radius-sm);
`;
