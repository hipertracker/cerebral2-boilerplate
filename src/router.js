import Router from 'cerebral-router'

export default Router({
  // Route definitions
  routes: {
    '/': 'app.routed'
  },
  query: false, // Query support
  onlyHash: true, // Use hash urls
  baseUrl: '/' // Only handle url changes on nested path
})
