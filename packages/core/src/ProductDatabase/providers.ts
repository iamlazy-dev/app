import { ProductFakerRepository } from './data/FakerRepository';
import { GetProductsUseCase } from './domain/usecases/GetProducts';
import { ProductsPloc } from './presentation/Ploc';

export const ProductPlocFakerProvider = (): ProductsPloc => {
  const repository = new ProductFakerRepository();
  const getProductsUseCase = new GetProductsUseCase(repository);
  const ploc = new ProductsPloc(getProductsUseCase);

  return ploc;
}
