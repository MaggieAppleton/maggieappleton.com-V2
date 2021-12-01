import { slugifyTopic } from "../../utils/slugifyTopic";
import styled from "styled-components";
import Link from "next/link";
import UnderlineHoverLink from "../links/UnderlineHoverLink";

export default function Topics({ topics }) {
  return (
    <StyledList>
      {topics.sort().map((topic) => {
        const slug = slugifyTopic(topic);
        return (
          <StyledTag key={topic}>
            <Link href={`/topics/${slug}`}>
              <UnderlineHoverLink href={`/topics/${slug}`}>
                {topic}
              </UnderlineHoverLink>
            </Link>
          </StyledTag>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 70%;
  padding: 0;
  margin-top: var(--space-xs);
  @media (max-width: 768px) {
    margin: var(--space-xs) 0 0 0;
    max-width: 100%;
  }
`;

const StyledTag = styled.li`
  transition: all 0.3s ease-in-out;
  margin-right: var(--space-xs);
  margin-bottom: var(--space-3xs);
  font-family: var(--font-sans);
  font-size: var(--font-size-xs);
`;
