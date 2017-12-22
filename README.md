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
Get quotes from Wikiquote.

Usage: wikiquote [action] [options]

Commands:
  wikiquote random [name]  get a random quote from a person
  wikiquote search [name]  search for a page name

Options:
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

Examples:
  wikiquote random "Steve Jobs"
  wikiquote search "bill gates"

```

## Examples

```
$ wikiquote random 'Donald Knuth' | cowsay
 ________________________________________
/ I can’t go to a restaurant and order   \
| food because I keep looking at the     |
| fonts on the menu.                     |
|                                        |
| Knuth, Donald (2002). "All Questions   |
| Answered" (PDF). Notices of the AMS 49 |
| (3): 321.                              |
|                                        |
\ -- Donald Knuth                        /
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[npm-url]: https://www.npmjs.com/package/wikiquote-cli
[npm-image]: https://img.shields.io/npm/v/wikiquote-cli.svg?style=flat
[travis-url]: https://travis-ci.org/fdesjardins/wikiquote-cli
[travis-image]: https://img.shields.io/travis/fdesjardins/wikiquote-cli.svg?style=flat
[coveralls-url]: https://coveralls.io/r/fdesjardins/wikiquote-cli
[coveralls-image]: https://img.shields.io/coveralls/fdesjardins/wikiquote-cli.svg?style=flat
