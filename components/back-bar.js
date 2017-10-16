import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

BackBar.defaultProps = {}

BackBar.propTypes = {}

export default function BackBar() {
  return (
    <Link to="/">
      <big>← Back</big>
    </Link>
  )
}
