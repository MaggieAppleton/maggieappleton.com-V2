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
                <svg height={2}>
                    <path
                        d="M0,0 L400,0"
                        stroke="var(--color-bright-crimson)"
                        strokeWidth="2"
                        strokeDasharray="12,8"
                    />
                </svg>
                <p>{children}</p>
                <svg height={2}>
                    <path
                        d="M0,0 L400,0"
                        stroke="var(--color-bright-crimson)"
                        strokeWidth="2"
                        strokeDasharray="12,8"
                    />
                </svg>
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
        svg {
            fill: var(--color-bright-crimson);
            position: relative;
            top: 5px;
        }
        h2 {
            margin: 0;
            font-weight: 300;
            line-height: var(--leading-tighter);
        }
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
