import styled from 'styled-components';

export const ModalConatiner = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: fill;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
