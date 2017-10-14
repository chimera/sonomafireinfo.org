import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

BackBar.defaultProps = {}

BackBar.propTypes = {}

export default function BackBar() {
  return (
    <div class="container-fluid my-4 text-center">
      <Link to="/">
        <big>← Back</big>
      </Link>
    </div>
  )
}
