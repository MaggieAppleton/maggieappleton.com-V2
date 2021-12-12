import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

const SearchBarAndResults = () => (
  <InstantSearch searchClient={searchClient} indexName="garden-posts">
    <SearchBar />
    <SearchResults />
  </InstantSearch>
);

export default SearchBarAndResults;
