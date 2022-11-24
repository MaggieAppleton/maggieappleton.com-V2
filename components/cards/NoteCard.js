import Link from "next/link";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";
import { RelativeDate } from "../templates/Dates";

export default function NoteCard({ slug, title, growthStage, date, id }) {
  return (
    <Link key={id} as={`/${slug}`} href={`/${slug}`}>
      <a>
        <StyledNoteCard>
          {growthStage && <GrowthIcon size="24" growthStage={growthStage} />}
          <div>
            <h3>{title}</h3>
            <MetadataContainer>
              <span>{growthStage} Note</span>
              <svg width="6px" height="14px">
                <circle r="3" cx="3" cy="3" fill="var(--color-gray-400)" />
              </svg>
              <RelativeDate postDate={date} />
            </MetadataContainer>
          </div>
        </StyledNoteCard>
        </a>
    </Link>
  );
}

const MetadataContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: var(--space-xs);
  margin-top: var(--space-2xs);
  font-family: var(--font-sans);
  font-size: calc(var(--font-size-xs) / 1.08);
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 400;
  svg {
    margin: 0 0.4rem;
  }
`;

const StyledNoteCard = styled(motion.div)`
  display: flex;
  flex-direction: row;
  padding: var(--space-xs);
  margin: 0 var(--space-xs) var(--space-xs) 0;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-cream);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-left: var(--space-xs);
    transition: all 0.3s ease-in-out;
  }
  svg {
    position: relative;
    top: 4px;
    flex-shrink: 0;
  }
  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
    background: var(--color-light-cream);
    box-shadow: var(--box-shadow-sm);
    border: 1px solid var(--color-tinted-cream);
    h3 {
      color: var(--color-crimson);
    }
  }
`;
