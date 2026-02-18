export * from './user';
export * from './internship';

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}