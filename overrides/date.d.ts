import "../types/uint32.d.ts";

export {};

declare global {
  interface DateConstructor {
    now(): uint;
  }
  interface Date {
    getTime(): uint;
    getSeconds(): uint8;
    getMinutes(): uint8;
    getHours(): uint8;
    getDate(): int8;
    getDay(): int8;
    getMonth(): int8;
    getFullYear(): int8;
  }
}
