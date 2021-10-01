import Tooltip from "./Tooltip";
import styled from "styled-components";

export default function GrowthStage({ stage }) {
    if (stage === "Evergreen") {
        return (
            <Tooltip content="">
                <StyledGrowthStage>{stage}</StyledGrowthStage>
            </Tooltip>
        );
    } else if (stage === "Budding") {
        return (
            <Tooltip content="Bababababa">
                <StyledGrowthStage>{stage}</StyledGrowthStage>
                //{" "}
            </Tooltip>
        );
    } else if (stage === "Seedling") {
        return (
            <Tooltip content="Sasasasas">
                <StyledGrowthStage>{stage}</StyledGrowthStage>
                //{" "}
            </Tooltip>
        );
    }
}

const StyledGrowthStage = styled.p`
    display: inline-block;
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    color: var(--color-gray-800);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: bold;
    padding-right: var(--space-16);
`;
