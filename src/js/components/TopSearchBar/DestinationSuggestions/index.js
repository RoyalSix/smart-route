import React from 'react';
import {Container, Suggestion} from './styled';

function DestinationSuggestions({searchSuggestions = [], selectAddress}) {
  return (
    <Container>
      {
        searchSuggestions.map(({address: {street, state, city}, locationId}, index) =>
          <Suggestion key={index} onClick={() => selectAddress(locationId)}>{street} {city} {state}</Suggestion>)
      }
    </Container>
  );
}

export default DestinationSuggestions;
