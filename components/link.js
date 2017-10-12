import React from 'react'

export default function Link({ label, url }) {
  if (!url) {
    return <span>{label}</span>
  }

  return (
    <a href={url} target="_blank">
      {label}
    </a>
  )
}
