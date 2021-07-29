export namespace DataType {
  export type String = string;
  export type Number = number;
  export type Bool = boolean;
  export type Empty = null;
  export type Timestamp = Date;
  export type File = globalThis.File | String;
  export type List<T = PossibleValue> = T[];
  export type Dict<T = PossibleValue> = Record<string, T>;
  export type Primitive = String
    | Number
    | Empty
    | Bool;
  export type PossibleValue = Primitive
    | Timestamp
    | File;
  export type PossibleType = PossibleValue
    | List
    | Dict;
}

export interface ModelMeta extends DataType.Dict {}

export abstract class BaseModel<T> {
  [propName: string]: DataType.PossibleType
    | ((...args: any[]) => unknown);

  protected constructor(attrs: Partial<T> = {}) {
    Object.entries(attrs)
      .forEach(([k, v]) => this.setAttr(k, v as DataType.PossibleType));
  }

  protected setAttr(attrName: string, value: DataType.PossibleType) {
    this[attrName] = value;
  }
}
