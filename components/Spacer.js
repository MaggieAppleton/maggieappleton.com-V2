import styled from "styled-components";

const handleSize = (size) => {
  switch (size) {
    case "xs":
      return "var(--space-m)";
    case "small":
      return "var(--space-l)";
    case "large":
      return "var(--space-3xl)";
    default:
      return "var(--space-2xl)";
  }
};

export const Spacer = styled.div`
  height: ${({ size }) => handleSize(size)};
`;
