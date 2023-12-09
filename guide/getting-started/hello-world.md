---
prev:
  text: Getting Started
  link: /guide/getting-started/getting-started
next:
  text: Hello Whirlpool!
  link: /guide/getting-started/hello-whirlpool
---
# Hello World!

Now I assume you have installed WhirlScript.

Next, let's write a simple program to output `Hello World!`.

## Initialization

You need to find an empty directory for this project, and open the terminal here, enter:

```shell
$ wrp init
```

After answering a series of questions, your project is initialized.

## Write Some Code

Next, create a file called `main.wrs`. This will be the entry point file for this project.

Open this file and enter these:

```whirlscript
println("Hello world!");
```

## Compilation and Running

### Compilation Configuration

Before compiling, we need to write the compilation configuration first.

Create a new file called `build.json` in the project root directory, and enter:

```json
{
  "entrypoint": "main"
}
```

The `entrypoint` here refers to the `main.wrs` file we created earlier. If you used a different filename or put it in a folder, please modify it accordingly.

### Compile!

The compilation command is very simple. We have written the information that the compiler needs to know in the configuration, so just open the terminal here and enter:

```shell
$ wrsc
```

The compiled script is located under the `build` folder in the project directory, you can find it there.

Corresponding to your operating system, you can find `hello-world.bat` or `hello-world.sh`.

Next, simply open a terminal and run it!

```text
$ ./hello-world
Hello World!
```

Looking at the `Hello World!` printed on the screen, we have taken a big step forward!