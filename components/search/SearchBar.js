import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export const SearchBar = () => (
  <InstantSearch searchClient={searchClient} indexName="garden-posts">
    <SearchBox />
  </InstantSearch>
);
