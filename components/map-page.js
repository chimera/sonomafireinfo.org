import BackBar from './back-bar'
import React from 'react'
import PropTypes from 'prop-types'

MapPage.defaultProps = {}

MapPage.propTypes = {}

export default function MapPage({ height }) {
  return (
    <div className="h-100">
      <BackBar />
      <div
        className="overlay"
        onClick={e => (e.target.style.pointerEvents = 'none')}
      />
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1geX3Dfkc3wx3SY1Eqobmh67uSxE"
        width="100%"
        height="100%"
      />
    </div>
  )
}
