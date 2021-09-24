import styled from "styled-components";
import { H1 } from "./Typography";

export default function Header({ children }) {
    return <HeaderWrapper>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    gap: var(--space-48);
`;
