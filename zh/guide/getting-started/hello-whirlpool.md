---
prev:
    text: Hello World!
    link: /zh/guide/getting-started/hello-world
next: 
    text: 语法和数据类型
    link: /zh/guide/getting-started/grammar-and-types
---
# Hello Whirlpool!

接下来让我们了解下包管理器 `Whirlpool`。

## 安装包

在项目根目录打开终端，输入：

```shell
$ wrp add hello
```

等待安装结束。

你可以看到项目目录下多了个文件夹 `wrs_packages`，这里包含你所安装的所有包。

如果你要使用版本管理（比如 Git）来管理 WhirlScript 项目的话，最好把这个文件夹添加到忽略列表中。

害怕同伴安装的依赖和你安装的有细微差别？别怕，还有 `whirlpool-lock.json` 呢！它可以保证你们安装的包是一模一样的。

## 引入依赖

回到我们前面创建的 `main.wrs` 文件，改成：

```whirlscript
#import("hello");

hello();
```

## 编译和运行

像前面一样编译运行吧！

觉得为了运行要新开一个终端多些一行命令很麻烦？试试命令行参数 `-r`：

```shell
$ wrsc -r
```

这会在编译结束后自动运行编译输出的脚本（仅限于当前平台对应的，如果编译目标中不包含当前平台，这个参数不会做任何事。正好相反，你会得到一条警告）。
