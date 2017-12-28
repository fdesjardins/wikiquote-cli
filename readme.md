# wikiquote-cli

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![Coverage][coveralls-image]][coveralls-url]

Companion CLI for wikiquote package (https://github.com/fdesjardins/wikiquote)

## Install

```
$ npm install -g wikiquote-cli
```

## Usage

```
$ wikiquote -h

Get quotes from Wikiquote

Usage: wikiquote <cmd> [options]

Commands:
  wikiquote cache <cmd>            issue cache commands
  wikiquote list <name>            list quotes for a page name
  wikiquote random <name>          get a random quote from a page
  wikiquote search <query>         search for page names
  wikiquote completion             generate bash completion script

Options:
  -v, --version  Show version number                           [boolean]
  -h, --help     Show help                                     [boolean]

Examples:
  wikiquote random "Steve Jobs"
  wikiquote search "bill gates"
```

### Cache & Offline Usage

You can speed up quote retrieval and store quotes by using the `cache` command:

```
Commands:
  wikiquote cache add <name>     cache quotes for a give page
  wikiquote cache clear <name>   clear the local cache
  wikiquote cache update <name>  update the local cache
```

## Examples

Adding cache entries:

```sh
$ time wikiquote random 'Abraham Lincoln'
# 2.02s user 0.11s system 85% cpu 2.503 total

$ wikiquote cache add 'Abraham Lincoln'
Added "Abraham Lincoln" to cache

$ time wikiquote random 'Abraham Lincoln'
# 0.33s user 0.04s system 111% cpu 0.338 total
```

Use with other programs:

```sh
$ wikiquote random 'Donald Knuth' | cowsay
#  ___________________________________________________________
# / I speak to everyone in the same way, whether he is the    \
# | garbage man or the president of the university.           |
# |                                                           |
# | Attributed to Einstein by his colleague Léopold Infeld in |
# | his book Quest: An Autobiography (1949), p. 291           |
# |                                                           |
# \ -- Albert Einstein                                        /
#  -----------------------------------------------------------
#         \   ^__^
#          \  (oo)\_______
#             (__)\       )\/\
#                 ||----w |
#                 ||     ||
```

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[npm-url]: https://www.npmjs.com/package/wikiquote-cli
[npm-image]: https://img.shields.io/npm/v/wikiquote-cli.svg?style=flat
[travis-url]: https://travis-ci.org/fdesjardins/wikiquote-cli
[travis-image]: https://img.shields.io/travis/fdesjardins/wikiquote-cli.svg?style=flat
[coveralls-url]: https://coveralls.io/r/fdesjardins/wikiquote-cli
[coveralls-image]: https://img.shields.io/coveralls/fdesjardins/wikiquote-cli.svg?style=flat
