import dataHandler from './data-handler'
import GenericList from './generic-list'
import React from 'react'
import PropTypes from 'prop-types'
import { Resource } from './prop-types'

Section.defaultProps = {
  search: true,
}

Section.propTypes = {
  resource: Resource,
  search: PropTypes.bool,
}

export default function Section({ resource, search }) {
  const List = dataHandler(GenericList, resource)

  const extra = resource.extraContent ? resource.extraContent() : null

  return (
    <div>
      <h3 className="text-center mb-4">
        <span className="mr-3">️{resource.icon}</span>
        {resource.title}
      </h3>
      {resource.description && (
        <p className="lead mb-5 text-center">{resource.description}</p>
      )}
      {extra}
      <List search={search} />
    </div>
  )
}
