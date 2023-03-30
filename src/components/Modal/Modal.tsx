import { createPortal } from 'react-dom';
import { ModalClose, ModalConatiner, ModalImg } from './styles';
import { type IModalLogic } from '../../hooks';

const modalEl = document.getElementById('modal');

export const Modal = ({ img, isOpen, onClose }: Omit<IModalLogic, 'onOpen'>): JSX.Element => {
  console.log(isOpen);
  return createPortal(
    isOpen ? (
      <ModalConatiner>
        <ModalClose onClick={onClose}>X</ModalClose>
        <ModalImg src={img} alt="cat" />
      </ModalConatiner>
    ) : null,
    modalEl as HTMLElement
  );
};
