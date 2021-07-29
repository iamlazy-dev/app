import { User } from '../Model';
import { AuthUseCase } from './Base';

export class AuthRegisterUseCase extends AuthUseCase {
  execute(user: User) {
    return this.repository.register(user);
  }
}
