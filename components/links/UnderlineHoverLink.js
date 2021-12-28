import styled from "styled-components";

export default function UnderlineHoverLink({ href, children }) {
  return (
    <LinkContainer>
      <StyledLink href={href}>
        <span>{children}</span>
      </StyledLink>
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 3px;
  top: 1px;
`;

const StyledLink = styled.a`
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  padding-bottom: 0.25rem;
  &:focus {
    outline: 2px solid darkblue;
    border-radius: 2px;
  }
  &::before {
    content: "";
    transform-origin: 50% 100%;
    background: var(--color-sea-blue);
    transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    position: absolute;
    width: 100%;
    height: 1px;
    top: 95%;
    left: 0;
    pointer-events: none;
    clip-path: polygon(
      0% 0%,
      0% 100%,
      0 100%,
      0 0,
      100% 0,
      100% 100%,
      0 100%,
      0 100%,
      100% 100%,
      100% 0%
    );
  }
  &:hover::before {
    transform: translate3d(0, 2px, 0) scale3d(1, 2, 1);
    clip-path: polygon(
      0% 0%,
      0% 100%,
      100% 100%,
      50% 0,
      50% 0,
      50% 100%,
      50% 100%,
      0 100%,
      100% 100%,
      100% 0%
    );
  }
  span {
    display: inline-block;
    transition: all 0.5s cubic-bezier(0.2, 1, 0.8, 1);
    color: var(--color-bright-crimson);
  }
  &:hover span {
    transform: translate3d(0, -2px, 0);
    color: var(--color-crimson);
  }
`;
