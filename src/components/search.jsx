import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, connectHighlight } from 'react-instantsearch-dom';

const searchClient = algoliasearch('FOEQEBJ71J', 'aee961b1c5236fe83d7698588507934e');


function Search() {
  
  return (
    <InstantSearch searchClient={searchClient} indexName="customers">
      <SearchBox 
      searchAsYouType={true}
      showLoadingIndicator={true} 
      autoFocus={true}
      defaultRefinement={"Guess"}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  )
}

const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit
  });

  return (
    <div>
      <h3>{hit.username}</h3>
      <img src={hit.avatar} alt={hit.username} />
      {parsedHit.map(
        part => part.isHighlighted ? <mark>{part.value}</mark> : part.value
      )}
    </div>
  );
});

const Hit = ({ hit }) => (
  <p>
    <CustomHighlight attribute="bio" hit={hit} />
  </p>
);


export default Search;