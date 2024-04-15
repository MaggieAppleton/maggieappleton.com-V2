import styled from "styled-components";

export default function SimpleCard({
  children,
  alignLeft,
  subtle,
  padding,
  margin,
  props,
}) {
  if (subtle) {
    return (
      <SubtleCard
        padding={padding}
        margin={margin}
        alignLeft={alignLeft}
        {...props}
      >
        {children}
      </SubtleCard>
    );
  } else {
    return (
      <StyledCard
        padding={padding}
        margin={margin}
        alignLeft={alignLeft}
        {...props}
      >
        {children}
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  margin: ${(props) =>
    props.margin ? props.margin : "var(--space-3xs) auto var(--space-m)"};
  box-shadow: var(--box-shadow-lg);
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-tinted-cream);
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignLeft ? "" : "center")};
  justify-content: center;
  text-align: ${(props) => (props.alignLeft ? "" : "center")};
  padding: ${(props) =>
    props.padding ? props.padding : "var(--space-m) var(--space-l)"};
  grid-column: 1/4 !important;
  max-width: 848px;
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

const SubtleCard = styled(StyledCard)`
  margin: ${(props) => (props.margin ? props.margin : "0 auto var(--space-s)")};
  box-shadow: var(--box-shadow-sm);
  padding: ${(props) =>
    props.padding ? props.padding : "var(--space-m) var(--space-l)"};
  align-items: ${(props) => (props.alignLeft ? "" : "center")};
  text-align: ${(props) => (props.alignLeft ? "" : "center")};
`;
