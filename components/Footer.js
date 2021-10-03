import styled from "styled-components";
import Link from "next/link";
import { SmallCaps } from "./typography";
import { breakpoints } from "../utils/breakpoints";
import UnderlineHoverLink from "./links/UnderlineHoverLink";

export default function Footer() {
    return (
        <StyledFooter>
            <FooterContent>
                <RSSFeed>
                    <h3>Want to stay up to date?</h3>
                    <span>Subscribe via RSS Feed</span>
                </RSSFeed>
                <SitemapList>
                    {[
                        { text: "The Garden", slug: "/garden" },
                        // { text: "Start Here", slug: "/start" },
                        { text: "Essays", slug: "/essays" },
                        { text: "About", slug: "/about" },
                        { text: "Notes", slug: "/notes" },
                        // { text: "Now", slug: "/now" },
                        // { text: "Patterns", slug: "/patterns" },
                        // { text: "Tools I Use", slug: "/uses" },
                        { text: "Library", slug: "/library" },
                        // { text: "Changelog", slug: "/changelog" },
                        { text: "Projects", slug: "/projects" },
                        // { text: "Illustration Resources", slug: "/resources" },
                    ].map((link, i) => {
                        return (
                            <li key={i}>
                                <Link href={link.slug}>
                                    <SmallCaps>
                                        <UnderlineHoverLink>
                                            {link.text}
                                        </UnderlineHoverLink>
                                    </SmallCaps>
                                </Link>
                            </li>
                        );
                    })}
                </SitemapList>
            </FooterContent>
        </StyledFooter>
    );
}

const RSSFeed = styled.div`
    h3 {
        font-size: var(--font-size-md);
        font-family: var(--font-body);
        font-weight: 300;
        margin-bottom: var(--space-24);
    }
    span {
        font-family: var(--font-sans);
        font-size: var(--font-size-base);
        font-weight: 400;
        color: var(--color-gray-800);
    }
`;

const SitemapList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    grid-gap: var(--space-12) var(--space-48);
    padding-inline-start: 0;
    li span {
        color: var(--color-gray-600);
    }
`;

const FooterContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: 1400px;
    margin: var(--space-48) auto;
    padding: 0 var(--space-48);
    @media ${breakpoints.mediaMD} {
        margin: var(--space-32) auto;
        padding: 0 var(--space-32);
        grid-template-columns: 1fr;
    }
    @media ${breakpoints.mediaSM} {
        margin: var(--space-16) auto;
        padding: 0 var(--space-16);
        grid-template-columns: 1fr;
    }
`;

const StyledFooter = styled.footer`
    padding: var(--space-64) 0;
    border-top: 1px solid var(--color-gray-300);
`;
