---
prev:
    text: Control Flow
    link: /guide/getting-started/control-flow
next:
    text: Expressions and Operators
    link: /guide/getting-started/expressions-and-operators
---

# Functions

WhirlScript has two types of functions: regular functions and macro functions.

## Defining Functions

A **function definition** (also known as a **function declaration**, or **function statement**) consists of the `function` keyword, followed by:

- The function name.
- The function parameter list, enclosed in parentheses and separated by commas.
- The function return type.
- The WhirlScript statements that define the function, enclosed in curly braces, `{ /* … */ }`.

The parameters in the parameter list need to define the type simultaneously.

For example, the following code defines a function named `add`:

```whirlscript
function add(x:int, y:int):int {
    return x + y;
}
```

The function `add` takes two parameters named `x` and `y`, both of which are of type `int`, and the function return type is `int`. This function has only one statement, which indicates that the function will return the sum of the parameters (i.e., `x` and `y`). The `return` statement of the function specifies the return value of the function: `x + y`.

Parameters are essentially **passed by value** to the function - therefore, even if the code in the function body assigns a new value to the parameter passed to the function, **this change will not be reflected in the global or the code that calls this function**.

For functions without a return value, you can either not declare a return type or declare it as `void`.

### Parameter Qualifiers

For each item in the parameter list, the declaration consists of the following parts:

- Constant variable qualifier, using the `var` and `const` keywords, can be omitted.
- Runtime, compile-time variable qualifier, using the `runtime` and `macro` keywords, can be omitted.
- Name.
- Parameter type.

::: warning ⚠️ Warning
Literal values are also compile-time constants.
:::

For example, this function accepts a macro variable:

```whirlscript
function f(var macro x:int):int {
    // ...
}
```

## Calling Functions

The defined function will not execute it automatically. Defining a function only gives the function a name and specifies what should be done when the function is called.

**Calling** a function will truly perform these actions with the given parameters. For example, once you define the function `add`, you can call it like this:

```whirlscript
add(1, 2);
```

The above statement calls the function with the parameters `1` and `2`. The function executes its statements and returns the value `3`.

Functions can call themselves. For example, the following function calculates the factorial using recursion:

```whirlscript
function factorial(n:int):int {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```

## Nested Functions and Closures

Function definitions can appear anywhere in the code **except for iterations**.

::: details Why?
WhirlScript does not support dynamically creating functions, so all function calls will be determined at compile time.
:::

::: tip
It should be noted that even if a function is declared inside another function, after compilation, this function will still be brought to the function declaration area. The only difference is the scope.
:::

In internal functions, you can call all variables that can be accessed at the definition location. For example:

```whirlscript
function outer() {
    var x:int = 1;
    function inner(){
        x++;
    }
    inner();
    println(x); //Outputs 2.
}
```

## Default Parameters

In WhirlScript, you can provide default parameters for functions:

```whirlscript
function multiple(a, b = 1):int {
    return a * b;
}

multiple(5); //Returns 5.
```

## Macro Functions

Macro functions are part of WhirlScript's preprocessing functionality, and they include many features that regular functions do not have:

### Declaration

The declaration of a macro function is similar to a regular function, you just need to add keyword `macro`.

```WhirlScript
macro function fn(){
  //...
}
```

### Inline

Macro functions are inline. This means that after compilation, macro functions will be directly inserted into the location where they are called.

Based on this feature, when writing a library, we recommend using macro functions as much as possible. In cases where the function segment is short and the number of calls is small, it can reduce the compilation volume. For more low-level abstractions, we also recommend using macro functions.

### Pass by Reference

The passing of values in macro functions is by reference. This means that you can modify the passed value in the macro function.

For example, the following function will increment the passed value by `1`:

```whirlscript
macro function succ(var x: int) {
    x++;
}

var x = 1;
succ(x);
println(x); //Outputs 2.
```

### Recursive Limitations

Except for constant functions, macro functions cannot use recursion.