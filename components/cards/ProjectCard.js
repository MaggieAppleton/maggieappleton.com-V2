import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";

export default function ProjectCard({ slug, cover, title, date, topics, key }) {
    function formattedDate(date) {
        return new Date(date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
        });
    }

    return (
        <Link key={key} href={`/${slug}`}>
            <a>
                <StyledProjectCard>
                    {cover ? (
                        <Image
                            src={cover}
                            alt={title}
                            width={300}
                            height={225}
                            layout="responsive"
                        />
                    ) : (
                        <img
                            src="https://via.placeholder.com/300x225"
                            alt={title}
                        />
                    )}
                    <Metadata>
                        <h3>{title}</h3>
                        <div className="metadata">
                            <span>{formattedDate(date)}</span>
                            <span>{topics}</span>
                        </div>
                    </Metadata>
                </StyledProjectCard>
            </a>
        </Link>
    );
}

const Metadata = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 var(--space-16) var(--space-16) 0;
    h3 {
        text-align: center;
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin-bottom: var(--space-8);
    }
    div {
        display: flex;
        align-content: center;
        justify-content: center;
    }
`;

const StyledProjectCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--color-cream);
    transition: all 0.3s ease-in-out;
    color: var(--color-gray-800);
    img,
    div:first-child {
        border-radius: var(--border-radius-base);
        transition: all 0.3s ease-in-out;
        margin-bottom: 0 !important;
    }
    &:hover {
        transform: scale3d(1.02, 1.02, 1.02);
        h3 {
            color: var(--color-crimson);
        }
        & > div:first-child {
            box-shadow: var(--box-shadow-lg);
        }
    }
`;
