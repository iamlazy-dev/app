import { DataError } from '../../../shared/domain/DataError';
import { Either } from '../../../shared/domain/Either';
import { Product } from '../../domain/Model';
import { ProductUseCase } from './Base';

export class GetProductsUseCase extends ProductUseCase {
  execute(columnName: keyof Product, query: string | number): Promise<Either<DataError, Product[]>> {
    return this.repository.find(columnName, query)
  }
}
