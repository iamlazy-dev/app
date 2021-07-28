import { commerce, datatype, random } from 'faker/locale/id_ID'
import { DataError } from '../../shared/domain/DataError';
import { Either } from '../../shared/domain/Either';
import { Product } from '../domain/Model';
import { ProductRepository } from '../domain/Repository';

const seed: Product[] = Array.from(Array(25), () => Product.create({
  id: datatype.uuid(),
  name: commerce.productName(),
  desc: commerce.productDescription(),
  price: datatype.number({ min: 1000, max: 100_000 }),
  img: [
    random.image(), random.image(), random.image(),
  ],
  tags: [
    commerce.department(), commerce.productAdjective(), commerce.productAdjective()
  ],
  specs: {},
  _meta: {},
}))

export class ProductFakerRepository implements ProductRepository {
  async get(id: string): Promise<Either<DataError, Product>> {
    const result = await this.find('id', id);

    return result.fold(
      (err) => Either.left(err),
      ([product]) => Either.right(product)
    );
  }

  find(columnName: keyof Product, query: string | number): Promise<Either<DataError, Product[]>> {
    return new Promise((resolve, reject) => setTimeout(() => {
      try {
        const result = seed.filter((el) => JSON.stringify(el[columnName])
          .toLowerCase()
          .includes(query.toString()))

        resolve(Either.right(result));
      } catch (err) {
        reject(Either.left({ kind: 'UnexpectedError', err }))
      }
    }, 3000))
  }
}
