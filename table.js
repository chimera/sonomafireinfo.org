const CheckMark = require('./check-mark')
const CrossMark = require('./cross-mark')
const LastUpdated = require('./last-updated')
const React = require('react')

function Table({ items, schema }) {
  return (
    <table className="table table-hover table-responsive">
      <Header schema={schema} />
      <tbody>
        {items.map((item, key) => (
          <Row item={item} schema={schema} key={key} />
        ))}
      </tbody>
    </table>
  )
}

function Header({ schema }) {
  return (
    <thead>
      <tr>{schema.map((col, key) => <th key={key}>{col.name}</th>)}</tr>
    </thead>
  )
}

function Row({ item, schema }) {
  const cells = schema.map(col => {
    const column = col.name
    const link = item.fields[col.link]
    const value = item.fields[column]
    return { column, value, link }
  })

  return (
    <tr>
      {cells.map((cell, key) => {
        return (
          <td key={key}>
            <Cell column={cell.column} link={cell.link} value={cell.value} />
          </td>
        )
      })}
    </tr>
  )
}

function Cell({ column, link, value }) {
  if (!value) {
    return null
  }

  if (value && column.toLowerCase() === 'last updated') {
    return <LastUpdated date={value} />
  }

  if (value === true) {
    return <CheckMark />
  }

  if (value === false) {
    return <CrossMark />
  }

  if (link) {
    return (
      <a href={link} target="_blank">
        {value}
      </a>
    )
  }

  return <span>{value}</span>
}
module.exports = Table
