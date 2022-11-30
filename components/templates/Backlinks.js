import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import Link from "next/link";
import { motion } from "framer-motion";
import GrowthIcon from "../icons/GrowthIcon";
import { RelativeDate } from "../templates/Dates";

export default function Backlinks({ backlinks }) {
    return (
        <BacklinkContainer>
            <InnerContainer>
            <h3>{backlinks.length} Backlinks</h3>
            <div className="grid">
                {backlinks.map((backlink) => {
                    return (
                        <BacklinkCard key={backlink.slug} backlink={backlink} />
                    );
                })}
            </div>
            </InnerContainer>
        </BacklinkContainer>
    );
}

const BacklinkContainer = styled.section`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sans);
    background: white;
    color: var(--color-gray-800);
    margin: 0 0.5rem;
`;

const InnerContainer = styled.div`
    width: 880px;
    max-width: 100%;
    margin: 0 auto;
    box-shadow: var(--box-shadow-lg);
    border-radius: 8px;
    padding: 1.5rem 2rem;
    margin-bottom: -3rem;
    border: 1px solid var(--color-gray-100);
    background: white;
    h3 {
        font-size: var(--font-size-md);
        font-weight: 300;
    }
    div.grid {
        margin: var(--space-m) auto 0;
        display: grid;
        max-width: 900px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    padding: 0 var(--space-xs) var(--space-xs) var(--space-2xs);
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
            margin: var(--space-2xs) 0 0 var(--space-xs);
        }
    }
    &:hover {
        cursor: pointer;
        h4 {
            color: var(--color-crimson);
        }
    }
`;
