const wikiquote = require('wikiquote')

const command = 'search <query>'

const description = 'search for a page name'

const builder = (yargs) => {
  yargs.positional('query', {
    type: 'string',
    describe: 'the query (persons\'s name, etc.)'
  })
}

const toPlain = (json) => `\
Title: ${json.title}
Page ID: ${json.pageid}
Word Count: ${json.wordcount}\
`

const help = (query) => `\
Error: No pages found matching for query "${query}".

This search is case insensitive.

Are you sure you have the spelling correct?`

const handler = (argv) => {
  wikiquote.search(argv.query).then(pages => {
    if (pages.length > 0) {
      pages.map(p => console.log(`${toPlain(p)}\n`))
    } else {
      console.log(help(argv.query))
    }
  }).catch(err => {
    console.log(help(argv.query), err)
  })
}

module.exports = {
  command,
  description,
  builder,
  handler
}
