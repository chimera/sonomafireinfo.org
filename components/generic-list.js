import ContactLinks from './contact-links'
import Fuse from 'fuse.js'
import LastUpdated from './last-updated'
import ExternalLink from './external-link'
import Note from './note'
import React from 'react'
import ShelterProperties from './shelter-properties'
import SubSection from './subsection'
import PropTypes from 'prop-types'
import { Item } from './prop-types'

GenericList.defaultProps = {}

GenericList.propTypes = {
  items: PropTypes.arrayOf(Item),
  query: PropTypes.string,
  onSearch: PropTypes.func,
}

export default function GenericList({ items, query, onSearch }) {
  if (query && !items.length) {
    return (
      <p className="text-warning my-4">
        <span class="mr-2">⚠️</span>
        No results matched your search...
      </p>
    )
  }
  return (
    <ul className="list-group">
      {items.map((item, key) => {
        return (
          <li className="list-group-item" key={key}>
            {item.lastUpdated && (
              <small className="float-md-right text-muted ml-md-1">
                <LastUpdated date={item.lastUpdated} />
              </small>
            )}

            <div>
              {item.priority && <span class="mr-2">⚠️</span>}
              {item.closed ? (
                <span>
                  <del>{item.name}</del>
                  <small className="ml-3">⚠️ CLOSED</small>
                </span>
              ) : (
                <ExternalLink
                  url={item.website || item.source || item.facebookLink}
                >
                  {item.name || item.description}
                </ExternalLink>
              )}
              {item.data && <strong class="ml-3">{item.data}</strong>}
            </div>

            <ContactLinks item={item} />
            <ShelterProperties item={item} />

            {item.quote && <Note note={item.quote} />}
            {item.needs && <Note label="Needs" note={item.needs} />}
            {item.notes && <Note label="Notes" note={item.notes} />}
            {item.donationNeeds && (
              <Note label="Donation needs" note={item.donationNeeds} />
            )}
            {item.volunteerNeeds && (
              <Note label="Volunteer needs" note={item.volunteerNeeds} />
            )}
            {item.type && <SubSection types={item.type} search={onSearch} />}
          </li>
        )
      })}
    </ul>
  )
}
