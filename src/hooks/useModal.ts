import { useState } from 'react';

export interface IModalLogic {
  isOpen: boolean;
  onClose: () => void;
  img: string;
  onOpen: (img: string) => void;
}

interface IUseModalState {
  value: boolean;
  img: string;
}

export const useModal = (initialValue: boolean = false): IModalLogic => {
  const [isOpen, setIsOpen] = useState<IUseModalState>({ value: initialValue, img: '' });

  const onCloseHandle = (): void => {
    setIsOpen({ value: false, img: '' });
  };

  const onOpenHandle = (img: string): void => {
    console.log('onOpen');
    setIsOpen({ value: true, img });
  };

  return {
    isOpen: isOpen.value,
    onClose: onCloseHandle,
    img: isOpen.img,
    onOpen: onOpenHandle
  };
};
