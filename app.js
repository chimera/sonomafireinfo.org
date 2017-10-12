require('whatwg-fetch')
require('./styles.scss')

import Application from './components/application'
import React from 'react'
import ReactDOM from 'react-dom'

const resources = [
  {
    id: 'important-info',
    icon: '⚠️',
    title: 'Important Info',
    url: 'http://app.sonomafireinfo.com/v2/important_info.json',
  },
  {
    id: 'updates',
    icon: '🗞',
    title: 'Updates',
    url: 'http://app.sonomafireinfo.com/v2/recent_news.json',
    extraContent() {
      return (
        <p className="lead my-4 text-center">
          <a href="#contact" className="btn btn-success">
            <span className="mr-2">💌</span>
            Send us updated info
          </a>
        </p>
      )
    },
  },
  {
    id: 'volunteer',
    icon: '🤝',
    title: 'Volunteer',
    url: 'http://app.sonomafireinfo.com/v2/volunteering.json',
  },
  {
    id: 'donate',
    icon: '💸',
    title: 'Donate',
    url: 'http://app.sonomafireinfo.com/v2/donations.json',
  },
  {
    id: 'services',
    icon: '👫',
    title: 'Services',
    url: 'http://app.sonomafireinfo.com/v2/support_services.json',
  },
  {
    id: 'shelters',
    icon: '🏠',
    title: 'Shelters',
    url: 'http://app.sonomafireinfo.com/v2/shelters.json',
  },
  {
    // TODO: animal button here...
    id: 'animal-shelters',
    icon: '🐶',
    title: 'Animal Shelters',
    url: 'http://app.sonomafireinfo.com/v2/animals.json',
    extraContent() {
      return (
        <p className="text-center mt-4 mb-5">
          <a
            href="http://animals.sonomafireinfo.com"
            className="btn btn-success"
            target="_blank"
          >
            <span className=" mr-2 ">👀</span>
            Animal Lost & Found
          </a>
        </p>
      )
    },
  },
  {
    id: 'gas-stations',
    icon: '⛽️',
    title: 'Gas Stations',
    url: 'http://app.sonomafireinfo.com/v2/gas_stations.json',
  },
  {
    id: 'markets',
    icon: '🥖',
    title: 'Markets',
    url: 'http://app.sonomafireinfo.com/v2/markets.json',
  },
  {
    id: 'pharmacies',
    icon: '💊',
    title: 'Pharmacies',
    url: 'http://app.sonomafireinfo.com/v2/pharmacies.json',
  },
  {
    id: 'resources',
    icon: '📚',
    title: 'Resources',
    url: 'http://app.sonomafireinfo.com/v2/resources.json',
  },
]

ReactDOM.render(
  <Application resources={resources} />,
  document.getElementById('app-root')
)
