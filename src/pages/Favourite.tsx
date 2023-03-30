import { useCallback, useMemo } from 'react';
import { useFavouriteContext } from '../context';
import { Card, Modal } from '../components';
import { useModal } from '../hooks';

export const Favourite = (): JSX.Element => {
  const { favourites, deleteFavourite } = useFavouriteContext();
  const { isOpen, onClose, img, onOpen } = useModal();

  const onCardClickHandle = useCallback(
    (url: string, id: string) => {
      onOpen(url);
      deleteFavourite(id);
    },
    [deleteFavourite, onOpen]
  );

  const favouriteRender = useMemo(() => {
    if (favourites.length) {
      return favourites.map(({ url, id }) => (
        <Card
          img={url}
          key={id}
          onClick={() => {
            onCardClickHandle(url, id);
          }}
        />
      ));
    }
    return <div>Empty ...</div>;
  }, [favourites, onCardClickHandle]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} img={img} />
      {favouriteRender}
    </>
  );
};
