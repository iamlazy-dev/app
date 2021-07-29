import { AuthSimulatorRepository } from './data/SimulatorRepository'
import { AuthLoginUseCase } from './domain/usecases/Login';
import { AuthLogoutUseCase } from './domain/usecases/Logout';
import { AuthRegisterUseCase } from './domain/usecases/Register';
import { AuthPloc } from './presentation/Ploc';

export const AuthPlocSimulatorProvider = (authenticated = false) => {
  const repository = new AuthSimulatorRepository(authenticated);

  return new AuthPloc(
    repository,
    new AuthLoginUseCase(repository),
    new AuthLogoutUseCase(repository),
    new AuthRegisterUseCase(repository),
  );
}
