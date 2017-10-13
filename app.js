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
        <p className="my-4 text-center">
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
    extraContent() {
      return (
        <div className="my-4 text-center">
          <p className="text-muted mb-2">
            <small>Medical professional? Signup to volunteer:</small>
          </p>
          <p>
            <a
              href="http://www.signupgenius.com/go/10C0F44AAA829AAF85-alllevels"
              target="_blank"
              className="btn btn-success mr-3"
            >
              <span class="mr-2">👩‍⚕️</span>
              Sonoma Community Response
            </a>
            <a
              href="https://www.signupgenius.com/index.cfm?go=s.signup&urlid=508044fa8a62da1fe3-sonomamarin"
              target="_blank"
              className="btn btn-info"
            >
              <span class="mr-2">👩‍⚕️</span>
              Petaluma
            </a>
          </p>
        </div>
      )
    },
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
        <p className="my-4 text-center">
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
  {
    id: 'stats',
    icon: '📈',
    title: 'Stats',
    url: 'http://app.sonomafireinfo.com/v2/stats.json',
  },
]

ReactDOM.render(
  <Application resources={resources} />,
  document.getElementById('app-root')
)
