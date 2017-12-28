const wikiquote = require('wikiquote')
const cache = require('../cache')

const command = 'list <name> [options]'

const description = 'list quotes for a given page name'

const builder = (yargs) => {
  yargs.positional('name', {
    type: 'string',
    describe: 'the page title to list quotes from'
  })
  yargs.option('no-cache', {
    alias: 'nc',
    default: false,
    type: 'boolean'
  })
}

const help = (name) => `\
Error: No pages found matching for query "${name}".

This search is case insensitive.

Are you sure you have the spelling correct?`

const handler = async (argv) => {
  let quotes

  // try to fetch from the cache first
  if (argv.noCache === false) {
    try {
      quotes = await cache.get(argv.name)
    } catch (err) {
      console.log(help(argv.name), err)
      return
    }
  }

  // try to fetch from wikiquote
  if (!quotes) {
    try {
      quotes = await wikiquote.list(argv.name)
    } catch (err) {
      console.log(help(argv.name, err))
      return
    }
  }

  if (argv.maxLength && argv.maxLength > 0) {
    quotes = quotes.filter(q => q.quote.length < argv.maxLength)
  }

  if (quotes && quotes.length > 0) {
    console.log(quotes.map(q => q.quote.trim()).join('\n\n--\n\n'))
  } else {
    console.log(help(argv.name))
  }
}

module.exports = {
  command,
  description,
  builder,
  handler
}
