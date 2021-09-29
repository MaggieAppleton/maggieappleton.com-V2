import Link from "next/link";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";

export default function PatternCard({ slug, title, growthStage }) {
    return (
        <Link key={slug} href={`/${slug}`}>
            <a>
                <StyledPatternCard>
                    <h3>{title}</h3>
                    <div>
                        {growthStage && <p>{growthStage}</p>}
                        {growthStage && (
                            <GrowthIcon size="14" growthStage={growthStage} />
                        )}
                    </div>
                </StyledPatternCard>
            </a>
        </Link>
    );
}

const StyledPatternCard = styled(motion.div)`
    margin: var(--space-16) 0;
    h3 {
        color: var(--color-gray-800);
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        transition: all 0.3s ease-in-out;
    }
    h3::before {
        content: "";
        display: inline-block;
        width: 2px;
        height: 1.2rem;
        position: relative;
        top: 2px;
        background: var(--color-sea-blue);
        margin-right: var(--space-12);
        transition: all 0.3s ease-in-out;
    }
    h3:hover {
        transform: scale3d(1, 1.02, 1.02);
        color: var(--color-crimson);
        ::before {
            width: var(--space-12);
        }
    }
`;
