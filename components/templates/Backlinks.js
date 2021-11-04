import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import Link from "next/link";
import { motion } from "framer-motion";
import GrowthIcon from "../icons/GrowthIcon";
import { RelativeDate } from "../templates/Dates";

export default function Backlinks({ backlinks }) {
    return (
        <BacklinkContainer>
            <h3>{backlinks.length} Backlinks</h3>
            <div className="grid">
                {backlinks.map((backlink) => {
                    return (
                        <BacklinkCard key={backlink.slug} backlink={backlink} />
                    );
                })}
            </div>
        </BacklinkContainer>
    );
}

const BacklinkContainer = styled.section`
    width: 100%;
    grid-column: 1/4 !important;
    border-top: 1px solid var(--color-tinted-cream);
    background: #fff;
    h3 {
        text-align: center;
        margin-top: var(--space-xl);
        font-size: var(--font-size-md);
    }
    div.grid {
        margin: var(--space-l) auto var(--space-xl);
        display: grid;
        max-width: 1400px;
        padding: 0 var(--space-l);
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        word-break: break-word;
        grid-gap: var(--space-3xs);
    }

    @media ${breakpoints.mediaSM} {
        padding: var(--space-s) var(--space-xs);
        div.grid {
            padding: 0 var(--space-xs);
            margin: var(--space-m) auto var(--space-s);
        }
        h3 {
            margin-top: var(--space-m);
        }
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
    padding: 0 var(--space-xs) var(--space-xs) 0;
    margin: 0 var(--space-xs) var(--space-xs) 0;
    transition: all 0.3s ease-in-out;
    h4 {
        color: var(--color-gray-800);
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin: 0;
        margin-left: var(--space-xs);
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
            color: var(--color-gray-600);
            font-size: var(--font-size-sm);
            font-weight: 400;
            margin: var(--space-3xs) 0 0 var(--space-xs);
        }
    }
    &:hover {
        cursor: pointer;
        h4 {
            color: var(--color-crimson);
        }
    }
`;
