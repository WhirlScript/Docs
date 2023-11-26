# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- Terminal for accessing WhirlScript via its command line interface (CLI).

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

### Setup Wizard

WhirlScript use its package manager `WhirlPool`.

```sh [npm]
$ wrp init
```

### The Config File

- The file `whirlpool.json` is used to store config for packages;
- The file `build.json` is used to store config for building.

## Compile

As long as you completed your config, you can compile your source code like:

```sh [npm]
$ wrsc
```

