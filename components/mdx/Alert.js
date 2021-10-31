import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default function Alert({ children }) {
    return (
        <AlertContainer>
            <svg width={100} height={100}>
                <circle
                    cx={50}
                    cy={50}
                    r={45}
                    fill="transparent"
                    stroke="#000"
                />
            </svg>
            <div>
                <p>{children}</p>
            </div>
        </AlertContainer>
    );
}

const AlertContainer = styled.div`
    grid-column: 1/4 !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: var(--space-48) auto;
    div {
        margin-top: var(--space-24);
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        align-content: center;
    }
    p {
        font-family: var(--font-sans);
        font-size: var(--font-size-base);
        color: var(--color-gray-800);
        line-height: var(--line-height-base);
        width: 650px;
        max-width: 100%;
        font-weight: 300;
        margin-top: var(--space-24);
    }
    @media ${breakpoints.mediaSM} {
        margin: var(--space-32) var(--space-4);
        div {
            flex-direction: column;
            svg {
                display: none;
            }
        }
    }
`;
