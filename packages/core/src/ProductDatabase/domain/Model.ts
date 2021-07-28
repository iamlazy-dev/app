import { ModelMeta } from '../../shared/domain/Model';

export interface ProductSpecs extends Record<string, string | number> {}

interface ProductAttrs {
  id: string;
  name: string;
  price: number;
  img: string[];
  tags: string[];
  desc: string;
  specs: ProductSpecs;
  _meta: ModelMeta;
}

export class Product implements ProductAttrs {
  id = '';
  name = '';
  price = 0;
  img: string[] = [];
  tags: string[] = [];
  desc = '';
  specs: ProductSpecs = {};
  _meta: ModelMeta = {};
  [propName: string]: unknown;

  private constructor(attrs: Partial<ProductAttrs> = {}) {
    Object.entries(attrs)
      .forEach(([k, v]) => this.setAttr(k, v));
  }

  private setAttr(attrName: string, value: ProductAttrs[keyof ProductAttrs] | unknown) {
    this[attrName] = value;
  }

  public static create(attrs: Partial<ProductAttrs> = {}) {
    return new Product(attrs);
  }
}
