import styled from "styled-components";

export default function TwoColumn({ children }) {
    return <TwoColumnContainer>{children}</TwoColumnContainer>;
}

const TwoColumnContainer = styled.div`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.width || "1400px"};
    margin: var(--space-24) auto var(--space-48);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    img {
        max-width: 45%;
        margin: var(--space-8);
        border-radius: var(--border-radius-base);
    }
`;
