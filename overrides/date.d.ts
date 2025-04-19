import "../types/uint32.d.ts";

export {};

declare global {
  interface Date {
    getTime(): uint;
  }
}
