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
  return (
    <div className="mt-2">
      <small>
        {item.fields.Address && (
          <span className="mr-3">
            <span className="mr-2">📍</span>
            <AddressLink address={item.fields.Address} />
          </span>
        )}
        {item.fields.Phone && (
          <span className="mr-3">
            <span className="mr-2">📞</span>
            <PhoneLink number={item.fields.Phone} />
          </span>
        )}
        {item.fields.Email && (
          <span className="mr-3">
            <span className="mr-2">✉️</span>
            <EmailLink email={item.fields.Email} />
          </span>
        )}
      </small>
    </div>
  )
}
