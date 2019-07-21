import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const TripIcon = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 43px;
  :last-child {
    margin-right: 0;
  }
`;

export const TripTypesContainer = styled.div`
  display: flex;
  flex-direction: column
`;

export const TripOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  background-color: #F6F6FC;
  border-bottom: 1px solid #DEE0EC;
  align-items: center;
`;

export const TripTitle = styled.div`
  font-family: Muli-Bold;
  font-size: 16px;
  color: #2E3136;
  letter-spacing: 0;
`;

export const TripAmount = styled.div`
  font-family: Muli-Bold;
font-size: 16px;
color: #2E3136;
letter-spacing: 0;
`;

export const TripTime = styled.div`
  font-family: Muli-Bold;
font-size: 10px;
color: #8E95A0;
letter-spacing: 0;
line-height: 15px;
`;

export const TripType = styled.div`
  font-family: Muli-Bold;
font-size: 10px;
color: #8E95A0;
letter-spacing: 0;
line-height: 15px;
`;