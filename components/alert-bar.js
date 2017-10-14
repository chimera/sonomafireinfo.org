import React from 'react'
import PropTypes from 'prop-types'

AlertBar.defaultProps = {}

AlertBar.propTypes = {}

export default function AlertBar({}) {
  return (
    <div className="alert-bar py-3 bg-danger text-center text-white">
      <div>Signup for live Nixle alerts:</div>
      <div>
        Text your ZIP code to{' '}
        <a href="tel:888777" className="text-warning">
          888-777
        </a>
      </div>
    </div>
  )
}
