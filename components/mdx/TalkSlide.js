import styled from "styled-components";
import Video from "./Video";

export default function TalkSlide({ imgSrc, children, video }) {
  return (
    <StyledSlide>
      {!video && <StyledBasicImage src={imgSrc} />}
      {video && <StyledVideo src={imgSrc} />}
      <TextContainer>
        <p>{children}</p>
      </TextContainer>
    </StyledSlide>
  );
}

const StyledSlide = styled.div`
  max-width: 100%;
  grid-column: 1 / 4 !important;
  display: grid;
  grid-template-columns: 5fr 4fr;
  margin: var(--space-l) auto;
  padding: 0 var(--space-xs);
  @media (max-width: 1200px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-gap: var(--space-s);
    margin: var(--space-m) auto;
  }
`;

const TextContainer = styled.div`
  align-items: center;
  display: grid;
  width: 100%;
  p {
    padding: 0 var(--space-m);
    width: 100%;
    margin: 0 auto;
    @media (max-width: 1200px) {
      padding: 0;
      max-width: 60ch;
      width: 100%;
    }
  }
  p:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const StyledBasicImage = styled.img`
  border-radius: var(--border-radius-sm);
  @media (max-width: 1200px) {
    max-width: 100%;
    width: 900px;
  }
`;

const StyledVideo = styled(Video)`
  border-radius: var(--border-radius-sm);
  grid-column: 1 !important;
  @media (max-width: 1200px) {
    max-width: 100%;
    width: 900px;
  }
`;
