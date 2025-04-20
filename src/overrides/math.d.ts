import "../types/int32.d.ts";
import "../types/uint32.d.ts";

export {};

declare global {
  interface Math {
    abs(x: int): uint;

    ceil(x: number): int;
    floor(x: number): int;
    round(x: number): int;
    trunc(x: number): int;

    max(...values: int[]): int;
    min(...values: int[]): int;
  }
}
