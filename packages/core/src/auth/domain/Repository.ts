import { Either } from '../../shared/domain';
import { AuthError } from './Error';
import { User } from './Model';

export interface AuthRepository {
  login: (...credential: any[]) => Promise<Either<AuthError, User>>;
  logout: () => Promise<Either<AuthError, void>>;
  register: (user: User) => Promise<Either<AuthError, User>>;
}

export interface AuthRepositoryHasAuthCheck extends AuthRepository {
  check: () => Promise<Either<AuthError, User>>;
}

export const hasAuthCheck = (repo: any): repo is (unknown & AuthRepositoryHasAuthCheck) => (
  typeof repo.check === 'function'
);

// export interface AuthRepositoryHasAuthCheckUsingEvent {
//   onCheck: () => void;
// }
