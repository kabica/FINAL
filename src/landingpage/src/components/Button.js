import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: black;
  text-transform: uppercase;
  border: none;
  outline: none;
  margin-left:44%;
  margin-top: 12px;
  padding: 18px;
  border-radius: 17px;
  color: #fff;
  font-size: ${props => (props.primary ? '2rem' : '1rem')};
  text-align: center;
  box-shadow: 0 1px 20px 2px rgba(42,0,117);
  transition: background 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background: #d30913;
  }
`;