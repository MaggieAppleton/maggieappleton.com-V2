import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import Link from "next/link";

export default function Backlinks({ backlinks }) {
    return (
        <StyledContainer>
            <h3>{backlinks.length} Backlinks</h3>
            <div className="grid">
                {backlinks.map((backlink) => {
                    return (
                        <div key={backlink.slug}>
                            <Link href={backlink.slug}>{backlink.title}</Link>
                        </div>
                    );
                })}
            </div>
        </StyledContainer>
    );
}

const StyledContainer = styled.section`
    grid-column: 1/4 !important;
    padding: var(--space-64) var(--space-32) var(--space-80);
    border-top: 1px solid var(--color-tinted-cream);
    background: #fff;
    h3 {
        text-align: center;
        margin-top: 0;
        font-size: var(--font-size-md);
    }
    div.grid {
        max-width: 100%;
        margin: var(--space-32) auto 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        word-break: break-word;
        grid-gap: var(--space-16);
    }

    @media ${breakpoints.mediaSM} {
        padding: var(--space-32) var(--space-8);
    }
`;
