const wikiquote = require('wikiquote')

const cache = require('../../cache')

const command = 'list'

const description = 'list pages stored in the cache'

const builder = (yargs) => {}

const help = `Error: Couldn't list pages in the cache.`

const handler = async (argv) => {
  try {
    const cacheStats = cache.stats()
    if (cacheStats.length > 0) {
      cacheStats.map(stats => console.log(`${stats.title} - ${stats.quotes} entries`))
    } else {
      console.log('No cache entries found.')
    }
  } catch (err) {
    console.error(help, err)
  }
}

module.exports = {
  command,
  description,
  builder,
  handler
}
