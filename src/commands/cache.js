const command = 'cache <cmd>'

const description = 'issue cache commands'

const builder = (yargs) => yargs.commandDir('cache')

const handler = async (argv) => { }

module.exports = {
  command,
  description,
  builder,
  handler
}
