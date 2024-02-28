---
prev:
    text: Namespace
    link: /guide/getting-started/namespace
next:
    text: Annotation
    link: /guide/getting-started/annotation
---

# Target Specification

In certain situations, you may want a piece of code to exist only in specific compilation targets.

The simplest way is to add `@sh` or `@bat` annotations before the statement.

```WhirlScript
@sh println("Hello SH!");
@bat println("Hello BAT!");
```

For blocks of statements, you can specify them like this:

```Whirlscript
@sh {
    println("SH only block.");
}
@bat {
    println("BAT only block.");
}
```

For more information about annotations, see [Annotation](/guide/getting-started/annotation).