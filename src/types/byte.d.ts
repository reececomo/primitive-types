export {};

declare global {
  /**
   * Any 1-byte integer or string (ASCII characters, code units in the UTF-8 character
   * encoding).
   */
  type byte =
    | char8
    | uint8
    | int8
  ;
  
  /**
   * Any 1-byte unsigned integer or string (ASCII characters, code units in the UTF-8
   * character encoding).
   */
  type ubyte =
    | char8
    | uint8
  ;
}
