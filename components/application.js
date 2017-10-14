import AboutPage from './about-page'
import AutoScrollTop from './auto-scroll-top'
import ContactPage from './contact-page'
import AlertBar from './alert-bar'
import ErrorBoundary from './error-boundary'
import HomePage from './home-page'
import MapPage from './map-page'
import PropTypes from 'prop-types'
import React from 'react'
import Section from './section'
import ScrollUp from './scroll-up'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { resources } from '../config'

Application.defaultProps = {}

Application.propTypes = {}

export default function Application() {
  return (
    <ErrorBoundary>
      <AlertBar />
      <ScrollUp scrollStepInPx="1000" delayInMs="10" />
      <Router>
        <AutoScrollTop>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* TODO: Map... */}
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/map" component={MapPage} />
            <Route
              path="/:id"
              render={({ match }) => (
                <Section resource={resources[match.params.id]} />
              )}
            />
          </Switch>
        </AutoScrollTop>
      </Router>
    </ErrorBoundary>
  )
}
