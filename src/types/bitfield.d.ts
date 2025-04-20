declare global {
  /**
   * A bitfield representing all sign-safe bit values in the "ON" position.
   *
   * Excludes the sign-bit.
   */
  type bitfield = 0x7fffffff;

  /**
   * A bitfield representing all bit values in the "ON" position.
   *
   * Includes the sign-bit.
   */
  type bitfield_unsafe = -1;

  /**
   * A valid bit position in an 8-bit bitmask.
   */
  type bit8 =
    | 0b00000001
    | 0b00000010
    | 0b00000100
    | 0b00001000
    | 0b00010000
    | 0b00100000
    | 0b01000000
    | 0b10000000
  ;

  /**
   * A valid bit position in a 16-bit bitmask.
   */
  type bit16 =
    | bit8
    | 0b00000001_00000000
    | 0b00000010_00000000
    | 0b00000100_00000000
    | 0b00001000_00000000
    | 0b00010000_00000000
    | 0b00100000_00000000
    | 0b01000000_00000000
    | 0b10000000_00000000
  ;

  /**
   * A valid bit position in a 32-bit bitmask.
   *
   * Excludes the sign-bit.
   */
  type bit32 =
    | bit16
    | 0b00000001_00000000_00000000
    | 0b00000010_00000000_00000000
    | 0b00000100_00000000_00000000
    | 0b00001000_00000000_00000000
    | 0b00010000_00000000_00000000
    | 0b00100000_00000000_00000000
    | 0b01000000_00000000_00000000
    | 0b10000000_00000000_00000000
    | 0b00000001_00000000_00000000_00000000
    | 0b00000010_00000000_00000000_00000000
    | 0b00000100_00000000_00000000_00000000
    | 0b00001000_00000000_00000000_00000000
    | 0b00010000_00000000_00000000_00000000
    | 0b00100000_00000000_00000000_00000000
    | 0b01000000_00000000_00000000_00000000
  ;

  /**
   * A valid bit position in a 32-bit bitmask.
   *
   * Excludes the sign-bit.
   */
  type bit = bit32;

  /**
   * A valid bit position in a 32-bit bitmask.
   *
   * Includes the sign-bit.
   */
  type bit32_unsafe =
    | bit32
    | -0b10000000_00000000_00000000_00000000 // ⚠️ int32 sign bit
  ;
}

export {};
