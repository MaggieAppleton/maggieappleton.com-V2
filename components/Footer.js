import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "../utils/breakpoints";
import UnderlineHoverLink from "./links/UnderlineHoverLink";
import { RssIcon } from "@heroicons/react/20/solid";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  DribbbleIcon,
  MastodonIcon,
} from "./icons/SocialMediaIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <RSSFeed>
          <h3>Want to stay up to date?</h3>
          <Link href="/rss.xml">
            <button>
              <RssIcon width="20" height="20" />
              Subscribe via RSS Feed
            </button>
          </Link>
          <SocialMediaIcons>
            <a rel="me" href="https://github.com/MaggieAppleton">
              <GithubIcon />
            </a>
            <a rel="me" href="https://uk.linkedin.com/in/maggieappleton">
              <LinkedInIcon />
            </a>
            <a rel="me" href="https://dribbble.com/mappleton">
              <DribbbleIcon />
            </a>
            <a rel="me" href="https://twitter.com/Mappletons">
              <TwitterIcon />
            </a>
            <a rel="me" href="https://indieweb.social/@maggie">
              <MastodonIcon />
            </a>
          </SocialMediaIcons>
          <span className="copyright">
            © {new Date().getFullYear()} Maggie Appleton
          </span>
        </RSSFeed>
        <SitemapList>
          {[
            { text: "The Garden", slug: "/garden" },
            // { text: "Start Here", slug: "/start" },
            { text: "Essays", slug: "/essays" },
            { text: "About", slug: "/about" },
            { text: "Notes", slug: "/notes" },
            { text: "Now", slug: "/now" },
            { text: "Patterns", slug: "/patterns" },
            // { text: "Tools I Use", slug: "/uses" },
            { text: "Library", slug: "/library" },
            // { text: "Changelog", slug: "/changelog" },
            { text: "Projects", slug: "/projects" },
            { text: "Colophon", slug: "/colophon" },
            // { text: "Illustration Resources", slug: "/resources" },
          ].map((link, i) => {
            return (
              <li key={i}>
                <UnderlineHoverLink href={link.slug}>
                  {link.text}
                </UnderlineHoverLink>
              </li>
            );
          })}
        </SitemapList>
      </FooterContent>
    </StyledFooter>
  );
}

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  margin: var(--space-m) 0 var(--space-2xs);
  grid-gap: var(--space-xs);
  a {
    color: var(--color-gray-400);
    fill: currentColor;
    padding: 0;
    margin: 0;
  }
  svg {
    width: 32px;
    height: 32px;
    transition: all 0.3s ease-in-out;
    :hover {
      cursor: pointer;
      fill: var(--color-bright-crimson);
    }
  }
`;

const RSSFeed = styled.div`
  h3 {
    font-size: var(--font-size-md);
    font-family: var(--font-body);
    font-weight: 300;
    margin-bottom: var(--space-xs);
  }
  button {
    display: inline-flex;
    margin-left: -0.1rem;
    align-items: center;
    gap: var(--space-3xs);
    padding: var(--space-3xs) 1.2rem;
    background: none;
    border: 1px solid var(--color-tinted-cream);
    border-radius: 3rem;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: 400;
    color: var(--color-gray-600);
    transition: all 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      color: var(--color-crimson);
      border: 1px solid var(--color-crimson);
      box-shadow: var(--box-shadow-sm);
    }
  }
  span.copyright {
    font-size: var(--font-size-xs);
    font-family: var(--font-sans);
    font-weight: 400;
    color: var(--color-gray-500);
  }
`;

const SitemapList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  grid-gap: var(--space-3xs) var(--space-l);
  padding-inline-start: 0;
  li span {
    color: var(--color-gray-600);
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1400px;
  margin: var(--space-m) auto;
  padding: 0 var(--space-l);
  @media ${breakpoints.mediaMD} {
    margin: var(--space-m) auto;
    padding: 0 var(--space-m);
    grid-template-columns: 1fr;
  }
  @media ${breakpoints.mediaSM} {
    margin: var(--space-xs) auto;
    padding: 0 var(--space-xs);
    grid-template-columns: 1fr;
  }
`;

const StyledFooter = styled.footer`
  padding: var(--space-xl) 0;
  border-top: 1px solid var(--color-gray-300);
  z-index: -1;
`;
