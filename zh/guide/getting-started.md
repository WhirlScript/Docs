# 入门指南

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

### 设置向导

WhirlScript 使用其包管理器 `WhirlPool`。

```sh [npm]
$ wrp init
```

### 配置文件
- 文件 whirlpool.json 用于存储包的配置；
- 文件 build.json 用于存储构建的配置。


## 编译

只要完成了配置，就可以像下面这样编译你的源代码：

```sh [npm]
$ wrsc
```
