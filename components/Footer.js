import styled from "styled-components";
import Link from "next/link";
import { SmallCaps } from "./typography";
import UnderlineHoverLink from "./UnderlineHoverLink";

export default function Footer() {
    return (
        <StyledFooter>
            <FooterContent>
                <SmallCaps>Stuff, yeah?</SmallCaps>
                <p>Want to stay up to date?</p>
                <p>RSS Feed</p>
            </FooterContent>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    padding: var(--space-64) 0;
    border-top: 1px solid var(--color-gray-300);
`;

const FooterContent = styled.div`
    max-width: 1400px;
    margin: var(--space-48) auto;
    padding: 0 var(--space-48);
    @media (max-width: 768px) {
        margin: var(--space-32) auto;
        padding: 0 var(--space-32);
    }
    @media (max-width: 576px) {
        margin: var(--space-16) auto;
        padding: 0 var(--space-16);
    }
`;
