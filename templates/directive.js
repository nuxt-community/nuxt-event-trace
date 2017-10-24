import Vue from 'vue'
import axios from 'axios'

class TraceEvent {
  bind (el, binding, vnode) {
    if (!binding) return
    if (typeof binding.value !== 'object') {
      console.warn('v-trace value is not a object in ' + binding.rawName)
      return
    }
    // eslint-disable-next-line no-constant-condition
    if (!'<%= options.apiTrace %>') {
      console.warn('Warn: apiTrace is not found in event-trace module options')
      return
    }

    // passing parameters as object
    const {category, action, label, value, nodeId} = binding.value
    const info = {category, action, label, value, nodeId, time: new Date()}

    // use modifier as events
    const events = Object.keys(binding.modifiers).map(modifier => {
      if (binding.modifiers[modifier]) {
        return modifier
      }
    })

    // addEventListener for each event, call trackEvent api
    if (!events.length) events.push('click') // listen click event by default
    events.forEach((event) => {
      el.addEventListener(event, () => {
        axios.post('<%= options.apiTrace %>', info)
      }, false)
    })
  }
}

Vue.directive('trace', new TraceEvent())
