import styled from "styled-components";

export default function Layout({ children, type }) {
    return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.main`
    max-width: 1400px;
    margin: var(--space-32) auto;
    padding: 0 var(--space-48);
    @media (max-width: 768px) {
        margin: var(--space-24) auto;
        padding: 0 var(--space-32);
    }
    @media (max-width: 576px) {
        margin: var(--space-16) auto;
        padding: 0 var(--space-16);
    }
`;
