import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

const handleSize = (size) => {
    switch (size) {
        case "small":
            return "var(--space-48)";
        case "large":
            return "var(--space-160)";
        default:
            return "var(--space-80)";
    }
};

export const Spacer = styled.div`
    height: ${({ size }) => handleSize(size)};
    @media ${breakpoints.mediaSM} {
        height: calc(${({ size }) => handleSize(size)} / 1.33);
    }
`;
