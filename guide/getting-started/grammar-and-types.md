---
prev:
  text: Hello Whirlpool!
  link: /guide/getting-started/hello-whirlpool
next:
  text: Control Flow
  link: /guide/getting-started/control-flow
---
# Grammar and Data Types

In this section, we will discuss the basic syntax and variable declarations of WhirlScript.

## Basics

WhirlScript is case-sensitive and uses the UNICODE character set.

In WhirlScript, instructions are called statements and are separated by semicolons `;`.

## Comments

The syntax of WhirlScript comments is similar to many languages:

```whirlscript
// Single line comment

/* This is
   a multi-line comment.
 */
```

These will be skipped during the code compilation process. However, if you enable `withComment` in the compilation options, these comments will be included in the output.

## Declarations

There are four states of quantities in WhirlScript:

- Compile-time variables: Can be modified and used during compilation;
- Compile-time constants: Can be used during compilation, cannot be modified;
- Runtime variables: Can be modified and used at runtime;
- Runtime constants: Can be used at runtime, cannot be modified.

Correspondingly, there are four ways to declare:

- `#var`: Declare a compile-time variable, optionally initialize a value.
- `#const`: Declare a compile-time constant.
- `var`: Declare a runtime variable, optionally initialize a value.
- `const`: Declare a runtime constant.

### Variables

In applications, variables are used as symbolic names for values. The name of a variable is called an identifier, which needs to follow certain rules.

A WhirlScript identifier must start with a letter; subsequent characters can also be numbers (0-9). Because the JavaScript language is case-sensitive, letters can be uppercase letters from "A" to "Z" and lowercase letters from "a" to "z".

Like other languages, most operators cannot be included in the name. What's different is that these symbols, which other languages might allow, are also not allowed:

- `$`
- `_`

::: details Why?
Since the identifier of variables in shell is the `$` symbol, you cannot use it as a name.

The `_` symbol is used to identify scopes and other internal uses, so it cannot be used as a name either.

Note that these two symbols will be parsed as ordinary operators.
:::

At the same time, the behavior of using keywords as identifiers is undefined.

Examples of legal identifiers: `Number_hits`, `temp99`.

### Declaring Variables

You can declare a variable in this way:

```whirlscript
var num:int = 1;
```

Where `var` indicates that a runtime variable is declared, `num` is the identifier of the variable, `:int` indicates that the variable type is `int`, and `= 1` initializes this variable to a value (here it is `1`).

If initialization is included, the variable type is optional (inferred by the compiler).

In some cases, you must specify the type to get the result you want:

```whirlscript
var aNum:int = 1;
var aString:string = aNum;  // Get "1".
```

This will be mentioned in [Conversion of Data Types](#conversion-of-data-types).

For all variables (including compile-time and runtime variables), initialization is optional.

### Variable Evaluation

For variables declared with the `var` statement, if no initial value is assigned, accessing its value will get a default value. The default value is different depending on the type.

Accessing an undeclared variable will cause an error.

### Global Variables

You can use the `global` statement to declare a global quantity:

```whirlscript
global var g:string = "This is a global variable"; // Declare a global variable

bat rawln("echo %g%");  // Output g in bat.
sh rawln("echo $g");    // Output g in sh.

// More recommended writing
rawln(`echo ${g}`);   // This does not need to judge the syntax environment, it can be called directly.

// Or directly
println(g); The built-in println function.
```

Global quantities will not be modified identifiers after compilation. That is to say, you can directly call it in `raw` statements. But we recommend using template syntax to directly splice commands.

### Constants

You can create a read-only constant with the keyword `const`. The naming rules for constant identifiers are the same as for variables.

```whirlscript
const version = "1.1.0";
```
All constants (including compile-time and runtime constants) cannot change their values by reassigning, nor can they be redeclared during code execution. It must be initialized to some value.

You can choose to omit the type (inferred by the compiler) or explicitly specify it.

In the same scope, you cannot use a name that is the same as a variable name or function name to name a constant.

## Data Structures and Types

### Data Types

WhirlScript defines three data types:

- `boolean`: Boolean value, with 2 values: `true` and `false`.
- `int`: Integer, for example `0`, `42`, `1000`.
- `string`: String, for example `"string"`.

### Conversion of Data Types

WhirlScript is statically typed, which means that the type of a variable is immutable.

For example, you cannot assign a `string` value to an `int` type variable in this way:

```whirlscript
var n:int = 12;
n = "string";   // Error!
```

#### Implicit Conversion

In this case, there will be no error:

```whirlscript
var s:string = "string";
s = 12;
```

Here an implicit conversion has occurred. There are three situations for implicit conversion, respectively:

- Boolean to integer: `false` will be converted to `0`, `true` will be converted to `1`.
- Boolean to string: `false` will be converted to `"0"`, `true` will be converted to `"1"`.
- Integer to string: For example, `123` will be converted to `"123"`.

Even if you directly call it in `raw` statements, it will be the same.

::: details Why?
In the underlying implementation, all quantities are strings.

The underlying implementation of Boolean values is `"0"` and `"1"`.

The underlying implementation of integers is the corresponding string.
:::

#### Type Assertion

Implicit conversion can only be upward conversion.

If you need to convert in reverse, you need type assertion. The premise is that you are **very sure** that this is convertible.

Type assertion is marked with `<>`, for example:

```whirlscript
var n:int = <int>"123";
```

The compiler will not check whether your conversion is legal. Please use it **cautiously**.

## Literals

In WhirlScript, you can use various literals. These literals are fixed values given in the script literally, not variables.

For example `1`, `true`, `"str"`.