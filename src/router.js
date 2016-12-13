import Router from 'cerebral-router'

export default Router({
  // Route definitions
  routes: {
    '/': 'app.routed'
  },
  query: true, // Query support
  onlyHash: true,
  baseUrl: '/' // Only handle url changes on nested path
})
