import { connectStateResults, Highlight } from "react-instantsearch-dom";

function SearchResults({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
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
    </>
  );
}

export default connectStateResults(SearchResults);
