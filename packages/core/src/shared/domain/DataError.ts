export interface UnexpectedError {
  kind: 'UnexpectedError';
  error: Error;
}

export interface SaveError {
  kind: 'SaveError';
  error: Error;
}

export type DataError = UnexpectedError | SaveError;
