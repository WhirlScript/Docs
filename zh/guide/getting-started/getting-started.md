---
prev:
    text: 什么是 WhirlScript？
    link: /zh/guide/introduction/what-is-whirlscript
next: 
    text: Hello World!
    link: /zh/guide/getting-started/hello-world
---
# 立即开始

## 安装

### 先决条件

- [Node.js](https://nodejs.org/) 版本需为 18 或更高。
- 用于通过命令行界面（CLI）访问 WhirlScript 的终端。

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

### 设置向导

WhirlScript 使用其包管理器 `WhirlPool`。

```shell
$ wrp init
```

### 配置文件
- 文件 whirlpkg.json 用于存储包的配置；
- 文件 wrsconfig.json 用于存储构建的配置。


## 编译

只要完成了配置，就可以像下面这样编译你的源代码：

```shell
$ wrsc
```
