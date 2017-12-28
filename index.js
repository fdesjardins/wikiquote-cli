#!/usr/bin/env node

const yargs = require('yargs')
const pkg = require('./package.json')

const commands = require('./commands')

let cli = yargs
  .usage('Get quotes from Wikiquote\n\nUsage: wikiquote [action] [options]')
  .command(...commands.random)
  .command(...commands.search)
  .command(...commands.list)
  .example('wikiquote random "Steve Jobs"')
  .example('wikiquote search "bill gates"')
  .help('help').alias('h', 'help')
  .version('v', pkg.version).alias('v', 'version')
  .completion('completion')

if (require.main === module) {
  cli.demand(1)
}

module.exports = cli.argv
