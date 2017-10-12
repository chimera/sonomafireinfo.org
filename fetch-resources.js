function fetchResources(url, type) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(`RESPONSE from ${type}:`, json)
        resolve(json)
      })
      .catch(error => {
        reject(error)
        console.log('ERROR:', error)
      })
  })
}

module.exports = fetchResources
