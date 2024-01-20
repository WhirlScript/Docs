---
prev:
    text: 表达式与运算符
    link: /zh/guide/getting-started/expressions-and-operators
next:
    text: 命名空间
    link: /zh/guide/getting-started/namespace
---

# 结构体

结构是 WhirlScript 中另一种用户自定义的可用的数据类型，它允许您存储不同类型的数据项。

结构体中的数据成员可以是基本数据类型（`boolean`、`int` 和 `string`），也可以是其他结构体类型。

## 声明

结构体使用 `struct` 关键字声明：

```WhirlScript
struct MyStruct {
    number:int,
    used:boolean
}
```

结构体不允许出现自我嵌套，包括直接嵌套和间接嵌套。例如，以下的定义是错误的。

::: code-group
```WhirlScript [直接嵌套]
struct MyStruct {
    id:int,
    next:MyStruct // [!code error]
}
```


```WhirlScript [间接嵌套]
struct MyStruct1 {
    id:int,
    next:MyStruct2
}

struct MyStruct2 {
    id:int,
    next:MyStruct1 // [!code error]
}
```
:::

## 赋值

使用大括号来表示一个结构体量：

```WhirlScript
var v = {
    id: 2,
    used: false
};
```

## 调用

使用 `.` 来调用结构体内的量：

```WhirlScript
println(v.id); // 2
```