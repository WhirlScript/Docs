---
prev:
    text: Hello Whirlpkg!
    link: /zh/guide/getting-started/hello-whirlpkg
next: 
    text: 流程控制
    link: /zh/guide/getting-started/control-flow
---
# 语法和数据类型

在这一节中，我们将讨论 WhirlScript 的基本语法和变量声明。

## 基础

WhirlScript 是区分大小写的，并且使用 UNICODE 字符集。

在 WhirlScript 中，指令被称为语句，并用分号`;`进行分隔。

## 注释

WhirlScript 注释的语法和很多语言类似：

```whirlscript
// 单行注释

/* 这是
   多行注释。
 */
```

在代码编译的过程中，这些会被跳过。但是如果你在编译选项中启用 `withComment`，这些注释都会被包含在输出中。

## 声明

WhirlScript 的量有四种状态：

- 编译期变量：可以在编译期修改与使用；
- 编译期常量：可以在编译期使用，不能被修改；
- 运行时变量：可以在运行时修改和使用；
- 运行时常量：可以在运行时使用，不能被修改。

运行时量可以直接使用关键字 `var` 和 `const` 声明：

- `var`：声明一个运行时变量，可选初始化一个值。
- `const`：声明一个运行时常量。

::: code-group
```WhirlScript [运行时变量]
var v: int = 1;
```


```WhirlScript [运行时常量]
const v: int = 1;
```
:::

对于编译期量，则需要添加 `macro` 关键字。

::: code-group
```WhirlScript [编译期变量]
macro var v: int = 1;
```


```WhirlScript [编译期常量]
macro const v: int = 1;
```
:::

### 变量

在应用程序中，使用变量来作为值的符号名。变量的名字又叫做标识符，其需要遵守一定的规则。

一个 WhirlScript 标识符必须以字母开头；后续的字符也可以是数字（0-9）。因为 JavaScript 语言是区分大小写的，所以字母可以是从“A”到“Z”的大写字母和从“a”到“z”的小写字母。

和其它语言类似，大部分的运算符不能被包含在名称中。不同的是，这几种其它语言可能允许的符号也不被允许：

- `$`
- `_`

::: details 为什么？
由于 shell 中变量的标识是 `$` 符号，你不能将它用作名称。

`_` 符号被用作标识作用域和其它内部用途，因此也不能被用作名称。

需要注意的是，这两种符号会被作为普通运算符解析。
:::

同时，使用关键字作为标识符的行为是未定义的。

合法的标识符示例：`NumberHits`、`temp99`。

### 声明变量

你可以通过这种方式声明一个变量：

```whirlscript
var num: int = 1;
```

其中，`var` 标识声明的是一个运行时变量，`num` 为变量的标识符，`: int` 标识变量类型为 `int`，`= 1` 将此变量初始化为一个值（在这里为 `1`）。

如果包含了初始化，那么变量类型是可省的（由编译器推断）。

在一些情况下，你必须要标明类型才可能得到你想要的结果：

```whirlscript
var aNum: int = 1;
var aString: string = aNum;  // 得到 "1"。
```

这会在[数据类型的转换](#数据类型的转换)中提到。

对于所有的变量（包括编译期和运行时变量），初始化是可选的。

### 变量求值

用 `var` 语句声明的变量，如果没有赋初始值，则访问其值会得到默认值。默认值按类型是不同的。

如果访问一个未声明的变量会导致报错。

### 最终变量

你可以使用 `@final` 注解声明一个最终量或函数：

:::warning ⚠️ 警告
你只能将一个运行时量声明为最终量，而不能将编译期量声明为最终量。函数也一样。
:::

注解相关内容详见 [注解](/zh/guide/getting-started/annotation) 。

```whirlscript
@final var g: string = "这是一个最终变量"; // 声明一个最终变量

bat raw("echo %g%\n");  // 在 bat 中输出 g。
sh raw("echo $g\n");    // 在 sh 中输出 g。

// 更推荐的写法
raw(`echo ${g}\n`);   // 这不需要判断语法环境，可以直接调用。

// 或者直接
println(g); 内置的 println 函数。
```

最终量并不会在编译后被修改标识符。也就是说，你可以在 `raw` 语句中直接调用。但是我们更建议使用模板语法直接拼接命令。

### 常量

你可以用关键字 `const` 创建一个只读的常量。常量标识符的命名规则和变量相同。

```whirlscript
const version = "1.1.0";
```
所有的常量（包括编译期和运行时常量）都不可以通过重新赋值改变其值，也不可以在代码运行时重新声明。它必须被初始化为某个值。

你可以选择缺省类型（由编译器推断）或者显示标明。

在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量。

## 数据结构和类型

### 数据类型

WhirlScript 定义了三种基本数据类型：

- `boolean`：布尔值，有 2 个值分别是：`true` 和 `false`。
- `int`：整数，例如 `0`、`42`、`1000`。
- `string`：字符串，例如 `"string"`。

::: details 为什么没有浮点数？
bat 只提供整数的运算。为了兼容，我们只能舍弃这一部分。

如果您需要得到几位小数，请将除数和被除数同时乘上 10 的 n 次方后，截取尾部。

shell 提供了对浮点数的支持。如果您需要使用，请在 `exec` 函数中使用。
:::

### 数据类型的转换

WhirlScript 是静态类型的，这意味着变量的类型是不可变的。

例如，你不能通过这种方式给 `int` 类型变量赋一个 `string` 值：

```whirlscript
var n: int = 12;
n = "string";   // 报错！
```

#### 隐式转换

在这种情况下并不会报错：

```whirlscript
var s: string = "string";
s = 12;
```

这里发生了隐式转换。隐式转换有三种情况，分别为：

- 布尔值转整数：`false` 会转换为 `0`，`true` 会转换为 `1`。
- 布尔值转字符串：`false` 会转换为 `"0"`，`true` 会转换为 `"1"`。
- 整数转字符串：例如，`123` 会被转换为 `"123"`。

即使在 `raw` 语句中直接调用，也会这样。

::: details 为什么？
在底层实现中，所有量都是字符串。

布尔值的底层实现就是 `"0"` 和 `"1"`。

整数的底层实现就是对应的字符串。
:::

#### 类型断言

隐式转换只能向上转换。

如果你需要反过来转换，则需要类型断言。前提是，你**非常确定**这是可以转换的。

类型断言使用 `<>` 来标识，比如：

```whirlscript
var n: int = <int>"123";
```

编译器不会检查你的转换是否合法。请**谨慎**使用。

## 字面量

在 WhirlScript 中，你可以使用各种字面量。这些字面量是脚本中按字面意思给出的固定的值，而不是变量。

例如 `1`、`true`、`"str"`。
