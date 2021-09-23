import styled from "styled-components";
import Link from "next/link";

export default function DynamicPostsList({ postsToShow }) {
    return (
        <ul>
            {postsToShow.map(({ slug, title }) => (
                <li key={slug}>
                    <article>
                        <Link href="/blog/[slug]" as={`/blog/${slug}`}>
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
