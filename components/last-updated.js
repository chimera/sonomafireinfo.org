import human from 'human-date'
import React from 'react'

export default function LastUpdated({ date }) {
  date = new Date(date)

  const relative = human.relativeTime(date)

  return (
    <time className="text-muted text-sm" title={date.toString()}>
      <small>Updated {relative}</small>
    </time>
  )
}
