import HttpProvider from 'cerebral-provider-http'

// https://github.com/cerebral/cerebral/tree/master/packages/cerebral-provider-http

// Remember that this provider uses plain XMLHttpRequest object with all it's power
// See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

const http = HttpProvider({
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

export default http
