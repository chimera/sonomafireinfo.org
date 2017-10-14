import React from 'react'
import PropTypes from 'prop-types'

ExternalLink.defaultProps = {
  className: ''
}

ExternalLink.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string
}

export default function ExternalLink({ children, className, url }) {
  if (!url) {
    return <span className={className}>{children}</span>
  }

  return (
    <a href={url} target="_blank" className={className}>
      {children}
    </a>
  )
}
