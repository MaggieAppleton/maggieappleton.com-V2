import styled from "styled-components";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const NoteTrigger = ({ children }) => {
  return (
    <StyledNoteTrigger>
      {children}
      <ArrowRightIcon width="24" height="24" />
    </StyledNoteTrigger>
  );
};

const StyledNoteTrigger = styled.span`
  color: var(--color-medium-sea-blue);
  svg {
    color: var(--color-gray-800);
    margin: 0 0.75rem;
    position: relative;
    top: 0.3rem;
  }
`;

export default NoteTrigger;
