---
prev:
    text: 模块
    link: /zh/guide/getting-started/modules
next:
    text: 注解
    link: /zh/guide/getting-started/annotation
---

# 目标限定

在一些特定情况下，你会要求某段代码只在特定的编译目标中存在。

最简单的方式是在语句前加上 `@sh` 或 `@bat` 注解。

```WhirlScript
@sh println("Hello SH!");
@bat println("Hello BAT!");
```

对于语句块，你可以这样子限定：

```WhirlScript
@sh {
    println("SH only block.");
}
@bat {
    println("BAT only block.");
}
```

注解相关内容详见 [注解](/zh/guide/getting-started/annotation) 。
