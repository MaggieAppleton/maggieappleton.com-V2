import styled from "styled-components";

const MediumMaterialsMeat = ({ sectionTitle, children }) => {
  return (
    <MainLayout>
      <div className="innerLayout">
        <h1>{sectionTitle}</h1>
        {children}
      </div>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  display: flex;
  .innerLayout {
    margin: 0 auto;
    justify-content: center;
    align-content: center;
    display: inline-block;
    h1 {
      text-align: center;
    }
  }
`;

export default MediumMaterialsMeat;
