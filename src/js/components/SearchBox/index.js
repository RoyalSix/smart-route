import React from 'react'
import {Container, Input, Title} from './styled';

function SearchBox({searchLocation, searchSuggestions = []}) {
  const bottom = searchSuggestions.length ? '22%' : '11%';
  const height = searchSuggestions.length ? '64%' : '100px';
  return (
    <Container height={height} bottom={bottom}>
      <Title>Welcome To Smart Route</Title>
      <Input onChange={({target: {value}}) => searchLocation(value)} placeholder="Enter Destination" />
    </Container>
  )
}

export default SearchBox
