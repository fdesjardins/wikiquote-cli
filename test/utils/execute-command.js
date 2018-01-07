const childProcess = require('child_process')

module.exports = (cmd) => new Promise((resolve, reject) => {
  childProcess.exec(`node index.js ${cmd}`, 'utf8', (err, stdout, stderr) => {
    return err
      ? reject(err)
      : resolve(stdout.toString())
  })
})
