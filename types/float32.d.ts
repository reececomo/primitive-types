import "./float64.d.ts";

export {};

declare global {
  /**
   * A 32-bit floating-point number.
   */
  type f32 = float32;

  /**
   * A 32-bit floating-point number.
   */
  type float = float32;

  /**
   * A 32-bit floating-point number.
   */
  type float32 =
    float64 // same effective range (loss of precision)
  ;
}
