---
prev:
    text: 语法和数据类型
    link: /zh/guide/getting-started/grammar-and-types
next: false
    # text: 语法和数据类型
    # link: /zh/guide/getting-started/grammar-and-types
---
# 流程控制

在 WhirlScript 中，任何表达式 (expression) 都可以看作一条语句 (statement)。

## 语句块

最基本的语句是用于组合语句的语句块。该块由一对大括号界定。

语句块通常用于流程控制，如if，for，while等等。

语句块也标示着作用域。在一个作用域内声明的变量会在出作用域后变得不可用。

## 条件判断语句

条件判断语句指的是根据指定的条件所返回的结果（真或假或其他预定义的），来执行特定的语句。

当一个逻辑条件为真，用 if 语句执行一个语句。当这个条件为假，使用可选择的 else 从句来执行这个语句。if 语句如下所示：

```whirlscript
if (condition) {
  statement_1;
} else {
  statement_2;
} //推荐使用严格的语句块模式，语句 else 可选
```

条件可以是任何返回结果被计算为 true 或 false 的表达式。如果条件表达式返回的是 true，statement_1 语句会被执行；否则，statement_2 被执行。statement_1 和 statement_2 可以是任何语句，甚至你可以将另一个 if 语句嵌套其中。

你也可以组合语句通过使用 else if 来测试连续多种条件判断，就像下面一样：

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

要执行多个语句，可以使用语句块 ({ ... }) 来分组这些语句。通常，总是使用语句块是一个好的习惯，特别是在代码涉及比较多的 if 语句时。

