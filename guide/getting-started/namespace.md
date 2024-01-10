---
prev:
    text: Expressions and Operators
    link: /guide/getting-started/expressions-and-operators
next:
    text: Modules
    link: /guide/getting-started/modules
---

# Namespaces

WhirlScript does not have the concept of classes. As an alternative, if you wish to separate variables and functions based on functionality, you can use namespaces.

## Defining a Namespace

You can use the `namespace` statement to define a namespace. For example, the following code defines a namespace that contains the function `max`:

```WhirlScript
namespace Math{
    function max(x:int, y:int):int {
        if(x >= y){
            return x;
        }
        return y;
    }
}
```

## Calling Contents in a Namespace

You can use the `::` symbol to call contents within a namespace. For example, for the previously defined `max` function, you can call it like this:

```WhirlScript
println(Math::max(1, 2));// 2
```

## Supplemental Definition

The `::` symbol can also be used to supplementally define contents within a namespace.

```WhirlScript
function Math::min(x:int, y:int):int {
    if(x >= y){
        return x;
    }
    return y;
}
```

## Defining Optionality and Repeatability

You can define the same namespace multiple times, or not define it at all and directly use the `::` syntax for supplemental definition. In these cases, the result is the same: all the contents you define in this namespace belong to this namespace, regardless of when they were defined. For example:

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

## `using` Statement

You can use the `using` statement to call contents within a namespace directly without going through the namespace. For example:

```WhirlScript
using Math::max;

println(max(1, 2));// 2
```

You can also add the `namespace` qualifier to open a namespace.

```WhirlScript
using namespace Math;
println(max(1, 2))// 2
```

Opening a namespace directly is not recommended as it can pollute the namespace.

::: warning ⚠️ Warning
Opening a namespace within a module will affect all contents that call this module.
:::

## Nested Namespaces

Namespaces can be nested. For example:

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