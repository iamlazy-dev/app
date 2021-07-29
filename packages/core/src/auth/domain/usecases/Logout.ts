import { AuthUseCase } from './Base';

export class AuthLogoutUseCase extends AuthUseCase {
  execute() {
    return this.repository.logout();
  }
}
