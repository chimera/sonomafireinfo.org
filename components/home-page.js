import Logo from './logo'
import Navigation from './navigation'
import PageWrapper from './page-wrapper'
import PropTypes from 'prop-types'
import React from 'react'

HomePage.defaultProps = {}

HomePage.propTypes = {}

export default function HomePage() {
  return (
    <PageWrapper back={false}>
      <div class="w-50 mx-auto text-center">
        <Logo />
      </div>
      <Navigation />
    </PageWrapper>
  )
}
