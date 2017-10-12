const React = require('react')

function AddressLink({ address }) {
  return (
    <a href={`https://maps.google.com/?q=${address}`} target="_blank">
      {address}
    </a>
  )
}

module.exports = AddressLink
