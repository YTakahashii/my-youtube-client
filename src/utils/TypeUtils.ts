export type PromiseGenericType<T> = T extends Promise<infer U> ? U : T;
