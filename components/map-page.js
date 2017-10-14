import BackBar from './back-bar'
import React from 'react'
import PropTypes from 'prop-types'

MapPage.defaultProps = {}

MapPage.propTypes = {
  url: PropTypes.string.isRequired
}

export default function MapPage({ url }) {
  return (
    <div className="h-100">
      <BackBar />
      <div
        className="overlay"
        onClick={e => (e.target.style.pointerEvents = 'none')}
      />
      <iframe src={url} width="100%" height="100%" />
    </div>
  )
}
