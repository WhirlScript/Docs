---
prev:
  text: Hello World!
  link: /guide/getting-started/hello-world
next:
  text: Grammar and Data Types
  link: /guide/getting-started/grammar-and-types
---
# Hello WhirlPKG!

Next, let's learn about the package manager `WhirlPKG`.

## Installing Packages

Open the terminal in the project root directory and enter:

```shell
$ wrp add hello
```

Wait for the installation to finish.

You can see that there is an additional folder `wrs_modules` in the project directory, which contains all the packages you have installed.

If you want to use version management (such as Git) to manage WhirlScript projects, it is best to add this folder to the ignore list.

Are you afraid that the dependencies installed by your peers will have subtle differences from what you installed? Don't worry, there is `whirlpkg.lock`! It can ensure that the packages you install are exactly the same.

## Importing Dependencies

Go back to the `main.wrs` file we created earlier and change it to:

```whirlscript
#import "hello";

hello();
```

## Compilation and Running

Compile and run as before!

Do you think it's troublesome to open a new terminal and add a line of command for running? Try the command line parameter `-r`:

```shell
$ wrsc -r
```

This will automatically run the compiled script after the compilation is completed (only for the corresponding current platform, if the compilation target does not include the current platform, this parameter will not do anything. On the contrary, you will get a warning).