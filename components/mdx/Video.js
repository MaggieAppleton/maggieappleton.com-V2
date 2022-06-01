import styled from "styled-components";

const Video = ({ src, title, width, height, ...props }) => (
  <StyledVideo {...props}>
    <iframe
      width="853"
      height="480"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </StyledVideo>
);

const StyledVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    @media (max-width: 724px) {
      max-width: 100%;
    }
  }
`;

export default Video;
