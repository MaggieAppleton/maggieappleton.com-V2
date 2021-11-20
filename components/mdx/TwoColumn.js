import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default function TwoColumn({
  children,
  maxWidth,
  alignItems,
  gridTemplateColumns,
  gridGap,
  justifyItems,
}) {
  return (
    <TwoColumnContainer
      gridTemplateColumns={gridTemplateColumns}
      alignItems={alignItems}
      maxWidth={maxWidth}
      gridGap={gridGap}
      justifyItems={justifyItems}
    >
      {children}
    </TwoColumnContainer>
  );
}

const TwoColumnContainer = styled.div`
  width: 100%;
  grid-column: 1 / 4 !important;
  max-width: ${(props) => props.maxWidth || "1400px"};
  margin: var(--space-s) auto var(--space-l);
  display: grid;
  justify-items: ${(props) => props.justifyItems || "center"};
  grid-template-columns: ${(props) => props.gridTemplateColumns || "1fr 1fr"};
  grid-gap: ${(props) => props.gridGap || "var(--space-xs)"};
  align-items: ${(props) => props.alignItems || "center"};
  padding: 0 var(--space-3xs);
  @media ${breakpoints.mediaSM} {
    grid-template-columns: 1fr;
    align-items: start;
    justify-items: center;
  }
  div,
  img,
  figure {
    grid-column: auto !important;
    margin: 0 auto;
    border-radius: var(--border-radius-base);
  }
  img {
    margin: var(--space-s) auto;
  }
`;
