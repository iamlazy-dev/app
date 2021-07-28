import { Product } from '../domain/Model';

export interface CommonProductsState {
  query: string;
  products: Product[];
}

export interface LoadingProductsState {
  kind: 'Loading';
}

export interface LoadedProductsState {
  kind: 'Loaded';
  products: Product[];
}

export interface ErrorProductsState {
  kind: 'Error';
  errMsg: string;
}

export type ProductsState = (LoadingProductsState | LoadedProductsState | ErrorProductsState) &
  CommonProductsState;

export const productsInitialState: ProductsState = {
  kind: 'Loading',
  query: '',
  products: [],
};
