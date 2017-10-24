const { resolve } = require('path')

const resolvePath = (...args) => resolve(__dirname, ...args)

module.exports = function trace (options) {
  this.addPlugin({
    src: resolvePath('templates/directive.js'),
    fileName: 'event-trace-directive.js',
    options
  })
}
