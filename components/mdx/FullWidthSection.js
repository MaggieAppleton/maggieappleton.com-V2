import styled from "styled-components";

export default function FullWidthSection({children, margin, width, background}) {
  return <Container margin={margin} width={width} background={background}>{children}</Container>

}

const Container = styled.section`
  width: 100%;
  max-width: ${(props) => props.width || "1000vw"};
  z-index: 0;
  grid-column: 1 / 4 !important;
  margin: ${(props) => props.margin || "var(--space-2xs) auto var(--space-m)"};
  background: ${(props) => props.background || "inherit"};
  display: flex;
  flex-direction: column;
  align-items: center;
`
