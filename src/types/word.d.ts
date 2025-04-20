import "./char16.d.ts";
import "./int16.d.ts";
import "./uint16.d.ts";

export {};

declare global {
  /**
   * Any 2-byte integer or string (UCS-2 characters, code units in the UTF-16 character
   * encoding).
   */
  type word =
    | char16
    | uint16
    | int16
  ;

  /**
   * Any 2-byte unsigned integer or string (UCS-2 characters, code units in the UTF-16
   * character encoding).
   */
  type uword =
    | char16
    | uint16
  ;
}
