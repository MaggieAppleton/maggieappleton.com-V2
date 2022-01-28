import styled from "styled-components";

const FullWidthSection = styled.section`
  width: 100%;
  max-width: ${(props) => props.width || "1000vw"};
  z-index: 0;
  grid-column: 1 / 4 !important;
  margin: var(--space-2xs) auto var(--space-m);
  background: ${(props) => props.background || "inherit"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default FullWidthSection;
