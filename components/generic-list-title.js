import ExternalLink from './external-link'
import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './prop-types'

GenericListTitle.defaultProps = {}

GenericListTitle.propTypes = {
  item: Item,
}

export default function GenericListTitle({ item }) {
  if (!item) {
    return null
  }

  return (
    <div>
      {item.priority && <span class="mr-2">⚠️</span>}
      {item.closed ? (
        <span>
          <del>{item.name}</del>
          <small className="ml-3">⚠️ CLOSED</small>
        </span>
      ) : (
        <ExternalLink url={item.website || item.source || item.facebookLink}>
          {item.name || item.description}
        </ExternalLink>
      )}
      {item.data && <strong class="ml-3">{item.data}</strong>}
    </div>
  )
}
