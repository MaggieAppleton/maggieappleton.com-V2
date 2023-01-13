import { TwitterTweetEmbed } from "react-twitter-embed";
import styled from "styled-components";

export default function TweetEmbed({ tweetId }) {
  return (
    <TweetContainer className="tweet">
      <TwitterTweetEmbed tweetId={tweetId} />
    </TweetContainer>
  );
}

const TweetContainer = styled.div`
  &.tweet {
    margin: 0 auto var(--space-m);
    width: 100%;
    max-width: 550px;
  }
`;
