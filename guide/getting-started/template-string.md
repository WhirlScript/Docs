---
prev:
    text: Expressions and Operators
    link: /en/guide/getting-started/expressions-and-operators
next:
    text: Struct
    link: /en/guide/getting-started/struct
---

# Template String

**Template string** is a string wrapped in backticks (`` ` ``), allowing special structures for **multiline strings** and **string interpolation** with embedded expressions.

## Syntax

Template strings are wrapped in backticks (`` ` ``) and may contain interpolation, an embedded expression separated by a dollar sign and braces: `${expression}`.

For example:

```WhirlScript
`12
3`;
`1 + 1 = ${1 + 1}`;
```

To escape a backtick (`` ` ``) in a template string, precede the backtick with a backslash (`\`). Likewise, for escaping, the dollar sign `$` to prevent interpolation can also be escaped with a backslash:

```WhirlScript
`\`` == "`"; // true
`\${1}` == "${1}"; // true
```

Template strings can be multiline and nested:

```WhirlScript
`1 + 1 = ?

${`1 + 1 = ${1 + 1}`}`;
```
