export type IaddNewFavouriteFunction = (e: IFavouriteContextState) => void;
export type IdeleteFavouriteFunction = (e: string) => void;

export interface IFavouriteContextState {
  url: string;
  id: string;
}
