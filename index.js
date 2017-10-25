const { resolve } = require('path')

const resolvePath = (...args) => resolve(__dirname, ...args)

module.exports = function trace (options) {
  if (options.routeTrace) {
    this.addPlugin({
      src: resolvePath('templates/route.js'),
      fileName: 'event-trace-route.js',
      options
    })
  }
  if (options.apiTrace) {
    this.addPlugin({
      src: resolvePath('templates/directive.js'),
      fileName: 'event-trace-directive.js',
      options
    })
  }
}
