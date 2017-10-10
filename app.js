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
      error: null,
      loading: false,
      items: [],
    }
  }

  async componentWillMount() {
    this.setState({ ...this.state, error: null, loading: true })
    try {
      const news = await fetchResources(this.props.url)
      this.setState({ ...this.state, items: news, error: null, loading: false })
    } catch (error) {
      this.setState({ ...this.state, error: error })
      console.error('ERROR:', error)
    }
  }

  render() {
    return (
      <Table
        error={this.state.error}
        items={this.state.items}
        loading={this.state.loading}
      />
    )
  }
}

function Table({ error, loading, items }) {
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

  const columns = Object.values(items[0].column_mappings)
  return (
    <table className="table table-hover">
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

function formatCell(col, value) {
  // Date
  if (col.toLowerCase() === 'last updated') {
    const date = new Date(value)
    return `${date.getMonth() +
      1}/${date.getDate()} at ${date.getHours()}:${date.getMinutes()}`
  }

  return value
}

function Row({ columns, item }) {
  return (
    <tr>
      {columns.map((col, key) => {
        const cell = formatCell(col, item.fields[col])
        return <td key={key}>{cell}</td>
      })}
    </tr>
  )
}

ReactDOM.render(
  <SmartTable url="http://app.tubbsfireinfo.com/recent_news.json" />,
  document.getElementById('resource-list')
)

ReactDOM.render(
  <SmartTable url="http://app.tubbsfireinfo.com/gas_stations.json" />,
  document.getElementById('gas-stations')
)

ReactDOM.render(
  <SmartTable url="http://app.tubbsfireinfo.com/markets.json" />,
  document.getElementById('markets')
)
