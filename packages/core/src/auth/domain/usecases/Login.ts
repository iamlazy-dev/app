import { AuthUseCase } from './Base';

export class AuthLoginUseCase extends AuthUseCase {
  execute(...credential: any[]) {
    return this.repository.login(...credential);
  }
}
