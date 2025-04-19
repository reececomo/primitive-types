import "../types/int32.d.ts";

export {};

declare global {
  interface NumberConstructor {
    parseInt(s: string, radix?: number): int;
    isInteger(n: number): n is int;
    isSafeInteger(n: number): n is int;
  }
}
