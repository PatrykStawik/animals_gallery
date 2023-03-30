import { Link } from 'react-router-dom';
import { MenuContainer } from './styles';

export const Menu = (): JSX.Element => {
  return (
    <MenuContainer>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="favourite">Favourite</Link>
    </MenuContainer>
  );
};
