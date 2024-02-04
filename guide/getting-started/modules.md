---
prev:
    text: Namespaces
    link: /guide/getting-started/namespace
next: false
    # text: Modules
    # link: /guide/getting-started/modules
---

# Modules

WhirlScript programs can be broken down into individual modules that are imported as needed. This is also the foundation of its package management.

::: tip Tip
It's advisable to place all definitions within namespaces in files that act as modules, to avoid namespace pollution after import.
:::

## Importing Modules

Use the `import` statement to import a module.

```WhirlScript
import "./module";
```

The imported module is actually a `.wrs` file. You need to use relative paths (starting with `./`) to import files in the project directory.

The import statement needs to be at the outermost level. That is, you cannot import a module within functions, branches, and other statements.

Importing is essentially a simple string concatenation. Therefore, all content in the imported file will be parsed as part of this file.

Repeated imports are safe. The second import of the same module will be ignored.

## Importing Whirlpkg Packages

Whirlpkg provides a variety of third-party packages. You can install them to the current project with `$ wrp add $pkg`, and then use the `import` statement to import:

```WhirlScript
import "hello";
```

For packages that provide optional imports, you can import them in this way:

```WhirlScript
import "hello/hello";
```