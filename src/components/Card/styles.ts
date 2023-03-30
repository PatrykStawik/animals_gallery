import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 45%;
  height: 300px;
  background-color: rgba(192, 192, 192, 0.1);
  padding: 10px;
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s all;

  &:hover {
    background-color: rgba(192, 192, 192, 0.8);
  }

  @media (max-width: 476px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const CardImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 15px;
  object-fit: fill;
`;
