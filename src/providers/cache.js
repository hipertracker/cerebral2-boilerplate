
import BoomerangCache from 'boomerang-cache'
// https://github.com/giraysam/boomerang-cache

const boomerang = BoomerangCache.create('bucket_1')
boomerang.clear() // clear all cache when the page is reloaded

export default function cacheContextProvider(context, execution, controller) {
  context.cache = boomerang
  return context
}