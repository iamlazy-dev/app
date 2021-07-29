import { internet } from 'faker'
import { Either } from '../../shared/domain';
import { AuthError } from '../domain/Error';
import { User } from '../domain/Model';
import { AuthRepositoryHasAuthCheck } from '../domain/Repository';

const ALWAYS_TRUE_PASSWORD = 'pass123';

export class AuthSimulatorRepository implements AuthRepositoryHasAuthCheck {
  constructor(private authenticated = false) {}

  login(email: string, pass: string) {
    return new Promise<Either<AuthError, User>>((resolve, reject) => setTimeout(() => {
      if (pass === ALWAYS_TRUE_PASSWORD) {
        resolve(Either.right(User.create({
          name: internet.userName(),
          email,
        })));
      }

      reject(Either.left({ kind: 'InvalidLoginCredential', error: new Error('InvalidLoginCredential') } as AuthError))
    }, 1000));
  }

  logout() {
    return new Promise<Either<AuthError, void>>((resolve) => setTimeout(() => {
      resolve(Either.right(void(0)));
    }, 500));
  }

  register(user: User) {
    return new Promise<Either<AuthError, User>>((resolve) => setTimeout(() => {
      resolve(Either.right(user));
    }, 1000));
  };

  check() {
    return new Promise<Either<AuthError, User>>((resolve, reject) => setTimeout(() => {
      if (this.authenticated) {
        resolve(Either.right(User.create({
          name: internet.userName(),
          email: internet.exampleEmail(),
        })));
      }

      reject(Either.left({ kind: 'InvalidLoginCredential', error: new Error('InvalidLoginCredential') } as AuthError));
    }, 2000))
  }
}
