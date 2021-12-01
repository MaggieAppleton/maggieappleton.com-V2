import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

const IntroParagraph = styled.p`
  :first-letter {
    float: left;
    font-size: 5.2rem;
    line-height: 2.5rem;
    font-weight: bold;
    margin: 1.15rem var(--space-2xs) 0 0;
  }
  p {
    margin-bottom: 0;
  }
  @media ${breakpoints.mediaSM} {
    :first-letter {
      float: left;
      font-size: 4.6rem;
      line-height: 2rem;
      font-weight: bold;
      margin: 1.15rem var(--space-3xs) 0 0;
    }
  }
`;

export default IntroParagraph;
