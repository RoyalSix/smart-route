import React from 'react';
import {Container, Input, Title} from './styled';
import Suggestions from './Suggestions';
var throttle = require('lodash.throttle');

function SearchBox({searchLocation, searchSuggestions = [], selectAddress}) {
  const bottom = searchSuggestions.length ? '22%' : '11%';
  const height = searchSuggestions.length ? '200px' : '100px';
  const throttledSearch = throttle((value) => searchLocation(value), 500);
  return (
    <Container height={height} bottom={bottom}>
      <Title>Welcome To Smart Route</Title>
      <Input onChange={({target: {value}}) => throttledSearch(value)} placeholder="Enter Destination" />
      {
        searchSuggestions && <Suggestions selectAddress={selectAddress} searchSuggestions={searchSuggestions} />
      }
    </Container>
  );
}

export default SearchBox;
