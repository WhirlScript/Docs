---
prev:
    text: 命名空间
    link: /zh/guide/getting-started/namespace
next:
    text: 目标限定符
    link: /zh/guide/getting-started/target-specifier
---

# 模块

WhirlScript 程序可以被拆分为多个按需导入的单独模块。这也是其包管理的前提。

::: tip 小贴士
建议在作为模块的文件中，将所有定义置于命名空间中，防止导入后污染命名空间。
:::

## 导入模块

使用 `import` 语句导入一个模块。

```WhirlScript
import "./module";
```

导入的模块实际上是一个 `.wrs` 文件。你需要使用相对路径（以 `./` 开头）来导入项目目录中的文件。

导入语句需要在最外层。即，你不能在函数、分支等语句内部导入一个模块。

导入实际上是字符串的简单拼接。因此，导入的文件中的所有内容都会被作为此文件的一部分被解析。

重复导入是安全的。第二次导入同一个模块会被忽略。

## 导入 Whirl 包

WhirlPKG 提供了各种第三方包。你可以通过 `$ wrp add $pkg` 安装到当前项目，然后使用 `import` 语句导入：

```WhirlScript
import "hello";
```

对于提供了可选导入的包，你可以通过这种方式导入：

```WhirlScript
import "hello/hello";
```
