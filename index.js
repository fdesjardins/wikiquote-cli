#!/usr/bin/env node

const yargs = require('yargs')
const pkg = require('./package.json')

const init = () => {
  return yargs
    .usage('Get quotes from Wikiquote\n\nUsage: $0 <cmd> [options]')
    .commandDir('src/commands', { recurse: false })
    .example('wikiquote random "Steve Jobs"')
    .example('wikiquote search "bill gates"')
    .help('help').alias('h', 'help')
    .version('v', pkg.version).alias('v', 'version')
    .completion('completion')
    .demand(1)
    .wrap(72)
    .argv
}

module.exports = init()
