#!/usr/bin/env node

const yargs = require('yargs')
const pkg = require('./package.json')

const commands = require('./commands')

let cli = yargs
  .usage('Get quotes from Wikiquote.\nUsage: wikiquote [action] [options]')
  .command(...commands.random)
  .command(...commands.search)
  .example('wikiquote random "Steve Jobs"')
  .help('help').alias('h', 'help')
  .version('v', pkg.version).alias('v', 'version')

if (require.main === module) {
  cli.demand(1)
}

module.exports = cli.argv

// const options = {
//   action: argv._[0],
//   target: argv._[1]
// }

// if (options.action === 'random') {
//
// }
//
// if (options.action === 'search') {
//   wikiquote.searchPeople(options.target).then(page => console.log(page))
// }
