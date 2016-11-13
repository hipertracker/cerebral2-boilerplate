// example of the factory using in memory caching for the same requests

export default function getHttp(url, payload={}) {

  function action({services, state, output, cache}) {
    
    const cacheKey = JSON.stringify([url,payload])

    const data = cache.get(cacheKey)
    if (data !== null) return output.success({data})

    services.http.get(url, {query: payload})
      .then(response => {
        const data = response.result
        cache.set(cacheKey, data)
        output.success(data)
      })
      .catch(response => {
        output.error(response.result)
      })
  }
}
