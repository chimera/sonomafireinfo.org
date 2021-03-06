import Calendar from './calendar'
import GoogleTranslate from './google-translate'
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
      <div className="w-50 mx-auto text-center">
        <Logo />
        <div className="text-center">
          This site <strong>not</strong> up to date for the Kincade Fire.
          Please refer to us on <a href="https://twitter.com/sonomafireinfo">@sonomafireinfo</a> for updates as the fire develops.
        </div>
      </div>
      <div className="text-muted my-3 text-center">
        <small>
          Up-to-date and verified information regarding the fires in Sonoma
          County powered by a team of volunteers.{' '}
          <Link to="about">More...</Link>
          <br />
          Text your zip code to <strong>888-777</strong> for official local
          government updates.
        </small>
      </div>
      <Navigation />
      <Sponsors />
    </PageWrapper>
  )
}
