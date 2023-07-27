# Getting started

This basic example demonstrates how to use the package in its simplest way. However, for a more in-depth understanding of the various options and features, please navigate to the [Usage section](usage.md) where all available functionalities and usage scenarios are thoroughly explained.

## Installation

PublishOrPerish.jl can be installed using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run

```
pkg> add PublishOrPerish
```

## Usage

```julia
using PublishOrPerish

data = search(["machine learning", "ai", "julia"])
```
