import styled from "styled-components";

export default function EditRed({ children }) {
  return <EditRedContainer>{children}</EditRedContainer>;
}

const EditRedContainer = styled.div`
  color: red;
  opacity: 30%;
`;
