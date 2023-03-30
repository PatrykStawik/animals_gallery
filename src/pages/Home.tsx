import { TextContainer } from '../containers';

export const Home = (): JSX.Element => {
  return (
    <>
      <TextContainer>
        In /gallery click on photo to make it bigger and add them to /favourites
      </TextContainer>
      <TextContainer>
        To remove photo from /favourites you must go to /favourites and click a photo which you want
        to delete
      </TextContainer>
    </>
  );
};
