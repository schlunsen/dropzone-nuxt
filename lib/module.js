// import { createMiddleware } from './module.middleware'
// import plugin from './module.plugin'

const optionName = 'nuxt-dropzone'

module.exports = function(moduleOptions) {
  const consola = require('consola')
  this.options.css.push('vue2-dropzone/dist/vue2Dropzone.min.css')
  
  const options = Object.assign(
    {},
    this.options[optionName],
    moduleOptions || {}
  )

  const { enabled } = options
  if (enabled === false) {
    consola.info('Skip activation of nuxt-dropzone module')
    return false
  }
  consola.info('Add nuxt-dropzone module to server middleware')
  

  this.addPlugin({src: path.resolve(__dirname, 'module.plugin.js'), ssr: false, options})
  
  return true

}

module.exports.meta = require('../package.json')
