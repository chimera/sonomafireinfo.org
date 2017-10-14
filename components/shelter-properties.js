import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './prop-types'

ShelterProperties.defaultProps = {}

ShelterProperties.propTypes = {
  item: Item,
}

export default function ShelterProperties({ item }) {
  const animals = item.animals
  const capacity = item.atCapacity
  const elder = item.elderCare
  const spanish = item.hablanEspanol
  const redCross = item.redCrossFacility
  const medical = item.medical

  if (animals || capacity || elder || spanish || redCross) {
    return (
      <div className="mt-2">
        <small>
          {capacity && (
            <strong className="mr-3 text-danger" title="At capacity">
              <span className="mr-2">❌</span> At Capacity
            </strong>
          )}
          {animals && (
            <strong className="mr-3 text-danger" title="Accepts animals">
              <span className="mr-2">🐶</span> Accepts Animals
            </strong>
          )}
          {elder && (
            <strong className="mr-3" title="Has elder care">
              <span className="mr-2">👵</span> Elder Care
            </strong>
          )}
          {spanish && (
            <strong className="mr-3" title="Hablan Español">
              <span className="mr-2">🇲🇽</span> Hablan Español
            </strong>
          )}
          {redCross && (
            <strong className="mr-3" title="Red Cross Facility">
              <span className="mr-2">🏥</span> Red Cross Facility
            </strong>
          )}
          {medical && (
            <strong className="mr-3" title="Medical">
              <span className="mr-2">👩‍⚕️</span> Medical
            </strong>
          )}
        </small>
      </div>
    )
  }

  return null
}
