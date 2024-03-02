---
prev:
    text: Template String
    link: /guide/getting-started/template-string
next:
    text: Namespace
    link: /en/guide/getting-started/namespace
---

# Struct

Struct(structure) are another user-defined data type available in WhirlScript, allowing you to store different types of data items.

Data members in a struct can be basic data types (`boolean`, `int`, and `string`), or other struct types.

## Declaration

Struct are declared using the `struct` keyword:

```WhirlScript
struct MyStruct {
    number: int,
    used: boolean
}
```

Struct do not allow self-nesting, including direct and indirect nesting. For example, the following definitions are incorrect.

::: code-group

```WhirlScript [Direct nesting]
struct MyStruct {
    id: int,
    next: MyStruct // [!code error]
}
```

```WhirlScript [Indirect nesting]
struct MyStruct1 {
    id: int,
    next: MyStruct2
}

struct MyStruct2 {
    id: int,
    next: MyStruct1 // [!code error]
}
```
:::

## Assignment

Use braces to represent a structure:

```WhirlScript
var v = {
     id: 2,
     used: false
};
```

## transfer

Use `.` to call the quantity in the structure:

```WhirlScript
println(v.id); // 2
```