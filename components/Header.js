import styled from "styled-components";
import { H1 } from "./Typography";

export default function Header({ children }) {
    return <HeaderWrapper>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    gap: var(--space-48);
    margin: var(--space-48) var(--space-96);
    @media (max-width: 768px) {
        margin: var(--space-24);
    }
    @media (max-width: 576px) {
        margin: var(--space-12);
    }
`;
