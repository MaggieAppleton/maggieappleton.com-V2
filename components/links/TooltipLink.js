import Tooltip from "../Tooltip";
import styled from "styled-components";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function TooltipLink({ href, children, noStyling }) {
  if (href.startsWith("http")) {
    return (
      <ExternalLink href={href} noStyling={noStyling}>
        {children}
      </ExternalLink>
    );
  }
  return (
    <InternalLink href={href} noStyling={noStyling}>
      {children}
    </InternalLink>
  );
}

function InternalLink({ href, children, noStyling }) {
  return (
    <Tooltip
    maxWidth={420}
      content={<StyledExternalUrl href={href}>{href}</StyledExternalUrl>}
    >
      <StyledContainer>
        <StyledLink internal noStyling={noStyling} href={href}>
          <span>{children}</span>
        </StyledLink>
      </StyledContainer>
    </Tooltip>
  );
}

function ExternalLink({ href, children, noStyling }) {
  return (
    <Tooltip
    maxWidth={420}
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
        <StyledLink noStyling={noStyling} href={href}>
          <span>{children}</span>
        </StyledLink>
      </StyledContainer>
    </Tooltip>
  );
}

const StyledExternalUrl = styled.a`
  color: var(--color-gray-600);
  transition: color 0.2s ease-in-out;
  text-align: center;
  word-break: break-all;
  max-width: 420px;
  svg {
    margin: 0 !important;
  }
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

const StyledLink = styled.a`
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  outline: none;
  word-break: break-all;
  &:focus {
    outline: 2px solid darkblue;
    border-radius: 2px;
  }
  &::before {
    @media (min-width: 550px) {
      content: "";
      display: ${(props) => (props.noStyling ? "none" : "inline-block")};
      transform-origin: 50% 100%;
      background: var(--color-gray-300);
      transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
      position: absolute;
      width: 100%;
      height: 1px;
      top: 105%;
      left: 0;
      pointer-events: none;
      clip-path: polygon(
        0% 0%,
        0% 100%,
        50% 100%,
        50% 0,
        50% 0,
        50% 100%,
        50% 100%,
        0 100%,
        100% 100%,
        100% 0%
      );
    }
  }
  &:hover::before {
    @media (min-width: 550px) {
      display: ${(props) => (props.noStyling ? "none" : "inline-block")};
      transform: translate3d(0, 3px, 0) scale3d(1, 2, 1);
      background: ${(props) =>
        props.internal
          ? "var(--color-bright-crimson)"
          : "var(--color-sea-blue)"};
      clip-path: polygon(
        0% 0%,
        0% 100%,
        50% 100%,
        50% 0,
        50% 0,
        50% 100%,
        50% 100%,
        0 100%,
        100% 100%,
        100% 0%
      );
    }
  }
  span {
    display: inline-block;
    white-space: normal;
    transition: all 0.5s cubic-bezier(0.2, 1, 0.8, 1);
    word-break: break-all;
    color: ${(props) =>
      props.internal
        ? "var(--color-medium-sea-blue)"
        : "var(--color-bright-crimson)"};
    text-decoration: ${(props) => (props.noStyling ? "none" : "underline")};
    @media (min-width: 550px) {
      text-decoration: none;
    }
  }
  &:hover span {
    transform: translate3d(0, -1px, 0);
    color: ${(props) =>
      props.internal ? "var(--color-dark-sea-blue)" : "var(--color-crimson)"};
  }
`;
