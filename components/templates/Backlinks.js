import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import Link from "next/link";
import { motion } from "framer-motion";
import GrowthIcon from "../icons/GrowthIcon";
import { RelativeDate } from "../templates/Dates";

export default function Backlinks({ backlinks }) {
    return (
        <StyledContainer>
            <h3>{backlinks.length} Backlinks</h3>
            <div className="grid">
                {backlinks.map((backlink) => {
                    return (
                        <BacklinkCard key={backlink.slug} backlink={backlink} />
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

function BacklinkCard({ backlink }) {
    return (
        <Link key={backlink.slug} href={backlink.slug}>
            <StyledBacklinkCard>
                {backlink.growthStage && (
                    <GrowthIcon size="24" growthStage={backlink.growthStage} />
                )}
                <div>
                    <h4>{backlink.title}</h4>
                    <span>{backlink.description}</span>
                </div>
            </StyledBacklinkCard>
        </Link>
    );
}

const StyledBacklinkCard = styled(motion.div)`
    display: flex;
    flex-direction: row;
    padding: var(--space-16);
    margin: 0 var(--space-16) var(--space-16) 0;
    border-radius: var(--border-radius-base);
    border: 1px solid var(--color-cream);
    transition: all 0.3s ease-in-out;
    h4 {
        color: var(--color-gray-800);
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin-left: var(--space-16);
        transition: all 0.3s ease-in-out;
    }
    svg {
        position: relative;
        top: 4px;
        flex-shrink: 0;
    }
    div {
        display: flex;
        flex-direction: column;
        span {
            font-family: var(--font-sans);
            font-size: calc(var(--font-size-xs) / 1.08);
            color: var(--color-gray-600);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 400;
            margin: var(--space-8) 0 0 var(--space-16);
        }
    }
    &:hover {
        transform: scale3d(1.02, 1.02, 1.02);
        background: var(--color-light-cream);
        box-shadow: var(--box-shadow-sm);
        border: 1px solid var(--color-tinted-cream);
        h3 {
            color: var(--color-crimson);
        }
    }
`;
