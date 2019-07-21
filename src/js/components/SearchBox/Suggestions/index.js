import React from 'react'
import {Container, Suggestion} from './styled';

function Suggestions({searchSuggestions = []}) {
  return (
    <Container>
      {
        searchSuggestions.map(({address: {street, state, postalCode, country, city}}) =>
          <Suggestion>{street} {city} {state}</Suggestion>)
      }
    </Container>
  )
}

export default Suggestions
