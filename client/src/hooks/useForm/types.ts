export type ErrorType<P> = { [Key in keyof P]?: string | null };

export interface UseForm<T extends object> {
  initialState: T;
  validate: (values: T) => ErrorType<T>;
  onSubmit: () => Promise<void>;
}
