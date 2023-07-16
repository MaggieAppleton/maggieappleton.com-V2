import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { DateToNow } from "../templates/Dates";
import { MapPinIcon } from "@heroicons/react/20/solid";

export default function TalkCard({
  title,
  slug,
  date,
  id,
  cover,
  conferences,
}) {
  return (
    <Link key={id} as={`/${slug}`} href={`/${slug}`}>
      <a>
        <StyledCard initial="initial" whileHover="hover">
          {cover && (
            <ImageWrapper>
              <Image src={cover} alt={title} width={430} height={240} />
            </ImageWrapper>
          )}
          <InnerText>
            <h3>{title}</h3>
            <MetadataContainer>
              <span>Talk</span>
              <svg width="4px" height="6px">
                <circle r="2" cx="2" cy="4" fill="var(--color-gray-400)" />
              </svg>
              <DateToNow postDate={date} />
            </MetadataContainer>
            <ConferencesContainer>
              {conferences && (
                <p>
                  <MapPinIcon width="16" height="16" />
                  {conferences.slice(0, 1).map((conference) => (
                    <span>
                      {conference.name}, {conference.location}
                    </span>
                  ))}
                  {conferences.length > 1 && (
                    <ConfCount>+{conferences.length - 1}</ConfCount>
                  )}
                </p>
              )}
            </ConferencesContainer>
          </InnerText>
        </StyledCard>
      </a>
    </Link>
  );
}

const ConfCount = styled.span`
  padding: 0.2rem 0.5rem 0.25rem;
  background: var(--color-gray-100);
  margin-left: 0.5rem;
  border-radius: 1rem;
  color: var(--color-gray-500);
  font-size: calc(var(--font-size-xs) / 1.1);
`;

const InnerText = styled.div`
  padding: var(--space-xs) var(--space-s);
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
`;

const ConferencesContainer = styled.div`
  p {
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    color: var(--color-gray-500);
    letter-spacing: 0.015rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  svg {
    fill: var(--color-gray-400);
    margin-right: 0.25rem;
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  margin-bottom: 0 !important;
  img {
    border-top-left-radius: var(--border-radius-base);
    border-top-right-radius: var(--border-radius-base);
  }
`;

const MetadataContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  font-family: var(--font-sans);
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  letter-spacing: 0.015rem;
  font-weight: 400;
  text-transform: capitalize;
  svg {
    margin: 0 0.5rem !important;
  }
`;

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0 var(--space-xs);
  border-radius: var(--border-radius-base);
  background: var(--color-light-cream);
  border: 1px solid var(--color-cream);
  transition: all 0.3s ease-in-out;
  align-items: start;
  cursor: pointer;
  box-shadow: var(--box-shadow-sm);
  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    transition: all 0.3s ease-in-out;
  }
  svg {
    position: relative;
    top: 1px;
    flex-shrink: 0;
  }
  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
    background: var(--color-light-cream);
    box-shadow: var(--box-shadow-lg);
    border: 1px solid var(--color-tinted-cream);
    h3 {
      color: var(--color-crimson);
    }
  }
`;
