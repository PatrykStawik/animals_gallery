import { type FC, type PropsWithChildren, createContext, useState, useContext } from 'react';
import {
  type IdeleteFavouriteFunction,
  type IFavouriteContextState,
  type IaddNewFavouriteFunction
} from './types';

const defaults = {
  favourites: [] as IFavouriteContextState[],
  addNewFavourite: ((_e) => {}) as IaddNewFavouriteFunction,
  deleteFavourite: ((_e) => {}) as IdeleteFavouriteFunction
};

export const FavouriteContext = createContext(defaults);

const FavouriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favourites, setFavourites] = useState<IFavouriteContextState[]>([]);

  const addNewFavourite = (value: IFavouriteContextState): void => {
    setFavourites((old) => [...old, value]);
  };

  const deleteFavourite = (id: string): void => {
    setFavourites(favourites.filter((i) => i.id !== id));
  };

  const contextData = {
    favourites,
    addNewFavourite,
    deleteFavourite
  };

  return <FavouriteContext.Provider value={contextData}>{children}</FavouriteContext.Provider>;
};

const useFavouriteContext = (): typeof defaults => {
  const context = useContext(FavouriteContext);

  if (context === undefined) throw new Error('AuthProvider has no context!');
  return context;
};

export { useFavouriteContext, FavouriteProvider };
