# PublishOrPerish.jl

PublishOrPerish.jl is a Julia package that serves as a wrapper for the powerful Publish or Perish software. The package aims to streamline the process of accessing and utilizing Publish or Perish functionalities directly from Julia.

## Features

- Seamless Integration: Easily integrate with Publish or Perish, a leading citation analysis tool for academic and scientific research.
- Simplified API: Abstracts away complexities, providing a straightforward API to access and leverage Publish or Perish's extensive capabilities.
- Automated Retrieval: Retrieve publication metrics, citation data, and more with ease, all directly from your Julia environment.

## Installation

You can install the package by running the following command in the Julia REPL:

```julia
using Pkg
Pkg.add("PublishOrPerish")
```

## Usage

```julia
using PublishOrPerish

data = search(["machine learning", "ai", "julia"])
```
## Documentation

For more detailed information about this package, its functionalities, and usage instructions, please refer to our [detailed documentation page](./docs/detailed.md).

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the repository. Make sure to follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## TODO List

For an overview of pending tasks, improvements, and future plans for the ModelSelectionGUI package, please refer to the [TODO.md](TODO.md) file.

## License

This package is licensed under the [MIT License](LICENSE).
