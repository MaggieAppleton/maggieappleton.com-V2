import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import BookCard from "../components/cards/BookCard";
import { antiBookData } from "../posts/antibooks";
import PostCount from "../components/PostCount";
import Header from "../components/Header";
import Link from "next/link";

export default function AntiLibrary() {
    return (
        <>
            <Header title="Antilibrary of Maggie Appleton" />
            <Layout>
                <header>
                    <Title1>
                        Antilibrary{" "}
                        <Link href="/library">
                            <a style={{ color: "var(--color-gray-300)" }}>
                                / Library
                            </a>
                        </Link>
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

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
};
