const wikiquote = require('wikiquote')

const cache = require('../../cache')

const command = 'update [name]'

const description = 'update the local cache'

const builder = (yargs) => {
  yargs.positional('name', {
    type: 'string',
    describe: 'the page title to cache',
    default: null
  })
}

const help = (name) => `\
Error: No pages found matching for query "${name}".

This search is case sensitive.

Are you sure you have the spelling correct?`

const handler = async (argv) => {
  if (argv.name) {
    try {
      const quotes = await wikiquote.list(argv.name)
      cache.set(argv.name, quotes)
      console.log(`Updated "${argv.name}" in cache.`)
    } catch (err) {
      console.error(help(argv.name))
    }
  } else {
    try {
      const entries = cache.keys()
      await Promise.all(entries.map(async (k) => {
        const quotes = await wikiquote.list(k)
        cache.set(k, quotes)
      }))
      console.log(`Updated ${entries.length} cache entries.`)
    } catch (err) {
      console.error(help(argv.name))
    }
  }
}

module.exports = {
  command,
  description,
  builder,
  handler
}
