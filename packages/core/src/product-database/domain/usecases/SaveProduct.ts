import { Product } from '../Model';
import { ProductUseCase } from './Base';

export class SaveProduct extends ProductUseCase {
  public execute(product: Product) {
    return this.repository.save(product);
  }
}
