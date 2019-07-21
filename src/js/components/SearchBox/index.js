import React, {useState} from 'react'
import {Container, Input, Title} from './styled';

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container>
      <Title>Welcome To Smart Route</Title>
      <Input value={searchValue} onChange={({target: {value}}) => setSearchValue(value)} placeholder="Enter Destination" />
    </Container>
  )
}

export default SearchBox
