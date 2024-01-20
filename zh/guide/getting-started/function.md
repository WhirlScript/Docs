---
prev:
    text: 流程控制
    link: /zh/guide/getting-started/control-flow
next:
    text: 函数
    link: /zh/guide/getting-started/expressions-and-operators
---
# 函数

WhirlScript 的函数分为两种：普通函数和宏函数。

## 定义函数

一个**函数定义**（也称为**函数声明**，或**函数语句**）由 `function` 关键字，并跟随以下部分组成：

- 函数名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 函数返回值类型。
- 定义函数的 WhirlScript 语句，用大括号括起来，`{ /* … */ }`。

参数列表中的参数需要同时定义类型。

例如，以下的代码定义了一个名为 `add` 的函数：

```whirlscript
function add(x: int, y: int): int {
    return x + y;
}
```

函数 `add` 接收两个名为 `x`、`y` 的参数，它们的类型都为 `int`，且函数返回值类型为 `int`。这个函数只有一个语句，其表示该函数将函数的参数（即 `x`、`y`）相加后返回。函数的 `return` 语句指定了函数的返回值：`x + y`。

参数本质上是**按值**传递给函数的——因此，即使函数体的代码为传递给函数的参数赋了新值，**这个改变也不会反映到全局或调用该函数的代码中**。

对于没有返回值的函数，可以不声明返回值类型或声明为 `void`。

### 参数限定

对于参数列表中的每一项，声明都由以下部分组成：

- 常变量限定，使用 `var` 和 `const` 关键字，可省。
- 运行时、编译期变量限定，使用 `runtime` 和 `macro` 关键字，可省。
- 名称。
- 参数类型。

::: warning ⚠️ 警告
字面值也属于编译期常量。
:::

比如，这个函数接受一个宏变量：

```whirlscript
function f(var macro x: int): int {
    // ...
}
```

## 调用函数

定义的函数并不会自动执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。

**调用**函数才会以给定的参数真正执行这些动作。例如，一旦你定义了函数 `add`，你可以像这样调用它：

```whirlscript
add(1, 2);
```

上述语句使用参数 `1`、`2` 来调用函数。函数执行完它的语句会返回值 `3`。

函数可以调用其本身。例如，下面这个函数就是用递归计算阶乘：

```whirlscript
function factorial(n: int): int {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```

## 嵌套函数和闭包

函数定义可以在代码**除了迭代**的任何地方出现。

::: details 为什么？
WhirlScript 并不支持动态创建函数，因此所有的函数调用都会在编译时确定。
:::

::: tip
需要注意的是，即使在函数内部声明一个函数，在编译后这个函数也还是会被提到函数声明区域中。不同的只是作用域。
:::

在内部函数中你可以调用在定义位置中所有可以访问的变量。例如：

```whirlscript
function outer() {
    var x: int = 1;
    function inner(){
        x++;
    }
    inner();
    println(x); //输出 2。
}
```

## 默认参数

在 WhirlScript 中，你可以给函数提供默认参数：

```whirlscript
function multiple(a, b = 1): int {
    return a * b;
}

multiple(5); //返回 5。
```

## 宏函数

宏函数是 WhirlScript 预处理功能的一部分，它包含很多普通函数没有的特性：

### 声明

宏函数的声明和普通函数类似，只需要加上关键字 `macro` 。

```WhirlScript
macro function fn(){
  //...
}
```

### 内联

宏函数是内联的。这意味着，宏函数在编译后会被直接插入到调用它的位置。

基于这种特性，在编写库的时候，我们推荐尽量使用宏函数。在函数段较短和调用次数较少的情况下，可以减少编译体积。对于比较底层的抽象层，我们也推荐使用宏函数。

### 引用传值

宏函数的传值是按引用传值的。这意味着你可以在宏函数中修改传递的值。

例如，以下函数会将传入值自增 `1`：

```whirlscript
macro function succ(var x: int) {
    x++;
}

var x = 1;
succ(x);
println(x); //输出 2。
```

### 递归限制

除了常值函数以外，宏函数不能使用递归。

### 原生函数

宏函数可以通过注解 `@native` 被声明为原生函数。

声明原生函数不需要函数体。需要注意的是，句末需要加上分号。

```WhirlScript
@native macro function fn();
```