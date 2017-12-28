const fs = require('fs')
const path = require('path')

const config = {
  cachePath: path.join(__dirname, '../.wikiquote-cache/.cache')
}

const loadCache = (cachePath = config.cachePath) => {
  try {
    return JSON.parse(fs.readFileSync(cachePath).toString())
  } catch (err) {
    if (err.code.match(/ENOENT/)) {
      fs.mkdir(path.dirname(cachePath), () => {})
    }
    return {}
  }
}

const saveCache = (cache, cachePath = config.cachePath) => {
  if (Object.keys(cache).length === 0) {
    fs.unlinkSync(cachePath)
  } else {
    fs.writeFileSync(cachePath, JSON.stringify(cache))
  }
}

const cache = loadCache()

exports.get = async (key) => {
  return cache[key]
}

exports.set = async (key, value) => {
  cache[key] = value
  saveCache(cache)
}

exports.keys = () => {
  return Object.keys(cache)
}

exports.stats = () => {
  return Object.keys(cache).map(k => {
    return {
      title: k,
      quotes: cache[k].length
    }
  })
}

exports.clear = (key) => {
  if (key === undefined) {
    Object.keys(cache).map(k => delete cache[k])
  } else if (cache[key] !== undefined) {
    delete cache[key]
  }
  saveCache(cache)
}
