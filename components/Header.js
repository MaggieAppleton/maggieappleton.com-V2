import styled from "styled-components";

export default function Header({ children }) {
    return <HeaderWrapper>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    gap: var(--space-32);
`;
