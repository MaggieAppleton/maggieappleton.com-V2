import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const Spacer = styled.div`
    height: ${(props) =>
        props.large ? "var(--space-160)" : "var(--space-80)"};
    @media ${breakpoints.mediaSM} {
        height: ${(props) =>
            props.large ? "var(--space-96)" : "var(--space-64)"};
    }
`;
