import styled from "styled-components";

const Video = ({ src, title, width, height, margin, ...props }) => (
  <StyledVideo margin={margin} {...props}>
    <iframe
      width={ width ? width : "853"}
      height={ height ? height : "480"}
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
  margin: ${(props) => {props.margin || null}};
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
