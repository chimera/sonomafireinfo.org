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
        const fields = item.fields
        return (
          <li className="list-group-item" key={key}>
            {fields['Last Updated'] && (
              <small className="float-right text-muted ml-2">
                <LastUpdated date={fields['Last Updated']} />
              </small>
            )}

            <h5>
              {fields.Closed ? (
                <span>
                  <del>{fields.Name}</del>
                  <small className="ml-3">⚠️ CLOSED</small>
                </span>
              ) : (
                <Link
                  url={fields.Source}
                  label={fields.Name || fields.Description}
                />
              )}
            </h5>

            <ContactLinks item={item} />
            <ShelterProperties item={item} />

            {fields.Needs && <Note label="Needs" note={fields.Needs} />}
            {fields.Notes && <Note label="Notes" note={fields.Notes} />}
            {fields['Donation needs'] && (
              <Note label="Donation needs" note={fields['Donation needs']} />
            )}
            {fields['Volunteer needs'] && (
              <Note label="Volunteer needs" note={fields['Volunteer needs']} />
            )}
          </li>
        )
      })}
    </ul>
  )
}
