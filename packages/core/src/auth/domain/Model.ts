import { BaseModel, DataType } from '../../shared/domain';

export interface UserAttrs {
  id: DataType.String;
  name: DataType.String;
  email: DataType.String;
}

export class User extends BaseModel<UserAttrs> implements UserAttrs {
  id = '';
  name = '';
  email = '';

  public static create(attrs: Partial<UserAttrs> = {}) {
    return new User(attrs);
  }
}
