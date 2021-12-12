import { Menu } from "react-instantsearch-dom";
import styled from "styled-components";

export default function GardenFilters() {
  return (
    <Container>
      <TopicsContainer>
        <span>Topics</span>
        <Menu attribute="topics" limit={7} showMore />
      </TopicsContainer>
      <Menu attribute="growthStage" />
      <Menu attribute="type" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`;

const TopicsContainer = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
