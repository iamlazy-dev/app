import { ProductRepository } from '../Repository';

export abstract class ProductUseCase {
  constructor(protected repository: ProductRepository) {}
}
