const ContactLinks = require('./contact-links')
const LastUpdated = require('./last-updated')
const React = require('react')
const ShelterProperties = require('./shelter-properties')

function SheltersList({ items }) {
  return (
    <div className="list-group">
      {items.map((item, key) => {
        const fields = item.fields
        return (
          <div className="list-group-item" key={key}>
            {fields['Last Updated'] && (
              <span className="float-right">
                <LastUpdated date={fields['Last Updated']} />
              </span>
            )}
            <h5>
              {fields.Closed ? (
                <span>
                  <del>{fields.Name}</del>
                  <small className="ml-3">⚠️ CLOSED</small>
                </span>
              ) : (
                fields.Name
              )}
            </h5>
            <ContactLinks fields={fields} />
            <ShelterProperties fields={fields} />
            {fields['Donation needs'] && (
              <div className="mt-3 text-muted">
                <small>
                  <strong className="mr-3 text-uppercase">
                    Donation Needs:
                  </strong>
                  {fields['Donation needs']}
                </small>
              </div>
            )}
            {fields['Volunteer needs'] && (
              <div className="mt-2 text-muted">
                <small>
                  <strong className="mr-2 text-uppercase">
                    Volunteer Needs:
                  </strong>
                  {fields['Volunteer needs']}
                </small>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

module.exports = SheltersList
