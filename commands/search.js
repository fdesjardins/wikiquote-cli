const wikiquote = require('wikiquote')

const usage = 'search [name]'

const description = 'search for a page name'

const yargs = (yargs) => {
  yargs.positional('search', {
    type: 'string',
    describe: 'the query (persons\'s name, etc.)'
  })
}

const toPlain = (json) => `\
Title: ${json.title}
Page ID: ${json.pageid}
Word Count: ${json.wordcount}
Timestamp: ${json.timestamp}\
`

const plainError = (name) => `\
Error: No pages found matching for query "${name}".

This search is case insensitive.

Are you sure you have the spelling correct?`

const handler = (argv) => {
  wikiquote.searchPeople(argv.name)
    .then(page => console.log(toPlain(page)))
    .catch(() => console.log(plainError(argv.name)))
}

module.exports = [ usage, description, yargs, handler ]
