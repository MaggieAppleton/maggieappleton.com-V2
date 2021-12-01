import styled from "styled-components";

export default function AssumedAudience({ children }) {
  return (
    <AssumedAudienceContainer>
      <span>Assumed Audience</span>
      <div>{children}</div>
    </AssumedAudienceContainer>
  );
}

const AssumedAudienceContainer = styled.div`
  padding: 1.5rem 1.75rem;
  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow-sm);
  border: 1px solid var(--color-gray-100);
  margin: 0 -1.6rem var(--space-l) -1.6rem;
  display: flex;
  grid-gap: var(--space-s);
  flex-direction: row;
  align-items: baseline;
  div p {
    font-weight: 400;
    margin: 0;
    font-size: calc(var(--font-size-base) / 1.2);
    line-height: var(--leading-loose);
    flex-shrink: unset;
    color: var(--color-gray-800);
  }
  span {
    color: var(--color-medium-sea-blue);
    margin-bottom: 0;
    flex-shrink: 0;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    line-height: var(--leading-loose);
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
  @media (max-width: 768px) {
    margin: 0 0 var(--space-m) 0;
    flex-direction: column;
  }
`;
