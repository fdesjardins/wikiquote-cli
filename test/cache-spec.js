/* global describe, it */

const assert = require('chai').assert
const exec = require('./utils/execute-command')

describe('cache', () => {
  it('should add cache entries', async () => {
    await exec('cache add "Steve Jobs"')
  })

  it('should update individual cache entries', async () => {
    await exec('cache add "Steve Jobs"')
    await exec('cache update "Steve Jobs"')
  })

  it('should update the entire cache', async () => {
    await exec('cache add "Steve Jobs"')
    await exec('cache add "Robin Williams"')
    await exec('cache update')
  })

  it('should clear the cache', async () => {
    await exec('cache clear "Steve Jobs"')
    await exec('cache clear')
  })

  it('should list cache entries', async () => {
    await exec('cache clear')
    await exec('cache list')
  })
})
