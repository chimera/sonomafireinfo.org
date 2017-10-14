import React from 'react'
import PropTypes from 'prop-types'

ContactForm.defaultProps = {}

ContactForm.propTypes = {}

export default function ContactForm({}) {
  return (
    <div>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrS4LGsCBTMULwBk?backgroundColor=orange"
        frameBorder="0"
        onWheel={e => e.preventDefault()}
        width="100%"
        height="998"
        style={{ background: 'transparent', border: '0 none' }}
      />
      <div className="my-5 text-center">
        <small>
          Trouble filling out the form? Email us instead at:{' '}
          <a href="mailto:sonomafireinfo@gmail.com">sonomafireinfo@gmail.com</a>
        </small>
      </div>
    </div>
  )
}
