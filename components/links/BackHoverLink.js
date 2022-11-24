import styled from "styled-components";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function BackHoverLink({ href, children }) {
    return (
        <Link href={href}>
            <LinkContainer>
                <ArrowLeftIcon width="16" height="16" />
                <StyledLink>{children}</StyledLink>
            </LinkContainer>
        </Link>
    );
}

const LinkContainer = styled.a`
    display: inline-block;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 3px;
    top: 1px;
    cursor: pointer;
    transition: all 0.8s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    svg {
        transition: all 0.8s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
        color: var(--color-gray-300);
        position: relative;
        top: 2px;
        width: 0;
    }
    &:hover {
        svg {
            width: 16px;
            margin-right: 2px;
            color: var(--color-sea-blue);
        }
        span {
            transform: translate3d(3px, 0, 0);
        }
    }
    
`;
const StyledLink = styled.span`
    display: inline-block;
    transition: all 0.8s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    color: var(--color-bright-crimson);
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    outline: none;
`;
