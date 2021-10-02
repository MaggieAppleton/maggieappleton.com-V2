import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import BookCard from "../components/cards/BookCard";
import { bookData } from "../posts/books";
import PostCount from "../components/PostCount";
import Header from "../components/Header";

export default function Library() {
    return (
        <>
            <Header title="Library of Maggie Appleton" />
            <Layout>
                <header>
                    <Title1>Library</Title1>
                    <Title2>
                        Books I’ve read and books I like the idea of having
                        read.
                    </Title2>
                    <PostCount postType="books" posts={bookData} />
                </header>
                <MasonryGrid
                    largeGap
                    breakpointColumnsObj={breakpointColumnsObj}
                >
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
