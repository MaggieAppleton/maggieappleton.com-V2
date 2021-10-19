import styled from "styled-components";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function ReferencesLink({ title, url, author }) {
    return (
        <ReferenceLinkContainer>
            <ForwardHoverLink href={url}>
                <svg
                    className="circle"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="4" cy="4" r="4" />
                </svg>
                <h4>{title}</h4>
                <ArrowRightIcon width="16" height="16" />
            </ForwardHoverLink>
            <span className="author">{author}</span>
        </ReferenceLinkContainer>
    );
}

const ForwardHoverLink = styled.a`
    display: inline-block;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 3px;
    top: 1px;
    cursor: pointer;
    h4 {
        display: inline-block;
        transition: all 0.6s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
        color: var(--color-gray-800);
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        outline: none;
    }
    svg {
        transition: all 0.6s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
        color: var(--color-gray-300);
        position: relative;
        top: 2px;
        width: 0;
        margin-left: 4px;
    }
    &:hover {
        svg {
            width: 16px;
            margin-right: 2px;
            color: var(--color-sea-blue);
        }
        span {
            color: var(--color-bright-crimson);
        }
    }
`;

const ReferenceLinkContainer = styled.div`
    margin-bottom: var(--space-12);
    transition: all 1s cubic-bezier(0.2, 1, 0.8, 1);
    svg.circle {
        position: relative;
        top: 0;
        right: 1.2rem;
        margin-right: -0.6rem;
        transition: all 1s cubic-bezier(0.2, 1, 0.8, 1);
    }
    h4,
    span {
        font-size: var(--font-size-sm);
        margin: 0;
    }
    span.author {
        display: block;
        margin: 0;
        font-family: var(--font-sans);
        color: var(--color-gray-600);
    }
    &:hover {
        svg.circle {
            transform: scale(1.5);
            fill: var(--color-sea-blue);
        }
    }
`;
