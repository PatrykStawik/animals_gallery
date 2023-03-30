// import { useNavigate } from 'react-router-dom';

import { useCallback, useMemo, useState } from 'react';
import { useGetCats } from '../api/catsApi';
import { Card, Modal } from '../components';
import { Pagination } from '../components/Pagination/Pagination';
import { GalleryContainer } from '../containers';
import { useModal } from '../hooks';
import { useFavouriteContext } from '../context';

export const Gallery = (): JSX.Element => {
  const [page, setPage] = useState(0);
  const { isLoading, data, isError } = useGetCats(page);
  const { isOpen, onClose, img, onOpen } = useModal();
  const { addNewFavourite } = useFavouriteContext();

  const onCardClick = useCallback(
    (url: string, id: string): void => {
      onOpen(url);
      addNewFavourite({ url, id });
    },
    [addNewFavourite, onOpen]
  );

  const dataRender = useMemo(() => {
    if (data) {
      return data.map(({ url, id }) => (
        <Card
          img={url}
          key={id}
          onClick={() => {
            onCardClick(url, id);
          }}
        />
      ));
    }
  }, [data, onCardClick]);

  const onNextPageChangeHandle = (): void => {
    setPage((i) => i + 1);
  };

  const onPrevPageChangeHandle = (): void => {
    if (page > 0) {
      setPage((i) => i - 1);
    }
  };

  if (isLoading) {
    // TODO make beauty spinner
    return <div>LOADING ...</div>;
  }

  if (isError) {
    // TODO make beauty error message :)
    return <div>UPS</div>;
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} img={img} />
      <GalleryContainer>{dataRender}</GalleryContainer>
      <Pagination
        pageNumber={page}
        onNextPageChangeHandle={onNextPageChangeHandle}
        onPrevPageChangeHandle={onPrevPageChangeHandle}
      />
    </>
  );
};
