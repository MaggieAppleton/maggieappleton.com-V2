import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
// import { motion } from "framer-motion";
import { RelativeDate } from "../templates/Dates";

export default function EssayCard({
  slug,
  cover,
  title,
  growthStage,
  date,
  variants,
  id,
}) {
  return (
    <Link key={id} as={`/${slug}`} href={`/${slug}`}>
      <a>
        <StyledEssayCard variants={variants}>
          <h3>{title}</h3>
          <MetadataContainer>
            {growthStage && <span>Essay</span>}
            {growthStage && <GrowthIcon size="14" growthStage={growthStage} />}
            <span>
              <RelativeDate postDate={date} />
            </span>
          </MetadataContainer>
          {cover && (
            <ImageWrapper>
              <Image src={cover} alt={title} width={400} height={400} />
            </ImageWrapper>
          )}
        </StyledEssayCard>
      </a>
    </Link>
  );
}

const ImageWrapper = styled.div`
  display: grid;
  place-items: center;
  max-width: 450px;
  max-height: 450px;
`;

const MetadataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: var(--space-s);
  span {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    color: var(--color-gray-600);
    font-weight: 400;
    text-transform: capitalize;
  }
  svg {
    margin: 0 0.4rem;
  }
`;

const StyledEssayCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-s);
  border-radius: var(--border-radius-base);
  background: var(--color-light-cream);
  transition: all 0.3s ease-in-out;
  color: var(--color-gray-800);
  cursor: pointer;
  border: 1px solid var(--color-cream);
  box-shadow: var(--box-shadow-sm);
  img {
    width: 100%;
  }
  h3 {
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-bottom: 0.5rem;
  }
  &:hover {
    box-shadow: var(--box-shadow-lg);
    border: 1px solid var(--color-tinted-cream);
    transform: scale3d(1.01, 1.01, 1.01);
    h3 {
      color: var(--color-crimson);
    }
  }
`;
