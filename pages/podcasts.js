import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import styled from "styled-components";
import Header from "../components/Header";
import PodcastCard from "../components/cards/PodcastCard";
import TitleWithCount from "../components/TitleWithCount";
import { podcastData } from "../posts/data/podcasts";

export default function Podcasts() {
  return (
    <>
      <Header title="Podcasts with Maggie Appleton" />
      <Layout>
        <header style={{ marginBottom: "var(--space-xl)" }}>
          <TitleWithCount posts={podcastData}>Podcasts</TitleWithCount>
          <Title2>Interviews and casual chats on podcasts</Title2>
          <p>
            A handful of kind and interesting people have been gracious enough
            to let me ramble about programming, metaphors, and/or programming
            metaphors on their podcasts.
          </p>
        </header>
        <NotesGrid>
          {podcastData.map(
            ({ podcastName, episodeName, coverImage, date, url }, i) => (
              <PodcastCard
                id={i}
                url={url}
                episodeName={episodeName}
                podcastName={podcastName}
                date={date}
                podcastCover={coverImage}
              />
            )
          )}
        </NotesGrid>
      </Layout>
    </>
  );
}

const NotesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 3rem;
`;
