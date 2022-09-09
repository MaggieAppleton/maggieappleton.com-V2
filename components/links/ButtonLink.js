import Tooltip from "../Tooltip";
import styled from "styled-components";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function ButtonLink({ href, children }) {
    return (
        <Tooltip
            content={
                <StyledExternalUrl href={href}>
                    {href}
                    <ArrowTopRightOnSquareIcon
                        width="18"
                        height="18"
                        style={{ position: "relative", top: "3px" }}
                    />
                </StyledExternalUrl>
            }
        >
            <LinkContainer>
                <StyledLink href={href}>{children}</StyledLink>
            </LinkContainer>
        </Tooltip>
    );
}

const StyledExternalUrl = styled.a`
    color: var(--color-gray-600);
    transition: color 0.2s ease-in-out;
    text-align: center;
    &:hover {
        color: var(--color-bright-crimson);
    }
`;

const LinkContainer = styled.div`
    margin: var(--space-24) auto;
    transition: all 300ms ease-in-out;
    :hover {
        transform: scale3d(1.02, 1.02, 1.02);
    }
`;

const StyledLink = styled.a`
    background-color: var(--color-bright-crimson);
    padding: var(--space-16) var(--space-24);
    border-radius: var(--border-radius-base);
    color: white;
    font-weight: 400;
    font-family: var(--font-sans);
    transition: all 300ms ease-in-out;
    :hover {
        background-color: var(--color-medium-sea-blue);
    }
`;
