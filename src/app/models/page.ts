export interface Page<T> {
  count: number;
  results: T[];
  previous: string;
  next: string;
}
