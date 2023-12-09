---
prev:
    text: Grammar and Data Types
    link: /guide/getting-started/grammar-and-types
next: false
---

# Control Flow

In WhirlScript, any expression can be considered a statement.

## Statement Blocks

The most basic statement is a statement block used to combine statements. The block is delimited by a pair of braces.

Statement blocks are commonly used for flow control, such as `if`, `for`, `while`, etc.

Statement blocks also indicate scope. Variables declared within a scope become unavailable after leaving the scope.

## Conditional Statements

Conditional statements refer to executing specific statements based on the result (true or false or other predefined) returned by the specified condition.

Use the if statement to execute a statement when a logical condition is true. When this condition is false, use the optional else clause to execute this statement. The if statement is as follows:

```whirlscript
if (condition) {
  statement_1;
} else {
  statement_2;
} // It is recommended to use a strict block mode, the else statement is optional
```

The condition can be any expression whose result is calculated as true or false. If the condition expression returns true, the statement_1 statement will be executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, and you can even nest another if statement in it.

You can also combine statements by using else if to test multiple consecutive conditions, as follows:

```whirlscript
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n_1) {
  statement_n;
} else {
  statement_last;
}
```

To execute multiple statements, you can use a statement block ({ ... }) to group these statements. Generally, always using statement blocks is a good habit, especially when the code involves more if statements.