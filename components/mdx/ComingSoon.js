import styled from "styled-components";
import BuddingIcon from "../icons/BuddingIcon";

export default function ComingSoon() {
  return (
    <ComingSoonContainer>
      <BuddingIcon width="80" height="80" />
      <h1>Coming Soon</h1>
      <p>Feel free to bug me on twitter to finish writing this.</p>
    </ComingSoonContainer>
  );
}

const ComingSoonContainer = styled.div`
  margin: var(--space-s) 0;
  box-shadow: var(--box-shadow-lg);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-tinted-cream);
  display: flex;
  flex-direction: column;
  grid-gap: var(--space-2xs);
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-l) var(--space-xs) var(--space-xl);
  h1,
  p {
    margin: 0;
    line-height: var(--leading-tight);
  }
`;
