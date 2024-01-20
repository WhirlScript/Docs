---
prev:
    text: 结构体
    link: /zh/guide/getting-started/struct
next:
    text: 目标限定符
    link: /zh/guide/getting-started/target-specify
---

# 命名空间

WhirlScript 没有类的概念。作为替代，如果你希望将变量和函数按照功能分开，可以使用命名空间。

## 定义一个命名空间

你可以使用 `namespace` 语句定义一个命名空间。例如，以下代码定义了一个命名空间，它包含函数 `max`：

```WhirlScript
namespace Math{
    function max(x: int, y: int): int {
        if(x >= y){
            return x;
        }
        return y;
    }
}
```

## 调用命名空间中的内容

你可以使用 `::` 符号调用命名空间中的内容。例如，对于前面定义的 `max` 函数，可以这样调用：

```WhirlScript
println(Math::max(1, 2));// 2
```

## 补充定义

`::` 符号同样可以用于补充定义命名空间中的内容。

```WhirlScript
function Math::min(x: int, y: int): int {
    if(x >= y){
        return x;
    }
    return y;
}
```

## 定义可省性和可重复性

你可以多次定义同一个命名空间，或者根本不定义直接使用 `::` 语法补充定义。这些情况下，结果都是一样的：你在这个命名空间中定义的所有内容，都属于这个命名空间，不管是何时定义的。例如：

```WhirlScript
function example::foobar(){
    println("foobar");
}

namespace example{
    function foo(){
        println("foo");
    }
}


namespace example{
    function bar(){
        println("bar");
    }
}

example::foobar();// foobar
example::foo();// foo
example::bar();// bar
```

## `using` 语句

你可以使用 `using` 语句使命名空间中的内容可以不经过命名空间直接调用。例如：

```WhirlScript
using Math::max;

println(max(1, 2));// 2
```

你也可以加上 `namespace` 限定来打开一个命名空间。

```WhirlScript
using namespace Math;
println(max(1, 2))// 2
```

不推荐直接打开一个命名空间，因为这会污染命名空间。

::: warning ⚠️ 警告
在模块中打开一个命名空间，会影响到调用这个模块的所有内容。
:::

## 嵌套的命名空间

命名空间可以嵌套。例如：

```WhirlScript
namespace foo{
    namespace bar{
        function foobar(){
            println("foobar");
        }
    }
}

foo::bar::foobar();// foobar
```