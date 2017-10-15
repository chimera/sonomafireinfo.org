import camelCaseKeys from 'camelcase-keys'

// Take the weird format that AirTable gives us and
// make it more usable.
function normalizeData(fields) {
  return fields
    .map(item => {
      const data = camelCaseKeys(item.fields)
      data.id = item.id
      return data
    })
    .filter(item => {
      // If the item only has an ID, it is
      // considered empty.
      return Object.keys(item).length > 1
    })
}

export default function fetchResources(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        resolve(normalizeData(json.items))
      })
      .catch(error => {
        reject(error)
        console.log('ERROR:', error)
      })
  })
}
