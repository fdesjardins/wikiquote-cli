const wikiquote = require('wikiquote')

const cache = require('../../cache')

const command = 'add <name>'

const description = 'cache quotes for a give page'

const builder = (yargs) => {
  yargs.positional('name', {
    type: 'string',
    describe: 'the page title to cache'
  })
}

const help = `Error: Couldn't add data to the cache.`

const handler = async (argv) => {
  try {
    const quotes = await wikiquote.list(argv.name)
    cache.set(argv.name, quotes)
    console.log(`Added "${argv.name}" to cache.`)
  } catch (err) {
    console.log(help, err)
  }
}

module.exports = {
  command,
  description,
  builder,
  handler
}
