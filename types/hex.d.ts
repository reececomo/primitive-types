export {};

declare global {
  /**
   * A 4-bit hexadecimal character.
   */
  type hex = hexcharlc | hexcharuc;

  /**
   * An 8-bit hexadecimal string.
   */
  type octet = hexoctet;

  /**
   * An 8-bit hexadecimal string.
   */
  type bytestr = hexoctet;
}

/**
 * A 4-bit hexadecimal character (lower case).
 */
type hexcharlc =
  | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  | "a" | "b" | "c" | "d" | "e" | "f"
;

/**
 * A 4-bit hexadecimal character (upper case).
 */
type hexcharuc =
  | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  | "A" | "B" | "C" | "D" | "E" | "F"
;

/**
 * An 8-bit hexadecimal string (lower case).
 */
type hexoctetlc = `${hexcharlc}${hexcharlc}`;

/**
 * An 8-bit hexadecimal string (upper case).
 */
type hexoctetuc = `${hexcharuc}${hexcharuc}`;

/**
 * An 8-bit hexadecimal string.
 */
type hexoctet = hexoctetlc | hexoctetuc;
