---
prev:
    text: 模块
    link: /zh/guide/getting-started/modules
next: false
    # text: 运行命令
    # link: /zh/guide/getting-started/execute
---

# 运行命令

WhirlScript 提供了几种方式来运行命令。

## `exec` 函数

`exec` 函数是最简单的方法，它接受一个字符串参数，如：

```WhirlScript
exec("echo 123");
```

这个命令返回一个 `command` 类型的对象，你可以使用 `pipe` 函数将其输出重定向到另一个命令的输入，用 `toFile`, `toNewFile` 重定向到文件，或是 `getOutput` 捕获其输出到一个变量，如：

```WhirlScript
const output: string = getOutput(exec("echo 123"));
println(output); // 123

toNewFile(pipe(exec("echo 123"), exec("tar")), "output.tar");
// 或使用链式调用语法
exec("echo 123")
    .pipe(exec("tar"))
    .toNewFile("output.tar");
```

::: warning ⚠️注意
`exec` 命令会将其中的如 `%`, `|` 等符号转义。如果不希望被转义，请使用 `\%` 转义或使用 `raw` 函数。
:::

## `$` 语句

你可以使用 `$` 语句调用一个命令，它和 `exec` 的结果是一样的。例如：

```WhirlScript
$"echo 123";
```

## `raw` 函数

`raw` 函数的内容会被直接写入脚本内，不会经过任何处理。**请谨慎使用。**
