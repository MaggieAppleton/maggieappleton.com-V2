import styled from "styled-components";

function AIConversation() {
  return (
    <div style={{ margin: "1rem 0" }}>
      <Speaker1>
        <PictureName>
          <img
            src="/images/posts/carroll.jpg"
            style={{ borderRadius: "50%", maxWidth: "56px", maxHeight: "56px" }}
          />
          <p>carroll</p>
        </PictureName>
        <ChatBubble>
          <p>
            Is there some way of definitively saying when a certain computer
            program is AI versus just a regular computer program? I mean in some
            sense isn't a pocket calculator optimized to add numbers together
            correctly?
          </p>
        </ChatBubble>
      </Speaker1>

      <Speaker2>
        <PictureName>
          <img
            src="/images/posts/russell.jpg"
            style={{ borderRadius: "50%", maxWidth: "56px", maxHeight: "56px" }}
          />
          <p>russell</p>
        </PictureName>
        <ChatBubble>
          <p>
            Yes, there really is a continuum between something as simple as a
            thermostat that switches the heat on when it gets cold and switches
            it off when it gets warm. All the way up to humans and even beyond.
            The continuum is mainly in the the nature of the task environment.
            How complicated is the world that the the entity has to deal with?
          </p>
        </ChatBubble>
      </Speaker2>
      <Speaker1>
        <PictureName>
          <img
            src="/images/posts/carroll.jpg"
            style={{ borderRadius: "50%", maxWidth: "56px", maxHeight: "56px" }}
          />
          <p>carroll</p>
        </PictureName>
        <ChatBubble>
          <p>
            I like the idea there's a continuum here. It's not like there is
            some sharp phase transition between dumb computer programs and
            artificially intelligent ones.
          </p>
        </ChatBubble>
      </Speaker1>
      <Speaker2>
        <PictureName>
          <img
            src="/images/posts/russell.jpg"
            style={{ borderRadius: "50%", maxWidth: "56px", maxHeight: "56px" }}
          />
          <p>russell</p>
        </PictureName>
        <ChatBubble>
          <p>
            That's right. In fact there's a Nostrum that's been put about a long
            time that as soon as it works it stops being artificial intelligence
            which is a little bit unfair because then, of course, that means
            that AI is a field of continual failure. But I think that's in some
            ways accurate.
          </p>
          <p>
            For example, every time you drive your car and you get directions
            there's an AI algorithm running in your cellphone that is computing
            the shortest paths and incorporating expected delays and so on. This
            is a very classical AI algorithm that was developed in the late '60s
            and early '70s and no one thinks of that as AI anymore.
          </p>
        </ChatBubble>
      </Speaker2>
    </div>
  );
}

const Speaker1 = styled.div`
  display: flex;
  grid-gap: 1.25rem;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const Speaker2 = styled.div`
  display: flex;
  grid-gap: 1.25rem;
  flex-direction: row-reverse;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const ChatBubble = styled.div`
  padding: 1.5rem 1.75rem;
  background-color: var(--color-cream);
  border-radius: 8px;
  p {
    font-size: 1.25rem;
    font-family: var(--font-sans);
    line-height: 2rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

const PictureName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 0.25rem;
  margin-top: 0.25rem;
  img {
    border-radius: 50%;
    max-width: 56px;
    max-height: 56px;
  }
  p {
    font-size: 0.85rem;
    font-family: var(--font-sans);
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: var(--color-gray-600);
    margin-bottom: 0;
  }
`;

export default AIConversation;
