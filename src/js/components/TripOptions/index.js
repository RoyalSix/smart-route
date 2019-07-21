import React from 'react';
import {TripType, TripIcon, Container, TripOptionContainer, TripTitle, TripAmount, TripTime, TripTypesContainer} from './styled';
import {getIconFromType} from '../../utils';
const MOCK_TRIPS = [{route: [{type: 'uber'}, {type: 'scooter'}], price: '$25-30', time: '20 minutes'}, {route: [{type: 'uber'}, {type: 'scooter'}], price: '$40', time: '25 minutes'}, {route: [{type: 'train'}], price: '$30-31', time: '32 minutes'}];

function TripOptions() {
  return (
    <Container>
      {
        MOCK_TRIPS.map(({route, price, time}, index) =>
          <TripOptionContainer key={index}>
            <div>
              <TripTitle>Trip {index + 1}</TripTitle>
              <div style={{display: 'flex'}}>
                {route.map(({type}, index) =>
                  <TripTypesContainer key={index}>
                    <TripIcon src={getIconFromType(type)} />
                    <TripType>{type}</TripType>
                  </TripTypesContainer>)}
              </div>
            </div>
            <div>
              <TripAmount>{price}</TripAmount>
              <TripTime>{time}</TripTime>
            </div>
          </TripOptionContainer>
        )
      }
    </Container>
  );
}

export default TripOptions;
