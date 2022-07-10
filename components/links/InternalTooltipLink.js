import Tooltip from "../Tooltip";
import styled from "styled-components";

function TooltipContent({ title, description }) {
  return (
    <PostContent>
      <h4>{title}</h4>
      <span className="description">{description}</span>
      {/* <span className="excerpt">{excerpt}</span> */}
    </PostContent>
  );
}

const PostContent = styled.div`
  padding: var(--space-3xs);
  h4 {
    margin: 0 0 var(--space-3xs);
    font-family: var(--font-body);
    font-weight: 500;
    line-height: var(--leading-snug);
    font-size: var(--font-size-base);
  }
  span.description {
    display: block;
    margin: var(--space-2xs) 0 var(--space-3xs);
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
  }
  /* span.excerpt {
    display: block;
    font-family: var(--font-body);
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-2xs);
  } */
`;

export default function InternalTooltipLink({
  href,
  title,
  description,
  excerpt,
  children,
}) {
  return (
    <Tooltip
      maxWidth={420}
      content={
        <TooltipContent
          title={title}
          description={description}
          excerpt={excerpt}
        />
      }
    >
      <StyledContainer>
        <StyledLink internal href={href}>
          <span>{children}</span>
        </StyledLink>
      </StyledContainer>
    </Tooltip>
  );
}

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
      display: inline-block;
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
      display: inline-block;
      transform: translate3d(0, 3px, 0) scale3d(1, 2, 1);
      background: var(--color-bright-crimson);
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
    color: var(--color-medium-sea-blue);
    text-decoration: underline;
    @media (min-width: 550px) {
      text-decoration: none;
    }
  }
  &:hover span {
    transform: translate3d(0, -1px, 0);
    color: var(--color-dark-sea-blue);
  }
`;
