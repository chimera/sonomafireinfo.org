import Calendar from './calendar'
import Logo from './logo'
import Navigation from './navigation'
import PageWrapper from './page-wrapper'
import PropTypes from 'prop-types'
import React from 'react'
import Sponsors from './sponsors'
import { Link } from 'react-router-dom'

HomePage.defaultProps = {}

HomePage.propTypes = {}

export default function HomePage() {
  return (
    <PageWrapper back={false}>
      <div class="w-50 mx-auto text-center">
        <Logo />
      </div>
      <div class="text-muted my-3 text-center">
        <small>
          Up-to-date and verified information regarding the fires in Sonoma
          County powered by a team of volunteers.{' '}
          <Link to="about">More...</Link>
        </small>
      </div>
      <Navigation />
      <Calendar />
      <Sponsors />
    </PageWrapper>
  )
}
