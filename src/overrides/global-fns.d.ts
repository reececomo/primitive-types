import "../types/int32.d.ts";
import "../types/uint32.d.ts";

export {};

declare global {
  function parseInt(string: string, radix?: number): int;
}
