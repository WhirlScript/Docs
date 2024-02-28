---
prev:
    text: Target Specification
    link: /en/guide/getting-started/target-specify
next:
    text: Modules
    link: /en/guide/getting-started/modules
---

# Annotations

By now, we've already encountered several annotations.

Annotations are a special type of comment. To put it more vividly, annotations are comments for the compiler, influencing how it processes the following statements.

WhirlScript's annotations are divided into two types: statement annotations and declaration annotations.

## Statement Annotations

The existing statement annotations include:

| Annotation | Meaning                                                                 |
| ---------- | ----------------------------------------------------------------------- |
| `@sh`      | The following statement or block will only be parsed when compiling to sh scripts |
| `@bat`     | The following statement or block will only be parsed when compiling to bat scripts |

For the usage of `@sh` and `@bat`, see [Target Specification](/guide/getting-started/target-specify).

## Declaration Annotations

The existing declaration annotations include:

| Annotation      | Meaning                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------- |
| `@deprecated`   | The following declaration has been deprecated.                                                    |
| `@final`        | The following declared variable or function is final, its name will not be modified in the compiled result. |
| `@env`          | The following declared variable is an environment variable. It needs to be declared as a constant. |
| `@editable`     | The following declared variable is editable, it will be placed at the top of the script after compilation to allow user editing. |
| `@optional`     | The following declared variable or function is optional, if it is not used by non-optional parts of the code, it will not be added to the compiled output. |
| `@noScope`      | The following declared **macro function** does not have its own scope.                            |
| `@constexpr`    | The following declared **macro function** returns a compile-time constant (including macro constants and literals). |
| `@noPreprocess` | The following statement (such as **if**, **for**, **while**) will not be expanded during compilation, suitable for infinite loop scenarios. |