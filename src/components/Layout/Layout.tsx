import { Outlet } from 'react-router-dom';
import { Menu } from '../Menu';
import { LayoutContainer } from './styles';

export const Layout = (): JSX.Element => {
  return (
    <>
      <Menu />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};
