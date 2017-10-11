require('whatwg-fetch')
require('./styles.scss')

const React = require('react')
const ReactDOM = require('react-dom')

function fetchResources(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log('RESPONSE:', json)
        resolve(json)
      })
      .catch(error => {
        reject(error)
        console.log('ERROR:', error)
      })
  })
}

class SmartTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: [],
      error: null,
      loading: false,
      items: [],
    }
  }

  async componentWillMount() {
    this.setState({ ...this.state, error: null, loading: true })
    try {
      const news = await fetchResources(this.props.url)
      this.setState({ ...this.state, fields: news.fields, items: news.items, error: null, loading: false })
    } catch (error) {
      this.setState({ ...this.state, error: error })
      console.error('ERROR:', error)
    }
  }

  render() {
    return (
      <Table
        fields={this.state.fields}
        error={this.state.error}
        items={this.state.items}
        loading={this.state.loading}
      />
    )
  }
}

function Table({ error, loading, fields, items }) {
  if (error) {
    return (
      <p className="lead text-center text-danger">
        <i className="fa fa-warning fa-spin mr-3" /> Sorry, we had an issue
        loading results, please try again in a few moments.
      </p>
    )
  }

  if (loading) {
    return (
      <p className="lead text-center">
        <i className="fa fa-spinner fa-spin mr-3" /> Loading...
      </p>
    )
  }

  const columns = Object.values(fields)
  return (
    <table className="table table-hover table-responsive">
      <thead>
        <tr>{columns.map((col, key) => <th key={key}>{col}</th>)}</tr>
      </thead>
      <tbody>
        {items.map((item, key) => (
          <Row item={item} columns={columns} key={key} />
        ))}
      </tbody>
    </table>
  )
}

function Cell({ column, value }) {
  if (!value) {
    return null
  }

  if (column.toLowerCase() === 'last updated' && value) {
    const date = new Date(value)
    return (
      <span>{`${date.getMonth() +
        1}/${date.getDate()} at ${date.getHours()}:${date.getMinutes()}`}</span>
    )
  }

  if (value === true) {
    return <span>✅</span>
  }

  if (value === false) {
    return <span>❌</span>
  }

  if (column.toLowerCase() === 'source') {
    return (
      <a href={value} target="_blank">
        View source
      </a>
    )
  }

  return <span>{value}</span>
}

function Row({ columns, item }) {
  return (
    <tr>
      {columns.map((col, key) => {
        return (
          <td key={key}>
            <Cell column={col} value={item.fields[col]} />
          </td>
        )
      })}
    </tr>
  )
}

ReactDOM.render(
  <SmartTable url="http://app.sonomafireinfo.com/recent_news.json" />,
  document.getElementById('resource-table')
)
ReactDOM.render(
  <SmartTable url="http://app.sonomafireinfo.com/gas_stations.json" />,
  document.getElementById('gas-stations-table')
)

ReactDOM.render(
  <SmartTable url="http://app.sonomafireinfo.com/markets.json" />,
  document.getElementById('markets-table')
)

ReactDOM.render(
  <SmartTable url="http://app.sonomafireinfo.com/shelters.json" />,
  document.getElementById('shelters-table')
)

ReactDOM.render(
  <SmartTable url="http://app.sonomafireinfo.com/animals.json" />,
  document.getElementById('animal-shelters-table')
)
