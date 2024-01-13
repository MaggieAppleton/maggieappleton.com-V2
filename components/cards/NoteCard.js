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
          {growthStage && <GrowthIcon size="20" growthStage={growthStage} />}
          <div>
            <h3>{title}</h3>
            <MetadataContainer>
              <span>Note</span>
              <svg width="4px" height="6px">
                <circle r="2" cx="2" cy="4" fill="var(--color-gray-400)" />
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
  grid-gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  font-family: var(--font-sans);
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  letter-spacing: 0.015rem;
  font-weight: 400;
  text-transform: capitalize;
  svg {
    margin: 0 !important;
  }
`;

const StyledNoteCard = styled(motion.div)`
  display: flex;
  position: relative;
  top: 0;
  flex-direction: row;
  padding: var(--space-xs) var(--space-s);
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-cream);
  /* background: var(--color-light-cream); */
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    transition: all 0.3s ease-in-out;
    margin-bottom: 0.5rem;
  }
  svg {
    margin: 0.4rem 1rem 0 0;
    flex-shrink: 0;
  }
  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
    background: var(--color-light-cream);
    box-shadow: var(--box-shadow-sm);
    border: 1px solid var(--color-tinted-cream);
    h3 {
      color: var(--color-crimson);
    }
  }
`;

// const NoteContent = styled.span`
//   color: var(--color-gray-600);
//   font-family: var(--font-sans);
//   margin-top: var(--space-2xs);
//   height: 80px;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const GradientFade = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100px; /* Adjust the height as needed */
//   background: linear-gradient(
//     to top,
//     rgba(246, 245, 241, 1) 0%,
//     rgba(246, 245, 241, 0.75) 50%,
//     rgba(246, 245, 241, 0)
//   );
// `;
