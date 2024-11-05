import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default function ThreeColumn({ children, maxWidth, gridGap, margin }) {
  return (
    <ThreeColumnContainer margin={margin} gridGap={gridGap} maxWidth={maxWidth}>
      {children}
    </ThreeColumnContainer>
  );
}

const ThreeColumnContainer = styled.div`
  width: 100%;
  grid-column: 1 / 4 !important;
  max-width: ${(props) => props.maxWidth || "1400px"};
  margin: ${(props) => props.margin || "var(--space-s) auto var(--space-l)"};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${(props) => props.gridGap || "var(--space-s)"};
  justify-content: center;
  @media ${breakpoints.mediaMD} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${breakpoints.mediaSM} {
    grid-template-columns: 1fr;
  }
  div,
  img,
  figure {
    margin: 0 auto;
    grid-column: auto !important;
  }
  img {
    margin: var(--space-s) auto 0;
  }
`;
