# 🔌 primitive-types

Expressive low-level TypeScript types for integers, UUIDs, characters, etc.

```ts
let age: uint8 = 22;

age = -1;
  // ^ ❌ tsc(2322): Type '-1' is not assignable to type 'uint8'.

let id: uuid;

id = "abc-123";
  // ^ ❌ tsc(2322): Type '"abc-123"' is not assignable to type 'uuid<v>'.
```

## Types

<table>
  <thead>
    <tr>
      <th></th>
      <th>type</th>
      <th>Description</th>
      <th>Method</th>
      <th>Base type</th>
    </tr>
  </thead>
  <tbody>
    <!-- Unsigned integers -->
    <tr>
      <td>✅</td>
      <td><b>uint8</b></td>
      <td>Any 8-bit unsigned integer (0 to 255).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>uint16</b></td>
      <td>Any 16-bit unsigned integer (0 to 65,535).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>❌</td>
      <td><b>uint32</b></td>
      <td>Any 32-bit unsigned integer (0 to 4,294,967,295).</td>
      <td><i>Not supported</i></td>
      <td>-</td>
    </tr>
    <!-- Integers -->
    <tr>
      <td>✅</td>
      <td><b>int8</b></td>
      <td>Any 8-bit signed integer (-128 to 127).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>int16</b></td>
      <td>Any 16-bit signed integer (-32,768 to 32,767).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>❌</td>
      <td><b>int32</b></td>
      <td>Any 32-bit signed integer (-2,147,483,648 to 2,147,483,647).</td>
      <td><i>Not supported</i></td>
      <td>-</td>
    </tr>
    <!-- Bitfields -->
    <tr>
      <td>✅</td>
      <td><b>bit8</b></td>
      <td>Any 8-bit bitmask value (e.g. 1, 2, 4, 8, …).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bit16</b></td>
      <td>Any 16-bit bitmask value (e.g. 1, 2, …, 256, 512, …).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bit32</b></td>
      <td>Any 32-bit bitmask value, excluding the int32 sign bit (e.g. 1, 2, …, 16777216, …).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bit32_unsafe</b></td>
      <td>Any 32-bit bitmask value, including the int32 sign bit (e.g. 1, 2, …, -2147483648).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bit</b></td>
      <td>Alias for <code>bit32</code>.</td>
      <td><i>Alias</i></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bitfield</b></td>
      <td>Alias for <code>0b01111111111111111111111111111111</code> (or <code>2147483647</code>).</td>
      <td><i>Alias</i></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bitfield_unsafe</b></td>
      <td>Alias for <code>0b11111111111111111111111111111111</code> (or <code>-1</code>).</td>
      <td><i>Alias</i></td>
      <td><code>number</code></td>
    </tr>
    <!-- Floats -->
    <tr>
      <td>✅</td>
      <td><b>double</b></td>
      <td>Any 64-bit double-precision floating-point number.</td>
      <td><i>Alias</i></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>float64</b></td>
      <td>Alias for <code>double</code>.</td>
      <td><i>Alias</i></td>
      <td><code>number</code></td>
    </tr>
    <!-- Chars -->
    <tr>
      <td>✅</td>
      <td><b>char8</b></td>
      <td>Any 1-byte character (e.g. ASCII).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>char16</b></td>
      <td>Any 2-byte character (e.g. UTF-16).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>string</code></td>
    </tr>
    <tr>
      <td>❌</td>
      <td><b>char32</b></td>
      <td>Any 4-byte character</td>
      <td><i>Not supported</i></td>
      <td>-</td>
    </tr>
    <!-- Strings -->
    <tr>
      <td>✅</td>
      <td><b>str8</b></td>
      <td>Any string containing up to 1 byte.</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
      <td><code>string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>str16</b></td>
      <td>Any string containing up to 2 bytes.</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
      <td><code>string</code></td>
    </tr>
    <tr>
      <td>❌</td>
      <td><b>str32</b></td>
      <td>Any string containing up to 4 bytes.</td>
      <td><i>Not supported</i></td>
      <td>-</td>
    </tr>
    <!-- UUID -->
    <tr>
      <td>✅</td>
      <td><b>uuid</b></td>
      <td>Any UUID (e.g. "0196382e-cc57-43ce-88c7-a3e427bc2713").<br/>Strict UUID versions may be enforced using generics (e.g. <code>uuid<4></code>).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
      <td><code>string</code></td>
    </tr>
    <!-- Hex -->
    <tr>
      <td>✅</td>
      <td><b>hex</b></td>
      <td>A single hexadecimal character (e.g. "0", "5", "a", "F").</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>octet</b></td>
      <td>A 1-byte hexadecimal string representing (e.g. "00", "c4", "F8").</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
      <td><code>string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bytestr</b></td>
      <td>Alias for <code>octet</code>.</td>
      <td><i>Alias</i></td>
      <td><code>string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>byte</b></td>
      <td>Any 1-byte integer or string (ASCII characters, code units in the UTF-8 character encoding).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
      <td><code>number | string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>ubyte</b></td>
      <td>Any 1-byte unsigned integer or string (ASCII characters, code units in the UTF-8 character encoding).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
      <td><code>number | string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>word</b></td>
      <td>Any 2-byte integer or string (UCS-2 characters, code units in the UTF-16 character encoding).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
      <td><code>number | string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>uword</b></td>
      <td>Any 2-byte unsigned integer or string (UCS-2 characters, code units in the UTF-16 character encoding).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
      <td><code>number | string</code></td>
    </tr>
  </tbody>
</table>

## Arithmetic operations

In JavaScript all numbers are stored as 64-bit floating-point numbers or a 32-bit
integers, and then represented as the dynamic `number` type.

The benefit of these opaque types is arithemetic is completely interchangable:

```ts
let a: uint8 = 10;
let b: int16 = -21_374;
let c: float64 = 4274.80;

let result = a * b / c;
// -50
```

And in-place arithmetic will naturally coerce variables to the `number` type too:

```ts
function isOver18(value: int8) {
    return value >= 18;
}

let age: int8 = 125;

isOver18(age)

age *= 2;
  // 'age' is coerced to 'number'

isOver18(age);
  // ^ ❌ tsc(2345): Argument of type 'number' is not assignable to parameter of type 'int8'.
```
