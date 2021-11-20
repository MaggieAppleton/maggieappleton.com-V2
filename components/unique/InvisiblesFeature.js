import styled from "styled-components";

const InvisiblesFeature = ({
  illustrator,
  imageURL,
  sourceURL,
  sourceTitle,
  children,
}) => {
  return (
    <InvisiblesFeatureContainer>
      <div>
        <h4>{illustrator}</h4>
        <a href={sourceURL}>
          <h4>{sourceTitle}</h4>
        </a>
        <p>{children}</p>
      </div>
      <img alt={sourceTitle} src={imageURL} />
    </InvisiblesFeatureContainer>
  );
};

const InvisiblesFeatureContainer = styled.div`
  grid-column: 1/4;
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  grid-gap: var(--space-l);
  max-width: 1000px;
  margin: var(--space-m) auto var(--space-l);
  justify-content: center;
  font-family: var(--font-body);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    grid-gap: var(--space-xs);
  }
  h4 {
    margin-top: 0;
  }
  img {
    border-radius: 5px;
    @media (max-width: 768px) {
      max-width: 100%;
      width: 500px;
      margin: inherit auto;
    }
  }
  p {
    margin-bottom: var(--space-xs);
  }
`;

export default InvisiblesFeature;
