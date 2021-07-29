import { ProductFakerRepository } from './data/FakerRepository';
import { GetProductUseCase } from './domain/usecases/GetProduct';
import { GetProductsUseCase } from './domain/usecases/GetProducts';
import { ProductPloc } from './presentation/ProductPloc';
import { ProductsPloc } from './presentation/ProductsPloc';

export const ProductPlocFakerProvider = () => {
  const repository = new ProductFakerRepository();
  const getProductUseCase = new GetProductUseCase(repository);
  const ploc = new ProductPloc(getProductUseCase);

  return ploc;
}

export const ProductsPlocFakerProvider = () => {
  const repository = new ProductFakerRepository();
  const getProductsUseCase = new GetProductsUseCase(repository);
  const ploc = new ProductsPloc(getProductsUseCase);

  return ploc;
}
