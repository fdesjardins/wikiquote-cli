/* global describe, it */

const assert = require('chai').assert
const exec = require('./utils/execute-command')

describe('wikiquote', () => {
  it('should run tests', () => {
    return assert(1 !== 2)
  })

  it('should print a help screen', () => {
    it('should have a `random` command', async () => {
      const text = await exec()
      assert(text.match(/Commands:/))
      assert(text.match(/Options:/))
      assert(text.match(/Examples:/))
    })
  })

  it('should print a version number', () => {
    it('should have a `random` command', async () => {
      const text = await exec('-v')
      assert(text.split('.').length === 3)
    })
  })
})
