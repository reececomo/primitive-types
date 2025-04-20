import "../types/uint16.d.ts";
import "../types/uint32.d.ts";

export {};

declare global {
  interface String {
    charCodeAt(index: number): uint16;
    codePointAt(pos: number): uint32 | undefined;
    indexOf(searchString: string, position?: number): uint | -1;
    lastIndexOf(searchString: string, position?: number): uint | -1;
    search(regexp: string | RegExp): uint | -1;
  }
}
