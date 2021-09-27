import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";

export default function EssayCard({ slug, cover, title, date }) {
    function formattedDate(date) {
        return new Date(date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }

    return (
        <Link key={slug} href={`/${slug}`}>
            <a>
                <StyledProjectCard>
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
                            src="https://via.placeholder.com/300x250"
                            alt={title}
                        />
                    )}
                    <Metadata>
                        <h3>{title}</h3>
                        <span className="metadata">{formattedDate(date)}</span>
                    </Metadata>
                </StyledProjectCard>
            </a>
        </Link>
    );
}

const Metadata = styled.div`
    display: flex;
    flex-direction: column;
    margin: var(--space-16) var(--space-24);
    h3 {
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin-bottom: var(--space-8);
    }
`;

const StyledProjectCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--color-gray-100);
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-sm);
    background: var(--color-light-cream);
    transition: all 0.3s ease-in-out;
    color: var(--color-gray-800);
    &:hover {
        box-shadow: var(--box-shadow-lg);
        transform: translateY(-2px);
        h3 {
            color: var(--color-dark-crimson);
        }
    }
`;
