import React from 'react';
import {Marker, OptionDot, Options, Dot, OriginDot, Container, AddressName, Addresses, Markers} from './styled';
import OriginDotSVG from './green_dot.svg';
import MarkerImage from './marker.svg';
import DestinationSuggestions from './DestinationSuggestions';
var throttle = require('lodash.throttle');

function TopSearchBar({originAddress, searchDestinationAddress, destinationAddressSuggestions, selectDestinationAddress}) {
  const throttledSearch = throttle((value) => searchDestinationAddress(value), 500);
  return (
    <div>
      <Container>
        <Markers>
          <OriginDot src={OriginDotSVG} />
          {new Array(3).fill(0).map((_, index) => <Dot key={index} />)}
          <Marker src={MarkerImage} />
        </Markers>
        <Addresses>
          <AddressName value={originAddress.label} />
          <AddressName onChange={({target: {value}}) => throttledSearch(value)} />
        </Addresses>
        <Options>
          {new Array(3).fill(0).map((_, index) => <OptionDot key={index} />)}
        </Options>
      </Container>
      {
        destinationAddressSuggestions.length ? <DestinationSuggestions selectDestinationAddress={selectDestinationAddress} destinationAddressSuggestions={destinationAddressSuggestions} /> : null
      }
    </div>
  );
}

export default TopSearchBar;
