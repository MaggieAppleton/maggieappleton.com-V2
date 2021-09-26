import Link from "next/link";
import styled from "styled-components";
import GrowthIcon from "../components/icons/GrowthIcon";
import { motion } from "framer-motion";

export default function NoteCard({ slug, title, growthStage, date }) {
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <Link key={slug} href={`/${slug}`}>
            <a>
                <StyledNoteCard>
                    {growthStage && <p>{growthStage}</p>}
                    {growthStage && (
                        <GrowthIcon size="14" growthStage={growthStage} />
                    )}
                    <h3>{title}</h3>
                    <div>
                        <p>{formattedDate}</p>
                    </div>
                </StyledNoteCard>
            </a>
        </Link>
    );
}

const StyledNoteCard = styled(motion.div)`
    display: flex;
    padding: var(--space-16) 0 1.2rem;
    border-bottom: 1px solid var(--color-gray-100);
    transition: all 0.3s ease-in-out;
    svg {
        position: relative;
        top: 5px;
        flex-shrink: 0;
    }
    h3 {
        color: var(--color-gray-800);
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin-left: var(--space-16);
        transition: all 0.3s ease-in-out;
    }
    &:hover {
        border-bottom: 1px solid var(--color-sea-blue);
        h3 {
            color: var(--color-dark-crimson);
        }
    }
`;
