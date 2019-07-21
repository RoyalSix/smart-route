import React from 'react'
import {Container, Suggestion} from './styled';

function Suggestions({searchSuggestions = [], selectAddress}) {
  return (
    <Container>
      {
        searchSuggestions.map(({address: {street, state, city}, locationId}) =>
          <Suggestion onClick={() => selectAddress(locationId)}>{street} {city} {state}</Suggestion>)
      }
    </Container>
  )
}

export default Suggestions
