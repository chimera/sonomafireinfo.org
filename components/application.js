import AboutPage from './about-page'
import AutoScrollTop from './auto-scroll-top'
import CalendarPage from './calendar-page'
import ContactPage from './contact-page'
import ErrorBoundary from './error-boundary'
import HomePage from './home-page'
import MapPage from './map-page'
import PageWrapper from './page-wrapper'
import PropTypes from 'prop-types'
import React from 'react'
import Section from './section'
import ScrollUp from './scroll-up'
import TestimonyPage from './testimony-page'
import Tracker from './tracker'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { resources } from '../config'

export default function Application() {
  return (
    <ErrorBoundary>
      <ScrollUp scrollStepInPx="1000" delayInMs="10" />
      <Router>
        <AutoScrollTop>
          <Route path="/" render={Tracker} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/calendar" component={CalendarPage} />
            <Route path="/testimony" component={TestimonyPage} />
            <Route
              path="/map"
              render={() => (
                <MapPage url="http://calfire-forestry.maps.arcgis.com/apps/webappviewer/index.html?id=38d4bb5734154cbd8c26a4fbb68e2f49" />
              )}
            />
            <Route
              path="/damage-map"
              render={() => (
                <MapPage url="http://calfire-forestry.maps.arcgis.com/apps/PublicInformation/index.html?appid=5bbcbed430ad45e5a38e6be155ef5fec" />
              )}
            />

            <Route
              path="/:id"
              render={({ match }) => (
                <PageWrapper>
                  <Section resource={resources[match.params.id]} />
                </PageWrapper>
              )}
            />
            {/* <Route
              render={props => {
                console.log(props)
                return <Redirect to="/" />
              }}
            /> */}
          </Switch>
        </AutoScrollTop>
      </Router>
    </ErrorBoundary>
  )
}
