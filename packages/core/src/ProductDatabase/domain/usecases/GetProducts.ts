import { DataError } from '../../../shared/domain/DataError';
import { Either } from '../../../shared/domain/Either';
import { Product } from '../../domain/Model';
import { ProductRepository } from '../../domain/Repository';

export class GetProductsUseCase {
  constructor(private repository: ProductRepository) {}

  execute(columnName: keyof Product, query: string | number): Promise<Either<DataError, Product[]>> {
    return this.repository.find(columnName, query)
  }
}
