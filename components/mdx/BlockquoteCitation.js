import styled from "styled-components";

export default function BlockquoteCitation({ children, author, title, url }) {
  return (
    <figure>
      <Blockquote>
        <p>{children}</p>
        <figcaption>
          <Cite>
            <span>{author} – </span>
            <a href={url}>{title}</a>
          </Cite>
        </figcaption>
      </Blockquote>
    </figure>
  );
}

const Cite = styled.cite`
  font-size: var(--font-size-xs);
  color: var(--color-gray-600);
  font-family: var(--font-sans);
  font-weight: 400;
  letter-spacing: 0.01em;
  margin: 0 auto;
  text-align: center;
  font-style: normal;
  max-width: 300px;
`;

const Blockquote = styled.blockquote`
  & > p {
    margin: var(--space-m) auto var(--space-s) !important;
  }
  & ::after {
    content: "";
    display: block;
    margin: var(--space-s) auto 0 !important;
    width: 3rem;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
`;
