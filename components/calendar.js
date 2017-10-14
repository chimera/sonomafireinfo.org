import React from 'react'
import PropTypes from 'prop-types'

Calendar.defaultProps = {}

Calendar.propTypes = {}

export default function Calendar() {
  return (
    <div class="my-5">
      <h5>Calendar</h5>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrzwXFwNUgHERufQ?backgroundColor=orange&viewControls=on"
        frameBorder="0"
        onWheel={e => e.preventDefault()}
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
    </div>
  )
}
