import { DataError } from '../../shared/domain/DataError';
import { Either } from '../../shared/domain/Either';
import { Product } from '../domain/Model';

export interface ProductRepository {
  get: (id: string) => Promise<Either<DataError, Product>>;
  find: (
    columnName: keyof Product,
    query: string | number
  ) => Promise<Either<DataError, Product[]>>;
  save: (product: Product) => Promise<Either<DataError, Boolean>>;
}
