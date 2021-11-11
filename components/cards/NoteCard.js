import Link from "next/link";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";
import { RelativeDate } from "../templates/Dates";

export default function NoteCard({ slug, title, growthStage, date }) {
    return (
        <Link href={`/${slug}`}>
            <a>
                <StyledNoteCard>
                    {growthStage && (
                        <GrowthIcon size="24" growthStage={growthStage} />
                    )}
                    <div>
                        <h3>{title}</h3>
                        <span>
                            <RelativeDate postDate={date} />
                        </span>
                    </div>
                </StyledNoteCard>
            </a>
        </Link>
    );
}

const StyledNoteCard = styled(motion.div)`
    display: flex;
    flex-direction: row;
    padding: var(--space-xs);
    margin: 0 var(--space-xs) var(--space-xs) 0;
    border-radius: var(--border-radius-base);
    border: 1px solid var(--color-cream);
    transition: all 0.3s ease-in-out;
    h3 {
        color: var(--color-gray-800);
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
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
            font-size: calc(var(--font-size-xs) / 1.08);
            color: var(--color-gray-600);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 400;
            margin: var(--space-3xs) 0 0 var(--space-xs);
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
