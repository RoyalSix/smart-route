import React, {useState} from 'react'
import {Container, Input} from './styled';

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container>
      <Input value={searchValue} onChange={({target: {value}}) => setSearchValue(value)} placeholder="Enter Destination" />
    </Container>
  )
}

export default SearchBar
