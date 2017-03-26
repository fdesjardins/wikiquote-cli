#!/usr/bin/env node

const yargs = require('yargs')
const wikiquote = require('wikiquote')
const pkg = require('./package.json')

let cli = yargs
  .usage('Get quotes from Wikiquote.\nUsage: wikiquote [action] [options]')
  .example('wikiquote random "Steve Jobs"')
  .help('help')
  .alias('h', 'help')
  .version('v', pkg.version)
  .alias('v', 'version')

if (require.main === module) {
  cli.demand(1)
}

const argv = cli.argv

const options = {
  action: argv._[0],
  target: argv._[1]
}

if (options.action === 'random') {
  wikiquote.getRandomQuote(options.target).then(quote => console.log(quote))
}
