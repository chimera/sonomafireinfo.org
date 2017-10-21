import dataHandler from './data-handler'
import GenericList from './generic-list'
import PropTypes from 'prop-types'
import PageWrapper from './page-wrapper'
import React from 'react'

AboutPage.defaultProps = {}

AboutPage.propTypes = {}

export default function AboutPage({}) {
  const team = {
    icon: '🕺',
    title: 'Team',
    url: 'http://app.sonomafireinfo.com/v2/team_members.json',
  }
  const List = dataHandler(GenericList, team)

  return (
    <PageWrapper>
      <h1>About Us</h1>
      <p class="lead">
        SonomaFireInfo.com is built by a team of (awesome) volunteers throughout
        Sonoma County and beyond who came together to help those affected by the
        Sonoma/Napa/Mendocino County fires.
      </p>
      <p>
        The goal of sonomafireinfo.com is to collect, verify, and publish
        up-to-date information from as many resources as possible. However, we
        are not a volunteer or donation processing site. If you are able to help
        in any way, please use our site to find a verified match for your
        capabilities or goods.
      </p>
      <p>
        The headquarters (and birthplace) of SFI.com is{' '}
        <a href="http://www.chimeraarts.org/" target="_blank">
          Chimera Arts & Makerspace
        </a>{' '}
        the first community makerspace north of San Francisco.
      </p>
      <p>
        Our team hopes to make an positive impact on the lives of fire victims
        and to provide the most up-to-date information about the fire and
        related topics in existence.
      </p>
      <h3 className="mt-5">Core Team</h3>
      <p>An (alphabetical) list of the core team.</p>
      <ul>
        <li>Abhi Yerra</li>
        <li>
          <a href="http://danawoodman.com" target="_blank">
            Dana Woodman
          </a>
        </li>
        <li>Michael Doherty</li>
        <li>Nicole Clark</li>
        <li>R. Tyler Croy</li>
      </ul>
      <h3 className="mt-5">Full Team</h3>
      <p>A (nearly) complete list of all our superdupercool volunteers:</p>
      <List />
      <p className="mt-3">
        Volunteered but aren't on this list?{' '}
        <a href="mailto:sonomafireinfo@gmail.com">Contact us</a>
      </p>
      <h3 className="mt-5">Technical Notes</h3>
      <p>
        SonomaFireInfo.com is built using a combination of tools, including:
      </p>
      <ul>
        <li>
          <strong>React/Bootstrap</strong> - Frontend tooling to create a mobile
          friendly, fast client UI.
        </li>
        <li>
          <strong>AirTable</strong> - Our collaborative information database
          that represents the content on the site.
        </li>
        <li>
          <strong>Ruby on Rails</strong> - API server that takes AirTable tables
          and turns them into JSON endpoints
        </li>
        <li>
          <strong>Github Pages</strong> - Hosting of frontend static assets.
        </li>
        <li>
          <strong>Google App Engine</strong> - Hosting of API services.
        </li>
        <li>
          <strong>Twilio</strong> - Real-time text message notifications of
          current conditions.
        </li>
        <li>
          <strong>Typeform</strong> - To subscribe users to text updates
        </li>
      </ul>
      <p>
        Source code for this website can be found{' '}
        <a href="https://github.com/chimera/sonomafireinfo.org" target="_blank">
          here
        </a>.
      </p>
    </PageWrapper>
  )
}
