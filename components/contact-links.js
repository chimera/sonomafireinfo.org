const AddressLink = require('./address-link')
const EmailLink = require('./email-link')
const PhoneLink = require('./phone-link')
const React = require('react')

function ContactLinks({ fields }) {
  return (
    <div className="mt-2">
      <small>
        {fields.Address && (
          <span className="mr-3">
            <span className="mr-2">📍</span>
            <AddressLink address={fields.Address} />
          </span>
        )}
        {fields.Phone && (
          <span className="mr-3">
            <span className="mr-2">📞</span>
            <PhoneLink number={fields.Phone} />
          </span>
        )}
        {fields.Email && (
          <span className="mr-3">
            <span className="mr-2">✉️</span>
            <EmailLink email={fields.Email} />
          </span>
        )}
      </small>
    </div>
  )
}

module.exports = ContactLinks
