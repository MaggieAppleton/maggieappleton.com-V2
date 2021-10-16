import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import BookCard from "../components/cards/BookCard";
import { bookData } from "../posts/books";
import PostCount from "../components/PostCount";
import Header from "../components/Header";
import Link from "next/link";
import styled from "styled-components";

export default function Library() {
    return (
        <>
            <Header title="Library of Maggie Appleton" />
            <Layout>
                <header>
                    <Title1>
                        Library{" "}
                        <span style={{ color: "var(--color-gray-300)" }}>
                            |
                        </span>
                        <Link href="/antilibrary">
                            <StyledLink> Antilibrary</StyledLink>
                        </Link>
                    </Title1>
                    <Title2>Books I’ve read.</Title2>
                    <PostCount postType="books" posts={bookData} />
                </header>
                <BookshelfGrid>
                    {bookData.map((book, i) => (
                        <BookCard
                            key={i}
                            subtitle={book.subtitle}
                            link={book.link}
                            title={book.title}
                            author={book.author}
                            cover={book.cover}
                        />
                    ))}
                </BookshelfGrid>
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

export const BookshelfGrid = styled.section`
    display: grid;
    grid-gap: var(--space-24);
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;
