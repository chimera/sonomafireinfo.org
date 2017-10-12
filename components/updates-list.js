const LastUpdated = require('./last-updated')
const Link = require('./link')
const React = require('react')

function UpdatesList({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, key) => {
        const { Description, Source } = item.fields
        const lastUpdated = item.fields['Last Updated']
        return (
          <li className="list-group-item" key={key}>
            <span className="mr-3">🗞</span>
            <span className="float-right">
              {lastUpdated && <LastUpdated date={lastUpdated} />}
            </span>
            <Link url={Source} label={Description} />
          </li>
        )
      })}
    </ul>
  )
}

module.exports = UpdatesList
