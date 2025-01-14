---
id: pprof
title: Tips for profiling CKB script
---

Before starting, make sure you have understood the concept of [cycles](../basics/glossary#cycles).

In the development phase of dapps, it is a wide range of needs to estimate how many cycles our dapp will consume.

[ckb-vm-pprof](https://github.com/nervosnetwork/ckb-vm-pprof) is a tool for visualization and analysis of profiling data. It can run a script off-chain and then collect the runtime data. According to your preference, It can generate both text and graphical reports.

## Get ckb-vm-pprof

```
$ git clone https://github.com/nervosnetwork/ckb-vm-pprof
$ cd ckb-vm-pprof
$ cargo build --release
```

The executable file is located at `./target/release/ckb-vm-pprof`, you can copy it to any `$PATH` you like.

## Basic usage

Suppose the program to be tested is:

```c
int fib(int n) {
    if (n == 0 || n == 1) {
        return n;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

int main() {
    if (fib(10) != 55) {
        return 1;
    }
    return 0;
}
```

The Fibonacci function is used in the example because it is not only simple enough, but also a recursive function.

### Build with -g option

`-g` option, described in the gcc documentation as:

```text
-g
Produce debugging information in the operating system’s native format (stabs, COFF, XCOFF, or DWARF). GDB can work with this debugging information.

On most systems that use stabs format, -g enables use of extra debugging information that only GDB can use; this extra information makes debugging work better in GDB but probably makes other debuggers crash or refuse to read the program. If you want to control for certain whether to generate the extra information, use -gstabs+, -gstabs, -gxcoff+, -gxcoff, or -gvms (see below).
```

It is necessary to bring it when compiling, so the compilation command is:

```sh
$ riscv64-unknown-elf-gcc -g -o fib fib.c
```

### Install visualization package

> If you only need a text report, you can ignore this step.

```sh
$ cargo install inferno
```

Inferno is a port of parts of the flamegraph toolkit to Rust, with the aim of improving the performance of the original flamegraph tools.

### Get reports

We just need to use ckb-vm-pprof to run the binary fib:

```sh
$ ckb-vm-pprof --bin fib > flamegraph.txt

$ cat flamegraph.txt
??:?? 938
??:??; /src/ckb-vm-pprof/res/fib.c:main 24
??:??; /src/ckb-vm-pprof/res/fib.c:main; /src/ckb-vm-pprof/res/fib.c:fib 7311
```

The basic format of the text report is `Function0; Function1; ... FunctionN Cycles`, that is, the call stack and the final cycles. `??:??` means that some codes that does not belong to any user defined function(usually generated by the compiler).

Generate graphics for easy reading:

```sh
$ cat flamegraph.txt | inferno-flamegraph > fib.svg
```

![fib.svg](https://raw.githubusercontent.com/nervosnetwork/ckb-vm-pprof/master/res/fib.svg)

Please note that the function with too small proportion will not be displayed on the flamegraph by default.
