// example of the factory using in memory caching for the same requests

export default function getHttp(url, payload) {
  function action({http, path, cache}) {
    return http.get(url, {query: payload})
      .then(response => {
        console.log("SUCCESS")
        const data = response.result
        return path.success(data)
      })
      .catch(response => {
        console.log("ERROR")
        return path.error(response.result)
      })
  }
  return action
}


// const cacheKey = JSON.stringify([url, payload])
// const data = cache.get(cacheKey)
//
// if (data !== null) return path.success({data})


// cache.set(cacheKey, data)