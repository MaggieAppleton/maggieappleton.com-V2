import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import BookCard from "../components/cards/BookCard";
import { bookData } from "../posts/data/books";
import Header from "../components/Header";
import Link from "next/link";
import styled from "styled-components";
import TitleWithCount from "../components/TitleWithCount";

export default function Library() {
  return (
    <>
      <Header title="Library of Maggie Appleton" />
      <Layout>
        <header style={{ marginBottom: "var(--space-2xl)" }}>
          <TitleWithCount posts={bookData}>
            Library{" "}
            <div
              style={{
                color: "var(--color-gray-300)",
                display: "inline-block",
              }}
            >
              |
            </div>
            <Link href="/antilibrary">
              <StyledLink> Antilibrary</StyledLink>
            </Link>
          </TitleWithCount>
          <Title2>
            Books I’ve read that significantly influenced how I see the world.
          </Title2>
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
  grid-gap: var(--space-s);
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;
