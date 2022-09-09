import styled from "styled-components";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function BackToTop() {
    return (
        <StyledBackToTop>
            <button
                tabIndex="-1"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                Back To Top
                <ChevronUpIcon width="28" height="28" />
            </button>
        </StyledBackToTop>
    );
}

const StyledBackToTop = styled.div`
    position: fixed;
    bottom: 0.6rem;
    left: 0.6rem;
    button {
        display: flex;
        align-items: center;
        gap: 4px;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        padding: 4px 4px 4px 10px;
        background: white;
        font-family: var(--font-sans);
        font-size: var(--font-size-xs);
        color: var(--color-gray-300);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 400;
        transition: all 0.3s ease-in-out;
        svg {
            transition: all 0.3s ease-in-out;
        }
    }
    button:hover {
        color: var(--color-bright-crimson);
        transform: translateY(-4px);
        svg {
            color: var(--color-sea-blue);
        }
    }
    @media (max-width: 1100px) {
        display: none;
    }
`;
