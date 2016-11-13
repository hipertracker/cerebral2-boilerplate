// https://cerebral.github.io/api/01_controller.html

import {Controller} from 'cerebral'
import Router from 'cerebral/router'
import Devtools from 'cerebral/devtools'
import HttpProvider from 'cerebral-provider-http'
import app from './modules/App'

// API: https://cerebral.github.io/api/01_controller.html
const controller = Controller({
  options: {
    // Use strict rendering
    strictRender: true,
    // Expose props.signals with all signals in components
    signalsProp: false
  },

  // https://cerebral.github.io/getting-real/03_devtools.html
  devtools: Devtools({
    // Time travel
    storeMutations: true,
    // Warnings on mutating outside "state" API
    preventExternalMutations: true,
    // Warnings when passing in non-serializable data to signals and state tree
    enforceSerializable: true,
    // Warnings when strict render path usage is wrong
    verifyStrictRender: true
  }),

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
    welcome: 'Hellow Cerebral 2!'
  },

  // API: https://cerebral.github.io/api/06_providers.html
  providers: [
    
    // https://github.com/cerebral/cerebral/tree/master/packages/cerebral-provider-http
    // Reember that this provide uses plain XMLHttpRequest object with all AJAX power
    // inluding aborting requests, cors, etc.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    HttpProvider({

      // enable cross-origin resource sharing
      cors: true,

      // Set a path prefix to all requests,
      // f.ex. "/api"
      baseUrl: '',

      // Sends cookies to cross domain request
      withCredentials: false,

      // Allow cross domain request. It adjusts the
      // request headers to allowed. Note that server
      // has to allow this request as well
      cors: false,

      // Headers will be merged with existing headers,
      // these are the default ones
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json;charset=UTF-8'
      },

      // You can change how the request is sent to the
      // server, by default we handle JSON and
      // x-www-form-urlencoded
      onRequest: function (xhr, options) {
       // Default implementation taking care of cors, credentials,
       // headers and the data to be passed
      },

      // Configure how responses are resolved and rejected
      onResponse: function (response, resolve, reject) {
       // Default implementation which resolves status code
       // 200 - 299, and rejects the others. It also parses
       // to JSON or x-www-form-urlencoded based on header
      }
    })
  ],

  // Defines the top level signals
  // Concept: https://cerebral.github.io/concepts/02_signals.html
  // API: https://cerebral.github.io/api/03_signals.html
  signals: {},

  // Defines the top level modules
  modules: {
    app
  }
})
