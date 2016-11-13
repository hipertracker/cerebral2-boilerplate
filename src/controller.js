// https://cerebral.github.io/api/01_controller.html

import {Controller} from 'cerebral'
import Router from 'cerebral/router'
import Devtools from 'cerebral/devtools'
import http from './providers/http'
import app from './modules/App'

// API: https://cerebral.github.io/api/01_controller.html
const controller = Controller({
  options: {
    // Use strict rendering
    strictRender: true,
    // Expose props.signals with all signals in components
    signalsProp: false
  },

  // // https://cerebral.github.io/getting-real/03_devtools.html
  // devtools: Devtools({
  //   // Time travel
  //   storeMutations: true,
  //   // Warnings on mutating outside "state" API
  //   preventExternalMutations: true,
  //   // Warnings when passing in non-serializable data to signals and state tree
  //   enforceSerializable: true,
  //   // Warnings when strict render path usage is wrong
  //   verifyStrictRender: true
  // }),

  // API: https://cerebral.github.io/api/08_router.html
  router: Router({
    routes: {
      '/': 'home.routed',
    }, // Route definitions
    query: false, // Query support
    onlyHash: false, // Use hash urls
    baseUrl: '/' // Only handle url changes on nested path
  }),

  // Defines the top level state
  // API: https://cerebral.github.io/api/02_state.html
  state: {
    welcome: 'Hello Cerebral 2!'
  },

  // API: https://cerebral.github.io/api/06_providers.html
  providers: [
    http,
  ],

  // Defines the top level signals
  // Concept: https://cerebral.github.io/concepts/02_signals.html
  // API: https://cerebral.github.io/api/03_signals.html
  // signals: {},

  // Defines the top level modules
  modules: {
    app
  }
})
