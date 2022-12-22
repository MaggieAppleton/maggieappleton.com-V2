import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import EvergreenIcon from "../icons/EvergreenIcon";
import { motion } from "framer-motion";

export default function ProjectCard({ slug, cover, title, date, topics }) {
  function formattedDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
    });
  }

  return (
    <Link href={`/${slug}`}>
      <a>
        <StyledProjectCard>
          <ImageWrapper>
            <Image
              src={cover}
              alt={title}
              width={300}
              height={225}
            />
          </ImageWrapper>
          <Metadata>
            <h3>{title}</h3>
            <div className="metadata">
              <span>{formattedDate(date)}</span>
              <EvergreenIcon width="14" height="14" />
              <span>{topics}</span>
            </div>
          </Metadata>
        </StyledProjectCard>
      </a>
    </Link>
  );
}

const ImageWrapper = styled.div`
  display: grid;
  place-content: center;
  max-width: 450px;
  max-height: 338px;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--space-2xs);
  h3 {
    text-align: center;
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-bottom: var(--space-3xs);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: inline-block;
      font-family: var(--font-sans);
      font-size: calc(var(--font-size-xs) / 1.08);
      color: var(--color-gray-600);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 400;
      margin-top: 2px;
    }
    svg {
      margin: 0 var(--space-3xs);
    }
  }
`;

const StyledProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-cream);
  transition: all 0.3s ease-in-out;
  color: var(--color-gray-800);
  margin: 0 var(--space-xs) var(--space-xs) 0;
  img,
  div:first-child {
    border-radius: var(--border-radius-base);
    transition: all 0.3s ease-in-out;
    margin-bottom: 0 !important;
  }
  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
    h3 {
      color: var(--color-crimson);
    }
    & > div:first-child {
      box-shadow: var(--box-shadow-lg);
    }
  }
`;
