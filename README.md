# pkg-release-version

Version executable created with [vercel/pkg](https://github.com/vercel/pkg).

## Authors

- [**Florentin Thullier**](https://github.com/FlorentinTh) - 2021

## Usage

```
Usage:
  $ pkg-ver <rootPath> <pkgOutput> [options]

  - <rootPath> is the path of the root directory of the project

  - <pkgOutput> is the name of the subfolder of the project
                root directory that contains executable created by pkg

Options:
  -a, --arch     precise another architecture than the current one
                                                       [string] [default: "x64"]
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
```

## Examples

```
- Version executables of myproject that are created by
pkg inside dist subfolder :

$ pkg-ver $HOME/projects/myproject dist

- Version executables of myproject that are created by
pkg inside dist subfolder for another architecture than
the one currently used (i.e. arm64):

$ pkg-ver $HOME/projects/myproject dist --arch "arm64"
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
