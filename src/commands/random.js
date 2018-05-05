const wikiquote = require('wikiquote')
const cache = require('../cache')

const command = 'random <name> [options]'

const description = 'get a random quote from a page'

const builder = yargs => {
  yargs.positional('name', {
    alias: 'n',
    type: 'string',
    describe: 'the page title'
  })
  yargs.option('no-cache', {
    alias: 'x',
    default: false,
    type: 'boolean'
  })
  yargs.option('max-length', {
    alias: 'm',
    default: 120,
    type: 'integer'
  })
}

const toPlain = (quote, name) => `${quote} -- ${name}`

const help = name => `\
Error: No quotes found matching the name "${name}".

This command is case sensitive.

Try searching first using \`wikiquote search [name]\` and using the "Title"
field value returned as the [name] in the \`wikiquote random\` command.`

const handler = async argv => {
  let quotes

  if (argv.noCache === false) {
    quotes = await cache.get(argv.name)
  }

  if (!quotes) {
    try {
      quotes = await wikiquote.list(argv.name)
    } catch (err) {
      console.log(help(argv.name, err))
    }
  }

  if (quotes && argv.maxLength && argv.maxLength > 0) {
    quotes = quotes.filter(q => q.quote.length < argv.maxLength)
  }

  if (quotes && quotes.length > 0) {
    console.log(
      toPlain(
        quotes[Math.floor(Math.random() * quotes.length)].quote,
        argv.name
      )
    )
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
