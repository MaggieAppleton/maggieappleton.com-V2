import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import { BookshelfGrid } from "./library";
import BookCard from "../components/cards/BookCard";
import { antiBookData } from "../posts/data/antibooks";
import Header from "../components/Header";
import Link from "next/link";
import styled from "styled-components";
import TitleWithCount from "../components/TitleWithCount";

export default function AntiLibrary() {
    return (
        <>
            <Header title="Antilibrary of Maggie Appleton" />
            <Layout>
                <header style={{ marginBottom: "var(--space-2xl)" }}>
                    <TitleWithCount posts={antiBookData}>
                        <Link href="/library">
                            <StyledLink>Library </StyledLink>
                        </Link>{" "}
                        <div
                            style={{
                                color: "var(--color-gray-300)",
                                display: "inline-block",
                            }}
                        >
                            |
                        </div>{" "}
                        Antilibrary
                    </TitleWithCount>
                    <Title2>Books I like the idea of having read.</Title2>
                </header>
                <BookshelfGrid>
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
