import React from 'react'

export const resources = {
  'important-info': {
    icon: '⚠️',
    title: 'Important Info',
    url: 'http://app.sonomafireinfo.com/v2/important_info.json',
  },
  updates: {
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
  volunteer: {
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
              href="http://www.signupgenius.com/tabs/13574D600A1C9E4C35-medical"
              target="_blank"
              className="btn btn-success mr-3"
            >
              <span class="mr-2">👩‍⚕️</span>
              Sonoma Community
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
  donate: {
    icon: '💸',
    title: 'Donate',
    url: 'http://app.sonomafireinfo.com/v2/donations.json',
  },
  services: {
    icon: '👫',
    title: 'Support Services',
    url: 'http://app.sonomafireinfo.com/v2/support_services.json',
  },
  shelters: {
    icon: '🏠',
    title: 'Shelters',
    url: 'http://app.sonomafireinfo.com/v2/shelters.json',
  },
  'animal-shelters': {
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
  'gas-stations': {
    icon: '⛽️',
    title: 'Gas Stations',
    url: 'http://app.sonomafireinfo.com/v2/gas_stations.json',
  },
  markets: {
    icon: '🥖',
    title: 'Markets',
    url: 'http://app.sonomafireinfo.com/v2/markets.json',
  },
  pharmacies: {
    icon: '💊',
    title: 'Pharmacies',
    url: 'http://app.sonomafireinfo.com/v2/pharmacies.json',
  },
  resources: {
    icon: '📚',
    title: 'Resources',
    url: 'http://app.sonomafireinfo.com/v2/resources.json',
  },
  stats: {
    icon: '📈',
    title: 'Stats',
    url: 'http://app.sonomafireinfo.com/v2/stats.json',
  },
}

export const sections = [
  {
    links: [
      {
        path: 'important-info',
        title: 'Important Info',
        icon: '⛑',
      },
      {
        path: 'map',
        title: 'Evac & Resources Map',
        icon: '🌎',
      },
      {
        path: 'damage-map',
        title: 'Damage Map',
        icon: '🔥',
      },
    ],
  },
  {
    heading: 'Resources',
    links: [
      {
        path: 'shelters',
        title: 'Shelter',
        icon: '🏠',
      },
      {
        path: 'animal-shelters',
        title: 'Animal Shelter',
        icon: '🐶',
      },
      {
        path: 'gas-stations',
        title: 'Gas Stations',
        icon: '⛽️',
      },
      {
        path: 'markets',
        title: 'Markets',
        icon: '🥖',
      },
      {
        path: 'pharmacies',
        title: 'Pharmacies',
        icon: '💊',
      },
      {
        path: 'services',
        title: 'Support Services',
        icon: '👫',
      },
      {
        path: 'resources',
        title: 'General Resources',
        icon: '📚',
      },
    ],
  },
  {
    heading: 'Help',
    links: [
      {
        path: 'volunteer',
        title: 'Volunteer',
        icon: '🤝',
      },
      {
        path: 'donate',
        title: 'Donate',
        icon: '💸',
      },
      {
        url: 'http://www.sonomacounty.recovers.org/',
        title: 'SoCo Recovery Network',
        icon: '🎁',
      },
    ],
  },
  {
    heading: 'News & Information',
    links: [
      {
        path: 'updates',
        title: 'Updates',
        icon: '🗞',
      },
      {
        path: 'stats',
        title: 'Stats',
        icon: '📈',
      },
      {
        url: 'https://twitter.com/sonomafireinfo',
        title: '@sonomafireinfo on Twitter',
        icon: '🐥',
      },
      {
        url: 'https://opszero.typeform.com/to/ZmQUiq',
        title: 'Signup for text updates',
        icon: '📞',
      },
    ],
  },
  {
    heading: 'SFI.com Related',
    links: [
      {
        path: 'contact',
        title: 'Contact Us',
        icon: '💌',
      },
      {
        path: 'about',
        title: 'About Us',
        icon: 'ℹ️',
      },
    ],
  },
]
