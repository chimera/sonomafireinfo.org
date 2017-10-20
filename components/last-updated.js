import human from 'human-date'
import React from 'react'

export default function LastUpdated({ date }) {
  if (!date) {
    return null
  }

  date = new Date(date)
  const relative = human.relativeTime(date)

  return (
    <small className="float-md-right text-muted ml-md-1">
      <time className="text-muted text-sm" title={date.toString()}>
        <small>Updated {relative}</small>
      </time>
    </small>
  )
}
