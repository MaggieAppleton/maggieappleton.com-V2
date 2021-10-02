import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";
import { RelativeDate } from "../templates/Dates";

export default function EssayCard({
    slug,
    cover,
    title,
    growthStage,
    date,
    variants,
    key,
}) {
    return (
        <Link key={key} href={`/${slug}`}>
            <a>
                <StyledEssayCard variants={variants}>
                    {cover ? (
                        <Image
                            src={cover}
                            alt={title}
                            width={300}
                            height={300}
                            layout="responsive"
                        />
                    ) : (
                        <img
                            src="https://via.placeholder.com/300x300"
                            alt={title}
                        />
                    )}
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
                </StyledEssayCard>
            </a>
        </Link>
    );
}

const StyledEssayCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--color-tinted-cream);
    padding: var(--space-24);
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-sm);
    background: var(--color-light-cream);
    transition: all 0.3s ease-in-out;
    color: var(--color-gray-800);
    h3 {
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin: var(--space-12) 0;
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
        box-shadow: var(--box-shadow-lg);
        transform: scale3d(1.02, 1.02, 1.02);
        h3 {
            color: var(--color-crimson);
        }
    }
`;
