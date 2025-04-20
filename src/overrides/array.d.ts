import "../types/uint32.d.ts";

export {};

declare global {
  interface Array<T> {
    push(...items: T[]): uint;
    unshift(...items: T[]): uint;
    indexOf(searchElement: T, fromIndex?: number): uint | -1;
    lastIndexOf(searchElement: T, fromIndex?: number): uint | -1;
    findIndex(
      predicate: (value: T, index: number, obj: T[]) => boolean,
      thisArg?: any
    ): uint | -1;
  }
}
