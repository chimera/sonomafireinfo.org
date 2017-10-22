import Calendar from './calendar'
import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from './page-wrapper'

CalendarPage.defaultProps = {}

CalendarPage.propTypes = {}

export default function CalendarPage({}) {
  return (
    <PageWrapper>
      <Calendar />
    </PageWrapper>
  )
}
