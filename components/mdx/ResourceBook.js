import styled from "styled-components";
import Image from "next/image";

export default function ResourceBook({
  url,
  title,
  author,
  image,
  small,
  children,
}) {
  return (
    <StyledBookCard small={small}>
      <div
        style={{
          height: small ? "199px" : "319px",
          width: small ? "137px" : "220px",
          flexShrink: 0,
          boxShadow: "var(--box-shadow-lg)",
        }}
      >
        <Image
          width={small ? 137 : 220}
          height={small ? 199 : 319}
          alt={title}
          layout="responsive"
          src={image}
        />
      </div>
      <Metadata>
        <a href={url}>
          <h3>{title}</h3>
        </a>
        <span>{author}</span>
        {children && (
          <>
            <svg width="40" height="3">
              <rect width="40" height="3" fill="var(--color-gray-300)" />
            </svg>
            <p>{children}</p>
          </>
        )}
      </Metadata>
    </StyledBookCard>
  );
}

const StyledBookCard = styled.div`
  margin: var(--space-l) auto;
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: ${(props) => (props.small ? "center" : "inherit")};
  gap: var(--space-l);
  height: content-min;
  cursor: pointer;
  img {
    border-radius: var(--border-radius-sm);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-m);
    height: content-min;
    text-align: center;
  }
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  h3,
  p,
  span {
    margin: 0;
    font-family: var(--font-body);
  }
  span {
    color: var(--color-gray-600);
  }
  h3 {
    font-family: var(--font-body);
    font-size: var(--font-size-md);
    margin-bottom: var(--space-3xs);
    color: var(--color-gray-800);
    width: 26ch;
    max-width: 100%;
    transition: all 0.2s ease-in-out;
    line-height: var(--leading-tight);
  }
  p {
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    line-height: var(--leading-loose);
    width: 42ch;
    max-width: 100%;
    color: var(--color-gray-800);
  }
  svg {
    margin: var(--space-s) 0;
    @media (max-width: 768px) {
      margin: var(--space-s) auto;
    }
  }
  &:hover {
    h3 {
      color: var(--color-bright-crimson);
    }
  }
`;
