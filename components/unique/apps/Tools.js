import styled from "styled-components";

const Tools = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export const MainLayout = styled.div`
  grid-column: 1/4;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: var(--space-16);
  align-content: center;
  align-items: center;
  text-align: center;
  justify-items: center;
  justify-content: center;
  margin: var(--space-m) auto 0;
  img {
    transition: all 400ms ease;
    max-width: 175px;
    margin-bottom: 0;
    &:hover {
      transition: all 400ms ease;
      transform: translateY(-6px);
    }
  }
  h5 {
    transition: all 400ms ease;
    text-align: center;
    font-weight: 400;
    margin-bottom: var(--space-s);
  }
`;

export default Tools;
