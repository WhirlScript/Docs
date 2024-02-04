---
prev:
    text: What is WhirlScript?
    link: /guide/introduction/what-is-whirlscript
next:
    text: Hello World!
    link: /guide/getting-started/hello-world
---
# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- A terminal for accessing WhirlScript through its Command Line Interface (CLI).

::: code-group

```sh [npm]
$ npm add -g whirlscript
```

```sh [pnpm]
$ pnpm add -g whirlscript
```

```sh [yarn]
$ yarn global add whirlscript
```

:::

### Setup Guide

WhirlScript uses its package manager `Whirlpkg`.

```shell
$ wrp init
```

### Configuration Files

- The `whirlpkg.json` file is used to store the package configuration;
- The `wrsconfig.json` file is used to store the build configuration.

## Compilation

Once you have completed your configuration, you can compile your source code like this:

```shell
$ wrsc
```