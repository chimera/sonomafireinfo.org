import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './prop-types'

ShelterProperties.defaultProps = {}

ShelterProperties.propTypes = {
  item: Item,
}

export default function ShelterProperties({ item }) {
  const capacity = item.atCapacity
  const elder = item.elderCare
  const spanish = item.hablanEspanol
  const redCross = item.redCrossFacility

  if (capacity || elder || spanish || redCross) {
    return (
      <div className="mt-2">
        <small>
          {capacity && (
            <strong className="mr-3 text-danger" title="At capacity">
              <span className="mr-2">❌</span> At Capacity
            </strong>
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

  return null
}
