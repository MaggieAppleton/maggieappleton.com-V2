import styled from "styled-components";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function BookCard({
  small,
  cover,
  title,
  subtitle,
  author,
  link,
}) {
  return (
    <a
      style={{ cursor: "pointer" }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledBookCard small={small}>
        <ExternalHoverLink small={small}>
          View on Google Books{" "}
          <ArrowTopRightOnSquareIcon
            width="18"
            height="18"
            style={{ position: "relative", top: "3px" }}
          />
        </ExternalHoverLink>
        {cover && (
          <ImageWrapper>
            <Image src={cover} alt={title} width={230} height={345} />
          </ImageWrapper>
        )}
        <div>
          <p>
            {title}
            {!small && subtitle && `: ${subtitle}`}
          </p>
          <span className="metadata">{author}</span>
        </div>
      </StyledBookCard>
    </a>
  );
}

const ImageWrapper = styled.div`
  display: grid;
  place-items: baseline;
  max-width: 300px;
  max-height: 450px;
`;

const ExternalHoverLink = styled.a`
  position: absolute;
  top: 35%;
  left: ${(props) => (props.small ? "10%" : "18%")};
  transform-origin: center;
  z-index: 1;
  font-family: var(--font-sans);
  background: white;
  color: var(--color-gray-800);
  padding: var(--space-3xs) var(--space-2xs);
  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow-md);
  opacity: 0%;
  transition: opacity 0.3s ease-in-out;
`;

const StyledBookCard = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  margin: 0 var(--space-2xs) var(--space-2xs) 0;
  padding: ${(props) =>
    props.small
      ? "0 0 var(--space-xs) 0"
      : "0 var(--space-3xs) var(--space-l) var(--space-3xs)"};
  img {
    transition: all 0.3s ease-in-out;
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-sm);
    border: 1px solid var(--color-tinted-cream);
  }
  div {
    transition: all 0.3s ease-in-out;
  }
  div p {
    transition: all 0.3s ease-in-out;
    margin: var(--space-2xs) 0 var(--space-3xs) 0;
    line-height: var(--leading-base);
    color: var(--color-black);
  }
  &:hover {
    img {
      box-shadow: var(--box-shadow-lg);
      transform: scale3d(1.02, 1.02, 1.02);
      opacity: 20%;
    }
    p {
      color: var(--color-crimson);
    }
    div {
      transform: translateY(4px);
    }
    ${ExternalHoverLink} {
      opacity: 100%;
    }
  }
`;
