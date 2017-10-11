const React = require('react')

function LastUpdated({ date }) {
  date = new Date(date)

  // Pad minutes with leading zero if necessary.
  const minutes = ('0' + date.getMinutes()).slice(-2)
  const formatted = `${date.getMonth() +
    1}/${date.getDate()} at ${date.getHours()}:${minutes}`

  return (
    <time className="text-muted text-sm" title={date.toString()}>
      <small>Updated: {formatted}</small>
    </time>
  )
}

module.exports = LastUpdated
