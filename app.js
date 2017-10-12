require('whatwg-fetch')
require('./styles.scss')

const dataHandler = require('./components/data-handler')
const GenericList = require('./components/generic-list')
const ImportantList = require('./components/important-list')
const React = require('react')
const ReactDOM = require('react-dom')
const SheltersList = require('./components/shelters-list')

// Important Info
const ImportantInfo = dataHandler(ImportantList, {
  type: 'Important Info',
  url: 'http://app.sonomafireinfo.com/v2/important_info.json',
})
ReactDOM.render(
  <ImportantInfo />,
  document.getElementById('important-info-table')
)

// Updates
const Updates = dataHandler(GenericList, {
  type: 'Updates',
  url: 'http://app.sonomafireinfo.com/v2/recent_news.json',
})
ReactDOM.render(<Updates />, document.getElementById('recent-news-table'))

// Volunteer
const Volunteer = dataHandler(GenericList, {
  type: 'Volunteer',
  url: 'http://app.sonomafireinfo.com/v2/volunteering.json',
})
ReactDOM.render(<Volunteer />, document.getElementById('volunteer-table'))

// Donations
const Donations = dataHandler(GenericList, {
  type: 'Donations',
  url: 'http://app.sonomafireinfo.com/v2/donations.json',
})
ReactDOM.render(<Donations />, document.getElementById('donate-table'))

// Services
const Services = dataHandler(GenericList, {
  type: 'Services',
  url: 'http://app.sonomafireinfo.com/v2/support_services.json',
})
ReactDOM.render(<Services />, document.getElementById('services-table'))

// Shelters
const Shelters = dataHandler(SheltersList, {
  type: 'Shelters',
  url: 'http://app.sonomafireinfo.com/v2/shelters.json',
})
ReactDOM.render(<Shelters />, document.getElementById('shelters-table'))

// Animal shelters
const AnimalShelters = dataHandler(GenericList, {
  type: 'Animal Shelters',
  url: 'http://app.sonomafireinfo.com/v2/animals.json',
})
ReactDOM.render(
  <AnimalShelters />,
  document.getElementById('animal-shelters-table')
)

// Gas Stations
const GasStations = dataHandler(GenericList, {
  type: 'Gas Stations',
  url: 'http://app.sonomafireinfo.com/v2/gas_stations.json',
})
ReactDOM.render(<GasStations />, document.getElementById('gas-stations-table'))

// Markets
const Markets = dataHandler(GenericList, {
  type: 'Markets',
  url: 'http://app.sonomafireinfo.com/v2/markets.json',
})
ReactDOM.render(<Markets />, document.getElementById('markets-table'))

// Pharmacies
const Pharmacies = dataHandler(GenericList, {
  type: 'Pharmacies',
  url: 'http://app.sonomafireinfo.com/v2/pharmacies.json',
})
ReactDOM.render(<Pharmacies />, document.getElementById('pharmacies-table'))

// Resources
const Resources = dataHandler(GenericList, {
  type: 'Resources',
  url: 'http://app.sonomafireinfo.com/v2/resources.json',
})
ReactDOM.render(<Resources />, document.getElementById('resources-table'))
