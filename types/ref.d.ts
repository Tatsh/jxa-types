interface RefType<T> {
  readonly type?: string;
  [index: number]: T;
}
