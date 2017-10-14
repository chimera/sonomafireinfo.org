import ContactForm from './contact-form'
import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from './page-wrapper'

ContactPage.defaultProps = {}

ContactPage.propTypes = {}

export default function ContactPage({}) {
  return (
    <PageWrapper>
      <p class="my-3 text-center text-muted">
        General questions? Want to volunteer? Contact us at:
        <br />
        <a href="mailto:sonomafireinfo@gmail.com">sonomafireinfo@gmail.com</a>
      </p>
      <ContactForm />
    </PageWrapper>
  )
}
