import { DataError } from '../../shared/domain';

export interface InvalidLoginCredential {
  kind: 'InvalidLoginCredential';
  error: Error;
}

export type AuthError = DataError | InvalidLoginCredential;
