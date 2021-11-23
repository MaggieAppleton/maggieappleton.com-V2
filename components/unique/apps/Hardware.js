import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

const Hardware = ({ children }) => {
  return <LargeImages>{children}</LargeImages>;
};

const LargeImages = styled.div`
  grid-column: 1/4;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: var(--space-s);
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: var(--space-xs) auto var(--space-s);
  img {
    transition: all 400ms ease;
    margin-bottom: 0;
    &:hover {
      transition: all 400ms ease;
      transform: translateY(-6px);
    }
  }
  h5 {
    transition: all 400ms ease;
    text-align: center;
    font-weight: 400;
    margin-bottom: var(--space-s);
  }
`;

export default Hardware;
