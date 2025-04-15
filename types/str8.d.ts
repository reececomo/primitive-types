export {};

declare global {
  /**
   * A string value containing 0 to 1 bytes.
   */
  type str8 =
    | ""
    | char8
  ;
}
