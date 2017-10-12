const ContactLinks = require('./contact-links')
const Fuse = require('fuse.js')
const LastUpdated = require('./last-updated')
const Link = require('./link')
const React = require('react')

function GenericList({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, key) => {
        const fields = item.fields
        return (
          <li className="list-group-item" key={key}>
            {fields['Last Updated'] && (
              <small className="float-right text-muted">
                <LastUpdated date={fields['Last Updated']} />
              </small>
            )}
            <h5>
              <Link url={fields.Source} label={fields.Name} />
            </h5>
            <ContactLinks fields={fields} />
            {fields.Needs && (
              <div className="mt-2 text-muted">
                <small>
                  <strong className="mr-2">NEEDS:</strong>
                  {fields.Needs}
                </small>
              </div>
            )}
            {fields.Notes && (
              <div className="mt-2 text-muted">
                <small>
                  <strong className="mr-2">NOTES:</strong>
                  {fields.Notes}
                </small>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

module.exports = GenericList
