// API: https://cerebral.github.io/api/04_modules.html
import home from './modules/home'
console.log('PRZED')
export default (module) => {
  console.log('INSIDE')
  module.name // Name of module
  module.path // Full path to module
  module.controller // The controller the module is attached to

  return {
    state: {
      welcome: 'Hello Cerebral 2!'
    },
    // signals: {},
    modules: {
      home
    }
  }
}
