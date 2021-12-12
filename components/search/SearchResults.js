import { connectStateResults, Highlight } from "react-instantsearch-dom";
import styled from "styled-components";

function SearchResults({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <HitsContainer>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Sorry, I haven't written anything on "{searchState.query}"</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <div>
          {searchResults.hits.map((hit) => (
            <>
              <a href={hit.slug} key={hit.objectID}>
                <p>
                  <Highlight hit={hit} attribute="title" tagName="mark" />
                </p>
              </a>
              <p>
                <Highlight hit={hit} attribute="description" tagName="mark" />
              </p>
            </>
          ))}
        </div>
      )}
    </HitsContainer>
  );
}

export default connectStateResults(SearchResults);

const HitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 450px;
  max-width: 450px;
  overflow: scroll;
  position: absolute;
  top: 4rem;
  left: 0;
  background-color: var(--color-light-cream);
`;
