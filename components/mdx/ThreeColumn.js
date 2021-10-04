import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default function ThreeColumn({ children, maxWidth }) {
    return (
        <ThreeColumnContainer maxWidth={maxWidth}>
            {children}
        </ThreeColumnContainer>
    );
}

const ThreeColumnContainer = styled.div`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.maxWidth || "1400px"};
    margin: var(--space-24) auto var(--space-48);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--space-24);
    justify-content: center;
    @media ${breakpoints.mediaMD} {
        grid-template-columns: 1fr 1fr;
    }
    @media ${breakpoints.mediaSM} {
        grid-template-columns: 1fr;
    }
    div,
    img,
    figure {
        grid-column: auto !important;
    }
`;
