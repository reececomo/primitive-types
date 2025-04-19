import "../types/int8.d.ts";
import "../types/int16.d.ts";
import "../types/int32.d.ts";
import "../types/uint8.d.ts";
import "../types/uint16.d.ts";
import "../types/uint32.d.ts";

export {};

declare global {
  interface Int8Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    [index: int]: int8;
    at(index: number): int8 | undefined;
    map(callbackfn: (value: int8, index: uint, array: this, thisArg?: any) => int8): Int8Array<ArrayBuffer>;
  }

  interface Int16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    [index: int]: int16;
    at(index: number): int16 | undefined;
    map(callbackfn: (value: int16, index: uint, array: this, thisArg?: any) => int16): Int16Array<ArrayBuffer>;
  }

  interface Int32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    [index: int]: int32;
    at(index: number): int32 | undefined;
    map(callbackfn: (value: int32, index: uint, array: this, thisArg?: any) => int32): Int32Array<ArrayBuffer>;
  }

  interface Uint8Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    [index: int]: uint8;
    at(index: number): uint8 | undefined;
    map(callbackfn: (value: uint8, index: uint, array: this, thisArg?: any) => uint8): Uint8Array<ArrayBuffer>;
  }

  interface Uint16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    [index: int]: uint16;
    at(index: number): uint16 | undefined;
    map(callbackfn: (value: uint16, index: uint, array: this, thisArg?: any) => uint16): Uint16Array<ArrayBuffer>;
  }

  interface Uint32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    [index: int]: uint32;
    at(index: number): uint32 | undefined;
    map(callbackfn: (value: uint32, index: uint, array: this, thisArg?: any) => uint32): Uint32Array<ArrayBuffer>;
  }

  interface DataView<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    getInt8(byteOffset: uint): int8;
    getInt16(byteOffset: uint, littleEndian?: boolean): int16;
    getInt32(byteOffset: uint, littleEndian?: boolean): int32;

    getUint8(byteOffset: uint): uint8;
    getUint16(byteOffset: uint, littleEndian?: boolean): uint16;
    getUint32(byteOffset: uint, littleEndian?: boolean): uint32;

    setInt8(byteOffset: uint, value: int8): void;
    setInt16(byteOffset: uint, value: int16, littleEndian?: boolean): void;
    setInt32(byteOffset: uint, value: int32, littleEndian?: boolean): void;

    setUint8(byteOffset: uint, value: uint8): void;
    setUint16(byteOffset: uint, value: uint16, littleEndian?: boolean): void;
    setUint32(byteOffset: uint, value: uint32, littleEndian?: boolean): void;
  }
}
