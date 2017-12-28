const wikiquote = require('wikiquote')

const usage = 'list [name]'

const description = 'list quotes for a given page name'

const yargs = (yargs) => {
  yargs.positional('name', {
    type: 'string',
    describe: 'the page title to list quotes from'
  })
}

const plainError = (name) => `\
Error: No pages found matching for query "${name}".

This search is case insensitive.

Are you sure you have the spelling correct?`

const handler = async (argv) => {
  try {
    const quotes = await wikiquote.list(argv.name)

    if (quotes.length > 0) {
      console.log(quotes.map(q => q.quote.trim()).join('\n\n--\n\n'))
    } else {
      console.log(plainError(argv.name))
    }
  } catch (err) {
    console.log(plainError(argv.name))
  }
}

module.exports = [ usage, description, yargs, handler ]
