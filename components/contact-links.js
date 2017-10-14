import AddressLink from './address-link'
import EmailLink from './email-link'
import PhoneLink from './phone-link'
import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './prop-types'

ContactLinks.defaultProps = {}

ContactLinks.propTypes = {
  item: Item,
}

export default function ContactLinks({ item }) {
  const empty = !Boolean(Object.keys(item).length)
  if (!item || empty) {
    return null
  }

  return (
    <div className="mt-2">
      <small>
        {item.address && (
          <span className="mr-3">
            <span className="mr-2">📍</span>
            <AddressLink address={item.address} />
          </span>
        )}
        {item.phone && (
          <span className="mr-3">
            <span className="mr-2">📞</span>
            <PhoneLink number={item.phone} />
          </span>
        )}
        {item.email && (
          <span className="mr-3">
            <span className="mr-2">✉️</span>
            <EmailLink email={item.email} />
          </span>
        )}
      </small>
    </div>
  )
}
