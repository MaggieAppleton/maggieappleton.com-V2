import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function TableOfContents({ headings }) {
  const route = useRouter().asPath;

  console.log(headings);

  return (
    <StyledContainer>
      <Summary>Table of Contents</Summary>

      {headings.length > 0 &&
        headings.map(({ text, level }) => {
          const link = text
            .toLowerCase()
            .replaceAll(" ", "-")
            .replace(/[.,?()]/gim, "");
          const href = `${route}#${link}`;

          return (
            <A key={text} href={href} level={level}>
              {text}
            </A>
          );
        })}
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.details)`
  margin-top: var(--space-xl);
  margin-bottom: var(--space-lg);
`;

const Summary = styled.summary`
  font-size: var(--text-sm);
  margin-bottom: var(--space-sm);
`;

const A = styled.a`
  display: block;
  position: relative;
  margin-left: ${(props) =>
    props.level === 2 ? 0 : `${(props.level - 2) * 32}px`};
  font-size: var(--text-sm);
  margin-bottom: var(--space-xs);
`;
