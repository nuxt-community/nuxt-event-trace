import axios from 'axios'

export default ({ app: { router } }, inject) => {
  // eslint-disable-next-line no-constant-condition
  if (!'<%= options.pageApi %>') {
    console.warn('Warn: pageApi is not found in event-trace module options')
    return
  }
  router.afterEach(function (to, from) {
    const info = {
      from: from.name,
      fromPath: from.path,
      to: to.name,
      toPath: to.path,
      params: to.params,
      time: new Date()
    }
    axios.post('<%= options.pageApi %>', info)
  })
}
