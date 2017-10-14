import dataHandler from './data-handler'
import GenericList from './generic-list'
import PageWrapper from './page-wrapper'
import React from 'react'
import PropTypes from 'prop-types'
import { Resource } from './prop-types'

Section.defaultProps = {}

Section.propTypes = {
  resource: Resource,
}

export default function Section({ resource }) {
  const List = dataHandler(GenericList, resource)

  const extra = resource.extraContent ? resource.extraContent() : null

  return (
    <PageWrapper>
      <h3 className="text-center mb-4">
        <span className="mr-3">️{resource.icon}</span>
        {resource.title}
      </h3>
      {resource.description && (
        <p className="lead mb-5 text-center">{resource.description}</p>
      )}
      {extra}
      <List />
    </PageWrapper>
  )
}
