import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-dom";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import styled from "styled-components";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

const SearchBarAndResults = () => (
  <InstantSearch searchClient={searchClient} indexName="garden-posts">
    <Configure hitsPerPage={12} />
    <SearchWrapper>
      <SearchBar />
      <SearchResults />
    </SearchWrapper>
  </InstantSearch>
);

export default SearchBarAndResults;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
`;
