const Link = require('./link')
const PhoneLink = require('./phone-link')
const React = require('react')

function ImportantTable({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, key) => {
        const { Name, Phone, Source } = item.fields
        return (
          <li className="list-group-item" key={key}>
            <span className="mr-3">⚠️</span>
            <span className="float-right">
              {Phone && <PhoneLink number={Phone} />}
            </span>
            <Link url={Source} label={Name} />
          </li>
        )
      })}
    </ul>
  )
}

module.exports = ImportantTable
