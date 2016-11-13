// Cerebral's provider API: https://cerebral.github.io/api/06_providers.html

// Example of in memory cache:

// https://github.com/giraysam/boomerang-cache
import BoomerangCache from 'boomerang-cache'

const boomerang = BoomerangCache.create('bucket_1')
boomerang.clear() // clear all memory cache when the page is reloaded

export default function cacheContextProvider(context, execution, controller) {
  context.cache = boomerang
  return context
}