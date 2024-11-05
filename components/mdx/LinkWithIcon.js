import styled from "styled-components";
import Icon from "./Icon";
import UnderlineHoverLink from "../links/UnderlineHoverLink";

export default function LinkWithIcon({ iconName, href, children }) {
  return (
    <LinkContainer>
      <Icon iconName={iconName} size="16" color="var(--color-crimson)" />
      <UnderlineHoverLink href={href}>{children}</UnderlineHoverLink>
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  display: flex;
  grid-gap: 0.25rem;
  font-family: var(--font-sans);
  font-size: var(--font-size-sm);
  align-items: center;
  color: var(--color-gray-600);
  margin-bottom: 0.5rem;
  &:hover {
    svg {
      fill: var(--color-sea-blue);
    }
  }
  svg {
    transition: all 0.2s ease-in;
    margin-top: 0.25rem;
  }
`;
