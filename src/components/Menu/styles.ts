import styled from 'styled-components';

export const MenuContainer = styled.header`
  height: 50px;
  background-color: red;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;

  * {
    margin: 0 10px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    transition: 0.4s all;

    &:hover {
      background-color: lightgray;
    }
  }
`;
