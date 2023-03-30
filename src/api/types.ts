export interface IApiResBody {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface QueryReturn<T> {
  data?: T;
  isLoading: boolean;
  error?: Error | null;
  isError?: boolean;
}
