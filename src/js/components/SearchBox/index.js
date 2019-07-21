import React from 'react'
import {Container, Input, Title} from './styled';
import Suggestions from './Suggestions';

function SearchBox({searchLocation, searchSuggestions = [], selectAddress}) {
  const bottom = searchSuggestions.length ? '22%' : '11%';
  const height = searchSuggestions.length ? '64%' : '100px';
  return (
    <Container height={height} bottom={bottom}>
      <Title>Welcome To Smart Route</Title>
      <Input onChange={({target: {value}}) => searchLocation(value)} placeholder="Enter Destination" />
      {
        searchSuggestions && <Suggestions selectAddress={selectAddress} searchSuggestions={searchSuggestions} />
      }
    </Container>
  )
}

export default SearchBox
