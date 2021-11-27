import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default function TwoColumn({
  children,
  maxWidth,
  alignItems,
  gridTemplateColumns,
  gridGap,
  verticalGridGap,
  justifyItems,
}) {
  return (
    <TwoColumnContainer
      gridTemplateColumns={gridTemplateColumns}
      alignItems={alignItems}
      maxWidth={maxWidth}
      gridGap={gridGap}
      verticalGridGap={verticalGridGap}
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
  grid-template-columns: ${(props) =>
    props.gridTemplateColumns || "repeat(2, minmax(280px, 1fr))"};
  grid-gap: ${(props) => props.gridGap || "var(--space-xs)"};
  align-items: ${(props) => props.alignItems || "center"};
  padding: 0 var(--space-3xs);
  @media ${breakpoints.mediaSM} {
    align-items: start;
    grid-gap: ${(props) => props.verticalGridGap || "var(--space-m)"};
    justify-items: center;
    grid-template-columns: ${(props) => props.gridTemplateColumns || "1fr"};
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
