import styled from "styled-components";
import Link from "next/link";

export default function DynamicPostsList({ postsToShow }) {
    return (
        <ul>
            {postsToShow.map(({ slug, title, type, growthStage }) => (
                <li key={slug}>
                    <article>
                        <Link href="/[slug]" as={`/${slug}`}>
                            <a>
                                <h2>{title}</h2>
                            </a>
                        </Link>
                    </article>
                </li>
            ))}
        </ul>
    );
}
