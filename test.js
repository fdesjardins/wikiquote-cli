/* global describe, it */

const childProcess = require('child_process')
const assert = require('chai').assert
const wikiquote = require('./')

const exec = (cmd) => new Promise((resolve, reject) => {
  childProcess.exec(`node index.js ${cmd}`, 'utf8', (err, stdout, stderr) => {
    return err
      ? reject(err)
      : resolve(stdout.toString())
  })
})

describe('wikiquote', () => {
  it('should run tests', () => {
    return assert(1 !== 2 && wikiquote !== undefined)
  })

  describe('commands', () => {
    it('should have a `random` command', async () => {
      const text = await exec('random "Steve Jobs"')
      assert(text.match(/-- Steve Jobs/))
    })

    it('should have a `search` command', async () => {
      const text = await exec('search "Steve Jobs"')
      assert(text.match(/Title: Steve Jobs/))
    })

    it('should have a `list` command', async () => {
      const text = await exec('list "Steve Jobs"')
      assert(text.split('\n\n--\n\n').length > 0)
    })
  })

  describe('command errors', () => {
    it('should output errors for the `random` command', async () => {
      const text = await exec('random "Steve Jobss"')
      assert(text.match(/Error: No quotes/))
    })

    it('should output errors for the `search` command', async () => {
      const text = await exec('search "Steve Jobss"')
      assert(text.match(/Error: No pages/))
    })

    it('should output errors for the `list` command', async () => {
      const text = await exec('list "Steve Jobss"')
      assert(text.match(/Error: No pages/))
    })
  })
})
