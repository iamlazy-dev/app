import { AuthRepository } from '../Repository';

export abstract class AuthUseCase {
  constructor(protected repository: AuthRepository) {}
}
