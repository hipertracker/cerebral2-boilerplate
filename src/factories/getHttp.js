// example of the factory using in caching for the same requests

export default function getHttp(url, payload, useCache=true) {
  function action({http, path, cache}) {
    let cacheKey
    if (useCache) {
      cacheKey = JSON.stringify([url, payload])
      const data = cache.get(cacheKey)
      if (data !== null) {
        return path.success({data})
      }
    }
    return http.get(url, {query: payload})
      .then(response => {
        const data = response.result
        if (useCache) {
          cache.set(cacheKey, data)
        }
        return path.success(data)
      })
      .catch(response => {
        return path.error(response.result)
      })
  }
  return action
}
