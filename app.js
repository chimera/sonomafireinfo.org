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

function Error() {
  return (
    <p className="lead text-center text-danger">
      <i className="fa fa-warning fa-spin mr-3" /> Sorry, we had an issue
      loading results, please try again in a few moments.
    </p>
  )
}

function Loading() {
  return (
    <p className="lead text-center">
      <i className="fa fa-spinner fa-spin mr-3" /> Loading...
    </p>
  )
}

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
    return <DateField date={value} />
  }

  if (value === true) {
    return <Check />
  }

  if (value === false) {
    return <Cross />
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

function DateField({ date }) {
  date = new Date(date)
  return (
    <time title={date.toString()}>
      {`${date.getMonth() +
        1}/${date.getDate()} at ${date.getHours()}:${date.getMinutes()}`}
    </time>
  )
}

function Check() {
  return <span>✅</span>
}

function Cross() {
  return <span>❌</span>
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }

  componentDidCatch(error, info) {
    this.setState({ error: true })
    console.error(error, info)
  }

  render() {
    if (this.state.error) {
      return <Error />
    }

    return this.props.children
  }
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
      this.setState({
        ...this.state,
        // fields: news.fields,
        items: news.items,
        error: null,
        loading: false,
      })
    } catch (error) {
      this.setState({ ...this.state, error: error })
      console.error('ERROR:', error)
    }
  }

  render() {
    if (this.state.error) {
      return <Error />
    }

    if (this.state.loading) {
      return <Loading />
    }

    const renderer = this.props.renderer
    if (renderer) {
      return renderer({
        items: this.state.items,
      })
    }

    // Default to table renderer
    return <Table items={this.state.items} schema={this.props.schema} />
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      url="http://app.sonomafireinfo.com/v2/recent_news.json"
      schema={[
        { name: 'Description', link: 'Source' },
        { name: 'Last Updated', type: 'date' },
      ]}
    />
  </ErrorBoundary>,
  document.getElementById('recent-news-table')
)

ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      url="http://app.sonomafireinfo.com/v2/resources.json"
      schema={[{ name: 'Name', link: 'Source' }, { name: 'Phone' }]}
    />
  </ErrorBoundary>,
  document.getElementById('resources-table')
)

ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      url="http://app.sonomafireinfo.com/v2/gas_stations.json"
      schema={[
        { name: 'Name' },
        { name: 'Address' },
        { name: 'Phone' },
        { name: 'Last Updated', type: 'date' },
      ]}
    />
  </ErrorBoundary>,
  document.getElementById('gas-stations-table')
)

ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      url="http://app.sonomafireinfo.com/v2/markets.json"
      schema={[
        { name: 'Name' },
        { name: 'Address' },
        { name: 'Phone' },
        { name: 'Last Updated', type: 'date' },
      ]}
    />
  </ErrorBoundary>,
  document.getElementById('markets-table')
)

// ReactDOM.render(
//   <SmartTable
//     url="http://app.sonomafireinfo.com/v2/pharmacies.json"
//     schema={[
//       { name: 'Name' },
//       { name: 'Address' },
//       { name: 'Phone' },
//       { name: 'Last Updated', type: 'date' },
//     ]}
//   />,
//   document.getElementById('pharmacies-table')
// )

// TODO: make a different structure
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      url="http://app.sonomafireinfo.com/v2/shelters.json"
      renderer={({ items }) => {
        return (
          <div className="list-group">
            {items.map((item, key) => {
              const fields = item.fields
              return (
                <div className="list-group-item" key={key}>
                  {fields['Last Updated'] && (
                    <small className="float-right text-muted">
                      <DateField date={fields['Last Updated']} />
                    </small>
                  )}
                  <h5>{fields.Name}</h5>
                  <div className="mt-2">
                    <small>
                      {fields.Address && (
                        <span className="mr-3">
                          <i className="fa fa-home mr-2" />
                          {fields.Address}
                        </span>
                      )}
                      {fields.Phone && (
                        <span className="mr-3">
                          <i className="fa fa-phone mr-2" />
                          {fields.Phone}
                        </span>
                      )}
                      {fields.Email && (
                        <span className="mr-3">
                          <i className="fa fa-envelope-o mr-2" />
                          {fields.Email}
                        </span>
                      )}
                    </small>
                  </div>
                  <div className="mt-2">
                    <small>
                      {fields['At capacity'] && (
                        <span className="mr-3" title="At capacity">
                          <span className="mr-2">❌</span> At Capacity
                        </span>
                      )}
                      {fields['Elder Care'] && (
                        <span className="mr-3" title="Has elder care">
                          <span className="mr-2">👵</span> Elder Care
                        </span>
                      )}
                      {fields['Hablan español'] && (
                        <span className="mr-3" title="Hablan Español">
                          <span className="mr-2">🇲🇽</span> Hablan Español
                        </span>
                      )}
                      {fields['Red Cross Facility'] && (
                        <span className="mr-3" title="Red Cross Facility">
                          <span className="mr-2">🏥</span> Red Cross Facility
                        </span>
                      )}
                    </small>
                  </div>
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
      }}
    />
  </ErrorBoundary>,
  document.getElementById('shelters-table')
)

ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      url="http://app.sonomafireinfo.com/v2/animals.json"
      schema={[
        { name: 'Name' },
        { name: 'Address' },
        { name: 'Phone' },
        { name: 'Last Updated', type: 'date' },
      ]}
    />
  </ErrorBoundary>,
  document.getElementById('animal-shelters-table')
)
