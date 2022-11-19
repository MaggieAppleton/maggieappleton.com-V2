import styled from "styled-components";

export default function AssumedAudience({ children }) {
  return (
    <AssumedAudienceContainer>
      <span className="label">Assumed Audience</span>
      <div>{children}</div>
    </AssumedAudienceContainer>
  );
}

const AssumedAudienceContainer = styled.div`
  padding: 1.5rem 1.75rem;
  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow-sm);
  border: 1px solid var(--color-gray-100);
  margin: 0 -1.6rem var(--space-xs) -1.6rem;
  display: flex;
  grid-gap: var(--space-s);
  flex-direction: row;
  align-items: baseline;
  font-family: var(--font-body);
  div p {
    font-weight: 400;
    margin: 0;
    flex-shrink: unset;
    color: var(--color-gray-800);
    font-size: calc(var(--font-size-base) / 1.2);
    line-height: 1.6;
  }
  span.label {
    color: var(--color-medium-sea-blue);
    margin-bottom: 0;
    flex-shrink: 0;
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    line-height: var(--leading-loose);
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
  @media (max-width: 768px) {
    margin: 0 0 var(--space-m) 0;
    flex-direction: column;
    grid-gap: var(--space-3xs);
  }
`;
