import React from 'react'
import PropTypes from 'prop-types'

Note.defaultProps = {}

Note.propTypes = {
  label: PropTypes.string,
  note: PropTypes.string,
}

export default function Note({ label, note }) {
  if (!note) {
    return null
  }

  return (
    <div className="mt-2 text-muted">
      <small>
        {label && <strong className="mr-2 text-uppercase">{label}:</strong>}
        {note}
      </small>
    </div>
  )
}
