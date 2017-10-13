import ContactLinks from './contact-links'
import Fuse from 'fuse.js'
import LastUpdated from './last-updated'
import Link from './link'
import Note from './note'
import React from 'react'
import ShelterProperties from './shelter-properties'
import PropTypes from 'prop-types'
import { Item } from './prop-types'

GenericList.defaultProps = {}

GenericList.propTypes = {
  items: PropTypes.arrayOf(Item),
}

export default function GenericList({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, key) => {
        return (
          <li className="list-group-item" key={key}>
            {item.lastUpdated && (
              <small className="float-right text-muted ml-2">
                <LastUpdated date={item.lastUpdated} />
              </small>
            )}

            <h5>
              {item.priority && <span class="mr-2">⚠️</span>}
              {item.closed ? (
                <span>
                  <del>{item.name}</del>
                  <small className="ml-3">⚠️ CLOSED</small>
                </span>
              ) : (
                <Link
                  url={item.website || item.source}
                  label={item.name || item.description}
                />
              )}
            </h5>

            <ContactLinks item={item} />
            <ShelterProperties item={item} />

            {item.needs && <Note label="Needs" note={item.needs} />}
            {item.notes && <Note label="Notes" note={item.notes} />}
            {item.donationNeeds && (
              <Note label="Donation needs" note={item.donationNeeds} />
            )}
            {item.volunteerNeeds && (
              <Note label="Volunteer needs" note={item.volunteerNeeds} />
            )}
          </li>
        )
      })}
    </ul>
  )
}
