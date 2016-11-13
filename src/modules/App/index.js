// API: https://cerebral.github.io/api/04_modules.html
import loadData from './chains/loadData'

export default {
  state: {
    welcome: 'Hello Cerebral 2!'
  },
  signals: {
    routed: loadData
  },
  // modules: {}
}

