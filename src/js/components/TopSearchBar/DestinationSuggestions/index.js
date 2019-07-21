import React from 'react';
import {Container, Suggestion} from './styled';

function DestinationSuggestions({destinationAddressSuggestions = [], selectDestinationAddress}) {
  return (
    <Container>
      {
        destinationAddressSuggestions.map(({address: {street, state, city}, locationId}, index) =>
          <Suggestion key={index} onClick={() => selectDestinationAddress(locationId)}>{street} {city} {state}</Suggestion>)
      }
    </Container>
  );
}

export default DestinationSuggestions;
