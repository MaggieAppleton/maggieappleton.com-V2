import styled from "styled-components";

export default function SimpleCard({ children, alignLeft }) {
    return <StyledCard alignLeft={alignLeft}>{children}</StyledCard>;
}

const StyledCard = styled.div`
    margin: var(--space-3xs) auto var(--space-m);
    box-shadow: var(--box-shadow-lg);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-tinted-cream);
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.alignLeft ? "" : "center")};
    justify-content: center;
    text-align: ${(props) => (props.alignLeft ? "" : "center")};
    padding: var(--space-m) var(--space-l);
    grid-column: 1/4 !important;
    max-width: 860px;
    width: 100%;
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    .tweet {
        margin: var(--space-2xs) 0;
    }
`;
