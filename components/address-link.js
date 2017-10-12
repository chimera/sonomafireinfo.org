import React from 'react'

export default function AddressLink({ address }) {
  return (
    <a href={`https://maps.google.com/?q=${address}`} target="_blank">
      {address}
    </a>
  )
}
