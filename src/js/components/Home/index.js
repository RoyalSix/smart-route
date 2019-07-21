import React, {Component} from 'react'
import {Container} from './styled';
import Map from '../Map'

export class Home extends Component {
  render() {
    return (
      <Container>
        <Map />
      </Container>
    )
  }
}

export default Home
