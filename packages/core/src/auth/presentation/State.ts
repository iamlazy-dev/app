import { User } from '../domain/Model';

export interface CommonAuthState {
  user: User | null;
}

export interface WaitAuthenticationAuthState {
  kind: 'Waiting';
  user: null;
}

export interface UnauthenticatedAuthState {
  kind: 'Unauthenticated';
  user: null;
}

export interface AuthenticatedAuthState {
  kind: 'Authenticated';
  user: User;
}

export interface ErrorAuthState {
  kind: 'Error';
  errMsg: string;
}

export type AuthState = CommonAuthState & (
  | WaitAuthenticationAuthState
  | UnauthenticatedAuthState
  | AuthenticatedAuthState
  | ErrorAuthState);

export const authInitialState: AuthState = {
  kind: 'Waiting',
  user: null,
};

