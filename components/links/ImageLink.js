import Tooltip from "../Tooltip";
import styled from "styled-components";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function ImageLink({ href, children }) {
  return (
    <Tooltip
      content={
        <StyledExternalUrl href={href}>
          {href}
          <ArrowTopRightOnSquareIcon
            width="18"
            height="18"
            style={{ position: "relative", top: "3px" }}
          />
        </StyledExternalUrl>
      }
    >
      <StyledContainer>
        <a href={href}>{children}</a>
      </StyledContainer>
    </Tooltip>
  );
}

const StyledExternalUrl = styled.a`
  color: var(--color-gray-600);
  transition: color 0.2s ease-in-out;
  text-align: center;
  &:hover {
    color: var(--color-bright-crimson);
  }
`;

const StyledContainer = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0px;
  top: 0px;
`;
