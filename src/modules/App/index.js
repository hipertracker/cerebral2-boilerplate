// API: https://cerebral.github.io/api/04_modules.html
import home from './modules/home'

export default (module) => {
  module.name // Name of module
  module.path // Full path to module
  module.controller // The controller the module is attached to

  return {
    state: {},
    signals: {},
    modules: {
      home
    }
  }
}
