import "../types/int32.d.ts";

export {};

declare global {
  interface NumberConstructor {
    parseInt(s: string, radix?: number): int;
    isInteger(n: unknown): n is int;
    isSafeInteger(n: unknown): n is int;
  }
}
