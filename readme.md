## Module for event trace in Nuxt.js

### Install

```bash
$ yarn add nuxt-event-trace
```

Add module into `nuxt.config.js`.

1. `elementApi` is api url for dom elements tracking.
1. `pageApi` is api url for pages routing tracking.

```js
modules: [
  ['./client/modules/event-trace', {
    elementApi: "http://example.com/api/trace",
    pageApi: "http://example.com/route/trace"
  }]
]
```

### Trace on routes

If defined `pageApi`, all routes will be logged after routing.

### Trace on component

Define `v-trace` directive on `component`.

```html
<el-input v-model="userName" :placeholder="User"
      v-trace.mouseleave="{category:'login', action:'user', label:'User'}">
</el-input>
<el-button v-model="userName" :placeholder="User"
      v-trace="{category:'login', action:'login', label:'Login'}">
</el-button>
```

1. Value items include: `category`, `action`, `label`, `value`, `nodeId`
1. [Event Type](https://developer.mozilla.org/en-US/docs/Web/Events) is defined as modifiers, `click` is default if no type specified.

```html
<input v-trace={}> <!-- click event -->
<input v-trace.keydown={}> <!-- specified event -->
<input v-trace.dbclick.keyup={}> <!-- events can ben chained -->
```
