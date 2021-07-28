import { DataError } from '../../shared/domain/DataError';
import { Ploc } from '../../shared/presentation';
import { Product } from '../domain/Model';
import { GetProductsUseCase } from '../domain/usecases/GetProducts';
import { productsInitialState, ProductsState } from '../presentation/State';

export class ProductsPloc extends Ploc<ProductsState> {
  constructor(private getProductsUseCase: GetProductsUseCase) {
    super(productsInitialState)
  }

  async find(columnName: keyof Product, query: string | number) {
    const result = await this.getProductsUseCase.execute(columnName, query);

    result.fold(
      (err) => this.setState(this.handleError(query.toString(), err)),
      (products) => this.setState({
        kind: 'Loaded',
        products,
        query: query.toString(),
      })
    )
  }

  private handleError(query: string, error: DataError): ProductsState {
    switch (error.kind) {
      case 'UnexpectedError':
        return {
          ...productsInitialState,
          kind: 'Error',
          query,
          errMsg: 'There\'s error, please try again!'
        };
    }
  }
}
