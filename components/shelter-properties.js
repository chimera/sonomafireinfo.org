import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './prop-types'

ShelterProperties.defaultProps = {}

ShelterProperties.propTypes = {
  item: Item,
}

export default function ShelterProperties({ item }) {
  const capacity = item.fields['At capacity']
  const elder = item.fields['Elder Care']
  const spanish = item.fields['Hablan español']
  const redCross = item.fields['Red Cross Facility']

  if (!capacity || !elder || !spanish || !redCross) {
    return null
  }

  return (
    <div className="mt-2">
      <small>
        {capacity && (
          <span className="mr-3" title="At capacity">
            <span className="mr-2">❌</span> At Capacity
          </span>
        )}
        {elder && (
          <span className="mr-3" title="Has elder care">
            <span className="mr-2">👵</span> Elder Care
          </span>
        )}
        {spanish && (
          <span className="mr-3" title="Hablan Español">
            <span className="mr-2">🇲🇽</span> Hablan Español
          </span>
        )}
        {redCross && (
          <span className="mr-3" title="Red Cross Facility">
            <span className="mr-2">🏥</span> Red Cross Facility
          </span>
        )}
      </small>
    </div>
  )
}
