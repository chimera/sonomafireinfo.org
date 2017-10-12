import ErrorBoundary from './error-boundary'
import React from 'react'
import PropTypes from 'prop-types'
import ScrollUp from './scroll-up'
import Section from './section'
import { Resource } from './prop-types'

Application.defaultProps = {}

Application.propTypes = {
  resources: PropTypes.arrayOf(Resource),
}

export default function Application({ resources }) {
  return (
    <ErrorBoundary>
      <ScrollUp scrollStepInPx="100" delayInMs="10" />
      {resources.map((resource, key) => (
        <Section key={key} resource={resource} />
      ))}
    </ErrorBoundary>
  )
}
