import React from 'react'
import PropTypes from 'prop-types'

Note.defaultProps = {}

Note.propTypes = {
  label: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
}

export default function Note({ label, note }) {
  return (
    <div className="mt-2 text-muted">
      <small>
        <strong className="mr-2 text-uppercase">{label}:</strong>
        {note}
      </small>
    </div>
  )
}
