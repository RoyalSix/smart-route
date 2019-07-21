import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
`;

export const Marker = styled.img`
  width: 13px;
  height: 13px;
  object-fit: contain;
  margin-top: 6px;
`;

export const SearchContainer = styled.div`
  background-color: white;
  display: flex;
  height: 80px;
  padding-left: 20px;
  align-items: center;
`;

export const AddressName = styled.input`
  font-family: Muli-Bold;
  font-size: calc(14px + .3vw);
  color: #7C838F;
  letter-spacing: 0;
  border-bottom: solid calc(1px + .1vw) #D8D8D8;
  padding-bottom: 3px;
  margin-bottom: 6.5px;
`;

export const Markers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const OriginDot = styled.img`
  width: 2.400vw;
  height: 2.400vw;
  max-height: 13px;
`;

export const Dot = styled.div`
  width: 3px;
  height: 3px;
  background-color: #4A90E2;
  border-radius: calc(3px / 2);
  margin-top: 3px;
  :first-child {
    margin-top: 0;
  }
  @media screen and (min-width: 400px) {
    width: 5px;
    height: 5px;
    background-color: #4A90E2;
    border-radius: calc(5px / 2);
    margin-top: 5px;
  }
`;

export const Addresses = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 38px;
`;

export const Options = styled.div`
  
`;

export const OptionDot = styled.div`
  margin-right: 9px;
  width: 7px;
  height: 7px;
  background-color: black;
  border-radius: calc(7px / 2);
  margin-top: 3px;
  :first-child {
    margin-top: 0;
  }
  @media screen and (min-width: 400px) {
    margin-right: 12px;
    width: 9px;
    height: 9px;
    border-radius: calc(9px / 2);
    margin-top: 4px;
  }
`;