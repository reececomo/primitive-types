import "../types/uint16.d.ts";

export {};

declare global {
  interface String {
    charCodeAt(index: number): uint16;
  }
}
