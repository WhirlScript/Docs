# Hello WhirlScript!

现在我想你已经安装完 WhirlScript。

接下来让我们写一个简单的程序输出 `Hello World!`。

## 初始化

你需要为这个项目找一个空目录，并且在这里打开终端，输入：

```shell
$ wrp init
```

在回答完一系列问题后，你的项目就初始化好了。

## 写一些代码

接下来，新建一个叫做 `main.wrs` 的文件。这将是这个项目的入口点文件。

打开这个文件，输入这些：

```whirlscript
println("Hello world!");
```

## 编译和运行

### 编译配置

在编译之前，我们需要先编写编译配置。

在项目根目录新建一个叫做 `build.json` 的文件，并且在里面输入：

```json
{
  "entrypoint": "main"
}
```

此处的 `entrypoint` 指的是我们前面新建的 `main.wrs` 文件。如果你使用了其它文件名或者放在了文件夹中，请对应修改它。

### 编译！

编译命令特别简单。我们已经在配置里面写上了编译器需要知道的信息，所以只需要在这里打开终端，输入：

```shell
$ wrsc
```

编译得到的脚本位于项目目录的 `build` 文件夹底下，你可以在里面找到它。

对应你的操作系统，你可以找到 `hello-world.bat` 或 `hello-world.sh`。

接下来，简单的打开一个终端，运行它！

```text
$ ./hello-world
Hello World!
```

看着屏幕上印出的 `Hello World!`，我们已经向前了一大步了！
