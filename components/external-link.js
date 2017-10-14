import React from 'react'
import PropTypes from 'prop-types'

ExternalLink.defaultProps = {}

ExternalLink.propTypes = {
  url: PropTypes.string,
}

export default function ExternalLink({ children, url }) {
  if (!url) {
    return <span>{children}</span>
  }

  return (
    <a href={url} target="_blank">
      {children}
    </a>
  )
}
