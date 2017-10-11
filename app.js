require('babel-polyfill')
require('whatwg-fetch')
require('./styles.scss')

const AddressLink = require('./address-link')
const LastUpdated = require('./last-updated')
const EmailLink = require('./email-link')
const Error = require('./error')
const ErrorBoundary = require('./error-boundary')
const Link = require('./link')
const Loading = require('./loading')
const PhoneLink = require('./phone-link')
const React = require('react')
const ReactDOM = require('react-dom')
const Table = require('./table')

function fetchResources(url, type) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(`RESPONSE from ${type}:`, json)
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
      const news = await fetchResources(this.props.url, this.props.type)
      this.setState({
        ...this.state,
        items: news.items.filter(item => Object.keys(item).length),
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

function ShelterProperties({ fields }) {
  return (
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
  )
}

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

// Important Info
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Important Info"
      url="http://app.sonomafireinfo.com/v2/important_info.json"
      renderer={({ items }) => {
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
      }}
    />
  </ErrorBoundary>,
  document.getElementById('important-info-table')
)

// Updates
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Updates"
      url="http://app.sonomafireinfo.com/v2/recent_news.json"
      renderer={({ items }) => {
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
      }}
    />
  </ErrorBoundary>,
  document.getElementById('recent-news-table')
)

// Volunteer
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Volunteer"
      url="http://app.sonomafireinfo.com/v2/volunteering.json"
      renderer={({ items }) => {
        return (
          <ul className="list-group">
            {items.map((item, key) => {
              const { Name, Needs, Source } = item.fields
              return (
                <li className="list-group-item" key={key}>
                  <h5>
                    <Link url={Source} label={Name} />
                  </h5>
                  <ContactLinks fields={item.fields} />
                  {Needs && (
                    <div className="mt-2 text-muted">
                      <small>
                        <strong className="mr-2">NEEDS:</strong>
                        {Needs}
                      </small>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        )
      }}
    />
  </ErrorBoundary>,
  document.getElementById('volunteer-table')
)

// Donations
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Donations"
      url="http://app.sonomafireinfo.com/v2/donations.json"
      renderer={({ items }) => {
        return (
          <ul className="list-group">
            {items.map((item, key) => {
              const { Name, Needs, Source } = item.fields
              return (
                <li className="list-group-item" key={key}>
                  <h5>
                    <Link url={Source} label={Name} />
                  </h5>
                  <ContactLinks fields={item.fields} />
                  {Needs && (
                    <div className="mt-2 text-muted">
                      <small>
                        <strong className="mr-2">NEEDS:</strong>
                        {Needs}
                      </small>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        )
      }}
    />
  </ErrorBoundary>,
  document.getElementById('donate-table')
)

// Services
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Services"
      url="http://app.sonomafireinfo.com/v2/support_services.json"
      renderer={({ items }) => {
        return (
          <div className="list-group">
            {items.map((item, key) => {
              const fields = item.fields
              return (
                <div className="list-group-item" key={key}>
                  {fields['Last Updated'] && (
                    <small className="float-right text-muted">
                      <LastUpdated date={fields['Last Updated']} />
                    </small>
                  )}
                  <h5>{fields.Name}</h5>
                  <ContactLinks fields={fields} />
                  <div className="text-muted mt-3">
                    <small>
                      <strong className="mr-2">NOTES:</strong>
                      {fields.Notes}
                    </small>
                  </div>
                </div>
              )
            })}
          </div>
        )
      }}
    />
  </ErrorBoundary>,
  document.getElementById('services-table')
)

// Shelters
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Shelters"
      url="http://app.sonomafireinfo.com/v2/shelters.json"
      renderer={({ items }) => {
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
      }}
    />
  </ErrorBoundary>,
  document.getElementById('shelters-table')
)

// Animal shelters
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Animal Shelters"
      url="http://app.sonomafireinfo.com/v2/animals.json"
      renderer={({ items }) => {
        return (
          <div className="list-group">
            {items.map((item, key) => {
              const fields = item.fields
              return (
                <div className="list-group-item" key={key}>
                  {fields['Last Updated'] && (
                    <small className="float-right text-muted">
                      <LastUpdated date={fields['Last Updated']} />
                    </small>
                  )}
                  <h5>{fields.Name}</h5>
                  <ContactLinks fields={fields} />
                </div>
              )
            })}
          </div>
        )
      }}
    />
  </ErrorBoundary>,
  document.getElementById('animal-shelters-table')
)

// Gas Stations
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Gas Stations"
      url="http://app.sonomafireinfo.com/v2/gas_stations.json"
      renderer={({ items }) => {
        return (
          <div className="list-group">
            {items.map((item, key) => {
              const fields = item.fields
              return (
                <div className="list-group-item" key={key}>
                  {fields['Last Updated'] && (
                    <small className="float-right text-muted">
                      <LastUpdated date={fields['Last Updated']} />
                    </small>
                  )}
                  <h5>{fields.Name}</h5>
                  <ContactLinks fields={fields} />
                </div>
              )
            })}
          </div>
        )
      }}
    />
  </ErrorBoundary>,
  document.getElementById('gas-stations-table')
)

// Markets
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Markets"
      url="http://app.sonomafireinfo.com/v2/markets.json"
      renderer={({ items }) => {
        return (
          <div className="list-group">
            {items.map((item, key) => {
              const fields = item.fields
              return (
                <div className="list-group-item" key={key}>
                  {fields['Last Updated'] && (
                    <small className="float-right text-muted">
                      <LastUpdated date={fields['Last Updated']} />
                    </small>
                  )}
                  <h5>{fields.Name}</h5>
                  <ContactLinks fields={fields} />
                </div>
              )
            })}
          </div>
        )
      }}
    />
  </ErrorBoundary>,
  document.getElementById('markets-table')
)

// Pharmacies
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Pharmacies"
      url="http://app.sonomafireinfo.com/v2/pharmacies.json"
      renderer={({ items }) => {
        return (
          <div className="list-group">
            {items.map((item, key) => {
              const fields = item.fields
              return (
                <div className="list-group-item" key={key}>
                  {fields['Last Updated'] && (
                    <small className="float-right text-muted">
                      <LastUpdated date={fields['Last Updated']} />
                    </small>
                  )}
                  <h5>{fields.Name}</h5>
                  <ContactLinks fields={fields} />
                </div>
              )
            })}
          </div>
        )
      }}
    />
  </ErrorBoundary>,
  document.getElementById('pharmacies-table')
)

// Resources
ReactDOM.render(
  <ErrorBoundary>
    <SmartTable
      type="Resources"
      url="http://app.sonomafireinfo.com/v2/resources.json"
      renderer={({ items }) => {
        return (
          <div className="list-group">
            {items.map((item, key) => {
              const fields = item.fields
              return (
                <div className="list-group-item" key={key}>
                  {fields['Last Updated'] && (
                    <small className="float-right text-muted">
                      <LastUpdated date={fields['Last Updated']} />
                    </small>
                  )}
                  <h5>
                    <Link url={fields.Source} label={fields.Name} />
                  </h5>
                  <ContactLinks fields={fields} />
                </div>
              )
            })}
          </div>
        )
      }}
    />
  </ErrorBoundary>,
  document.getElementById('resources-table')
)
