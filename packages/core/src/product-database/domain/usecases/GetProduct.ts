import { DataError } from '../../../shared/domain/DataError';
import { Either } from '../../../shared/domain/Either';
import { Product } from '../Model';
import { ProductUseCase } from './Base';

export class GetProductUseCase extends ProductUseCase {
  execute(id: string): Promise<Either<DataError, Product>> {
    return this.repository.get(id)
  }
}
