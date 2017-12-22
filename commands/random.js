const wikiquote = require('wikiquote')

const usage = 'random [name]'

const description = 'get a random quote from a person'

const yargs = (yargs) => {
  yargs.positional('name', {
    type: 'string',
    describe: 'the person\'s name'
  })
}

const toPlain = (quote, name) => `\
${quote} -- ${name}\
`

const plainError = (name) => `\
Error: No quotes found matching the name "${name}".

This command is case sensitive.

Try searching first using \`wikiquote search [name]\` and using the "Title"
field value returned as the [name] in the \`wikiquote random\` command.`

const handler = (argv) => {
  wikiquote.getRandomQuote(argv.name)
    .then(quote => console.log(toPlain(quote, argv.name)))
    .catch(() => {
      console.log(plainError(argv.name))
    })
}

module.exports = [ usage, description, yargs, handler ]
