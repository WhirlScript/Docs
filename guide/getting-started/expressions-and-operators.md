---
prev:
    text: Function
    link: /guide/getting-started/function
next:
    text: Namespace
    link: /guide/getting-started/namespace
---

# Expressions and Operators

## Operators

WhirlScript's operators are quite similar to other programming languages (like Java, JS).

### Assignment Operators

An **assignment operator** assigns the value of its right operand to its left operand. The simplest assignment operator is equals (`=`), which assigns the value of the right operand to the left operand. So `x = y` assigns the value of y to x.

There are also some compound assignment operators, which are abbreviations for the operations listed in the table below:

| Name                      | Shorthand Operator | Meaning      |
| ------------------------- | ------------------ | ------------ |
| Assignment                | `x = y`            | `x = y`      |
| Addition assignment       | `x += y`           | `x = x + y`  |
| Subtraction assignment    | `x -= y`           | `x = x - y`  |
| Multiplication assignment | `x *= y`           | `x = x * y`  |
| Division assignment       | `x /= y`           | `x = x / y`  |
| Remainder assignment      | `x %= y`           | `x = x % y`  |
| Exponentiation assignment | `x **= y`          | `x = x ** y` |
| Left shift assignment     | `x <<= y`          | `x = x << y` |
| Right shift assignment    | `x >>= y`          | `x = x >> y` |
| Bitwise AND assignment    | `x &= y`           | `x = x & y`  |
| Bitwise XOR assignment    | `x ^= y`           | `x = x ^ y`  |
| Bitwise OR assignment     | `x \|= y`          | `x = x \| y` |

### Comparison Operators

**Comparison operators** compare their operands and return a logical value based on whether the comparison is true. Operands can be numbers, strings, logical, object values. String comparison is based on the standard dictionary order, using Unicode values. In most cases, if the two operands are not of the same type, JavaScript will try to convert them to the appropriate type for comparison. This behavior usually occurs when numbers are used as operands for comparison. Exceptions to type conversion are the use of `===` and `!==` operators, which perform strict equality and inequality comparisons. These operators do not convert the type of the operands before checking equality. The following table describes the comparison operators in the example code

```WhirlScript
var var1 = 3;
var var2 = 4;
```

| Operator                     | Description                                                                     | Example that returns true            |
| ---------------------------- | ------------------------------------------------------------------------------- | ------------------------------------ |
| Equal (`==`)                 | Returns true if both operands are equal.                                        | `3 == var1` `"3" == var1` `3 == '3'` |
| Not equal (`!=`)             | Returns true if the operands are not equal.                                     | `var1 != 4` `var2 != "3"`            |
| Greater than (`>`)           | Returns true if the left operand is greater than the right operand.             | `var2 > var1` `"12" > 2`             |
| Greater than or equal (`>=`) | Returns true if the left operand is greater than or equal to the right operand. | `var2 >= var1` `var1 >= 3`           |
| Less than (`<`)              | Returns true if the left operand is less than the right operand.                | `var1 < var2` `"2" < 12`             |
| Less than or equal (`<=`)    | Returns true if the left operand is less than or equal to the right operand.    | `var1 <= var2` `var2 <= 5`           |

### Arithmetic Operators

Arithmetic operators return a number. The standard arithmetic operators are addition, subtraction, multiplication, and division (`+` `-` `*` `/`).

WhirlScript does not provide a floating-point type. This means that you can't get decimals. The result will be rounded down. For example:

```WhirlScript
1 / 2; // 0
```

In addition to the standard arithmetic operators, WhirlScript also provides the arithmetic operators listed in the table below.

| Operator              | Description                                                                                                                                                                                                                                         | Example                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Remainder (`%`)       | Binary operator. Returns the remainder after division.                                                                                                                                                                                              | 12 % 5 returns 2.                                                                                 |
| Increment (`++`)      | Unary operator. Adds one to the operand. If it is placed before the operand (`++x`), it returns the value after addition; if it is placed after the operand (`x++`), it returns the original value of the operand and then adds one to the operand. | `var x=3;` `println(++x); //4` `println(x); //4` `var y=3;` `println(y++); //3` `println(y); //4` |
| Decrement (`--`)      | Unary operator. Subtracts one from the operand. The return value of the prefix and suffix usage is similar to the increment operator.                                                                                                               | `var x=3;` `println(--x); //2` `var y=3;` `println(y--); //3`                                     |
| Unary negative (`-`)  | Unary operator, returns the negative value of the operand.                                                                                                                                                                                          | `var x=3;` `println(-x); //-3`                                                                    |
| Unary positive (`+`)  | Unary operator, if the operand is not a number before, try to convert it to a number.                                                                                                                                                               | `println( +'3' ); // 3` `println( '3' ); // '3'` `println(+true); // 1`                           |
| Exponentiation (`**`) | Calculates the base (`base`) to the power of the exponent (`exponent`), represented as `base^exponent`.                                                                                                                                             | `2 ** 3` returns `8`. `10 ** -1` returns `0.1`.                                                   |

### Bitwise Operators

::: warning ⚠️ Warning
The syntax of bitwise operations is still under design
:::

Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard WhirlScript numerical values.

The following table summarizes the bitwise operators in WhirlScript.

| Operator                                          | Usage     | Description                                                                                                                                                                           |
| ------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bitwise AND                                       | `a & b`   | For each bit in the binary representation of the operands, the result in the same position is 1 if the corresponding bits of both operands is 1. Otherwise, the result is 0.          |
| Bitwise OR                                        | `a \| b`  | For each bit in the binary representation of the operands, the result in the same position is 1 if the corresponding bit of either or both operands is 1. Otherwise, the result is 0. |
| Bitwise XOR                                       | `a ^ b`   | For each bit in the binary representation of the operands, the result in the same position is 1 if the corresponding bits of the operands are different. Otherwise, the result is 0.  |
| Bitwise NOT                                       | `~ a`     | Inverts the bits of its operand.                                                                                                                                                      |
| Left shift                                        | `a << b`  | Shifts a in binary representation b bits to the left, shifting in 0s from the right.                                                                                                  |
| Sign-propagating right shift                      | `a >> b`  | Shifts a in binary representation b bits to the right, discarding bits shifted off.                                                                                                   |
| Zero-fill right shift (fills with 0s on the left) | `a >>> b` | Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in 0s from the left.                                                                 |

#### Bitwise Logical Operators

Conceptually, bitwise logical operators work as follows:

- The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones). If it exceeds 32 bits, the lower 32 bits are taken, as shown below:

```txt
  Before: 11100110111110100000000000000110000000000001
  After:              10100000000000000110000000000001
```

- Each bit in the first operand is paired with the corresponding bit in the second operand: the first bit is paired with the first bit, the second bit is paired with the second bit, and so on.
- The operator is applied to each pair of "bits", and the final operation result is composed of the operation results of each pair of "bits".

For example, the binary representation of the decimal number 9 is 1001, and the binary representation of the decimal number 15 is 1111. Therefore, when the bitwise operator is applied to these two values, the result is as follows:

| Expression | Result | Binary Description                                |
| ---------- | ------ | ------------------------------------------------- |
| `15 & 9`   | `9`    | `1111 & 1001 = 1001`                              |
| `15 \| 9`  | `15`   | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`   | `6`    | `1111 ^ 1001 = 0110`                              |
| `~15`      | `-16`  | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`       | `-10`  | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Note that the bitwise "not" operator inverts all 32 bits, and if the highest bit (the leftmost bit) is 1, it represents a negative number (2's complement representation).

#### Shift Operators

Shift operators take two operands: the first is the number to be shifted, and the second is the number specifying how many places to shift the first operand. The direction of the shift is controlled by the operator.

Shift operators convert their operands into 32-bit integers and return a value of the same type as the number to be shifted.

The list of shift operators is as follows.

| Operator           | Description                                                                                                                                                                                                                                                                 | Example                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `<<` (Left shift)  | Shifts the first operand to the left by the number of bits specified by the second operand. Bits shifted off to the left are discarded. Zero bits are shifted in from the right.                                                                                            | `9<<2` produces 36, because 1001 shifted 2 bits to the left becomes 100100, which is 36. |
| `>>` (Right shift) | Shifts the first operand to the right by the number of bits specified by the second operand. Bits shifted off to the right are discarded. If the first operand is positive, 0 is shifted in from the left. If the first operand is negative, 1 is shifted in from the left. | `9>>2` produces 2, because 1001 shifted 2 bits to the right becomes 10, which is 2.      |

### Logical Operators

Logical operators are commonly used between boolean (logical) values; when the operands are boolean values, the return value is also a boolean value. However, in reality, `&&` and `||` return a specific operand's value, so when it is used for non-boolean values, the return value may be non-boolean. The description of logical operators is as follows.

| Operator            | Example            | Description                                                                                                                                                                                                                              |
| ------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logical AND (`&&`)  | `expr1 && expr2`   | If `expr1` can be converted to false, then `expr1` is returned; otherwise, `expr2` is returned. Therefore, when `&&` is used for boolean values, it returns true when all operands are true; otherwise, it returns false.                |
| Logical OR (`\|\|`) | `expr1 \|\| expr2` | If `expr1` can be converted to true, then `expr1` is returned; otherwise, `expr2` is returned. Therefore, when `\|\|` is used for boolean values, it returns true when any operand is true; if all operands are false, it returns false. |
| Logical NOT (`!`)   | `!expr`            | If the operand can be converted to true, it returns false; otherwise, it returns true.                                                                                                                                                   |

Here are examples of the `&&` (logical "AND") operator.

```WhirlScript
var a1 = true && true; // t && t returns true
var a2 = true && false; // t && f returns false
var a3 = false && true; // f && t returns false
var a4 = false && 3 == 4; // f && f returns false
```

Here are examples of the `||` (logical "OR") operator.

```WhirlScript
var o1 = true || true; // t || t returns true
var o2 = false || true; // f || t returns true
var o3 = true || false; // t || f returns true
var o4 = false || 3 == 4; // f || f returns false
```

Here are examples of the `!` (logical "NOT") operator.

```js
var n1 = !true; // !t returns false
var n2 = !false; // !f returns true
```

#### Short-circuit Evaluation

As logical expressions are evaluated from left to right, they are tested for possible "short-circuits" using the following rules:

- `false` && _anything_ // short-circuit evaluation to false
- `true` || _anything_ // short-circuit evaluation to true

The rules of logic ensure that these evaluations are always correct. Please note that the `anything` part of the above expressions will not be evaluated, so doing this will not produce any side effects.

### String Operators

In addition to comparison operators, which can be used in string values, the concatenation operator (`+`) connects two string values together, returning another string, which is the combination of the two operand strings.

For example,

```WhirlScript
println("my " + "string"); // console logs the string "my string".
```

The shorthand operator `+=` can also be used to concatenate strings, for example:

```WhirlScript
var myString = "alpha";

myString += "bet"; // returns "alphabet"
```

### Conditional (Ternary) Operator

The **conditional operator** is the only operator in WhirlScript that requires three operands. The result of the operation is taken from one of two values based on a given condition. The syntax is:

```txt
condition ? value 1 : value 2
```

If the `condition` is true, the result takes `value 1`. Otherwise, it takes `value 2`. You can use the conditional operator anywhere where standard operators are allowed.

For example,

```WhirlScript
var status = age >= 18 ? "adult" : "minor";
```

When `age` is greater than or equal to 18, "adult" is assigned to `status`; otherwise, "minor" is assigned to `status`.

### Operator Precedence

Operator precedence is used to determine the calculation order of an expression. When you cannot determine the precedence, you can use parentheses to explicitly declare the operator's precedence.

The table below lists the precedence of descriptors, from highest to lowest.

| Type                 | Operator                     |
| -------------------- | ---------------------------- |
| Call                 | `.` `()`                     |
| Increment/Decrement  | `++` `--`                    |
| Not                  | `!`                          |
| Multiply/Divide      | `*` `/` `%`                  |
| Add/Subtract         | `+` `-`                      |
| Shift                | `<< >> >>>`                  |
| Size Comparison      | `<` `<=` `>` `>=`            |
| Equality Judgment    | `==` `!=`                    |
| Logical AND          | `&&`                         |
| Logical OR           | `\|\|`                       |
| Conditional Judgment | `?:`                         |
| Assignment           | `=` `+=` `-=` `*=` `/=` `%=` |

## Expressions

An expression is a collection of code that returns a value.

Every legal expression can be calculated into some value, but conceptually, there are two types of expressions: those with side effects (such as assignment) and those that simply calculate values.

The expression x=7 is an example of the first type. This expression uses the = operator to assign the value 7 to the variable x. The value of this expression itself is 7.

The code 3 + 4 is an example of the second type of expression. This expression uses the + operator to add 3 and 4 together but does not assign the result (7) to a variable.

WhirlScript has the following types of expressions:

- Arithmetic: results in a number, for example, 3.14159. (Usually uses [arithmetic operators](#arithmetic-operators))
- String: results in a string, for example, "Fred" or "234". (Usually uses [string operators](#string-operators))
- Logical value: results in true or false. (Often involves [logical operators](#logical-operators))
- Basic expressions: Basic keywords and general expressions in WhirlScript.
- Lvalue expressions: Assigned to lvalues.

### Grouping Operator

The grouping operator () controls the priority of calculations in the expression. For example, you can change the order of multiplication and division first and then addition and subtraction, and first calculate addition.

```WhirlScript
var a = 1;
var b = 2;
var c = 3;

// Default priority
a + b * c; // 7
// This is how it is calculated by default
a + b * c; // 7

// Now make addition priority over multiplication
(a + b) * c; // 9

// This is equivalent to
a * c + b * c; // 9
```

### Lvalue Expressions

Lvalues can be the target of assignment.
