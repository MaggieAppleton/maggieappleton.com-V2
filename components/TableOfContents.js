import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useCollapse from "react-collapsed";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/20/solid";

export default function TableOfContents({ headings }) {
  const route = useRouter().asPath;

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <>
      <DesktopContainer>
        <Title>
          <svg width="8px" height="8px">
            <circle r="4" cx="4" cy="4" fill="var(--color-sea-blue)"></circle>
          </svg>
          <h4>Table of Contents</h4>
        </Title>

        {headings.length > 0 &&
          headings.map(({ text, level }) => {
            const link = text
              .toLowerCase()
              .replace(/\s/g, "-")
              .replace(/[.,?()]/gim, "")
              .replace(/\*\*|__/g, "")
              .replace(/<[^>]+>/g, "");
            const href = `${route}#${link}`;
            const filteredText = text
              .replace(/[\*_]/gim, "")
              .replace(/<[^>]+>/g, "");
            return (
              <A key={text} href={href} level={level}>
                {filteredText}
              </A>
            );
          })}
      </DesktopContainer>
      <MobileContainer>
        <CollapseHeader isExpanded={isExpanded} {...getToggleProps()}>
          {isExpanded ? (
            <ArrowDownIcon width="18" height="18" />
          ) : (
            <ArrowRightIcon width="18" height="18" />
          )}
          <h4>Table of Contents</h4>
        </CollapseHeader>
        <CollapseContent {...getCollapseProps()}>
          <div>
            {headings.length > 0 &&
              headings.map(({ text, level }) => {
                const link = text
                  .toLowerCase()
                  .replace(/\s/g, "-")
                  .replace(/[.,?()]/gim, "")
                  .replace(/<[^>]+>/g, "");
                const href = `${route}#${link}`;
                const filteredText = text
                  .replace(/[\*_]/gim, "")
                  .replace(/<[^>]+>/g, "");
                return (
                  <A key={text} href={href} level={level}>
                    {filteredText}
                  </A>
                );
              })}
          </div>
        </CollapseContent>
      </MobileContainer>
    </>
  );
}

const CollapseHeader = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 0.5rem;
  border-bottom: 1px solid var(--color-gray-100);
  padding-bottom: var(--space-xs);
  svg {
    color: var(--color-sea-blue);
    transition: all 0.3s cubic-bezier(0.2, 1, 0.8, 1);
  }
  h4 {
    display: inline-block;
    margin: 0;
    font-size: 0.96rem;
    color: var(--color-gray-800);
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.2, 1, 0.8, 1);
  }
  &:hover {
    h4 {
      color: var(--color-medium-sea-blue);
    }
    svg {
      transform: ${({ isExpanded }) =>
        isExpanded ? "translateY(-2px)" : "translateX(3px)"};
      fill: var(--color-medium-sea-blue);
    }
  }
`;

const CollapseContent = styled.div`
  padding-bottom: var(--space-xs);
  margin-bottom: var(--space-s);
  border-bottom: 1px solid var(--color-gray-100);
`;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 1280px) {
    display: block;
    margin-bottom: var(--space-xs);
  }
`;

const DesktopContainer = styled(motion.div)`
  grid-column: 3;
  height: 0;
  max-width: 300px;
  margin-left: var(--space-xl);
  h4 {
    margin: 0;
    font-size: 0.96rem;
    color: var(--color-gray-800);
    transition: all 0.3s cubic-bezier(0.2, 1, 0.8, 1);
  }
  @media (max-width: 1280px) {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  grid-gap: 0.85rem;
  align-items: center;
  margin-top: 0.5rem;
`;

const A = styled.a`
  font-family: var(--font-sans);
  display: block;
  font-size: 0.96rem;
  padding-left: var(--space-s);
  margin-left: ${(props) =>
    props.level === 2 ? 0 : `${(props.level - 2) * 24}px`};
  margin-top: 0.75rem;
  /* display: inline-block; */
  align-items: center;
  justify-items: center;
  cursor: pointer;
  /* display: inline-block; */
  transition: all 0.3s cubic-bezier(0.2, 1, 0.8, 1);
  color: var(--color-gray-600);
  &:hover {
    color: var(--color-medium-sea-blue);
  }
`;
