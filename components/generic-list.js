import ContactLinks from './contact-links'
import Fuse from 'fuse.js'
import LastUpdated from './last-updated'
import ExternalLink from './external-link'
import Note from './note'
import React from 'react'
import ShelterProperties from './shelter-properties'
import SubSection from './subsection'
import GenericListTitle from './generic-list-title'
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
            <LastUpdated date={item.lastUpdated} />
            <GenericListTitle item={item} />
            <ContactLinks item={item} />
            <ShelterProperties item={item} />
            <Note note={item.quote} />
            <Note label="Needs" note={item.needs} />
            <Note label="Notes" note={item.notes} />
            <Note label="Notas" note={item.notas} />
            <Note label="Donation needs" note={item.donationNeeds} />
            <Note label="Volunteer needs" note={item.volunteerNeeds} />
            <SubSection types={item.type} search={onSearch} />
          </li>
        )
      })}
    </ul>
  )
}
