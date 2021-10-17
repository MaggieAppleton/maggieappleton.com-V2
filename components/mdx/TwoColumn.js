import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default function TwoColumn({ children, maxWidth, alignItems }) {
    return (
        <TwoColumnContainer alignItems={alignItems} maxWidth={maxWidth}>
            {children}
        </TwoColumnContainer>
    );
}

const TwoColumnContainer = styled.div`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.maxWidth || "1400px"};
    margin: var(--space-24) auto var(--space-48);
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--space-16);
    align-items: ${(props) => props.alignItems || "center"};
    padding: 0 var(--space-8);
    @media ${breakpoints.mediaSM} {
        grid-template-columns: 1fr;
    }
    div,
    img,
    figure {
        grid-column: auto !important;
        margin: 0;
        border-radius: var(--border-radius-base);
    }
`;
