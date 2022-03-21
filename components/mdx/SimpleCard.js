import styled from "styled-components";

export default function SimpleCard({ children, alignLeft, subtle, padding }) {
  return (
    <StyledCard padding={padding} subtle={subtle} alignLeft={alignLeft}>
      {children}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: ${(props) =>
    props.subtle
      ? "0 auto var(--space-s)"
      : "var(--space-3xs) auto var(--space-m)"};
  box-shadow: ${(props) =>
    props.subtle ? "var(--box-shadow-sm)" : "var(--box-shadow-lg)"};
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-tinted-cream);
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignLeft ? "" : "center")};
  justify-content: center;
  text-align: ${(props) => (props.alignLeft ? "" : "center")};
  padding: ${(props) =>
    props.padding ? props.padding : "var(--space-m) var(--space-l)"};
  grid-column: 1/4 !important;
  max-width: 860px;
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
