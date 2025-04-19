import "../types/int8.d.ts";
import "../types/int16.d.ts";
import "../types/int32.d.ts";
import "../types/uint8.d.ts";
import "../types/uint16.d.ts";
import "../types/uint32.d.ts";

export {};

declare global {
  interface Int8Array {
    [index: number]: int8;
    at(index: number): int8 | undefined;
    map(callbackfn: (value: int8, index: number, array: Int8Array) => int8): Int8Array;
  }

  interface Int16Array {
    [index: number]: int16;
    at(index: number): int16 | undefined;
    map(callbackfn: (value: int16, index: number, array: Int16Array) => int16): Int16Array;
  }

  interface Int32Array {
    [index: number]: int32;
    at(index: number): int32 | undefined;
    map(callbackfn: (value: int32, index: number, array: Int32Array) => int32): Int32Array;
  }

  interface Uint8Array {
    [index: number]: uint8;
    at(index: number): uint8 | undefined;
    map(callbackfn: (value: uint8, index: number, array: Uint8Array) => uint8): Uint8Array;
  }

  interface Uint16Array {
    [index: number]: uint16;
    at(index: number): uint16 | undefined;
    map(callbackfn: (value: uint16, index: number, array: Uint16Array) => uint16): Uint16Array;
  }

  interface Uint32Array {
    [index: number]: uint32;
    at(index: number): uint32 | undefined;
    map(callbackfn: (value: uint32, index: number, array: Uint32Array) => uint32): Uint32Array;
  }

  interface DataView {
    getInt8(byteOffset: number): int8;
    getInt16(byteOffset: number, littleEndian?: boolean): int16;
    getInt32(byteOffset: number, littleEndian?: boolean): int32;

    getUint8(byteOffset: number): uint8;
    getUint16(byteOffset: number, littleEndian?: boolean): uint16;
    getUint32(byteOffset: number, littleEndian?: boolean): uint32;

    setInt8(byteOffset: number, value: int8): void;
    setInt16(byteOffset: number, value: int16, littleEndian?: boolean): void;
    setInt32(byteOffset: number, value: int32, littleEndian?: boolean): void;

    setUint8(byteOffset: number, value: uint8): void;
    setUint16(byteOffset: number, value: uint16, littleEndian?: boolean): void;
    setUint32(byteOffset: number, value: uint32, littleEndian?: boolean): void;
  }
}
