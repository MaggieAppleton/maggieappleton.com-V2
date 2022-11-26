import styled from "styled-components";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function ReferencesLink({ title, href, author }) {
  return (
    <ReferenceLinkContainer>
      <ForwardHoverLink href={href}>
        <h4>{title}</h4>
        <ArrowRightIcon width="16" height="16" />
      </ForwardHoverLink>
      {author && <span className="author">{author}</span>}
    </ReferenceLinkContainer>
  );
}

const ForwardHoverLink = styled.a`
  display: inline-block;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  h4 {
    display: inline-block;
    transition: all 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    color: var(--color-gray-800);
  }
  svg {
    position: relative;
    top: 2.5px;
    left: 6px;
    transition: all 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    color: var(--color-gray-300);
  }
    &:hover {
        svg {
            color: var(--color-sea-blue);
            left: 9px;
        }
        h4 {
            color: var(--color-bright-crimson);
        }
`;

const ReferenceLinkContainer = styled.div`
  margin-bottom: var(--space-2xs);
  transition: all 1s cubic-bezier(0.2, 1, 0.8, 1);
  h4,
  span {
    font-size: var(--font-size-sm);
    margin: 0;
  }
  span.author {
    display: block;
    margin: 0;
    font-family: var(--font-sans);
    color: var(--color-gray-500);
  }
`;
