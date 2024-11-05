import styled from "styled-components";

const Video = ({ src, title, width, height, margin, ...props }) => (
  <StyledVideo margin={margin} {...props}>
    <iframe
      width={width ? width : "1000"}
      height={height ? height : "570"}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </StyledVideo>
);

const StyledVideo = styled.div`
  margin: ${(props) => props.margin || ""};
  grid-column: 1/4 !important;
  width: 950px;
  height: 570px;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--box-shadow-lg);
  @media (max-width: 950px) {
    width: 100%;
    height: 50vw;
  }
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    max-width: 100%;
    position: absolute;
    @media (max-width: 724px) {
      max-width: 100%;
    }
  }
`;

export default Video;
