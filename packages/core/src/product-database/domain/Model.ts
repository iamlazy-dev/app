import { DataType, ModelMeta } from '../../shared/domain/Model';

export interface ProductSpecs extends DataType.Dict {}

interface ProductAttrs {
  id: DataType.String;
  name: DataType.String;
  price: DataType.Number;
  img: DataType.List<DataType.File>;
  tags: DataType.List<DataType.String>;
  desc: DataType.String;
  specs: ProductSpecs;
  _meta: ModelMeta;
}

export class Product implements ProductAttrs {
  id = '';
  name = '';
  price = 0;
  img: DataType.List<DataType.File> = [];
  tags: DataType.List<DataType.String> = [];
  desc = '';
  specs: ProductSpecs = {};
  _meta: ModelMeta = {};
  [propName: string]: DataType.PossibleValue
    | DataType.Dict
    | DataType.List
    | ((...args: any[]) => unknown);

  private constructor(attrs: Partial<ProductAttrs> = {}) {
    Object.entries(attrs)
      .forEach(([k, v]) => this.setAttr(k, v));
  }

  private setAttr(attrName: string, value: DataType.PossibleType) {
    this[attrName] = value;
  }

  public static create(attrs: Partial<ProductAttrs> = {}) {
    return new Product(attrs);
  }
}
