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
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
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
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route
              path="/map"
              render={() => (
                <MapPage url="https://www.google.com/maps/d/embed?mid=1geX3Dfkc3wx3SY1Eqobmh67uSxE" />
              )}
            />
            <Route
              path="/damage-map"
              render={() => (
                <MapPage url="https://api.mapbox.com/styles/v1/robinkraft/cj8nn4lvp7yoq2ro1klhjltw8.html?title=true&access_token=pk.eyJ1Ijoicm9iaW5rcmFmdCIsImEiOiJQLUp2RU9NIn0.B20c6fiHx0NCgfSOE3HYbw#15.64/38.4919/-122.7139/16.6" />
              )}
            />

            <Route
              path="/:id"
              render={({ match }) => (
                <Section resource={resources[match.params.id]} />
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
