import "./char8.d.ts";
import "./char16.d.ts";

export {};

declare global {
  /**
   * A string value containing 0 to 2 bytes.
   */
  type str16 =
    | ""
    | char8
    | char16 | `${char8}${char8}`
  ;
}