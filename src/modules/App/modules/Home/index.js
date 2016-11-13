// API: https://cerebral.github.io/api/04_modules.html

import loadData from './actions/loadData'

export default {
  state: {},
  signals: {
    routed: loadData,
  },
  modules: {}
}
