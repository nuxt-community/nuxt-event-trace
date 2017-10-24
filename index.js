const { resolve } = require('path')

const resolvePath = (...args) => resolve(__dirname, ...args)

module.exports = function trace (options) {
  if (options.apiTrace) {
    this.addPlugin({
      src: resolvePath('templates/directive.js'),
      fileName: 'event-trace-directive.js',
      options
    })
  }
}
