import { Product } from '../domain/Model';

export interface CommonProductState {
  id: string;
  product: Product | null;
}

export interface LoadingProductState {
  kind: 'Loading';
}

export interface LoadedProductState {
  kind: 'Loaded';
  product: Product;
}

export interface ErrorProductState {
  kind: 'Error';
  errMsg: string;
}

export type ProductState = (LoadingProductState | LoadedProductState | ErrorProductState) &
  CommonProductState;

export const productInitialState: ProductState = {
  kind: 'Loading',
  id: '',
  product: null,
};
