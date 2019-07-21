import styled from 'styled-components';

export const Container = styled.div`
  height: ${props => props.height};
  width: 343px;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  bottom: ${props => props.bottom};
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 5px;
  transition: height 0.2s ease-in-out 0s, width 0.2s ease-in-out 0s; 
`;

export const Input = styled.input`
  font-family: Muli-Bold;
  font-size: 14px;
  color: #7C838F;
  letter-spacing: 0;
  align-self: flex-start;
  margin-left: 13px;
  width: 90%;
  padding-bottom: 16.5px;
  border-bottom: 1px solid #D8D8D8;
  margin-top: 15px;
`;

export const Title = styled.div`
  font-family: Muli-Bold;
  font-size: 16px;
  color: #2E3136;
  letter-spacing: 0;
  margin-top: 7px;
`;