import Link from "next/link";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";
import { RelativeDate } from "../templates/Dates";

export default function NoteCard({ slug, title, growthStage, date, key }) {
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <Link key={key} href={`/${slug}`}>
            <a>
                <StyledNoteCard>
                    <h3>{title}</h3>

                    <div>
                        {growthStage && <span>{growthStage}</span>}
                        {growthStage && (
                            <GrowthIcon size="14" growthStage={growthStage} />
                        )}
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
    flex-direction: column;
    gap: var(--space-8);
    padding: var(--space-16) 0;
    border-bottom: 1px solid var(--color-tinted-cream);
    transition: all 0.3s ease-in-out;
    h3 {
        color: var(--color-gray-800);
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        transition: all 0.3s ease-in-out;
    }
    div {
        display: flex;
        align-items: center;
        span {
            display: inline-block;
            font-family: var(--font-sans);
            font-size: var(--font-size-xs);
            color: var(--color-gray-600);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 400;
            margin-top: 2px;
        }
        svg {
            margin: 0 var(--space-8);
        }
    }
    &:hover {
        transform: scale3d(1.02, 1.02, 1.02);
        border-bottom: 1px solid var(--color-sea-blue);
        h3 {
            color: var(--color-crimson);
        }
    }
`;
