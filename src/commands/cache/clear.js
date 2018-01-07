const cache = require('../../cache')

const command = 'clear [name]'

const description = 'clear the local cache'

const builder = (yargs) => {
  yargs.positional('name', {
    type: 'string',
    describe: 'the page title to cache'
  })
}

const help = `Error: Couldn't clear the cache.`

const handler = async (argv) => {
  if (argv.name) {
    try {
      await cache.clear(argv.name)
      console.log(`Cleared "${argv.name}" from cache.`)
    } catch (err) {
      console.error(help, err)
    }
  } else {
    try {
      await cache.clear()
      console.log(`Cleared cache.`)
    } catch (err) {
      console.error(help, err)
    }
  }
}

module.exports = {
  command,
  description,
  builder,
  handler
}
