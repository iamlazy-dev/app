import { DataError } from '../../shared/domain/DataError';
import { Ploc } from '../../shared/presentation';
import { GetProductUseCase } from '../domain/usecases/GetProduct';
import { productInitialState, ProductState } from './ProductState';

export class ProductPloc extends Ploc<ProductState> {
  constructor(private getProductUseCase: GetProductUseCase) {
    super(productInitialState);
  }

  async find(id: string) {
    const result = await this.getProductUseCase.execute(id);

    result.fold(
      (err) => this.setState(this.handleError(id, err)),
      (product) => this.setState({
        kind: 'Loaded',
        product,
        id,
      })
    );
  }

  private handleError(id: string, error: DataError): ProductState {
    switch (error.kind) {
      case 'UnexpectedError':
        return {
          ...productInitialState,
          kind: 'Error',
          id,
          errMsg: 'There\'s something error, please try again!'
        };
      case 'SaveError':
        return {
          ...productInitialState,
          kind: 'Error',
          id,
          errMsg: 'There\'s something error on save, please try again!'
        };
    }
  }
}
