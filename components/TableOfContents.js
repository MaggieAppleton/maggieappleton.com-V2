import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function TableOfContents({ headings }) {
  const route = useRouter().asPath;

  console.log(headings);

  return (
    <StyledContainer>
      <h4>Table of Contents</h4>

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

const StyledContainer = styled(motion.div)`
  padding: 1rem;
  position: relative;
  h4 {
    font-size: var(--text-sm);
  }
`;

const A = styled.a`
  display: block;
  font-family: var(--font-sans);
  position: relative;
  margin-left: ${(props) =>
    props.level === 2 ? 0 : `${(props.level - 2) * 32}px`};
  font-size: var(--text-sm);
  margin-top: ${(props) => (props.level === 2 ? "1rem" : "0.5rem")};
`;
