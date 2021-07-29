import { Ploc } from '../../shared/presentation';
import { AuthError } from '../domain/Error';
import { User } from '../domain/Model';
import { AuthRepository, hasAuthCheck } from '../domain/Repository';
import { AuthLoginUseCase } from '../domain/usecases/Login';
import { AuthLogoutUseCase } from '../domain/usecases/Logout';
import { AuthRegisterUseCase } from '../domain/usecases/Register';
import { authInitialState, AuthState } from './State';

export class AuthPloc extends Ploc<AuthState> {
  constructor(
    private repository: AuthRepository,
    private loginUseCase: AuthLoginUseCase,
    private logoutUseCase: AuthLogoutUseCase,
    private registerUseCase: AuthRegisterUseCase,
  ) {
    super(authInitialState);
    this.authenticationCheck()
  }

  async login(...credential: any[]) {
    const result = await this.loginUseCase.execute(...credential);

    result.fold(
      (err) => this.setState(this.handleError(err)),
      (user) => this.setState({ kind: 'Authenticated', user })
    );
  }

  async logout() {
    const result = await this.logoutUseCase.execute();

    result.fold(
      (err) => this.setState(this.handleError(err)),
      () => this.setState({ kind: 'Unauthenticated', user: null })
    );
  }

  async register(user: User) {
    const result = await this.registerUseCase.execute(user);

    result.fold(
      (err) => this.setState(this.handleError(err)),
      (user) => this.setState({ kind: 'Authenticated', user })
    );
  }

  private authenticationCheck() {
    if (hasAuthCheck(this.repository)) {
      this.repository.check()
        .then((result) => {
          result.fold(
            (err) => this.setState(this.handleError(err)),
            (user) => this.setState({ kind: 'Authenticated', user })
          );
        });
    }
  }

  private handleError(err: AuthError): AuthState {
    switch (err.kind) {
      case 'InvalidLoginCredential':
        return {
          ...authInitialState,
          kind: 'Error',
          errMsg: err.error.message
        };

      case 'UnexpectedError':
        return {
          ...authInitialState,
          kind: 'Error',
          errMsg: err.error.message
        };

      case 'SaveError':
        return {
          ...authInitialState,
          kind: 'Error',
          errMsg: err.error.message
        };
    }
  }
}
