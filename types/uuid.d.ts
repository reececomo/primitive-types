export {};

declare global {
  /**
   * A Universally Unique Identifier (UUID) string.
   */
  type uuid<V extends number | string = v> =
    | "00000000-0000-0000-0000-000000000000"
    | `${string}-${string}-${V}${string}-${"8" | "9" | "a" | "b" | "A" | "B"}${string}-${string}`
    | "ffffffff-ffff-ffff-ffff-ffffffffffff"
    | "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF"
  ;
}

type v = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
