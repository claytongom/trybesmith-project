export type ServiceResponseError = {
  status: 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND',
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'CREATED' | 'SUCCESSFUL',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
