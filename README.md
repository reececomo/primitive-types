# 🔌 primitive-types

Expressive low-level TypeScript types for integers, UUIDs, characters, etc.

```ts
let age: uint = 22;
age = -1;
  // ^ ❌ tsc(2322): Type '-1' is not assignable to type 'uint'.

let id: uuid = "01964bbf-a8b9-7710-9cea-3d6691b15689";
id = "abc-123";
  // ^ ❌ tsc(2322): Type '"abc-123"' is not assignable to type 'uuid<v>'.
```

> [!TIP]
> Includes overloads and type-narrowing for built-ins like Math, Array, Date,
> Number, TypedArrays, and more.

## 💿 Install

Add package:

```sh
npm install primitive-types --save-dev
```

Enable types in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": [
      "primitive-types"
    ]
  }
}
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
      <td>✅*</td>
      <td><b>uint32</b> or <b>uint</b></td>
      <td>Any 32-bit unsigned integer (0 to 4,294,967,295).</td>
      <td>
        <a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a>
        <br/>
        <i>⚠️ *partial constants support beyond `uint16` range.</i>
      </td>
      <td><code>number</code></td>
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
      <td>✅*</td>
      <td><b>int32</b> or <b>int</b></td>
      <td>Any 32-bit signed integer (-2,147,483,648 to 2,147,483,647).</td>
      <td>
        <a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a>
        <br/>
        <i>⚠️ *partial constants support beyond `int16` range.</i>
      </td>
      <td><code>number</code></td>
    </tr>
    <!-- Bitfields -->
    <tr>
      <td>✅</td>
      <td><b>bit8</b></td>
      <td>Any individual 8-bit bitmask value (e.g. 1, 2, 4, 8, …).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bit16</b></td>
      <td>Any individual 16-bit bitmask value (e.g. 1, 2, …, 256, 512, …).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bit32</b> or <b>bit</b></td>
      <td>Any individual 32-bit bitmask value, excluding the int32 sign bit (e.g. 1, 2, …, 16777216, …).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bit32_unsafe</b></td>
      <td>Any individual 32-bit bitmask value, including the int32 sign bit (e.g. 1, 2, …, -2147483648).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bitfield</b></td>
      <td>Alias for <code>0b01111111111111111111111111111111</code> (or <code>2147483647</code>).</td>
      <td><i>Alias</i></td>
      <td><code>2147483647</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>bitfield_unsafe</b></td>
      <td>Alias for <code>0b11111111111111111111111111111111</code> (or <code>-1</code>).</td>
      <td><i>Alias</i></td>
      <td><code>-1</code></td>
    </tr>
    <!-- Floats -->
    <tr>
      <td>✅</td>
      <td><b>float32</b> or <b>float</b></td>
      <td>Any 32-bit single-precision floating-point number.</td>
      <td><i>Alias</i></td>
      <td><code>number</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>float64</b> or <b>double</b></td>
      <td>Alias for <code>double</code>.</td>
      <td><i>Alias</i></td>
      <td><code>number</code></td>
    </tr>
    <!-- Chars -->
    <tr>
      <td>✅</td>
      <td><b>char8</b></td>
      <td>Any ASCII range character (e.g. <code>'e'</code>, <code>'3'</code>).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>char16</b></td>
      <td>Any UTF-16 range character (e.g. <code>'ѐ'</code>, <code>'϶'</code>).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>string</code></td>
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
    <!-- UUID -->
    <tr>
      <td>✅</td>
      <td><b>uuid</b></td>
      <td>Any UUID (e.g. <code>"0196382e-cc57-43ce-88c7-a3e427bc2713"</code>).<br/>Strict UUID versions may be enforced using generics (e.g. <code>uuid<4></code>).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
      <td><code>string</code></td>
    </tr>
    <!-- Hex -->
    <tr>
      <td>✅</td>
      <td><b>hex</b></td>
      <td>A single hexadecimal character (e.g. <code>'0'</code>, <code>'5'</code>, <code>'a'</code>, <code>'A'</code>).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types">Union type</a></td>
      <td><code>string</code></td>
    </tr>
    <tr>
      <td>✅</td>
      <td><b>octet</b> or <b>bytestr</b></td>
      <td>A 1-byte hexadecimal string representation (e.g. <code>"00"</code>, <code>"cb"</code>, <code>"F7"</code>).</td>
      <td><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html">Template literal type</a></td>
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
