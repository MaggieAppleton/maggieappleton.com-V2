import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import BookCard from "../components/cards/BookCard";
import { antiBookData } from "../posts/antibooks";
import PostCount from "../components/PostCount";
import Header from "../components/Header";
import Link from "next/link";
import styled from "styled-components";

export default function AntiLibrary() {
    return (
        <>
            <Header title="Antilibrary of Maggie Appleton" />
            <Layout>
                <header>
                    <Title1>
                        <Link href="/library">
                            <StyledLink>Library </StyledLink>
                        </Link>{" "}
                        <span style={{ color: "var(--color-gray-300)" }}>
                            |
                        </span>{" "}
                        Antilibrary
                    </Title1>
                    <Title2>Books I like the idea of having read.</Title2>
                    <PostCount postType="antibooks" posts={antiBookData} />
                </header>
                <MasonryGrid
                    columnGapLeft="var(--space-32)"
                    columnGapBottom="var(--space-48)"
                    breakpointColumnsObj={breakpointColumnsObj}
                >
                    {antiBookData.map((book, i) => (
                        <BookCard
                            key={i}
                            subtitle={book.subtitle}
                            link={book.link}
                            title={book.title}
                            author={book.author}
                            cover={book.cover}
                        />
                    ))}
                </MasonryGrid>
            </Layout>
        </>
    );
}

const StyledLink = styled.a`
    color: var(--color-gray-300);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
        color: var(--color-bright-crimson);
    }
`;

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
};
