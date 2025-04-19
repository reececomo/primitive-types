import "../types/int32.d.ts";
import "../types/uint32.d.ts";

export {};

declare global {
  interface Array<T> {
    indexOf(searchElement: T, fromIndex?: number): int | -1;
  }
}
